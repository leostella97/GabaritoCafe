/* ============================================================
   GABARITO CAFÉ — js/edital-vertical.js
   Edital Verticalizado Interativo:
   - checklist vertical dos tópicos do edital
   - 5 estados de estudo por tópico:
     0 = Não estudei (🔴)
     1 = Teoria vista (🟡)
     2 = Resumo feito (📝)
     3 = Questões feitas (🎯)
     4 = Revisado (✅)
   - barra de progresso do edital
   - salvo no localStorage (gc_edital_vertical_${id})
   ============================================================ */

const EditalVerticalUI = {
  STATUS_LISTA: [
    { id: 0, rotulo: '🔴 Não estudei', cor: 'var(--vermelho-suave)' },
    { id: 1, rotulo: '🟡 Teoria vista', cor: 'var(--caramelo-suave)' },
    { id: 2, rotulo: '📝 Resumo feito', cor: 'var(--caramelo-suave)' },
    { id: 3, rotulo: '🎯 Questões feitas', cor: 'var(--verde-suave)' },
    { id: 4, rotulo: '✅ Revisado', cor: 'var(--verde-suave)' }
  ],

  obterDados() {
    const uid = Auth.idAtual();
    if (!uid) return {};
    return Armazenamento.ler('gc_edital_vertical_' + uid, {});
  },

  salvarStatus(materia, topico, statusId) {
    const uid = Auth.idAtual();
    if (!uid) return;
    const chave = 'gc_edital_vertical_' + uid;
    const dados = Armazenamento.ler(chave, {});
    const key = materia + '::' + topico;
    dados[key] = parseInt(statusId, 10);
    Armazenamento.salvar(chave, dados);
  },

  obterStatus(dados, materia, topico) {
    const key = materia + '::' + topico;
    return dados[key] !== undefined ? dados[key] : 0;
  },

  renderizar(analise) {
    if (!analise || !analise.materias) return '';

    const comTopicos = analise.materias.filter(m => m.topicos && m.topicos.length > 0);
    if (comTopicos.length === 0) return '';

    const dados = this.obterDados();
    let totalTopicos = 0;
    let concluidos = 0;

    for (const m of comTopicos) {
      for (const t of m.topicos) {
        totalTopicos++;
        const st = this.obterStatus(dados, m.rotulo, t);
        if (st >= 3) concluidos++; // Considera concluído a partir de "Questões feitas" ou "Revisado"
      }
    }

    const pct = totalTopicos > 0 ? Math.round((concluidos / totalTopicos) * 100) : 0;

    let html = '<div class="cartao bloco-edital aparecer" style="margin-top:1.5rem" id="bloco-edital-vertical">';
    html += '<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.5rem">';
    html += '<h3>📊 ' + T('ev_titulo') + '</h3>';
    html += '<span class="chip caramelo">🎯 ' + pct + '% ' + T('ev_concluido') + '</span>';
    html += '</div>';

    html += '<p class="texto-suave" style="font-size:0.85rem;margin:0.3rem 0 1rem">' + T('ev_sub') + '</p>';

    // Barra de Progresso
    html += '<div class="barra-progresso" style="margin-bottom:1.2rem"><span style="width:' + pct + '%;background:var(--verde)"></span></div>';

    // Checklist vertical por matéria
    for (const m of comTopicos) {
      html += '<div style="margin-bottom:1.2rem;background:var(--creme);padding:0.8rem;border-radius:10px;border:1px solid var(--linha)">';
      html += '<h4 style="margin:0 0 0.6rem;color:var(--cafe);font-size:1rem">📚 ' + this.escape(m.rotulo) + '</h4>';
      html += '<div style="display:flex;flex-direction:column;gap:0.5rem">';

      for (const t of m.topicos) {
        const currentSt = this.obterStatus(dados, m.rotulo, t);
        html += '<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.4rem;padding:0.4rem 0.6rem;background:var(--fundo-cartao);border-radius:6px;border:1px solid var(--linha)">';
        html += '<span style="font-size:0.88rem;font-weight:700;flex:1;min-width:180px">' + this.escape(t) + '</span>';

        html += '<select class="sel-ev-status" data-materia="' + this.escape(m.rotulo) + '" data-topico="' + this.escape(t) + '" style="font-size:0.8rem;padding:0.2rem 0.4rem;border-radius:4px;border:1px solid var(--linha)">';
        for (const st of this.STATUS_LISTA) {
          const sel = st.id === currentSt ? ' selected' : '';
          html += '<option value="' + st.id + '"' + sel + '>' + st.rotulo + '</option>';
        }
        html += '</select>';
        html += '</div>';
      }

      html += '</div></div>';
    }

    html += '</div>';
    return html;
  },

  ligarEventos() {
    document.querySelectorAll('.sel-ev-status').forEach(sel => {
      sel.addEventListener('change', (e) => {
        const mat = e.target.dataset.materia;
        const top = e.target.dataset.topico;
        const st = e.target.value;
        this.salvarStatus(mat, top, st);
        App.torrada(T('ev_toast_atualizado'), 'sucesso');

        // Redesenha bloco vertical para atualizar %
        if (EditalUI && EditalUI.ultimaAnalise) {
          const bloco = document.getElementById('bloco-edital-vertical');
          if (bloco) {
            const temp = document.createElement('div');
            temp.innerHTML = this.renderizar(EditalUI.ultimaAnalise);
            bloco.replaceWith(temp.firstElementChild);
            this.ligarEventos();
          }
        }
      });
    });
  },

  escape(texto) {
    return String(texto)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
};
