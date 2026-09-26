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

---

## Tarefa 3 — Nível de ensino + 60 questões por cargo (208 → 268)

### Pedido
- Separar por **nível de ensino** (médio/superior), além da dificuldade.
- +60 questões focadas em cargos: agente administrativo, PF, PRF, perito criminal, analista/técnico de tribunais, consultor legislativo, INSS técnico, escriturário, técnico bancário, técnico judiciário, Petrobras operacional, Bacen, PM, polícia penal, GCM; e vestibulares (Univesp, Fuvest, FATEC, ENEM, Vunesp, Comvest, Coperve, Copeve, ETEC).
- README: informar desenvolvimento com IA (SWE-2).

### O que foi feito
- Novo campo `ensino` ('medio' | 'superior') em TODAS as questões via script (deletado após uso — Regra 6). Regra: conteúdo universal/de nível médio e vestibulares → 'medio'; jurídico aprofundado típico de cargos superiores (c07,c10,c12,c14,c16,c18,c20 e a maior parte de administrativo) → 'superior'. Observação: a última questão do array (g17) não termina com `},` — o script falhou nela e o campo foi inserido à mão.
- Filtro de nível de ensino no simulado: `MotorSimulado.montar`/`contarDisponiveis` aceitam `ensinos: []`; novo `ensinosDoBanco()`; UI ganha chips Nível médio/superior com contagem; a questão exibe chip 🎓 durante a prova.
- i18n: chaves `sim_ensino_l`, `ensino_medio`, `ensino_superior` em pt/en/es via helper `textoEnsino()` com literais (mesmo motivo do `textoNivel`).
- 3 matérias NOVAS: Direito Penal (d01–d12, carreiras policiais), Criminologia (k01–k04, perito), Direito Previdenciário (v01–v05, INSS técnico). Também adicionadas ao CATALOGO do `analise-edital.js` (22 → 24) para casar com editais desses cargos.
- +60 questões: d01-d12, k01-k04, v01-v05, p35-p40, m34-m39 (financeira para bancos), r28-r31, i25-i28, c21-c26, a20-a23, t19-t21, h17-h19, g18-g20.
- `validar-banco.js` exige `ensino` válido e imprime a distribuição.
- README: nota de IA (SWE-2), 268 questões, campo `ensino` no template, filtro de nível na tabela de recursos, catálogo 24 matérias.

### Verificação
- `node scripts/validar-banco.js` → 268 questões, 0 problemas | facil=77 · medio=166 · dificil=25 | ensino medio=233 · superior=35 | 12 matérias.
- `node scripts/validar-idiomas.js` → ✅ completo nos 3 idiomas (218 chaves).
- `node --check` nos arquivos alterados → sintaxe ok.
- Bug corrigido no lote: string com aspas simples internas em p35 (erro de sintaxe) — reescrita sem aspas.

### Distribuição final por matéria
Português 40 · Matemática 39 · Raciocínio 31 · Informática 28 · Constitucional 26 · Administrativo 23 · Penal 12 · Atualidades 21 · História 19 · Geografia 20 · Previdenciário 5 · Criminologia 4

---

## Tarefa 4 — Rótulo "cargo/vaga" + melhorias na análise do edital

### Pedido
- Trocar "Qual cargo você vai disputar?" → "Qual cargo/vaga você vai disputar?" (pt/en/es + index.html).
- "Melhore a análise do edital."

### O que foi feito (analise-edital.js)
- `CARGOS_CONHECIDOS`: 17 carreiras reconhecidas pelo nome exato (agente administrativo, PF, PRF, perito criminal/oficial, analista e técnico judiciário/tribunal, consultor legislativo, INSS técnico, escriturário, técnico bancário, técnico de operações, técnico do Bacen, soldado, polícia penal/agente penitenciário, GCM) — funciona mesmo sem seção de vagas.
- `PALAVRAS_CARGO` ampliada (soldado, escriturário, consultor, policial, penitenciário, bombeiro, monitor, legislativo, operador, bancário).
- `REQUISITOS` + `extrairRequisitos`: chips de requisitos típicos (CNH, título de eleitor, quitação militar, antecedentes, toxicológico, exame médico/psicológico, investigação social, TAF, altura mínima, curso de formação).
- Datas: novo campo `taf` (teste físico); correção de bug — a linha da própria data agora manda no papel (antes a linha anterior contaminava: "prova" virava "inscrição" e a prova sumia).
- Números: `cargaHoraria` (horas semanais) e `cadastroReserva` (booleano).
- Matérias: `pesoDaMateria` — detecta "Matéria: N questões" escolhendo a contagem MAIS PERTO do nome na linha (várias matérias por linha OK).
- Escolaridade: fallback para "médio completo", "ensino médio", "superior completo", "graduação", "diploma".
- `calcularConfianca`: novos sinais (escolaridade +4, requisitos +3, taf +2, pesos +3, horas/reserva +2).
- Dedup de cargos por forma normalizada (evita "Soldado" + "SOLDADO PM 2ª CLASSE" e acento/sem acento); corte de vagas aceita "2000 vagas" (era só até 999).

### Integração edital → simulado
- `EditalUI.ensinosDoEdital`: se o edital exige UM único nível, o botão "gerar simulado" já marca o chip de nível de ensino (Médio/Fundamental→medio, Superior→superior); `SimuladoUI.abrir` aceita `ensinos` e pré-marca os chips.
- edital.js: chips de requisitos, linha do TAF, carga horária e cadastro reserva, peso "(×N)" nos chips de matéria.
- i18n: `ed_data_taf`, `ed_num_horas`, `ed_semana`, `ed_num_cr`, `ed_cr_sim`, `ed_requisitos_t` em pt/en/es.

### Verificação
- Teste funcional com edital sintético policial (PM/PRF): cargos ✓, inscrições/prova/TAF/resultado ✓, escolaridade Médio ✓, 7 requisitos ✓, pesos por matéria corretos ✓, confiança 100. Tribunais (superior): 93. Vestibular Univesp: 48 com matérias sem banco.
- `validar-idiomas.js` ✅ · `node --check` nos 4 arquivos ✅

---

## Tarefa 5 — Reforço de Criminologia (268 → 276)

### Pedido
- "mais questões de criminologia"

### O que foi feito
- +8 questões de Criminologia (k05–k12), todas `ensino: 'superior'` — público: perito criminal e carreiras policiais.
- Temas: escolas criminológicas (Clássica×Positivista), Lombroso/criminoso nato, teoria do etiquetamento (Becker), anomia (Durkheim/Merton), indício×vestígio×prova, sinais cadavéricos (lividez/rigidez/algor mortis), quesitos e quesitação, balística forense (estrias).
- README: 268 → 276 nos dois pontos de contagem.

### Verificação
- `validar-banco.js` → 276 questões, 0 problemas | facil=77 · medio=172 · dificil=27 | ensino medio=233 · superior=43.
- Criminologia: 4 → 12 questões.
- `node --check` no banco ✅
