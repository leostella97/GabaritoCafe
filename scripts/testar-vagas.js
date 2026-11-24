// TEAM_008 — teste de dev: "o que estudar" separado por vaga
// Carrega os scripts REAIS em vm (como testar-modal.js) e confere:
// - materiasDaVaga: programa próprio / comum / fundido
// - programaDaVaga: seletor de vagas + nota de origem
// - planoDaVaga: matérias filtradas pela vaga
// - selecionarVaga: re-render dos blocos + estado dos chips
// Uso: node scripts/testar-vagas.js
const fs = require('fs');
const vm = require('vm');

let falhas = 0;
function ok(cond, msg) {
  if (cond) console.log('  ✅ ' + msg);
  else { falhas++; console.log('  ❌ FALHOU: ' + msg); }
}

/* ---------- Contexto com stubs mínimos ---------- */
const doc = {
  _caixas: {
    'bloco-programa-conteudo': { innerHTML: '', querySelectorAll() { return []; } },
    'bloco-plano-conteudo': { innerHTML: '', querySelectorAll() { return []; } }
  },
  getElementById(id) { return this._caixas[id] || null; },
  querySelectorAll() { return []; },
  addEventListener() {},
  documentElement: { lang: 'pt' }
};
const ctx = {
  console, document: doc,
  window: { addEventListener() {}, scrollTo() {} },
  navigator: {},
  localStorage: { _d: {}, getItem(k) { return this._d[k] || null; }, setItem(k, v) { this._d[k] = v; }, removeItem(k) { delete this._d[k]; } },
  setTimeout: (fn) => fn(), clearTimeout() {}
};
vm.createContext(ctx);
vm.runInContext('var window=this;', ctx);           // window === globalThis no vm

for (const arq of ['js/util.js', 'js/armazenamento.js', 'js/idioma.js', 'js/dados-temas.js', 'js/banco-questoes.js', 'js/analise-edital.js', 'js/edital.js']) {
  vm.runInContext(fs.readFileSync(arq, 'utf8'), ctx); // carrega cada script real
}

/* ---------- Edital com 3 blocos de programa (comum + 2 cargos) ---------- */
const edital = `
CONCURSO PÚBLICO Nº 01/2025 — PREFEITURA DE CAFEZINHOS
Banca organizadora: FUNDAÇÃO CARLOS CHAGAS (FCC).

1. DOS CARGOS
1. Agente Administrativo - 10 vagas - R$ 2.500,00
2. Técnico em Enfermagem - 5 vagas - R$ 3.200,00
3. Motorista - 3 vagas - R$ 2.100,00

2. DAS PROVAS
2.1 A prova objetiva será aplicada em 27/04/2025.

7. CONTEÚDO PROGRAMÁTICO COMUM A TODOS OS CARGOS
LÍNGUA PORTUGUESA: interpretação de texto; concordância verbal.
MATEMÁTICA: porcentagem; regra de três.

8. CONTEÚDO PROGRAMÁTICO PARA O CARGO DE TÉCNICO EM ENFERMAGEM
FISIOLOGIA HUMANA: sinais vitais; sistemas do corpo.
CONHECIMENTOS GERAIS: saúde pública; epidemiologia.

9. CONTEÚDO PROGRAMÁTICO — CARGO: MOTORISTA
LEGISLAÇÃO: Código de Trânsito Brasileiro.
`;

console.log('\n▶ Análise gera os grupos por cargo');
const r = vm.runInContext('AnaliseEdital.analisar(`' + edital.replace(/`/g, "'") + '`)', ctx);
ok(r.cargos.length === 3, '3 cargos detectados (lista "1." "2." numerada)');
ok(r.programasPorCargo.length === 3, '3 grupos: comum + Técnico + Motorista');
ok(r.programasPorCargo.some(g => g.cargo === null), 'bloco comum sem cargo marcado');

console.log('\n▶ materiasDaVaga resolve a origem certa');
const EditalUI = vm.runInContext('EditalUI', ctx);
EditalUI.ultimaAnalise = r;
const tecnico = EditalUI.materiasDaVaga(r, 'Técnico em Enfermagem');
ok(!tecnico.comum, 'Técnico usa programa PRÓPRIO');
ok(tecnico.materias.some(m => m.rotulo === 'Fisiologia'), 'Técnico tem Fisiologia');
ok(!tecnico.materias.some(m => m.rotulo === 'Matemática'), 'Técnico NÃO tem Matemática (só o dela)');
const agente = EditalUI.materiasDaVaga(r, 'Agente Administrativo');
ok(agente.comum, 'Agente cai no programa COMUM');
ok(agente.materias.some(m => m.rotulo === 'Matemática'), 'Agente tem Matemática do comum');
const todas = EditalUI.materiasDaVaga(r, null);
ok(todas.materias.length === r.materias.length, 'sem vaga: lista fundida completa');

console.log('\n▶ programaDaVaga desenha seletor + conteúdo da vaga');
const htmlTodas = EditalUI.programaDaVaga(r, null);
ok((htmlTodas.match(/chip-vaga/g) || []).length >= 4, 'seletor tem chip "Todas" + 3 vagas');
ok(htmlTodas.indexOf('todas') !== -1, 'chip "Todas as vagas" presente');
const htmlTec = EditalUI.programaDaVaga(r, 'Técnico em Enfermagem');
ok(htmlTec.indexOf('Fisiologia') !== -1, 'vaga própria mostra Fisiologia');
ok(htmlTec.indexOf('espec') !== -1 || htmlTec.indexOf('spec') !== -1, 'nota "específico desta vaga"');
const htmlAge = EditalUI.programaDaVaga(r, 'Agente Administrativo');
ok(htmlAge.indexOf('comum') !== -1, 'vaga sem bloco próprio avisa que usa o comum');

console.log('\n▶ planoDaVaga filtra as matérias da vaga');
const planoTec = EditalUI.planoDaVaga(r, 'Técnico em Enfermagem');
ok(planoTec.indexOf('Fisiologia') !== -1, 'plano da vaga inclui Fisiologia');
ok(planoTec.indexOf('data-materia="Matemática"') === -1, 'plano da vaga exclui Matemática');
const planoTodas = EditalUI.planoDaVaga(r, null);
ok(planoTodas.indexOf('Matemática') !== -1, 'plano sem vaga inclui tudo');

console.log('\n▶ selecionarVaga re-renderiza os blocos certos');
doc._caixas['bloco-programa-conteudo'].innerHTML = '';
doc._caixas['bloco-plano-conteudo'].innerHTML = '';
EditalUI.selecionarVaga('Motorista');
ok(EditalUI.cargoAtivo === 'Motorista', 'vaga ativa registrada');
ok(doc._caixas['bloco-programa-conteudo'].innerHTML.indexOf('Legislação') !== -1, 'programa re-renderizado com a vaga');
ok(doc._caixas['bloco-plano-conteudo'].innerHTML.indexOf('Legislação') !== -1, 'plano re-renderizado com a vaga');
EditalUI.selecionarVaga(null);
ok(EditalUI.cargoAtivo === null, 'desmarcar volta para "Todas"');

console.log('\n========================================');
console.log(falhas === 0 ? '✅ Tudo certo! O que estudar sai separado por vaga.' : '❌ ' + falhas + ' checagem(ns) falhou(aram).');
process.exit(falhas === 0 ? 0 : 1);
