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
| FCC | +191 (26 células, incl. 10 zeradas) | ✅ commit pendente — todas as células ≥10 |

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

## TODO(TEAM_006) — continuação
- Rodar `node scripts/deficit-matriz.js` e pegar a próxima banca da lista.
- Ao banco passar de ~2 MB: reavaliar split por arquivo de matéria
  (TODO herdado da TEAM_005). Atenção: os filtros facetados do simulado
  precisam de todas as questões em memória — split é só organização de
  arquivo, não lazy-load.

## Verificação
- `node scripts/validar-banco.js` deve sair 0/0 a cada commit.
- `node --check js/banco-questoes.js` antes de commitar.
