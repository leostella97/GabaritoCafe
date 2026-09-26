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

---

## Tarefa 6 — Grade de vestibulares + piso de 16 por matéria (276 → 491)

### Pedido
- "inclua questões de: literatura, inglês, espanhol, artes, educação física, fisiologia, geografia, filosofia, sociologia, biologia, economia, química, física" + "mais de 15 questões por matéria"

### O que foi feito
- +215 questões em **dois blocos**, completando a grade de vestibulares (ENEM, Fuvest, Unicamp/Comvest, Univesp, Vunesp, Coperve, FATEC/ETEC):
  - **12 matérias novas** (l, e, s, ar, ef, fs, fl, so, b, ec, qm, f): Literatura, Inglês, Espanhol, Artes, Educação Física, Fisiologia, Filosofia, Sociologia, Biologia, Economia, Química e Física — 16 cada.
  - **Reforço das existentes para o piso de 16**: Geografia +4 (g21–g24), Direito Penal +4 (d13–d16), Criminologia +4 (k13–k16), Direito Previdenciário +11 (v06–v16).
- Conteúdo vestibular: escolas literárias + autores (Romantismo→Clarice), falsos cognatos e gramática de inglês/espanhol, vanguardas e arte brasileira (Semana 22, Antropofagia, Aleijadinho, Oiticica), aeróbio×anaeróbio + OMS + regras de esportes, sistemas do corpo (sinapse→pele), clássicos da filosofia (Sócrates→bioética), Marx/Durkheim/Weber + temas atuais, célula→biotecnologia, macro básica (Selic, PIB, Gini) e física/química do ensino médio.
- `g23` virou União Europeia após o validador flagrar duplicata com `t13` (Mercosul).

### Integrações
- `analise-edital.js` catálogo 24 → **32 matérias** (espanhol, literatura, artes, ed. física, fisiologia, filosofia, sociologia, economia) — editais de vestibular agora casam com as novas questões.
- `dados-temas.js` vestibular 7 → **16 entradas**: plano de estudo ganhou resumo + 3 tópicos por matéria nova (frequência, porquê e como estudar).
- Todas as novas questões com `ensino: 'medio'` (conteúdo de ensino médio/vestibular); penal/criminologia/previdenciário superiores mantiveram `superior` onde aplicável.
- README: 276 → 491; catálogo 24 → 32.

### Verificação
- `validar-banco.js` → **491 questões, 0 problemas** | 24 matérias | facil=122 · medio=323 · dificil=46 | ensino medio=438 · superior=53.
- Menor matéria do banco = 16 questões (Física e demais novas) — piso "mais de 15" atendido em TODAS.
- Teste funcional do motor: simulado de 10 questões montado para cada matéria nova; chips de matéria/banca/nível/ensino funcionando.
- `validar-idiomas.js` ✅ 224 chaves × 3 | `node --check` ✅ nos 3 arquivos.
- Temp `_tmp_teste.js` removido após o teste.

---

## Tarefa 7 — Matérias de serviço público + dicas por banca manual (491 → 559)

### Pedido
- "gere mais de 15 questões de: Direito Previdenciário, Legislação, Ética, Administração, Contabilidade; na análise do edital/manual do aluno caso banca não for identificada permitir usuário colocar sistema analise dá dicas sobre ela"

### O que foi feito
- **+68 questões** em cinco frentes:
  - Direito Previdenciário +4 (v17–v20 → total 20): teto INSS, qualidade de segurado/período de graça, aposentadoria por idade pós-2019, prova da pensão.
  - **Legislação** (matéria nova, lg01–lg16): Lei 8.112, licitações 14.133, improbidade, ECA, 9.784, Maria da Penha, acumulação de cargos, vacatio legis, prescrição×decadência, ato administrativo, PAD, equilíbrio econômico-financeiro, Estatuto PCD, LGPD, Estatuto do Idoso.
  - **Ética** (matéria nova, et01–et16): ética×moral×direito, Decreto 1.171, impessoalidade, conflito de interesses, virtude, sigilo, moralidade administrativa, recursos públicos, brindes, comissão de ética, transparência, assédio, legal×ético, dever de informar, decoro, bem comum.
  - **Administração** (matéria nova, ad01–ad16): Fayol, Taylor, PODC, Weber, níveis organizacionais, departamentalização, Maslow, lideranças, PDCA, SWOT, público×privado, comunicação, competências (CHA), organograma, inovação, cultura.
  - **Contabilidade** (matéria nova, ct01–ct16): equação fundamental, partidas dobradas, balanço, DRE, lançamentos, circulante×não circulante, depreciação, capital de giro, ativo circulante, a pagar×a receber, conciliação, competência×caixa, lucro bruto×líquido, DFC, provisões, PL.

