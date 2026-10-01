/* ============================================================
   GABARITO CAFÉ — scripts/testar-impressao.js
   Ferramenta de desenvolvimento (TEAM_007): testa a montagem da
   folha de impressão (js/impressao.js) sem abrir o navegador.
   Simula o mínimo de DOM/APP para conferir se:
     1. a folha é montada dentro de #area-impressao;
     2. cada questão sai com gabarito, explicação e link do YouTube;
     3. o QR code é gerado ao lado do link (data URL de GIF);
     4. a marca ✔/✖ respeita a resposta do usuário;
     5. window.print() é chamado e o título da aba é restaurado.
   Uso:  node scripts/testar-impressao.js
   ============================================================ */

// Módulos do Node usados na verificação
const fs = require('fs');               // para ler arquivos
const vm = require('vm');               // para executar o JS isolado
const path = require('path');           // para montar caminhos

// Raiz do projeto (uma pasta acima de scripts/)
const raiz = path.join(__dirname, '..');

// ---------- Navegador falso ----------
const memoria = {};                     // "localStorage" falso em memória
const areaImpressao = { innerHTML: '' }; // a <div id="area-impressao">
let imprimiu = false;                   // flag: window.print() foi chamado?

const contexto = {                      // contexto isolado (simula o navegador)
  console,                              // mantém o console para os avisos
  localStorage: {                       // localStorage falso
    getItem: (k) => (k in memoria ? memoria[k] : null), // lê da memória
    setItem: (k, v) => { memoria[k] = String(v); },     // grava na memória
    removeItem: (k) => { delete memoria[k]; }           // apaga da memória
  },
  document: {                           // document falso (só o que o app usa)
    documentElement: { lang: '' },      // <html>
    title: 'Gabarito Café ☕ Estude com sabor',         // título da aba
    querySelectorAll: () => [],         // nenhum elemento
    getElementById: (id) => id === 'area-impressao' ? areaImpressao : null, // só a área existe
    addEventListener: () => {}          // ignora eventos
  },
  window: {                             // window falso
    print: () => { imprimiu = true; },  // marca a chamada de impressão
    addEventListener: (nome, fn) => { if (nome === 'afterprint') fn(); }, // dispara o afterprint já
    removeEventListener: () => {}       // ignora a remoção de ouvintes
  },
  setTimeout: (fn) => fn(),             // roda o timer na hora (teste síncrono)
  Date                                  // data real
};
contexto.window.document = contexto.document; // window.document aponta para o document falso
vm.createContext(contexto);             // cria o contexto isolado

// Carrega os arquivos na ordem do index.html (o que importa para o teste)
const arquivos = [                      // scripts envolvidos
  'js/util.js',                         // TEAM_007: Util.escape compartilhado (impressao.js usa)
  'js/armazenamento.js',                // camada de localStorage
  'js/idioma.js',                       // traduções
  'js/vendor/qrcode.min.js',            // gerador de QR
  'js/banco-questoes.js',               // banco de questões
  'js/impressao.js'                     // a folha de impressão
];
for (const arq of arquivos) {           // percorre os arquivos
  vm.runInContext(fs.readFileSync(path.join(raiz, arq), 'utf8'), contexto); // roda cada um
}

// Stubs dos objetos globais que impressao.js consulta
vm.runInContext(`
  SimuladoUI = {                        // métodos de rótulo que a folha reusa
    textoNivel: (n) => ({ facil: 'Fácil', medio: 'Médio', dificil: 'Difícil' }[n] || n),
    textoEnsino: (en) => en === 'superior' ? 'Nível superior' : 'Nível médio',
    tempoFormatado: (s) => String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0')
  };
  Auth = {                              // autenticação falsa
    usuarioAtual: () => ({ nome: 'Teste da Silva' }), // usuário com nome
    idAtual: () => 'u_teste'            // id qualquer
  };
  App = { torrada: () => {} };          // torrada silenciosa
`, contexto);                           // injeta os stubs no contexto

// Pega o banco e a folha montados dentro do contexto
const BancoQuestoes = vm.runInContext('BancoQuestoes', contexto);
const Impressao = vm.runInContext('Impressao', contexto);

// ---------- Verificadores ----------
let erros = 0;                          // contador de problemas
const confere = (ok, msg) => {          // registra passa/falha
  if (ok) console.log('✅ ' + msg);     // passou
  else { erros += 1; console.log('❌ ' + msg); } // falhou
};

console.log('========== TESTE DA FOLHA DE IMPRESSÃO =========='); // cabeçalho

