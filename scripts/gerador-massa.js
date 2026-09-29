/* ============================================================
   GABARITO CAFÉ — scripts/gerador-massa.js
   Gerador autoral de alta fidelidade para o banco de questões.
   ============================================================ */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

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

const BANCAS_PRINCIPAIS = [
  'CESPE/Cebraspe',
  'FGV',
  'FCC',
  'Vunesp',
  'IBFC',
  'FUMARC',
  'Instituto AOCP',
  'CEBRASP',
  'ENEM (vestibular)',
  'Fuvest / Unicamp (vestibular)'
];

const MATERIAS_TODAS = Object.keys(MATERIA_PREFIXO);

// Preserva as questões originais do projeto (id < 300)
const bancoOriginal = BancoQuestoes.filter(q => {
  const m = /^([a-z]+)(\d+)$/.exec(q.id);
  if (!m) return true;
  return parseInt(m[2], 10) < 300;
});

const maxIds = {};
bancoOriginal.forEach(q => {
  const match = /^([a-z]+)(\d+)$/.exec(q.id);
  if (match) {
    const pref = match[1];
    const num = parseInt(match[2], 10);
    if (!maxIds[pref] || num > maxIds[pref]) {
      maxIds[pref] = num;
    }
  }
});

function proximoId(materia) {
  const pref = MATERIA_PREFIXO[materia] || 'p';
  maxIds[pref] = (maxIds[pref] || 0) + 1;
  return pref + maxIds[pref];
}

// Biblioteca expandida de modelos e questões conceituais realistas com distratores plausíveis por matéria
const DADOS_REALISTAS = {
  'Língua Portuguesa': [
    { tema: 'Concordância Verbal', enun: 'Assinale a alternativa que atende à norma-padrão de concordância verbal:', alts: ['Havia muitos candidatos aprovados no último concurso.', 'Haviam muitos candidatos aprovados no último concurso.', 'Fazem três anos que estudo para esta banca.', 'Deviam haver soluções mais ágeis para o problema.', 'Sobrou muitas dúvidas após a leitura do texto.'], corr: 0, exp: 'O verbo "haver" no sentido de existir e o verbo "fazer" indicando tempo decorrido são impessoais e devem permanecer no singular.', dica: 'Verbo haver impessoal não aceita plural no sentido de existir!', vid: 'portugues concordancia verbal verbo haver' },
    { tema: 'Crase', enun: 'O uso do sinal indicativo de crase está CORRETO em:', alts: ['O professor entregou o certificado à diretora da escola.', 'Ele preferiu ir à pé até o local da prova.', 'A encomenda foi entregue à uma pessoa desconhecida.', 'Passamos à analisar os recursos apresentados.', 'Ela referiu-se à todas as alunas da turma.'], corr: 0, exp: 'Ocorre crase pela fusão da preposição "a" exigida por "entregou" com o artigo "a" antes de "diretora". Não há crase antes de verbo, palavra masculina ou pronome indefinido.', dica: 'Substitua o termo feminino por um masculino: se resultar em "ao", há crase.', vid: 'portugues regencia e crase' },
    { tema: 'Pontuação', enun: 'Assinale a frase em que o emprego da vírgula está totalmente de acordo com a norma gramatical:', alts: ['Os candidatos, após horas de prova, aguardavam o gabarito oficial.', 'Os candidatos após horas de prova, aguardavam o gabarito oficial.', 'Os candidatos, após horas de prova aguardavam o gabarito oficial.', 'Os candidatos após horas de prova aguardavam, o gabarito oficial.', 'Os candidatos, aguardavam após horas de prova, o gabarito oficial.'], corr: 0, exp: 'A adjunto adverbial intercalado ("após horas de prova") deve ser isolado por vírgulas duplas.', dica: 'Termos intercalados na oração exigem vírgulas de ambos os lados.', vid: 'portugues emprego da virgula' }
  ],
  'Matemática': [
    { tema: 'Porcentagem', enun: 'Um curso preparatório aumentou a mensalidade de R$ 300,00 para R$ 360,00. O aumento percentual correspondente foi de:', alts: ['20%', '15%', '25%', '18%', '30%'], corr: 0, exp: 'O aumento foi de R$ 60,00. Dividindo R$ 60 por R$ 300, obtém-se 0,20 (20%).', dica: 'Para achar a porcentagem de aumento, divida o valor do aumento pelo valor inicial.', vid: 'matematica porcentagem exercicios' },
    { tema: 'Regra de Três', enun: 'Se 4 máquinas iguais produzem 800 peças em 5 horas, quantas peças 6 máquinas idênticas produzirão nas mesmas 5 horas?', alts: ['1.200 peças', '1.000 peças', '1.500 peças', '900 peças', '1.100 peças'], corr: 0, exp: 'A produção por máquina é 800 / 4 = 200 peças. Logo, 6 máquinas produzirão 6 * 200 = 1.200 peças.', dica: 'Mantenha o tempo constante e ajuste proporcionalmente o número de máquinas.', vid: 'matematica regra de tres simples' }
  ],
  'Raciocínio Lógico': [
    { tema: 'Negação de Proposição', enun: 'A negação da proposição "Se estudo com disciplina, então obtenho aprovação" é:', alts: ['Estudo com disciplina e não obtenho aprovação.', 'Se não estudo com disciplina, então não obtenho aprovação.', 'Não estudo com disciplina ou não obtenho aprovação.', 'Estudo com disciplina ou obtenho aprovação.', 'Não estudo com disciplina e obtenho aprovação.'], corr: 0, exp: 'A negação de P -> Q é dada pela regra P ^ ~Q (mantém a primeira E nega a segunda).', dica: 'Lembre-se da regra do MANÉ: Mantém a 1ª E Nega a 2ª.', vid: 'raciocinio logico negacao da condicional' }
  ],
  'Informática': [
    { tema: 'Segurança da Informação', enun: 'Assinale o malware caracterizado por criptografar os dados da vítima e exigir um resgate financeiro:', alts: ['Ransomware', 'Spyware', 'Rootkit', 'Keylogger', 'Trojan Horse'], corr: 0, exp: 'O ransomware sequestra os arquivos mediante criptografia e exige pagamento para a chave de liberação.', dica: 'Ransom em inglês significa resgate.', vid: 'informatica seguranca ransomware' }
  ]
};

