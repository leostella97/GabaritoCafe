/* ============================================================
   GABARITO CAFÉ — js/revisao.js
   Tela de Revisão: junta TODAS as questões que o usuário errou
   (em qualquer simulado) e ainda não acertou depois. Oferece:
   - "Nova revisão": monta um simulado só com essas questões;
   - "Detalhes": lista cada questão com enunciado, gabarito,
     explicação, pegadinha e link de aula no YouTube;
   - "Lembrar em": checkboxes de 3/5/7/30 dias — passado o
     prazo, o site lembra o usuário de revisar (torrada ao
     entrar + sino no item do menu).

   TEAM_002: arquivo novo — tela de revisão e lembretes.
   ============================================================ */

// Objeto global da tela de revisão
const RevisaoUI = {

  // Opções de "lembrar em" (em dias), como o usuário pediu
  PRAZOS: [3, 5, 7, 30],                          // TEAM_002: intervalos do lembrete

  // Se a lista de detalhes está aberta na tela agora
  detalhesAberto: false,                          // TEAM_002: estado do botão "Detalhes"

  // ---------- Lembretes (localStorage) ----------

  // Chave do localStorage onde os lembretes do usuário atual ficam
  chaveLembretes() {
    return 'gc_lembretes_' + Auth.idAtual();      // TEAM_002: um lembrete por usuário/visitante
  },

  // Lê a lista de lembretes: [{ dias, revisarEm }] (revisarEm = timestamp em ms)
  lembretes() {
    return Armazenamento.ler(this.chaveLembretes(), []); // TEAM_002: lê ou lista vazia
  },

  // Devolve só os lembretes cujo prazo já passou
  vencidos() {
    const agora = Date.now();                     // instante atual
    return this.lembretes().filter(l => l.revisarEm <= agora); // TEAM_002: prazo chegou?
  },

  // Liga/desliga o lembrete de N dias (o checkbox espelha o que está salvo)
  alternarLembrete(dias, ligado) {
    let lista = this.lembretes();                 // lembretes atuais
    if (ligado) {                                 // marcou o checkbox
      lista.push({ dias: dias, revisarEm: Date.now() + dias * 86400000 }); // TEAM_002: agenda o lembrete
      App.torrada(T('rev_toast_lembrete', { n: dias }), 'sucesso');        // confirma
    } else {                                      // desmarcou o checkbox
      lista = lista.filter(l => l.dias !== dias); // TEAM_002: cancela o lembrete desse prazo
      App.torrada(T('rev_toast_lembrete_off', { n: dias }));               // avisa
    }
    Armazenamento.salvar(this.chaveLembretes(), lista); // grava a lista nova
    this.atualizarBadge();                        // atualiza o sino do menu
  },

  // ---------- Questões pendentes (erradas e ainda não corrigidas) ----------

  // Monta a lista de questões que continuam erradas na última vez que apareceram.
  // Regra: percorre o histórico em ordem; cada resultado marca as erradas como
  // pendentes e, quando o resultado sabe quais ids foram tentados (campo
  // idsPerguntas, TEAM_002), quem não está nas erradas sai da pendência.
  pendentes() {
    const id = Auth.idAtual();                    // quem está usando (conta ou visitante)
    if (!id) return [];                           // sem sessão, sem revisão
    const historico = Armazenamento.ler('gc_resultados_' + id, []); // histórico de simulados
    const mapa = new Map();                       // id da questão → registro {erros, aindaErrada, foto}

    for (const r of historico) {                  // percorre os resultados em ordem (mais velho → mais novo)
      const erradasIds = new Set((r.erradas || []).map(item => item.id)); // ids errados nesse simulado
      for (const item of (r.erradas || [])) {     // cada questão errada entra/continua pendente
        let reg = mapa.get(item.id);              // registro acumulado da questão
        if (!reg) {                               // primeira vez que essa questão erra
          reg = { id: item.id, erros: 0, aindaErrada: false, foto: item }; // cria o registro
          mapa.set(item.id, reg);                 // guarda no mapa
        }
        reg.erros += 1;                           // mais um erro dessa questão
        reg.aindaErrada = true;                   // última aparição foi erro → pendente
        reg.foto = item;                          // foto mais recente (com explicação etc.)
      }
      // Se o resultado sabe quais questões foram tentadas, quem não está nas
      // erradas foi acertada → sai da lista de pendências.
      if (Array.isArray(r.idsPerguntas)) {        // TEAM_002: resultado novo traz os ids tentados
        for (const qid of r.idsPerguntas) {       // percorre os ids tentados
          const reg = mapa.get(qid);              // registro da questão (se era pendente)
          if (reg && !erradasIds.has(qid)) reg.aindaErrada = false; // acertou → não é mais pendente
        }
      }
    }

    // Fecha a lista: só quem continua errada, com a questão VIVA do banco
    // (dados sempre atuais) ou a foto salva no histórico (se o id sumiu do banco).
    const lista = [];                             // acumulador das pendentes
    for (const reg of mapa.values()) {            // percorre o mapa
      if (!reg.aindaErrada) continue;             // já corrigida → fora
      const viva = BancoQuestoes.find(q => q.id === reg.id); // questão atual no banco
      const questao = viva || reg.foto;                     // prefere a viva (dados sempre atuais)
      // TEAM_007: índice da última resposta marcada, convertido para a ordem das
      // alternativas da questão exibida — a foto do histórico guardava a ordem
      // embaralhada daquela jogada, então mapeamos pelo TEXTO da alternativa.
      let resposta = -1;                                    // sem marca conhecida
      if (reg.foto && typeof reg.foto.resposta === 'number' && Array.isArray(reg.foto.alternativas)) { // foto tem a marca?
        const textoMarcado = reg.foto.alternativas[reg.foto.resposta]; // texto que o usuário marcou na época
        resposta = questao.alternativas.indexOf(textoMarcado); // posição na lista atual (-1 se a alternativa sumiu)
      }
      lista.push({ id: reg.id, erros: reg.erros, questao: questao, resposta: resposta }); // junta
    }
    lista.sort((a, b) => b.erros - a.erros);      // quem mais errou aparece primeiro
    return lista;                                 // devolve as pendentes
  },

  // ---------- Tela ----------

  // Desenha a tela de revisão inteira
  renderizar() {
    const caixa = document.getElementById('tela-revisao'); // pega a seção da tela
    const lista = this.pendentes();               // questões esperando revisão
    const venc = this.vencidos();                 // lembretes cujo prazo já passou
    let html = '';                                // acumulador de HTML

    // ---- Faixa de "tá na hora!" (só aparece quando há lembrete vencido) ----
    if (venc.length > 0 && lista.length > 0) {    // TEAM_002: lembrete vencido + tem o que revisar
      html += '<div class="cartao destaque aparecer" style="border:2px solid var(--caramelo)">'; // cartão chamativo
      html += '<p style="font-weight:900;margin:0">' + T('rev_vencido', { n: lista.length }) + '</p>'; // aviso
      html += '</div>';                           // fecha a faixa
    }

    // ---- Cartão principal: resumo + ações + lembretes ----
    html += '<div class="cartao destaque aparecer">'; // abre o cartão
    html += '<h3>' + T('rev_t') + '</h3>';        // título traduzido
    html += '<p class="texto-suave">' + T('rev_sub') + '</p>'; // legenda traduzida

    // Resumo: quantas questões estão pendentes
    if (lista.length > 0) {                       // tem o que revisar
      html += '<p style="font-weight:800;margin:0.8rem 0 0">' + T('rev_pendentes', { n: lista.length }) + '</p>'; // contagem
    } else {                                      // nada pendente
      html += '<p style="font-weight:800;margin:0.8rem 0 0">' + T('rev_vazio') + '</p>'; // "tudo certo"
    }

    // Botões de ação: nova revisão (monta simulado) e detalhes (lista explicada)
    html += '<div style="display:flex;gap:0.8rem;flex-wrap:wrap;margin-top:1rem">'; // fileira de botões
    html += '<button id="btn-nova-revisao" class="botao botao-primario"' + (lista.length === 0 ? ' disabled' : '') + '>' + T('rev_btn_nova', { n: Math.min(lista.length, 50) }) + '</button>'; // TEAM_002: nova revisão
    html += '<button id="btn-detalhes-revisao" class="botao botao-contorno"' + (lista.length === 0 ? ' disabled' : '') + '>' + T('rev_btn_detalhes') + '</button>'; // TEAM_002: detalhes
    // TEAM_007: exportar o caderno de erros em PDF formatado (explicações + QR das aulas)
    html += '<button id="btn-pdf-revisao" class="botao botao-contorno"' + (lista.length === 0 ? ' disabled' : '') + '>' + T('pdf_btn') + '</button>'; // botão exportar PDF
    html += '</div>';                             // fecha a fileira

    // Lembretes: checkboxes de múltipla escolha (3, 5, 7 e 30 dias)
    const ativos = this.lembretes().map(l => l.dias); // prazos já agendados
    html += '<div style="margin-top:1.1rem">';    // bloco dos lembretes
    html += '<p style="font-weight:900;margin:0 0 0.4rem">' + T('rev_lembrar') + '</p>'; // rótulo "Lembrar em:"
    html += '<div class="chips-escolha">';        // fileira de "chips" (mesma cara dos filtros)
    for (const dias of this.PRAZOS) {             // percorre os prazos
      const marcado = ativos.includes(dias);      // esse prazo já está agendado?
      html += '<label class="lembrete-chip' + (marcado ? ' ativa' : '') + '">'; // chip do prazo
      html += '<input type="checkbox" data-dias="' + dias + '"' + (marcado ? ' checked' : '') + '>'; // checkbox
      html += T('rev_dias', { n: dias }) + '</label>'; // texto "N dias"
    }
    html += '</div>';                             // fecha a fileira de chips
    html += '</div>';                             // fecha o bloco de lembretes
    html += '</div>';                             // fecha o cartão

    // ---- Estado vazio: convida a fazer um simulado ----
    if (lista.length === 0) {                     // nenhuma errada acumulada
      html += '<div class="cartao vazio">';       // cartão vazio
      html += '<div class="vazio-icone">☕</div>'; // xícara tranquila
      html += '<h3>' + T('rev_vazio_t') + '</h3>'; // título do vazio
      html += '<p class="texto-suave">' + T('rev_vazio_x') + '</p>'; // explicação
      html += '<button class="botao botao-primario" data-ir="simulado">' + T('rev_vazio_btn') + '</button>'; // CTA
      html += '</div>';                           // fecha o cartão
    }

    // ---- Detalhes: o que precisa melhorar (explicação + vídeo) ----
    if (this.detalhesAberto && lista.length > 0) { // detalhes pedidos e há conteúdo
      html += '<div class="titulo-secao"><h3>' + T('rev_detalhes_t') + '</h3></div>'; // título da seção
      html += '<div class="lista-erradas">';      // mesma lista de acordeões do resultado
      for (const item of lista) {                 // percorre as pendentes (mais erradas primeiro)
        const q = item.questao;                   // a questão (viva do banco ou foto)
        const letraCerta = String.fromCharCode(65 + q.correta); // letra do gabarito
        html += '<details class="questao-revisao">'; // abre o acordeão
        // Cabeçalho: matéria · tema + "errou N×" + gabarito
        html += '<summary>' + this.escape(q.materia) + ' · ' + this.escape(q.tema); // nome
        html += ' <span class="chip vermelho" style="margin-left:0.4rem">' + T('rev_errou', { n: item.erros }) + '</span>'; // erros
        html += ' <span style="margin-left:auto;font-size:0.8rem">' + T('sim_gabarito', { letra: letraCerta }) + '</span></summary>'; // gabarito
        html += '<div class="corpo">';            // corpo do acordeão
        html += '<p style="font-size:0.9rem">' + this.escape(q.enunciado) + '</p>'; // enunciado
        html += '<p style="font-size:0.9rem"><strong>' + T('sim_certa_e', { letra: letraCerta }) + '</strong> ' + this.escape(q.explicacao) + '</p>'; // gabarito + explicação
        if (q.passos && q.passos.length > 0) {    // tem passo a passo?
          html += '<ol class="passos">';          // lista numerada de passos
          for (const passo of q.passos) {         // percorre os passos
            html += '<li>' + this.escape(passo) + '</li>'; // cada passo
          }
          html += '</ol>';                        // fecha a lista
        }
        html += '<div class="postit" style="margin-top:0.6rem">☕ ' + this.escape(q.dica) + '</div>'; // pegadinha em post-it
        const url = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(q.video); // busca do vídeo
        html += '<div style="margin-top:0.6rem"><a class="link-video" href="' + url + '" target="_blank" rel="noopener">' + T('sim_aula', { tema: this.escape(q.tema) }) + '</a></div>'; // link da aula
        html += '</div></details>';               // fecha corpo e acordeão
      }
      html += '</div>';                           // fecha a lista
    }

    caixa.innerHTML = html;                       // despeja a tela

    // ---- Liga os eventos ----
    const btnNova = document.getElementById('btn-nova-revisao'); // botão nova revisão
    if (btnNova) btnNova.addEventListener('click', () => this.novaRevisao()); // clique
    const btnDetalhes = document.getElementById('btn-detalhes-revisao'); // botão detalhes
    if (btnDetalhes) btnDetalhes.addEventListener('click', () => { // clique
      this.detalhesAberto = !this.detalhesAberto; // abre/fecha a lista
      this.renderizar();                          // redesenha a tela
    });
    // TEAM_007: botão de exportar o caderno de erros em PDF
    const btnPdf = document.getElementById('btn-pdf-revisao'); // botão exportar PDF
    if (btnPdf) btnPdf.addEventListener('click', () => {     // clique
      Impressao.exportarRevisao(this.pendentes());            // gera a folha das pendentes e imprime
    });
    // Cada checkbox de prazo agenda/cancela o lembrete correspondente
    caixa.querySelectorAll('.lembrete-chip input[type="checkbox"]').forEach(check => { // percorre
      check.addEventListener('change', () => {    // ao marcar/desmarcar
        check.closest('.lembrete-chip').classList.toggle('ativa', check.checked); // pinta o chip
        this.alternarLembrete(parseInt(check.dataset.dias, 10), check.checked); // agenda ou cancela
      });
    });
    // Botões genéricos data-ir (o "fazer um simulado" do estado vazio)
    caixa.querySelectorAll('[data-ir]').forEach(btn => { // percorre
      btn.addEventListener('click', () => App.irPara(btn.dataset.ir)); // navega
    });

    this.atualizarBadge();                        // acende/apaga o sino do menu
  },

  // Monta um simulado com as questões pendentes e leva para a tela do simulado
  novaRevisao() {
    const lista = this.pendentes();               // questões pendentes
    if (lista.length === 0) return;               // nada a revisar (botão vem desligado)
    const ids = lista.slice(0, 50).map(item => item.id); // TEAM_002: até 50 (limite do app), piores primeiro
    // Lembrete vencido cumpriu o papel → limpa os vencidos (os futuros continuam)
    const agora = Date.now();                     // instante atual
    const restantes = this.lembretes().filter(l => l.revisarEm > agora); // só os que ainda não venceram
    Armazenamento.salvar(this.chaveLembretes(), restantes); // grava a lista limpa
    App.irPara('simulado');                       // navega para a tela do simulado
    SimuladoUI.montarJogoComIds(ids);             // monta o jogo com exatamente essas questões
    App.torrada(T('rev_toast_nova', { n: ids.length }), 'sucesso'); // avisa quantas vieram
    this.atualizarBadge();                        // recalcula o sino do menu
  },

  // ---------- Sino de aviso no menu + torrada ao entrar ----------

  // Acende ou apaga o sino 🔔 no item "Revisão" do menu, conforme haja lembrete vencido
  atualizarBadge() {
    const item = document.querySelector('.item-menu[data-tela="revisao"]'); // item do menu
    if (!item) return;                            // menu ainda não existe → sai
    const temAviso = this.vencidos().length > 0 && this.pendentes().length > 0; // tem o que avisar?
    item.classList.toggle('aviso', temAviso);     // TEAM_002: liga/desliga o sino
  },

  // Chamado ao entrar no app: se há lembrete vencido, avisa por torrada
  avisarVencidos() {
    if (this.pendentes().length === 0) {          // sem pendências
      // Se não há o que revisar, lembretes vencidos perdem o sentido → limpa
      const agora = Date.now();                   // instante atual
      const restantes = this.lembretes().filter(l => l.revisarEm > agora); // só os futuros ficam
      Armazenamento.salvar(this.chaveLembretes(), restantes); // grava a limpeza
      this.atualizarBadge();                      // apaga o sino
      return;                                     // nada a avisar
    }
    if (this.vencidos().length > 0) {             // há lembrete vencido?
      App.torrada(T('rev_vencido', { n: this.pendentes().length })); // TEAM_002: torrada de lembrete
    }
    this.atualizarBadge();                        // acende o sino (se preciso)
  },

  // Foge do HTML (segurança — mesmo padrão das outras telas)
  escape(texto) {
    return String(texto)                          // garante texto
      .replace(/&/g, '&amp;')                     // escapa "&"
      .replace(/</g, '&lt;')                      // escapa "<"
      .replace(/>/g, '&gt;')                      // escapa ">"
      .replace(/"/g, '&quot;')                    // escapa aspas
      .replace(/'/g, '&#39;');                    // escapa apóstrofo
  }
};
