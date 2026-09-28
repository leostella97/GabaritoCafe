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