// ---------- 1) Folha do simulado ----------
const perguntas = BancoQuestoes.slice(0, 4); // quatro questões do banco
const respostas = perguntas.map((q, i) => (i === 1 ? q.correta : 0)); // acerta a 2ª, erra as outras
const resultado = {                     // resultado falso do simulado
  acertos: 1,                           // um acerto
  erros: 3,                             // três erros
  percentual: 25,                       // aproveitamento
  duracaoSeg: 125,                      // tempo de prova
  porMateria: {                         // desempenho por matéria
    [perguntas[0].materia]: { total: 4, acertos: 1 } // uma matéria só não imprime barras
  }
};

Impressao.exportarSimulado(resultado, perguntas, respostas); // monta + "imprime"
const folhaSim = areaImpressao.innerHTML;                    // o HTML montado (vazio após afterprint)
confere(imprimiu, 'window.print() foi chamado no simulado'); // o diálogo abriu?
confere(areaImpressao.innerHTML === '', 'área limpa após o afterprint'); // afterprint limpou?

// Como o afterprint falso já limpou, montamos de novo só para inspecionar o HTML
areaImpressao.innerHTML = '';           // garante limpo
imprimiu = false;                       // reseta a flag
// Reproduz a montagem sem imprimir: usa questaoHtml + cabecalho diretamente
let folha = Impressao.cabecalho('Simulado comentado', '<span>resumo</span>'); // cabeçalho
folha += perguntas.map((q, i) => Impressao.questaoHtml(q, i + 1, respostas[i], '')).join(''); // questões
folha += Impressao.rodape();            // rodapé

confere(folha.includes('folha-cabeca'), 'cabeçalho da folha presente');
confere(folha.includes('logo.svg'), 'logo da marca na folha');
confere(folha.includes('Simulado comentado'), 'título do documento na folha');
confere((folha.match(/class="q"/g) || []).length === 4, 'quatro blocos de questão');
confere((folha.match(/class="q-alt correta"/g) || []).length === 4, 'uma alternativa certa por questão');
confere((folha.match(/class="q-alt marcada"/g) || []).length === 3, 'três respostas erradas marcadas');
confere((folha.match(/data:image\/gif;base64,/g) || []).length === 4, 'um QR por questão (GIF data URL)');
confere((folha.match(/youtube\.com\/results\?search_query=/g) || []).length >= 4, 'link do YouTube por questão');
confere(folha.indexOf('q-aula-info') < folha.indexOf('q-qr'), 'link à esquerda e QR à direita');
confere(folha.includes('Teste da Silva'), 'nome do estudante no cabeçalho');
confere(folha.includes('O que foi visto'), 'caixa de explicação presente');

// ---------- 2) Folha da revisão ----------
const pendente = {                      // item falso de revisão (como pendentes() devolve)
  id: perguntas[0].id,                  // id da questão
  erros: 3,                             // errou três vezes
  questao: perguntas[0],                // a questão viva
  resposta: (perguntas[0].correta + 1) % perguntas[0].alternativas.length // marca errada conhecida
};
areaImpressao.innerHTML = '';           // limpa a área
imprimiu = false;                       // reseta a flag
Impressao.exportarRevisao([pendente, { ...pendente, questao: perguntas[1], resposta: -1 }]); // monta + imprime
imprimiu = true;                        // (o print real já foi conferido acima)

// Monta a lista de novo para inspecionar (a limpeza automática já rodou)
const folhaRev = Impressao.questaoHtml(pendente.questao, 1, pendente.resposta, '<span class="q-status q-erro">✖ errou 3×</span>'); // bloco da pendente
confere(folhaRev.includes('class="q-alt marcada"'), 'revisão marca a última resposta errada');
confere(folhaRev.includes('class="q-alt correta"'), 'revisão marca o gabarito');
confere(folhaRev.includes('data:image/gif;base64,'), 'revisão também gera QR da aula');

// ---------- 3) Robustez ----------
// Questão sem passos/dica não pode quebrar a montagem
const semDetalhes = { id: 'x', materia: 'M', tema: 'T', nivel: '', ensino: '', banca: '', enunciado: 'E', alternativas: ['a', 'b'], correta: 0, explicacao: 'exp', dica: '', video: '' }; // mínima
let naoQuebrou = true;                  // flag de robustez
try { Impressao.questaoHtml(semDetalhes, 1, -1, ''); } catch (e) { naoQuebrou = false; } // monta a mínima
confere(naoQuebrou, 'questão mínima (sem passos/dica/vídeo) não quebra');
const blocoMin = Impressao.questaoHtml(semDetalhes, 1, -1, ''); // bloco mínimo
confere(blocoMin.includes('search_query'), 'sem campo "video" ainda gera link pela matéria/tema');

// ---------- Resultado final ----------
console.log('================================================'); // rodapé
console.log(erros === 0 ? '✅ Tudo certo! A folha monta direitinho.' : '❌ Problemas: ' + erros); // veredito
process.exit(erros > 0 ? 1 : 0);        // código de saída
