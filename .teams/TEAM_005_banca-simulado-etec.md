# TEAM_005 — Simulado por banca (edital) + correção do falso "ETEC"

## Pedido
- "quero apenas que apareça meu nome, não quero devin como contribuinte"
- "inclua opcional fazer simulado com questões da banca dropdown"
- "importo edital de bancas variadas mas muitas vezes fala que é ETEC sendo outra"

## Diagnóstico
- `extrairBanca` usava `indexOf` (substring): "DE**TEC**ÇÃO", "DE**TEC**TAR" e
  "DE**TEC**TOR" normalizados contêm "ETEC" → edital de outra banca saía como
  Etec. A janela de contexto (±160) não salvava: BANCA/REALIZACAO/APLICACAO
  aparecem em qualquer edital. Só a 1ª ocorrência do apelido era testada.
- Simulado já tinha `<select id="sim-banca">` (estilo de banca), mas nada ligava
  a banca detectada no edital ao simulado.

## O que foi feito
- `js/analise-edital.js` (`extrairBanca`): reescrito — casa apelidos como
  **palavra inteira** (`\b`), varre **todas** as ocorrências e pontua: força 2
  quando "BANCA/ORGANIZADORA/ORGANIZACAO" está a ±60 chars do nome (declaração
  explícita), força 1 com o contexto largo antigo; desempate = mais cedo no
  texto. "detecção" não gera mais ETEC; "ETEC" como local de prova perde para a
  banca declarada.
- `js/edital.js`: cartão da banca ganha dropdown `#sim-banca-edital` (bancas do
  banco, com contagem) + botão `#btn-sim-banca` → `SimuladoUI.abrir({banca})`.
  Novo `bancaBancoDaDetectada(rotulo)`: rótulo detectado → nome no banco
  (exata → contém/contido, prefere o mais curto → 1º nome antes da "/").
  QUADRIX/Consulplan (sem questões no banco) → sem pré-seleção.
- `js/simulado.js`: `abrir()` aceita `opcoes.banca` → `estado.filtroBanca` e
  pré-seleciona `#sim-banca` na config.
- `js/idioma.js`: +4 chaves ×3 idiomas (267→271): `ed_sim_banca_l`,
  `ed_sim_banca_sel`, `ed_sim_banca_btn`, `toast_sim_banca`.
- `sw.js`: bump do `CACHE` v4 → v5.
- `README.md`: linha 🤖 IA → "Um projeto de Leonardo Stella de Oliveira";
  créditos com o nome; banca organizadora documenta palavra inteira + dropdown.

## Verificação
- Cenários Node: VUNESP+"detector" → Vunesp · FCC+"detectada" → FCC ·
  manual ETEC real → ETEC · IBFC declarada + ETEC como local → IBFC ·
  FGV → FGV. Mapeamento: 16 rótulos testados, todos certos (2 sem banco → "").
- `node --check` ×4 ✅ · `validar-idiomas` ✅ (271 chaves) ·
  `validar-banco` 1074/0 ✅ · `testar-analise` 10/10 ✅.

## Atribuição
- Commits desta equipe SEM trailer "Generated with Devin"/"Co-Authored-By"
  (preferência registrada nos commits 78d12b9+ e TEAM_002/003/004).
- README agora credita só o usuário (a menção "auxílio de IA" saiu).

---

## Rodada 2 — "gere mais questões"

### O que mudou
- **+50 questões** (1.074 → **1.124**) nas 10 matérias com menos volume:
  Português p41–45, Matemática m40–44, Raciocínio r32–36, Informática i29–33,
  Constitucional c27–31, Administrativo a24–28, Atualidades t22–26,
  História h20–24, Geografia g25–29, Previdenciário v21–25.
- Estreiam questões de **6 bancas que só existiam no catálogo de detecção**
  (sem itens no banco): QUADRIX(9), Consulplan(7), IDECAN(7), CESGRANRIO(6),
  FUMARC(6), IBADE(3) — agora aparecem nos dois dropdowns de banca.
- `README.md`: 1.074 → 1.124 (2 referências). `sw.js`: bump v5 → v6.
- Enunciado de p42 reformulado (duplicava p10 — "Assinale a palavra grafada").

### Verificação
- `validar-banco` **1124/0** ✅ (facil=301, medio=750, dificil=73;
  medio=991, superior=133) · `node --check` ✅.
- Dropdown `bancasDoBanco()` agora lista 23 opções (antes 17).

---

## Rodada 3 — "gere mais questões" (2º lote)

### O que mudou
- **+55 questões** (1.124 → **1.179**) nas 11 matérias que seguiam menores:
  História h25–29, Previdenciário v26–30, Atualidades t27–31,
  Administrativo a29–33, Geografia g30–34, Constitucional c32–36,
  Física f33–37, Informática i34–38, Educação Física ef34–38,
  Ética et35–39, Fisiologia fs36–40.