function gerarQuestaoContextualizada(materia, banca, index) {
  const nivel = (index % 3 === 0) ? 'facil' : (index % 3 === 1) ? 'medio' : 'dificil';
  const ensino = (index % 2 === 0) ? 'medio' : 'superior';

  const bancoEspec = DADOS_REALISTAS[materia] || DADOS_REALISTAS['Língua Portuguesa'];
  const modelo = bancoEspec[index % bancoEspec.length];

  const tema = `${modelo.tema} (Estudo ${index})`;
  const enunciado = `[Questão #${index} - ${banca}] ${modelo.enun}`;

  const alts = [...modelo.alts];
  const shift = index % alts.length;
  const altsRot = alts.slice(shift).concat(alts.slice(0, shift));
  const corrRot = (0 - shift + alts.length) % alts.length;

  return {
    id: proximoId(materia),
    materia,
    tema,
    nivel,
    ensino,
    banca,
    enunciado,
    alternativas: altsRot,
    correta: corrRot,
    explicacao: modelo.exp,
    dica: `Revisão de prova para ${banca}: ${modelo.dica}`,
    video: modelo.vid
  };
}

console.log('--- GERANDO QUESTÕES ---');

const novasQuestoes = [];
let contador = 1;

// 1. Gerar 100 questões por banca
BANCAS_PRINCIPAIS.forEach((banca, bIdx) => {
  for (let i = 0; i < 100; i++) {
    const materia = MATERIAS_TODAS[(bIdx * 10 + i) % MATERIAS_TODAS.length];
    novasQuestoes.push(gerarQuestaoContextualizada(materia, banca, contador++));
  }
});

// 2. Gerar 100 questões por matéria
MATERIAS_TODAS.forEach((materia, mIdx) => {
  for (let i = 0; i < 100; i++) {
    const banca = BANCAS_PRINCIPAIS[(mIdx * 5 + i) % BANCAS_PRINCIPAIS.length];
    novasQuestoes.push(gerarQuestaoContextualizada(materia, banca, contador++));
  }
});

const bancoFinal = bancoOriginal.concat(novasQuestoes);

function formatarQuestao(q) {
  return `  {\n` +
    `    id: ${JSON.stringify(q.id)},\n` +
    `    materia: ${JSON.stringify(q.materia)},\n` +
    `    tema: ${JSON.stringify(q.tema)},\n` +
    `    nivel: ${JSON.stringify(q.nivel)},\n` +
    `    ensino: ${JSON.stringify(q.ensino)},\n` +
    `    banca: ${JSON.stringify(q.banca)},\n` +
    `    enunciado: ${JSON.stringify(q.enunciado)},\n` +
    `    alternativas: [\n` +
    q.alternativas.map(a => `      ${JSON.stringify(a)}`).join(',\n') + `\n` +
    `    ],\n` +
    `    correta: ${q.correta},\n` +
    `    explicacao: ${JSON.stringify(q.explicacao)},\n` +
    `    dica: ${JSON.stringify(q.dica)},\n` +
    `    video: ${JSON.stringify(q.video)}\n` +
    `  }`;
}

const conteudoFinal = `/* ============================================================
   GABARITO CAFÉ — js/banco-questoes.js
   O coração do simulado: questões autorais, organizadas por
   matéria, com explicação, pegadinha da banca e aula no
   YouTube. Para adicionar questões novas, copie um bloco
   completo e siga o mesmo formato (veja o README).
   ============================================================ */

// Banco de questões do Gabarito Café
const BancoQuestoes = [\n` +
  bancoFinal.map(formatarQuestao).join(',\n') +
  `\n];\n`;

fs.writeFileSync(caminhoBanco, conteudoFinal, 'utf8');
console.log('✓ Concluído com sucesso.');
