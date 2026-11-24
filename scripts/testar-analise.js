/* ============================================================
   GABARITO CAFÉ — scripts/testar-analise.js
   Ferramenta de desenvolvimento: alimenta a análise de edital
   com um edital fictício (com banca, datas, valores e conteúdo
   programático) e imprime tudo o que o analisador conseguiu
   extrair, para conferir se está funcionando.
   Uso:  node scripts/testar-analise.js
   ============================================================ */

// Módulos do Node usados no teste
const fs = require('fs');               // para ler arquivos
const vm = require('vm');               // para executar o JS isolado
const path = require('path');           // para montar caminhos

// Função que carrega um arquivo JS e devolve o objeto global criado
function carregar(nomeArquivo, variavel, contexto) {  // recebe arquivo, variável e contexto
  const caminho = path.join(__dirname, '..', 'js', nomeArquivo); // resolve o caminho
  vm.runInContext(fs.readFileSync(caminho, 'utf8'), contexto); // roda o arquivo no contexto
  return vm.runInContext(variavel, contexto);           // devolve a variável global
}

// Contexto isolado compartilhado (o banco e a análise se enxergam)
const contexto = {};                    // contexto vazio
vm.createContext(contexto);             // cria o contexto

// Carrega o banco primeiro (a análise usa ele para saber quais matérias têm questões)
carregar('banco-questoes.js', 'BancoQuestoes', contexto); // banco de questões
const AnaliseEdital = carregar('analise-edital.js', 'AnaliseEdital', contexto); // análise

// Edital fictício, parecido com um edital real de prefeitura.
// TEAM_008: agora com DOIS blocos de cargos (lista numerada "1.", "2."
// — que encerrava a varredura antiga — e "Nível" dentro da linha) e
// TRÊS seções de conteúdo programático (uma comum + uma por cargo).
const editalFicticio = `
CONCURSO PÚBLICO Nº 01/2025
PREFEITURA MUNICIPAL DE CAFEZINHOS - SP

A Prefeitura Municipal de Cafezinhos torna público o concurso público para provimento de vagas,
que será organizado pela FUNDAÇÃO CARLOS CHAGAS (FCC), conforme as normas deste edital.

1. DOS CARGOS
1. Agente Administrativo - 10 vagas - R$ 2.500,00
2. Técnico em Enfermagem - 5 vagas - R$ 3.200,00
3. Professor de Educação Básica - 8 vagas - R$ 4.000,00
4. Motorista – Nível Fundamental – 3 vagas – R$ 2.100,00
5. Auxiliar de Serviços Gerais - 4 vagas - R$ 1.900,00
Total de 30 vagas, mais cadastro de reserva.

2. DOS CARGOS – NÍVEL SUPERIOR
6. Enfermeiro - 2 vagas - R$ 5.000,00
7. Médico - 1 vaga - R$ 8.000,00

3. DOS REQUISITOS
3.1 Nível Médio completo para os cargos de Agente Administrativo e Técnico em Enfermagem.
3.2 Nível Superior completo para os cargos de Professor, Enfermeiro e Médico.
3.3 Nível Fundamental completo para os cargos de Motorista e Auxiliar de Serviços Gerais.

4. DA REMUNERAÇÃO
4.1 A remuneração varia de R$ 1.900,00 a R$ 8.000,00, conforme o cargo.
4.2 A taxa de inscrição será de R$ 60,00 para nível médio.

5. DAS INSCRIÇÕES
5.1 As inscrições serão realizadas pela internet, de 10/02/2025 a 10/03/2025.
5.2 O pagamento da taxa deverá ocorrer até 12/03/2025.

6. DAS PROVAS
6.1 A prova objetiva será aplicada em 27/04/2025 e terá 40 questões de múltipla escolha.
6.2 O gabarito preliminar será divulgado em 29/04/2025.
6.3 O resultado final está previsto para 30/05/2025.
6.4 O prazo de validade do concurso é de 2 anos, prorrogável por igual período.
6.5 As provas serão aplicadas nas dependências da prefeitura, nos locais e horários do cronograma oficial divulgado no site da banca organizadora.

7. CONTEÚDO PROGRAMÁTICO COMUM A TODOS OS CARGOS
LÍNGUA PORTUGUESA: interpretação de texto; concordância verbal e nominal; crase; pontuação; regência.
MATEMÁTICA: porcentagem; regra de três; juros simples e compostos; média aritmética.
RACIOCÍNIO LÓGICO: proposições e negações; sequências lógicas; diagramas de conjuntos.
NOÇÕES DE INFORMÁTICA: planilhas eletrônicas (Excel); segurança da informação; atalhos do Windows.
LEGISLAÇÃO MUNICIPAL: Lei Orgânica do Município; Estatuto dos Servidores.

8. CONTEÚDO PROGRAMÁTICO PARA O CARGO DE TÉCNICO EM ENFERMAGEM
ANATOMIA E FISIOLOGIA HUMANA: sistemas circulatório e respiratório; sinais vitais.
CONHECIMENTOS GERAIS: saúde pública brasileira; epidemiologia básica.

9. CONTEÚDO PROGRAMÁTICO — CARGO: MOTORISTA
LEGISLAÇÃO: Código de Trânsito Brasileiro; primeiros socorros.
CONHECIMENTOS GERAIS: geografia do município; vias públicas locais.
`;

