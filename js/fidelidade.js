/* ============================================================
   GABARITO CAFÉ — js/fidelidade.js
   Cartão Fidelidade de Estudos:
   - 10 carimbos por cartela (ganha 1 carimbo a cada simulado ou revisão concluída)
   - Ao completar 10 carimbos, abre modal/relatório especial + conquistas
   - Salva cartelas completadas e conquistas no localStorage
   ============================================================ */

const FidelidadeUI = {
  TAMANHO_CARTELA: 10,

  obterDados() {
    const id = Auth.idAtual();
    if (!id) return { carimbos: 0, cartelasCompletas: 0, conquistas: [] };
    return Armazenamento.ler('gc_fidelidade_' + id, {
      carimbos: 0,
      cartelasCompletas: 0,
      conquistas: []
    });
  },

  salvarDados(dados) {
    const id = Auth.idAtual();
    if (id) {
      Armazenamento.salvar('gc_fidelidade_' + id, dados);
    }
  },

  // Adiciona um carimbo (chamado após concluir simulado ou revisão)
  adicionarCarimbo(motivo = 'simulado') {
    const dados = this.obterDados();
    dados.carimbos = (dados.carimbos || 0) + 1;

    let completou = false;
    if (dados.carimbos >= this.TAMANHO_CARTELA) {
      dados.carimbos = 0;
      dados.cartelasCompletas = (dados.cartelasCompletas || 0) + 1;
      completou = true;

      // Desbloqueia conquista correspondente à quantidade de cartelas
      if (!dados.conquistas) dados.conquistas = [];
      const novaConquista = this.checarConquistas(dados.cartelasCompletas);
      if (novaConquista && !dados.conquistas.includes(novaConquista.id)) {
        dados.conquistas.push(novaConquista.id);
      }
    }

    this.salvarDados(dados);

    if (completou) {
      this.exibirRelatorioEspecial(dados);
    } else {
      App.torrada(T('fidelidade_toast_carimbo', { n: dados.carimbos, total: this.TAMANHO_CARTELA }), 'sucesso');
    }
  },

  checarConquistas(cartelas) {
    if (cartelas === 1) return { id: 'mestre_coado', titulo: '☕ Mestre do Coado', desc: 'Completou sua 1ª cartela fidelidade!' };
    if (cartelas === 3) return { id: 'espresso_triplo', titulo: '⚡ Espresso Triplo', desc: 'Completou 3 cartelas fidelidade!' };
    if (cartelas === 5) return { id: 'constancia_ouro', titulo: '🏆 Constância de Ouro', desc: 'Completou 5 cartelas fidelidade!' };
    if (cartelas === 10) return { id: 'gabarito_platina', titulo: '🎯 Gabarito de Platina', desc: '10 cartelas completas! Verdadeiro barista dos estudos.' };
    return null;
  },

  exibirRelatorioEspecial(dados) {
    const modal = document.getElementById('modal-materia');
    const conteudo = document.getElementById('modal-conteudo');
    if (!modal || !conteudo) return;

    let html = '<div style="text-align:center;padding:1rem 0">';
    html += '<div style="font-size:3.5rem;margin-bottom:0.5rem">☕🎉</div>';
    html += '<h2 style="color:var(--cafe);margin:0 0 0.5rem">' + T('fidelidade_relatorio_t') + '</h2>';
    html += '<p style="font-size:1.05rem;font-weight:700">' + T('fidelidade_relatorio_sub', { n: dados.cartelasCompletas }) + '</p>';
    html += '<div class="postit" style="margin:1.2rem 0;text-align:left">';
    html += '<p><strong>' + T('fidelidade_relatorio_premio_t') + '</strong></p>';
    html += '<p>' + T('fidelidade_relatorio_premio_txt') + '</p>';
    html += '</div>';

    // Lista de Conquistas
    html += '<h3 style="margin-top:1.5rem;font-size:1.1rem">' + T('fidelidade_conquistas_t') + '</h3>';
    html += '<div style="display:flex;gap:0.6rem;justify-content:center;flex-wrap:wrap;margin-top:0.8rem">';

    const listaConquistas = [
      { id: 'mestre_coado', icone: '☕', nome: 'Mestre do Coado (1 cartela)' },
      { id: 'espresso_triplo', icone: '⚡', nome: 'Espresso Triplo (3 cartelas)' },
      { id: 'constancia_ouro', icone: '🏆', nome: 'Constância de Ouro (5 cartelas)' },
      { id: 'gabarito_platina', icone: '🎯', nome: 'Gabarito de Platina (10 cartelas)' }
    ];

    for (const c of listaConquistas) {
      const possui = dados.conquistas && dados.conquistas.includes(c.id);
      html += '<div class="chip ' + (possui ? 'verde' : '') + '" style="opacity:' + (possui ? '1' : '0.45') + ';padding:0.5rem 0.8rem;font-size:0.85rem">';
      html += c.icone + ' ' + c.nome + (possui ? ' ✓' : '');
      html += '</div>';
    }

    html += '</div>';
    html += '<button class="botao botao-primario grande" id="btn-fechar-fidelidade" style="margin-top:1.8rem;width:100%">' + T('fidelidade_btn_continuar') + '</button>';
    html += '</div>';

    conteudo.innerHTML = html;
    modal.classList.remove('oculto');

    document.getElementById('btn-fechar-fidelidade').addEventListener('click', () => {
      modal.classList.add('oculto');
      if (typeof App !== 'undefined') App.redesenharTelaAtual();
    });
  },

  // Retorna HTML da cartela visual para colocar no Dashboard.
  // TEAM_007: cada casa carimbada mostra, junto do ☕, o que foi feito
  // (simulado/revisão), a data, o horário e a % de acertos — os detalhes
  // vêm dos últimos resultados salvos (1 carimbo = 1 resultado, sempre
  // em sincronia; se o histórico estiver menor, cai no ☕ simples).
  renderizarCartela() {
    const dados = this.obterDados();
    const carimbos = dados.carimbos || 0;
    const local = { pt: 'pt-BR', en: 'en-US', es: 'es-ES' }[Idioma.atual] || 'pt-BR'; // locale do idioma atual

    // Detalhes dos carimbos da cartela atual: os N resultados mais recentes
    const id = Auth.idAtual();                                        // conta ou visitante
    const historico = id ? Armazenamento.ler('gc_resultados_' + id, []) : []; // histórico de atividades
    const visiveis = historico.slice(-carimbos);                      // as atividades desta cartela

    let html = '<div class="cartao" style="background:var(--creme-escuro);border:2px dashed var(--caramelo);margin-bottom:1.5rem">';
    html += '<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.8rem">';
    html += '<div>';
    html += '<strong style="color:var(--cafe);font-size:1.05rem">🎟️ ' + T('fidelidade_cartela_t') + '</strong>';
    html += '<p class="texto-suave" style="font-size:0.8rem;margin:0">' + T('fidelidade_cartela_sub', { n: carimbos, total: this.TAMANHO_CARTELA }) + '</p>';
    html += '</div>';
    if (dados.cartelasCompletas > 0) {
      html += '<span class="chip caramelo">🏆 ' + T('fidelidade_completas', { n: dados.cartelasCompletas }) + '</span>';
    }
    html += '</div>';

    // Grade de carimbos: casas horizontais (☕ + detalhes) que quebram linha
    html += '<div class="fid-grade">';
    for (let i = 0; i < this.TAMANHO_CARTELA; i++) {
      const r = visiveis[i];                                    // resultado que gerou este carimbo (se houver)
      if (i < carimbos && r) {                                  // casa carimbada com dados
        const d = new Date(r.dataISO);                          // data/hora da atividade
        const data = d.toLocaleDateString(local, { day: '2-digit', month: '2-digit' }); // "30/09"
        const hora = d.toLocaleTimeString(local, { hour: '2-digit', minute: '2-digit' }); // "14:32"
        const tipo = r.refazendo ? T('nav_revisao') : T('nav_simulado'); // o que foi feito (🔁/📝)
        const cor = r.percentual >= 70 ? 'ok' : (r.percentual >= 50 ? 'medio' : 'ruim'); // cor do selo de %
        html += '<div class="carimbo" title="' + tipo + ' · ' + data + ' · ' + r.percentual + '%">';
        html += '<span class="carimbo-copo">☕</span>';         // o carimbo de café
        html += '<span class="carimbo-info">';                  // infos junto do emoji
        html += '<span class="carimbo-tipo">' + tipo + '</span>'; // simulado ou revisão
        html += '<span class="carimbo-quando">' + data + ' · ' + hora + '</span>'; // data e horário
        html += '</span>';
        html += '<span class="carimbo-pct ' + cor + '">' + r.percentual + '%</span>'; // aproveitamento
        html += '</div>';
      } else if (i < carimbos) {                                // carimbada, mas sem detalhe (histórico mais curto)
        html += '<div class="carimbo"><span class="carimbo-copo">☕</span></div>'; // ☕ simples
      } else {                                                  // casa vazia
        html += '<div class="carimbo carimbo-vazio"><span class="carimbo-copo">☕</span></div>'; // fantasma
      }
    }
    html += '</div>';
    html += '</div>';

    return html;
  }
};
