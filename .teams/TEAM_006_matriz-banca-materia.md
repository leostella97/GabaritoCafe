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
| (a preencher) | | |

## TODO(TEAM_006) — continuação
- Rodar `node scripts/deficit-matriz.js` e pegar a próxima banca da lista.
- Ao banco passar de ~2 MB: reavaliar split por arquivo de matéria
  (TODO herdado da TEAM_005). Atenção: os filtros facetados do simulado
  precisam de todas as questões em memória — split é só organização de
  arquivo, não lazy-load.

## Verificação
- `node scripts/validar-banco.js` deve sair 0/0 a cada commit.
- `node --check js/banco-questoes.js` antes de commitar.
