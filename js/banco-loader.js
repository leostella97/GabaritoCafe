/* ============================================================
   GABARITO CAFÉ — js/banco-loader.js
   Carregador sob demanda do banco de questões (~15 MB de JS).
   Antes o arquivo era um <script> bloqueante no index.html:
   o navegador parava TUDO para ler/compilar 15 MB antes da
   primeira pintura. Agora o banco entra por script injetado:

   - App.iniciar() dispara carregar() em background logo após o
     boot (o usuário ainda está olhando o login/dashboard);
   - os pontos que USAM BancoQuestoes fazem `await` no carregar()
     ou re-renderizam quando ele termina — nunca dá ReferenceError;
   - o sw.js continua com o arquivo no precache → offline ok.

   TEAM_007: arquivo novo — auditoria de desempenho.
   ============================================================ */

// Objeto global do carregador do banco
const BancoLoader = {

  _promessa: null,                                // promessa única do carregamento (SSOT)

  // O banco já está disponível? (const BancoQuestoes existe?)
  pronto() {
    return typeof BancoQuestoes !== 'undefined';  // script já executou?
  },

  // Garante o banco carregado; resolve quando BancoQuestoes existir.
  // Idempotente: chamadas repetidas compartilham a mesma promessa.
  carregar() {
    if (this.pronto()) return Promise.resolve();  // já carregou antes
    if (!this._promessa) {                        // primeira chamada → injeta o script
      this._promessa = new Promise((ok, erro) => {
        const tag = document.createElement('script'); // <script> dinâmico
        tag.src = 'js/banco-questoes.js';         // arquivo grande sob demanda
        tag.onload = () => ok();                  // rodou → BancoQuestoes existe
        tag.onerror = () => {                     // falhou (rede ruim?)
          this._promessa = null;                  // permite tentar de novo
          erro(new Error('banco_questoes_falhou')); // propaga a falha
        };
        document.head.appendChild(tag);           // dispara download + execução
      });
    }
    return this._promessa;                        // compartilha a mesma promessa
  }
};