### Banca manual + dicas (o segundo pedido)
- `analise-edital.js`:
  - `BANCAS` +7 detecções de vestibular: Fuvest/USP, Comvest/Unicamp, Univesp, Copeve/UFMG, Coperve/UFSC, FATEC, ETEC — o "manual do aluno" agora identifica a organizadora.
  - Novo `BANCAS_DICAS` (14 entradas + fallback genérico): dicas de estratégia por banca (formato, estilo de cobrança, pegadinhas típicas).
  - Novo `dicasDaBanca(nome)`: normaliza a entrada, casa por alias e devolve `{rotulo, dicas, conhecida}` — desconhecida cai no fallback honesto.
- `edital.js`:
  - Banca detectada → exibe dicas inline além do botão "ver pegadinhas".
  - Banca ausente → campo de texto + botão "Analisar"; `blocoDicasBanca` renderiza as dicas com `escape()` em tudo que o usuário digita.
- `idioma.js`: 6 chaves novas × 3 idiomas (`ed_banca_manual_l/ph/btn`, `ed_dicas_t`, `ed_banca_desconhecida`).

### Verificação
- `validar-banco.js` → **559 questões, 0 problemas** | 28 matérias | facil=138 · medio=371 · dificil=50 | ensino medio=487 · superior=72.
- Motor: 10 questões montam em cada matéria nova; Previdenciário=20, demais novas=16 (piso >15 mantido).
- `dicasDaBanca`: FCC/cebraspe/Fundação Getulio Vargas/Vunesp → `conhecida:true`; "Banca XYZ" → fallback `conhecida:false`; vazio → null.
- `extrairBanca` em texto Comvest detecta "Comvest/Unicamp" ✅.
- `validar-idiomas.js` ✅ 229×3 | `node --check` ✅ nos 4 arquivos.

### Próximos passos possíveis
- Persistir a banca manual no localStorage para pré-selecionar o filtro de banca do simulado (hoje não vinculamos: banca manual sem questões correspondentes zeraria o filtro).
- Expandir `BANCAS_DICAS` para mais bancas municipais.
- Temp `_tmp_banca.js` e `_tmp_motor.js` removidos após os testes.

---

## Tarefa 8 — Modal interativo de matéria/tópicos na análise do edital

### Pedido
- "seção 'Por onde começar (plano de estudo)' e 'O que o edital pede em cada matéria' clicar na matéria abre modal tópicos clicar tópicos abre explicação abaixo vídeo"

### O que foi feito
- `index.html`: modal `#modal-materia` com `#modal-fechar` (X) e `#modal-conteudo`.
- `css/componentes.css`: `.modal` (véu fixo), `.modal-caixa` (máx. 560px, scroll 80vh), `.modal-fechar`, `.materia-nome.clicavel` (cursor + sublinhado pontilhado), `.topico-item` (botões de tópico), `.topico-detalhe` (régua caramelo + explicação).
- `js/edital.js`:
  - `blocoPrograma` e `planoDeMateria` (inclusive fallback sem resumo): `materia-nome` virou clicável (`data-materia`, `role="button"`, `tabindex="0"`).
  - `iniciar()`: delegação de clique/teclado em `#edital-resultado` para `.materia-nome[data-materia]`; fechar modal por X, véu e Esc; delegação de `.topico-item` em `#modal-conteudo`.
  - `abrirModalMateria(rotulo)`: monta o modal com resumo do catálogo + lista "Tópicos que o edital pede" (strings extraídas do PDF) + lista "Os que mais caem" (catálogo `DadosTemas`).
  - `alternarTopico(botao)`: sanfona — um detalhe aberto por vez.
  - `detalheTopico(nome)`: casa o nome do tópico (normalizado, substring nos dois sentidos) com o catálogo → mostra "Por que cai" + "Como estudar"; sem match → fallback honesto; sempre fecha com `link-video` do YouTube (`matéria + tópico + resumo`).
