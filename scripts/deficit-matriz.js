/* ============================================================
   GABARITO CAFÉ — scripts/deficit-matriz.js
   Ferramenta de desenvolvimento (TEAM_006): matriz banca ×
   matéria — mostra quantas questões faltam em cada célula
   para chegar ao mínimo de 10, e o próximo id livre de cada
   matéria (para nunca repetir identificador).
   Uso:  node scripts/deficit-matriz.js [banca]
   ============================================================ */

// Módulos do Node usados na verificação
const fs = require('fs');               // para ler arquivos
const vm = require('vm');               // para executar o JS do banco isolado
const path = require('path');           // para montar caminhos

// Caminho do arquivo do banco de questões
const caminhoBanco = path.join(__dirname, '..', 'js', 'banco-questoes.js'); // resolve o caminho
const codigo = fs.readFileSync(caminhoBanco, 'utf8'); // lê o arquivo inteiro

// Executa o arquivo em um contexto isolado (como se fosse o navegador)
const contexto = {};                    // contexto vazio (sem DOM, sem localStorage)
vm.createContext(contexto);             // cria o contexto isolado
vm.runInContext(codigo, contexto);      // roda o arquivo dentro dele
const BancoQuestoes = vm.runInContext('BancoQuestoes', contexto); // pega a constante criada

const MINIMO = 10;                      // meta por célula (banca × matéria)
const filtroBanca = process.argv[2];    // opcional: só esta banca

// Coleta bancas, matérias, contagens por célula e maior id por prefixo
const bancas = new Set();               // conjunto de bancas
const materias = new Set();             // conjunto de matérias
const celulas = {};                     // 'banca|matéria' → contagem
const maiorId = {};                     // prefixo → { max, matéria }
for (const q of BancoQuestoes) {        // percorre todas as questões
  bancas.add(q.banca);                  // registra a banca
  materias.add(q.materia);              // registra a matéria
  const chave = q.banca + '|' + q.materia; // chave da célula
  celulas[chave] = (celulas[chave] || 0) + 1; // soma na célula
  const m = /^([a-z]+)(\d+)$/.exec(q.id); // separa prefixo e número do id
  if (m && (!maiorId[m[1]] || +m[2] > maiorId[m[1]].max)) { // achou id maior?
    maiorId[m[1]] = { max: +m[2], materia: q.materia }; // guarda prefixo → maior número
  }
}

// Lista de matérias na ordem de prefixo (estável, legível)
const listaMaterias = Array.from(materias).sort(); // matérias em ordem alfabética
const listaBancas = Array.from(bancas);            // bancas em ordem de aparecimento

// Deficit por banca (quantas questões faltam para a matriz completa a MINIMO)
console.log('========== DÉFICIT DA MATRIZ (meta: ' + MINIMO + '/célula) =========='); // cabeçalho
let totalFalta = 0;                     // soma geral do déficit
const porBanca = [];                    // [banca, déficit]
for (const b of listaBancas) {          // percorre cada banca
  let falta = 0;                        // déficit desta banca
  for (const mat of listaMaterias) {    // percorre cada matéria
    const atual = celulas[b + '|' + mat] || 0; // questões atuais na célula
    if (atual < MINIMO) falta += MINIMO - atual; // soma o que falta
  }
  porBanca.push([b, falta]);            // guarda o par
  totalFalta += falta;                  // acumula no total
}
porBanca.sort((a, b) => a[1] - b[1]);   // menor déficit primeiro (completa mais rápido)
for (const [b, falta] of porBanca) {    // imprime ordenado
  const marca = falta === 0 ? ' ✅ COMPLETA' : ''; // selo de banca completa
  console.log(String(falta).padStart(4) + '  ' + b + marca); // linha da banca
}
console.log('Total que falta: ' + totalFalta + ' questões'); // soma geral

// Detalhe por matéria de uma banca específica (quando passada como argumento)
if (filtroBanca) {                      // pediu detalhe de uma banca?
  const b = listaBancas.find(x => x.toLowerCase().includes(filtroBanca.toLowerCase())); // acha a banca
  if (!b) {                             // não achou?
    console.log('\nBanca não encontrada: ' + filtroBanca); // avisa
  } else {                              // achou — detalha célula por célula
    console.log('\n===== ' + b + ' — falta por matéria ====='); // cabeçalho do detalhe
    for (const mat of listaMaterias) {  // percorre as matérias
      const atual = celulas[b + '|' + mat] || 0; // contagem atual
      const falta = Math.max(0, MINIMO - atual); // o que falta
      console.log(String(atual).padStart(2) + ' (+' + String(falta).padStart(2) + ')  ' + mat); // linha da célula
    }
  }
}

// Próximo id livre de cada prefixo (ordem alfabética de matéria)
console.log('\n========== PRÓXIMO ID LIVRE =========='); // cabeçalho
const prefPorMateria = {};              // matéria → prefixo (pelo maior id)
for (const [pref, info] of Object.entries(maiorId)) { // percorre prefixos
  if (!prefPorMateria[info.materia] || info.max > maiorId[prefPorMateria[info.materia]].max) { // guarda o prefixo "principal"
    prefPorMateria[info.materia] = pref; // matéria → prefixo campeão
  }
}
for (const mat of listaMaterias) {      // imprime por matéria
  const pref = prefPorMateria[mat];     // prefixo da matéria
  const prox = String(maiorId[pref].max + 1).padStart(2, '0'); // próximo número com zero à esquerda
  console.log(mat.padEnd(24) + ' ' + pref + prox); // linha: matéria + próximo id
}
