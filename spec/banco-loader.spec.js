// TEAM_007 — spec do carregador sob demanda do banco de questões
describe('BancoLoader', () => {
  let BancoLoader, scriptsInjetados;

  // document stub: captura os <script> injetados e expõe head.appendChild
  function novoCtx() {
    scriptsInjetados = [];
    return carregarModulos(['js/banco-loader.js'], {
      document: {
        createElement: (tag) => ({ tagName: tag, src: '', onload: null, onerror: null }),
        head: { appendChild: (tag) => { scriptsInjetados.push(tag); } }
      }
    });
  }

  it('injeta <script src="js/banco-questoes.js"> ao carregar', async () => {
    const ctx = novoCtx();
    BancoLoader = ctx.pega('BancoLoader');
    expect(BancoLoader.pronto()).toBe(false);           // banco ainda não existe
    const p = BancoLoader.carregar();
    expect(scriptsInjetados.length).toBe(1);            // um <script> injetado
    expect(scriptsInjetados[0].src).toBe('js/banco-questoes.js');
    scriptsInjetados[0].onload();                       // simula o script ter executado
    await p;                                            // resolve sem erro
  });

  it('é idempotente: chamadas seguidas dividem a mesma promessa', () => {
    const ctx = novoCtx();
    BancoLoader = ctx.pega('BancoLoader');
    const p1 = BancoLoader.carregar();
    const p2 = BancoLoader.carregar();
    expect(p1).toBe(p2);                                // mesma promessa
    expect(scriptsInjetados.length).toBe(1);            // um único <script>
  });

  it('resolve na hora se o banco já está carregado', async () => {
    const ctx = novoCtx();
    BancoLoader = ctx.pega('BancoLoader');
    ctx.roda('var BancoQuestoes = [];');                // simula banco já no ar
    expect(BancoLoader.pronto()).toBe(true);
    await expectAsync(BancoLoader.carregar()).toBeResolved();
    expect(scriptsInjetados.length).toBe(0);            // nem injeta script
  });

  it('permite nova tentativa depois de falha de rede', async () => {
    const ctx = novoCtx();
    BancoLoader = ctx.pega('BancoLoader');
    const p = BancoLoader.carregar();
    scriptsInjetados[0].onerror();                      // simula falha de download
    await expectAsync(p).toBeRejected();
    const p2 = BancoLoader.carregar();                  // tenta de novo
    expect(scriptsInjetados.length).toBe(2);            // injetou um novo <script>
    scriptsInjetados[1].onload();
    await expectAsync(p2).toBeResolved();
  });
});
