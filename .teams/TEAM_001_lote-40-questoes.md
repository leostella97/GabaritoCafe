# TEAM_001 — Lote de 40 questões novas (128 → 168)

## Contexto
- Usuário pediu "faça mais questões" seguindo o padrão dos commits anteriores (lotes de 40).
- Primeiro arquivo de equipe do projeto: não existia `.teams/` antes.

## O que foi feito
- Adicionadas 40 questões em `js/banco-questoes.js`, antes do `];` final, seguindo o formato documentado no cabeçalho do arquivo e no README (seção "Como adicionar questões novas").
- Nenhum tema repetido: conferida a lista completa de `tema:` antes de escrever.
- Distribuição do lote (reforço das matérias menores):
  - História do Brasil: h07–h12 (6 → 12)
  - Geografia: g07–g12 (6 → 12)
  - Língua Portuguesa: p26–p29 (25 → 29)
  - Matemática: m25–m28 (24 → 28)
  - Raciocínio Lógico: r19–r22 (18 → 22)
  - Informática: i17–i20 (16 → 20)
  - Direito Constitucional: c13–c16 (12 → 16)
  - Direito Administrativo: a12–a15 (11 → 15)
  - Atualidades: t11–t14 (10 → 14)
- README.md atualizado nos dois lugares que citam o total (árvore de arquivos e seção de validação).

## Verificação
- `node scripts/validar-banco.js` → 168 questões, 0 problemas, 9 matérias.

## Observações / handoff
- Questão r20 (associações lógicas) precisou de uma restrição extra ("Bia não bebe suco") para ter resposta única — revisada antes do commit.
- Campos `passos` usados só nas questões de cálculo (matemática/lógica), seguindo a convenção.
- Deploy: o site publica via GitHub Pages na branch `main` — basta dar push para as questões irem ao ar.