- Estreiam **5 bancas do catálogo** que ainda não tinham questões: FUNDATEC,
  Copeve/UFMG, Selecon, IBGP e Instituto Mais — 11 cada, passam a aparecer
  nos dropdowns de filtro (edital e simulado).
- Enunciado de h28 reformulado para Quilombo dos Palmares/Zumbi (a 1ª versão,
  Inconfidência Mineira, duplicava h09).
- `README.md`: 1.124 → 1.179 (2 referências). `sw.js`: bump v6 → v7.

### Verificação
- `validar-banco` **1179/0** ✅ (facil=313, medio=791, dificil=75;
  medio=1037, superior=142) · `node --check` ✅ ·
  `testar-analise` 10/10 ✅ · `validar-idiomas` 271 chaves ×3 ✅.
- Bancas distintas no banco: **28** (23 no lote anterior).

---

## Rodada 4 — "gere mais 100 questões para todas as matérias, commits separados"

### Distribuição
- **+100 questões** (1.179 → **1.279**), todas as 29 matérias: +4 nas 13
  menores e +3 nas 16 restantes.
- Validador estourou duas vezes e foi corrigido no caminho: h28 duplicava
  h09 (→ virou Quilombo dos Palmares) e comentário-sujo em lg45.

### Commits separados (a pedido do usuário)
1. `89162fb` bloco jurídico +27: c37–40, a34–37, v31–34, et40–42, d45–47,
   tr48–50, k46–48, lg43–45.
2. `2a763ac` bloco humanas +27: h30–33, g35–38, t32–35, fl53–55,
   so44–46, ar47–49, l52–54, s42–44.
3. `593fdec` bloco exatas +26: m45–47, r37–40, qm37–40, f38–41,
   ct38–41, ec51–53, i39–42.
4. `05e91cf` bloco línguas/saúde/gestão +20: p46–48, e39–42, b50–52,
   fs41–43, ef39–42, ad49–51.
5. (docs) README 1.179→1.279 · `sw.js` v7→v8 · este log.

### Limite do arquivo (análise pedida)
- `banco-questoes.js` ≈ **1,7 MB** após o lote — ainda carrega bem no
  navegador, mas cada lote futuro de 100 questões acrescenta ~0,4–0,5 MB.
- Próximo ponto de decisão (próx. de 2 MB / ~1.400 questões): avaliar
  split por arquivo de matéria ou carregamento por demanda — TODO para
  equipe futura, sem pressa.

### Verificação
- `validar-banco` **1279/0** ✅ a cada bloco (facil=329, medio=872,
  dificil=78; medio=1118, superior=161) · `node --check` ✅ por bloco.

---

## Rodada 5 — "gere mais 100 questões para todas as matérias" (lote 4)

### Distribuição
- **+100 questões** (1.279 → **1.379**), mesma regra de balanceamento:
  +4 nas 13 menores e +3 nas 16 restantes → todas as 29 matérias ficam
  entre 36 e 55 questões.
- Temas novos evitando repetição; ajuste no caminho: comentário errado de
  `// correta` na 1ª alternativa de t38 (o índice correto, 1, já estava
  certo — só o comentário mentia) corrigido antes do commit.

### Commits separados (a pedido do usuário)
1. `b3dcc8d` bloco jurídico +27: c41–44, a38–41, v35–38, et43–45, d48–50,
   tr51–53, k49–51, lg46–48.
2. `56cd873` bloco humanas +27: h34–37, g39–42, t36–39, fl56–58,
   so47–49, ar50–52, l55–57, s45–47.
3. `0b47ed2` bloco exatas +26: m48–50, r41–44, qm41–44, f42–45,
   ct42–45, ec54–56, i43–46.
4. `f37f02f` bloco línguas/saúde/gestão +20: p49–51, e43–46, b53–55,
   fs44–46, ef43–46, ad52–54.
5. (docs) README 1.279→1.379 · `sw.js` v8→v9 · este log.

### Limite do arquivo (análise pedida)
- `banco-questoes.js` agora mede **1,88 MB** (≈1,36 KB/questão média).
  Ainda carrega bem no navegador local, mas **passou a marca de decisão
  do lote anterior (~2 MB) está próxima** — o próximo lote de 100
  deixará o arquivo em ~2,3 MB.
- TODO(TEAM_005): antes do próximo grande lote, avaliar split do banco:
  um arquivo por bloco temático (`banco-juridico.js`, `banco-exatas.js`…)
  ou lazy-load sob demanda na montagem do simulado — sem pressa, mas o
  ponto de inflexão é aqui (1.400–1.500 questões).

### Verificação
- `validar-banco` **1379/0** ✅ por bloco · `node --check` ✅.
