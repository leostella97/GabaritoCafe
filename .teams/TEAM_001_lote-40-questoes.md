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

---

## Tarefa 2 — Dificuldade + mais questões (168 → 208)

### Descoberta
- **Bug encontrado:** as 20 questões do bloco "NOVAS QUESTÕES ADICIONADAS" (p11-p17, m11-m16, r09-r12, i09-i11) eram **cópias exatas** de p02-p08, m01-m06, r01-r04, i01/i02/i05 — enunciados e alternativas idênticos. Num simulado, a mesma questão podia sair duplicada.
- **Correção:** reescritas as 20 questões com conteúdo inédito, MANTENDO os ids (o histórico de simulados salva ids no localStorage — remover quebraria o "refazer erradas").

### O que foi feito
- Novo campo `nivel` ('facil' | 'medio' | 'dificil') em TODAS as 208 questões, inserido após `tema` por script temporário (classificação manual questão a questão; script deletado após o uso — Regra 6).
- Filtro de dificuldade no simulado: `MotorSimulado.montar` e `contarDisponiveis` aceitam `niveis: []`; UI ganha chips fácil/médio/difícil com contagem; a questão exibe chip colorido (verde/caramelo/vermelho) durante a prova.
- i18n: chaves `sim_nivel_l`, `nivel_facil`, `nivel_medio`, `nivel_dificil` em pt/en/es. ATENÇÃO: o validador `scripts/validar-idiomas.js` só enxerga chamadas literais `T('chave')` — por isso o helper `SimuladoUI.textoNivel()` usa literais explícitos em vez de `T('nivel_' + x)`.
- `validar-banco.js` agora exige `nivel` válido, detecta **enunciados duplicados** e imprime a distribuição por nível.
- +40 questões novas (p30-p34, m29-m33, r23-r27, i21-i24, c17-c20, a16-a19, t15-t18, h13-h16, g13-g17).
- Distribuição final: facil=68 · medio=124 · dificil=16.

### Verificação
- `node scripts/validar-banco.js` → 208 questões, 0 problemas, 0 duplicatas.
- `node scripts/validar-idiomas.js` → ✅ completo nos 3 idiomas.
- Teste funcional do motor com `niveis` → filtros combinados ok.
- `node --check` nos 4 arquivos alterados → sintaxe ok.
- README atualizado (208, filtro de dificuldade, campo `nivel` no template).
