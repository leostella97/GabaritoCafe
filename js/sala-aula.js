/* ============================================================
   GABARITO CAFÉ — js/sala-aula.js
   Tela "Sala de Aula": cards separando as matérias e, ao clicar,
   o modal com todos os tópicos principais. Um dropdown filtra por
   Vagas, Bancas, Vestibular e Faculdade — cada contexto mostra os
   tópicos daquela prova/curso. Cada tópico tem título, explicação
   e link de aula no YouTube (busca por matéria + tópico).
   ============================================================ */

// Objeto global da Sala de Aula
const SalaAulaUI = {

  // Estado atual: lista normalizada de matérias e o contexto da busca do YouTube
  _lista: [],                       // matérias exibidas agora (normalizadas)
  _contexto: 'concurso',            // sufixo da busca do YouTube
  _categoria: 'concursos',          // categoria escolhida no dropdown
  _itemSelecionado: '',             // vaga/banca/faculdade escolhida (se houver)

  // Desenha a tela inteira (chamado ao entrar na rota e ao trocar idioma)
  renderizar() {
    EditalUI.iniciarModal();                            // garante o fechamento do modal compartilhado (✕/véu/Esc)
    const caixa = document.getElementById('tela-sala'); // seção da tela
    let html = '<p class="texto-suave">' + T('sala_intro') + '</p>'; // introdução
    html += '<div class="nota" style="margin-bottom:1rem">' + T('conteudo_aviso') + '</div>'; // aviso de conteúdo em PT

    // ---- Painel de filtros: dropdown de categoria + dropdown do item ----
    html += '<div class="cartao sa-filtros">';          // abre o painel
    html += '<div class="campo" style="margin:0;flex:1.4;min-width:220px">'; // campo da categoria
    html += '<label for="sa-categoria">' + T('sala_categoria_l') + '</label>'; // rótulo
    html += '<select id="sa-categoria">';               // abre o select da categoria
    html += '<option value="concursos">' + T('sala_cat_concursos') + '</option>';
    html += '<option value="vagas">' + T('sala_cat_vagas') + '</option>';
    html += '<option value="bancas">' + T('sala_cat_bancas') + '</option>';
    html += '<option value="vestibular">' + T('sala_cat_vestibular') + '</option>';
    html += '<option value="faculdade">' + T('sala_cat_faculdade') + '</option>';
    html += '</select>';                                // fecha o select
    html += '</div>';                                   // fecha o campo
    html += '<div class="campo sa-campo-item" style="margin:0;flex:1;min-width:220px">'; // campo do item (escondido até precisar)
    html += '<label for="sa-item">' + T('sala_item_l') + '</label>'; // rótulo
    html += '<select id="sa-item"></select>';           // preenchido conforme a categoria
    html += '</div>';                                   // fecha o campo
    html += '</div>';                                   // fecha o painel

    // ---- Contexto opcional (perfil da banca, resumo da vaga/faculdade) ----
    html += '<div id="sa-contexto"></div>';             // área do cartão de contexto

    // ---- Grade de cards de matérias ----
    html += '<div id="sa-grade"></div>';                // área dos cards

    caixa.innerHTML = html;                             // despeja a estrutura

    // Liga o dropdown de categoria
    document.getElementById('sa-categoria').addEventListener('change', (e) => { // troca a categoria
      this._categoria = e.target.value;                 // guarda a escolha
      this._itemSelecionado = '';                       // limpa o item anterior
      this.atualizarFiltros();                          // repopula o dropdown do item e redesenha
    });

    // Liga o dropdown do item (vaga/banca/faculdade)
    document.getElementById('sa-item').addEventListener('change', (e) => { // troca o item
      this._itemSelecionado = e.target.value;           // guarda a escolha
      this.aplicar();                                   // redesenha cards + contexto
    });

    // Delegação de clique na grade: card de matéria → modal de tópicos
    document.getElementById('sa-grade').addEventListener('click', (e) => { // clique na grade
      const cartao = e.target.closest('.sa-cartao');    // foi num card de matéria?
      if (cartao) this.abrirModalMateria(cartao.dataset.materia); // abre o modal da matéria
    });
    // Teclado: Enter/Espaço no card focado abre o modal
    document.getElementById('sa-grade').addEventListener('keydown', (e) => { // tecla na grade
      if (e.key !== 'Enter' && e.key !== ' ') return;   // só Enter e espaço
      const cartao = e.target.closest('.sa-cartao');    // num card de matéria?
      if (cartao && e.target === cartao) {              // foco no card em si
        e.preventDefault();                             // evita rolagem no espaço
        this.abrirModalMateria(cartao.dataset.materia); // abre o modal
      }
    });

    // Delegação no modal: tópico → explicação; voltar → lista de tópicos
    this._ligarModal();                                 // fia o clique interno do modal (idempotente)

    // Restaura a seleção anterior (importante ao trocar o idioma, que redesenha a tela)
    document.getElementById('sa-categoria').value = this._categoria; // devolve o valor escolhido
    this.atualizarFiltros();                            // repopula o item e desenha o estado atual
  },

  // Atualiza o dropdown do item conforme a categoria (e mostra/esconde o campo)
  atualizarFiltros() {
    const campo = document.querySelector('#tela-sala .sa-campo-item'); // campo do item
    const sel = document.getElementById('sa-item');      // select do item
    const precisaItem = this._categoria === 'vagas' || this._categoria === 'bancas' || this._categoria === 'faculdade'; // precisa de sub-seleção?
    if (campo) campo.classList.toggle('oculto', !precisaItem); // mostra/esconde o campo

    if (!precisaItem) { this.aplicar(); return; }       // sem item: já redesenha

    let opcoes = '';                                    // monta as <option>
    if (this._categoria === 'vagas') {                  // cargos de concurso
      opcoes = DadosSala.vagas.map(v => '<option value="' + Util.escape(v.id) + '">' + Util.escape(v.icone + ' ' + v.nome) + '</option>').join('');
    } else if (this._categoria === 'bancas') {          // bancas organizadoras
      opcoes = DadosBancas.bancas.map(b => '<option value="' + Util.escape(b.nome) + '">' + Util.escape(b.nome) + '</option>').join('');
    } else {                                            // faculdade (cursos)
      opcoes = DadosSala.faculdades.map(f => '<option value="' + Util.escape(f.id) + '">' + Util.escape(f.icone + ' ' + f.nome) + '</option>').join('');
    }
    sel.innerHTML = '<option value="">' + T('sala_item_sel') + '</option>' + opcoes; // placeholder + opções
    sel.value = this._itemSelecionado || '';            // restaura a seleção anterior, se ainda existir
    this.aplicar();                                     // redesenha (mostra o estado "escolha uma opção")
  },

  // Normaliza uma lista de matérias para o formato interno { materia, icone, resumo, topicos:[{nome, explicacao}] }
  normalizar(lista) {
    return lista.map(m => ({
      materia: m.materia,
      icone: m.icone || '📚',
      resumo: m.resumo || '',
      topicos: (m.topicos || []).map(t => ({
        nome: t.nome,
        // Fontes diferentes: dados-sala usa "explicacao"; dados-temas usa "porque"+"como"
        explicacao: t.explicacao || ((t.porque || t.como)
          ? (t.porque ? T('ed_topico_porque') + ': ' + t.porque + ' · ' : '') + (t.como ? T('ed_topico_como') + ': ' + t.como : '')
          : '')
      }))
    }));
  },

  // Calcula peso de café 1-5 para indicar chance de cair na prova
  _pesoCafe(nomeTopico) {
    // Heurística estável: soma dos pontos de código do nome → 1..5
    let soma = 0;
    for (let i = 0; i < nomeTopico.length; i++) soma += nomeTopico.charCodeAt(i);
    return (soma % 5) + 1;
  },

  // Aplica o filtro atual: monta a lista de matérias e o contexto, e desenha
  aplicar() {
    const contextoArea = document.getElementById('sa-contexto'); // área do cartão de contexto
    const grade = document.getElementById('sa-grade');  // área dos cards
    let lista = [];                                     // matérias a exibir
    let contextoHtml = '';                              // cartão de contexto (banca/vaga/faculdade)
    let contextoBusca = 'concurso';                     // sufixo da busca do YouTube

    // ---- Monta a lista conforme a categoria escolhida ----
    if (this._categoria === 'vagas') {                  // VAGAS
      const vaga = this._itemSelecionado ? DadosSala.vagas.find(v => v.id === this._itemSelecionado) : null;
      if (!vaga) {                                      // nenhuma vaga escolhida ainda
        grade.innerHTML = this._estadoEscolha('sala_escolha_vaga'); // orienta a escolher
        if (contextoArea) contextoArea.innerHTML = '';
        this._lista = [];                               // limpa a lista
        return;
      }
      lista = this.normalizar(vaga.materias);           // matérias da vaga
      contextoBusca = 'concurso';                       // busca de concurso
      contextoHtml = '<div class="cartao sa-contexto aparecer">' // cartão da vaga
        + '<div class="sa-contexto-topo"><span class="sa-icone-grande">' + Util.escape(vaga.icone) + '</span>'
        + '<div><h3 style="margin:0">' + Util.escape(vaga.nome) + '</h3>'
        + '<p class="texto-suave" style="margin:0.2rem 0 0;font-size:0.82rem">🎓 ' + Util.escape(vaga.escolaridade)
        + (vaga.bancas && vaga.bancas.length ? ' · 🕵️ ' + Util.escape(vaga.bancas.join(', ')) : '') + '</p></div></div>'
        + '<p style="margin:0.6rem 0 0;font-size:0.9rem">' + Util.escape(vaga.resumo) + '</p>'
        + '</div>';
    } else if (this._categoria === 'bancas') {          // BANCAS
      const banca = this._itemSelecionado ? DadosBancas.bancas.find(b => b.nome === this._itemSelecionado) : null;
      if (!banca) {                                     // nenhuma banca escolhida
        grade.innerHTML = this._estadoEscolha('sala_escolha_banca');
        if (contextoArea) contextoArea.innerHTML = '';
        this._lista = [];
        return;
      }
      // A banca testa as matérias de concurso; mostramos o perfil dela + o catálogo de concursos
      lista = this.normalizar(DadosTemas.concursos);    // matérias principais de concurso
      contextoBusca = 'banca ' + banca.nome + ' concurso'; // busca com o nome da banca
      contextoHtml = '<div class="cartao sa-contexto aparecer">' // cartão da banca
        + '<h3 style="margin:0">🕵️ ' + Util.escape(banca.nome) + '</h3>'
        + '<p style="margin:0.4rem 0 0;font-size:0.9rem">' + Util.escape(banca.perfil) + '</p>'
        + '<ul class="banca-lista" style="margin-top:0.6rem">'
        + banca.pegadinhas.map(p => '<li>' + Util.escape(p) + '</li>').join('')
        + '</ul>'
        + '<div class="banca-dica">💡 ' + Util.escape(banca.comoSeDarBem) + '</div>'
        + '</div>';
    } else if (this._categoria === 'vestibular') {      // VESTIBULAR
      lista = this.normalizar(DadosTemas.vestibular);   // matérias do vestibular
      contextoBusca = 'vestibular';
    } else if (this._categoria === 'faculdade') {       // FACULDADE
      const curso = this._itemSelecionado ? DadosSala.faculdades.find(f => f.id === this._itemSelecionado) : null;
      if (!curso) {                                     // nenhum curso escolhido
        grade.innerHTML = this._estadoEscolha('sala_escolha_faculdade');
        if (contextoArea) contextoArea.innerHTML = '';
        this._lista = [];
        return;
      }
      lista = this.normalizar(curso.materias);          // matérias do curso
      contextoBusca = 'faculdade';
      contextoHtml = '<div class="cartao sa-contexto aparecer">' // cartão do curso
        + '<div class="sa-contexto-topo"><span class="sa-icone-grande">' + Util.escape(curso.icone) + '</span>'
        + '<div><h3 style="margin:0">' + Util.escape(curso.nome) + '</h3>'
        + '<p class="texto-suave" style="margin:0.2rem 0 0;font-size:0.82rem">📚 ' + Util.escape(curso.area)
        + (curso.duracao ? ' · ⏱ ' + Util.escape(curso.duracao) : '') + '</p></div></div>'
        + '<p style="margin:0.6rem 0 0;font-size:0.9rem">' + Util.escape(curso.resumo) + '</p>'
        + '</div>';
    } else {                                            // CONCURSOS (padrão)
      lista = this.normalizar(DadosTemas.concursos);    // matérias principais de concurso
      contextoBusca = 'concurso';
    }

    this._lista = lista;                                // guarda para o modal
    this._contexto = contextoBusca;                     // guarda o sufixo da busca
    if (contextoArea) contextoArea.innerHTML = contextoHtml; // desenha o contexto (se houver)
    grade.innerHTML = this._gradeHtml(lista);           // desenha os cards
  },

  // Estado "escolha uma opção" quando a categoria precisa de item e nada foi escolhido
  _estadoEscolha(chave) {
    return '<div class="cartao sa-escolha aparecer">'   // cartão convite
      + '<div class="sa-escolha-icone">🎯</div>'
      + '<p style="margin:0.4rem 0;font-weight:800">' + T(chave) + '</p>'
      + '<p class="texto-suave" style="margin:0;font-size:0.88rem">' + T('sala_escolha_sub') + '</p>'
      + '</div>';
  },

  // Monta o HTML da grade de cards de matérias
  _gradeHtml(lista) {
    if (!lista.length) return '<p class="texto-suave">' + T('sala_vazio') + '</p>'; // lista vazia
    let html = '<div class="sa-grade">';                // abre a grade
    for (const m of lista) {                            // percorre as matérias
      html += '<div class="cartao sa-cartao aparecer" data-materia="' + Util.escape(m.materia) + '" role="button" tabindex="0" title="' + T('sala_cartao') + '">'; // card clicável
      html += '<h3>' + Util.escape(m.icone) + ' ' + Util.escape(m.materia) + '</h3>'; // título
      if (m.resumo) html += '<p class="texto-suave" style="font-size:0.88rem;margin:0.2rem 0 0.6rem">' + Util.escape(m.resumo) + '</p>'; // resumo
      html += '<p class="sa-contagem">📌 ' + T('sala_topicos_preview', { n: m.topicos.length }) + '</p>'; // contagem
      html += '<ul class="sa-preview">';                // prévia dos tópicos
      m.topicos.slice(0, 4).forEach(t => {              // mostra os 4 primeiros
        html += '<li>' + Util.escape(t.nome) + '</li>';
      });
      if (m.topicos.length > 4) html += '<li class="sa-mais">' + T('sala_preview_mais', { n: m.topicos.length - 4 }) + '</li>'; // "+N"
      html += '</ul>';                                  // fecha a prévia
      html += '</div>';                                 // fecha o card
    }
    html += '</div>';                                   // fecha a grade
    return html;
  },

  // Liga a delegação do modal compartilhado (idempotente; usa classes .sa-* próprias)
  _ligarModal() {
    if (this._modalLigado) return;                      // já ligado? não duplica
    this._modalLigado = true;                           // marca como ligado
    document.getElementById('modal-conteudo').addEventListener('click', (e) => { // clique no conteúdo
      const topico = e.target.closest('.sa-topico');    // foi num tópico da Sala de Aula?
      if (topico) this.abrirModalTopico(topico.dataset.materia, topico.dataset.topico); // abre a explicação
      const voltar = e.target.closest('.sa-voltar');    // foi no "voltar aos tópicos"?
      if (voltar) this.abrirModalMateria(voltar.dataset.materia); // reabre a lista da matéria
    });
  },

  // Abre o modal de uma matéria: todos os tópicos principais
  abrirModalMateria(nomeMateria) {
    EditalUI.iniciarModal();                            // garante a fiação do modal
    const materia = this._lista.find(m => m.materia === nomeMateria); // acha na lista atual
    if (!materia) return;                               // matéria desconhecida? sai
    let html = '<h3 style="margin-top:0;padding-right:1.6rem">' + Util.escape(materia.icone) + ' ' + Util.escape(materia.materia) + '</h3>'; // título
    if (materia.resumo) html += '<p style="font-size:0.85rem;margin:0.4rem 0 0.6rem">' + Util.escape(materia.resumo) + '</p>'; // resumo
    html += '<p class="texto-suave" style="font-size:0.78rem;margin:0 0 0.7rem">' + T('sala_topico_hint') + '</p>'; // dica de uso
    html += '<p style="font-weight:900;font-size:0.8rem;margin:0.5rem 0 0.4rem">📌 ' + T('sala_topicos_t') + '</p>'; // rótulo da lista
    for (const t of materia.topicos) {                  // percorre os tópicos
      const peso = this._pesoCafe(t.nome);              // 1 a 5 xícaras de café
      const cafes = '☕'.repeat(peso);
      html += '<button type="button" class="sa-topico" data-materia="' + Util.escape(materia.materia) + '" data-topico="' + Util.escape(t.nome) + '"><span class="sa-topico-nome">' + Util.escape(t.nome) + '</span><span class="sa-topico-peso" title="Chance de cair">' + cafes + '</span></button>'; // tópico clicável com peso
    }
    document.getElementById('modal-conteudo').innerHTML = html; // despeja no modal
    document.getElementById('modal-materia').classList.remove('oculto'); // mostra o modal
  },

  // Abre o modal de um tópico: título + explicação + itens (se houver) + link do YouTube
  abrirModalTopico(nomeMateria, nomeTopico) {
    EditalUI.iniciarModal();                            // garante a fiação do modal
    const materia = this._lista.find(m => m.materia === nomeMateria); // acha a matéria
    const topico = materia ? materia.topicos.find(t => t.nome === nomeTopico) : null; // acha o tópico
    if (!materia || !topico) return;                    // não achou? sai
    let html = '<h3 style="margin-top:0;padding-right:1.6rem">📌 ' + Util.escape(topico.nome) + '</h3>'; // título do tópico
    html += '<p class="texto-suave" style="font-size:0.8rem;margin:0 0 0.7rem">' + Util.escape(materia.icone) + ' ' + Util.escape(materia.materia) + '</p>'; // matéria de origem

    // Explicação introdutória do tópico (antes dos sub-itens, se houver)
    if (topico.explicacao) {
      html += '<div class="topico-explicacao">';          // abre a caixa da explicação
      html += '<p style="margin:0 0 0.5rem">' + Util.escape(topico.explicacao) + '</p>'; // explicação
      html += '</div>';                                   // fecha a caixa
    }

    // Se o tópico tem sub-itens (lista que compõe o tópico), renderiza cada um
    if (topico.itens && topico.itens.length) {
      html += '<p style="font-weight:900;font-size:0.8rem;margin:0.8rem 0 0.4rem">🧩 ' + T('sala_subitens') + '</p>';
      html += '<ul class="sa-subitens">';
      for (const item of topico.itens) {
        html += '<li class="sa-subitem">';
        html += '<strong>' + Util.escape(item.nome) + '</strong>';
        if (item.explicacao) {
          html += '<span class="sa-subitem-explicacao"> — ' + Util.escape(item.explicacao) + '</span>';
        }
        html += '</li>';
      }
      html += '</ul>';
    } else if (!topico.explicacao) {                      // sem explicação nem sub-itens — honesto
      html += '<div class="topico-explicacao">';
      html += '<p>' + T('ed_topico_generico') + '</p>';   // orientação genérica
      html += '</div>';
    }

    // Link da aula no YouTube (matéria + tópico + contexto)
    const busca = materia.materia + ' ' + topico.nome + ' ' + this._contexto; // termo de busca
    const url = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(busca); // monta a URL
    html += '<a class="link-video" href="' + url + '" target="_blank" rel="noopener">' + T('sim_aula', { tema: Util.escape(topico.nome) }) + '</a>'; // link da aula
    html += '<button type="button" class="ver-mais sa-voltar" data-materia="' + Util.escape(materia.materia) + '" style="display:block;margin-top:0.8rem">' + T('sala_voltar', { materia: Util.escape(materia.materia) }) + '</button>'; // volta à matéria
    document.getElementById('modal-conteudo').innerHTML = html; // despeja no modal
    document.getElementById('modal-materia').classList.remove('oculto'); // mostra o modal
  }
};
