/* ============================================================
   GABARITO CAFÉ — js/cadernos.js
   Cadernos Personalizados / Favoritos:
   - Permite salvar questões em pastas/cadernos customizados
   - Permite criar/renomear/excluir pastas
   - Permite gerar um simulado a partir de um caderno
   ============================================================ */

const CadernosUI = {
  obterDados() {
    const uid = Auth.idAtual();
    if (!uid) return { pastas: { 'Favoritos': [] } };
    return Armazenamento.ler('gc_cadernos_' + uid, {
      pastas: { 'Favoritos': [] }
    });
  },

  salvarDados(dados) {
    const uid = Auth.idAtual();
    if (uid) {
      Armazenamento.salvar('gc_cadernos_' + uid, dados);
    }
  },

  criarPasta(nome) {
    nome = String(nome || '').trim();
    if (!nome) return;
    const dados = this.obterDados();
    if (!dados.pastas) dados.pastas = {};
    if (!dados.pastas[nome]) {
      dados.pastas[nome] = [];
      this.salvarDados(dados);
      App.torrada(T('cad_toast_pasta_criada', { nome: nome }), 'sucesso');
    }
  },

  excluirPasta(nome) {
    if (nome === 'Favoritos') {
      App.torrada(T('cad_toast_padrao'), 'erro');
      return;
    }
    const dados = this.obterDados();
    if (dados.pastas && dados.pastas[nome]) {
      delete dados.pastas[nome];
      this.salvarDados(dados);
      App.torrada(T('cad_toast_pasta_excluida'), 'sucesso');
    }
  },

  salvarQuestaoNaPasta(qid, nomePasta = 'Favoritos') {
    const dados = this.obterDados();
    if (!dados.pastas) dados.pastas = { 'Favoritos': [] };
    if (!dados.pastas[nomePasta]) dados.pastas[nomePasta] = [];

    if (!dados.pastas[nomePasta].includes(qid)) {
      dados.pastas[nomePasta].push(qid);
      this.salvarDados(dados);
      App.torrada(T('cad_toast_salvo', { pasta: nomePasta }), 'sucesso');
    } else {
      App.torrada(T('cad_toast_ja_existe'), 'nota');
    }
  },

  removerQuestaoDaPasta(qid, nomePasta) {
    const dados = this.obterDados();
    if (dados.pastas && dados.pastas[nomePasta]) {
      dados.pastas[nomePasta] = dados.pastas[nomePasta].filter(id => id !== qid);
      this.salvarDados(dados);
      App.torrada(T('cad_toast_removido'), 'sucesso');
    }
  },

  abrirModalSalvar(qid) {
    const modal = document.getElementById('modal-materia');
    const conteudo = document.getElementById('modal-conteudo');
    if (!modal || !conteudo) return;

    const dados = this.obterDados();
    const listaPastas = Object.keys(dados.pastas || { 'Favoritos': [] });

    let html = '<div style="padding:0.5rem 0">';
    html += '<h3>⭐ ' + T('cad_salvar_t') + '</h3>';
    html += '<p class="texto-suave">' + T('cad_salvar_sub') + '</p>';

    html += '<div class="campo" style="margin-top:1rem"><label>' + T('cad_escolher_pasta') + '</label>';
    html += '<select id="select-pasta-salvar" style="width:100%">';
    for (const p of listaPastas) {
      html += '<option value="' + Util.escape(p) + '">' + Util.escape(p) + ' (' + (dados.pastas[p] ? dados.pastas[p].length : 0) + ')</option>';
    }
    html += '</select></div>';

    html += '<div style="display:flex;gap:0.8rem;margin-top:1rem">';
    html += '<button id="btn-confirma-salvar" class="botao botao-primario" style="flex:1">' + T('cad_btn_salvar') + '</button>';
    html += '</div>';

    // Seção para criar nova pasta na hora
    html += '<hr style="margin:1.2rem 0;border:0;border-top:1px solid var(--linha)">';
    html += '<label style="font-size:0.85rem;font-weight:800">' + T('cad_criar_nova') + '</label>';
    html += '<div style="display:flex;gap:0.5rem;margin-top:0.4rem">';
    html += '<input id="input-nova-pasta-modal" type="text" placeholder="' + Util.escape(T('cad_ph_nova')) + '" style="flex:1">';
    html += '<button id="btn-criar-pasta-modal" class="botao botao-contorno pequeno">' + T('cad_btn_criar') + '</button>';
    html += '</div>';

    html += '</div>';

    conteudo.innerHTML = html;
    // TEAM_007: garante a fiação do fechamento (✕, véu, Esc) antes de abrir —
    // iniciarModal é idempotente; sem isso o modal ficava travado fora do edital.
    EditalUI.iniciarModal();
    modal.classList.remove('oculto');

    document.getElementById('btn-confirma-salvar').addEventListener('click', () => {
      const sel = document.getElementById('select-pasta-salvar');
      if (sel && sel.value) {
        this.salvarQuestaoNaPasta(qid, sel.value);
        modal.classList.add('oculto');
      }
    });

    document.getElementById('btn-criar-pasta-modal').addEventListener('click', () => {
      const input = document.getElementById('input-nova-pasta-modal');
      if (input && input.value.trim()) {
        this.criarPasta(input.value.trim());
        this.abrirModalSalvar(qid);
      }
    });
  },

  renderizar() {
    const caixa = document.getElementById('tela-cadernos');
    if (!caixa) return;

    // TEAM_007: banco sob demanda — os cards listam questões do BancoQuestoes;
    // se ainda não carregou, mostra spinner e re-renderiza quando pronto
    if (!BancoLoader.pronto()) {                  // banco ainda carregando?
      caixa.innerHTML = '<div class="cartao"><div class="girando"></div><p class="mensagem">' + T('carregando') + '</p></div>'; // spinner de espera
      BancoLoader.carregar().then(() => this.renderizar()); // re-renderiza ao terminar
      return;                                     // sai por ora
    }

    const dados = this.obterDados();
    const pastas = dados.pastas || { 'Favoritos': [] };
    const nomesPastas = Object.keys(pastas);

    let html = '<div class="cartao destaque aparecer">';
    html += '<h3>📁 ' + T('cad_t') + '</h3>';
    html += '<p class="texto-suave">' + T('cad_sub') + '</p>';

    // Formulário para criar pasta
    html += '<div style="display:flex;gap:0.6rem;margin-top:1.2rem;flex-wrap:wrap">';
    html += '<input id="input-nova-pasta-tela" type="text" placeholder="' + Util.escape(T('cad_ph_nova')) + '" style="flex:1;min-width:200px">';
    html += '<button id="btn-criar-pasta-tela" class="botao botao-primario">' + T('cad_btn_criar') + '</button>';
    html += '</div>';
    html += '</div>';

    // Lista de Pastas/Cadernos
    for (const p of nomesPastas) {
      const qids = pastas[p] || [];
      const totalQ = qids.length;

      html += '<div class="cartao aparecer" style="margin-top:1.2rem">';
      html += '<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.6rem">';
      html += '<div>';
      html += '<h4 style="margin:0;color:var(--cafe);font-size:1.1rem">📂 ' + Util.escape(p) + '</h4>';
      html += '<p class="texto-suave" style="font-size:0.85rem;margin:0.2rem 0 0">' + T('cad_total_questoes', { n: totalQ }) + '</p>';
      html += '</div>';

      html += '<div style="display:flex;gap:0.5rem;flex-wrap:wrap">';
      if (totalQ > 0) {
        html += '<button class="botao botao-primario pequeno btn-simulado-caderno" data-pasta="' + Util.escape(p) + '">📝 ' + T('cad_iniciar_simulado') + '</button>';
      }
      if (p !== 'Favoritos') {
        html += '<button class="botao botao-fantasma pequeno btn-excluir-pasta" data-pasta="' + Util.escape(p) + '">🗑️ ' + T('cad_excluir_pasta') + '</button>';
      }
      html += '</div></div>';

      // Lista de questões dentro do caderno
      if (totalQ > 0) {
        html += '<div class="lista-erradas" style="margin-top:1rem">';
        for (const qid of qids) {
          const questao = BancoQuestoes.find(q => q.id === qid);
          if (questao) {
            html += '<details class="questao-revisao">';
            html += '<summary><span>' + Util.escape(questao.materia) + ' · ' + Util.escape(questao.banca) + '</span>';
            html += '<button class="botao botao-fantasma pequeno btn-remover-q" data-qid="' + qid + '" data-pasta="' + Util.escape(p) + '" style="margin-left:auto;padding:0.2rem 0.5rem">✕</button>';
            html += '</summary>';
            html += '<div class="corpo">';
            html += '<p style="font-size:0.9rem">' + Util.escape(questao.enunciado) + '</p>';
            html += '<p style="font-size:0.9rem"><strong>' + T('sim_certa_e', { letra: String.fromCharCode(65 + questao.correta) }) + '</strong> ' + Util.escape(questao.explicacao) + '</p>';
            html += '</div></details>';
          }
        }
        html += '</div>';
      }

      html += '</div>';
    }

    caixa.innerHTML = html;

    // Eventos
    document.getElementById('btn-criar-pasta-tela').addEventListener('click', () => {
      const input = document.getElementById('input-nova-pasta-tela');
      if (input && input.value.trim()) {
        this.criarPasta(input.value.trim());
        this.renderizar();
      }
    });

    caixa.querySelectorAll('.btn-simulado-caderno').forEach(btn => {
      btn.addEventListener('click', () => {
        const nomeP = btn.dataset.pasta;
        const qids = pastas[nomeP] || [];
        if (qids.length > 0) {
          SimuladoUI.montarJogoComIds(qids);
          App.irPara('simulado');
        }
      });
    });

    caixa.querySelectorAll('.btn-excluir-pasta').forEach(btn => {
      btn.addEventListener('click', () => {
        this.excluirPasta(btn.dataset.pasta);
        this.renderizar();
      });
    });

    caixa.querySelectorAll('.btn-remover-q').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.removerQuestaoDaPasta(btn.dataset.qid, btn.dataset.pasta);
        this.renderizar();
      });
    });
  }
};