# TEAM_004 — "Temas que caem": cartão clicável + modal livre do edital

## Pedido
- "quero apenas que apareça meu nome, não quero devin como contribuinte"
- "'temas que caem': 1. clicar nos tópicos abre modal com explicação e vídeo youtube; 2. clicar no box abre modal com matéria e tópicos, clicando tópico abre modal com explicação e vídeo youtube"

## Decisões do usuário (perguntas respondidas)
- Reescrever os 6 commits "Gabarito Cafe" → `leostella97 <leonstella97@gmail.com>` + force-push: **APROVADO**.
- Vídeo: **manter botão de busca do YouTube** (embed de busca morreu em 2020 — 4xx; player real exigiria IDs curados por tópico).

## Antes
- "Temas que caem": tópicos já abriam o modal (TEAM_003), mas a fiação do modal
  (✕, Esc, véu, `.topico-item`, `.link-todos-topicos`) só existia depois de
  visitar "Meu edital" (`EditalUI.iniciar` era chamado só nessa rota) — fora
  dela o modal abria travado, sem fechar e sem navegar. **Bug real.**
- Cartão de matéria: inerte, nada acontecia ao clicar no box.

## O que foi feito
- `js/edital.js`: extraído `iniciarModal()` (guarda `_modalLigado`) com ✕/véu/Esc
  e a delegação interna (`.topico-item`, `.link-todos-topicos`); `iniciar()` o
  chama; `abrirModalMateria` e `abrirModalTopico` também chamam → o modal abre e
  fecha em qualquer tela (corrige o travamento fora do edital).
- `js/conteudo.js` (`renderizarTemas`): cartão virou `.tema-cartao` com
  `data-materia` + `role="button"` + `tabindex="0"` + `title` (chave nova).
  Delegação em `#lista-temas`: `[data-topico]` → modal do tópico; `.tema-ver-mais`
  → expande; resto do `.tema-cartao` → `abrirModalMateria`. Keydown Enter/Espaço
  no cartão focado abre o modal (guarda `e.target === cartao` p/ não roubar o
  clique dos botões internos).
- `css/componentes.css`: `.tema-cartao` (mãozinha, hover caramelo + lift) e
  `:focus-visible` com contorno caramelo.
- `js/idioma.js`: +1 chave `temas_cartao` ×3 idiomas (266→267).
- `sw.js`: bump do `CACHE` v3 → v4.
- `README.md`: linha "Temas que mais caem" documenta cartão e tópico clicáveis.

## Verificação
- Teste funcional Node (`_tmp_temas_modal.js`, vm + DOM stub, deletado — Regra 6):
  30/30 ✅ — render do cartão, ordem da delegação (tópico > ver-mais > cartão),
  teclado sem duplicar, modal autônomo sem visitar o edital, Esc fecha, i18n ×3.
- `node --check` edital/conteudo/idioma ✅ · `validar-idiomas` ✅ ·
  `validar-banco` 1074/0 ✅ · `testar-analise` ✅.

## Git
- Reescrita dos 6 commits `Gabarito Cafe <gabarito.cafe@localhost>` →
  `leostella97 <leonstella97@gmail.com>` + force-push (aprovado pelo usuário).
