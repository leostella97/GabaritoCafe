/* ============================================================
   GABARITO CAFÉ — js/mapa-mental.js
   Mapa mental por matéria/tópicos com export PDF e modais
   ============================================================ */
const MapaMentalUI = {
  async renderizar(materiaFiltro = '') {
    const caixa = document.getElementById('tela-mapa-mental');
    if (!caixa) return;
    let html = '<div class="titulo-secao"><h3>Mapa Mental</h3></div>';
    html += '<div class="cartao mapa-cabecalho" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem">';
    html += '<p class="texto-suave" style="margin:0">Matérias com seus tópicos principais. Clique em um tópico para ver explicação e aula.</p>';
    html += '<button class="botao botao-contorno pequeno" id="btn-mapa-export">📄 Exportar PDF</button>';
    html += '</div>';
    html += '<div id="mapa-conteudo" class="mapa-conteudo"></div>';
    caixa.innerHTML = html;
    document.getElementById('btn-mapa-export').addEventListener('click', () => this.exportarPDF());
    if (!BancoLoader.pronto()) {
      await BancoLoader.carregar().catch(()=>{});
    }
    this.desmontar(materiaFiltro);
  },

  desmontar(materiaFiltro) {
    const container = document.getElementById('mapa-conteudo');
    if (!container) return;
    const materiasSet = new Set();
    if (BancoQuestoes && BancoQuestoes.length) {
      BancoQuestoes.forEach(q => materiasSet.add(q.materia));
    }
    const materias = Array.from(materiasSet).sort((a,b)=>a.localeCompare(b));
    let html = '<div class="grade-mapas" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:1rem">';
    materias.forEach(m => {
      const topicosSet = new Set();
      (BancoQuestoes||[]).filter(q=>q.materia===m).forEach(q=> topicosSet.add(q.tema));
      const topicos = Array.from(topicosSet).sort((a,b)=>a.localeCompare(b));
      html += `<div class="cartao aparecer mapa-cartao">`;
      html += `<div class="categoria-titulo">📚 ${Util.escape(m)}</div>`;
      if (topicos.length) {
        html += '<div class="mapa-topicos" style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-top:0.6rem">';
        topicos.forEach(t => {
          html += `<button class="botao botao-fantasma pequeno mapa-topico" data-materia="${Util.escape(m)}" data-topico="${Util.escape(t)}" type="button">${Util.escape(t)}</button>`;
        });
        html += '</div>';
      } else {
        html += `<p class="texto-suave" style="font-size:0.85rem;margin:0.5rem 0 0">Sem tópicos cadastrados.</p>`;
      }
      html += `</div>`;
    });
    html += '</div>';
    container.innerHTML = html;
    container.addEventListener('click', (e)=>{
      const btn = e.target.closest('.mapa-topico');
      if (!btn) return;
      const materia = btn.dataset.materia;
      const topico = btn.dataset.topico;
      this.abrirModalTopico(materia, topico);
    });
  },

  abrirModalTopico(materia, topico) {
    EditalUI.iniciarModal();
    const modal = document.getElementById('modal-materia');
    const conteudo = document.getElementById('modal-conteudo');
    const exs = (BancoQuestoes||[]).filter(q=>q.materia===materia && q.tema===topico);
    let html = `<h3>${Util.escape(materia)} — ${Util.escape(topico)}</h3>`;
    html += `<p class="texto-suave">Questões relacionadas encontradas: ${exs.length}</p>`;
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
    const tela = document.getElementById('tela-mapa-mental');
    if (!tela) return;
    area.innerHTML = tela.innerHTML;
    window.print();
  }
};