- `idioma.js`: +7 chaves × 3 (`ed_modal_dica`, `ed_modal_edital`, `ed_modal_campeoes`, `ed_topico_porque/como/generico`, `modal_fechar`).

### Verificação
- Teste funcional em Node (stubs de DOM): modal abre com as duas listas; "Urbanização" do edital casou com "Urbanização e êxodo rural" do catálogo; tópico desconhecido cai no fallback; matéria só-catálogo e só-edital abrem normal; XSS em nome de tópico sai escapado.
- `validar-idiomas.js` ✅ | `validar-banco.js` 559/0 ✅ | `node --check` ✅.
- Temps `_tmp_modal*.js` removidos.

---

## Tarefa 9 — "Cargos/Vagas", plano completo e "Ver mais…"

### Pedido
- "altere 'Cargos que encontrei' para 'Cargos/Vagas que encontrei'; complete mais matérias na seção 'Por onde começar (plano de estudo)' se passar de duas linhas, coloque 'Ver mais...' onde mostra o restante, mostre apenas o que há de matéria no edital/manual do aluno"

### O que foi feito
- `idioma.js`: `ed_cargos_t` → "Cargos/Vagas que encontrei" (pt), "Positions/Vacancies" (en), "Puestos/Vacantes" (es).
- `dados-temas.js`: **+10 entradas de concursos** — Legislação, Ética, Direito Penal, Direito Previdenciário, Criminologia, Direito Civil, Direito do Trabalho, Administração, Contabilidade e Pedagogia, cada uma com resumo + 4-5 tópicos (`frequencia/porque/como`). A entrada morta "Legislação e Ética" (nenhum rótulo do CATALOGO casava com ela) virou Legislação + Ética separadas. Cobertura: **as 32 matérias do CATALOGO e as 28 do banco têm plano** (antes faltavam 10 — caíam no fallback "sem resumo").
- "Ver mais…" no plano: `planoDeMateria` agora envolve o conteúdo em `.plano-corpo` (CSS `-webkit-line-clamp: 2`); após o render, cada corpo com `scrollHeight > clientHeight` ganha o botão `.ver-mais` visível; clique alterna `.aberto` e troca o rótulo Ver mais ↔ Ver menos. Delegação no mesmo listener de `#edital-resultado`.
- i18n: `ed_ver_mais`/`ed_ver_menos` ×3.
- O plano já iterava só `analise.materias` (matérias detectadas no edital) — requisito "mostre apenas o que há no edital" mantido e reforçado.

### Verificação
- Script de cobertura: 0 matérias do CATALOGO e 0 do banco sem plano; `planoDeMateria` das 5 novas gera `plano-corpo` + `ver-mais` com resumo real.
- `validar-idiomas.js` ✅ (238×3) | `validar-banco.js` 559/0 ✅ | `node --check` ✅.

---

## Tarefa 10 — Banca CEBRASP, Direito do Trabalho e matérias editáveis no simulado do edital

### Pedido
- "inclua a banca cebrasp; inclua: Direito Penal, Direito do Trabalho, Legislação, Ética, Administração; gerar simulado com questões do edital tela hora do simulado permitir usuário alterar matérias"

### O que foi feito
- `banco-questoes.js`: **+16 questões de Direito do Trabalho** (tr01–tr16) — CLT art.7º/jornada/férias/décimo, FGTS, estabilidades, adicionais, aviso prévio, dispensa, Banco do Brasil/Nubank/LGPD-adjacentes — total do banco: **575 questões / 29 matérias**. Relabel CEBRASP em 3 questões municipais (d16, lg05, lg16) — total CEBRASP no banco: 6 (3 novas trabalhistas + 3 relabeladas).
- `analise-edital.js`: `BANCAS` + CEBRASP (padrões `CEBRASP`, `CENTRO BRASILEIRO DE APOIO`); `BANCAS_DICAS` + entrada CEBRASP (dicas de GCM/prefeitura SP, Lei 13.022, LEP, Maria da Penha).
- `dados-bancas.js`: + CEBRASP na tela de bancas (perfil, 4 pegadinhas, estratégia) — agora 10 bancas.
- `simulado.js` — **matérias do edital passaram a ser editáveis**:
  - `filtrosAtuais()`: chips `.ativa` sempre mandam — o atalho "if checked → materiasEdital" que ignorava a seleção foi removido.
  - `atualizarDisponiveis()`: chips não esmaecem mais; se a seleção divergir do conjunto do edital, o check `sim-so-edital` desmarca sozinho.
  - Listener do check: marcar = pré-seleciona exatamente as matérias do edital nos chips (atalho), desmarcar = libera edição.
