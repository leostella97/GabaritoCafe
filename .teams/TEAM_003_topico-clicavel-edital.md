# TEAM_003 — Tópico do edital clicável abre modal com explicação + aula

## Pedido
- "em 'O que o edital pede em cada matéria' clicar tópico abre modal com explicação e vídeo youtube"
- "não quero devin como contributor repositório" → commits desta equipe SEM trailer "Generated with Devin"/"Co-Authored-By" (preferência já registrada no commit 78d12b9).

## Antes
- Seção "O que o edital pede em cada matéria" (`EditalUI.blocoPrograma`): só o NOME da matéria era clicável (`.materia-nome` → `abrirModalMateria`). Os tópicos eram `<span class="chip">` inertes.
- Dentro do modal da matéria, `.topico-item` abria a explicação em sanfona (TEAM_001).

## O que foi feito
- `js/edital.js`:
  - `blocoPrograma`: `<span class="chip">` → `<button class="chip chip-topico" data-materia data-topico title>` (title reusa `ed_modal_dica`).
  - `iniciar()`: delegação de `.chip-topico` em `#edital-resultado`; delegação de `.link-todos-topicos` em `#modal-conteudo` (volta ao modal da matéria). `<button>` dispara click por Enter/Espaço nativamente — sem handler extra de teclado.
  - `detalheTopico` refactorado: `infoDoTopico(nome)` (match no catálogo) + `explicacaoTopico(info, nome)` (porque/como ou fallback + link YouTube) — SSOT compartilhado entre sanfona e modal direto.
  - Novo `abrirModalTopico(rotuloMateria, nomeTopico)`: modal com título 📌 tópico, linha da matéria, `.topico-explicacao` (explicação + link-video) e botão "todos os tópicos de {materia}" (classe `.ver-mais` reusada).
- `js/idioma.js`: +1 chave `ed_modal_todos` ×3 idiomas (265→266).
- `css/componentes.css`: `.chip-topico` (hover caramelo + lift), `.topico-explicacao` (régua caramelo, mesma linguagem do `.topico-detalhe`).
- `README.md`: linha do recurso "Análise inteligente" agora diz que cada tópico é clicável.

## Vídeo
- Link `.link-video` para **busca** do YouTube (matéria + tópico + "resumo") — mesmo padrão do simulado/correção. Embed de player exigiria IDs de vídeo por tópico ou API key; não há fonte de dados para isso (site estático). Se o usuário quiser player embutido, precisa indicar os vídeos.

## Verificação
- Teste funcional Node (vm + stubs de DOM, arquivo `_tmp_modal_topico.js`, deletado após uso — Regra 6): 16/16 ✅ — chip emitido com data-attrs, XSS escapado, explicação do catálogo, fallback honesto, sanfona intacta, chave nos 3 idiomas.
- `node --check` edital.js/idioma.js ✅ · `validar-idiomas.js` ✅ (248 usadas/266) · `validar-banco.js` 1074/0 ✅ · `testar-analise.js` 10/10 ✅.

## Observações / handoff
- `sw.js` cacheia os JS/CSS: bump do `CACHE` feito (v2 → v3).

---

## Rodada 2 — Tópico clicável em TODOS os lugares

### Pedido
- "também: sem clicar na matéria, clicando no tópico, abre modal com explicação e link para youtube pesquisa tópico" — estender o clique direto para onde mais houver tópico.

### O que mudou
- **"Por onde começar" (plano)**: os 3 nomes de tópico no texto "Comece por:" viraram `<button class="topico-texto" data-materia data-topico>` (estilo: texto com sublinhado pontilhado caramelo — mesmo affordance do nome de matéria, mas para tópico).
- **Modal da matéria**: `.topico-item` ganhou `data-materia`; o clique agora chama `abrirModalTopico` (mesma visão do chip) em vez da sanfona — comportamento unificado. O link "← Todos os tópicos de {matéria}" devolve a lista.
- **"Temas que caem"** (`conteudo.js`): `.topico-nome` virou `<button class="topico-nome topico-texto">`; delegação em `#lista-temas` antes do "Ver mais…".
- **Sanfona removida** (Regra 6): `alternarTopico`, `detalheTopico` e o CSS `.topico-detalhe`/`.topico-item.aberto` saíram — `abrirModalTopico` é a única visão de explicação.
- **Tema escuro**: `.topico-texto` e `.ver-mais` entraram na regra de clareamento (texto `--cafe` some no fundo escuro → `--caramelo-claro`).
- Delegação em `#edital-resultado` generalizada para `[data-topico]` (cobre chip e botão de texto).

### Verificação
- Teste funcional Node (`_tmp_topico_tudo.js`, deletado): 12/12 ✅ — chips, plano, modal da matéria, temas, fallback e remoção da sanfona.
- `validar-idiomas` ✅ · `validar-banco` 1074/0 ✅ · `testar-analise` ✅ · `node --check` ✅.
