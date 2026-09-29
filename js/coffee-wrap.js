/* ============================================================
   GABARITO CAFÉ — js/coffee-wrap.js
   Card de Desempenho para Compartilhar ("Coffee Wrap"):
   - Gera card visual no Canvas 2D com as estatísticas da semana
   - Permite baixar como imagem (PNG) ou copiar para área de transferência
   ============================================================ */

const CoffeeWrapUI = {
  gerarCanvas(estatisticas) {
    const canvas = document.createElement('canvas');
    canvas.width = 600;
    canvas.height = 600;
    const ctx = canvas.getContext('2d');

    // Fundo Gradiente Café
    const grad = ctx.createLinearGradient(0, 0, 0, 600);
    grad.addColorStop(0, '#3d2314');
    grad.addColorStop(1, '#6f4e37');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 600, 600);

    // Moldura Dourada / Caramelo
    ctx.strokeStyle = '#c98a5e';
    ctx.lineWidth = 12;
    ctx.strokeRect(20, 20, 560, 560);

    // Título Principal
    ctx.fillStyle = '#fdf8f5';
    ctx.font = 'bold 36px Fraunces, serif';
    ctx.textAlign = 'center';
    ctx.fillText('☕ COFFEE WRAP', 300, 80);

    ctx.fillStyle = '#c98a5e';
    ctx.font = 'bold 18px Nunito, sans-serif';
    ctx.fillText('GABARITO CAFÉ · RESUMO DA SEMANA', 300, 110);

    // Nome e Cargo
    const usuario = Auth.usuarioAtual();
    const nome = usuario ? usuario.nome : 'Estudante';
    const foco = Auth.focoAtual();

    ctx.fillStyle = '#ffffff';
    ctx.font = '900 24px Nunito, sans-serif';
    ctx.fillText('👤 ' + nome, 300, 160);

    if (foco) {
      ctx.fillStyle = '#e8d8c8';
      ctx.font = '16px Nunito, sans-serif';
      ctx.fillText('🎯 Foco: ' + foco, 300, 185);
    }

    // Caixa de Estatísticas
    ctx.fillStyle = 'rgba(253, 248, 245, 0.12)';
    ctx.roundRect ? ctx.roundRect(50, 210, 500, 280, 16) : ctx.fillRect(50, 210, 500, 280);
    ctx.fill();

    // Stats Grid
    const qResolvidas = estatisticas.totalQuestoes || 0;
    const acerto = estatisticas.aproveitamento || 0;
    const dias = estatisticas.sequencia || 0;
    const melhorMat = estatisticas.melhorMateria || 'Geral';

    // Item 1: Questões
    ctx.fillStyle = '#c98a5e';
    ctx.font = 'bold 14px Nunito, sans-serif';
    ctx.fillText('QUESTÕES RESOLVIDAS', 175, 255);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 42px Fraunces, serif';
    ctx.fillText(String(qResolvidas), 175, 305);

    // Item 2: Taxa de Acerto
    ctx.fillStyle = '#c98a5e';
    ctx.font = 'bold 14px Nunito, sans-serif';
    ctx.fillText('APROVEITAMENTO', 425, 255);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 42px Fraunces, serif';
    ctx.fillText(acerto + '%', 425, 305);

    // Linha Divisória interna
    ctx.strokeStyle = 'rgba(201, 138, 94, 0.4)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(80, 335);
    ctx.lineTo(520, 335);
    ctx.stroke();

    // Item 3: Ofensiva
    ctx.fillStyle = '#c98a5e';
    ctx.font = 'bold 14px Nunito, sans-serif';
    ctx.fillText('OFENSIVA', 175, 375);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 36px Fraunces, serif';
    ctx.fillText('🔥 ' + dias + ' dias', 175, 420);

    // Item 4: Destaque
    ctx.fillStyle = '#c98a5e';
    ctx.font = 'bold 14px Nunito, sans-serif';
    ctx.fillText('MATÉRIA DESTAQUE', 425, 375);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 22px Nunito, sans-serif';
    ctx.fillText(melhorMat, 425, 415);

    // Rodapé / Slogan
    ctx.fillStyle = '#c98a5e';
    ctx.font = 'italic 18px Caveat, cursive';
    ctx.fillText('“Aprovação não se faz num gole só: se faz em goles diários.”', 300, 525);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.font = '12px Nunito, sans-serif';
    ctx.fillText('gabarito.cafe · 100% no seu navegador', 300, 555);

    return canvas;
  },

  coletarEstatisticas() {
    const uid = Auth.idAtual();
    if (!uid) return { totalQuestoes: 0, aproveitamento: 0, sequencia: 0, melhorMateria: 'Geral' };

    const chave = 'gc_resultados_' + uid;
    const historico = Armazenamento.ler(chave, []);

    let totalQ = 0;
    let totalAcertos = 0;
    const porMat = {};

    for (const r of historico) {
      totalQ += (r.total || 0);
      totalAcertos += (r.acertos || 0);
      if (r.porMateria) {
        for (const m in r.porMateria) {
          if (!porMat[m]) porMat[m] = { total: 0, acertos: 0 };
          porMat[m].total += r.porMateria[m].total;
          porMat[m].acertos += r.porMateria[m].acertos;
        }
      }
    }

    const aproveitamento = totalQ > 0 ? Math.round((totalAcertos / totalQ) * 100) : 0;

    let melhorMateria = 'Geral';
    let melhorPct = -1;
    for (const m in porMat) {
      if (porMat[m].total >= 3) {
        const pct = (porMat[m].acertos / porMat[m].total) * 100;
        if (pct > melhorPct) {
          melhorPct = pct;
          melhorMateria = m;
        }
      }
    }

    // Calcula dias seguidos
    let sequencia = 0;
    if (historico.length > 0) {
      const datas = historico.map(r => r.dataISO ? r.dataISO.slice(0, 10) : '').filter(Boolean);
      const datasUnicas = Array.from(new Set(datas)).sort().reverse();
      const hoje = new Date().toISOString().slice(0, 10);

      if (datasUnicas.includes(hoje)) {
        sequencia = 1;
        let ref = new Date();
        while (true) {
          ref.setDate(ref.getDate() - 1);
          const iso = ref.toISOString().slice(0, 10);
          if (datasUnicas.includes(iso)) sequencia++;
          else break;
        }
      }
    }

    return {
      totalQuestoes: totalQ,
      aproveitamento: aproveitamento,
      sequencia: sequencia,
      melhorMateria: melhorMateria
    };
  },

  abrirModalWrap() {
    const modal = document.getElementById('modal-materia');
    const conteudo = document.getElementById('modal-conteudo');
    if (!modal || !conteudo) return;

    const stats = this.coletarEstatisticas();
    const canvas = this.gerarCanvas(stats);
    const dataUrl = canvas.toDataURL('image/png');

    let html = '<div style="text-align:center;padding:0.5rem 0">';
    html += '<h3>☕ ' + T('wrap_titulo') + '</h3>';
    html += '<p class="texto-suave">' + T('wrap_sub') + '</p>';

    html += '<div style="margin:1rem 0">';
    html += '<img id="img-coffee-wrap" src="' + dataUrl + '" style="max-width:100%;height:auto;border-radius:12px;box-shadow:0 4px 15px rgba(0,0,0,0.2)">';
    html += '</div>';

    html += '<div style="display:flex;gap:0.8rem;justify-content:center;flex-wrap:wrap;margin-top:1rem">';
    html += '<a id="btn-baixar-wrap" class="botao botao-primario" href="' + dataUrl + '" download="coffee-wrap-gabarito-cafe.png">⬇️ ' + T('wrap_btn_baixar') + '</a>';
    html += '<button id="btn-copiar-wrap" class="botao botao-contorno">📋 ' + T('wrap_btn_copiar') + '</button>';
    html += '</div>';

    html += '</div>';

    conteudo.innerHTML = html;
    modal.classList.remove('oculto');

    document.getElementById('btn-copiar-wrap').addEventListener('click', async () => {
      try {
        canvas.toBlob(async (blob) => {
          if (navigator.clipboard && window.ClipboardItem) {
            await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
            App.torrada(T('wrap_toast_copiado'), 'sucesso');
          } else {
            App.torrada(T('wrap_toast_sem_suporte'), 'erro');
          }
        });
      } catch (e) {
        console.error('Erro ao copiar imagem:', e);
        App.torrada(T('wrap_toast_sem_suporte'), 'erro');
      }
    });
  },

  renderizarBotao() {
    let html = '<div class="cartao" style="background:var(--caramelo-suave);border:1px solid var(--linha);margin-bottom:1.5rem">';
    html += '<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.8rem">';
    html += '<div>';
    html += '<strong style="color:var(--cafe);font-size:1.05rem">☕ ' + T('wrap_card_t') + '</strong>';
    html += '<p class="texto-suave" style="font-size:0.8rem;margin:0">' + T('wrap_card_sub') + '</p>';
    html += '</div>';

    html += '<button id="btn-gerar-coffee-wrap" class="botao botao-primario pequeno">📸 ' + T('wrap_card_btn') + '</button>';
    html += '</div></div>';
    return html;
  },

  ligarEventos() {
    const btn = document.getElementById('btn-gerar-coffee-wrap');
    if (btn) {
      btn.addEventListener('click', () => this.abrirModalWrap());
    }
  }
};
