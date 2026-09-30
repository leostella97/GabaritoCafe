# TEAM_007 — Exportar PDF formatado (simulado + revisão)

## Pedido
- "simulados e revisões, possibilidade de exportar pdf formatado baseado na
  aparencia do projeto com explicação do que foi visto e link para youtube
  sobre o tópico e qr code do link youtube ao lado do link"

## Interpretação
- Botão "📄 Exportar PDF" na **tela de resultado do simulado** e na
  **tela de Revisão**.
- O documento reproduz a identidade do app (paleta café, Fraunces/Caveat/
  Nunito, post-its, chips) e traz, por questão: enunciado, alternativas
  marcadas (✔ gabarito / ✖ resposta do usuário), explicação, passo a passo,
  pegadinha e a **linha "Aula no YouTube" com o link escrito + QR code ao
  lado** (apontar a câmera abre a mesma busca do app).

## Decisões técnicas
- **PDF via folha de impressão** (`window.print()` + `@media print`): a
  folha é um `<div id="area-impressao">` preenchido na hora com HTML
  próprio (`Impressao`), estilizado por `css/impressao.css` com a paleta
  café **em valores fixos** (imune ao tema escuro). "Salvar como PDF" no
  diálogo de impressão gera o arquivo — zero dependências pesadas, texto
  selecionável e links clicáveis no PDF. Mantém o app 100% offline.
- **QR local**: `js/vendor/qrcode.min.js` (qrcode-generator 1.4.4,
  Kazuhiko Arase, MIT) — vendored para não depender de rede nem vazar
  dados para API externa. Gera GIF data URL (~5 KB/QR) via
  `createDataURL(6, 2)`.
- As alternativas marcadas usam `resposta` do usuário quando existe
  (simulado) ou a última marca salva na foto do histórico (revisão).

## Arquivos
- `css/impressao.css` (novo) — estilos da folha A4 + `@media print`.
- `js/impressao.js` (novo) — monta a folha (cabeçalho, resumo, questões,
  rodapé) e dispara a impressão.
- `js/vendor/qrcode.min.js` (novo, MIT) — gerador de QR local.
- `index.html` — link do CSS, `#area-impressao`, 2 scripts.
- `js/simulado.js` — botão na fileira de ações do resultado.
- `js/revisao.js` — botão no cartão principal + `resposta` na pendente.
- `js/idioma.js` — +14 chaves ×3 idiomas.
- `sw.js` — bump v14 → v15 + 3 arquivos no precache.
- `README.md` — documenta a exportação.

## Verificação
- `node --check` ✅ impressao.js, simulado.js, revisao.js, idioma.js, sw.js
- `node scripts/validar-idiomas.js` ✅ 292 chaves ×3 (277 → 292, +15 chaves pdf_*)
- `node scripts/validar-banco.js` ✅ 12569/0 (banco intocado)
- `node scripts/testar-analise.js` ✅ 10/10
- `node scripts/testar-impressao.js` ✅ 18/18 (novo script de dev):
  print() chamado, folha com cabeçalho/logo/resumo, 1 gabarito + marca por
  questão, QR GIF ao lado do link do YouTube, revisão marca última resposta,
  questão mínima sem passos/dica/vídeo não quebra.
- Preview visual: folha renderizada no navegador via servidor local
  (arquivo temporário `_preview-folha.html`, removido após a conferência).
- Detalhe de implementação: `pendentes()` passa a devolver `resposta`
  (índice mapeado pelo texto da alternativa, pois a foto do histórico
  tinha ordem embaralhada) — usado para o ✖ da folha de revisão.

## Como usar
- Resultado do simulado → botão **"📄 Exportar PDF"** (também aparece no
  resultado de "refazer erradas", com título de revisão).
- Tela Revisão → botão **"📄 Exportar PDF"** no cartão principal.
- Na janela de impressão, escolher "Salvar como PDF". O título da aba vira
  o nome sugerido do arquivo (`Gabarito-Cafe-simulado-AAAA-MM-DD`).

## Redesenho visual (pedido do usuário)
"Melhore a aparência do PDF, mais criativo, inspirado em materiais de
designers/criadores, usando a paleta do sistema."
- Cabeçalho virou faixa de marca escura (gradiente café do login) com
  bolhas de caramelo, medalhão de logo, eyebrow em caixa alta espaçada
  (`pdf_eyebrow`), título Fraunces grande e slogan manuscrito.
- Resumo virou grade de tiles KPI (número Fraunces grande + rótulo
  uppercase espaçado + filete caramelo no topo); legenda vira um tile
  largo (`kpi-legenda`).
- Cada questão ganhou número editorial "QUESTÃO / 01" (Fraunces caramelo),
  topo com filete pontilhado de recorte e chips em caixa alta.
- Linha da aula virou "card de link" rosado tracejado (cara de
  link-in-bio) com QR emoldurado em café + legenda em etiqueta.