- `css/componentes.css`: `.chip-opcao.desativado` removido (classe morta — nenhum consumidor restava).
- Matérias do pedido já existiam: Penal(16), Legislação(16), Ética(16), Administração(16); só Trabalho faltava.
- `README.md`: 559→575, 9→10 bancas.

### Verificação
- Teste funcional (stub DOM): chips do edital pré-marcados; desmarcar Legislação + marcar Ética → `filtrosAtuais` devolve {Penal, Ética} e o check desmarca; re-marcar o check restaura exatamente o conjunto do edital; motor monta 8 questões só das matérias alteradas.
- `bancasDoBanco()` inclui CEBRASP (6 questões); simulado de Direito do Trabalho monta 10.
- `validar-banco.js` ✅ 575/0/29 matérias | `validar-idiomas.js` ✅ | `node --check` ✅.

---

## Tarefa 11 — Expansão das matérias "travadas" em 16 → todas acima de 30, contagens únicas

### Pedido
- "muitas matérias para redação estão com 16 questões, varie o número, não deixe números iguais, use math random para o número de questão acima de 30"
- "faça as questões para aparecer o número de questões da matéria; a ordem é quanto maior questões mais a esquerda"
- Escopo confirmado pelo usuário: **todas acima de 30**.

### O que foi feito
- **+499 questões** (575 → **1.074**) em 18 lotes — as 19 matérias que estavam em 16 passaram todas a >30, com **contagem única por matéria** (sem repetições):
  | Matéria | Antes → Depois | IDs novos |
  |---|---|---|
  | Filosofia | 16 → 52 | fl17–fl52 |
  | Literatura | 16 → 51 | l17–l51 |
  | Economia | 16 → 50 | ec17–ec50 |
  | Biologia | 16 → 49 | b17–b49 |
  | Administração | 16 → 48 | ad17–ad48 |
  | Direito do Trabalho | 16 → 47 | tr17–tr47 |
  | Artes | 16 → 46 | ar17–ar46 |
  | Criminologia | 16 → 45 | k17–k45 |
  | Direito Penal | 16 → 44 | d17–d44 |
  | Sociologia | 16 → 43 | so17–so43 |
  | Legislação | 16 → 42 | lg17–lg42 |
  | Espanhol | 16 → 41 | s17–s41 |
  | Inglês | 16 → 38 | e17–e38 |
  | Contabilidade | 16 → 37 | ct17–ct37 |
  | Química | 16 → 36 | qm17–qm36 |
  | Fisiologia | 16 → 35 | fs17–fs35 |
  | Ética | 16 → 34 | et17–et34 |
  | Ed. Física | 16 → 33 | ef17–ef33 |
  | Física | 16 → 32 | f17–f32 |
- `motor-simulado.js` `materiasDoBanco()`: `.sort((a,b) => b.quantidade - a.quantidade || localeCompare)` — chips ordenados por contagem desc (maior → esquerda; desempate alfabético pt-BR). Contagem já é calculada do banco real e exibida no `<span class="chip-num">` — nada hard-coded.
- Sobre "use Math.random": os totais exibidos são o número REAL de questões do banco (requisito "aparecer o número de questões da matéria"), então as contagens >30 são fixas e distintas — `Math.random` permanece no sorteio/embaralhamento das questões (`embaralhar`, Fisher-Yates) e das alternativas.
- Resultado: **as 29 matérias têm contagens todas distintas** (52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,28,26,24,23,21,20,19).
- `README.md`: 575 → 1.074 (2 referências).
- 3 duplicatas de enunciado capturadas pelo validador e reescritas com ângulo novo: ec31 (Gini→IDH), qm22 (pH→indicadores), ct33 (conciliação→DFC).
- Arquivos temporários (`_novo_bloco.txt`, `_tmp_*.js`) removidos.

