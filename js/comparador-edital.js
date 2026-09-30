/* ============================================================
   GABARITO CAFÉ — js/comparador-edital.js
   Comparador de Editais:
   - compara 2 editais (Edital Anterior vs Edital Atual)
   - destaca matérias/tópicos novos, removidos e mantidos
   - compara banca, vagas, salário e datas
   ============================================================ */

const ComparadorEditalUI = {
  analiseA: null,
  analiseB: null,

  comparar(analiseA, analiseB) {
    const matA = (analiseA.materias || []).map(m => m.rotulo);
    const matB = (analiseB.materias || []).map(m => m.rotulo);

    const matNovas = matB.filter(m => !matA.includes(m));
    const matRemovidas = matA.filter(m => !matB.includes(m));
    const matMantidas = matB.filter(m => matA.includes(m));

    // Tópicos novos e removidos por matéria mantida
    const topicosComparacao = {};
    for (const mName of matMantidas) {
      const objA = analiseA.materias.find(m => m.rotulo === mName);
      const objB = analiseB.materias.find(m => m.rotulo === mName);
      const topA = (objA && objA.topicos) || [];
      const topB = (objB && objB.topicos) || [];

      topicosComparacao[mName] = {
        novos: topB.filter(t => !topA.includes(t)),
        removidos: topA.filter(t => !topB.includes(t)),
        mantidos: topB.filter(t => topA.includes(t))
      };
    }

    return {
      matNovas,
      matRemovidas,
      matMantidas,
      topicosComparacao,
      bancaA: analiseA.banca ? analiseA.banca.rotulo : 'Não identificada',
      bancaB: analiseB.banca ? analiseB.banca.rotulo : 'Não identificada',
      vagasA: analiseA.numeros ? analiseA.numeros.vagas : null,
      vagasB: analiseB.numeros ? analiseB.numeros.vagas : null,
      salarioA: analiseA.numeros ? analiseA.numeros.salarioMin : null,
      salarioB: analiseB.numeros ? analiseB.numeros.salarioMin : null
    };
  },

  renderizarInterface() {
    let html = '<div class="cartao destaque aparecer" style="margin-top:1.5rem">';
    html += '<h3>⚔️ ' + T('comp_titulo') + '</h3>';
    html += '<p class="texto-suave">' + T('comp_sub') + '</p>';

    html += '<div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));gap:1rem;margin-top:1rem">';

    // Edital A
    html += '<div>';
    html += '<strong style="color:var(--cafe)">📄 ' + T('comp_edital_a') + '</strong>';
    html += '<textarea id="comp-texto-a" style="width:100%;height:140px;margin-top:0.4rem;padding:0.5rem;border-radius:6px;border:1px solid var(--linha);font-family:inherit" placeholder="' + this.escape(T('comp_ph_a')) + '"></textarea>';
    html += '</div>';

    // Edital B
    html += '<div>';
    html += '<strong style="color:var(--cafe)">📄 ' + T('comp_edital_b') + '</strong>';
    html += '<textarea id="comp-texto-b" style="width:100%;height:140px;margin-top:0.4rem;padding:0.5rem;border-radius:6px;border:1px solid var(--linha);font-family:inherit" placeholder="' + this.escape(T('comp_ph_b')) + '"></textarea>';
    html += '</div>';

    html += '</div>';

    html += '<button id="btn-executar-comparacao" class="botao botao-primario grande" style="margin-top:1rem;width:100%">⚡ ' + T('comp_btn_comparar') + '</button>';

    html += '<div id="resultado-comparacao" style="margin-top:1.2rem"></div>';
    html += '</div>';

    return html;
  },

  ligarEventos() {
    const btn = document.getElementById('btn-executar-comparacao');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const txtA = document.getElementById('comp-texto-a').value.trim();
      const txtB = document.getElementById('comp-texto-b').value.trim();

      if (txtA.length < 30 || txtB.length < 30) {
        App.torrada(T('comp_toast_curto'), 'erro');
        return;
      }

      this.analiseA = AnaliseEdital.analisar(txtA);
      this.analiseB = AnaliseEdital.analisar(txtB);

      const comp = this.comparar(this.analiseA, this.analiseB);
      this.desenharResultado(comp);
    });
  },

  desenharResultado(comp) {
    const caixa = document.getElementById('resultado-comparacao');
    if (!caixa) return;

    let html = '<div class="cartao" style="background:var(--creme);border:2px solid var(--cafe);padding:1rem">';
    html += '<h4>📊 ' + T('comp_resumo_t') + '</h4>';

    // Resumo Geral (Banca, Vagas, Salário)
    html += '<div class="lista-datas" style="margin:0.8rem 0">';
    html += '<div class="linha-dado"><span class="dado-rotulo">' + T('comp_banca') + '</span><span class="dado-valor">' + this.escape(comp.bancaA) + ' ➔ <strong>' + this.escape(comp.bancaB) + '</strong></span></div>';
    if (comp.vagasA || comp.vagasB) {
      html += '<div class="linha-dado"><span class="dado-rotulo">' + T('comp_vagas') + '</span><span class="dado-valor">' + (comp.vagasA || '?') + ' ➔ <strong>' + (comp.vagasB || '?') + '</strong></span></div>';
    }
    html += '</div>';

    // Matérias Novas 🟢
    html += '<div style="margin-top:1rem">';
    html += '<strong>🟢 ' + T('comp_mat_novas') + ' (' + comp.matNovas.length + ')</strong>';
    if (comp.matNovas.length > 0) {
      html += '<div class="lista-chips" style="margin-top:0.4rem">';
      for (const m of comp.matNovas) html += '<span class="chip verde">🟢 ' + this.escape(m) + '</span>';
      html += '</div>';
    } else {
      html += '<p class="texto-suave" style="font-size:0.8rem;margin:0.2rem 0">' + T('comp_nenhuma') + '</p>';
    }
    html += '</div>';

    // Matérias Removidas 🔴
    html += '<div style="margin-top:1rem">';
    html += '<strong>🔴 ' + T('comp_mat_removidas') + ' (' + comp.matRemovidas.length + ')</strong>';
    if (comp.matRemovidas.length > 0) {
      html += '<div class="lista-chips" style="margin-top:0.4rem">';
      for (const m of comp.matRemovidas) html += '<span class="chip vermelho">🔴 ' + this.escape(m) + '</span>';
      html += '</div>';
    } else {
      html += '<p class="texto-suave" style="font-size:0.8rem;margin:0.2rem 0">' + T('comp_nenhuma') + '</p>';
    }
    html += '</div>';

    // Matérias Mantidas e Mudanças de Tópicos
    html += '<div style="margin-top:1rem">';
    html += '<strong>🔵 ' + T('comp_mat_mantidas') + ' (' + comp.matMantidas.length + ')</strong>';
    for (const m of comp.matMantidas) {
      const topComp = comp.topicosComparacao[m];
      html += '<div style="margin-top:0.6rem;padding:0.6rem;background:var(--fundo-cartao);border-radius:6px">';
      html += '<span style="font-weight:800;font-size:0.9rem">📚 ' + this.escape(m) + '</span>';
      if (topComp && (topComp.novos.length > 0 || topComp.removidos.length > 0)) {
        if (topComp.novos.length > 0) {
          html += '<p style="font-size:0.8rem;margin:0.3rem 0 0;color:var(--verde)"><strong>+ Tópicos novos:</strong> ' + topComp.novos.map(t => this.escape(t)).join(', ') + '</p>';
        }
        if (topComp.removidos.length > 0) {
          html += '<p style="font-size:0.8rem;margin:0.2rem 0 0;color:var(--vermelho)"><strong>- Tópicos removidos:</strong> ' + topComp.removidos.map(t => this.escape(t)).join(', ') + '</p>';
        }
      } else {
        html += '<p class="texto-suave" style="font-size:0.8rem;margin:0.2rem 0">' + T('comp_topicos_iguais') + '</p>';
      }
      html += '</div>';
    }
    html += '</div>';

    html += '</div>';

    caixa.innerHTML = html;
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
