/* ============================================================
   GABARITO CAFÉ — js/pomodoro.js
   Timer Pomodoro "Moendo o Café":
   - Cronômetro de foco (25 min = "Passando o café")
   - Descanso curto (5 min = "Pausa para o cafézinho")
   - Descanso longo (15 min = "Café Especial")
   - Som de cafeteria sintetizado 100% via Web Audio API (sem arquivos externos)
   ============================================================ */

// Gerador de Som com Web Audio API
const PomodoroAudio = {
  ctx: null,
  ruidoNode: null,
  gainNode: null,
  lfoNode: null,
  tocandoSom: false,

  obterContexto() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  },

  // Sintetiza ruído marrom/rosa filtrado + borbulhamento leve simulando cafeteria
  iniciarSomCafeteria(volume = 0.3) {
    const ctx = this.obterContexto();
    if (!ctx) return;
    if (this.tocandoSom) this.pararSomCafeteria();

    try {
      const bufferSize = ctx.sampleRate * 2;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);

      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        // Filtro de ruído rosa/marrom suave
        data[i] = (lastOut + (0.02 * white)) / 1.02;
        lastOut = data[i];
      }

      this.ruidoNode = ctx.createBufferSource();
      this.ruidoNode.buffer = buffer;
      this.ruidoNode.loop = true;

      // Filtro passa-baixa para dar sensação de ambiente abafado/cafeteria
      const filtro = ctx.createBiquadFilter();
      filtro.type = 'lowpass';
      filtro.frequency.setValueAtTime(450, ctx.currentTime);

      // Ganho principal
      this.gainNode = ctx.createGain();
      this.gainNode.gain.setValueAtTime(volume * 0.15, ctx.currentTime);

      this.ruidoNode.connect(filtro);
      filtro.connect(this.gainNode);
      this.gainNode.connect(ctx.destination);

      this.ruidoNode.start();
      this.tocandoSom = true;
    } catch (e) {
      console.warn('Erro ao tocar som de cafeteria WebAudio:', e);
    }
  },

  pararSomCafeteria() {
    if (this.ruidoNode) {
      try { this.ruidoNode.stop(); } catch(e){}
      this.ruidoNode.disconnect();
      this.ruidoNode = null;
    }
    this.tocandoSom = false;
  },

  ajustarVolume(vol) {
    if (this.gainNode && this.ctx) {
      this.gainNode.gain.setValueAtTime(vol * 0.15, this.ctx.currentTime);
    }
  },

  // Beep de notificação ao concluir foco ou pausa
  tocarAviso(tipo = 'foco') {
    const ctx = this.obterContexto();
    if (!ctx) return;
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      if (tipo === 'foco') {
        osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
        osc.frequency.exponentialRampToValueAtTime(659.25, ctx.currentTime + 0.3); // E5
      } else {
        osc.frequency.setValueAtTime(659.25, ctx.currentTime); // E5
        osc.frequency.exponentialRampToValueAtTime(523.25, ctx.currentTime + 0.3); // C5
      }

      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.5);
    } catch (e) {
      console.warn('Erro ao tocar som de aviso:', e);
    }
  }
};

