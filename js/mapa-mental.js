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
      html += `<button class="categoria-titulo mapa-materia" data-materia="${Util.escape(m)}" style="background:none;border:0;width:100%;text-align:left;cursor:pointer;font:inherit">📚 ${Util.escape(m)}</button>`;
      if (topicos.length) {
        html += '<div class="mapa-topicos" style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-top:0.6rem;max-height:260px;overflow-y:auto;overflow-x:hidden">';
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
      const btnTopico = e.target.closest('.mapa-topico');
      if (btnTopico) {
        const materia = btnTopico.dataset.materia;
        const topico = btnTopico.dataset.topico;
        this.abrirModalTopico(materia, topico);
        return;
      }
      const btnMat = e.target.closest('.mapa-materia');
      if (btnMat) {
        const materia = btnMat.dataset.materia;
        this.abrirModalMateria(materia);
      }
    });
  },

  abrirModalMateria(materia) {
    EditalUI.iniciarModal();
    const modal = document.getElementById('modal-materia');
    const conteudo = document.getElementById('modal-conteudo');
    const topicosSet = new Set();
    (BancoQuestoes||[]).filter(q=>q.materia===materia).forEach(q=> topicosSet.add(q.tema));
    const topicos = Array.from(topicosSet).sort((a,b)=>a.localeCompare(b));
    let html = `<div class="cartao" style="padding:1rem">`;
    html += `<div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;flex-wrap:wrap">`;
    html += `<div class="categoria-titulo" style="margin:0">📚 ${Util.escape(materia)}</div>`;
    html += `<button class="botao botao-contorno pequeno" id="btn-export-materia">📄 Exportar PDF desta matéria</button>`;
    html += `</div>`;
    html += `<p class="texto-suave">Clique em um tópico para ver explicação e aula no YouTube.</p>`;
    if (topicos.length) {
      html += '<div class="mapa-topicos" style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-top:0.8rem">';
      topicos.forEach(t => {
        html += `<button class="botao botao-fantasma pequeno mapa-topico-modal" data-materia="${Util.escape(materia)}" data-topico="${Util.escape(t)}" type="button">${Util.escape(t)}</button>`;
      });
      html += '</div>';
    } else {
      html += `<p class="texto-suave">Sem tópicos cadastrados.</p>`;
    }
    html += `</div>`;
    conteudo.innerHTML = html;
    modal.classList.remove('oculto');
    // exportar PDF da matéria
    const btnExport = document.getElementById('btn-export-materia');
    if (btnExport) {
      btnExport.addEventListener('click', () => this.exportarPDFMateria(materia));
    }
    // delega clique nos tópicos do modal
    conteudo.onclick = (e) => {
      const btn = e.target.closest('.mapa-topico-modal');
      if (!btn) return;
      this.abrirModalTopico(btn.dataset.materia, btn.dataset.topico);
    };
  },

  abrirModalTopico(materia, topico) {
    EditalUI.iniciarModal();
    const modal = document.getElementById('modal-materia');
    const conteudo = document.getElementById('modal-conteudo');
    const exs = (BancoQuestoes||[]).filter(q=>q.materia===materia && q.tema===topico);
    const urlYouTube = `https://www.youtube.com/results?search_query=${encodeURIComponent(materia+' '+topico)}`;
    const qrDataUrl = typeof Impressao !== 'undefined' ? Impressao.qrDaUrl(urlYouTube) : '';
    let html = `<div class="cartao" style="padding:1rem">`;
    html += `<div class="categoria-titulo">${Util.escape(materia)} — ${Util.escape(topico)}</div>`;
    html += `<p class="texto-suave">Questões relacionadas encontradas: ${exs.length}</p>`;
    if (exs.length) {
      html += '<ul style="padding-left:1.2rem">';
      exs.slice(0,5).forEach(q=>{
        html += `<li style="margin-bottom:0.6rem"><strong>${Util.escape(q.enunciado.substring(0,140))}...</strong><br><span class="texto-suave">${Util.escape(q.explicacao.substring(0,220))}</span></li>`;
      });
      html += '</ul>';
    } else {
      html += `<p class="texto-suave">Sem questões cadastradas ainda. Confira explicações na Sala de Aula.</p>`;
    }
    html += `<div style="display:flex;gap:1rem;align-items:center;margin-top:1rem;flex-wrap:wrap">`;
    if (qrDataUrl) {
      html += `<img src="${qrDataUrl}" alt="QR YouTube" style="width:120px;height:120px;border:1px solid #ddd;border-radius:8px;padding:4px;background:#fff"/>`;
    }
    html += `<div>`;
    html += `<a class="botao botao-contorno" href="${urlYouTube}" target="_blank" rel="noopener">🔎 Ver aulas no YouTube</a>`;
    html += `<p class="texto-suave" style="margin-top:0.4rem;font-size:0.85rem">Escaneie o QR para abrir direto no celular.</p>`;
    html += `</div></div>`;
    html += `</div>`;
    conteudo.innerHTML = html;
    modal.classList.remove('oculto');
  },

  exportarPDFMateria(materia) {
    const area = document.getElementById('area-impressao');
    if (!area) return;
    const topicosSet = new Set();
    (BancoQuestoes||[]).filter(q=>q.materia===materia).forEach(q=> topicosSet.add(q.tema));
    const topicos = Array.from(topicosSet).sort((a,b)=>a.localeCompare(b));
    let html = '<div class="folha-impressao">';
    html += '<header class="cabecalho-impressao" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;border-bottom:2px solid #333;padding-bottom:0.5rem">';
    html += `<div><h1 style="margin:0">Mapa Mental — ${Util.escape(materia)}</h1><p style="margin:0;font-size:0.9rem">Gabarito Café</p></div>`;
    html += `<div style="text-align:right;font-size:0.85rem"><div>${new Date().toLocaleDateString('pt-BR')}</div><div>${Idioma.atual.toUpperCase()}</div></div>`;
    html += '</header>';
    html += `<div class="cartao" style="border:1px solid #ccc;border-radius:8px;padding:0.8rem">`;
    html += `<h3 style="margin:0 0 0.5rem">${Util.escape(materia)}</h3>`;
    if (topicos.length) {
      html += '<ul style="padding-left:1.2rem;margin:0">';
      topicos.forEach(t => html += `<li>${Util.escape(t)}</li>`);
      html += '</ul>';
      // QR para cada tópico
      html += '<div style="margin-top:1rem;display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:0.8rem">';
      topicos.forEach(t => {
        const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(materia+' '+t)}`;
        const qr = typeof Impressao !== 'undefined' ? Impressao.qrDaUrl(url) : '';
        html += `<div style="border:1px solid #ddd;padding:0.5rem;border-radius:6px;text-align:center">`;
        html += `<div style="font-weight:700;font-size:0.9rem">${Util.escape(t)}</div>`;
        if (qr) html += `<img src="${qr}" alt="QR YouTube" style="width:100px;height:100px;margin-top:0.4rem"/>`;
        html += `</div>`;
      });
      html += '</div>';
    } else {
      html += `<p style="margin:0;font-size:0.85rem;color:#666">Sem tópicos</p>`;
    }
    html += `</div>`;
    html += '<footer style="margin-top:1.5rem;font-size:0.75rem;color:#666;text-align:center">Gerado localmente pelo Gabarito Café • seus dados ficam só com você</footer>';
    html += '</div>';
    area.innerHTML = html;
    window.print();
  },

  exportarPDF() {
    const area = document.getElementById('area-impressao');
    if (!area) return;
    const materiasSet = new Set();
    if (BancoQuestoes && BancoQuestoes.length) {
      BancoQuestoes.forEach(q => materiasSet.add(q.materia));
    }
    const materias = Array.from(materiasSet).sort((a,b)=>a.localeCompare(b));
    let html = '<div class="folha-impressao">';
    html += '<header class="cabecalho-impressao" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;border-bottom:2px solid #333;padding-bottom:0.5rem">';
    html += '<div><h1 style="margin:0">Mapa Mental</h1><p style="margin:0;font-size:0.9rem">Gabarito Café</p></div>';
    html += `<div style="text-align:right;font-size:0.85rem"><div>${new Date().toLocaleDateString('pt-BR')}</div><div>${Idioma.atual.toUpperCase()}</div></div>`;
    html += '</header>';
    html += '<div class="grade-mapas" style="display:grid;grid-template-columns:repeat(2,1fr);gap:1rem">';
    materias.forEach(m => {
      const topicosSet = new Set();
      (BancoQuestoes||[]).filter(q=>q.materia===m).forEach(q=> topicosSet.add(q.tema));
      const topicos = Array.from(topicosSet).sort((a,b)=>a.localeCompare(b));
      html += `<div class="cartao" style="border:1px solid #ccc;border-radius:8px;padding:0.8rem">`;
      html += `<h3 style="margin:0 0 0.5rem">${Util.escape(m)}</h3>`;
      if (topicos.length) {
        html += '<ul style="padding-left:1.2rem;margin:0">';
        topicos.forEach(t => html += `<li>${Util.escape(t)}</li>`);
        html += '</ul>';
      } else {
        html += `<p style="margin:0;font-size:0.85rem;color:#666">Sem tópicos</p>`;
      }
      html += `</div>`;
    });
    html += '</div>';
    html += '<footer style="margin-top:1.5rem;font-size:0.75rem;color:#666;text-align:center">Gerado localmente pelo Gabarito Café • seus dados ficam só com você</footer>';
    html += '</div>';
    area.innerHTML = html;
    window.print();
  }
};