// Roda a análise no edital fictício
const r = AnaliseEdital.analisar(editalFicticio); // análise completa

// ---------- Impressão organizada do resultado ----------
console.log('========== TESTE DA ANÁLISE DE EDITAL =========='); // cabeçalho
console.log('Título: ' + r.titulo);                              // título
console.log('Texto lido: ' + r.caracteres + ' caracteres');      // tamanho
console.log('Confiança da análise: ' + r.confianca + '/100');    // nota de confiança

console.log('\nBanca organizadora: ' + (r.banca ? r.banca.rotulo : 'não identificada')); // banca

console.log('\nNúmeros do edital:');                             // seção de números
console.log('  vagas: ' + r.numeros.vagas + ' | questões: ' + r.numeros.questoes + ' | taxa: ' + r.numeros.taxa); // números
console.log('  salário: ' + r.numeros.salarioMin + ' a ' + r.numeros.salarioMax); // faixa salarial
console.log('  validade: ' + (r.numeros.validade ? r.numeros.validade.quantidade + ' ' + r.numeros.validade.unidade : 'n/d')); // validade

console.log('\nDatas:');                                         // seção de datas
const fmt = (d) => (d ? d.toLocaleDateString('pt-BR') : 'n/d');  // formata data em pt-BR
console.log('  inscrições: ' + fmt(r.datas.inscricoesInicio) + ' a ' + fmt(r.datas.inscricoesFim)); // inscrições
console.log('  prova: ' + fmt(r.datas.prova) + ' | resultado: ' + fmt(r.datas.resultado)); // prova e resultado
console.log('  datas encontradas no texto: ' + r.datas.total);   // total de datas

console.log('\nEscolaridade: ' + (r.escolaridade.join(', ') || 'n/d')); // escolaridade

console.log('\nCargos (' + r.cargos.length + '):');              // seção de cargos
r.cargos.forEach(c => console.log('  - ' + c));                  // lista cargos

// TEAM_008: programa separado por vaga (comum + por cargo)
console.log('\nProgramas por cargo (' + r.programasPorCargo.length + '):'); // seção por vaga
r.programasPorCargo.forEach(g => {                               // lista os grupos
  console.log('  > ' + (g.cargo || '(programa comum)') + ' — ' + g.materias.map(m => m.rotulo).join(', ')); // cargo + matérias
});

console.log('\nMatérias (' + r.materias.length + '):');          // seção de matérias
r.materias.forEach(m => {                                        // lista matérias
  const marca = m.temBanco ? ' [temos questões]' : '';           // marca as que têm banco
  const tópicos = m.topicos.length ? ' -> ' + m.topicos.slice(0, 3).join(' / ') : ''; // primeiros tópicos do edital
  console.log('  - ' + m.rotulo + marca + tópicos);              // linha da matéria
});

console.log('\nTrechos separados (' + r.trechos.length + '):');  // seção de trechos
r.trechos.forEach(t => console.log('  - ' + t.nome));            // lista os nomes das seções achadas
console.log('================================================'); // rodapé

// ---------- Conferências automáticas ----------
let erros = 0;                                                   // contador de falhas
const conferir = (nome, ok) => {                                 // função de conferência
  console.log((ok ? '✅ ' : '❌ ') + nome);                      // mostra o resultado
  if (!ok) erros += 1;                                           // soma as falhas
};
console.log('');                                                 // linha em branco
conferir('banca identificada (FCC)', !!r.banca && r.banca.rotulo === 'FCC');           // banca
conferir('7 cargos encontrados (todas as vagas)', r.cargos.length === 7);              // TEAM_008: nenhuma vaga perdida
conferir('cargo limpo (sem "Nível" no nome)', r.cargos.some(c => c === 'Motorista') && !r.cargos.some(c => /N[ií]vel/i.test(c))); // TEAM_008: limpeza do nome
conferir('9 matérias encontradas', r.materias.length === 9);                           // matérias (inclui Fisiologia, Atualidades, Geografia dos programas por cargo)
conferir('data da prova = 27/04/2025', !!r.datas.prova && r.datas.prova.getDate() === 27 && r.datas.prova.getMonth() === 3); // prova
conferir('total de vagas = 30', r.numeros.vagas === 30);                               // vagas
conferir('40 questões na prova', r.numeros.questoes === 40);                           // questões
conferir('validade de 2 anos', !!r.numeros.validade && r.numeros.validade.quantidade === 2); // validade
conferir('escolaridade detectada (3 níveis)', r.escolaridade.length === 3);            // escolaridade
conferir('programa com tópicos por matéria', r.programa.length >= 5);                   // programa
conferir('3 blocos de programa (comum + 2 cargos)', r.programasPorCargo.length === 3);  // TEAM_008: blocos achados
conferir('bloco comum sem cargo', r.programasPorCargo.some(g => g.cargo === null && g.materias.length >= 5)); // TEAM_008: programa comum
conferir('programa próprio do Técnico', r.programasPorCargo.some(g => g.cargo === 'Técnico em Enfermagem' && g.materias.some(m => m.rotulo === 'Fisiologia'))); // TEAM_008: cargo identificado
conferir('programa próprio do Motorista', r.programasPorCargo.some(g => g.cargo === 'Motorista' && g.materias.some(m => m.rotulo === 'Legislação'))); // TEAM_008: cargo identificado
conferir('confiança alta (>= 80)', r.confianca >= 80);                                 // confiança