// Gerenciador do Cronômetro Pomodoro
const PomodoroUI = {
  estado: {
    modo: 'foco', // foco (25 min) | descanso (5 min) | longo (15 min)
    tempoRestante: 25 * 60,
    tempoTotal: 25 * 60,
    rodando: false,
    timerId: null,
    ciclosConcluidos: 0,
    somLigado: false,
    volumeSom: 0.3
  },

  DURACOES: {
    foco: 25 * 60,
    descanso: 5 * 60,
    longo: 15 * 60
  },

  iniciar() {
    this.carregarEstado();
    this.renderizar();
  },

  carregarEstado() {
    const id = Auth.idAtual();
    if (id) {
      const salvo = Armazenamento.ler('gc_pomodoro_' + id, null);
      if (salvo) {
        this.estado.ciclosConcluidos = salvo.ciclosConcluidos || 0;
      }
    }
  },

  salvarEstado() {
    const id = Auth.idAtual();
    if (id) {
      Armazenamento.salvar('gc_pomodoro_' + id, {
        ciclosConcluidos: this.estado.ciclosConcluidos
      });
    }
  },

  mudarModo(novoModo) {
    this.pausar();
    this.estado.modo = novoModo;
    this.estado.tempoTotal = this.DURACOES[novoModo] || (25 * 60);
    this.estado.tempoRestante = this.estado.tempoTotal;
    this.renderizar();
  },

  alternar() {
    if (this.estado.rodando) {
      this.pausar();
    } else {
      this.iniciarTimer();
    }
  },

  iniciarTimer() {
    PomodoroAudio.obterContexto();
    this.estado.rodando = true;
    if (this.estado.somLigado) {
      PomodoroAudio.iniciarSomCafeteria(this.estado.volumeSom);
    }
    clearInterval(this.estado.timerId);
    this.estado.timerId = setInterval(() => {
      this.estado.tempoRestante--;
      if (this.estado.tempoRestante <= 0) {
        this.concluirCiclo();
      } else {
        this.atualizarDisplay();
      }
    }, 1000);
    this.renderizar();
  },

  pausar() {
    this.estado.rodando = false;
    clearInterval(this.estado.timerId);
    PomodoroAudio.pararSomCafeteria();
    this.renderizar();
  },

  resetar() {
    this.pausar();
    this.estado.tempoRestante = this.estado.tempoTotal;
    this.renderizar();
  },

  concluirCiclo() {
    this.pausar();
    if (this.estado.modo === 'foco') {
      this.estado.ciclosConcluidos++;
      this.salvarEstado();
      PomodoroAudio.tocarAviso('foco');
      App.torrada(T('pomo_toast_foco_fim'), 'sucesso');
      if (this.estado.ciclosConcluidos % 4 === 0) {
        this.mudarModo('longo');
      } else {
        this.mudarModo('descanso');
      }
    } else {
      PomodoroAudio.tocarAviso('descanso');
      App.torrada(T('pomo_toast_descanso_fim'), 'sucesso');
      this.mudarModo('foco');
    }
  },

  alternarSom() {
    this.estado.somLigado = !this.estado.somLigado;
    if (this.estado.somLigado && this.estado.rodando) {
      PomodoroAudio.iniciarSomCafeteria(this.estado.volumeSom);
    } else {
      PomodoroAudio.pararSomCafeteria();
    }
    this.renderizar();
  },

  ajustarVolume(vol) {
    this.estado.volumeSom = vol;
    PomodoroAudio.ajustarVolume(vol);
  },

  tempoFormatado(segundos) {
    const m = Math.floor(segundos / 60);
    const s = segundos % 60;
    return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
  },

  atualizarDisplay() {
    const txt = this.tempoFormatado(this.estado.tempoRestante);
    const elRelogio = document.getElementById('pomo-relogio');
    if (elRelogio) elRelogio.textContent = txt;

    const elWidget = document.getElementById('pomo-widget-tempo');
    if (elWidget) elWidget.textContent = txt;

    // Atualiza título do navegador se o pomodoro estiver ativo
    if (this.estado.rodando) {
      document.title = '(' + txt + ') Gabarito Café ☕';
    }
  },

  renderizar() {
    const caixa = document.getElementById('tela-pomodoro');
    if (!caixa) return;

    const e = this.estado;
    const pct = Math.round(((e.tempoTotal - e.tempoRestante) / e.tempoTotal) * 100);

    let html = '<div class="cartao destaque aparecer" style="max-width:600px;margin:0 auto;text-align:center">';
    html += '<h3>☕ ' + T('pomo_t') + '</h3>';
    html += '<p class="texto-suave">' + T('pomo_sub') + '</p>';

    // Abas de Modo
    html += '<div class="sim-escolhas" style="justify-content:center;margin:1.2rem 0">';
    html += '<button class="botao ' + (e.modo === 'foco' ? 'botao-primario' : 'botao-contorno') + '" id="pomo-modo-foco">☕ ' + T('pomo_modo_foco') + '</button>';
    html += '<button class="botao ' + (e.modo === 'descanso' ? 'botao-primario' : 'botao-contorno') + '" id="pomo-modo-descanso">🌱 ' + T('pomo_modo_descanso') + '</button>';
    html += '<button class="botao ' + (e.modo === 'longo' ? 'botao-primario' : 'botao-contorno') + '" id="pomo-modo-longo">🍰 ' + T('pomo_modo_longo') + '</button>';
    html += '</div>';

    // Cronômetro gigante
    html += '<div class="pomo-display" style="font-size:3.8rem;font-weight:900;font-family:Fraunces,serif;color:var(--cafe);margin:1rem 0">';
    html += '<span id="pomo-relogio">' + this.tempoFormatado(e.tempoRestante) + '</span>';
    html += '</div>';

    // Barra de progresso
    html += '<div class="barra-progresso" style="margin-bottom:1.5rem"><span style="width:' + pct + '%"></span></div>';

    // Botões de Ação
    html += '<div style="display:flex;gap:0.8rem;justify-content:center;flex-wrap:wrap">';
    html += '<button id="btn-pomo-start" class="botao ' + (e.rodando ? 'botao-sucesso' : 'botao-primario') + ' grande" style="min-width:140px">' + (e.rodando ? '⏸ ' + T('pomo_pausar') : '▶️ ' + T('pomo_iniciar')) + '</button>';
    html += '<button id="btn-pomo-reset" class="botao botao-contorno grande">🔄 ' + T('pomo_resetar') + '</button>';
    html += '</div>';

    // Som de Cafeteria Web Audio API
    html += '<div class="cartao" style="margin-top:1.5rem;text-align:left;background:var(--caramelo-suave)">';
    html += '<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.8rem">';
    html += '<div>';
    html += '<strong>🎧 ' + T('pomo_som_t') + '</strong>';
    html += '<p class="texto-suave" style="font-size:0.8rem;margin:0">' + T('pomo_som_sub') + '</p>';
    html += '</div>';
    html += '<button id="btn-pomo-som" class="botao ' + (e.somLigado ? 'botao-primario' : 'botao-contorno') + ' pequeno">' + (e.somLigado ? '🔊 ' + T('pomo_som_on') : '🔇 ' + T('pomo_som_off')) + '</button>';
    html += '</div>';
    if (e.somLigado) {
      html += '<div style="margin-top:0.8rem;display:flex;align-items:center;gap:0.6rem">';
      html += '<span style="font-size:0.8rem">🔈</span>';
      html += '<input id="pomo-vol" type="range" min="0" max="1" step="0.05" value="' + e.volumeSom + '" style="flex:1">';
      html += '<span style="font-size:0.8rem">🔊</span>';
      html += '</div>';
    }
    html += '</div>';

    // Contador de xícaras/ciclos
    html += '<p class="texto-suave" style="margin-top:1.2rem">☕ ' + T('pomo_ciclos', { n: e.ciclosConcluidos }) + '</p>';

    html += '</div>';

    caixa.innerHTML = html;

    // Eventos
    document.getElementById('pomo-modo-foco').addEventListener('click', () => this.mudarModo('foco'));
    document.getElementById('pomo-modo-descanso').addEventListener('click', () => this.mudarModo('descanso'));
    document.getElementById('pomo-modo-longo').addEventListener('click', () => this.mudarModo('longo'));
    document.getElementById('btn-pomo-start').addEventListener('click', () => this.alternar());
    document.getElementById('btn-pomo-reset').addEventListener('click', () => this.resetar());
    document.getElementById('btn-pomo-som').addEventListener('click', () => this.alternarSom());

    const inputVol = document.getElementById('pomo-vol');
    if (inputVol) {
      inputVol.addEventListener('input', (ev) => this.ajustarVolume(parseFloat(ev.target.value)));
    }
  }
};
