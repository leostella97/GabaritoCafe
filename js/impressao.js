/* ============================================================
   GABARITO CAFÉ — js/impressao.js
   Exportar PDF: monta uma "folha" formatada com a cara do app
   (dentro de #area-impressao, escondida na tela) e abre a
   janela de impressão do navegador — é só escolher "Salvar
   como PDF". Cada questão sai com enunciado, alternativas
   marcadas (gabarito ✔ e resposta do usuário ✖), explicação,
   passo a passo, pegadinha e a linha da aula: link do YouTube
   escrito + QR code do mesmo link ao lado.

   O QR é gerado 100% local pela js/vendor/qrcode.min.js
   (qrcode-generator, MIT) — nenhum dado sai do navegador.

   TEAM_007: arquivo novo — exportação em PDF.
   ============================================================ */

// Objeto global da folha de impressão
const Impressao = {

  // ---------- Montagem das peças ----------

  // Monta a URL de busca do YouTube da questão (mesmo formato das telas)
  urlAula(q) {
    const termo = q.video || q.tema || q.materia;             // termo da busca: vídeo → tema → matéria
    return 'https://www.youtube.com/results?search_query=' + encodeURIComponent(termo); // URL pronta
  },

  // Gera o QR code do link como data URL (GIF); sem a lib, devolve vazio
  qrDaUrl(url) {
    if (typeof qrcode !== 'function') return '';              // TEAM_007: lib ausente? o link impresso já basta
    try {                                                   // a geração pode falhar em URLs gigantes
      const qr = qrcode(0, 'M');                            // versão automática, correção de erro média
      qr.addData(url);                                      // o conteúdo do QR é a URL completa
      qr.make();                                            // calcula a matriz do código
      return qr.createDataURL(6, 2);                        // GIF ~6px por módulo, margem de 2 módulos
    } catch (erro) {                                        // qualquer falha na geração
      return '';                                            // segue sem QR (o link continua no papel)
    }
  },

  // Data bonitinha no idioma atual da interface
  dataFormatada() {
    const local = { pt: 'pt-BR', en: 'en-US', es: 'es-ES' }[Idioma.atual] || 'pt-BR'; // locale do idioma
    return new Date().toLocaleDateString(local, { day: '2-digit', month: 'long', year: 'numeric' }); // "30 de setembro de 2026"
  },

  // Nome de quem está estudando (conta real ou visitante)
  nomeEstudante() {
    const usuario = Auth.usuarioAtual();                      // usuário logado (null para visitante)
    if (usuario) return usuario.nome;                         // nome da conta
    return Auth.idAtual() ? 'Visitante' : '';                 // visitante tem sessão sem conta
  },

  // Tile de KPI do resumo: número grande + rótulo miúdo em caixa alta
  kpi(valor, rotulo, classe) {
    return '<div class="kpi"><span class="kpi-v ' + (classe || '') + '">' + this.escape(valor) +
      '</span><span class="kpi-l">' + this.escape(rotulo) + '</span></div>'; // tile pronto
  },

  // Cabeçalho da folha: faixa de marca escura com logo, eyebrow, título e meta
  cabecalho(tituloDoc, resumo) {
    let html = '<header class="folha-cabeca">';               // abre a faixa de marca
    html += '<img class="folha-logo" src="assets/logo.svg" alt="">'; // a xícara com o visto
    html += '<div class="folha-id">';                         // bloco de identidade
    html += '<div class="folha-eyebrow">Gabarito Café · ' + this.escape(T('pdf_eyebrow')) + '</div>'; // etiqueta de topo
    html += '<div class="folha-titulo">' + this.escape(tituloDoc) + '</div>'; // título do documento
    html += '<div class="folha-slogan">' + this.escape(T('app_slogan')) + '</div>'; // slogan manuscrito
    html += '</div>';                                         // fecha a identidade
    html += '<div class="folha-meta">';                       // meta à direita
    html += '<span>' + this.escape(T('pdf_gerado', { data: this.dataFormatada() })) + '</span>'; // "gerado em..."
    const nome = this.nomeEstudante();                        // nome de quem gerou
    if (nome) html += '<span>' + this.escape(T('pdf_estudante', { nome: nome })) + '</span>'; // linha do estudante
    html += '</div></header>';                                // fecha meta e cabeçalho

    // Grade de tiles de resultado + tile da legenda de marcas
    html += '<div class="folha-resumo">' + resumo;            // os tiles vêm prontos de quem chamou
    html += '<div class="kpi kpi-legenda"><span>' + this.escape(T('pdf_legenda')) + '</span></div>'; // legenda ✔/✖
    html += '</div>';                                         // fecha o resumo
    return html;                                              // devolve o cabeçalho completo
  },

  // Rodapé da folha: linha de fechamento + assinatura manuscrita
  rodape() {
    let html = '<footer class="folha-rodape">' + this.escape(T('rodape')); // linha de fechamento
    html += '<span class="assinatura">— ' + this.escape(T('app_slogan')) + ' ☕</span>'; // "assinatura" da marca
    return html + '</footer>';                                // fecha o rodapé
  },

  // ---------- Bloco de uma questão ----------

  // Monta o HTML de uma questão na folha
  // q = questão · numero = posição · resposta = índice marcado (-1 ignora)
  // statusHtml = selo à direita do topo ("você acertou", "errou 3×"...)
  questaoHtml(q, numero, resposta, statusHtml) {
    const letras = ['A', 'B', 'C', 'D', 'E', 'F'];            // letras das alternativas
    const letraCerta = letras[q.correta] || '?';              // letra do gabarito
    const url = this.urlAula(q);                              // link da aula no YouTube
    const qr = this.qrDaUrl(url);                             // QR do mesmo link (ou '')

    let html = '<article class="q">';                         // abre o bloco da questão

    // ---- Topo: número editorial + chips de matéria/banca/nível/ensino + status ----
    html += '<div class="q-topo">';                           // linha do cabeçalho
    html += '<div class="q-id"><span class="q-id-l">' + this.escape(T('pdf_questao')) + '</span>' + // etiqueta "QUESTÃO"
      '<span class="q-id-n">' + String(numero).padStart(2, '0') + '</span></div>'; // número "01" grande
    html += '<span class="q-chip q-chip-mat">' + this.escape(q.materia) + '</span>'; // chip da matéria
    if (q.banca) html += '<span class="q-chip">' + this.escape(q.banca) + '</span>'; // chip da banca
    if (q.nivel) html += '<span class="q-chip">' + this.escape(SimuladoUI.textoNivel(q.nivel)) + '</span>'; // dificuldade
    if (q.ensino) html += '<span class="q-chip">' + this.escape(SimuladoUI.textoEnsino(q.ensino)) + '</span>'; // nível do concurso
    if (statusHtml) html += statusHtml;                       // selo de acerto/erro à direita
    html += '</div>';                                         // fecha o topo

    // ---- Enunciado ----
    html += '<p class="q-enunciado">' + this.escape(q.enunciado) + '</p>'; // texto da pergunta

    // ---- Alternativas: certa de verde (✔), marcada errada de vermelho (✖) ----
    html += '<ul class="q-alts">';                            // abre a lista
    for (let i = 0; i < q.alternativas.length; i++) {         // percorre as alternativas
      let classe = 'q-alt';                                   // classe base
      if (i === q.correta) classe += ' correta';              // a certa ganha verde
      else if (i === resposta) classe += ' marcada';          // a marcada errada ganha vermelho
      html += '<li class="' + classe + '">';                  // abre a linha
      html += '<span class="q-letra">' + letras[i] + '</span>'; // bolinha da letra
      html += '<span class="q-alt-txt">' + this.escape(q.alternativas[i]) + '</span>'; // texto
      if (i === q.correta) {                                  // na certa
        html += '<span class="q-tag">✔ ' + this.escape(T('pdf_gabarito_tag')) + '</span>'; // etiqueta "gabarito"
      } else if (i === resposta) {                            // na marcada (errada)
        html += '<span class="q-tag">✖ ' + this.escape(T('pdf_sua_resposta')) + '</span>'; // etiqueta "sua resposta"
      }
      html += '</li>';                                        // fecha a linha
    }
    html += '</ul>';                                          // fecha a lista

    // ---- "O que foi visto": gabarito + explicação (+ passo a passo) ----
    html += '<div class="q-exp">';                            // abre a caixa creme
    html += '<div class="q-exp-t">☕ ' + this.escape(T('pdf_o_que_viu')) + '</div>'; // título da caixa
    html += '<p><strong>' + this.escape(T('sim_certa_e', { letra: letraCerta })) + '</strong> ' + this.escape(q.explicacao) + '</p>'; // gabarito + explicação
    if (q.passos && q.passos.length > 0) {                    // tem passo a passo?
      html += '<ol class="q-passos">';                        // lista numerada
      for (const passo of q.passos) {                         // percorre os passos
        html += '<li>' + this.escape(passo) + '</li>';        // cada passo
      }
      html += '</ol>';                                        // fecha a lista
    }
    html += '</div>';                                         // fecha a caixa

    // ---- Pegadinha em post-it ----
    if (q.dica) {                                             // tem dica de banca?
      html += '<div class="q-dica">' + this.escape(T('sim_dica')) + this.escape(q.dica) + '</div>'; // post-it
    }

    // ---- Aula no YouTube: link escrito à esquerda, QR code à direita ----
    html += '<div class="q-aula">';                           // a linha pedida
    html += '<div class="q-aula-info">';                      // coluna do link
    html += '<a class="q-aula-link" href="' + url + '">' + this.escape(T('sim_aula', { tema: q.tema })) + '</a>'; // botão "assistir aula"
    html += '<span class="q-aula-url">' + url + '</span>';    // URL por extenso (clicável no PDF)
    html += '</div>';                                         // fecha a coluna do link
    if (qr) {                                                 // QR gerado com sucesso?
      html += '<div class="q-qr">';                           // bloco do QR à direita
      html += '<img src="' + qr + '" alt="QR">';              // a imagem do código
      html += '<span>' + this.escape(T('pdf_qr_legenda')) + '</span>'; // "aponte a câmera..."
      html += '</div>';                                       // fecha o bloco do QR
    }
    html += '</div>';                                         // fecha a linha da aula

    html += '</article>';                                     // fecha a questão
    return html;                                              // devolve o bloco pronto
  },

  // ---------- Documentos ----------

  // Exporta o resultado de um simulado: resumo + TODAS as questões vistas
  exportarSimulado(resultado, perguntas, respostas) {
    if (!resultado || !perguntas || perguntas.length === 0) return; // nada a exportar → sai

    // Resumo: tiles de KPI — acertos, erros, aproveitamento e tempo de prova
    let resumo = this.kpi(resultado.acertos, T('sim_stat_acertos'), 'ok');           // tile de acertos
    resumo += this.kpi(resultado.erros, T('sim_stat_erros'), 'erro');                // tile de erros
    resumo += this.kpi(resultado.percentual + '%', T('sim_stat_aproveitamento'));    // tile de aproveitamento
    resumo += this.kpi(SimuladoUI.tempoFormatado(resultado.duracaoSeg), T('sim_stat_tempo')); // tile de tempo
    // TEAM_007: quando o simulado foi o modo "refazer erradas", o título é o de revisão
    const tituloDoc = resultado.refazendo ? T('pdf_titulo_rev') : T('pdf_titulo_sim'); // título conforme o modo
    let html = this.cabecalho(tituloDoc, resumo);             // cabeçalho + resumo

    // Desempenho por matéria (barras do resultado, versão papel)
    const materias = Object.keys(resultado.porMateria || {}); // matérias do resultado
    if (materias.length > 1) {                                // só vale a pena com mais de uma
      html += '<div class="folha-materias">';                 // abre a lista
      for (const nome of materias) {                          // percorre as matérias
        const d = resultado.porMateria[nome];                 // {total, acertos}
        const pct = Math.round((d.acertos / d.total) * 100);  // percentual da matéria
        html += '<div class="folha-mat-linha">';              // linha
        html += '<span class="folha-mat-nome">' + this.escape(nome) + '</span>'; // nome
        html += '<span class="folha-mat-trilho"><span class="folha-mat-barra" style="width:' + pct + '%"></span></span>'; // barra
        html += '<span class="folha-mat-placar">' + d.acertos + '/' + d.total + '</span>'; // placar
        html += '</div>';                                     // fecha a linha
      }
      html += '</div>';                                       // fecha a lista
    }

    // Seção de questões: cada uma com selo de acerto/erro
    html += '<h2 class="folha-secao">' + this.escape(T('pdf_secao')) + '</h2>'; // título da seção
    perguntas.forEach((q, i) => {                             // percorre as questões na ordem do jogo
      const resposta = respostas[i];                          // o que o usuário marcou
      const acertou = resposta === q.correta;                 // conferiu?
      const selo = '<span class="q-status ' + (acertou ? 'q-ok' : 'q-erro') + '">' + // selo verde/vermelho
        (acertou ? '✔ ' + this.escape(T('pdf_acertou')) : '✖ ' + this.escape(T('pdf_errou'))) + '</span>';
      html += this.questaoHtml(q, i + 1, resposta, selo);     // bloco da questão
    });

    html += this.rodape();                                    // rodapé da folha
    this.imprimir(html, 'simulado');                          // despeja e imprime
  },

  // Exporta o caderno de erros da revisão (questões pendentes)
  exportarRevisao(lista) {
    if (!lista || lista.length === 0) return;                 // nada a exportar → sai
    // Resumo: tile com quantas questões estão na fila de revisão
    const resumo = this.kpi(lista.length, T('pdf_kpi_pendentes'), 'erro'); // tile de pendentes
    let html = this.cabecalho(T('pdf_titulo_rev'), resumo);   // cabeçalho + resumo

    // Seção de questões: cada uma com o selo "errou N×"
    html += '<h2 class="folha-secao">' + this.escape(T('pdf_secao')) + '</h2>'; // título da seção
    lista.forEach((item, i) => {                              // percorre as pendentes
      const selo = '<span class="q-status q-erro">✖ ' + this.escape(T('rev_errou', { n: item.erros })) + '</span>'; // selo de repetição
      html += this.questaoHtml(item.questao, i + 1, item.resposta, selo); // bloco (marca a última resposta)
    });

    html += this.rodape();                                    // rodapé da folha
    this.imprimir(html, 'revisao');                           // despeja e imprime
  },

  // ---------- Impressão ----------

  // Despeja a folha no #area-impressao e abre a janela de imprimir/salvar PDF
  imprimir(html, tipo) {
    const area = document.getElementById('area-impressao');   // a área escondida da folha
    if (!area) return;                                        // segurança: sem área, sem impressão
    area.innerHTML = '<div class="folha">' + html + '</div>'; // despeja o documento

    // O nome do arquivo PDF sugerido vem do título da aba — troca durante a impressão
    const tituloOriginal = document.title;                    // guarda o título atual
    const nomeArquivo = 'Gabarito-Cafe-' + tipo + '-' + new Date().toISOString().slice(0, 10); // ex.: Gabarito-Cafe-simulado-2026-09-30
    document.title = nomeArquivo;                             // vira a sugestão de nome do PDF

    // Depois de imprimir (ou cancelar): limpa a folha e restaura o título
    const limpar = () => {                                    // rotina de limpeza
      area.innerHTML = '';                                    // esvazia a área escondida
      document.title = tituloOriginal;                        // devolve o título da aba
      window.removeEventListener('afterprint', limpar);       // desliga o ouvinte
    };
    window.addEventListener('afterprint', limpar);            // limpa quando o diálogo fechar

    App.torrada(T('pdf_toast'), 'sucesso');                   // avisa como salvar em PDF
    setTimeout(() => window.print(), 60);                     // um respiro para o DOM pintar e abre o diálogo
  },

  // Foge do HTML (segurança — mesmo padrão das outras telas)
  escape(texto) {
    return String(texto)                                      // garante texto
      .replace(/&/g, '&amp;')                                 // escapa "&"
      .replace(/</g, '&lt;')                                  // escapa "<"
      .replace(/>/g, '&gt;')                                  // escapa ">"
      .replace(/"/g, '&quot;')                                // escapa aspas
      .replace(/'/g, '&#39;');                                // escapa apóstrofo
  }
};
