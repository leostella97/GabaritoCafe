/* ============================================================
   GABARITO CAFÉ — js/mapa-mental.js
   Mapa mental por matéria/tópicos com export PDF e modais
   ============================================================ */
const MapaMentalUI = {
  renderizar(materiaFiltro = '') {
    const caixa = document.getElementById('tela-mapa-mental');
    if (!caixa) return;
    let html = '<div class="mapa-barra">';
    html += '<h3>Mapa Mental</h3>';
    html += '<button class="botao botao-contorno pequeno" id="btn-mapa-export">📄 Exportar PDF</button>';
    html += '</div>';
    html += '<div id="mapa-conteudo" class="mapa-conteudo"></div>';
    caixa.innerHTML = html;
    document.getElementById('btn-mapa-export').addEventListener('click', () => this.exportarPDF());
    this.desmontar(materiaFiltro);
  },

  desmontar(materiaFiltro) {
    const container = document.getElementById('mapa-conteudo');
    if (!container) return;
    let html = '<div class="mapa-grid">';
    const materias = new Set();
    if (BancoQuestoes && BancoQuestoes.length) {
      BancoQuestoes.forEach(q => materias.add(q.materia));
    }
    // fallback dados temas
    materias.forEach(m => {
      html += `<div class="mapa-no"><div class="mapa-no-titulo">${Util.escape(m)}</div><div class="mapa-no-topicos"></div></div>`;
    });
    container.innerHTML = html;
    // Preencher tópicos por matéria a partir de dados-temas.js e banco
    container.querySelectorAll('.mapa-no').forEach(no => {
      const materia = no.querySelector('.mapa-no-titulo').textContent;
      const topicosDiv = no.querySelector('.mapa-no-topicos');
      const topicosSet = new Set();
      (BancoQuestoes||[]).filter(q=>q.materia===materia).forEach(q=> topicosSet.add(q.tema));
      topicosSet.forEach(t => {
        topicosDiv.innerHTML += `<div class="mapa-topico" data-materia="${Util.escape(materia)}" data-topico="${Util.escape(t)}">${Util.escape(t)}</div>`;
      });
    });
    container.addEventListener('click', (e)=>{
      const t = e.target.closest('.mapa-topico');
      if (!t) return;
      const materia = t.dataset.materia;
      const topico = t.dataset.topico;
      this.abrirModalTopico(materia, topico);
    });
  },

  abrirModalTopico(materia, topico) {
    EditalUI.iniciarModal();
    const modal = document.getElementById('modal-materia');
    const conteudo = document.getElementById('modal-conteudo');
    // Busca explicação no banco
    const exs = (BancoQuestoes||[]).filter(q=>q.materia===materia && q.tema===topico);
    let html = `<h3>${Util.escape(materia)} — ${Util.escape(topico)}</h3>`;
    html += `<p class="texto-suave">Tópicos relacionados encontrados: ${exs.length}</p>`;
    if (exs.length) {
      html += '<ul>';
      exs.slice(0,5).forEach(q=>{
        html += `<li><strong>${Util.escape(q.enunciado.substring(0,120))}...</strong><br><span class="texto-suave">${Util.escape(q.explicacao.substring(0,200))}</span></li>`;
      });
      html += '</ul>';
      html += `<p><a class="link-video" href="https://www.youtube.com/results?search_query=${encodeURIComponent(materia+' '+topico)}" target="_blank" rel="noopener">🔎 Ver aulas no YouTube</a></p>`;
    } else {
      html += `<p class="texto-suave">Sem questões cadastradas ainda. Confira explicações na Sala de Aula.</p>`;
    }
    conteudo.innerHTML = html;
    modal.classList.remove('oculto');
  },

  exportarPDF() {
    const area = document.getElementById('area-impressao');
    area.innerHTML = document.getElementById('tela-mapa-mental').innerHTML;
    window.print();
  }
};
