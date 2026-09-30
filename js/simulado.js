/* ============================================================
   GABARITO CAFÉ — js/simulado.js
   Tela do simulado inteira: configuração (5 a 50 questões),
   jogo de perguntas com correção comentada + aula no YouTube,
   resultado final com acertos/erros e revisão das erradas.
   ============================================================ */

// Helper de Anotações & Marca-Texto Virtual
const AnotacoesUI = {
  obter(qid) {
    const uid = Auth.idAtual();
    if (!uid) return { texto: '', grifos: [] };
    const banco = Armazenamento.ler('gc_anotacoes_' + uid, {});
    return banco[qid] || { texto: '', grifos: [] };
  },

  salvarTexto(qid, texto) {
    const uid = Auth.idAtual();
    if (!uid) return;
    const chave = 'gc_anotacoes_' + uid;
    const banco = Armazenamento.ler(chave, {});
    if (!banco[qid]) banco[qid] = { texto: '', grifos: [] };
    banco[qid].texto = texto;
    Armazenamento.salvar(chave, banco);
  },

  salvarGrifo(qid, trecho) {
    if (!trecho || !trecho.trim()) return;
    const uid = Auth.idAtual();
    if (!uid) return;
    const chave = 'gc_anotacoes_' + uid;
    const banco = Armazenamento.ler(chave, {});
    if (!banco[qid]) banco[qid] = { texto: '', grifos: [] };
    if (!banco[qid].grifos) banco[qid].grifos = [];
    if (!banco[qid].grifos.includes(trecho)) {
      banco[qid].grifos.push(trecho);
    }
    Armazenamento.salvar(chave, banco);
  },

  limparGrifos(qid) {
    const uid = Auth.idAtual();
    if (!uid) return;
    const chave = 'gc_anotacoes_' + uid;
    const banco = Armazenamento.ler(chave, {});
    if (banco[qid]) {
      banco[qid].grifos = [];
      Armazenamento.salvar(chave, banco);
    }
  },

  aplicarGrifos(textoHtml, grifos = []) {
    if (!grifos || grifos.length === 0) return textoHtml;
    let res = textoHtml;
    for (const g of grifos) {
      if (!g) continue;
      const regex = new RegExp(g.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
      res = res.replace(regex, '<mark class="grifo-virtual">' + g + '</mark>');
    }
    return res;
  }
};

// Objeto global do simulado
const SimuladoUI = {

  // Estado interno do simulado em andamento
  estado: {
    fase: 'config',                 // fase atual: config | jogo | resultado | revisao
    perguntas: [],                  // questões sorteadas (com alternativas embaralhadas)
    respostas: [],                  // resposta dada pelo usuário em cada questão (-1 = pulou)
    comecouEm: 0,                   // instante em que o simulado começou (ms)
    timer: null,                    // referência do cronômetro (para parar depois)
    filtroMaterias: [],             // matérias escolhidas no filtro
    filtroBanca: '',                // banca escolhida no filtro
    filtroNiveis: [],               // níveis de dificuldade escolhidos no filtro
    filtroEnsinos: [],              // níveis de ensino (médio/superior) escolhidos no filtro
    apenasIneditas: false,          // apenas questões inéditas
    apenasErridas: false,           // apenas questões que já errou
    soEdital: false,                // se está filtrando pelas matérias do edital
    materiasEdital: [],             // matérias vindas da análise do edital
    ultimoResultado: null,         // último resultado salvo (para revisão)
    refazendo: false               // se é o modo "refazer as erradas"
  },

  // Abre a tela do simulado na fase de configuração
  abrir(opcoes = {}) {
    this.estado.fase = 'config';                            // volta para a fase de configuração
    this.estado.filtroMaterias = opcoes.materias || [];     // matérias iniciais (do edital, se houver)
    this.estado.materiasEdital = opcoes.materias || [];     // guarda as matérias do edital
    this.estado.soEdital = !!(opcoes.materias && opcoes.materias.length); // liga o filtro do edital se veio
    this.estado.filtroEnsinos = opcoes.ensinos || [];       // nível de ensino sugerido (edital)
    this.estado.filtroBanca = opcoes.banca || '';           // TEAM_005: banca pré-escolhida (edital) ou sem filtro
    this.estado.refazendo = false;                          // não é refazer
    this.renderizarConfig();                                // desenha a configuração
  },

  // Desenha a fase de configuração (quantidade, filtros e dicas)
  renderizarConfig() {
    const caixa = document.getElementById('tela-simulado'); // pega a seção da tela
    const materias = MotorSimulado.materiasDoBanco();       // matérias do banco (para o select)
    const bancas = MotorSimulado.bancasDoBanco();           // bancas do banco (para o select)
    const e = this.estado;                                  // atalho para o estado

    // ---- Cartão principal de montagem ----
    let html = '<div class="cartao destaque aparecer">';    // abre o cartão
    html += '<h3>' + T('sim_t') + '</h3>';                  // título traduzido
    html += '<p class="texto-suave">' + T('sim_sub') + '</p>'; // legenda traduzida

    // Botões de quantidade (5, 10, 15, 20, 30, 50)
    html += '<p style="font-weight:900;margin:1rem 0 0.4rem">' + T('sim_quantas') + '</p>'; // rótulo traduzido
    html += '<div class="sim-escolhas">';                   // abre a fileira de botões
    for (const qtd of [5, 10, 15, 20, 30, 50]) {            // percorre as quantidades
      html += '<button class="sim-quantidade" data-qtd="' + qtd + '">' + qtd + '</button>'; // botão de cada quantidade
    }
    html += '</div>';                                       // fecha a fileira

    // Filtro de matérias: pode escolher MAIS DE UMA (chips clicáveis)
    html += '<div class="campo" style="margin-top:1rem"><label>' + T('sim_materias_l') + '</label>'; // rótulo traduzido
    html += '<div class="chips-escolha" id="sim-materias">'; // abre a fileira de matérias
    for (const m of materias) {                             // percorre as matérias do banco
      // Chip clicável com o nome da matéria e a quantidade de questões disponíveis
      html += '<button type="button" class="chip-opcao" data-materia="' + this.escape(m.nome) + '">' + this.escape(m.nome) + ' <span class="chip-num">' + m.quantidade + '</span></button>'; // chip
    }
    html += '</div>';                                       // fecha a fileira
    // Botõezinhos de atalho + contador da seleção
    html += '<div class="linha-acoes" style="margin-top:0.5rem">'; // abre a linha de ações
    html += '<button type="button" class="botao botao-fantasma pequeno" id="sim-todas">' + T('sim_todas') + '</button>'; // marcar todas
    html += '<button type="button" class="botao botao-fantasma pequeno" id="sim-limpar">' + T('sim_limpar') + '</button>'; // limpar seleção
    html += '<span id="sim-contador" class="texto-suave" style="font-size:0.8rem;align-self:center"></span>'; // contador
    html += '</div>';                                       // fecha a linha
    html += '</div>';                                       // fecha o campo

    // Filtro de banca (estilo)
    html += '<div class="campo"><label for="sim-banca">' + T('sim_banca_l') + '</label>'; // campo
    html += '<select id="sim-banca">';                      // abre o select
    html += '<option value="">' + T('sim_banca_todas') + '</option>'; // opção padrão
    for (const b of bancas) {                               // percorre as bancas
      html += '<option value="' + this.escape(b.nome) + '">' + this.escape(b.nome) + ' (' + b.quantidade + ')</option>'; // opção
    }
    html += '</select></div>';                              // fecha select e campo

    // Filtro de dificuldade: chips de múltipla escolha (fácil, médio, difícil)
    html += '<div class="campo"><label>' + T('sim_nivel_l') + '</label>'; // rótulo traduzido
    html += '<div class="chips-escolha" id="sim-niveis">';  // abre a fileira de níveis
    for (const n of MotorSimulado.niveisDoBanco()) {        // percorre os níveis do banco
      // Chip clicável com o nome do nível e a quantidade de questões dele
      html += '<button type="button" class="chip-opcao" data-nivel="' + n.nivel + '">' + this.textoNivel(n.nivel) + ' <span class="chip-num">' + n.quantidade + '</span></button>'; // chip
    }
    html += '</div></div>';                                 // fecha fileira e campo

    // Filtro de nível do concurso: chips de múltipla escolha (médio, superior)
    html += '<div class="campo"><label>' + T('sim_ensino_l') + '</label>'; // rótulo traduzido
    html += '<div class="chips-escolha" id="sim-ensinos">'; // abre a fileira de níveis de ensino
    for (const en of MotorSimulado.ensinosDoBanco()) {      // percorre os níveis de ensino do banco
      // Chip clicável com o nome do nível e a quantidade de questões dele
      html += '<button type="button" class="chip-opcao" data-ensino="' + en.nivel + '">' + this.textoEnsino(en.nivel) + ' <span class="chip-num">' + en.quantidade + '</span></button>'; // chip
    }
    html += '</div></div>';                                 // fecha fileira e campo

    // Filtros de histórico de resolução
    html += '<div class="campo" style="margin-top:0.8rem">';
    html += '<label style="font-weight:800">' + T('sim_historico_l') + '</label>';
    html += '<div style="display:flex;gap:1rem;flex-wrap:wrap;margin-top:0.3rem">';
    html += '<label style="cursor:pointer;display:flex;align-items:center;gap:0.4rem;font-size:0.9rem">';
    html += '<input type="checkbox" id="sim-ineditas"> ' + T('sim_ineditas_l') + '</label>';
    html += '<label style="cursor:pointer;display:flex;align-items:center;gap:0.4rem;font-size:0.9rem">';
    html += '<input type="checkbox" id="sim-erradas"> ' + T('sim_erradas_l') + '</label>';
    html += '</div></div>';

    // Caixa "usar matérias do edital" (aparece só se o edital foi analisado)
    if (e.materiasEdital.length > 0) {                      // se temos matérias do edital
      html += '<label style="display:flex;gap:0.5rem;align-items:center;font-weight:800;cursor:pointer">'; // abre a caixinha
      html += '<input type="checkbox" id="sim-so-edital"' + (e.soEdital ? ' checked' : '') + '>'; // check do filtro
      html += T('sim_edital_check', { n: e.materiasEdital.length }) + '</label>'; // rótulo traduzido
    }

    // TEAM_005: aviso de que os números se atualizam conforme os filtros
    html += '<p class="texto-suave" style="font-size:0.8rem;margin:0.2rem 0 0">' + T('sim_ligados') + '</p>'; // dica dos filtros ligados

    // Aviso de quantas questões estão disponíveis com os filtros atuais
    html += '<div id="sim-disponiveis" class="nota" style="margin-top:1rem"></div>'; // caixa de aviso

    // Botão de começar
    html += '<button id="btn-comecar" class="botao botao-primario grande" style="margin-top:1rem">' + T('sim_btn_comecar') + '</button>'; // CTA traduzido
    html += '</div>';                                       // fecha o cartão

    // ---- Dicas abaixo do simulado (no idioma atual) ----
    html += '<div class="titulo-secao"><h3>' + T('sim_dicas_t') + '</h3></div>'; // título da seção
    html += '<div class="cartao">';                         // abre o cartão de dicas
    html += '<ul class="banca-lista" style="font-size:0.92rem">'; // lista de dicas
    for (const dica of this.dicasDoIdioma()) {              // percorre as dicas do idioma atual
      html += '<li>' + this.escape(dica) + '</li>';         // cada dica
    }
    html += '</ul></div>';                                  // fecha lista e cartão

    caixa.innerHTML = html;                                 // despeja a tela

    // ---- Liga os eventos da configuração ----
    caixa.querySelectorAll('.sim-quantidade').forEach(btn => { // para cada botão de quantidade
      btn.addEventListener('click', () => {                 // no clique
        caixa.querySelectorAll('.sim-quantidade').forEach(b => b.classList.remove('selecionado')); // limpa a seleção
        btn.classList.add('selecionado');                   // marca o escolhido
        this.atualizarDisponiveis();                        // atualiza o aviso de disponíveis
      });
    });

    const chkIneditas = document.getElementById('sim-ineditas');
    const chkErradas = document.getElementById('sim-erradas');
    if (chkIneditas && chkErradas) {
      chkIneditas.addEventListener('change', () => {
        if (chkIneditas.checked) chkErradas.checked = false;
        this.atualizarDisponiveis();
      });
      chkErradas.addEventListener('change', () => {
        if (chkErradas.checked) chkIneditas.checked = false;
        this.atualizarDisponiveis();
      });
    }

    // Cada chip de matéria liga/desliga a matéria do simulado
    caixa.querySelectorAll('#sim-materias .chip-opcao').forEach(chip => { // percorre os chips
      chip.addEventListener('click', () => {               // no clique
        chip.classList.toggle('ativa');                     // marca/desmarca a matéria
        this.atualizarDisponiveis();                        // atualiza o aviso de disponíveis
      });
    });
    // Botão "selecionar todas" marca todos os chips
    document.getElementById('sim-todas').addEventListener('click', () => { // clique
      caixa.querySelectorAll('#sim-materias .chip-opcao').forEach(c => c.classList.add('ativa')); // marca todos
      this.atualizarDisponiveis();                          // atualiza o aviso
    });
    // Botão "limpar" desmarca todos (nenhum = todas as matérias)
    document.getElementById('sim-limpar').addEventListener('click', () => { // clique
      caixa.querySelectorAll('#sim-materias .chip-opcao').forEach(c => c.classList.remove('ativa')); // limpa
      this.atualizarDisponiveis();                          // atualiza o aviso
    });
    document.getElementById('sim-banca').addEventListener('change', () => { // muda a banca
      this.atualizarDisponiveis();                          // atualiza o aviso
    });
    // Cada chip de dificuldade liga/desliga o nível do simulado
    caixa.querySelectorAll('#sim-niveis .chip-opcao').forEach(chip => { // percorre os chips
      chip.addEventListener('click', () => {               // no clique
        chip.classList.toggle('ativa');                     // marca/desmarca o nível
        this.atualizarDisponiveis();                        // atualiza o aviso de disponíveis
      });
    });
    // Cada chip de ensino liga/desliga o nível de concurso do simulado
    caixa.querySelectorAll('#sim-ensinos .chip-opcao').forEach(chip => { // percorre os chips
      chip.addEventListener('click', () => {               // no clique
        chip.classList.toggle('ativa');                     // marca/desmarca o nível
        this.atualizarDisponiveis();                        // atualiza o aviso de disponíveis
      });
    });
    const checkEdital = document.getElementById('sim-so-edital'); // pega o check do edital
    if (checkEdital) {                                      // se o check existe
      checkEdital.addEventListener('change', () => {        // ao marcar/desmarcar
        if (checkEdital.checked) {                          // marcou: os chips assumem exatamente as matérias do edital
          caixa.querySelectorAll('#sim-materias .chip-opcao').forEach(chip => { // percorre os chips
            chip.classList.toggle('ativa', e.materiasEdital.includes(chip.dataset.materia)); // marca só as do edital
          });
        }
        this.atualizarDisponiveis();                        // atualiza o aviso de disponíveis
      });
    }
    document.getElementById('btn-comecar').addEventListener('click', () => { // clique em começar
      this.comecar();                                       // inicia o jogo
    });

    // Marca os chips das matérias que vieram de fora (edital ou recomendação do dashboard)
    if (e.filtroMaterias.length > 0) {                      // se o simulado já foi aberto com matérias
      caixa.querySelectorAll('#sim-materias .chip-opcao').forEach(chip => { // percorre os chips
        if (e.filtroMaterias.includes(chip.dataset.materia)) chip.classList.add('ativa'); // marca os escolhidos
      });
    }

    // Marca os chips de nível de ensino sugeridos (pela escolaridade do edital)
    if (e.filtroEnsinos.length > 0) {                       // se o simulado veio com nível sugerido
      caixa.querySelectorAll('#sim-ensinos .chip-opcao').forEach(chip => { // percorre os chips
        if (e.filtroEnsinos.includes(chip.dataset.ensino)) chip.classList.add('ativa'); // marca os escolhidos
      });
    }

    // TEAM_005: pré-seleciona a banca que veio de fora (dropdown do edital)
    if (e.filtroBanca) {                                    // se veio banca sugerida
      const selBanca = document.getElementById('sim-banca'); // o dropdown de banca
      if (selBanca) selBanca.value = e.filtroBanca;         // marca a banca escolhida
    }

    this.atualizarDisponiveis();                            // preenche o aviso inicial
  },

  // Calcula os filtros atuais (matérias marcadas nos chips + banca + histórico)
  filtrosAtuais() {
    const bancaSel = document.getElementById('sim-banca');  // select de banca
    // Junta TODAS as matérias com o chip ligado (múltipla escolha) — os chips sempre mandam
    const materias = Array.from(document.querySelectorAll('#sim-materias .chip-opcao.ativa')).map(c => c.dataset.materia); // pega as marcadas
    const banca = (bancaSel && bancaSel.value) || '';       // banca escolhida (ou vazia)
    // Junta TODOS os níveis com o chip ligado (múltipla escolha)
    const niveis = Array.from(document.querySelectorAll('#sim-niveis .chip-opcao.ativa')).map(c => c.dataset.nivel); // pega os marcados
    // Junta TODOS os níveis de ensino com o chip ligado (múltipla escolha)
    const ensinos = Array.from(document.querySelectorAll('#sim-ensinos .chip-opcao.ativa')).map(c => c.dataset.ensino); // pega os marcados
    const chkIneditas = document.getElementById('sim-ineditas');
    const chkErradas = document.getElementById('sim-erradas');
    const apenasIneditas = chkIneditas ? chkIneditas.checked : false;
    const apenasErridas = chkErradas ? chkErradas.checked : false;
    return { materias, banca, niveis, ensinos, apenasIneditas, apenasErridas };            // devolve os filtros
  },

  // Atualiza o texto "X questões disponíveis com esses filtros"
  atualizarDisponiveis() {
    const { materias, banca, niveis, ensinos, apenasIneditas, apenasErridas } = this.filtrosAtuais(); // pega os filtros atuais
    const idUsuario = Auth.idAtual();
    const disponiveis = MotorSimulado.contarDisponiveis({ materias, banca, niveis, ensinos, apenasIneditas, apenasErridas, idUsuario }); // conta questões
    const caixa = document.getElementById('sim-disponiveis'); // caixa do aviso
    if (!caixa) return;                                     // se não existe (não está na tela), sai
    // Monta o texto do aviso (traduzido, com o número de questões)
    const complemento = disponiveis < 5 ? T('sim_disp_poucas') : T('sim_disp_ok'); // parte final do aviso
    caixa.textContent = T('sim_disp', { n: disponiveis }) + complemento; // aviso humanizado
    // Atualiza o contador de matérias escolhidas
    const contador = document.getElementById('sim-contador'); // contador da seleção
    if (contador) {                                         // se o contador existe na tela
      // Mais de uma matéria: plural | uma matéria: singular | nenhuma: todas
      contador.textContent = materias.length > 1
        ? T('sim_sel_n', { n: materias.length })            // plural
        : (materias.length === 1 ? T('sim_sel_1') : T('sim_materia_todas')); // singular ou todas
    }
    // Desmarca o check do edital se a seleção manual já divergiu das matérias dele
    const checkEdital = document.getElementById('sim-so-edital'); // check do edital
    if (checkEdital && checkEdital.checked && this.estado.materiasEdital.length > 0) { // se o edital manda
      const selecionadas = new Set(materias);               // matérias marcadas agora
      const edital = this.estado.materiasEdital;            // as do edital
      const iguais = edital.length === selecionadas.size && edital.every(m => selecionadas.has(m)); // seleção é exatamente a do edital?
      if (!iguais) checkEdital.checked = false;             // divergiu → desmarca o check
    }
    // Desabilita os botões de quantidade maiores que o estoque
    document.querySelectorAll('.sim-quantidade').forEach(btn => { // percorre os botões
      const qtd = parseInt(btn.dataset.qtd, 10);            // quantidade do botão
      btn.disabled = qtd > disponiveis;                     // desabilita se faltar estoque
    });

    // TEAM_005: filtros ligados — as contagens de cada dimensão refletem os
    // outros filtros ativos (escolheu matéria → bancas/níveis/ensinos encolhem;
    // escolheu banca → matérias/níveis/ensinos encolhem; e assim por diante).
    const fac = MotorSimulado.facetas({ materias, banca, niveis, ensinos, apenasIneditas, apenasErridas, idUsuario }); // contagens facetadas
    const ligarChips = (seletor, dado, dicionario) => {     // atualiza uma fileira de chips
      document.querySelectorAll(seletor).forEach(chip => {  // percorre os chips
        const n = dicionario[chip.dataset[dado]] || 0;      // contagem sob os demais filtros
        const num = chip.querySelector('.chip-num');        // bolinha de quantidade
        if (num) num.textContent = n;                       // atualiza o número
        chip.disabled = n === 0 && !chip.classList.contains('ativa'); // zera? só desabilita se não estiver marcado
      });
    };
    ligarChips('#sim-materias .chip-opcao', 'materia', fac.materias); // matérias sob banca+níveis+ensinos
    ligarChips('#sim-niveis .chip-opcao', 'nivel', fac.niveis);       // dificuldades sob matérias+banca+ensinos
    ligarChips('#sim-ensinos .chip-opcao', 'ensino', fac.ensinos);    // ensinos sob matérias+banca+níveis
    // O select de banca mostra quantas questões cada banca tem sob os demais filtros
    const selBanca = document.getElementById('sim-banca');  // o dropdown de banca
    if (selBanca) {                                         // se existe na tela
      Array.from(selBanca.options).forEach(op => {          // percorre as opções
        if (!op.value) return;                              // a opção "todas" não tem contagem
        const n = fac.bancas[op.value] || 0;                // contagem sob matérias+níveis+ensinos
        op.textContent = op.value + ' (' + n + ')';         // refaz o rótulo com o número filtrado
        op.disabled = n === 0 && !op.selected;              // zera? só desabilita se não for a escolhida
      });
    }
  },

  // Inicia o jogo: sorteia questões e mostra a primeira
  comecar() {
    const e = this.estado;                                  // atalho para o estado
    const selecionado = document.querySelector('.sim-quantidade.selecionado'); // botão escolhido
    if (!selecionado) {                                     // se o usuário não escolheu quantidade
      App.torrada(T('toast_qtd'), 'erro'); // avisa
      return;                                               // não começa
    }
    const quantidade = parseInt(selecionado.dataset.qtd, 10); // quantidade escolhida
    const { materias, banca, niveis, ensinos, apenasIneditas, apenasErridas } = this.filtrosAtuais(); // filtros atuais
    const idUsuario = Auth.idAtual();
    e.filtroMaterias = materias;                            // guarda no estado
    e.filtroBanca = banca;                                  // guarda no estado
    e.filtroNiveis = niveis;                                // guarda no estado
    e.filtroEnsinos = ensinos;                              // guarda no estado
    e.apenasIneditas = apenasIneditas;
    e.apenasErridas = apenasErridas;
    e.perguntas = MotorSimulado.montar({                    // sorteia as questões
      quantidade: quantidade,                               // tamanho pedido
      materias: materias,                                   // filtro de matérias
      banca: banca,                                         // filtro de banca
      niveis: niveis,                                       // filtro de dificuldade
      ensinos: ensinos,                                     // filtro de nível de ensino
      apenasIneditas: apenasIneditas,                       // filtro de inéditas
      apenasErridas: apenasErridas,                         // filtro de erradas
      idUsuario: idUsuario,                                 // id do usuário
      excluirIds: [],                                       // sem exclusões (modo normal)
      idsExatos: null                                       // sem ids exatos (modo normal)
    });
    e.respostas = new Array(e.perguntas.length).fill(-1);   // ninguém respondeu nada ainda (-1)
    e.fase = 'jogo';                                        // entra na fase de jogo
    e.comecouEm = Date.now();                               // marca o início do relógio
    this.renderizarPergunta(0);                             // mostra a primeira pergunta
    this.iniciarTimer();                                    // liga o cronômetro
  },

  // Liga o cronômetro (atualiza o relógio a cada segundo)
  iniciarTimer() {
    clearInterval(this.estado.timer);                       // garante que não há outro rodando
    this.estado.timer = setInterval(() => {                 // repete a cada segundo
      const el = document.getElementById('questao-relogio'); // pega o relógio na tela
      if (!el) { clearInterval(this.estado.timer); return; } // se a tela mudou, para o cronômetro
      const seg = Math.floor((Date.now() - this.estado.comecouEm) / 1000); // segundos decorridos
      el.textContent = '⏱ ' + this.tempoFormatado(seg);     // mostra formatado
    }, 1000);                                               // intervalo de 1 segundo
  },

  // Converte segundos em "mm:ss"
  tempoFormatado(totalSeg) {
    const m = Math.floor(totalSeg / 60);                    // minutos
    const s = totalSeg % 60;                                // segundos restantes
    return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0'); // "mm:ss"
  },

  // Desenha uma pergunta (ou o resultado, se acabou)
  renderizarPergunta(indice) {
    const e = this.estado;                                  // atalho para o estado
    if (indice >= e.perguntas.length) {                     // se já passou da última
      this.finalizar();                                     // vai para o resultado
      return;                                               // para
    }
    const q = e.perguntas[indice];                          // questão atual
    const caixa = document.getElementById('tela-simulado'); // pega a seção
    const letras = ['A', 'B', 'C', 'D', 'E', 'F'];          // letras das alternativas

    // ---- Barra de progresso ----
    const pct = (indice / e.perguntas.length) * 100;        // percentual concluído
    let html = '<div class="barra-progresso" style="margin-bottom:1.2rem"><span style="width:' + pct + '%"></span></div>'; // barra

    // ---- Cartão da questão ----
    html += '<div class="cartao aparecer">';                // abre o cartão
    html += '<div class="questao-topo">';                   // cabeçalho da questão
    html += '<span class="questao-numero">' + T('sim_questao', { n: indice + 1, total: e.perguntas.length }) + '</span>'; // numeração traduzida
    html += '<span class="chip materia">' + this.escape(q.materia) + '</span>'; // chip da matéria
    html += '<span class="chip caramelo">🎯 ' + this.escape(q.banca) + '</span>'; // chip do estilo de banca
    if (q.nivel) {                                          // se a questão tem dificuldade marcada
      html += '<span class="chip ' + this.classeNivel(q.nivel) + '">' + this.textoNivel(q.nivel) + '</span>'; // chip do nível
    }
    if (q.ensino) {                                         // se a questão tem nível de ensino marcado
      html += '<span class="chip">🎓 ' + this.textoEnsino(q.ensino) + '</span>'; // chip do nível de ensino
    }
    html += '<button type="button" class="botao botao-fantasma pequeno btn-fav-q" id="btn-fav-' + q.id + '">⭐ ' + T('cad_fav_btn') + '</button>';
    html += '<span id="questao-relogio" class="questao-relogio">⏱ 00:00</span>'; // cronômetro
    html += '</div>';                                       // fecha o cabeçalho

    const anotObj = AnotacoesUI.obter(q.id);
    const enunciadoEscapado = this.escape(q.enunciado);
    const enunciadoComGrifos = AnotacoesUI.aplicarGrifos(enunciadoEscapado, anotObj.grifos);

    html += '<div class="enunciado-caixa" style="position:relative">';
    html += '<p class="enunciado" id="enunciado-txt-' + q.id + '">' + enunciadoComGrifos + '</p>';
    html += '<div style="display:flex;gap:0.5rem;margin-bottom:0.8rem">';
    html += '<button type="button" class="botao botao-fantasma pequeno" id="btn-grifar-' + q.id + '">✏️ ' + T('anot_grifar') + '</button>';
    if (anotObj.grifos && anotObj.grifos.length > 0) {
      html += '<button type="button" class="botao botao-fantasma pequeno" id="btn-limpar-grifos-' + q.id + '">🗑️ ' + T('anot_limpar_grifos') + '</button>';
    }
    html += '</div></div>';

    // ---- Alternativas ----
    html += '<div class="alternativas">';                   // abre a coluna de alternativas
    for (let i = 0; i < q.alternativas.length; i++) {       // percorre as alternativas
      html += '<button class="alternativa" data-indice="' + i + '">'; // botão da alternativa
      html += '<span class="letra">' + letras[i] + '</span>'; // bolinha da letra
      html += '<span>' + this.escape(q.alternativas[i]) + '</span>'; // texto da alternativa
      html += '</button>';                                  // fecha o botão
    }
    html += '</div>';                                       // fecha a coluna

    // Bloco de Anotações / Bizus
    html += '<details class="anotacoes-bloco" style="margin-top:1rem;background:var(--caramelo-suave);padding:0.6rem;border-radius:8px">';
    html += '<summary style="font-weight:800;cursor:pointer">📝 ' + T('anot_titulo') + '</summary>';
    html += '<div style="margin-top:0.5rem">';
    html += '<textarea id="anot-txt-' + q.id + '" style="width:100%;min-height:70px;padding:0.5rem;border-radius:6px;border:1px solid var(--linha);font-family:inherit" placeholder="' + this.escape(T('anot_ph')) + '">' + this.escape(anotObj.texto || '') + '</textarea>';
    html += '</div></details>';

    // ---- Botão de responder ----
    html += '<button id="btn-responder" class="botao botao-primario" style="margin-top:1.2rem" disabled>' + T('sim_responder') + '</button>'; // botão (começa desligado)
    html += '<div id="feedback"></div>';                    // área do feedback (vazia por ora)
    html += '</div>';                                       // fecha o cartão

    caixa.innerHTML = html;                                 // despeja a pergunta
    this.atualizarRelogio();                                // mostra o tempo atual já

    // ---- Liga os eventos das alternativas ----
    caixa.querySelectorAll('.alternativa').forEach(btn => { // para cada alternativa
      btn.addEventListener('click', () => {                 // no clique
        caixa.querySelectorAll('.alternativa').forEach(b => b.classList.remove('selecionada')); // limpa seleções
        btn.classList.add('selecionada');                   // marca a clicada
        document.getElementById('btn-responder').disabled = false; // libera o botão responder
      });
    });

    // ---- Liga eventos de anotação e grifo ----
    const btnGrifar = document.getElementById('btn-grifar-' + q.id);
    if (btnGrifar) {
      btnGrifar.addEventListener('click', () => {
        const sel = window.getSelection();
        const textoSel = sel ? sel.toString().trim() : '';
        if (textoSel.length >= 2) {
          AnotacoesUI.salvarGrifo(q.id, textoSel);
          App.torrada(T('anot_toast_grifado'), 'sucesso');
          this.renderizarPergunta(indice);
        } else {
          App.torrada(T('anot_toast_selecione'), 'erro');
        }
      });
    }

    const btnLimpar = document.getElementById('btn-limpar-grifos-' + q.id);
    if (btnLimpar) {
      btnLimpar.addEventListener('click', () => {
        AnotacoesUI.limparGrifos(q.id);
        this.renderizarPergunta(indice);
      });
    }

    const txtAnot = document.getElementById('anot-txt-' + q.id);
    if (txtAnot) {
      txtAnot.addEventListener('input', () => {
        AnotacoesUI.salvarTexto(q.id, txtAnot.value);
      });
    }

    const btnFav = document.getElementById('btn-fav-' + q.id);
    if (btnFav) {
      btnFav.addEventListener('click', () => {
        if (typeof CadernosUI !== 'undefined') {
          CadernosUI.abrirModalSalvar(q.id);
        }
      });
    }

    // ---- Liga o botão responder ----
    document.getElementById('btn-responder').addEventListener('click', () => { // clique em responder
      this.responder(indice);                               // corrige e mostra o feedback
    });
  },

  // Devolve a classe de cor do chip de dificuldade (verde, âmbar ou vermelho)
  classeNivel(nivel) {
    if (nivel === 'facil') return 'verde';                  // fácil = verde
    if (nivel === 'dificil') return 'vermelho';             // difícil = vermelho
    return 'caramelo';                                      // médio (ou desconhecido) = caramelo
  },

  // Devolve o nome traduzido do nível (chaves literais para o validador enxergar)
  textoNivel(nivel) {
    if (nivel === 'facil') return T('nivel_facil');         // fácil
    if (nivel === 'dificil') return T('nivel_dificil');     // difícil
    return T('nivel_medio');                                // médio (ou desconhecido)
  },

  // Devolve o nome traduzido do nível de ensino (chaves literais para o validador enxergar)
  textoEnsino(ensino) {
    if (ensino === 'superior') return T('ensino_superior'); // superior
    return T('ensino_medio');                               // médio (ou desconhecido)
  },

  // Atualiza o relógio imediatamente (sem esperar o próximo segundo)
  atualizarRelogio() {
    const el = document.getElementById('questao-relogio');  // pega o relógio
    if (!el) return;                                        // se não existe, sai
    const seg = Math.floor((Date.now() - this.estado.comecouEm) / 1000); // segundos decorridos
    el.textContent = '⏱ ' + this.tempoFormatado(seg);       // mostra formatado
  },

  // Corrige a resposta e mostra o feedback completo (explicação, dica e vídeo)
  responder(indice) {
    const e = this.estado;                                  // atalho para o estado
    const q = e.perguntas[indice];                          // questão atual
    const selecionada = document.querySelector('.alternativa.selecionada'); // alternativa escolhida
    if (!selecionada) return;                               // segurança: sem seleção, sem correção
    const resposta = parseInt(selecionada.dataset.indice, 10); // índice da resposta dada
    e.respostas[indice] = resposta;                         // guarda a resposta no estado
    const acertou = MotorSimulado.corrigir(q, resposta);    // confere se acertou

    // ---- Pinta as alternativas ----
    document.querySelectorAll('.alternativa').forEach(btn => { // percorre todas
      const i = parseInt(btn.dataset.indice, 10);           // índice da alternativa
      btn.disabled = true;                                  // trava os cliques
      if (i === q.correta) btn.classList.add('certa');      // pinta a certa de verde
      else if (i === resposta) btn.classList.add('errada'); // pinta a escolha errada de vermelho
    });

    // Esconde o botão responder e monta o feedback
    document.getElementById('btn-responder').classList.add('oculto'); // some o botão
    const feedback = document.getElementById('feedback');   // área do feedback
    let html = '<div class="feedback ' + (acertou ? 'certo' : 'errado') + '">'; // abre o bloco (verde ou vermelho)

    if (acertou) {                                          // se acertou
      html += '<h3>' + T('sim_certo') + '</h3>';            // celebra (traduzido)
      html += '<p class="explicacao">' + this.escape(q.explicacao) + '</p>'; // mostra a explicação mesmo assim
    } else {                                                // se errou
      // Mostra o que errou + o gabarito + como fazer (traduzido)
      html += '<h3>' + T('sim_errou', { letra: String.fromCharCode(65 + resposta) }) + '</h3>'; // o que o usuário marcou
      html += '<p class="explicacao"><strong>' + T('sim_certa_e', { letra: String.fromCharCode(65 + q.correta) }) + '</strong> ' + this.escape(q.explicacao) + '</p>'; // gabarito + explicação
    }

    // Passo a passo (se a questão tiver)
    if (q.passos && q.passos.length > 0) {                  // se existe passo a passo
      html += '<div class="bloco"><p style="font-weight:900">' + T('sim_como') + '</p>'; // título traduzido
      html += '<ol class="passos">';                        // abre a lista numerada
      for (const passo of q.passos) {                       // percorre os passos
        html += '<li>' + this.escape(passo) + '</li>';      // cada passo
      }
      html += '</ol></div>';                                // fecha lista e bloco
    }

    // Dica do barista (pegadinha da banca) em post-it
    html += '<div class="bloco"><div class="postit">' + T('sim_dica') + this.escape(q.dica) + '</div></div>'; // post-it traduzido

    // Vídeo aula no YouTube sobre o tema
    const url = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(q.video); // monta a busca
    html += '<div class="bloco"><a class="link-video" href="' + url + '" target="_blank" rel="noopener">' + T('sim_aula', { tema: this.escape(q.tema) }) + '</a></div>'; // link da aula

    html += '</div>';                                       // fecha o feedback

    // Botão próxima (ou finalizar, se for a última)
    const ultima = indice === e.perguntas.length - 1;       // confere se é a última questão
    html += '<button id="btn-proxima" class="botao ' + (ultima ? 'botao-sucesso' : 'botao-primario') + '" style="margin-top:1rem;width:100%">' + (ultima ? T('sim_finalizar') : T('sim_proxima')) + '</button>'; // botão de avançar

    feedback.innerHTML = html;                              // despeja o feedback

    // Liga o botão de avançar
    document.getElementById('btn-proxima').addEventListener('click', () => { // clique em avançar
      this.renderizarPergunta(indice + 1);                  // mostra a próxima
    });
  },

  // Finaliza o simulado: calcula o resultado, salva e mostra
  finalizar() {
    clearInterval(this.estado.timer);                       // para o cronômetro
    const e = this.estado;                                  // atalho para o estado
    const total = e.perguntas.length;                       // total de questões
    const acertos = e.perguntas.filter((q, i) => MotorSimulado.corrigir(q, e.respostas[i])).length; // conta acertos
    const erros = total - acertos;                          // erros = o resto
    const percentual = total > 0 ? Math.round((acertos / total) * 100) : 0; // percentual
    const duracaoSeg = Math.round((Date.now() - e.comecouEm) / 1000); // duração em segundos

    // Desempenho por matéria
    const porMateria = {};                                  // dicionário matéria → {total, acertos}
    e.perguntas.forEach((q, i) => {                         // percorre as questões
      if (!porMateria[q.materia]) porMateria[q.materia] = { total: 0, acertos: 0 }; // cria o registro
      porMateria[q.materia].total += 1;                     // soma a questão
      if (MotorSimulado.corrigir(q, e.respostas[i])) porMateria[q.materia].acertos += 1; // soma o acerto
    });

    // Lista das questões erradas (para revisão)
    const erradas = e.perguntas.map((q, i) => ({            // monta o registro de cada questão
      pergunta: q,                                          // questão completa
      resposta: e.respostas[i],                             // resposta dada
      acertou: MotorSimulado.corrigir(q, e.respostas[i])    // se acertou
    })).filter(item => !item.acertou);                      // fica só com as erradas

    // Monta o registro do resultado
    const resultado = {                                     // objeto do resultado
      id: 'r_' + Date.now().toString(36),                   // id único
      dataISO: new Date().toISOString(),                    // data/hora
      total: total,                                         // total de questões
      acertos: acertos,                                     // acertos
      erros: erros,                                         // erros
      percentual: percentual,                               // percentual
      duracaoSeg: duracaoSeg,                               // duração
      materias: e.filtroMaterias,                           // filtro de matérias usado
      banca: e.filtroBanca,                                 // filtro de banca usado
      refazendo: e.refazendo,                               // se foi refazer
      porMateria: porMateria,                               // desempenho por matéria
      idsPerguntas: e.perguntas.map(q => q.id),             // TEAM_002: ids tentados (revisão sabe o que foi corrigido)
      erradas: erradas.map(item => ({                       // erradas (versão enxuta para salvar)
        id: item.pergunta.id,                               // id da questão
        materia: item.pergunta.materia,                     // matéria
        tema: item.pergunta.tema,                           // tema
        resposta: item.resposta,                            // resposta dada
        correta: item.pergunta.correta,                     // resposta certa
        enunciado: item.pergunta.enunciado,                 // enunciado
        alternativas: item.pergunta.alternativas,           // alternativas
        explicacao: item.pergunta.explicacao,               // explicação
        passos: item.pergunta.passos || [],                 // passos (se houver)
        dica: item.pergunta.dica,                           // pegadinha
        video: item.pergunta.video                          // busca do vídeo
      }))
    };

    // Salva o resultado no histórico (funciona para conta e para visitante)
    const id = Auth.idAtual();                              // id de quem está usando agora
    if (id) {                                               // se há conta ou visitante
      const chave = 'gc_resultados_' + id;                  // chave do histórico
      const historico = Armazenamento.ler(chave, []);       // lê o histórico atual
      historico.push(resultado);                            // adiciona o novo resultado
      Armazenamento.salvar(chave, historico);               // grava de volta
    }

    // Ganha carimbo no Cartão Fidelidade de Estudos
    if (typeof FidelidadeUI !== 'undefined') {
      FidelidadeUI.adicionarCarimbo('simulado');
    }

    e.ultimoResultado = resultado;                          // guarda para a revisão
    e.fase = 'resultado';                                   // muda para a fase de resultado
    this.renderizarResultado(resultado);                    // desenha o resultado
  },

  // Desenha a tela de resultado final (acertos, erros, matérias e ações)
  renderizarResultado(resultado) {
    const caixa = document.getElementById('tela-simulado'); // pega a seção
    const raio = 52;                                        // raio do anel de percentual
    const circ = 2 * Math.PI * raio;                        // comprimento do círculo
    const cor = resultado.percentual >= 70 ? '#4e8a63' : (resultado.percentual >= 50 ? '#c98a5e' : '#b9554a'); // cor pelo desempenho
    const frase = this.fraseDeDesempenho(resultado.percentual); // frase motivacional

    let html = '<div class="cartao destaque aparecer">';    // abre o cartão principal
    html += '<div class="resultado-cabeca">';               // cabeçalho do resultado

    // Anel de percentual
    html += '<div class="anel-resultado">';                 // abre o anel
    html += '<svg width="150" height="150" viewBox="0 0 120 120">'; // SVG do anel
    html += '<circle class="anel-fundo" cx="60" cy="60" r="' + raio + '"></circle>'; // anel de fundo
    html += '<circle class="anel-preenchido" cx="60" cy="60" r="' + raio + '" stroke="' + cor + '" stroke-dasharray="' + circ + '" stroke-dashoffset="' + circ + '" data-offset="' + (circ * (1 - resultado.percentual / 100)) + '"></circle>'; // anel preenchido (animado depois)
    html += '</svg>';                                       // fecha o SVG
    html += '<div class="anel-numero">' + resultado.percentual + '%</div>'; // número no centro
    html += '</div>';                                       // fecha o anel

    // Resumo e frase
    html += '<div>';                                        // coluna de texto
    html += '<h3>' + (resultado.refazendo ? T('sim_resultado_refez') : T('sim_resultado_t')) + '</h3>'; // título traduzido
    html += '<p class="resultado-frase">' + frase + '</p>'; // frase de desempenho
    html += '<p class="texto-suave" style="margin:0">' + T('sim_resumo', { total: resultado.total, tempo: this.tempoFormatado(resultado.duracaoSeg) }) + '</p>'; // resumo
    html += '</div>';                                       // fecha a coluna
    html += '</div>';                                       // fecha o cabeçalho

    // Cartõezinhos de acertos e erros
    html += '<div class="grade-estatisticas" style="margin-top:1.2rem">'; // abre a grade
    html += '<div class="estatistica"><div class="valor" style="color:var(--verde)">' + resultado.acertos + '</div><div class="rotulo">' + T('sim_stat_acertos') + '</div></div>'; // cartão de acertos
    html += '<div class="estatistica"><div class="valor" style="color:var(--vermelho)">' + resultado.erros + '</div><div class="rotulo">' + T('sim_stat_erros') + '</div></div>'; // cartão de erros
    html += '<div class="estatistica"><div class="valor">' + resultado.percentual + '%</div><div class="rotulo">' + T('sim_stat_aproveitamento') + '</div></div>'; // cartão de percentual
    html += '<div class="estatistica"><div class="valor" style="font-size:1.2rem;padding-top:0.5rem">' + this.tempoFormatado(resultado.duracaoSeg) + '</div><div class="rotulo">' + T('sim_stat_tempo') + '</div></div>'; // cartão de tempo
    html += '</div>';                                       // fecha a grade

    // Desempenho por matéria
    if (Object.keys(resultado.porMateria).length > 0) {     // se há dados por matéria
      html += '<div class="titulo-secao"><h3>' + T('sim_por_materia_t') + '</h3></div>'; // título da seção
      for (const materia in resultado.porMateria) {         // percorre as matérias
        const dados = resultado.porMateria[materia];        // dados da matéria
        const pct = Math.round((dados.acertos / dados.total) * 100); // percentual da matéria
        html += '<div class="linha-materia">';              // abre a linha
        html += '<span class="nome">' + this.escape(materia) + '</span>'; // nome
        html += '<div class="barra-progresso"><span style="width:' + pct + '%;background:' + (pct >= 70 ? 'var(--verde)' : 'var(--caramelo)') + '"></span></div>'; // barra
        html += '<span class="pct">' + dados.acertos + '/' + dados.total + '</span>'; // "3/5"
        html += '</div>';                                   // fecha a linha
      }
    }

    // Erradas em acordeão (dá para revisar na hora)
    if (resultado.erradas.length > 0) {                     // se houve erros
      html += '<div class="titulo-secao"><h3>' + T('sim_escorregou_t') + '</h3></div>'; // título
      html += '<div class="lista-erradas">';                // abre a lista
      for (const item of resultado.erradas) {               // percorre as erradas
        const letraCerta = String.fromCharCode(65 + item.correta); // letra da resposta certa
        html += '<details class="questao-revisao">';        // abre o acordeão
        html += '<summary>' + this.escape(item.materia) + ' · ' + this.escape(item.tema) + ' <span style="margin-left:auto;font-size:0.8rem">' + T('sim_gabarito', { letra: letraCerta }) + '</span></summary>'; // cabeçalho
        html += '<div class="corpo">';                      // corpo do acordeão
        html += '<p style="font-size:0.9rem">' + this.escape(item.enunciado) + '</p>'; // enunciado
        html += '<p style="font-size:0.9rem"><strong>' + T('sim_certa_e', { letra: letraCerta }) + '</strong> ' + this.escape(item.explicacao) + '</p>'; // explicação
        html += '<div class="postit" style="margin-top:0.6rem">☕ ' + this.escape(item.dica) + '</div>'; // dica em post-it
        const url = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(item.video); // busca do vídeo
        html += '<div style="margin-top:0.6rem"><a class="link-video" href="' + url + '" target="_blank" rel="noopener">' + T('sim_aula', { tema: this.escape(item.tema) }) + '</a></div>'; // link da aula
        html += '</div></details>';                         // fecha corpo e acordeão
      }
      html += '</div>';                                     // fecha a lista
    } else {                                                // gabaritou!
      html += '<div class="vazio"><div class="vazio-icone">🏆</div><p>' + T('sim_zero') + '</p></div>'; // celebração
    }

    // Botões de ação
    html += '<div style="display:flex;gap:0.8rem;flex-wrap:wrap;margin-top:1.4rem">'; // fileira de botões
    if (resultado.erradas.length > 0) {                     // se há erradas para refazer
      html += '<button id="btn-refazer" class="botao botao-contorno">' + T('sim_refazer', { n: resultado.erradas.length }) + '</button>'; // botão refazer
    }
    // TEAM_007: exportar o resultado em PDF formatado (gabarito comentado + QR das aulas)
    html += '<button id="btn-pdf" class="botao botao-contorno">' + T('pdf_btn') + '</button>'; // botão exportar PDF
    html += '<button id="btn-novo" class="botao botao-primario">' + T('sim_novo') + '</button>'; // botão novo simulado
    html += '<button id="btn-ir-revisao" class="botao botao-fantasma">' + T('sim_ir_revisao') + '</button>'; // TEAM_002: atalho para a tela de revisão
    html += '<button id="btn-ir-dashboard" class="botao botao-fantasma">' + T('sim_ir_dash') + '</button>'; // botão dashboard
    html += '</div>';                                       // fecha a fileira

    // Dicas abaixo do simulado (no idioma atual)
    html += '<div class="titulo-secao"><h3>' + T('sim_dicas_proxima_t') + '</h3></div>'; // título
    const dicas = this.dicasDoIdioma();                     // dicas no idioma atual
    const dica1 = dicas[resultado.erros % dicas.length];    // dica pseudo-aleatória 1
    const dica2 = dicas[(resultado.erros + 2) % dicas.length]; // dica pseudo-aleatória 2
    html += '<div class="cartao"><div class="postit" style="margin-bottom:0.7rem">' + this.escape(dica1) + '</div><div class="postit">' + this.escape(dica2) + '</div></div>'; // post-its de dicas

    html += '</div>';                                       // fecha o cartão principal

    caixa.innerHTML = html;                                 // despeja a tela

    // Anima o anel de percentual (do zero até o valor real)
    requestAnimationFrame(() => {                           // espera o desenho da tela
      const anel = caixa.querySelector('.anel-preenchido'); // pega o anel
      if (anel) anel.style.strokeDashoffset = anel.dataset.offset; // anima até o valor
    });

    // Liga os botões de ação
    document.getElementById('btn-novo').addEventListener('click', () => this.abrir({})); // novo simulado
    // TEAM_007: exportar PDF — folha com todas as questões vistas, explicações e QR das aulas
    document.getElementById('btn-pdf').addEventListener('click', () => { // clique em exportar
      Impressao.exportarSimulado(resultado, this.estado.perguntas, this.estado.respostas); // gera a folha e imprime
    });
    document.getElementById('btn-ir-revisao').addEventListener('click', () => App.irPara('revisao')); // TEAM_002: abre a revisão
    document.getElementById('btn-ir-dashboard').addEventListener('click', () => { // ir para o dashboard
      DashboardUI.renderizar();                             // atualiza o dashboard
      App.irPara('dashboard');                              // navega
    });
    const btnRefazer = document.getElementById('btn-refazer'); // botão de refazer
    if (btnRefazer) {                                       // se existe
      btnRefazer.addEventListener('click', () => this.refazerErradas(resultado)); // refaz as erradas
    }
  },

  // Frase de desempenho conforme o percentual (traduzida)
  fraseDeDesempenho(percentual) {
    if (percentual >= 90) return T('sim_frase_alta');       // excelente
    if (percentual >= 70) return T('sim_frase_boa');        // bom
    if (percentual >= 50) return T('sim_frase_media');      // mediano
    return T('sim_frase_baixa');                            // precisa melhorar
  },

  // Devolve as dicas rápidas no idioma atual (com reserva no português)
  dicasDoIdioma() {
    const porIdioma = DadosTemas.dicasRapidas;              // dicas separadas por idioma
    return porIdioma[Idioma.atual] || porIdioma.pt;         // do idioma atual ou português
  },

  // Redesenha a tela do simulado depois de trocar de idioma
  atualizarIdioma() {
    const e = this.estado;                                  // atalho para o estado
    if (e.fase === 'config') { this.renderizarConfig(); return; } // configuração: redesenha
    if (e.fase === 'resultado' && e.ultimoResultado) { this.renderizarResultado(e.ultimoResultado); return; } // resultado: redesenha
    if (e.fase === 'jogo' && e.perguntas.length > 0) {      // durante o jogo
      // Recomeça a questão atual sem o feedback (a tela é remontada traduzida)
      const indice = Math.max(0, e.respostas.findIndex(r => r === -1)); // primeira ainda sem resposta
      this.renderizarPergunta(indice < 0 ? 0 : indice);     // mostra a questão por traduzir
    }
  },

  // Monta um jogo com uma lista exata de ids (usado por "refazer" e pela tela de revisão)
  montarJogoComIds(ids) {
    const e = this.estado;                                  // atalho para o estado
    e.refazendo = true;                                     // TEAM_002: marca o modo refazer/revisão
    e.perguntas = MotorSimulado.montar({                    // sorteia só os ids pedidos
      quantidade: ids.length,                               // todas elas
      materias: [],                                         // sem filtro de matéria
      banca: '',                                            // sem filtro de banca
      excluirIds: [],                                       // sem exclusões
      idsExatos: ids                                        // exatamente as questões pedidas
    });
    e.respostas = new Array(e.perguntas.length).fill(-1);   // zera as respostas
    e.fase = 'jogo';                                        // entra no jogo
    e.comecouEm = Date.now();                               // marca o início
    this.renderizarPergunta(0);                             // mostra a primeira
    this.iniciarTimer();                                    // liga o cronômetro
  },

  // Modo "refazer as erradas": monta um simulado só com as questões erradas
  refazerErradas(resultado) {
    const ids = resultado.erradas.map(item => item.id);     // ids das questões erradas
    this.montarJogoComIds(ids);                             // TEAM_002: monta o jogo com esses ids
    App.torrada(T('toast_refazer', { n: ids.length }), 'sucesso'); // avisa
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
