# TEAM_006 — Matriz completa banca × matéria (10–15 questões por célula)

## Pedido
- "quero apenas que apareça meu nome, não quero devin como contribuinte"
- "gere mais questões entre 10 e 15 para cada matéria de cada banca"
- Escopo confirmado pelo usuário: **matriz completa** (todas as 28 bancas ×
  29 matérias, mínimo 10 por célula), com **commits separados**.

## Atribuição (pedido 1)
- Histórico já está limpo: todos os commits são de `leostella97` /
  Leonardo Stella de Oliveira (TEAM_005 já havia removido os trailers).
- Esta equipe segue a regra: **nenhum** trailer "Generated with Devin" /
  "Co-Authored-By" em nenhum commit. README credita só o usuário.

## Estratégia (pedido 2)
- Déficit total medido: **7.004 questões** para levar as 812 células a 10.
- Ferramenta nova: `scripts/deficit-matriz.js` — déficit por banca,
  detalhe por matéria (`node scripts/deficit-matriz.js <banca>`) e
  próximo id livre por prefixo. **Sempre rodar antes de escrever um lote**
  para não repetir ids (prefixos são globais, compartilhados entre bancas).
- Ordem de preenchimento: **menor déficit primeiro** — completa bancas
  mais rápido e dá marcos visíveis de progresso.
- Cada banca concluída = commit(s) próprios; docs (README + `sw.js`
  bump + este log) em commit separado por onda.

## Progresso
| Banca | Questões novas | Status |
| :---- | :------------- | :----- |
| ENEM (vestibular) | +144 (18 células) | ✅ commit `6bbb644` — todas as células ≥10 |
| Fuvest / Unicamp (vestibular) | +173 (15 células + fechamento de 6 parciais) | ✅ commit `9658673` — todas as células ≥10 |
| CESPE/Cebraspe | +192 (27 células, incl. 10 zeradas) | ✅ commit `1ddbc4a` — todas as células ≥10 |
| FCC | +191 (26 células, incl. 10 zeradas) | ✅ commit `65326c2` — todas as células ≥10 |
| FUNDATEC | +221 (29 células) | ✅ commit `faac03e` — todas as células ≥10 |
| IBFC | +223 (29 células, incl. 7 zeradas) | ✅ commit `9811478` (parcial +153) + commit final — todas as células ≥10 |
| Copeve/UFMG | +234 (29 células, incl. 3 zeradas) | ✅ commits parciais `9176f84`/`f91e398`/`d67ad29` + commit final — todas as células ≥10 |

## Notas de execução
- ENEM: 144 questões em 5 chunks; corrigidos 2 enunciados duplicados
  (r45/r51) antes do commit. Validador: 1523/0.
- Fuvest: déficit era 165 em 19 células; +173 porque algumas células já
  tinham parte coberta e o remanescente fechou Legislação (0→10), Ética
  (1→10), Ed. Física/Física (6→10), Fisiologia/Geografia (9→10).
  Corrigidos 2 duplicados (ct64→ct20, h47→h06) reescrevendo o enunciado.
  Validador: 1696/0.
- CESPE: déficit era 188; cobertura real medida em 27 células (10 zeradas
  de humanas/saúde). Corrigidos 3 duplicados (ad76→ad13, ar62→ar39,
  ec63→ec29). Validador: 1888/0.
- FCC: déficit era 191 em 26 células (10 zeradas: História, Literatura,
  Inglês, Espanhol, Artes, Ed. Física, Fisiologia, Filosofia, Sociologia,
  Química, Física). Corrigidos 8 enunciados duplicados (g66→t58,
  fs59→fs48, fl72→fl62, fl74→fl63, b68→b26, ec68→ec54, ec69→ec14,
  qm55→qm47). Validador: 2079/0. Push: `ed93e3b..1ddbc4a` enviado.
- FUNDATEC: déficit era 221 em 29 células. Corrigidos 3 enunciados
  duplicados (ef72→ef53, qm71→qm27, so70→so24) reescrevendo o enunciado.
  Validador: 2300/0.
- IBFC: déficit era 223 em 29 células (7 zeradas: Fisiologia, Física,
  História, Inglês, Literatura, Química, Sociologia). Corrigidos 5
  enunciados duplicados (r83→m74, ct85→ct04, d82→d75, v80→v59,
  b85→b29). Push parcial em `9811478` (+153) por pedido do usuário;
  +70 no commit final. Validador: 2523/0.
- Copeve/UFMG: déficit era 233 em 29 células (3 zeradas: Dir. Trabalho,
  Legislação, Matemática). Corrigidos 4 enunciados duplicados
  (m94→m66, ct96→ct17, k91→k81, ec85→ec54, so88→so24, so91→so62,
  b98→b29, qm85→qm27). Três pushes parciais por pedido do usuário
  (`9176f84` +33, `f91e398` +105, `d67ad29` +73); +23 no commit final.
  Validador: 2757/0.

## TODO(TEAM_006) — continuação
- Rodar `node scripts/deficit-matriz.js` e pegar a próxima banca da lista.
- Ao banco passar de ~2 MB: reavaliar split por arquivo de matéria
  (TODO herdado da TEAM_005). Atenção: os filtros facetados do simulado
  precisam de todas as questões em memória — split é só organização de
  arquivo, não lazy-load.

## Verificação
- `node scripts/validar-banco.js` deve sair 0/0 a cada commit.
- `node --check js/banco-questoes.js` antes de commitar.
