/* ============================================================
   GABARITO CAFÉ — js/pwa.js
   Instalação do PWA: registra o service worker (sw.js) e cuida
   do botão "Instalar app". Quando o navegador oferece a
   instalação (evento beforeinstallprompt), o botão aparece no
   cartão de login e no rodapé da barra lateral. No iPhone
   (Safari não dispara o evento) o botão mostra a instrução
   manual "Adicionar à Tela de Início".

   TEAM_002: arquivo novo — instalação PWA / modo offline.
   ============================================================ */

// Objeto global que gerencia a instalação do PWA
const Pwa = {

  // Evento de instalação capturado (guarda o prompt para usar no clique)
  eventoInstalacao: null,                         // TEAM_002: prompt nativo em espera

  // Inicializa o PWA (chamado quando o DOM estiver pronto)
  iniciar() {
    // Registra o service worker — relativo para funcionar na subpasta do GitHub Pages
    if ('serviceWorker' in navigator) {           // navegador suporta service worker?
      navigator.serviceWorker.register('sw.js')   // registra o sw.js da raiz do site
        .catch(erro => console.warn('SW não registrou:', erro)); // falha silenciosa no console
    }

    // Liga o clique de todos os botões "Instalar app" (login + barra lateral)
    document.querySelectorAll('.btn-instalar').forEach(botao => { // TEAM_002: percorre os botões
      botao.addEventListener('click', () => this.instalar());     // clique chama a instalação
    });

    // O navegador ofereceu instalação? Guarda o evento e revela os botões.
    window.addEventListener('beforeinstallprompt', (evento) => { // TEAM_002: prompt disponível
      evento.preventDefault();                    // impede o mini-banner automático
      this.eventoInstalacao = evento;             // guarda para disparar no clique
      this.mostrarBotoes();                       // revela os botões "Instalar app"
    });

    // App instalado com sucesso: esconde os botões e comemora com torrada.
    window.addEventListener('appinstalled', () => { // TEAM_002: instalação concluída
      this.eventoInstalacao = null;               // limpa o prompt usado
      this.esconderBotoes();                      // some com os botões (já está instalado)
      if (typeof App !== 'undefined') App.torrada(T('toast_instalado'), 'sucesso'); // aviso
    });

    // iOS não tem beforeinstallprompt: no Safari do iPhone/iPad mostramos o botão
    // com instrução manual — a menos que já esteja rodando instalado (standalone).
    const ehIos = /iphone|ipad|ipod/i.test(navigator.userAgent);      // TEAM_002: iOS?
    const rodandoInstalado = window.matchMedia('(display-mode: standalone)').matches // modo app
      || navigator.standalone === true;           // flag do Safari iOS para "já instalado"
    if (ehIos && !rodandoInstalado) this.mostrarBotoes(); // iOS sem instalar → mostra botão
    if (rodandoInstalado) this.esconderBotoes();  // já é app instalado → nunca mostra
  },

  // Clique no botão "Instalar app": dispara o prompt nativo ou a instrução do iOS
  async instalar() {
    if (!this.eventoInstalacao) {                 // sem prompt nativo (iOS ou navegador antigo)
      if (typeof App !== 'undefined') App.torrada(T('pwa_ios')); // mostra o caminho manual
      return;                                     // nada mais a fazer sem o evento
    }
    const prompt = this.eventoInstalacao;         // guarda a referência antes de limpar
    this.eventoInstalacao = null;                 // o evento só pode ser usado uma vez
    prompt.prompt();                              // abre a caixa de instalação do navegador
    const escolha = await prompt.userChoice;      // espera a decisão do usuário
    if (escolha.outcome !== 'accepted') this.eventoInstalacao = prompt; // recusou? devolve o prompt
  },

  // Revela todos os botões "Instalar app"
  mostrarBotoes() {
    document.querySelectorAll('.btn-instalar').forEach(botao => { // percorre os botões
      botao.classList.remove('oculto');           // tira o escondido
    });
  },

  // Esconde todos os botões "Instalar app"
  esconderBotoes() {
    document.querySelectorAll('.btn-instalar').forEach(botao => { // percorre os botões
      botao.classList.add('oculto');              // põe o escondido de volta
    });
  }
};

// Quando a página estiver pronta, liga a parte de instalação do PWA
document.addEventListener('DOMContentLoaded', () => Pwa.iniciar()); // TEAM_002: inicialização
