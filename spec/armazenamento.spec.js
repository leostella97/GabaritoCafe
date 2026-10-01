// TEAM_007 — spec da camada de armazenamento (localStorage)
describe('Armazenamento', () => {
  let Armazenamento, ctx;

  beforeEach(() => {
    ctx = carregarModulos(['js/armazenamento.js']);     // storage limpo a cada spec
    Armazenamento = ctx.pega('Armazenamento');
  });

  it('salva e lê objetos em round-trip (JSON)', () => {
    const dado = { nome: 'café', itens: [1, 2, 3], ok: true };
    expect(Armazenamento.salvar('gc_teste', dado)).toBe(true);
    expect(Armazenamento.ler('gc_teste', null)).toEqual(dado);
  });

  it('devolve o padrão quando a chave não existe', () => {
    expect(Armazenamento.ler('inexistente', [])).toEqual([]);
    expect(Armazenamento.ler('inexistente', { a: 1 })).toEqual({ a: 1 });
  });

  it('devolve o padrão quando o JSON está corrompido', () => {
    ctx.localStorage._store['gc_corrompido'] = '{json quebrado,,,';
    expect(Armazenamento.ler('gc_corrompido', 'padrao')).toBe('padrao');
  });

  it('remove chaves', () => {
    Armazenamento.salvar('gc_x', 1);
    Armazenamento.remover('gc_x');
    expect(Armazenamento.ler('gc_x', null)).toBe(null);
  });
});
