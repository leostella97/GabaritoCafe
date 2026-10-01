/* ============================================================
   GABARITO CAFÉ — js/conteudo.js
   Telas de conteúdo: "Bancas" (pegadinhas) e "Temas que
   caem" (matérias + frequência). Tudo renderizado na hora.
   ============================================================ */

// Objeto global das telas de conteúdo
const ConteudoUI = {

  // Desenha a tela de bancas (cartão para cada banca)
  renderizarBancas() {
    const caixa = document.getElementById('tela-bancas');   // pega a seção da tela
    let html = '<p class="texto-suave">' + T('bancas_intro') + '</p>'; // introdução traduzida
    html += '<div class="nota" style="margin-bottom:1rem">' + T('conteudo_aviso') + '</div>'; // aviso de conteúdo em PT
    html += '<div class="grade-bancas">';                   // abre a grade de cartões
    for (const banca of DadosBancas.bancas) {               // percorre as bancas
      // TEAM_005: cartão clicável — abre o modal da banca (dicas + simulado + vídeo)
      html += '<div class="cartao banca-cartao aparecer" data-banca="' + Util.escape(banca.nome) + '" role="button" tabindex="0" title="' + T('bancas_cartao') + '">'; // abre o cartão clicável
      html += '<div class="banca-nome">' + Util.escape(banca.nome) + '</div>'; // nome da banca
      html += '<p class="banca-perfil">' + Util.escape(banca.perfil) + '</p>'; // perfil da banca
      html += '<p class="texto-suave" style="font-size:0.8rem;margin:0">🕵️ ' + T('bancas_cartao') + '</p>'; // dica de clique
      html += '</div>';                                     // fecha o cartão
    }
    html += '</div>';                                       // fecha a grade
    caixa.innerHTML = html;                                 // despeja na tela

    // TEAM_005: clique no cartão abre o modal da banca (delegação na grade)
    caixa.addEventListener('click', (e) => {                // clique na tela
      const cartao = e.target.closest('.banca-cartao');     // foi num cartão de banca?
      if (cartao) this.abrirModalBanca(cartao.dataset.banca); // abre o modal dela
    });
    // Enter/Espaço no cartão focado também abre (acessibilidade)
    caixa.addEventListener('keydown', (e) => {              // tecla na tela
      if (e.key !== 'Enter' && e.key !== ' ') return;       // só Enter e espaço
      const cartao = e.target.closest('.banca-cartao');     // num cartão de banca?
      if (cartao && e.target === cartao) {                  // foco no cartão em si
        e.preventDefault();                                 // evita rolagem no espaço
        this.abrirModalBanca(cartao.dataset.banca);         // abre o modal dela
      }
    });
  },

  // TEAM_005: modal da banca — perfil, pegadinhas, estratégia, simulado e aula
  async abrirModalBanca(nome) {
    EditalUI.iniciarModal();                                // garante a fiação do modal em qualquer tela
    const banca = DadosBancas.bancas.find(b => b.nome === nome); // acha a banca no catálogo
    if (!banca) return;                                     // banca desconhecida? sai
    // Casa o nome exibido com o nome que o banco de questões usa
    const nomeNoBanco = EditalUI.bancaBancoDaDetectada(nome); // "CESPE / Cebraspe" → "CESPE/Cebraspe"
    await BancoLoader.carregar();                           // TEAM_007: garante o banco (contagem de questões)
    const infoBanco = nomeNoBanco                           // tem nome no banco?
      ? MotorSimulado.bancasDoBanco().find(b => b.nome === nomeNoBanco) : null; // pega a contagem

    let html = '<h3 style="margin-top:0;padding-right:1.6rem">🕵️ ' + Util.escape(banca.nome) + '</h3>'; // título
    html += '<p class="banca-perfil">' + Util.escape(banca.perfil) + '</p>'; // perfil da banca
    html += '<p style="font-weight:900;font-size:0.9rem;margin:0.8rem 0 0.3rem">' + T('bancas_pegadinhas_t') + '</p>'; // título da lista
    html += '<ul class="banca-lista">';                     // abre a lista de pegadinhas
    for (const pegadinha of banca.pegadinhas) {             // percorre as pegadinhas
      html += '<li>' + Util.escape(pegadinha) + '</li>';    // item de pegadinha
    }
    html += '</ul>';                                        // fecha a lista
    html += '<div class="banca-dica">💡 ' + Util.escape(banca.comoSeDarBem) + '</div>'; // estratégia

    // Bloco de ações: simulado filtrado pela banca (quando ela tem questões no banco)
    html += '<div style="margin-top:1rem">';                // abre a área de ações
    if (infoBanco) {                                        // a banca tem questões no banco?
      html += '<p class="texto-suave" style="font-size:0.85rem;margin:0 0 0.5rem">' + T('bancas_modal_questoes', { n: infoBanco.quantidade }) + '</p>'; // contagem de questões
      html += '<button type="button" class="botao" data-sim-banca="' + Util.escape(infoBanco.nome) + '">🎯 ' + T('bancas_modal_simulado') + '</button>'; // botão do simulado
    } else {                                                // sem questões da banca
      html += '<p class="texto-suave" style="font-size:0.85rem;margin:0 0 0.5rem">' + T('bancas_modal_sem') + '</p>'; // aviso honesto
    }
    // Link de aulas: busca do YouTube sobre a banca
    const busca = 'banca ' + banca.nome + ' concurso dicas pegadinhas'; // termo da busca
    const url = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(busca); // monta a URL
    html += '<a class="link-video" style="margin-top:0.6rem" href="' + url + '" target="_blank" rel="noopener">' + T('bancas_modal_aula') + '</a>'; // link de aulas
    html += '</div>';                                       // fecha a área de ações

    document.getElementById('modal-conteudo').innerHTML = html; // despeja no modal
    document.getElementById('modal-materia').classList.remove('oculto'); // mostra o modal
  },

  // Desenha a tela de temas que mais caem
  renderizarTemas() {
    const caixa = document.getElementById('tela-temas');    // pega a seção da tela
    // Abas: concursos x vestibular
    let html = '<div class="abas" style="max-width:420px"><button id="aba-concursos" class="aba ativa">' + T('temas_aba_concursos') + '</button><button id="aba-vest" class="aba">' + T('temas_aba_vest') + '</button></div>'; // abas traduzidas
    html += '<div class="nota" style="margin-bottom:1rem">' + T('conteudo_aviso') + '</div>'; // aviso de conteúdo em PT
    html += '<div id="lista-temas"></div>';                 // área que recebe a lista
    caixa.innerHTML = html;                                 // despeja a estrutura

    // Função interna que troca a lista conforme a aba
    const mostrar = (lista) => {                            // recebe a lista de matérias
      const area = document.getElementById('lista-temas');  // pega a área da lista
      let conteudo = '<div class="grade-temas">';           // abre a grade
      const LIMITE_VISIVEL = 3;                             // TEAM_001: só os 3 primeiros tópicos aparecem
      for (const materia of lista) {                        // percorre as matérias
        // TEAM_004: o box inteiro abre o modal da matéria — data-materia + role/tabindex para teclado
        conteudo += '<div class="cartao tema-cartao aparecer" data-materia="' + Util.escape(materia.materia) + '" role="button" tabindex="0" title="' + T('temas_cartao') + '">'; // abre o cartão clicável
        conteudo += '<h3>' + materia.icone + ' ' + Util.escape(materia.materia) + '</h3>'; // título
        conteudo += '<p class="texto-suave" style="font-size:0.88rem">' + Util.escape(materia.resumo) + '</p>'; // resumo
        materia.topicos.forEach((topico, i) => {            // percorre os tópicos
          const escondido = i >= LIMITE_VISIVEL ? ' tema-extra' : ''; // TEAM_001: os demais ficam recolhidos
          conteudo += '<div class="tema-topico' + escondido + '">'; // abre o bloco do tópico
          // TEAM_003: nome do tópico clicável — abre o modal com explicação + aula no YouTube
          conteudo += '<button type="button" class="topico-nome topico-texto" data-materia="' + Util.escape(materia.materia) + '" data-topico="' + Util.escape(topico.nome) + '" title="' + T('ed_modal_dica') + '">' + Util.escape(topico.nome) + '</button> '; // nome clicável do tópico
          conteudo += '<span class="xicaras">' + '☕'.repeat(topico.frequencia) + '</span>'; // xícaras = frequência
          conteudo += '<p style="font-size:0.85rem;margin:0.2rem 0">' + T('temas_porque') + Util.escape(topico.porque) + '</p>'; // motivo de cair
          conteudo += '<div class="tema-como">✍️ ' + Util.escape(topico.como) + '</div>'; // como estudar
          conteudo += '</div>';                             // fecha o bloco
        });
        if (materia.topicos.length > LIMITE_VISIVEL) {      // TEAM_001: tem tópico escondido?
          conteudo += '<button type="button" class="ver-mais tema-ver-mais">' + T('ed_ver_mais') + '</button>'; // botão que revela
        }
        conteudo += '</div>';                               // fecha o cartão
      }
      conteudo += '</div>';                                 // fecha a grade
      area.innerHTML = conteudo;                            // despeja a lista
    };

    // TEAM_001: delegação do "Ver mais…" — funciona nas duas abas sem religar
    document.getElementById('lista-temas').addEventListener('click', (e) => { // clique na lista
      // TEAM_003: clique no nome do tópico abre o modal com explicação + aula
      const alvoTopico = e.target.closest('[data-topico]'); // foi num tópico clicável?
      if (alvoTopico) {                                     // se foi
        EditalUI.abrirModalTopico(alvoTopico.dataset.materia, alvoTopico.dataset.topico); // abre o modal do tópico
        return;                                             // e não cai no "Ver mais…"
      }
      const btn = e.target.closest('.tema-ver-mais');       // foi no botão "Ver mais…"?
      if (btn) {                                          // clicou no expandir
        const dono = btn.closest('.cartao');              // o cartão dono do botão
        const aberto = dono.classList.toggle('aberto');   // alterna o estado aberto/fechado
        btn.textContent = aberto ? T('ed_ver_menos') : T('ed_ver_mais'); // troca o rótulo
        return;                                         // TEAM_004: não cai no clique do cartão
      }
      // TEAM_004: clique no resto do box abre o modal da matéria (lista de tópicos)
      const cartao = e.target.closest('.tema-cartao');    // foi dentro de um cartão de matéria?
      if (cartao) EditalUI.abrirModalMateria(cartao.dataset.materia); // abre o modal dela
    });

    // TEAM_004: Enter/Espaço no cartão focado abre o modal da matéria (teclado)
    document.getElementById('lista-temas').addEventListener('keydown', (e) => { // tecla na lista
      if (e.key !== 'Enter' && e.key !== ' ') return;       // só Enter e espaço
      const cartao = e.target.closest('.tema-cartao');      // num cartão de matéria?
      // Só quando o foco é o próprio cartão — botões internos cuidam de si
      if (cartao && e.target === cartao) {                  // foco no cartão em si
        e.preventDefault();                                 // evita rolagem no espaço
        EditalUI.abrirModalMateria(cartao.dataset.materia); // abre o modal dela
      }
    });

    // Liga as abas
    document.getElementById('aba-concursos').addEventListener('click', () => { // aba concursos
      document.getElementById('aba-concursos').classList.add('ativa');         // marca como ativa
      document.getElementById('aba-vest').classList.remove('ativa');           // desmarca a outra
      mostrar(DadosTemas.concursos);                        // mostra temas de concurso
    });
    document.getElementById('aba-vest').addEventListener('click', () => {      // aba vestibular
      document.getElementById('aba-vest').classList.add('ativa');              // marca como ativa
      document.getElementById('aba-concursos').classList.remove('ativa');      // desmarca a outra
      mostrar(DadosTemas.vestibular);                       // mostra temas de vestibular
    });

    mostrar(DadosTemas.concursos);                          // começa mostrando concursos
  },

  // Devolve as dicas rápidas no idioma atual (com reserva no português)
  dicasRapidasDoIdioma() {
    const porIdioma = DadosTemas.dicasRapidas;              // dicas separadas por idioma
    return porIdioma[Idioma.atual] || porIdioma.pt;         // do idioma atual ou português
  },

  // Desenha a tela de dicas importantes (organizadas por categoria)
  renderizarDicas() {
    const caixa = document.getElementById('tela-dicas');    // pega a seção da tela
    const porIdioma = DadosTemas.dicasImportantes;          // dicas importantes por idioma
    const categorias = porIdioma[Idioma.atual] || porIdioma.pt; // usa o idioma atual (ou pt)
    let html = '<p class="texto-suave">' + T('dicas_intro') + '</p>'; // introdução traduzida
    // Um cartão para cada categoria de dicas
    for (const categoria of categorias) {                   // percorre as categorias
      html += '<div class="cartao aparecer categoria-dicas">'; // abre o cartão
      html += '<div class="categoria-titulo">' + categoria.icone + ' ' + Util.escape(categoria.titulo) + '</div>'; // título
      for (const dica of categoria.dicas) {                 // percorre as dicas da categoria
        html += '<div class="dica-item">';                  // abre a dica
        html += '<div class="dica-titulo">' + Util.escape(dica.titulo) + '</div>'; // título da dica
        html += '<p class="dica-texto">' + Util.escape(dica.texto) + '</p>'; // explicação
        html += '</div>';                                   // fecha a dica
      }
      html += '</div>';                                     // fecha o cartão
    }
    // Bloco final: as dicas rápidas de prova (mesmas que aparecem no simulado)
    html += '<div class="titulo-secao"><h3>' + T('dicas_prova_t') + '</h3></div>'; // título da seção
    html += '<div class="cartao"><ul class="banca-lista" style="font-size:0.92rem">'; // abre a lista
    for (const dica of this.dicasRapidasDoIdioma()) {       // percorre as dicas rápidas
      html += '<li>' + Util.escape(dica) + '</li>';         // cada dica
    }
    html += '</ul></div>';                                  // fecha lista e cartão
    caixa.innerHTML = html;                                 // despeja na tela
  }
};