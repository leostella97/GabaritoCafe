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
      html += '<div class="cartao banca-cartao aparecer">'; // abre o cartão
      html += '<div class="banca-nome">' + this.escape(banca.nome) + '</div>'; // nome da banca
      html += '<p class="banca-perfil">' + this.escape(banca.perfil) + '</p>'; // perfil da banca
      html += '<p style="font-weight:900;font-size:0.9rem">' + T('bancas_pegadinhas_t') + '</p>'; // título da lista
      html += '<ul class="banca-lista">';                   // abre a lista de pegadinhas
      for (const pegadinha of banca.pegadinhas) {           // percorre as pegadinhas
        html += '<li>' + this.escape(pegadinha) + '</li>';  // item de pegadinha
      }
      html += '</ul>';                                      // fecha a lista
      html += '<div class="banca-dica">💡 ' + this.escape(banca.comoSeDarBem) + '</div>'; // estratégia
      html += '</div>';                                     // fecha o cartão
    }
    html += '</div>';                                       // fecha a grade
    caixa.innerHTML = html;                                 // despeja na tela
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
        conteudo += '<div class="cartao tema-cartao aparecer" data-materia="' + this.escape(materia.materia) + '" role="button" tabindex="0" title="' + T('temas_cartao') + '">'; // abre o cartão clicável
        conteudo += '<h3>' + materia.icone + ' ' + this.escape(materia.materia) + '</h3>'; // título
        conteudo += '<p class="texto-suave" style="font-size:0.88rem">' + this.escape(materia.resumo) + '</p>'; // resumo
        materia.topicos.forEach((topico, i) => {            // percorre os tópicos
          const escondido = i >= LIMITE_VISIVEL ? ' tema-extra' : ''; // TEAM_001: os demais ficam recolhidos
          conteudo += '<div class="tema-topico' + escondido + '">'; // abre o bloco do tópico
          // TEAM_003: nome do tópico clicável — abre o modal com explicação + aula no YouTube
          conteudo += '<button type="button" class="topico-nome topico-texto" data-materia="' + this.escape(materia.materia) + '" data-topico="' + this.escape(topico.nome) + '" title="' + T('ed_modal_dica') + '">' + this.escape(topico.nome) + '</button> '; // nome clicável do tópico
          conteudo += '<span class="xicaras">' + '☕'.repeat(topico.frequencia) + '</span>'; // xícaras = frequência
          conteudo += '<p style="font-size:0.85rem;margin:0.2rem 0">' + T('temas_porque') + this.escape(topico.porque) + '</p>'; // motivo de cair
          conteudo += '<div class="tema-como">✍️ ' + this.escape(topico.como) + '</div>'; // como estudar
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
      html += '<div class="categoria-titulo">' + categoria.icone + ' ' + this.escape(categoria.titulo) + '</div>'; // título
      for (const dica of categoria.dicas) {                 // percorre as dicas da categoria
        html += '<div class="dica-item">';                  // abre a dica
        html += '<div class="dica-titulo">' + this.escape(dica.titulo) + '</div>'; // título da dica
        html += '<p class="dica-texto">' + this.escape(dica.texto) + '</p>'; // explicação
        html += '</div>';                                   // fecha a dica
      }
      html += '</div>';                                     // fecha o cartão
    }
    // Bloco final: as dicas rápidas de prova (mesmas que aparecem no simulado)
    html += '<div class="titulo-secao"><h3>' + T('dicas_prova_t') + '</h3></div>'; // título da seção
    html += '<div class="cartao"><ul class="banca-lista" style="font-size:0.92rem">'; // abre a lista
    for (const dica of this.dicasRapidasDoIdioma()) {       // percorre as dicas rápidas
      html += '<li>' + this.escape(dica) + '</li>';         // cada dica
    }
    html += '</ul></div>';                                  // fecha lista e cartão
    caixa.innerHTML = html;                                 // despeja na tela
  },

  // Foge do HTML (segurança)
  escape(texto) {
    return String(texto)                                    // garante texto
      .replace(/&/g, '&amp;')                               // escapa "&"
      .replace(/</g, '&lt;')                                // escapa "<"
      .replace(/>/g, '&gt;')                                // escapa ">"
      .replace(/"/g, '&quot;')                              // escapa aspas
      .replace(/'/g, '&#39;');                              // escapa apóstrofo
  }
};
