/* ============================================================
   GABARITO CAFÉ — sw.js
   Service worker do PWA: deixa o site instalável e funcionando
   offline. Pré-cacheia todos os arquivos locais, serve a página
   com network-first (conteúdo novo chega rápido) e os demais
   recursos com stale-while-revalidate (cache + atualização em
   segundo plano).

   TEAM_002: arquivo novo — instalação PWA / modo offline.
   ============================================================ */

// Nome do cache com versão: ao mudar os arquivos servidos, suba a versão
// (ex.: v1 → v2) para o navegador descartar o cache antigo no "activate".
const CACHE = 'gabarito-cafe-v11';                // TEAM_005: bump — filtros ligados no simulado (contagens facetadas)

// Lista de arquivos locais que o app precisa para abrir 100% offline.
// Caminhos relativos ao local do sw.js (raiz do site) — assim funciona
// tanto no localhost quanto na subpasta do GitHub Pages (/GabaritoCafe/).
const ARQUIVOS = [                                // TEAM_002: precache do app inteiro
  './',                                           // raiz (index.html)
  'index.html',                                   // página única do app
  'privacidade.html',                             // política de privacidade (AdSense)
  'manifest.webmanifest',                         // manifesto do PWA
  'css/base.css',                                 // estilos base
  'css/componentes.css',                          // estilos de componentes
  'css/telas.css',                                // estilos das telas
  'css/tema-escuro.css',                          // tema escuro
  'js/armazenamento.js',                          // camada de localStorage
  'js/idioma.js',                                 // traduções
  'js/tema.js',                                   // claro/escuro
  'js/dados-temas.js',                            // temas e dicas
  'js/frases.js',                                 // frases motivadoras
  'js/dados-bancas.js',                           // bancas e pegadinhas
  'js/banco-questoes.js',                         // banco de questões
  'js/analise-edital.js',                         // análise do edital
  'js/motor-simulado.js',                         // motor do simulado
  'js/auth.js',                                   // contas e sessão
  'js/edital.js',                                 // tela do edital
  'js/conteudo.js',                               // telas de conteúdo
  'js/simulado.js',                               // tela do simulado
  'js/revisao.js',                                // tela de revisão
  'js/dashboard.js',                              // tela de progresso
  'js/app.js',                                    // gerente do app
  'js/pwa.js',                                    // instalação do PWA
  'js/anuncios.js',                               // blocos de anúncio AdSense
  'assets/logo.svg',                              // logo da xícara
  'assets/icone.svg',                             // favicon
  'assets/bandeira-br.svg',                       // bandeira PT
  'assets/bandeira-us.svg',                       // bandeira EN
  'assets/bandeira-es.svg',                       // bandeira ES
  'assets/icone-192.png',                         // ícone PWA 192
  'assets/icone-512.png',                         // ícone PWA 512
  'assets/icone-512-mascara.png',                 // ícone maskable 512
  'assets/icone-apple.png'                        // ícone Apple 180
];

// Origens externas permitidas no cache dinâmico: fontes do Google e o PDF.js.
// AdSense e qualquer outra origem NÃO entram aqui — passam direto pela rede.
const CDNS_CACHE = [                              // TEAM_002: CDNs que podem ser cacheadas
  'fonts.googleapis.com',                         // CSS das fontes
  'fonts.gstatic.com',                            // arquivos de fonte
  'cdnjs.cloudflare.com'                          // PDF.js
];

// Instalação: baixa todos os arquivos locais para o cache e ativa já.
self.addEventListener('install', (evento) => {    // TEAM_002: evento de instalação do SW
  evento.waitUntil(                               // segura a instalação até terminar
    caches.open(CACHE)                            // abre (ou cria) o cache da versão atual
      .then(cache => cache.addAll(ARQUIVOS))      // baixa e guarda todos os arquivos
      .then(() => self.skipWaiting())             // ativa este SW sem esperar abas fecharem
  );
});

// Ativação: apaga caches de versões antigas e assume o controle das abas abertas.
self.addEventListener('activate', (evento) => {   // TEAM_002: evento de ativação do SW
  evento.waitUntil(
    caches.keys()                                 // lista todos os caches existentes
      .then(nomes => Promise.all(                 // para cada nome encontrado
        nomes.filter(nome => nome !== CACHE)      // mantém só os de versões antigas
          .map(nome => caches.delete(nome))       // e apaga cada um deles
      ))
      .then(() => self.clients.claim())           // passa a controlar as abas já abertas
  );
});

// Busca: decide a estratégia conforme o tipo de requisição.
self.addEventListener('fetch', (evento) => {      // TEAM_002: evento de rede (installability + offline)
  const pedido = evento.request;                  // requisição interceptada
  if (pedido.method !== 'GET') return;            // só cacheia GET; o resto passa direto
  const url = new URL(pedido.url);                // quebra a URL para inspecionar a origem

  // Navegação (abrir a página): rede primeiro; sem rede, serve o index do cache.
  if (pedido.mode === 'navigate') {               // é um carregamento de página?
    evento.respondWith(                           // responde com a estratégia abaixo
      fetch(pedido)                               // tenta a rede primeiro (conteúdo fresco)
        .then(resposta => {                       // se a rede respondeu
          const copia = resposta.clone();         // clone para guardar no cache
          caches.open(CACHE).then(cache => cache.put('index.html', copia)); // atualiza o cache
          return resposta;                        // devolve a resposta fresca
        })
        .catch(() => caches.match('index.html'))  // offline: devolve a página do cache
    );
    return;                                       // navegação tratada
  }

  // Arquivos locais e CDNs conhecidos: stale-while-revalidate
  // (serve o cache na hora e atualiza em segundo plano para o próximo acesso).
  const ehLocal = url.origin === self.location.origin;              // arquivo do próprio site?
  const ehCdnConhecido = CDNS_CACHE.includes(url.hostname);         // CDN da lista permitida?
  if (ehLocal || ehCdnConhecido) {                // se pode usar cache
    evento.respondWith(
      caches.match(pedido).then(emCache => {      // procura no cache
        const buscaNaRede = fetch(pedido)         // dispara a busca na rede em paralelo
          .then(resposta => {                     // se a rede respondeu
            if (resposta.ok || resposta.type === 'opaque') { // resposta aproveitável?
              const copia = resposta.clone();     // clone para o cache
              caches.open(CACHE).then(cache => cache.put(pedido, copia)); // guarda a versão nova
            }
            return resposta;                      // devolve a resposta fresca
          })
          .catch(() => emCache);                  // sem rede: o que houver no cache resolve
        return emCache || buscaNaRede;            // tem cache? serve já. senão, espera a rede
      })
    );
    return;                                       // recurso tratado
  }

  // Demais origens (AdSense, etc.): passa direto, sem interceptar.
});

// Mensagem da página (ex.: pedido para pular espera em atualização futura).
self.addEventListener('message', (evento) => {    // TEAM_002: canal página → SW
  if (evento.data === 'pular-espera') self.skipWaiting(); // TEAM_002: ativa a versão nova na hora
});
