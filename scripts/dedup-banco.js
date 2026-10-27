/* ============================================================
   TEAM_007 — scripts/dedup-banco.js
   Corrige a poluição do banco:
   1) Remove cópias idênticas (enunciado + alternativas) dentro
      da MESMA banca — o usuário relatou "a mesma questão
      falando ser diferente".
   2) Limpa a tag interna "[Questão #NNNN - Banca]" que vazou
      para o enunciado exibido ao usuário (às vezes citando
      outra banca).
   Uso: node scripts/dedup-banco.js
   ============================================================ */

const fs = require('fs');                                  // leitura/escrita do arquivo
const path = require('path');                              // caminho do banco

const ARQUIVO = path.join(__dirname, '..', 'js', 'banco-questoes.js'); // banco-alvo

const src = fs.readFileSync(ARQUIVO, 'utf8');              // fonte original
const BancoQuestoes = eval(src + '; BancoQuestoes');       // executa o array literal
const totalAntes = BancoQuestoes.length;                   // contagem prévia

// Limpa a tag interna "[Questão #NNNN - X]" do início do enunciado
const limparTag = (t) => t.replace(/^\s*\[Questão #\d+[^\]]*\]\s*/, '').trim();

// Chave de unicidade: banca + enunciado limpo + alternativas (normalizadas)
const norm = (t) => limparTag(t).toLowerCase().replace(/\s+/g, ' ').trim();
const chave = (q) => q.banca + '||' + norm(q.enunciado) + '||' +
  q.alternativas.map(norm).join('§');

const vistos = new Set();                                  // chaves já mantidas
const limpas = [];                                         // questões que sobem
let removidas = 0;                                         // cópias descartadas
let tagsLimpas = 0;                                        // tags removidas do texto
let conflitoGabarito = 0;                                  // mesmo item, gabarito divergente

for (const q of BancoQuestoes) {                           // percorre na ordem original
  const k = chave(q);                                      // chave da questão
  if (vistos.has(k)) {                                     // já existe cópia na banca
    removidas++;                                           // descarta a duplicata
    continue;
  }
  vistos.add(k);                                           // registra a chave
  const enunLimpo = limparTag(q.enunciado);                // enunciado sem a tag
  if (enunLimpo !== q.enunciado) tagsLimpas++;             // conta a limpeza
  q.enunciado = enunLimpo;                                 // aplica no objeto
  limpas.push(q);                                          // mantém a primeira ocorrência
}

// Reconta gabaritos divergentes entre clones removidos (auditoria)
const porChave = new Map();                                // chave → gabarito da mantida
for (const q of BancoQuestoes) {                           // reavalia no original
  const k = chave(q);                                      // mesma chave
  if (!porChave.has(k)) { porChave.set(k, q.correta); continue; } // base
  if (porChave.get(k) !== q.correta) conflitoGabarito++;   // gabarito divergente
}

// Serializa no mesmo estilo do arquivo (2 espaços, aspas duplas)
const q2str = (q) => {
  const alts = q.alternativas
    .map((a) => '      ' + JSON.stringify(a))              // uma alternativa por linha
    .join(',\n');
  return [
    '  {',
    '    id: ' + JSON.stringify(q.id) + ',',
    '    materia: ' + JSON.stringify(q.materia) + ',',
    '    tema: ' + JSON.stringify(q.tema) + ',',
    '    nivel: ' + JSON.stringify(q.nivel) + ',',
    '    ensino: ' + JSON.stringify(q.ensino) + ',',
    '    banca: ' + JSON.stringify(q.banca) + ',',
    '    enunciado: ' + JSON.stringify(q.enunciado) + ',',
    '    alternativas: [',
    alts,
    '    ],',
    '    correta: ' + q.correta + ',',
    '    explicacao: ' + JSON.stringify(q.explicacao) + ',',
    '    dica: ' + JSON.stringify(q.dica) + ',',
    '    video: ' + JSON.stringify(q.video),
    '  }',
  ].join('\n');
};

const cabecalho = src.slice(0, src.indexOf('[') + 1);      // mantém header + "const BancoQuestoes = ["
const saida = cabecalho + '\n' +
  limpas.map(q2str).join(',\n') + '\n];\n';                // array regravado

fs.writeFileSync(ARQUIVO, saida, 'utf8');                  // grava o banco limpo

console.log('antes:', totalAntes);                         // relatório
console.log('depois:', limpas.length);
console.log('cópias removidas (mesma banca):', removidas);
console.log('tags "[Questão #]" limpas:', tagsLimpas);
console.log('gabaritos divergentes entre clones:', conflitoGabarito);
