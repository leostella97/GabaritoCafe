/* ============================================================
   GABARITO CAFÉ — scripts/gerar-questoes.js
   Script de utilidade para verificação de IDs por matéria.
   ============================================================ */

const fs = require('fs');
const vm = require('vm');
const path = require('path');

const caminhoBanco = path.join(__dirname, '..', 'js', 'banco-questoes.js');
const codigo = fs.readFileSync(caminhoBanco, 'utf8');
const contexto = {};
vm.createContext(contexto);
vm.runInContext(codigo, contexto);
const BancoQuestoes = contexto.BancoQuestoes || vm.runInContext('BancoQuestoes', contexto);

const MATERIA_PREFIXO = {
  'Língua Portuguesa': 'p',
  'Matemática': 'm',
  'Raciocínio Lógico': 'r',
  'Informática': 'i',
  'Direito Constitucional': 'c',
  'Direito Administrativo': 'a',
  'Atualidades': 't',
  'História do Brasil': 'h',
  'Geografia': 'g',
  'Direito Penal': 'd',
  'Criminologia': 'k',
  'Direito Previdenciário': 'v',
  'Literatura': 'l',
  'Inglês': 'e',
  'Espanhol': 's',
  'Artes': 'ar',
  'Educação Física': 'ef',
  'Fisiologia': 'fs',
  'Filosofia': 'fl',
  'Sociologia': 'so',
  'Biologia': 'b',
  'Economia': 'ec',
  'Química': 'qm',
  'Física': 'f',
  'Legislação': 'lg',
  'Ética': 'et',
  'Administração': 'ad',
  'Contabilidade': 'ct',
  'Direito do Trabalho': 'tr'
};

function obterProximosIds(banco) {
  const maior = {};
  banco.forEach(q => {
    const match = /^([a-z]+)(\d+)$/.exec(q.id);
    if (match) {
      const pref = match[1];
      const num = parseInt(match[2], 10);
      if (!maior[pref] || num > maior[pref]) {
        maior[pref] = num;
      }
    }
  });

  const proximos = {};
  for (const [mat, pref] of Object.entries(MATERIA_PREFIXO)) {
    proximos[mat] = (maior[pref] || 0) + 1;
  }
  return { maior, proximos };
}

if (require.main === module) {
  console.log('Total de questões no banco:', BancoQuestoes.length);
  const { proximos } = obterProximosIds(BancoQuestoes);
  console.log('Próximos IDs disponíveis:', proximos);
}

module.exports = { MATERIA_PREFIXO, obterProximosIds };
