# TEAM_008 — Análise do edital por vaga

## Pedido
- "análise edital por vaga; nem todas as vagas do edital estão sendo
  mostradas, separe o que estudar por vaga"

## Interpretação
1. BUG: `AnaliseEdital.extrairCargos` deixava vagas de fora —
   janela de só 60 linhas após o primeiro cabeçalho, corte em itens
   numerados "1. Cargo" (confundidos com nova seção), linhas de cargo
   com "Nível médio" na mesma linha eram descartadas, cap de 12 cargos.
2. FEATURE: separar o conteúdo programático por cargo/vaga — editais
   reais repetem "CONTEÚDO PROGRAMÁTICO" por cargo (ou anexos por cargo).

## Baseline (antes de mexer)
- `node scripts/testar-analise.js` ✅ 10/10
- `npx jasmine` ✅ 25 specs
- `node scripts/validar-banco.js` ✅
- `node scripts/validar-idiomas.js` ❌ PRÉ-EXISTENTE: dicasRapidas
  pt=12 vs en/es=6; dicasImportantes pt 9-9-9-9 vs en/es 4-4-4-4
  (conteúdo não traduzido — dívida anterior, não desta equipe)

## Plano
- Reescrever `extrairCargos`: varrer TODAS as seções de cargos,
  corte só em cabeçalhos reais, limpeza do nome (nível/salário/vagas),
  cap 30, plano B com mesmo filtro.
- `blocosPrograma` + `programaDoTrecho` + `cargoDoBloco`: juntar todos
  os blocos de programa e atribuir cada um ao cargo mais próximo.
- `analise.programasPorCargo`: `[{cargo|null, materias:[{rotulo,topicos}]}]`.
- UI: chips de vaga no cartão "O que o edital pede" (Todas + cada cargo),
  chips de cargo clicáveis no cartão de cargos (rolam até o programa),
  plano de estudo e simulado respeitam a vaga ativa.
- Chaves i18n ×3 + `.chip-vaga` no CSS.

## O que foi feito

### analise-edital.js
- `extrairCargos` reescrito: varre a partir de TODO cabeçalho de vagas
  (DOS CARGOS, QUADRO DE VAGAS, CARGOS E REMUNERAÇÃO, "CARGO | VAGAS" de
  tabela), janela de 200 linhas, cap 12 → 30.
- Helpers novos: `ehCabecalhoDeCargos`, `ehOutraSecao` (só cabeçalho de
  seção real encerra — item "1. Agente" não engana mais), `linhaDeCargo`
  (requisito ≠ cargo) e `limparNomeCargo` (tira R$, "N vagas", "— Nível
  X", "| 12", "(PCD)").
- PALAVRAS_CARGO ampliada (+35 palavras: tecnica, vigilante, diretor,
  estagiario, veterinario, pedagogo...).
- Programa refatorado em blocos: `blocosPrograma` acha TODOS os
  cabeçalhos de conteúdo programático; `programaDoTrecho` separa
  matérias+tópicos de um trecho; `extrairPrograma` funde tudo
  (comportamento antigo mantido para materias.topicos/confiança).
- `extrairProgramasPorCargo` → `analise.programasPorCargo`:
  `[{cargo|null, materias:[{rotulo,topicos}]}]` — `cargoDoBloco` atribui
  cada bloco ao cargo da linha do título / "CARGO DE X" perto / nome
  solto bem perto; "comum a todos os cargos" vira grupo `cargo=null`.
- `separarTopicos`: cap 12 → 20 tópicos por matéria.

### edital.js
- `cargoAtivo` (null = todas); reseta a cada análise nova.
- Cartão de cargos: chips viram botões `.chip-vaga-link` (clique =
  seleciona e rola até o programa).
- Cartão "O que o edital pede": `#bloco-programa-conteudo` com seletor
  "Todas as vagas + cada cargo" (`programaDaVaga`); nota "específico
  desta vaga" vs "segue o programa comum".
- `materiasDaVaga`: próprio → comum → fundido; enriquece com temBanco.
- Plano (`planoDaVaga`) e botão de simulado respeitam a vaga ativa.
- `selecionarVaga` re-renderiza só os dois blocos + estado dos chips;
  `ligarVerMais` virou método reutilizável.

### Outros
- `idioma.js`: +5 chaves ×3 (ed_vaga_sel/todas/comum/especifica,
  ed_cargos_dica). CSS: `.chip-vaga` + `.ativa` em componentes.css.
- `scripts/testar-vagas.js` (novo): 21 checagens da lógica de vaga.
- `testar-analise.js`: edital multi-vaga (7 cargos, 3 blocos de
  programa) + 2º edital de professores (14 cargos em tabela, anexo por
  cargo) — 21 checagens.
- `sw.js` v25 → v26. README atualizado.

## Verificação
- `node scripts/testar-analise.js` ✅ 21/21 (dois editais)
- `node scripts/testar-vagas.js` ✅ 21/21
- `node scripts/testar-modal.js` ✅ | `testar-impressao.js` ✅
- `npx jasmine` ✅ 25 specs | `validar-banco` ✅
- `validar-idiomas` ❌ só as 3 falhas PRÉ-EXISTENTES (dicasRapidas/
  dicasImportantes sem tradução en/es — dívida anterior)
- Bordas conferidas: edital sem programa/cargos não quebra;
  "Professor de Ensino Religioso" não corta no "Ensino".

## Handoff
- `programasPorCargo` é fonte única: UI lê grupos; matérias sem bloco
  caem no comum (marca `comum=true`).
- Re-render é cirúrgico (`selecionarVaga`) — o modal compartilhado e o
  comparador de editais não são tocados.
- Tópicos por matéria subiram para 20 — se achar poluído, ajustar em
  `separarTopicos`.

## TODO(TEAM_008)
- Edital verticalizado continua com o programa fundido (todas as matérias);
  avaliar filtro por vaga se o usuário pedir.
- Dívida pré-existente: traduzir dicasRapidas/dicasImportantes (en/es)
  — `validar-idiomas` falha desde antes.