- Post-it da dica levemente rotacionado (efeito feito à mão).
- Rodapé com assinatura manuscrita da marca.
- Novas chaves: `pdf_eyebrow`, `pdf_kpi_pendentes`; `pdf_questao` passou
  a ser só o rótulo (número sai em `.q-id-n` separado, com `padStart`).

## Cartão Fidelidade de Estudos (pedido do usuário)
"Nos cartões junto do emoji do café coloque o que foi feito
(simulado, revisão), a data, o horário e a porcentagem de acertos."
- IMPORTANTE: após o rebase sobre o PR remoto das 9 features,
  descobrimos que o `js/fidelidade.js` JÁ existia (cartela de 10
  carimbos + conquistas). Descartamos nossa implementação duplicada
  (método próprio, chaves `fid_*`, CSS `.fid-*` de cartão) e
  enriquecemos o `FidelidadeUI.renderizarCartela()` existente.
- Cada casa carimbada agora mostra, junto do ☕: tipo (📝 Simulado /
  🔁 Revisão via `refazendo` do resultado), data dd/mm, horário hh:mm
  e selo de % (verde ≥70, caramelo ≥50, vermelho <50).
- Detalhes derivados dos últimos N `gc_resultados_` (1 carimbo = 1
  resultado → sincronia garantida); carimbo sem dado cai no ☕ simples.
- CSS novo em `css/telas.css` (`.fid-grade` + `.carimbo*`), usa
  variáveis do tema → adapta ao modo escuro.
- Corrigido o wrapper do remoto que usava variáveis inexistentes
  (`--caramelo-suave`, `--linha`, `--texto-suave`) → trocadas por
  `--creme-escuro` e classes reais.
- sw.js: adicionados ao precache os 7 JS novos do remoto
  (fidelidade, pomodoro, cadernos, edital-vertical, comparador-edital,
  backup, coffee-wrap) — estavam fora do cache offline.
- Testado em Node: 7 carimbos com detalhe + fallback sem histórico.

## Fix: Coffee Wrap não fechava (pedido do usuário)
"Ao abrir coffee wrap não fecha popup."
- CAUSA: o fechamento do modal compartilhado `#modal-materia` (✕, clique no
  véu, Esc) só era ligado em `EditalUI.iniciarModal()` — chamado ao visitar
  a tela do edital ou pelos modais de matéria/banca. `CoffeeWrapUI
  .abrirModalWrap()` abre o modal direto sem garantir a fiação → se o
  usuário não passasse pelo edital antes, o ✕/véu/Esc não tinham listeners.
  Mesmo bug valia para o relatório da Fidelidade e o modal de Cadernos.
- FIX ARQUITETURAL (em vez de um shim por chamador): `App.iniciar()` agora
  chama `EditalUI.iniciarModal()` UMA vez no boot — `#modal-materia` é
  estático no HTML e o método é idempotente (`_modalLigado`). Qualquer
  feature que abra o modal (atual ou futura) fecha sempre.
- BÔNUS: o remoto usava 4 variáveis CSS inexistentes em 13 pontos
  (`--caramelo-suave`, `--linha`, `--texto-suave`, `--fundo-cartao` —
  coffee-wrap, fidelidade, pomodoro, backup, cadernos, edital-vertical,
  simulado). Em vez de corrigir 13 call sites, definimos os nomes como
  ALIASES das cores reais em `css/base.css` (`--linha: var(--borda)` etc.)
  + um valor real para `--caramelo-suave` — assim os fundos/bordas das
  telas novas finalmente renderizam e o tema escuro adapta sozinho via
  var(). (O ajuste anterior do fidelidade continua válido.)
- `sw.js` bump v15 → v16 (sem o bump, o SW antigo serviria app.js velho).
- Smoke em Node: 2 chamadas a `iniciarModal()` registram só 1 fiação
  (modal-fechar.click, modal-materia.click, document.keydown,
  modal-conteudo.click) — idempotente, sem duplicar.

## Fix v2: endurecimento (usuário: "ainda não está fechando")
- O fix do boot estava correto (provado em simulação de DOM real), mas o
  SW stale-while-revalidate podia servir `app.js` velho por mais tempo.
- DEFESA EM PROFUNDIDADE: cada abridor do modal agora se AUTO-FIA antes
  de abrir — `EditalUI.iniciarModal()` (idempotente) dentro de
  `CoffeeWrapUI.abrirModalWrap`, `FidelidadeUI.exibirRelatorioEspecial`
  e `CadernosUI.abrirModalSalvar`. Mesmo padrão já usado por
  `abrirModalMateria`/`abrirModalTopico`/`renderizarBancas`. O fix passa
  a funcionar com QUALQUER combinação de arquivos novos/velhos no cache.
- `sw.js` bump v16 → v17.
- `scripts/testar-modal.js` (novo, permanente): mini-DOM fiel +
  scripts reais; reproduz o bug, valida ✕/véu/Esc/inside-click e a
  idempotência — 7/7 verde. Regressão comportamental coberta.

## TODO(TEAM_007)
- Ideia futura: checkbox "só as erradas" na exportação do simulado.