// ---------- TEAM_008: segundo edital — quadro de vagas em tabela + ----------
// ---------- mais de 12 cargos (cap antigo) + programa por cargo em anexo ----
const editalProfessores = `
EDITAL Nº 02/2025 — SECRETARIA MUNICIPAL DE EDUCAÇÃO
Concurso público para provimento de cargos de Professor PEB II,
organizado pela FUNDAÇÃO PARA O VESTIBULAR (VUNESP).

QUADRO DE VAGAS
Cargo | Vagas | Remuneração
Professor de Língua Portuguesa | 12 | R$ 4.500,00
Professor de Matemática | 10 | R$ 4.500,00
Professor de Ciências | 8 | R$ 4.500,00
Professor de História | 6 | R$ 4.500,00
Professor de Geografia | 6 | R$ 4.500,00
Professor de Inglês | 4 | R$ 4.500,00
Professor de Artes | 3 | R$ 4.500,00
Professor de Educação Física | 5 | R$ 4.500,00
Professor de Biologia | 4 | R$ 4.500,00
Professor de Química | 3 | R$ 4.500,00
Professor de Física | 3 | R$ 4.500,00
Professor de Filosofia | 2 | R$ 4.500,00
Professor de Sociologia | 2 | R$ 4.500,00
Professor de Ensino Religioso | 1 | R$ 4.500,00

2. DOS REQUISITOS
2.1 Nível Superior completo em Licenciatura para todos os cargos.

3. DAS INSCRIÇÕES
3.1 As inscrições ocorrem de 05/05/2025 a 25/05/2025.

ANEXO I — CONTEÚDO PROGRAMÁTICO PARA O CARGO DE PROFESSOR DE MATEMÁTICA
MATEMÁTICA: conjuntos numéricos; funções; geometria plana.
CONHECIMENTOS PEDAGÓGICOS: currículo escolar; avaliação da aprendizagem.
`;

const r2 = AnaliseEdital.analisar(editalProfessores);            // análise do segundo edital
console.log('\n========== EDITAL 2: PROFESSORES ==========');    // cabeçalho
console.log('Cargos (' + r2.cargos.length + '): ' + r2.cargos.join(' | ')); // lista cargos
r2.programasPorCargo.forEach(g => console.log('  > ' + (g.cargo || '(comum)') + ' — ' + g.materias.map(m => m.rotulo).join(', '))); // programas
console.log('==========================================');       // rodapé

console.log('');                                                 // linha em branco
conferir('banca Vunesp identificada', !!r2.banca && r2.banca.rotulo === 'Vunesp'); // banca do 2º edital
conferir('14 cargos de professor (acima do cap antigo)', r2.cargos.length === 14); // TEAM_008: todas as vagas
conferir('cargo sem número de vagas no nome', r2.cargos.some(c => c === 'Professor de Matemática')); // TEAM_008: " | 10" limpo
conferir('"Ensino Religioso" não vira "Nível"', r2.cargos.some(c => c === 'Professor de Ensino Religioso')); // TEAM_008: ENSINO no nome do cargo não é atributo
conferir('programa do cargo Professor de Matemática', r2.programasPorCargo.some(g => g.cargo === 'Professor de Matemática' && g.materias.some(m => m.rotulo === 'Matemática'))); // TEAM_008: anexo por cargo
conferir('programa do cargo inclui Pedagogia', r2.programasPorCargo.some(g => g.cargo === 'Professor de Matemática' && g.materias.some(m => m.rotulo === 'Pedagogia'))); // TEAM_008: matéria do anexo

// Sai com erro se alguma conferência falhar
console.log(erros === 0 ? '\n✅ Análise completa funcionando!' : '\n❌ Falhas: ' + erros); // veredito
process.exit(erros > 0 ? 1 : 0);                                 // código de saída