### Verificação
- `validar-banco.js` ✅ **1.074 questões / 0 problemas / 29 matérias** (facil=289, medio=717, dificil=68; medio=955, superior=119).
- Contagem por matéria: zero duplicatas; as 19 afetadas todas >30.
- `validar-idiomas.js` ✅ | `testar-analise.js` ✅ | `node --check` em todos os 15 JS ✅.

---

## Tarefa 12 — Temas que caem: +72 tópicos e "Ver mais…" por cartão

### Pedido
- "temas que caem: complete mais os tópicos das matérias, mostre o primeiro grupo e abaixo texto 'Ver mais...' clica mostra o resto"

### O que foi feito
- `dados-temas.js`: **+72 tópicos** distribuídos nas 32 matérias — todas agora com 5-8 tópicos (antes 3-6):
  - Concursos (17 matérias): Portuguesa +2, Matemática +2, Raciocínio +2, Informática +2, Constitucional +2, Administrativo +2, Atualidades +2, Legislação +2, Ética +2, Penal +2, Previdenciário +2, Criminologia +3, Civil +3, Trabalho +3, Administração +2, Contabilidade +2, Pedagogia +2
  - Vestibular (15 matérias): Redação +3, História +2, Geografia +2, Biologia +3, Física +3, Química +3, Literatura +3, Inglês +2, Espanhol +2, Artes +2, Ed. Física +2, Fisiologia +2, Filosofia +2, Sociologia +2, Economia +2
  - Temas novos: classes de palavras, figuras de linguagem, MMC/MDC, calendários, LGPD, art. 144 (segurança), concessões, geopolítica, ECA, LAI, nepotismo, dosimetria, Maria da Penha, papiloscopia, balística, prescrição/decadência civil, reforma 2017, ACT/CCT, PPP, citologia, fotossíntese, imunologia, óptica, ondas, tabela periódica, pH, Barroco/Arcadismo, Naturalismo, conectivos EN/ES, arte contemporânea/indígena, regras de esporte, Aristóteles, contratualistas, indústria cultural, Marshall, mercado financeiro, comércio internacional…
- `conteudo.js` `mostrar()`: renderiza só os **3 primeiros tópicos** visíveis; os demais ganham `.tema-extra` (escondido); cartões com >3 tópicos recebem botão `.ver-mais.tema-ver-mais`. Listener **delegado** em `#lista-temas` alterna `.aberto` no cartão e troca o rótulo — funciona nas duas abas sem religar.
- `css/componentes.css`: `.tema-extra {display:none}`, `.cartao.aberto .tema-extra {display:block}`, respiro do botão.
- i18n: reutiliza `ed_ver_mais`/`ed_ver_menos` (já existentes ×3) — zero chaves novas.
- `css/telas.css`: gráfico "Sua evolução" — `.grafico` limitado a 520px centralizado + `.coluna` teto 52px (tarefa anterior "aproxime as colunas").

### Verificação
- Script: concursos 51 visíveis + 69 extras (17 botões) | vestibular 45 + 37 (15 botões) | 0 tópicos malformados.
- `node --check` em dados-temas.js e conteudo.js ✅ | `validar-idiomas.js` ✅.

---

## Tarefa 13 — "Sua evolução": traços nos lugares vazios

### Pedido
- "melhore a aparencia do gráfico 'sua evolução' não tem coluna coloque traços para indicar que pode adicionar mais fazendo mais"

### O que foi feito
- `dashboard.js`: após as colunas reais (até 10 últimas provas), renderiza `10 - ultimas.length` colunas `.fantasma` — traço tracejado + tooltip traduzido (`dash_vaga`) convidando a fazer mais simulados.
- `telas.css`: `.coluna.fantasma .barra` — borda tracejada `--marrom-suave`, 45% de opacidade, altura simbólica 26%; rótulo invisível para manter o alinhamento.
- `idioma.js`: chave `dash_vaga` ×3 (pt/en/es).

### Verificação
- `validar-idiomas.js` ✅ | `node --check` ✅.
