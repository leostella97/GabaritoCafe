# TEAM_002 — Instalação PWA (manifest + service worker + botão "Instalar app")

## Contexto
- Usuário pediu: "site github GabaritoCafe que estavamos mexendo; adicione instalação PWA".
- README já listava "PWA (instalar no celular e usar offline)" nas ideias para o futuro — item sendo entregue agora.
- Site publicado via GitHub Pages na subpasta `/GabaritoCafe/` do repositório `leostella97/GabaritoCafe`
  → **todos os caminhos do PWA são relativos** (`./`, `sw.js`, `assets/...`) para funcionar na subpasta E local.

## Arquivos novos
- `manifest.webmanifest` — nome, cores do tema café, display `standalone`, `id`/`start_url`/`scope` = `./`, ícones PNG.
- `sw.js` — service worker: precache de todos os arquivos locais (HTML, CSS, JS, SVG, PNG, manifest),
  navegação em *network-first* com fallback ao cache, arquivos locais e CDNs conhecidos
  (Google Fonts + PDF.js do cdnjs) em *stale-while-revalidate*. AdSense e demais origens passam direto.
- `js/pwa.js` — registra o SW, captura `beforeinstallprompt`, mostra/esconde os botões `.btn-instalar`,
  trata `appinstalled` (torrada de sucesso) e iOS Safari (sem prompt → torrada com instrução "Adicionar à Tela de Início").
- `assets/icone-192.png`, `icone-512.png` — ícones "any" (fundo transparente).
- `assets/icone-512-mascara.png` — ícone maskable (fundo café #6f4e37, logo a 80% na zona segura).
- `assets/icone-apple.png` — apple-touch-icon 180×180 (fundo creme opaco; iOS não usa o manifest).

## Arquivos alterados
- `index.html` — meta `theme-color`, link do manifest, meta/ícones Apple, 2 botões `.btn-instalar`
  (cartão de login e rodapé da barra lateral, ambos começam `.oculto`), `<script src="js/pwa.js">`.
- `js/idioma.js` — chaves `pwa_instalar`, `pwa_ios`, `toast_instalado` nos 3 idiomas.
- `css/componentes.css` — `.btn-instalar { width:100% }` para os botões seguirem o estilo dos vizinhos.
- `README.md` — PWA saiu de "ideias para o futuro" para funcionalidade + arquivos novos na árvore.

## Geração dos ícones
- PNGs rasterizados a partir de `assets/icone.svg` com `sharp` (instalado em diretório temporário
  fora do repo, script `gerar.js` descartado após o uso — Regra 6). Projeto continua sem package.json.

## Verificação
- `node scripts/validar-idiomas.js` → completo nos 3 idiomas.
- `node --check` em `sw.js` e `js/pwa.js` → sintaxe ok.
- Ícones conferidos visualmente (xícara centralizada na zona segura do maskable).

---

## Tarefa 2 — Tela de Revisão + lembretes "lembrar em"

### Pedido
- "além de gerar simulado inclua revisão tendo as opções de nova revisão que gera simulado com as perguntas que errou e detalhes que mostra em detalhes com explicações e vídeo o que precisa melhorar, junto com os botões adicione checkbox múltipla escolha 'lembrar em [] 3 dias [] 5 dias [] 7 dias [] 30 dias' passado opção no site relembra usuário de fazer revisão; retire do readme 'nenhuma propaganda'"

### O que foi feito
- **Tela nova "🔁 Revisão"** (`js/revisao.js`): menu + `#tela-revisao` + entrada em `App.TELAS`/`irPara`/`redesenharTelaAtual`.
- `RevisaoUI.pendentes()`: percorre `gc_resultados_<id>` em ordem — questão fica pendente se a **última** vez que apareceu foi erro. Resultados novos trazem `idsPerguntas` (ids tentados) → quem foi acertada depois sai da fila. Questão exibida vem do `BancoQuestoes` vivo (fallback: foto salva no histórico).
- **Nova revisão**: monta jogo com até 50 pendentes (piores primeiro) via `SimuladoUI.montarJogoComIds(ids)` (extraído de `refazerErradas`, que agora delega). Limpa lembretes vencidos ao começar.
- **Detalhes**: acordeões `.questao-revisao` (mesmo CSS do resultado) com matéria·tema, selo "errou N×", gabarito, enunciado, explicação, passos, post-it e link YouTube.
- **Lembrar em** (3/5/7/30 dias): checkboxes `.lembrete-chip` persistem em `gc_lembretes_<id>` (`{dias, revisarEm}`); checkbox reflete lembrete existente (desmarcar cancela).
- **Aviso**: `avisarVencidos()` roda em `App.entrarNoApp` — torrada + sino 🔔 (`.item-menu.aviso::after`) quando há lembrete vencido com pendências. Sem pendências, vencidos são limpos.
- `index.html`: item de menu `data-tela="revisao"`, `<section id="tela-revisao">`, `js/revisao.js` antes de `app.js`. `sw.js`: revisao.js no precache. Resultado do simulado ganhou botão fantasma "🔁 Revisão" (`sim_ir_revisao`).
- i18n: +21 chaves ×3 (nav/tela/rev_*). `simulado.js` salva `idsPerguntas` no resultado.
- README: usuário removeu "Nenhuma propaganda" (AdSense); corrigidos 2 emojis corrompidos na tabela; "Revisão espaçada" marcada como feita; `revisao.js` na árvore.

### Verificação
- Teste em Node (stubs): pendentes = só q2 após q1 corrigida ✅; lembretes agenda/vence/cancela ✅.
- `node --check` nos alterados ✅ · `validar-idiomas.js` ✅ 263×3 · `validar-banco.js` 1074/0 ✅.

## Observações / handoff
- O SW só passa a valer depois do primeiro carregamento online (comportamento padrão de PWA).
- Atualizações de arquivos propagam via stale-while-revalidate: primeiro acesso serve o cache,
  o segundo já pega a versão nova. Se mudar a lista de arquivos, subir a versão do cache em `sw.js`
  (`CACHE` constante) — hoje `gabarito-cafe-v1`.
- iOS: Apple não dispara `beforeinstallprompt`; o botão mostra instrução manual via torrada.
- Chrome exige HTTPS + manifest + SW com handler `fetch` → todos os requisitos atendidos no Pages.
