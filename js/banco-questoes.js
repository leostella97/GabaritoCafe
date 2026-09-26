/* ============================================================
   GABARITO CAFÉ — js/banco-questoes.js
   O coração do simulado: questões autorais, organizadas por
   matéria, com explicação, pegadinha da banca e aula no
   YouTube. Para adicionar questões novas, copie um bloco
   completo e siga o mesmo formato (veja o README).
   ============================================================ */

// Banco de questões do Gabarito Café
const BancoQuestoes = [

  /* ===================== LÍNGUA PORTUGUESA ===================== */
  {
    id: 'p01',                          // identificador único da questão
    materia: 'Língua Portuguesa',       // matéria (usada nos filtros do simulado)
    tema: 'Verbos impessoais (haver/fazer)', // assunto específico
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca cujo estilo inspirou a questão
    enunciado: 'Assinale a frase correta quanto à concordância verbal:', // texto da pergunta
    alternativas: [                     // opções de resposta
      'Fazem dois anos que estudo para concursos.',
      'Faz dois anos que estudo para concursos.',
      'Houveram muitos candidatos na prova.',
      'Haviam dias em que eu não estudava.',
      'Devem haver soluções melhores.'
    ],
    correta: 1,                         // índice da alternativa certa (começa em 0)
    explicacao: 'Os verbos "haver" (no sentido de existir) e "fazer" (indicando tempo decorrido) são impessoais: não têm sujeito e ficam sempre na 3ª pessoa do singular. Por isso o certo é "faz dois anos" e "havia muitos candidatos".', // explicação do gabarito
    dica: 'Pegadinha clássica da CESPE: "dois anos" parece sujeito, mas não é — o verbo não concorda com ele. Sempre que "fazer" indicar tempo, trave no singular.', // pegadinha da banca
    video: 'verbos impessoais haver e fazer para concurso' // busca da aula no YouTube
  },
  {
    id: 'p02',                          // identificador único
    materia: 'Língua Portuguesa',       // matéria
    tema: 'Crase',                      // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FGV',                       // banca inspiradora
    enunciado: 'Complete corretamente: "Os candidatos chegaram ___ sala de provas às 13h."', // pergunta
    alternativas: [                     // opções
      'a',
      'à',
      'há',
      'aa',
      'á'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Quem chega, chega A algum lugar (preposição pedida pelo verbo "chegar"). "Sala" pede artigo "a". Preposição a + artigo a = crase (à).', // explicação
    dica: 'A FGV ama trocar "a" por "há": "há" indica tempo passado ("há dois anos"), nunca lugar. Se dá para trocar por "ao", tem crase.', // pegadinha
    video: 'crase para concursos como usar' // busca no YouTube
  },
  {
    id: 'p03',                          // identificador único
    materia: 'Língua Portuguesa',       // matéria
    tema: 'Regência verbal (preferir)', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'Assinale a frase que segue a norma culta:', // pergunta
    alternativas: [                     // opções
      'Prefiro estudar do que assistir séries.',
      'Prefiro mais estudar que assistir séries.',
      'Prefiro estudar a assistir séries.',
      'Prefiro estudar que assistir séries.',
      'Prefiro antes estudar que assistir séries.'
    ],
    correta: 2,                         // índice da certa
    explicacao: 'O verbo "preferir" rege a preposição "a": prefere-se uma coisa A outra. Formas como "prefiro X do que Y" ou "prefiro mais X que Y" são vícios de linguagem reprovados pela norma culta.', // explicação
    dica: 'Pegadinha da FCC: "preferir mais... do que" soa natural na fala — e é exatamente aí que a banca fisga o candidato desavisado.', // pegadinha
    video: 'regência verbal preferir a concurso' // busca no YouTube
  },
  {
    id: 'p04',                          // identificador único
    materia: 'Língua Portuguesa',       // matéria
    tema: 'Uso dos porquês',            // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'Complete: "Ninguém entendeu o ___ daquela decisão."', // pergunta
    alternativas: [                     // opções
      'porque',
      'por que',
      'porquê',
      'por quê'
    ],
    correta: 2,                         // índice da certa
    explicacao: '"Porquê" (junto e com acento) é substantivo: vem acompanhado de artigo ("o porquê") e significa "motivo". "Porque" é conjunção; "por que" é preposição + pronome; "por quê" só aparece no fim de frase.', // explicação
    dica: 'Atalho de prova: antes de artigo ("o", "um") ou no fim da frase, é "porquê" substantivo. A banca confia que você vai marcar "porque" no automático.', // pegadinha
    video: 'uso dos porquês para concurso' // busca no YouTube
  },
  {
    id: 'p05',                          // identificador único
    materia: 'Língua Portuguesa',       // matéria
    tema: 'Colocação pronominal',       // assunto
    nivel: 'dificil',                   // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'Assinale a frase que obedece à norma culta:', // pergunta
    alternativas: [                     // opções
      'Me empresta o caderno, por favor?',
      'Empresta-me o caderno, por favor?',
      'Não empresta-me o caderno, por favor?',
      'Emprestaria-me o caderno?',
      'Nunca esqueça-se do edital.'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Não se inicia frase com pronome oblíquo ("me empresta" é coloquial). Depois de palavra negativa ("não"), a próclise é obrigatória: "não me empresta". Com futuro do pretérito, o correto é mesóclise: "emprestar-me-ia".', // explicação
    dica: 'A FCC e a IBFC adoram o "não + pronome": palavra negativa puxa o pronome para antes do verbo (próclise). "Nunca esqueça-se" também está errada pela mesma regra.', // pegadinha
    video: 'colocação pronominal próclise ênclise mesóclise concurso' // busca no YouTube
  },
  {
    id: 'p06',                          // identificador único
    materia: 'Língua Portuguesa',       // matéria
    tema: 'Pontuação (vírgula)',        // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'Em qual frase a vírgula está bem empregada?', // pergunta
    alternativas: [                     // opções
      'Os alunos, estudaram muito para a prova.',
      'Depois da aula, fomos tomar um café.',
      'O edital, será publicado amanhã.',
      'A prova de hoje, está muito difícil.',
      'Todos os candidatos, receberam o cartão.'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Em "b", a vírgula separa uma expressão deslocada para o início da frase (adjunto adverbial). Nas demais alternativas, a vírgula separa o sujeito do verbo — erro grave e o mais cobrado em provas.', // explicação
    dica: 'Regra de ouro: sujeito e verbo são inseparáveis. Se a frase tem vírgula entre eles, desconfie na hora — é a pegadinha número 1 de pontuação.', // pegadinha
    video: 'vírgula entre sujeito e verbo erro para concurso' // busca no YouTube
  },
  {
    id: 'p07',                          // identificador único
    materia: 'Língua Portuguesa',       // matéria
    tema: 'Interpretação de texto',     // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'Leia o trecho: "Estudar todos os dias, nem que seja por meia hora, rende mais do que virar a noite na véspera. O cérebro consolida a memória aos poucos, como um café passado lentamente: a pressa queima o grão e amarga o resultado." A ideia central do texto é:', // pergunta
    alternativas: [                     // opções
      'O café passado rápido é o mais saboroso.',
      'Estudar na véspera é a estratégia mais eficiente.',
      'A constância diária vale mais que a maratona de última hora.',
      'Memória não se relaciona com frequência de estudo.',
      'Só se aprende estudando muitas horas seguidas.'
    ],
    correta: 2,                         // índice da certa
    explicacao: 'O texto compara o estudo ao café passado devagar: a regularidade (goles diários) consolida a memória melhor do que a correria da véspera. A metáfora do café reforça a ideia de processo lento e constante.', // explicação
    dica: 'Em interpretação, desconfie de alternativas com palavras radicais ("só", "nunca", "mais", "todo"). O texto raramente é tão absoluto quanto a alternativa.', // pegadinha
    video: 'interpretação de texto para concursos dicas' // busca no YouTube
  },
  {
    id: 'p08',                          // identificador único
    materia: 'Língua Portuguesa',       // matéria
    tema: 'Concordância nominal',       // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'Complete: "Seguem ___ os documentos solicitados."', // pergunta
    alternativas: [                     // opções
      'anexo',
      'anexos',
      'anexas',
      'em anexo',
      'anexada'
    ],
    correta: 1,                         // índice da certa
    explicacao: '"Anexo" é adjetivo e concorda com o substantivo a que se refere: documentos anexos. "Em anexo" é expressão invariável, mas não se encaixa na construção pedida ("seguem em anexo" seria aceitável em registro informal, não é o padrão cobrado em prova).', // explicação
    dica: 'Pegadinha recorrente: "segue anexo" (um documento) x "seguem anexos" (vários). A banca inverte o número do substantivo para derrubar quem concorda no automático.', // pegadinha
    video: 'concordância nominal anexo incluso obrigado para concurso' // busca no YouTube
  },
  {
    id: 'p09',                          // identificador único
    materia: 'Língua Portuguesa',       // matéria
    tema: 'Ortografia (Acordo Ortográfico)', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FGV',                       // banca inspiradora
    enunciado: 'Segundo a ortografia oficial, qual grafia está correta?', // pergunta
    alternativas: [                     // opções
      'jibóia',
      'jiboia',
      'jibóya',
      'giboia',
      'jiboya'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O Acordo Ortográfico de 1990 eliminou o acento dos ditongos abertos "ei" e "oi" das palavras paroxítonas: jiboia, ideia, heroico, assembleia. A grafia com "g" ("giboia") simplesmente não existe na norma oficial.', // explicação
    dica: 'Depois do Acordo: paroxítonas com "ei"/"oi" abertos perderam o acento, mas as oxítonas mantiveram — "herói" continua acentuada. A banca mistura as duas regras.', // pegadinha
    video: 'acordo ortográfico ditongos abertos ei oi para concurso' // busca no YouTube
  },
  {
    id: 'p10',                          // identificador único
    materia: 'Língua Portuguesa',       // matéria
    tema: 'Acentuação gráfica',         // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'Assinale a palavra grafada corretamente:', // pergunta
    alternativas: [                     // opções
      'onibus',
      'ônibus',
      'onibús',
      'ônibuz',
      'ónibus'
    ],
    correta: 1,                         // índice da certa
    explicacao: '"Ônibus" é paroxítona terminada em "us" que se pronuncia como proparoxítona — e toda proparoxítona (real ou aparente) é acentuada. As demais grafias erram a posição do acento ou a letra.', // explicação
    dica: 'Regra infalível: TODA proparoxítona leva acento. Se você lê a palavra com a força na antepenúltima sílaba, acentue sem medo.', // pegadinha
    video: 'regras de acentuação gráfica para concurso' // busca no YouTube
  },

  /* ===================== MATEMÁTICA ===================== */
  {
    id: 'm01',                          // identificador único
    materia: 'Matemática',              // matéria
    tema: 'Porcentagem',                // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'Em um concurso, 12.000 candidatos se inscreveram. No dia da prova, 25% faltaram. Quantos candidatos fizeram a prova?', // pergunta
    alternativas: [                     // opções
      '3.000',
      '8.000',
      '9.000',
      '9.600',
      '10.000'
    ],
    correta: 2,                         // índice da certa
    passos: [                           // passo a passo de como resolver
      'Calcule quem faltou: 25% de 12.000 = 12.000 × 0,25 = 3.000.',
      'Subtraia dos inscritos: 12.000 − 3.000 = 9.000.'
    ],
    explicacao: 'A pergunta é sobre quem FEZ a prova, não sobre quem faltou. Dos 12.000 inscritos, 3.000 faltaram, então 9.000 compareceram.', // explicação
    dica: 'A Vunesp sempre oferece "3.000" nas alternativas — o valor dos que FALTARAM. A banca aposta que você responde a primeira conta que aparece. Leia o comando até o fim!', // pegadinha
    video: 'porcentagem para concursos como calcular' // busca no YouTube
  },
  {
    id: 'm02',                          // identificador único
    materia: 'Matemática',              // matéria
    tema: 'Regra de três composta',     // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'Uma gráfica, com 4 impressoras, produz 600 provas em 3 horas. Mantendo o ritmo, quantas provas 6 impressoras produziriam em 2 horas?', // pergunta
    alternativas: [                     // opções
      '600',
      '900',
      '450',
      '800',
      '1.200'
    ],
    correta: 0,                         // índice da certa
    passos: [                           // passo a passo
      'Monte a proporção composta: provas = 600 × (6/4) × (2/3).',
      'Impressoras: 6/4 = 1,5 (mais impressoras, mais provas — proporção direta).',
      'Tempo: 2/3 ≈ 0,667 (menos tempo, menos provas — proporção direta).',
      '600 × 1,5 × 0,667 = 600 provas.'
    ],
    explicacao: 'Com 50% mais impressoras a produção cresce 50%; com 1/3 a menos de tempo ela cai 1/3. Os dois efeitos se anulam: continuam 600 provas.', // explicação
    dica: 'Em regra de três composta, escreva cada grandeza e classifique direta/inversa ANTES de multiplicar. O erro clássico é inverter a grandeza errada — e a alternativa dessa conta errada está lá.', // pegadinha
    video: 'regra de três composta para concurso passo a passo' // busca no YouTube
  },
  {
    id: 'm03',                          // identificador único
    materia: 'Matemática',              // matéria
    tema: 'Juros simples',              // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'Um estudante aplicou R$ 1.500,00 a juros simples de 2% ao mês. Qual será o montante após 8 meses?', // pergunta
    alternativas: [                     // opções
      'R$ 1.560,00',
      'R$ 1.740,00',
      'R$ 1.800,00',
      'R$ 2.400,00',
      'R$ 1.620,00'
    ],
    correta: 1,                         // índice da certa
    passos: [                           // passo a passo
      'Aplique a fórmula dos juros simples: J = C × i × t.',
      'J = 1.500 × 0,02 × 8 = 1.500 × 0,16 = R$ 240,00.',
      'Montante: M = C + J = 1.500 + 240 = R$ 1.740,00.'
    ],
    explicacao: 'No regime simples, o juro incide sempre sobre o capital inicial: 2% de 1.500 é R$ 30,00 por mês, vezes 8 meses = R$ 240,00 de juros.', // explicação
    dica: 'Confira as unidades antes de calcular: taxa mensal com tempo em meses. A alternativa "1.800" engana quem usou 2,5% ou errou o número de meses.', // pegadinha
    video: 'juros simples para concursos fórmula' // busca no YouTube
  },
  {
    id: 'm04',                          // identificador único
    materia: 'Matemática',              // matéria
    tema: 'Juros compostos',            // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'R$ 10.000,00 aplicados a juros compostos de 10% ao ano renderão, em 2 anos, um montante de:', // pergunta
    alternativas: [                     // opções
      'R$ 12.000,00',
      'R$ 12.100,00',
      'R$ 12.200,00',
      'R$ 11.000,00',
      'R$ 12.010,00'
    ],
    correta: 1,                         // índice da certa
    passos: [                           // passo a passo
      'Aplique a fórmula do montante composto: M = C × (1 + i)^t.',
      'M = 10.000 × (1,10)² = 10.000 × 1,21.',
      'M = R$ 12.100,00.'
    ],
    explicacao: 'No regime composto, o juro do 2º ano incide sobre o montante do 1º: 10.000 → 11.000 → 12.100. A alternativa "12.000" é a armadilha de quem calculou juros simples.', // explicação
    dica: 'Quando a banca mistura regimes na mesma questão, ela quer que você confunda. Tempo maior que 1 período + "juros compostos" no enunciado = eleve à potência, não multiplique.', // pegadinha
    video: 'juros compostos para concurso fórmula montante' // busca no YouTube
  },
  {
    id: 'm05',                          // identificador único
    materia: 'Matemática',              // matéria
    tema: 'Média aritmética',           // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'As notas de um candidato em 4 provas foram 7, 8, 9 e 10. A média aritmética dessas notas é:', // pergunta
    alternativas: [                     // opções
      '8,0',
      '8,5',
      '8,75',
      '9,0',
      '8,25'
    ],
    correta: 1,                         // índice da certa
    passos: [                           // passo a passo
      'Some as notas: 7 + 8 + 9 + 10 = 34.',
      'Divida pela quantidade de provas: 34 ÷ 4 = 8,5.'
    ],
    explicacao: 'Média aritmética é a soma de todos os valores dividida pela quantidade de valores. 34 ÷ 4 = 8,5.', // explicação
    dica: 'Média não é a "nota do meio" (isso é mediana). A banca troca os conceitos de propósito e ainda oferece a mediana nas alternativas.', // pegadinha
    video: 'média aritmética para concursos exercícios' // busca no YouTube
  },
  {
    id: 'm06',                          // identificador único
    materia: 'Matemática',              // matéria
    tema: 'Equação do 1º grau',         // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'Resolva a equação: 3(x − 2) = 2x + 4', // pergunta
    alternativas: [                     // opções
      'x = 10',
      'x = 8',
      'x = 6',
      'x = 4',
      'x = 2'
    ],
    correta: 0,                         // índice da certa
    passos: [                           // passo a passo
      'Aplique a distributiva: 3x − 6 = 2x + 4.',
      'Leve os termos com x para um lado e os números para o outro: 3x − 2x = 4 + 6.',
      'x = 10.'
    ],
    explicacao: 'O erro campeão é esquecer de distribuir o 3 para o "−2", ficando "3x − 2 = 2x + 4", que daria x = 6 — e essa resposta está entre as alternativas.', // explicação
    dica: 'A banca coloca exatamente o resultado da conta errada (sem distributiva) nas alternativas. Distribua o número para TODOS os termos do parêntese, com o sinal.', // pegadinha
    video: 'equação do primeiro grau para concurso resolvida' // busca no YouTube
  },
  {
    id: 'm07',                          // identificador único
    materia: 'Matemática',              // matéria
    tema: 'Sistema de equações',        // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'No sistema abaixo, o valor de x é: { x + y = 20 ; x − y = 8 }', // pergunta
    alternativas: [                     // opções
      '12',
      '14',
      '16',
      '8',
      '10'
    ],
    correta: 1,                         // índice da certa
    passos: [                           // passo a passo
      'Some as duas equações (método da adição): (x + y) + (x − y) = 20 + 8.',
      'O y desaparece: 2x = 28.',
      'x = 14 (e, substituindo, y = 6).'
    ],
    explicacao: 'Somando as equações, o "+y" e o "−y" se cancelam, sobrando 2x = 28, logo x = 14. A alternativa "12" é o valor de y disfarçado.', // explicação
    dica: 'A banca adora inverter x com y: resolve o sistema e oferece o valor da OUTRA incógnita como alternativa. Depois de achar x, confira qual incógnita a pergunta pede.', // pegadinha
    video: 'sistema de equações método da adição para concurso' // busca no YouTube
  },
  {
    id: 'm08',                          // identificador único
    materia: 'Matemática',              // matéria
    tema: 'Razão e proporção',          // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'Uma sociedade divide R$ 150,00 entre dois sócios na razão 2 : 3. Quanto recebe o sócio com a parte maior?', // pergunta
    alternativas: [                     // opções
      'R$ 60,00',
      'R$ 75,00',
      'R$ 90,00',
      'R$ 100,00',
      'R$ 120,00'
    ],
    correta: 2,                         // índice da certa
    passos: [                           // passo a passo
      'Some as partes da razão: 2 + 3 = 5 partes no total.',
      'Calcule o valor de uma parte: 150 ÷ 5 = R$ 30,00.',
      'Parte maior: 3 × 30 = R$ 90,00.'
    ],
    explicacao: 'A razão 2:3 divide o total em 5 partes iguais de R$ 30,00. O sócio maior fica com 3 partes: R$ 90,00.', // explicação
    dica: 'A pegadinha clássica é dividir por 3 (o maior número da razão) em vez de somar as partes. "150 × 2/3 = 100" — e lá está a alternativa 100 esperando.', // pegadinha
    video: 'razão e proporção divisão proporcional para concurso' // busca no YouTube
  },
  {
    id: 'm09',                          // identificador único
    materia: 'Matemática',              // matéria
    tema: 'Área de figuras planas',     // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'Uma sala retangular tem 6 m de comprimento por 4,5 m de largura. A área dessa sala é:', // pergunta
    alternativas: [                     // opções
      '21 m²',
      '24 m²',
      '27 m²',
      '30 m²',
      '25,5 m²'
    ],
    correta: 2,                         // índice da certa
    passos: [                           // passo a passo
      'Área do retângulo = comprimento × largura.',
      '6 × 4,5 = 27 m².'
    ],
    explicacao: 'A área é o produto das duas dimensões: 6 × 4,5 = 27 m². Perímetro (soma dos lados) seria 6 + 4,5 + 6 + 4,5 = 21 m — e a alternativa "21" está lá de propósito.', // explicação
    dica: 'Perímetro não é área! A banca põe o perímetro entre as alternativas para pegar quem confunde os dois conceitos na pressa.', // pegadinha
    video: 'área do retângulo exercícios para concurso' // busca no YouTube
  },
  {
    id: 'm10',                          // identificador único
    materia: 'Matemática',              // matéria
    tema: 'Progressão aritmética',      // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'Na progressão aritmética 2, 5, 8, 11, ..., o 12º termo é:', // pergunta
    alternativas: [                     // opções
      '32',
      '33',
      '34',
      '35',
      '36'
    ],
    correta: 3,                         // índice da certa
    passos: [                           // passo a passo
      'Calcule a razão: 5 − 2 = 3.',
      'Use a fórmula do termo geral: a(n) = a1 + (n − 1) × r.',
      'a(12) = 2 + (12 − 1) × 3 = 2 + 33 = 35.'
    ],
    explicacao: 'Com razão 3, o termo geral é a(n) = 2 + (n − 1)·3. Para n = 12: 2 + 33 = 35.', // explicação
    dica: 'O erro clássico é usar "n" em vez de "n − 1" na fórmula (2 + 12×3 = 38). A banca coloca a conta errada nas alternativas — use a fórmula com calma.', // pegadinha
    video: 'progressão aritmética termo geral para concurso' // busca no YouTube
  },

  /* ===================== RACIOCÍNIO LÓGICO ===================== */
  {
    id: 'r01',                          // identificador único
    materia: 'Raciocínio Lógico',       // matéria
    tema: 'Negação de proposições',     // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'A negação lógica de "Todo candidato estuda" é:', // pergunta
    alternativas: [                     // opções
      'Nenhum candidato estuda.',
      'Todo candidato não estuda.',
      'Algum candidato não estuda.',
      'Algum candidato estuda.',
      'Pelo menos um candidato estuda.'
    ],
    correta: 2,                         // índice da certa
    explicacao: 'A negação do TODO é o ALGUM NÃO: basta existir um único candidato que não estuda para a afirmação original ser falsa. "Nenhum estuda" é a negação de "algum estuda", não de "todo".', // explicação
    dica: 'Pegadinha CESPE clássica: a negação de "todo" NUNCA é "nenhum" — é "algum não". Grave o par: todo ↔ algum não.', // pegadinha
    video: 'negação de proposições todo algum nenhum raciocínio lógico' // busca no YouTube
  },
  {
    id: 'r02',                          // identificador único
    materia: 'Raciocínio Lógico',       // matéria
    tema: 'Equivalência lógica (contrapositiva)', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FGV',                       // banca inspiradora
    enunciado: 'A proposição logicamente equivalente a "Se chove, então a rua molha" é:', // pergunta
    alternativas: [                     // opções
      'Se a rua molha, então chove.',
      'Se não chove, então a rua não molha.',
      'Se a rua não molha, então não chove.',
      'Chove e a rua não molha.',
      'Não chove e a rua molha.'
    ],
    correta: 2,                         // índice da certa
    explicacao: 'A contrapositiva (inverte a ordem e nega os dois lados) é equivalente ao condicional: "Se não B, então não A". Se a rua não molhou, é impossível ter chovido.', // explicação
    dica: 'A FGV ama a contrapositiva. As duas armadilhas: inverter sem negar (alternativa a) e negar sem inverter (alternativa b) — nenhuma das duas equivale ao condicional.', // pegadinha
    video: 'equivalência lógica contrapositiva se então para concurso' // busca no YouTube
  },
  {
    id: 'r03',                          // identificador único
    materia: 'Raciocínio Lógico',       // matéria
    tema: 'Leis de De Morgan',          // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'A negação de "Estudo português e estudo matemática" é:', // pergunta
    alternativas: [                     // opções
      'Não estudo português e não estudo matemática.',
      'Não estudo português ou não estudo matemática.',
      'Estudo português ou estudo matemática.',
      'Não estudo português e estudo matemática.',
      'Estudo português ou não estudo matemática.'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Pela Lei de De Morgan, a negação de "p e q" é "não p OU não q": basta uma das partes falhar para o "e" ser falso.', // explicação
    dica: 'Na negação, o "e" vira "ou" e cada parte é negada. Quem troca só as negações e mantém o "e" (alternativa a) cai na pegadinha mais repetida da lógica.', // pegadinha
    video: 'leis de de morgan negação e ou raciocínio lógico' // busca no YouTube
  },
  {
    id: 'r04',                          // identificador único
    materia: 'Raciocínio Lógico',       // matéria
    tema: 'Sequências lógicas',         // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'Na sequência 2, 6, 12, 20, 30, ..., o próximo termo é:', // pergunta
    alternativas: [                     // opções
      '36',
      '40',
      '42',
      '44',
      '48'
    ],
    correta: 2,                         // índice da certa
    passos: [                           // passo a passo
      'Observe as diferenças entre termos seguidos: 4, 6, 8, 10.',
      'As diferenças crescem de 2 em 2: a próxima será 12.',
      '30 + 12 = 42.'
    ],
    explicacao: 'Os termos seguem o padrão n(n+1): 1×2, 2×3, 3×4, 4×5, 5×6... O próximo é 6×7 = 42.', // explicação
    dica: 'Quando a sequência não é PA nem PG, olhe as DIFERENÇAS entre os termos. A banca conta com você tentando multiplicar tudo por 3 ou somar 4 direto.', // pegadinha
    video: 'sequências lógicas para concurso padrão diferenças' // busca no YouTube
  },
  {
    id: 'r05',                          // identificador único
    materia: 'Raciocínio Lógico',       // matéria
    tema: 'Verdades e mentiras',        // assunto
    nivel: 'dificil',                   // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FGV',                       // banca inspiradora
    enunciado: 'Ana, Bia e Caio fizeram uma prova. Apenas UM deles fala a verdade. Ana diz: "Bia mentiu." Bia diz: "Eu não menti." Caio diz: "Ana mentiu." Quem fala a verdade?', // pergunta
    alternativas: [                     // opções
      'Ana',
      'Bia',
      'Caio',
      'Ninguém',
      'Impossível determinar'
    ],
    correta: 0,                         // índice da certa
    passos: [                           // passo a passo
      'Teste a hipótese "Ana diz a verdade": então Bia mentiu (frase de Bia é falsa) e Caio mentiu ("Ana mentiu" é falso). Exatamente uma verdade. ✓',
      'Teste "Bia diz a verdade": então "Bia mentiu" (frase de Ana) é falso, e "Ana mentiu" (Caio) seria verdadeiro. Duas verdades. ✗',
      'Teste "Caio diz a verdade": "Ana mentiu" é verdadeiro → "Bia mentiu" é falso → Bia falou a verdade. Duas verdades. ✗'
    ],
    explicacao: 'Testando cada hipótese, somente "Ana diz a verdade" se sustenta com exatamente um único verdadeiro, como o enunciado exige.', // explicação
    dica: 'Método infalível: suponha que o primeiro fala a verdade e veja se o resto fecha. Se quebrar, troque a hipótese. Nunca tente resolver "de cabeça" — a banca adora frases que se referem umas às outras.', // pegadinha
    video: 'questões de verdades e mentiras raciocínio lógico como resolver' // busca no YouTube
  },
  {
    id: 'r06',                          // identificador único
    materia: 'Raciocínio Lógico',       // matéria
    tema: 'Silogismos e diagramas',     // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'Considere as premissas: "Todo servidor público é responsável" e "João é servidor público". Logo:', // pergunta
    alternativas: [                     // opções
      'João pode não ser responsável.',
      'Todo responsável é servidor público.',
      'João é responsável.',
      'João não é responsável.',
      'Nada se pode concluir.'
    ],
    correta: 2,                         // índice da certa
    explicacao: 'É um silogismo válido: se a primeira premissa cobre todo servidor e João é servidor, ele está dentro do conjunto dos responsáveis. Desenhe: círculo "servidores" dentro do círculo "responsáveis", e João dentro de "servidores".', // explicação
    dica: 'A alternativa (b) inverte a afirmação: "todo servidor é responsável" NÃO implica "todo responsável é servidor". A inversão indevida é a pegadinha clássica da banca.', // pegadinha
    video: 'silogismo lógico diagramas para concurso' // busca no YouTube
  },
  {
    id: 'r07',                          // identificador único
    materia: 'Raciocínio Lógico',       // matéria
    tema: 'Princípio multiplicativo',   // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'Com 5 camisetas e 3 bermudas diferentes, quantas combinações de roupa é possível montar?', // pergunta
    alternativas: [                     // opções
      '8',
      '10',
      '12',
      '15',
      '30'
    ],
    correta: 3,                         // índice da certa
    passos: [                           // passo a passo
      'Cada camiseta pode combinar com cada uma das 3 bermudas.',
      'Total: 5 camisetas × 3 bermudas = 15 combinações.'
    ],
    explicacao: 'Pelo princípio multiplicativo, escolhas independentes se multiplicam: 5 × 3 = 15.', // explicação
    dica: 'A alternativa "8" (5+3) é a pegadinha da soma. Regra: "combinações" → multiplica; "ou um ou outro" → soma. A banca troca os operadores de propósito.', // pegadinha
    video: 'princípio multiplicativo contagem para concurso' // busca no YouTube
  },
  {
    id: 'r08',                          // identificador único
    materia: 'Raciocínio Lógico',       // matéria
    tema: 'Ordenação',                  // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'Ana é mais alta que Bia. Bia é mais alta que Caio. Quem é a pessoa mais baixa?', // pergunta
    alternativas: [                     // opções
      'Ana',
      'Bia',
      'Caio',
      'Ana e Bia empatam',
      'Não dá para saber'
    ],
    correta: 2,                         // índice da certa
    explicacao: 'Encadeando as comparações: Ana > Bia > Caio. Caio fica no fim da fila, portanto é o mais baixo.', // explicação
    dica: 'Questão de ordenação: escreva a "fila" com os sinais (A > B > C) antes de responder. A banca conta com você embaralhando a ordem na pressa.', // pegadinha
    video: 'questões de ordenação raciocínio lógico para concurso' // busca no YouTube
  },

  /* ===================== INFORMÁTICA ===================== */
  {
    id: 'i01',                          // identificador único
    materia: 'Informática',             // matéria
    tema: 'Excel — função MÉDIA',       // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'No Excel, para calcular a média dos valores do intervalo A1 até A10, utiliza-se a fórmula:', // pergunta
    alternativas: [                     // opções
      '=SOMA(A1:A10)/MÉDIA',
      '=MÉDIA(A1:A10)',
      '=MED(A1:A10)',
      '=MÉDIA(A1;A10)',
      '=AVERAGE(A1:A10)'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A função MÉDIA recebe um intervalo (com dois-pontos) e devolve a média aritmética. "AVERAGE" é o nome em inglês, que não vale no Excel em português. Ponto e vírgula (alternativa d) separaria apenas dois valores, não o intervalo.', // explicação
    dica: 'A IBFC adora "AVERAGE" para pegar quem decora em inglês, e ";" no lugar de ":" para pegar quem não domina intervalo. Dois-pontos = intervalo.', // pegadinha
    video: 'função média no excel para concurso' // busca no YouTube
  },
  {
    id: 'i02',                          // identificador único
    materia: 'Informática',             // matéria
    tema: 'Excel — atalhos',            // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'No Excel, o atalho de teclado que insere a SOMA automática (AutoSoma) é:', // pergunta
    alternativas: [                     // opções
      'Ctrl + S',
      'Alt + =',
      'Ctrl + =',
      'Shift + =',
      'Alt + S'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Alt + = insere =SOMA() automaticamente sobre as células vizinhas. É o atalho mais cobrado em provas de informática junto com os de copiar/colar.', // explicação
    dica: 'Ctrl + = insere célula; Alt + = soma. A banca troca Ctrl por Alt e Shift entre as alternativas de propósito — decore o par exato.', // pegadinha
    video: 'atalhos do excel para concursos autosoma' // busca no YouTube
  },
  {
    id: 'i03',                          // identificador único
    materia: 'Informática',             // matéria
    tema: 'Word em português — atalhos', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'No Word em português (padrão brasileiro), o atalho Ctrl + B serve para:', // pergunta
    alternativas: [                     // opções
      'Deixar o texto em negrito',
      'Salvar o documento',
      'Imprimir o documento',
      'Copiar o texto',
      'Fechar o programa'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'No Word em português os atalhos seguem os nomes em português: Ctrl + B = Salvar (B de "salvar" na localização brasileira), Ctrl + N = Negrito, Ctrl + I = Itálico, Ctrl + S = Sublinhado. No Word em inglês, Ctrl+B é Bold — e é aí que a banca pega geral.', // explicação
    dica: 'Pegadinha clássica: o Word em português NÃO usa o atalho americano. Negrito = Ctrl+N, Itálico = Ctrl+I, Sublinhado = Ctrl+S, Salvar = Ctrl+B. Grave essa troca!', // pegadinha
    video: 'atalhos do word em português para concurso' // busca no YouTube
  },
  {
    id: 'i04',                          // identificador único
    materia: 'Informática',             // matéria
    tema: 'Windows — atalhos',          // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'No Windows, o atalho Ctrl + Z serve para:', // pergunta
    alternativas: [                     // opções
      'Desfazer a última ação',
      'Refazer a última ação',
      'Recortar o item selecionado',
      'Fechar a janela atual',
      'Salvar o arquivo'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'Ctrl + Z desfaz a última ação em praticamente todos os programas. Refazer é Ctrl + Y; recortar é Ctrl + X; fechar janela é Alt + F4.', // explicação
    dica: 'A banca inverte o par: Ctrl+Z desfaz, Ctrl+Y refaz. E cuidado com o Ctrl+X (recortar) — as letras Z, Y e X são trocadas entre as alternativas de propósito.', // pegadinha
    video: 'atalhos do windows para concurso' // busca no YouTube
  },
  {
    id: 'i05',                          // identificador único
    materia: 'Informática',             // matéria
    tema: 'Segurança — phishing',       // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'Phishing é:', // pergunta
    alternativas: [                     // opções
      'Um antivírus gratuito',
      'Golpe em que criminosos imitam bancos e órgãos para roubar seus dados',
      'Um tipo de backup na nuvem',
      'Um vírus que apaga arquivos',
      'Uma técnica de criptografia'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Phishing ("pescaria") é o golpe da mensagem falsa: e-mail ou SMS imitando banco, loja ou governo para fisgar senhas e dados, geralmente com um link para um site falso.', // explicação
    dica: 'Pegadinha de prova: phishing não é vírus — é engenharia social. A vítima entrega os dados de boa vontade, achando que fala com o banco. O alvo é você, não a máquina.', // pegadinha
    video: 'o que é phishing segurança da informação para concurso' // busca no YouTube
  },
  {
    id: 'i06',                          // identificador único
    materia: 'Informática',             // matéria
    tema: 'Backup',                     // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'Backup é:', // pergunta
    alternativas: [                     // opções
      'Programa que acelera o computador',
      'Cópia de segurança dos dados',
      'Atualização do sistema operacional',
      'Limpeza de arquivos temporários',
      'Um tipo de senha forte'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Backup é a cópia dos seus dados guardada em outro lugar (HD externo, nuvem etc.), para permitir a recuperação caso o original se perca ou seja corrompido.', // explicação
    dica: 'A banca confunde backup com formatação, antivírus e atualização. Backup = cópia de segurança. Só isso — e é o suficiente para a questão inteira.', // pegadinha
    video: 'o que é backup para concurso' // busca no YouTube
  },
  {
    id: 'i07',                          // identificador único
    materia: 'Informática',             // matéria
    tema: 'Hardware — memória RAM',     // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'Sobre a memória RAM, é correto afirmar:', // pergunta
    alternativas: [                     // opções
      'Guarda os dados mesmo com o computador desligado',
      'É memória volátil: perde o conteúdo ao desligar',
      'É mais lenta que o disco rígido',
      'Armazena apenas o sistema operacional',
      'É a mesma coisa que SSD'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A RAM é a memória de trabalho: rápida e volátil (some ao desligar). Quem guarda dados permanentemente é o armazenamento (HD/SSD).', // explicação
    dica: 'Volátil = some ao desligar. A banca troca RAM por ROM (que é permanente) nas alternativas — fique atento ao par RAM/ROM e RAM/SSD.', // pegadinha
    video: 'memória ram e rom diferença para concurso' // busca no YouTube
  },
  {
    id: 'i08',                          // identificador único
    materia: 'Informática',             // matéria
    tema: 'Navegação anônima',          // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'Sobre a navegação anônima (modo privado) do navegador, é correto dizer:', // pergunta
    alternativas: [                     // opções
      'Esconde sua navegação do provedor de internet',
      'Não salva histórico e cookies no aparelho, mas o provedor ainda enxerga o tráfego',
      'Deixa o computador imune a vírus',
      'Substitui o uso de antivírus',
      'Torna sua conexão criptografada automaticamente'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O modo anônimo só evita gravar histórico/cookies no dispositivo. O provedor, o site visitado e a rede (trabalho, escola) continuam vendo o tráfego.', // explicação
    dica: 'Pegadinha recorrente: anônimo ≠ invisível. A banca espera que você ache que o modo privado esconde tudo — ele esconde só do histórico local.', // pegadinha
    video: 'modo anônimo do navegador como funciona para concurso' // busca no YouTube
  },

  /* ===================== DIREITO CONSTITUCIONAL ===================== */
  {
    id: 'c01',                          // identificador único
    materia: 'Direito Constitucional',  // matéria
    tema: 'Art. 5º — inviolabilidade do domicílio', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'Conforme o art. 5º da Constituição, pode-se entrar na casa de alguém sem o consentimento do morador:', // pergunta
    alternativas: [                     // opções
      'A qualquer hora, desde que com ordem judicial',
      'Somente em flagrante delito, desastre, para prestar socorro ou, durante o dia, por ordem judicial',
      'Somente com ordem judicial, a qualquer hora do dia ou da noite',
      'Sempre que o policial julgar necessário',
      'Apenas em flagrante delito'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A casa é asilo inviolável. As exceções do texto constitucional: flagrante delito, desastre e socorro (a qualquer hora) e determinação judicial (apenas durante o dia).', // explicação
    dica: 'A CESPE cobra a literalidade: "durante o dia" vale SÓ para a ordem judicial. Nas outras hipóteses não há restrição de horário — e a banca inverte exatamente isso.', // pegadinha
    video: 'artigo 5 constituição inviolabilidade do domicílio para concurso' // busca no YouTube
  },
  {
    id: 'c02',                          // identificador único
    materia: 'Direito Constitucional',  // matéria
    tema: 'Remédios constitucionais — Habeas Corpus', // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'O Habeas Corpus é o remédio constitucional que protege:', // pergunta
    alternativas: [                     // opções
      'O direito de resposta',
      'A liberdade de locomoção',
      'O acesso a informações pessoais',
      'Qualquer direito líquido e certo',
      'O patrimônio público'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O HC protege o direito de ir e vir, sempre que alguém sofrer ou se vir ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder. É gratuito e pode ser impetrado por qualquer pessoa.', // explicação
    dica: 'Troca de rótulos é a pegadinha clássica: HC = locomoção; Mandado de Segurança = direito líquido e certo; Habeas Data = dados pessoais. Não troque os remédios!', // pegadinha
    video: 'habeas corpus o que é remédios constitucionais para concurso' // busca no YouTube
  },
  {
    id: 'c03',                          // identificador único
    materia: 'Direito Constitucional',  // matéria
    tema: 'Remédios constitucionais — Mandado de Segurança', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FGV',                       // banca inspiradora
    enunciado: 'Cabe Mandado de Segurança para proteger:', // pergunta
    alternativas: [                     // opções
      'Qualquer direito, mesmo que incerto',
      'Direito líquido e certo, não amparado por habeas corpus ou habeas data',
      'Apenas a liberdade de locomoção',
      'Exclusivamente os direitos políticos',
      'Somente o patrimônio público'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O MS protege direito líquido e certo (comprovado de plano, sem precisar de dilação probatória) quando o responsável pela ilegalidade for autoridade pública ou agente no exercício de atribuições do poder público.', // explicação
    dica: 'Direito "líquido e certo" é aquele que dá para provar com documentos na hora. A banca oferece "direito incerto" nas alternativas para pegar o distraído.', // pegadinha
    video: 'mandado de segurança direito líquido e certo para concurso' // busca no YouTube
  },
  {
    id: 'c04',                          // identificador único
    materia: 'Direito Constitucional',  // matéria
    tema: 'Nacionalidade',              // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'NÃO será brasileiro nato:', // pergunta
    alternativas: [                     // opções
      'O nascido no Brasil, filho de brasileiros',
      'O nascido no Brasil, filho de estrangeiros, se estes estiverem a serviço de seu país',
      'O nascido no Brasil, filho de estrangeiros residentes no país',
      'O nascido no estrangeiro, de pai brasileiro a serviço do Brasil',
      'O nascido no Brasil, filho de estrangeiros que moram aqui há anos'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Critério do jus soli: nasceu no Brasil = nato, EXCETO se os pais estrangeiros estiverem a serviço do país deles. Quem nasce no exterior de brasileiro a serviço do Brasil também é nato (critério funcional).', // explicação
    dica: 'A exceção é a questão: "a serviço do SEU país" (o deles) tira a nacionalidade; "a serviço do Brasil" garante. A banca troca uma preposição e muda o gabarito.', // pegadinha
    video: 'nacionalidade brasileiro nato naturalizado para concurso' // busca no YouTube
  },
  {
    id: 'c05',                          // identificador único
    materia: 'Direito Constitucional',  // matéria
    tema: 'Art. 37 — princípios da Administração', // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'São princípios expressos da Administração Pública no art. 37 da Constituição:', // pergunta
    alternativas: [                     // opções
      'Legalidade, impessoalidade, moralidade, publicidade e eficiência',
      'Legalidade, pessoalidade, moralidade, propaganda e eficácia',
      'Liberdade, igualdade, fraternidade, segurança e eficiência',
      'Legalidade, oportunidade, conveniência e eficiência',
      'Moralidade, publicidade, razoabilidade e proporcionalidade'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'O famoso LIMPE: Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência (esta última incluída pela EC 19/98).', // explicação
    dica: 'A banca troca "impessoalidade" por "pessoalidade" e "publicidade" por "propaganda". Propaganda pessoal do agente é justamente o que a impessoalidade proíbe.', // pegadinha
    video: 'princípios da administração pública artigo 37 LIMPE para concurso' // busca no YouTube
  },
  {
    id: 'c06',                          // identificador único
    materia: 'Direito Constitucional',  // matéria
    tema: 'Art. 6º — direitos sociais', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'Qual alternativa NÃO está entre os direitos sociais do art. 6º da Constituição?', // pergunta
    alternativas: [                     // opções
      'Educação',
      'Saúde',
      'Moradia',
      'Turismo',
      'Lazer'
    ],
    correta: 3,                         // índice da certa
    explicacao: 'O art. 6º lista: educação, saúde, alimentação, trabalho, moradia, transporte, lazer, segurança, previdência social, proteção à maternidade e à infância e assistência aos desamparados. Turismo não está lá.', // explicação
    dica: 'Questão de literalidade: a banca coloca palavras "do bem" que não estão no texto (turismo, cultura). Só vale o que está escrito no artigo.', // pegadinha
    video: 'artigo 6 direitos sociais constituição para concurso' // busca no YouTube
  },
  {
    id: 'c07',                          // identificador único
    materia: 'Direito Constitucional',  // matéria
    tema: 'Emenda à Constituição',      // assunto
    nivel: 'dificil',                   // dificuldade
    ensino: 'superior',              // nível do concurso
    banca: 'FGV',                       // banca inspiradora
    enunciado: 'Uma proposta de emenda à Constituição precisa ser aprovada:', // pergunta
    alternativas: [                     // opções
      'Em turno único, por maioria simples, no Congresso',
      'Em dois turnos, por três quintos dos votos, em cada Casa do Congresso',
      'Em dois turnos, por maioria absoluta, apenas no Senado',
      'Por referendo popular',
      'Por dois terços da Câmara dos Deputados apenas'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Art. 60, §2º da CF: a PEC é discutida e votada em cada Casa do Congresso, em dois turnos, considerando-se aprovada com 3/5 dos votos dos respectivos membros.', // explicação
    dica: 'Números que caem: 3/5 (60%), dois turnos, duas Casas. A banca oferece "2/3" e "maioria simples" para confundir — os 2/3 valem para outras situações.', // pegadinha
    video: 'emenda constitucional artigo 60 quórum para concurso' // busca no YouTube
  },

  /* ===================== DIREITO ADMINISTRATIVO ===================== */
  {
    id: 'a01',                          // identificador único
    materia: 'Direito Administrativo',  // matéria
    tema: 'Atributos do ato administrativo', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'superior',              // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'NÃO é atributo do ato administrativo:', // pergunta
    alternativas: [                     // opções
      'Presunção de legitimidade',
      'Imperatividade',
      'Autoexecutoriedade',
      'Onerosidade',
      'Tipicidade'
    ],
    correta: 3,                         // índice da certa
    explicacao: 'Os atributos clássicos são: presunção de legitimidade (atos nascem válidos), imperatividade (se impõem), autoexecutoriedade (a própria Administração executa) e tipicidade (formas previstas em lei). Onerosidade não é atributo do ato.', // explicação
    dica: 'A banca mistura atributo de ato com característica de contrato (onerosidade é dos contratos administrativos). Ato ≠ contrato — fique atento ao contexto.', // pegadinha
    video: 'atributos do ato administrativo para concurso' // busca no YouTube
  },
  {
    id: 'a02',                          // identificador único
    materia: 'Direito Administrativo',  // matéria
    tema: 'Poder de polícia',           // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'superior',              // nível do concurso
    banca: 'FGV',                       // banca inspiradora
    enunciado: 'Poder de polícia é a atividade pela qual a Administração:', // pergunta
    alternativas: [                     // opções
      'Pune servidores infratores',
      'Condiciona e restringe direitos em favor do interesse público',
      'Organiza seus órgãos internos',
      'Julga recursos administrativos',
      'Edita normas gerais e abstratas'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Poder de polícia limita liberdades e direitos individuais em prol da coletividade: fiscalização, alvará, multa de trânsito, interdição de estabelecimento irregular.', // explicação
    dica: 'Poder de polícia ≠ poder disciplinar (pune servidor) ≠ poder hierárquico (organiza internamente). A banca embaralha esses três o tempo todo.', // pegadinha
    video: 'poder de polícia administrativo conceito para concurso' // busca no YouTube
  },
  {
    id: 'a03',                          // identificador único
    materia: 'Direito Administrativo',  // matéria
    tema: 'Administração indireta',     // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'superior',              // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'Entre as entidades abaixo, a que possui personalidade jurídica de direito PRIVADO é:', // pergunta
    alternativas: [                     // opções
      'Autarquia',
      'Empresa pública',
      'Órgão público',
      'Fundação pública de direito público',
      'Ministério'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Empresa pública (assim como a sociedade de economia mista) tem personalidade de direito privado, mesmo pertencendo ao Estado. Autarquia e fundação pública de direito público são de direito público. Órgão nem personalidade jurídica tem.', // explicação
    dica: 'Pegadinha recorrente: órgão público não tem personalidade jurídica (não pode ser réu em juízo). A banca inclui "órgão" nas alternativas para fisgar.', // pegadinha
    video: 'administração indireta autarquia empresa pública para concurso' // busca no YouTube
  },
  {
    id: 'a04',                          // identificador único
    materia: 'Direito Administrativo',  // matéria
    tema: 'Responsabilidade civil do Estado', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'superior',              // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'A responsabilidade civil do Estado pelos danos causados por seus agentes é, em regra:', // pergunta
    alternativas: [                     // opções
      'Subjetiva: exige prova de culpa do Estado',
      'Objetiva: independe de culpa, bastando o nexo entre conduta e dano',
      'Inexistente no direito brasileiro',
      'Restrita a atos legislativos',
      'Limitada a danos morais'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Art. 37, §6º da CF: as pessoas jurídicas de direito público (e as de direito privado prestadoras de serviço público) respondem objetivamente pelos danos de seus agentes. O Estado pode cobrar do agente depois (ação de regresso), se houve dolo ou culpa.', // explicação
    dica: 'Objetiva = não precisa provar culpa do Estado. Subjetiva = precisa. A banca troca os adjetivos nas alternativas — grave a diferença.', // pegadinha
    video: 'responsabilidade civil do estado artigo 37 para concurso' // busca no YouTube
  },
  {
    id: 'a05',                          // identificador único
    materia: 'Direito Administrativo',  // matéria
    tema: 'Licitações (Lei 14.133/2021)', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'superior',              // nível do concurso
    banca: 'FGV',                       // banca inspiradora
    enunciado: 'Segundo a Lei 14.133/2021 (nova Lei de Licitações), NÃO é uma modalidade de licitação:', // pergunta
    alternativas: [                     // opções
      'Pregão',
      'Concorrência',
      'Tomada de preços',
      'Leilão',
      'Diálogo competitivo'
    ],
    correta: 2,                         // índice da certa
    explicacao: 'As 5 modalidades da Lei 14.133/2021 são: pregão, concorrência, concurso, leilão e diálogo competitivo. Tomada de preços e convite existiam na antiga Lei 8.666/93 e foram extintas.', // explicação
    dica: 'Questão de atualização legislativa: muita apostila antiga ainda cita convite/tomada de preços como certas. Na lei nova, elas não existem mais.', // pegadinha
    video: 'lei 14133 modalidades de licitação para concurso' // busca no YouTube
  },
  {
    id: 'a06',                          // identificador único
    materia: 'Direito Administrativo',  // matéria
    tema: 'Improbidade administrativa', // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'A lei que trata da improbidade administrativa é a:', // pergunta
    alternativas: [                     // opções
      'Lei 8.112/90',
      'Lei 8.429/92',
      'Lei 14.133/21',
      'Lei 9.784/99',
      'Lei 8.666/93'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A Lei 8.429/92 (reformada pela Lei 14.230/21) trata dos atos de improbidade: enriquecimento ilícito, prejuízo ao erário e violação de princípios. A 8.112 é o estatuto dos servidores federais; a 14.133 é a lei de licitações; a 9.784 é o processo administrativo federal.', // explicação
    dica: 'Decoreba pura de número de lei — e a banca adora trocar 8.429 por 8.112. Faça um cartão para cada lei do seu edital.', // pegadinha
    video: 'lei 8429 improbidade administrativa resumo para concurso' // busca no YouTube
  },
  {
    id: 'a07',                          // identificador único
    materia: 'Direito Administrativo',  // matéria
    tema: 'Bens públicos',              // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'superior',              // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'Os bens públicos não podem ser adquiridos por usucapião porque são:', // pergunta
    alternativas: [                     // opções
      'Inalienáveis',
      'Imprescritíveis',
      'Impenhoráveis',
      'Onerosos',
      'Divisíveis'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Imprescritibilidade: os bens públicos não se sujeitam a usucapião (prescrição aquisitiva), não importa o tempo de ocupação. Eles também são impenhoráveis (não podem ser penhorados) e, em regra, inalienáveis (não podem ser vendidos livremente).', // explicação
    dica: 'Três "i" que se confundem: imprescritível (sem usucapião), impenhorável (sem penhora), inalienável (sem venda). A banca pergunta um e oferece os outros dois.', // pegadinha
    video: 'bens públicos imprescritibilidade usucapião para concurso' // busca no YouTube
  },

  /* ===================== ATUALIDADES ===================== */
  {
    id: 't01',                          // identificador único
    materia: 'Atualidades',             // matéria
    tema: 'Agenda 2030 e ODS',          // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Instituto AOCP',            // banca inspiradora
    enunciado: 'A Agenda 2030 da ONU estabelece:', // pergunta
    alternativas: [                     // opções
      '10 Objetivos de Desenvolvimento Sustentável',
      '17 Objetivos de Desenvolvimento Sustentável',
      '8 Objetivos do Milênio para 2030',
      '20 Metas do Clima',
      '5 Direitos Fundamentais'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A Agenda 2030 tem 17 ODS, como fome zero, saúde, educação de qualidade, água limpa e ação contra a mudança do clima. Ela sucedeu os 8 Objetivos de Desenvolvimento do Milênio (2000-2015).', // explicação
    dica: 'Pegadinha: os Objetivos do Milênio eram 8 — a banca mistura os dois programas. ODS = 17, Milênio = 8. Números trocados = questão perdida.', // pegadinha
    video: 'agenda 2030 ODS 17 objetivos para concurso' // busca no YouTube
  },
  {
    id: 't02',                          // identificador único
    materia: 'Atualidades',             // matéria
    tema: 'Inteligência artificial',    // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Instituto AOCP',            // banca inspiradora
    enunciado: 'O ChatGPT é um exemplo de:', // pergunta
    alternativas: [                     // opções
      'Inteligência artificial generativa',
      'Rede social profissional',
      'Banco de dados governamental',
      'Sistema operacional',
      'Protocolo de segurança'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'IA generativa cria conteúdos novos (textos, imagens, sons) a partir de padrões aprendidos em grandes volumes de dados. O ChatGPT gera texto prevendo a sequência mais provável de palavras.', // explicação
    dica: 'Conceito quente de atualidades: "generativa" = gera conteúdo novo. A banca troca por "preditiva" ou "analítica" — atenção ao adjetivo.', // pegadinha
    video: 'o que é inteligência artificial generativa explicada' // busca no YouTube
  },
  {
    id: 't03',                          // identificador único
    materia: 'Atualidades',             // matéria
    tema: 'Matriz elétrica brasileira', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'Sobre a matriz elétrica brasileira, é correto afirmar:', // pergunta
    alternativas: [                     // opções
      'É majoritariamente baseada em carvão mineral',
      'É majoritariamente renovável, com destaque para hidrelétricas, eólica e solar',
      'Não utiliza fontes renováveis',
      'Depende quase exclusivamente de energia nuclear',
      'É 100% solar'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O Brasil tem uma das matrizes elétricas mais renováveis do mundo: as hidrelétricas dominam, e as fontes eólica e solar crescem rapidamente. Carvão e nuclear são minoritários.', // explicação
    dica: 'Matriz elétrica (energia gerada) ≠ matriz energética (toda energia consumida, incluindo combustíveis). A banca troca os termos de propósito.', // pegadinha
    video: 'matriz elétrica brasileira energias renováveis para concurso' // busca no YouTube
  },
  {
    id: 't04',                          // identificador único
    materia: 'Atualidades',             // matéria
    tema: 'SUS e saúde pública',        // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'São princípios do SUS previstos na Lei 8.080/90:', // pergunta
    alternativas: [                     // opções
      'Universalidade, integralidade e equidade',
      'Universalidade, parcialidade e gratuidade',
      'Seletividade, centralização e equidade',
      'Integralidade, hierarquia militar e cobrança',
      'Privatização, equidade e universalidade'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'A Lei 8.080/90 traz universalidade (acesso para todos), integralidade (cuidado completo) e equidade (tratar diferente quem precisa de mais). Também: descentralização, regionalização e participação da comunidade.', // explicação
    dica: 'Equidade ≠ igualdade: equidade dá mais a quem precisa mais. A banca troca por "igualdade" de propósito — é pegadinha garantida.', // pegadinha
    video: 'princípios do SUS universalidade integralidade equidade para concurso' // busca no YouTube
  },
  {
    id: 't05',                          // identificador único
    materia: 'Atualidades',             // matéria
    tema: 'Cidadania — voto',           // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'No Brasil, o voto é obrigatório para quem tem:', // pergunta
    alternativas: [                     // opções
      '16 a 70 anos',
      '18 a 70 anos',
      '18 a 65 anos',
      '21 a 75 anos',
      '16 a 60 anos'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Obrigatório dos 18 aos 70 anos. Facultativo para os de 16 e 17 anos, para os maiores de 70 e para os analfabetos.', // explicação
    dica: 'As idades do voto caem direto: obrigatório 18-70, facultativo 16-17 e 70+. A banca mexe em UM número (65 no lugar de 70) e pega geral.', // pegadinha
    video: 'voto obrigatório facultativo Brasil idades para concurso' // busca no YouTube
  },
  {
    id: 't06',                          // identificador único
    materia: 'Atualidades',             // matéria
    tema: 'COP e mudanças climáticas',  // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'A COP (Conferência das Partes) é:', // pergunta
    alternativas: [                     // opções
      'A cúpula da ONU sobre mudanças climáticas',
      'O congresso mundial de futebol',
      'A reunião anual do Banco Central',
      'O encontro de presidentes da América do Sul',
      'A conferência de comércio da OMC'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'A COP reúne os países signatários da Convenção do Clima da ONU para negociar metas de redução de emissões de gases de efeito estufa.', // explicação
    dica: 'COP = clima. Não confunda com OMC (comércio) nem com Mercosul (bloco regional). Atualidades cobra a sigla certa no contexto certo.', // pegadinha
    video: 'o que é a COP conferência do clima ONU' // busca no YouTube
  },

  /* ===================== HISTÓRIA DO BRASIL ===================== */
  {
    id: 'h01',                          // identificador único
    materia: 'História do Brasil',      // matéria
    tema: 'Abolição da escravidão',     // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'A Lei Áurea, que aboliu a escravidão no Brasil, foi assinada em:', // pergunta
    alternativas: [                     // opções
      '1850',
      '1871',
      '1885',
      '1888',
      '1891'
    ],
    correta: 3,                         // índice da certa
    explicacao: '13 de maio de 1888, pela Princesa Isabel. Antes vieram: Eusébio de Queirós (1850, fim do tráfico), Ventre Livre (1871) e Sexagenários (1885).', // explicação
    dica: 'A banca embaralha as datas das leis abolicionistas. Linha do tempo: 1850 → 1871 → 1885 → 1888. Decore a sequência, não só o final.', // pegadinha
    video: 'lei áurea abolição da escravidão 1888 história do Brasil' // busca no YouTube
  },
  {
    id: 'h02',                          // identificador único
    materia: 'História do Brasil',      // matéria
    tema: 'Proclamação da República',   // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Fuvest / Unicamp (vestibular)', // banca inspiradora
    enunciado: 'O primeiro presidente da República proclamada em 1889 foi:', // pergunta
    alternativas: [                     // opções
      'Prudente de Morais',
      'Deodoro da Fonseca',
      'Floriano Peixoto',
      'Getúlio Vargas',
      'Campos Sales'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O marechal Deodoro da Fonseca proclamou a República em 15/11/1889 e governou até 1891. Floriano Peixoto foi o segundo (1891-1894), fechando a "República da Espada".', // explicação
    dica: 'Deodoro (1889-91) e Floriano (1891-94) formam a República da Espada. A banca troca a ordem dos dois marechais de propósito.', // pegadinha
    video: 'proclamação da república 1889 Deodoro história do Brasil' // busca no YouTube
  },
  {
    id: 'h03',                          // identificador único
    materia: 'História do Brasil',      // matéria
    tema: 'Era Vargas',                 // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Fuvest / Unicamp (vestibular)', // banca inspiradora
    enunciado: 'A CLT (Consolidação das Leis do Trabalho) foi criada em 1943, durante:', // pergunta
    alternativas: [                     // opções
      'A República Velha',
      'O Estado Novo de Getúlio Vargas',
      'O governo Juscelino Kubitschek',
      'A ditadura militar',
      'O governo Fernando Henrique Cardoso'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A CLT (1943) é fruto da Era Vargas, no Estado Novo (1937-45), período ditatorial que criou as bases do trabalhismo: CLT, salário mínimo e Justiça do Trabalho.', // explicação
    dica: 'CLT e salário mínimo = Era Vargas. A banca tenta jogar a CLT para a ditadura militar ou para JK — não caia.', // pegadinha
    video: 'era vargas CLT 1943 história do Brasil' // busca no YouTube
  },
  {
    id: 'h04',                          // identificador único
    materia: 'História do Brasil',      // matéria
    tema: 'Independência do Brasil',    // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'A independência do Brasil, em 7 de setembro de 1822, foi proclamada por:', // pergunta
    alternativas: [                     // opções
      'Dom João VI',
      'Dom Pedro I',
      'Dom Pedro II',
      'José Bonifácio',
      'Tiradentes'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Dom Pedro I proclamou a independência às margens do Ipiranga, em 1822. Dom João VI era seu pai (voltara a Portugal); Dom Pedro II governaria o Segundo Reinado (1840-1889).', // explicação
    dica: 'Pegadinha de vestibular: D. Pedro I independe (1822), D. Pedro II reina depois (1840-1889). A banca inverte os dois Pedros.', // pegadinha
    video: 'independência do Brasil 1822 Dom Pedro I história' // busca no YouTube
  },
  {
    id: 'h05',                          // identificador único
    materia: 'História do Brasil',      // matéria
    tema: 'República Velha',            // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Fuvest / Unicamp (vestibular)', // banca inspiradora
    enunciado: 'Na República Velha, a política do "café com leite" representava:', // pergunta
    alternativas: [                     // opções
      'A política agrícola de incentivo ao café e ao leite',
      'A alternância de poder entre as oligarquias de São Paulo (café) e Minas Gerais (leite)',
      'Um programa social de merenda escolar',
      'O acordo comercial entre Brasil e EUA',
      'A política de imigração europeia'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Entre 1894 e 1930, as oligarquias paulista (café) e mineira (leite) revezavam a indicação do presidente, controlando a política nacional — daí o apelido "café com leite".', // explicação
    dica: 'Questão com sabor de café! Cuidado para não interpretar ao pé da letra: é sobre política e poder, não sobre agricultura. O vestibular adora essa confusão.', // pegadinha
    video: 'política do café com leite república velha história do Brasil' // busca no YouTube
  },
  {
    id: 'h06',                          // identificador único
    materia: 'História do Brasil',      // matéria
    tema: 'Constituição de 1988',       // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'A Constituição de 1988 ficou conhecida como "Constituição Cidadã" porque:', // pergunta
    alternativas: [                     // opções
      'Foi a primeira Constituição do Brasil',
      'Ampliou direitos sociais e a participação popular',
      'Foi escrita pelos militares',
      'Acabou com o voto feminino',
      'Restaurou o regime monárquico'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A CF/88 marcou a redemocratização, garantindo amplos direitos sociais e individuais, como saúde (SUS), educação e voto direto — por isso o apelido dado por Ulysses Guimarães.', // explicação
    dica: 'CF/88 = direitos e democracia. A banca gosta de afirmar que ela "limitou direitos" — o oposto da verdade histórica.', // pegadinha
    video: 'constituição de 1988 constituição cidadã resumo' // busca no YouTube
  },

  /* ===================== GEOGRAFIA ===================== */
  {
    id: 'g01',                          // identificador único
    materia: 'Geografia',               // matéria
    tema: 'Climas do Brasil',           // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'O clima predominante na Amazônia é o:', // pergunta
    alternativas: [                     // opções
      'Tropical de altitude',
      'Equatorial',
      'Subtropical',
      'Semiárido',
      'Mediterrâneo'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O clima equatorial é quente e úmido o ano todo, com chuvas abundantes — perfeito para a floresta amazônica. O semiárido domina o sertão nordestino; o subtropical, o Sul.', // explicação
    dica: 'Mapa mental: Amazônia = equatorial; Nordeste = semiárido; Sul = subtropical. A banca troca as regiões e os climas entre si.', // pegadinha
    video: 'climas do Brasil equatorial tropical para vestibular' // busca no YouTube
  },
  {
    id: 'g02',                          // identificador único
    materia: 'Geografia',               // matéria
    tema: 'Biomas brasileiros',         // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'O maior bioma brasileiro é:', // pergunta
    alternativas: [                     // opções
      'O Cerrado',
      'A Caatinga',
      'A Amazônia',
      'O Pantanal',
      'A Mata Atlântica'
    ],
    correta: 2,                         // índice da certa
    explicacao: 'A Amazônia é o maior bioma do Brasil (e a maior floresta tropical do mundo). O Cerrado é o segundo maior. O Pantanal é o menor entre os grandes biomas.', // explicação
    dica: 'Cuidado: o Cerrado é o segundo maior — a banca oferece Cerrado como pegadinha para quem decora o ranking pela metade.', // pegadinha
    video: 'biomas brasileiros amazônia cerrado caatinga para vestibular' // busca no YouTube
  },
  {
    id: 'g03',                          // identificador único
    materia: 'Geografia',               // matéria
    tema: 'Densidade demográfica',      // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'A densidade demográfica é calculada:', // pergunta
    alternativas: [                     // opções
      'Dividindo a população pela área',
      'Somando população e área',
      'Multiplicando nascimentos por mortes',
      'Dividindo a área pela população',
      'Contando apenas os moradores urbanos'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'Densidade demográfica = população ÷ área (habitantes por km²). Mede o "povoamento" relativo do território.', // explicação
    dica: 'O Brasil é populoso, mas de baixa densidade média (cerca de 23 hab/km²): muita gente, território gigante. A banca inverte a divisão de propósito.', // pegadinha
    video: 'densidade demográfica população relativa para vestibular' // busca no YouTube
  },
  {
    id: 'g04',                          // identificador único
    materia: 'Geografia',               // matéria
    tema: 'Urbanização',                // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'Êxodo rural é:', // pergunta
    alternativas: [                     // opções
      'A migração das cidades para o campo',
      'O deslocamento do campo para as cidades',
      'A migração entre países diferentes',
      'O deslocamento diário casa-trabalho',
      'A volta dos aposentados ao interior'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Êxodo rural = saída do campo rumo à cidade, impulsionado pela industrialização e pela mecanização agrícola. O movimento contrário é a migração urbano-rural.', // explicação
    dica: 'Direção do movimento: campo → cidade. A banca inverte a seta e chama de "êxodo urbano" — termo que não é o usual.', // pegadinha
    video: 'êxodo rural urbanização brasileira para vestibular' // busca no YouTube
  },
  {
    id: 'g05',                          // identificador único
    materia: 'Geografia',               // matéria
    tema: 'Regiões do Brasil',          // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'Segundo o IBGE, o Brasil é dividido em:', // pergunta
    alternativas: [                     // opções
      '4 regiões',
      '5 regiões',
      '6 regiões',
      '7 regiões',
      '26 regiões'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'São 5: Norte, Nordeste, Centro-Oeste, Sudeste e Sul. Os 26 estados e o Distrito Federal se distribuem entre elas.', // explicação
    dica: 'Pegadinha numérica: 26 estados + 1 DF, mas 5 regiões. A banca oferece "26" para pegar quem confunde estado com região.', // pegadinha
    video: 'regiões do Brasil IBGE para vestibular' // busca no YouTube
  },
  {
    id: 'g06',                          // identificador único
    materia: 'Geografia',               // matéria
    tema: 'Relevo brasileiro',          // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Fuvest / Unicamp (vestibular)', // banca inspiradora
    enunciado: 'O Brasil não possui grandes cadeias montanhosas porque:', // pergunta
    alternativas: [                     // opções
      'O clima impede a formação de montanhas',
      'Seu território fica em área geologicamente antiga e estável, longe do encontro de placas tectônicas',
      'As montanhas foram desmatadas',
      'A erosão aplainou as montanhas em menos de 100 anos',
      'Nunca chove o suficiente'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O relevo brasileiro é antigo (escudos cristalinos e bacias sedimentares) e fica distante das bordas de placas tectônicas, onde surgem os dobramentos modernos (montanhas). Por isso predominam planaltos e depressões.', // explicação
    dica: 'Sem encontro de placas = sem montanhas. O ponto mais alto do Brasil (Pico da Neblina, ~3.000 m) é modesto perto dos 8.000 m do Himalaia.', // pegadinha
    video: 'relevo brasileiro planaltos depressões para vestibular' // busca no YouTube
  },

  /* ===================== NOVAS QUESTÕES ADICIONADAS ===================== */

  /* ---------- PORTUGUÊS (7 novas) ---------- */
  {
    id: 'p11',                          // identificador único
    materia: 'Língua Portuguesa',       // matéria
    tema: 'Transitividade verbal',      // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'Assinale a frase com a transitividade verbal correta:', // pergunta
    alternativas: [                     // opções
      'O candidato obedeceu as ordens do fiscal.',
      'O candidato obedeceu às ordens do fiscal.',
      'O candidato visou no cargo dos sonhos.',
      'O candidato preferiu o café do que o chá.',
      'O candidato assistiu na cerimônia de posse.'
    ],
    correta: 1,                         // índice da certa
    explicacao: '"Obedecer" é transitivo indireto e pede a preposição "a": obedeceu ÀS ordens. "Visar" no sentido de almejar também pede "a" (visou AO cargo); "preferir" não usa "do que"; "assistiu na" devia ser "à" (a + a).', // explicação
    dica: 'A FCC cobra o trio clássico: obedecer, visar e assistir pedem "a". Na fala a gente engole a preposição — e a banca conta exatamente com isso.', // pegadinha
    video: 'transitividade verbal obedecer visar assistir para concurso' // busca no YouTube
  },
  {
    id: 'p12',                          // identificador único
    materia: 'Língua Portuguesa',       // matéria
    tema: 'Conjunções — valor semântico', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'Na frase "Estudou muito, mas não passou no exame", a conjunção "mas" expressa ideia de:', // pergunta
    alternativas: [                     // opções
      'Adição',
      'Adversidade',
      'Conclusão',
      'Explicação',
      'Alternância'
    ],
    correta: 1,                         // índice da certa
    explicacao: '"Mas" é conjunção coordenativa adversativa: opõe uma ideia à anterior (estudou → esperava-se passar; não passou → oposição). "Portanto" concluiria; "porque/pois" explicariam.', // explicação
    dica: 'Mapa mental da CESPE: mas/no entanto = oposição; portanto/logo = conclusão; porque/pois = explicação; e/também = adição; ou/quer = alternância.', // pegadinha
    video: 'conjunções coordenativas adversativas para concurso' // busca no YouTube
  },
  {
    id: 'p13',                          // identificador único
    materia: 'Língua Portuguesa',       // matéria
    tema: 'Adjunto adnominal x complemento nominal', // assunto
    nivel: 'dificil',                   // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FGV',                       // banca inspiradora
    enunciado: 'Em "a construção do prédio levou dois anos", o termo "do prédio" exerce a função de:', // pergunta
    alternativas: [                     // opções
      'Adjunto adnominal',
      'Complemento nominal',
      'Objeto direto',
      'Predicativo do sujeito',
      'Aposto'
    ],
    correta: 1,                         // índice da certa
    explicacao: '"Construção" é substantivo abstrato (indica ação) e "do prédio" é o PACIENTE da ação (o prédio é construído) — logo, complemento nominal. Se fosse o agente/possessor ("a construção do engenheiro"), seria adjunto adnominal.', // explicação
    dica: 'Regra da FGV: substantivo abstrato + termo paciente = complemento nominal; termo agente/possuidor = adjunto adnominal. Passe para a voz passiva mentalmente: quem "sofre" a ação é complemento.', // pegadinha
    video: 'adjunto adnominal e complemento nominal diferença concurso' // busca no YouTube
  },
  {
    id: 'p14',                          // identificador único
    materia: 'Língua Portuguesa',       // matéria
    tema: 'Concordância com expressões partitivas', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'Complete: "A maioria dos candidatos ___ satisfeita com o gabarito."', // pergunta
    alternativas: [                     // opções
      'ficou',
      'ficaram',
      'ficou ou ficaram',
      'ficaria',
      'ficarão'
    ],
    correta: 2,                         // índice da certa
    explicacao: 'Expressões partitivas (a maioria de, a maior parte de, metade de) admitem dupla concordância: com o núcleo ("maioria ficou") ou com o termo próximo ("candidatos ficaram"). As duas formas estão certas.', // explicação
    dica: 'A IBFC coloca "ficou" e "ficaram" em alternativas separadas para gerar dúvida — a resposta certa é a que admite as duas concordâncias. Singular olha para o núcleo; plural, para o termo.', // pegadinha
    video: 'concordância verbal expressões partitivas maioria para concurso' // busca no YouTube
  },
  {
    id: 'p15',                          // identificador único
    materia: 'Língua Portuguesa',       // matéria
    tema: 'Tempos verbais — pretérito', // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'Complete corretamente: "Quando o fiscal ___ (entrar), todos já estavam sentados."', // pergunta
    alternativas: [                     // opções
      'entrava',
      'entrou',
      'entraria',
      'entrasse',
      'entra'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A ação do fiscal é pontual e concluída no passado: pretérito perfeito "entrou". "Entrava" (imperfeito) indicaria ação habitual ou em andamento; "entrasse" pede outra conjunção ("se/quando" hipotético).', // explicação
    dica: 'Pretérito perfeito = ação fechada no passado ("entrou"); imperfeito = ação contínua ou habitual ("entrava"). O "já estavam" do contexto entrega que a outra ação foi pontual.', // pegadinha
    video: 'pretérito perfeito e imperfeito do indicativo concurso' // busca no YouTube
  },
  {
    id: 'p16',                          // identificador único
    materia: 'Língua Portuguesa',       // matéria
    tema: 'Semântica — polissemia',     // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Instituto AOCP',            // banca inspiradora
    enunciado: 'A palavra "manga" em "a manga da camisa" e "a manga estava doce" ilustra um caso de:', // pergunta
    alternativas: [                     // opções
      'Sinonímia',
      'Antonímia',
      'Homonímia',
      'Neologismo',
      'Arcaísmo'
    ],
    correta: 2,                         // índice da certa
    explicacao: 'São duas palavras iguais na forma e no som, mas com significados e origens diferentes (manga da roupa x manga a fruta) — homônimas. Sinônimos têm sentidos parecidos; antônimos, opostos.', // explicação
    dica: 'Homônimo = mesma forma, sentido diferente (manga, banco, velo). A banca troca com polissemia (uma palavra, vários sentidos, como "cabeça" humana e "cabeça" de alho) — ambas podem aparecer como resposta conforme a gramática adotada.', // pegadinha
    video: 'homônimos e polissemia para concurso exemplos' // busca no YouTube
  },
  {
    id: 'p17',                          // identificador único
    materia: 'Língua Portuguesa',       // matéria
    tema: 'Uso de "meio"',              // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'Assinale a frase correta quanto ao uso de "meio":', // pergunta
    alternativas: [                     // opções
      'Ele chegou meia cansado depois da prova.',
      'Ele chegou meio cansado depois da prova.',
      'Bebi meio xícara de café.',
      'Ela parecia meia nervosa para a entrevista.',
      'Ela saiu meia apressada da sala.'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Antes de adjetivo, "meio" é advérbio e fica invariável: meio cansado, meio nervosa. Antes de substantivo, é numeral e concorda: meia xícara, meio quilo, meia dúzia.', // explicação
    dica: 'Atalho da Vunesp: "meio" que significa "um pouco" (adverbio) NUNCA varia — sempre "meio". "Meio/meia" que mede quantidade concorda com o substantivo.', // pegadinha
    video: 'uso correto de meio e meia para concurso' // busca no YouTube
  },

  /* ---------- MATEMÁTICA (6 novas) ---------- */
  {
    id: 'm11',                          // identificador único
    materia: 'Matemática',              // matéria
    tema: 'Variação percentual',        // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'Um curso preparatório custava R$ 80,00 e passou a custar R$ 100,00. O aumento percentual foi de:', // pergunta
    alternativas: [                     // opções
      '20%',
      '25%',
      '30%',
      '80%',
      '125%'
    ],
    correta: 1,                         // índice da certa
    passos: [                           // passo a passo
      'Calcule o aumento: 100 − 80 = R$ 20,00.',
      'Divida pelo valor ORIGINAL: 20 ÷ 80 = 0,25.',
      'Converta: 0,25 = 25%.'
    ],
    explicacao: 'Variação percentual = diferença ÷ valor inicial. O aumento de R$ 20 sobre os R$ 80 originais é 25% — a alternativa "20%" é a pegadinha de quem confunde o valor do aumento com a taxa.', // explicação
    dica: 'Sempre divida pelo valor ANTES da mudança. E cuidado: "20" aparece nas alternativas justamente porque é o aumento em reais — taxa percentual pede a divisão.', // pegadinha
    video: 'aumento e desconto percentual variação para concurso' // busca no YouTube
  },
  {
    id: 'm12',                          // identificador único
    materia: 'Matemática',              // matéria
    tema: 'Regra de três simples direta', // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'Se 3 canetas custam R$ 7,50, quanto custam 8 canetas iguais?', // pergunta
    alternativas: [                     // opções
      'R$ 15,00',
      'R$ 18,00',
      'R$ 20,00',
      'R$ 22,50',
      'R$ 24,00'
    ],
    correta: 2,                         // índice da certa
    passos: [                           // passo a passo
      'Ache o preço de 1 caneta: 7,50 ÷ 3 = R$ 2,50.',
      'Multiplique por 8: 2,50 × 8 = R$ 20,00.'
    ],
    explicacao: 'Mais canetas, mais dinheiro — proporção direta. Descoberto o preço unitário (R$ 2,50), basta multiplicar por 8.', // explicação
    dica: 'Atalho de prova: ache primeiro o valor unitário — ele resolve qualquer regra de três simples direta sem montar proporção.', // pegadinha
    video: 'regra de três simples direta para concurso' // busca no YouTube
  },
  {
    id: 'm13',                          // identificador único
    materia: 'Matemática',              // matéria
    tema: 'Juros simples — taxa',       // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'Aplicando R$ 2.000,00 a juros simples, um investidor recebeu R$ 240,00 de juros em 6 meses. A taxa mensal da aplicação foi de:', // pergunta
    alternativas: [                     // opções
      '1% ao mês',
      '2% ao mês',
      '3% ao mês',
      '4% ao mês',
      '6% ao mês'
    ],
    correta: 1,                         // índice da certa
    passos: [                           // passo a passo
      'Use J = C × i × t: 240 = 2.000 × i × 6.',
      '240 = 12.000 × i.',
      'i = 240 ÷ 12.000 = 0,02 = 2% ao mês.'
    ],
    explicacao: 'Isolando a taxa na fórmula: i = J ÷ (C × t) = 240 ÷ 12.000 = 2% ao mês. Quem soma 240 + 2.000 primeiro sai da trilha certa — a fórmula usa só o JURO.', // explicação
    dica: 'A alternativa "6%" pega quem confunde os 6 meses com a taxa. Separe as variáveis: J (juro total), C (capital), i (taxa) e t (tempo) — depois isole a incógnita.', // pegadinha
    video: 'juros simples encontrar a taxa para concurso' // busca no YouTube
  },
  {
    id: 'm14',                          // identificador único
    materia: 'Matemática',              // matéria
    tema: 'Potenciação e radiciação',   // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Instituto AOCP',            // banca inspiradora
    enunciado: 'O valor de √144 + 3² é:', // pergunta
    alternativas: [                     // opções
      '15',
      '18',
      '21',
      '24',
      '36'
    ],
    correta: 2,                         // índice da certa
    passos: [                           // passo a passo
      'Calcule a raiz: √144 = 12 (pois 12 × 12 = 144).',
      'Calcule a potência: 3² = 9.',
      'Some: 12 + 9 = 21.'
    ],
    explicacao: 'Raiz quadrada de 144 é 12; 3 ao quadrado é 9. A soma dá 21. A alternativa "24" atrai quem soma 12 + 12 esquecendo que 3² é 9, não 12.', // explicação
    dica: 'Raízes exatas mais cobradas: √100=10, √121=11, √144=12, √169=13, √196=14, √225=15. Decore os quadrados de 1 a 15 — caem em toda prova.', // pegadinha
    video: 'potenciação e radiciação exercícios para concurso' // busca no YouTube
  },
  {
    id: 'm15',                          // identificador único
    materia: 'Matemática',              // matéria
    tema: 'Mediana',                    // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'As idades de 5 amigos são 18, 20, 24, 26 e 30 anos. A mediana dessas idades é:', // pergunta
    alternativas: [                     // opções
      '22 anos',
      '23,6 anos',
      '24 anos',
      '26 anos',
      '30 anos'
    ],
    correta: 2,                         // índice da certa
    passos: [                           // passo a passo
      'Ordene os valores: 18, 20, 24, 26, 30 (já estão em ordem).',
      'Com 5 valores, a mediana é o central: o 3º termo.',
      'Mediana = 24 anos.'
    ],
    explicacao: 'Mediana é o valor do meio da lista ORDENADA — aqui, o 3º termo (24). A alternativa "23,6" é a média aritmética (118 ÷ 5), colocada de propósito para confundir os conceitos.', // explicação
    dica: 'Média = soma ÷ quantidade; mediana = termo do meio da lista ordenada (se a quantidade for par, a média dos dois centrais). A banca sempre oferece a média disfarçada de mediana.', // pegadinha
    video: 'mediana e média diferença para concurso' // busca no YouTube
  },
  {
    id: 'm16',                          // identificador único
    materia: 'Matemática',              // matéria
    tema: 'Problemas de idade',         // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'João tem o dobro da idade de Maria. Daqui a 10 anos, a soma das idades dos dois será 50. Quantos anos Maria tem hoje?', // pergunta
    alternativas: [                     // opções
      '10 anos',
      '15 anos',
      '20 anos',
      '25 anos',
      '30 anos'
    ],
    correta: 0,                         // índice da certa
    passos: [                           // passo a passo
      'Chame a idade de Maria de x; a de João é 2x.',
      'Daqui a 10 anos: (x + 10) + (2x + 10) = 50.',
      '3x + 20 = 50 → 3x = 30 → x = 10.'
    ],
    explicacao: 'Montando a equação: Maria tem x hoje e terá x+10; João tem 2x e terá 2x+10. A soma futura é 50, logo x = 10 (e João, 20).', // explicação
    dica: 'Erro campeão: somar 10 só uma vez ("3x + 10 = 50" daria x ≈ 13). Os DOIS envelhecem — some 10 a cada idade antes de montar a equação.', // pegadinha
    video: 'problemas de idade equação para concurso' // busca no YouTube
  },

  /* ---------- RACIOCÍNIO LÓGICO (4 novas) ---------- */
  {
    id: 'r09',                          // identificador único
    materia: 'Raciocínio Lógico',       // matéria
    tema: 'Conjunção e disjunção',      // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'A proposição "Estudo português E matemática" será VERDADEIRA quando:', // pergunta
    alternativas: [                     // opções
      'Pelo menos uma das partes for verdadeira',
      'As duas partes forem verdadeiras',
      'Apenas uma das partes for verdadeira',
      'As duas partes forem falsas',
      'A primeira parte for falsa'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A conjunção "e" só é verdadeira quando TODAS as partes são verdadeiras — basta uma falsa para derrubar tudo. Já a disjunção "ou" aceita apenas uma verdadeira.', // explicação
    dica: 'Resumo da CESPE: "e" exige tudo verdade; "ou" basta um verdade. E cuidado com o "ou exclusivo" (ou...ou): esse aceita APENAS um verdade, não os dois.', // pegadinha
    video: 'conjunção disjunção tabela verdade raciocínio lógico' // busca no YouTube
  },
  {
    id: 'r10',                          // identificador único
    materia: 'Raciocínio Lógico',       // matéria
    tema: 'Equivalência com "ou" (NEyMAR)', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FGV',                       // banca inspiradora
    enunciado: 'A proposição "Se estudo, então passo" é equivalente a:', // pergunta
    alternativas: [                     // opções
      'Não estudo ou passo.',
      'Estudo e não passo.',
      'Se passo, então estudo.',
      'Se não estudo, então não passo.',
      'Estudo ou não passo.'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'Além da contrapositiva, o condicional tem outra equivalente: "não p OU q" — a famosa regra NEyMAR (NEga a primeira, MAntém a segunda, troca por "ou"). "Se estudo, passo" = "não estudo ou passo".', // explicação
    dica: 'Duas equivalentes do "se...então": contrapositiva (inverte e nega tudo) e NEyMAR (nega o 1º, mantém o 2º, vira "ou"). A FGV adora pedir a segunda — a que ninguém espera.', // pegadinha
    video: 'equivalência do se então neymar nega primeira mantém segunda' // busca no YouTube
  },
  {
    id: 'r11',                          // identificador único
    materia: 'Raciocínio Lógico',       // matéria
    tema: 'Sequência de letras',        // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'Na sequência A, C, F, J, ..., a próxima letra é:', // pergunta
    alternativas: [                     // opções
      'L',
      'M',
      'N',
      'O',
      'P'
    ],
    correta: 3,                         // índice da certa
    passos: [                           // passo a passo
      'Conte os saltos entre letras: A→C pula 2; C→F pula 3; F→J pula 4.',
      'Os saltos crescem de 1 em 1: o próximo salto é 5.',
      'J + 5 letras = O (K, L, M, N, O).'
    ],
    explicacao: 'É a mesma lógica das sequências numéricas, só que com o alfabeto: os intervalos crescem (+2, +3, +4, +5). Depois de J vêm K, L, M, N e O — o quinto salto para em O.', // explicação
    dica: 'Transforme letra em número (A=1, B=2...) e a sequência vira um problema normal de diferenças. A Vunesp conta com quem tenta adivinhar o padrão "de olho".', // pegadinha
    video: 'sequência de letras raciocínio lógico para concurso' // busca no YouTube
  },
  {
    id: 'r12',                          // identificador único
    materia: 'Raciocínio Lógico',       // matéria
    tema: 'Argumentação — modus ponens', // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Instituto AOCP',            // banca inspiradora
    enunciado: 'Premissas: "Se bebo café, fico acordado." e "Bebi café." A conclusão logicamente válida é:', // pergunta
    alternativas: [                     // opções
      'Não fico acordado.',
      'Fico acordado.',
      'Talvez eu fique acordado.',
      'Não bebi café.',
      'Bebo mais café.'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'É o modus ponens: se p → q e p aconteceu, q necessariamente acontece. Bebi café (p), logo fico acordado (q) — sem "talvez": a conclusão é garantida pelas premissas.', // explicação
    dica: 'Cuidado com o gêmeo errado: "fiquei acordado, logo bebi café" seria a falácia da afirmação do consequente — o condicional não se lê de trás para frente.', // pegadinha
    video: 'modus ponens e modus tollens argumentação concurso' // busca no YouTube
  },

  /* ---------- INFORMÁTICA (3 novas) ---------- */
  {
    id: 'i09',                          // identificador único
    materia: 'Informática',             // matéria
    tema: 'Excel — referência absoluta', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'No Excel, a referência $A$1 em uma fórmula indica:', // pergunta
    alternativas: [                     // opções
      'Uma célula que muda de posição ao copiar a fórmula',
      'Uma referência absoluta, que não se altera ao copiar a fórmula',
      'Um erro de digitação na fórmula',
      'Uma célula oculta na planilha',
      'O endereço da última célula usada'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O cifrão trava a referência: $A$1 fica fixa ao copiar a fórmula para outras células. A1 (sem cifrão) é relativa e se move; A$1 ou $A1 são mistas (travam só linha ou só coluna).', // explicação
    dica: 'Decore o mapa da FCC: A1 = relativa; $A$1 = absoluta; $A1 ou A$1 = mista. O cifrão é o "cadeado" da célula — onde ele estiver, nada se move.', // pegadinha
    video: 'referência absoluta e relativa excel cifrão para concurso' // busca no YouTube
  },
  {
    id: 'i10',                          // identificador único
    materia: 'Informática',             // matéria
    tema: 'Excel — função SOMASE',      // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'No Excel, a função =SOMASE(A1:A10;">5") faz o seguinte:', // pergunta
    alternativas: [                     // opções
      'Conta quantas células têm valor maior que 5',
      'Soma apenas os valores do intervalo que são maiores que 5',
      'Soma todos os valores do intervalo',
      'Devolve o maior valor do intervalo',
      'Ordena os valores em ordem crescente'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'SOMASE soma apenas as células que cumprem a condição — aqui, valores maiores que 5. Quem CONTA com condição é a CONT.SE; quem só soma tudo é a SOMA; o maior valor vem da MÁXIMO.', // explicação
    dica: 'Família que a IBFC mistura: SOMA (tudo), SOMASE (soma com condição), CONT.SE (conta com condição), MÉDIASE (média com condição). Leia o nome da função em voz alta.', // pegadinha
    video: 'função somase cont.se excel para concurso' // busca no YouTube
  },
  {
    id: 'i11',                          // identificador único
    materia: 'Informática',             // matéria
    tema: 'Segurança — tipos de malware', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'A principal diferença entre um vírus e um cavalo de Troia (trojan) é que o trojan:', // pergunta
    alternativas: [                     // opções
      'Se replica sozinho de arquivo em arquivo',
      'Se disfarça de programa legítimo e não se replica',
      'Criptografa os arquivos do usuário pedindo resgate',
      'Apaga todo o conteúdo do disco rígido',
      'Só infecta telefones celulares'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O trojan entra disfarçado de programa útil e abre portas para o atacante — mas não se replica. Quem se replica de arquivo em arquivo é o vírus; e quem se espalha pela rede sozinho é o worm.', // explicação
    dica: 'Trio que a CESPE cobra: VÍRUS (replica em arquivos), WORM (espalha pela rede sozinho), TROJAN (disfarce, não replica). Ransomware é outro bicho: sequestra dados por resgate.', // pegadinha
    video: 'diferença entre vírus worm trojan ransomware concurso' // busca no YouTube
  },

  /* ===================== LOTE NOVO — PORTUGUÊS (p18 a p25) ===================== */
  {
    id: 'p18',                          // identificador único
    materia: 'Língua Portuguesa',       // matéria
    tema: 'Ortografia (mas x mais)',    // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'Complete corretamente: "Eu queria estudar, ___ estava muito cansado."', // pergunta
    alternativas: [                     // opções
      'mais',
      'mas',
      'más',
      'máis'
    ],
    correta: 1,                         // índice da certa
    explicacao: '"Mas" é conjunção adversativa (equivale a "porém"). "Mais" indica quantidade ou intensidade. "Más" é adjetivo feminino plural (ruins, malvadas).', // explicação
    dica: 'Troque por "porém": se couber, é "mas". A banca explora a semelhança sonora entre "mas" e "mais" — é uma das trocas mais cobradas em prova.', // pegadinha
    video: 'mas ou mais diferença ortografia para concurso' // busca no YouTube
  },
  {
    id: 'p19',                          // identificador único
    materia: 'Língua Portuguesa',       // matéria
    tema: 'Acentuação gráfica (hiato)', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FGV',                       // banca inspiradora
    enunciado: 'Assinale a alternativa em que TODAS as palavras estão grafadas corretamente:', // pergunta
    alternativas: [                     // opções
      'saude, pais, raiz',
      'saúde, país, raiz',
      'saúde, pais, raíz',
      'saude, país, raíz',
      'saúde, paíz, raiz'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Acentuam-se o "i" e o "u" tônicos quando formam hiato com a vogal anterior (sa-ú-de, pa-ís, ba-ú). Já "raiz" não é acentuada, porque o "i" vem seguido de "z" na mesma sílaba (ra-iz).', // explicação
    dica: 'A banca adora "raiz" e "juiz": têm "i" tônico, mas NÃO levam acento. Hiato acentuado só quando o i/u fica sozinho na sílaba.', // pegadinha
    video: 'acentuação hiato i u tônico para concurso' // busca no YouTube
  },
  {
    id: 'p20',                          // identificador único
    materia: 'Língua Portuguesa',       // matéria
    tema: 'Regência do verbo assistir', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'Assinale a frase correta quanto à regência do verbo "assistir" no sentido de "ver":', // pergunta
    alternativas: [                     // opções
      'Assisti o filme ontem.',
      'Assisti ao filme ontem.',
      'Assisti no filme ontem.',
      'Assisti pelo filme ontem.',
      'Assisti com o filme ontem.'
    ],
    correta: 1,                         // índice da certa
    explicacao: '"Assistir" no sentido de ver/presenciar é transitivo indireto e exige a preposição "a": assistir AO filme. No sentido de ajudar (prestar assistência), é transitivo direto: assistir O paciente.', // explicação
    dica: 'O sentido muda a regência: assistir A = ver; assistir O = ajudar. A FCC cobra exatamente essa dupla, sempre com as duas frases nas alternativas.', // pegadinha
    video: 'regência do verbo assistir para concurso' // busca no YouTube
  },
  {
    id: 'p21',                          // identificador único
    materia: 'Língua Portuguesa',       // matéria
    tema: 'Onde x aonde',               // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'Complete: "A cidade ___ eu nasci é pequena."', // pergunta
    alternativas: [                     // opções
      'aonde',
      'onde',
      'cujo',
      'de que',
      'a que'
    ],
    correta: 1,                         // índice da certa
    explicacao: '"Onde" equivale a "em que" e combina com verbos que pedem essa preposição (nascer EM, morar EM). "Aonde" equivale a "a que" e indica movimento (ir A, chegar A).', // explicação
    dica: 'Teste rápido: se o verbo pede "em" (nascer, morar, estar), use "onde". Se pede "a" (ir, chegar), use "aonde". A banca troca os dois de propósito.', // pegadinha
    video: 'uso de onde e aonde para concurso' // busca no YouTube
  },
  {
    id: 'p22',                          // identificador único
    materia: 'Língua Portuguesa',       // matéria
    tema: 'Concordância com sujeito composto', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'Assinale a frase correta:', // pergunta
    alternativas: [                     // opções
      'Chegou os candidatos e o fiscal.',
      'Chegaram os candidatos e o fiscal.',
      'Chegou os candidatos e os fiscais.',
      'Chegaram o candidato.',
      'Chegou-se os candidatos.'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Com sujeito composto, o verbo vai para o plural, mesmo que o sujeito venha depois dele: "chegaram os candidatos e o fiscal".', // explicação
    dica: 'Muita gente erra porque o verbo aparece antes do sujeito. Sujeito composto = verbo no plural, esteja ele antes ou depois.', // pegadinha
    video: 'concordância verbal sujeito composto posposto concurso' // busca no YouTube
  },
  {
    id: 'p23',                          // identificador único
    materia: 'Língua Portuguesa',       // matéria
    tema: 'Uso de há x a (tempo)',      // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FGV',                       // banca inspiradora
    enunciado: 'Complete: "___ dois anos que eu não viajo e daqui ___ três meses farei a prova."', // pergunta
    alternativas: [                     // opções
      'Há ... a',
      'A ... há',
      'Há ... há',
      'A ... a',
      'Há ... à'
    ],
    correta: 0,                         // índice da certa
    explicacao: '"Há" (verbo haver) indica tempo PASSADO: "há dois anos" = faz dois anos. "A" indica tempo FUTURO: "daqui a três meses".', // explicação
    dica: 'Troque por "faz": se couber "faz", é "há" (passado). Futuro sempre com "a" e SEM acento — não existe crase antes de tempo futuro.', // pegadinha
    video: 'ha ou a tempo passado futuro para concurso' // busca no YouTube
  },
  {
    id: 'p24',                          // identificador único
    materia: 'Língua Portuguesa',       // matéria
    tema: 'Vozes verbais',              // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'A frase "O edital foi publicado pela banca" está na voz:', // pergunta
    alternativas: [                     // opções
      'ativa',
      'passiva analítica',
      'passiva sintética',
      'reflexiva',
      'passiva pronominal'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Voz passiva analítica = verbo SER + particípio (+ agente da passiva com "por"). Em "foi publicado pela banca": foi (ser) + publicado (particípio) + pela banca (agente da passiva).', // explicação
    dica: 'Passiva analítica: ser + particípio. Passiva sintética: verbo + "se" ("publicou-se o edital"). A banca troca as duas nas alternativas.', // pegadinha
    video: 'voz passiva analítica e sintética para concurso' // busca no YouTube
  },
  {
    id: 'p25',                          // identificador único
    materia: 'Língua Portuguesa',       // matéria
    tema: 'Tipos de sujeito',           // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'Na frase "Choveu muito ontem na cidade", o sujeito é:', // pergunta
    alternativas: [                     // opções
      'simples',
      'oculto',
      'inexistente',
      'indeterminado',
      'composto'
    ],
    correta: 2,                         // índice da certa
    explicacao: 'Verbos que indicam fenômenos da natureza (chover, nevar, ventar) são impessoais: não têm sujeito. Logo, a oração tem sujeito inexistente.', // explicação
    dica: '"Choveu muito" parece ter sujeito, mas "muito" é advérbio de intensidade, não sujeito. A banca oferece "simples" exatamente para pegar essa confusão.', // pegadinha
    video: 'sujeito inexistente verbos impessoais para concurso' // busca no YouTube
  },

  /* ===================== LOTE NOVO — MATEMÁTICA (m17 a m18) ===================== */
  {
    id: 'm17',                          // identificador único
    materia: 'Matemática',              // matéria
    tema: 'Aumentos e descontos sucessivos', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'Um produto de R$ 200,00 teve um aumento de 10% e, depois, um desconto de 10%. O preço final é:', // pergunta
    alternativas: [                     // opções
      'R$ 200,00',
      'R$ 198,00',
      'R$ 202,00',
      'R$ 190,00',
      'R$ 220,00'
    ],
    correta: 1,                         // índice da certa
    passos: [                           // passo a passo
      'Aumento de 10%: 200 × 1,10 = R$ 220,00.',
      'Desconto de 10% sobre o novo valor: 220 × 0,90 = R$ 198,00.',
      'Atalho: 200 × 1,10 × 0,90 = 198.'
    ],
    explicacao: 'Os percentuais NÃO se cancelam, porque o desconto incide sobre o valor já aumentado. O resultado é R$ 198,00 — sempre um pouco menor que o inicial.', // explicação
    dica: 'Pegadinha clássica: "10% de aumento e 10% de desconto volta ao mesmo valor". NÃO volta! Multiplique pelos fatores (1,10 e 0,90), nunca some ou subtraia percentuais.', // pegadinha
    video: 'aumento e desconto sucessivos porcentagem para concurso' // busca no YouTube
  },
  {
    id: 'm18',                          // identificador único
    materia: 'Matemática',              // matéria
    tema: 'Regra de três simples inversa', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'Se 8 pedreiros constroem um muro em 6 dias, quantos dias 12 pedreiros, no mesmo ritmo, levariam para construir o mesmo muro?', // pergunta
    alternativas: [                     // opções
      '9 dias',
      '4 dias',
      '6 dias',
      '8 dias',
      '3 dias'
    ],
    correta: 1,                         // índice da certa
    passos: [                           // passo a passo
      'Grandezas inversas: mais pedreiros significam menos dias.',
      'O produto é constante: 8 × 6 = 48 "dias-pedreiro".',
      '48 ÷ 12 = 4 dias.'
    ],
    explicacao: 'Em regra de três inversa, multiplica-se na horizontal (o produto não muda). Com 50% mais pedreiros, o tempo cai para 4 dias.', // explicação
    dica: 'Sinal de grandeza inversa: uma aumenta e a outra diminui. Nesse caso NÃO cruze as setas — a banca espera o cruzamento errado para oferecer 9 dias.', // pegadinha
    video: 'regra de três simples inversa para concurso' // busca no YouTube
  },

  /* ===================== LOTE NOVO — MATEMÁTICA (m19 a m24) ===================== */
  {
    id: 'm19',                          // identificador único
    materia: 'Matemática',              // matéria
    tema: 'MDC (divisão em partes iguais)', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'Um professor tem 24 lápis vermelhos e 36 azuis e quer montar kits iguais, com o maior número possível de kits. Quantos kits ele fará?', // pergunta
    alternativas: [                     // opções
      '6',
      '12',
      '18',
      '24',
      '36'
    ],
    correta: 1,                         // índice da certa
    passos: [                           // passo a passo
      'A pergunta pede o MAIOR número de grupos iguais: isso é o MDC.',
      'Fatorando: 24 = 2³ × 3 e 36 = 2² × 3².',
      'MDC = 2² × 3 = 12 kits (cada um com 2 vermelhos e 3 azuis).'
    ],
    explicacao: 'O maior número de kits iguais é o MDC(24, 36) = 12. Cada kit fica com 2 lápis vermelhos e 3 azuis.', // explicação
    dica: 'MMC = "quando vão se encontrar de novo". MDC = "dividir em partes iguais". Trocar os dois é o erro número 1 dessa matéria.', // pegadinha
    video: 'mdc e mmc quando usar para concurso' // busca no YouTube
  },
  {
    id: 'm20',                          // identificador único
    materia: 'Matemática',              // matéria
    tema: 'Área do círculo',            // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'Um jardim circular tem 10 m de diâmetro. Usando π = 3,14, a área desse jardim é aproximadamente:', // pergunta
    alternativas: [                     // opções
      '31,4 m²',
      '78,5 m²',
      '157 m²',
      '314 m²',
      '62,8 m²'
    ],
    correta: 1,                         // índice da certa
    passos: [                           // passo a passo
      'O raio é metade do diâmetro: 10 ÷ 2 = 5 m.',
      'Área = π × r² = 3,14 × 5².',
      '3,14 × 25 = 78,5 m².'
    ],
    explicacao: 'A área do círculo é πr². O enunciado deu o DIÂMETRO (10 m); o raio usado na fórmula é 5 m.', // explicação
    dica: 'A banca entrega o diâmetro para você errar o raio: 3,14 × 100 = 314 — e essa alternativa está lá. Sempre cheque se o dado é raio ou diâmetro.', // pegadinha
    video: 'área do círculo raio e diâmetro para concurso' // busca no YouTube
  },
  {
    id: 'm21',                          // identificador único
    materia: 'Matemática',              // matéria
    tema: 'Probabilidade',              // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'Em um sorteio com os números de 1 a 20, qual é a probabilidade de sair um múltiplo de 5?', // pergunta
    alternativas: [                     // opções
      '1/20',
      '1/5',
      '1/4',
      '1/10',
      '1/2'
    ],
    correta: 1,                         // índice da certa
    passos: [                           // passo a passo
      'Múltiplos de 5 entre 1 e 20: 5, 10, 15 e 20 → 4 casos favoráveis.',
      'Total de casos possíveis: 20.',
      'Probabilidade = 4/20 = 1/5 = 20%.'
    ],
    explicacao: 'Probabilidade = casos favoráveis ÷ casos possíveis = 4/20 = 1/5.', // explicação
    dica: 'A alternativa "1/4" (que seria 5/20) aparece para pegar quem conta 5 múltiplos em vez de 4. Conte no papel: 5, 10, 15, 20.', // pegadinha
    video: 'probabilidade para concursos exercícios resolvidos' // busca no YouTube
  },
  {
    id: 'm22',                          // identificador único
    materia: 'Matemática',              // matéria
    tema: 'Divisão proporcional (regra de sociedade)', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FGV',                       // banca inspiradora
    enunciado: 'Dois sócios investiram R$ 2.000,00 e R$ 3.000,00. Ao fim do ano, o lucro de R$ 5.000,00 será dividido em:', // pergunta
    alternativas: [                     // opções
      'R$ 2.500,00 e R$ 2.500,00',
      'R$ 2.000,00 e R$ 3.000,00',
      'R$ 1.000,00 e R$ 4.000,00',
      'R$ 3.000,00 e R$ 2.000,00',
      'R$ 2.200,00 e R$ 2.800,00'
    ],
    correta: 1,                         // índice da certa
    passos: [                           // passo a passo
      'A divisão é proporcional ao capital investido (2.000 : 3.000 = 2 : 3).',
      'Total investido: 5.000.',
      'Lucro por real investido: 5.000 ÷ 5.000 = 1.',
      'Sócio 1: 2.000 × 1 = R$ 2.000; sócio 2: 3.000 × 1 = R$ 3.000.'
    ],
    explicacao: 'Lucros e prejuízos se dividem na proporção do capital. Como o lucro é exatamente igual ao total investido, a divisão fica R$ 2.000 e R$ 3.000.', // explicação
    dica: 'A opção do meio a meio (R$ 2.500 para cada) é a armadilha. Sociedade divide por proporção do capital, nunca em partes iguais.', // pegadinha
    video: 'divisão proporcional regra de sociedade para concurso' // busca no YouTube
  },
  {
    id: 'm23',                          // identificador único
    materia: 'Matemática',              // matéria
    tema: 'Progressão geométrica',      // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'Na progressão geométrica 3, 6, 12, 24, ..., o 6º termo é:', // pergunta
    alternativas: [                     // opções
      '48',
      '96',
      '192',
      '72',
      '64'
    ],
    correta: 1,                         // índice da certa
    passos: [                           // passo a passo
      'A razão é q = 6 ÷ 3 = 2.',
      'Termo geral: a(n) = a1 × q^(n−1) = 3 × 2⁵.',
      '3 × 32 = 96.'
    ],
    explicacao: 'Multiplicando por 2 a cada passo: 3, 6, 12, 24, 48, 96. O 6º termo é 96.', // explicação
    dica: 'Erro mais comum: usar 2⁶ em vez de 2⁵ (daria 192, que está nas alternativas). Em PA e PG o expoente/índice é sempre (n − 1).', // pegadinha
    video: 'progressão geométrica termo geral para concurso' // busca no YouTube
  },
  {
    id: 'm24',                          // identificador único
    materia: 'Matemática',              // matéria
    tema: 'MMC (problemas de encontro)', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'Dois ônibus partem juntos às 8h. Um passa no ponto a cada 15 minutos e o outro a cada 20 minutos. A que horas eles partirão juntos novamente?', // pergunta
    alternativas: [                     // opções
      '8h35',
      '9h00',
      '9h30',
      '8h45',
      '10h00'
    ],
    correta: 1,                         // índice da certa
    passos: [                           // passo a passo
      'O encontro acontece no MMC dos intervalos: MMC(15, 20).',
      '15 = 3 × 5 e 20 = 2² × 5.',
      'MMC = 2² × 3 × 5 = 60 minutos.',
      '8h + 60 min = 9h00.'
    ],
    explicacao: '"Se encontram novamente" é a palavra-chave do MMC. O MMC(15, 20) = 60 minutos, então eles se reencontram às 9h.', // explicação
    dica: 'Dica de ouro: "de novo juntos" = MMC; "dividir em partes iguais" = MDC. A banca usa as duas expressões para confundir.', // pegadinha
    video: 'mmc problemas de encontro para concurso' // busca no YouTube
  },

  /* ===================== LOTE NOVO — RACIOCÍNIO LÓGICO (r13 a r16) ===================== */
  {
    id: 'r13',                          // identificador único
    materia: 'Raciocínio Lógico',       // matéria
    tema: 'Tabela-verdade do condicional', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'A proposição "Se estudo, então passo" só é FALSA quando:', // pergunta
    alternativas: [                     // opções
      'Estudo e passo',
      'Estudo e não passo',
      'Não estudo e passo',
      'Não estudo e não passo',
      'Nunca é falsa'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O condicional "p → q" só é falso quando a primeira parte é verdadeira e a segunda é falsa (V → F = F). Todas as outras combinações tornam a proposição verdadeira.', // explicação
    dica: 'Grave a ÚNICA linha falsa do "se... então": VF = F ("Vera Fischer"). A banca cobra isso quase toda prova de lógica.', // pegadinha
    video: 'tabela verdade condicional se então para concurso' // busca no YouTube
  },
  {
    id: 'r14',                          // identificador único
    materia: 'Raciocínio Lógico',       // matéria
    tema: 'Anagramas e permutação',     // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FGV',                       // banca inspiradora
    enunciado: 'Quantos anagramas diferentes tem a palavra CAFÉ (todas as letras distintas)?', // pergunta
    alternativas: [                     // opções
      '4',
      '12',
      '24',
      '120',
      '16'
    ],
    correta: 2,                         // índice da certa
    passos: [                           // passo a passo
      'São 4 letras, todas diferentes.',
      'Anagramas = permutação de 4 = 4!',
      '4! = 4 × 3 × 2 × 1 = 24.'
    ],
    explicacao: 'Com letras todas distintas, o número de anagramas é 4! = 24.', // explicação
    dica: 'Se houvesse letra repetida (ex.: CASA), seria preciso dividir pelo fatorial da repetição (4! ÷ 2!). A banca troca "letras distintas" por "com repetição" para pegar você.', // pegadinha
    video: 'anagramas permutação para concurso' // busca no YouTube
  },
  {
    id: 'r15',                          // identificador único
    materia: 'Raciocínio Lógico',       // matéria
    tema: 'Ordenação',                  // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'Ana é mais alta que Bia; Bia é mais alta que Caio; Caio é mais alto que Dani. Quem é a pessoa mais baixa?', // pergunta
    alternativas: [                     // opções
      'Ana',
      'Bia',
      'Caio',
      'Dani',
      'Não é possível saber'
    ],
    correta: 3,                         // índice da certa
    explicacao: 'Encadeando as comparações: Ana > Bia > Caio > Dani. Dani fica no fim da fila, portanto é a pessoa mais baixa.', // explicação
    dica: 'Escreva a cadeia com os sinais (A > B > C > D) antes de responder. A banca embaralha a ordem das frases de propósito.', // pegadinha
    video: 'questões de ordenação raciocínio lógico para concurso' // busca no YouTube
  },
  {
    id: 'r16',                          // identificador único
    materia: 'Raciocínio Lógico',       // matéria
    tema: 'Negação de "algum"',         // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'A negação da proposição "Algum candidato passou" é:', // pergunta
    alternativas: [                     // opções
      'Algum candidato não passou',
      'Nenhum candidato passou',
      'Todo candidato passou',
      'Poucos candidatos passaram',
      'Alguns candidatos passaram'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A negação de "algum" é "nenhum": se é falso que algum passou, então nenhum passou.', // explicação
    dica: 'Decore os dois pares de negação: TODO ↔ ALGUM NÃO e ALGUM ↔ NENHUM. Trocar o par é o erro mais comum da lógica de proposições.', // pegadinha
    video: 'negação de proposições algum nenhum todo para concurso' // busca no YouTube
  },

  /* ===================== LOTE NOVO — RACIOCÍNIO LÓGICO (r17 a r18) ===================== */
  {
    id: 'r17',                          // identificador único
    materia: 'Raciocínio Lógico',       // matéria
    tema: 'Trabalho conjunto (torneiras)', // assunto
    nivel: 'dificil',                   // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FGV',                       // banca inspiradora
    enunciado: 'Uma torneira enche um tanque em 6 horas e outra enche o mesmo tanque em 3 horas. Abertas juntas, elas enchem o tanque em:', // pergunta
    alternativas: [                     // opções
      '2 horas',
      '1h30',
      '4 horas',
      '4h30',
      '9 horas'
    ],
    correta: 0,                         // índice da certa
    passos: [                           // passo a passo
      'Em 1 hora, a 1ª torneira enche 1/6 do tanque e a 2ª enche 1/3.',
      'Juntas, por hora: 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2 do tanque.',
      'Se em 1 hora elas fazem metade, o tanque inteiro leva 2 horas.'
    ],
    explicacao: 'Somam-se as "velocidades" (frações do tanque por hora). Como juntas fazem 1/2 por hora, o total sai em 2 horas.', // explicação
    dica: 'Pegadinha: juntas NÃO é a média (6+3)÷2 = 4h30 — está nas alternativas! Duas torneiras sempre enchem mais rápido que a mais rápida sozinha (menos de 3h).', // pegadinha
    video: 'problemas de torneiras trabalho conjunto para concurso' // busca no YouTube
  },
  {
    id: 'r18',                          // identificador único
    materia: 'Raciocínio Lógico',       // matéria
    tema: 'Sequências alternadas',      // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'Na sequência 1, 4, 2, 8, 3, 12, 4, ..., os dois próximos termos são:', // pergunta
    alternativas: [                     // opções
      '16 e 5',
      '5 e 16',
      '8 e 5',
      '20 e 5',
      '16 e 6'
    ],
    correta: 0,                         // índice da certa
    passos: [                           // passo a passo
      'Separe em duas sequências: posições ímpares e posições pares.',
      'Ímpares: 1, 2, 3, 4... (soma 1 a cada termo).',
      'Pares: 4, 8, 12... (soma 4 a cada termo) → o próximo par é 16.',
      'Depois do 16 vem o 5 (próximo ímpar).'
    ],
    explicacao: 'São duas sequências entrelaçadas. Os termos das posições pares são 4, 8, 12, 16... e os das ímpares são 1, 2, 3, 4, 5... Logo: 16 e 5.', // explicação
    dica: 'Quando a sequência "muda de ritmo", separe em duas listas (ímpares e pares). Quem tenta achar um padrão único trava e erra.', // pegadinha
    video: 'sequências alternadas raciocínio lógico para concurso' // busca no YouTube
  },

  /* ===================== LOTE NOVO — INFORMÁTICA (i12 a i16) ===================== */
  {
    id: 'i12',                          // identificador único
    materia: 'Informática',             // matéria
    tema: 'Windows — atalhos',          // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'No Windows, o atalho Alt + Tab serve para:', // pergunta
    alternativas: [                     // opções
      'Fechar a janela ativa',
      'Alternar entre as janelas abertas',
      'Renomear o arquivo selecionado',
      'Abrir o menu Iniciar',
      'Bloquear o computador'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Alt + Tab percorre as janelas abertas: segurando Alt e apertando Tab você escolhe para qual janela ir. Alt + F4 fecha a janela ativa.', // explicação
    dica: 'A banca troca Alt + Tab (alternar) por Alt + F4 (fechar). Grave: Tab alterna, F4 fecha. Tecla Windows abre o Iniciar; Windows + L bloqueia.', // pegadinha
    video: 'atalhos do windows para concurso' // busca no YouTube
  },
  {
    id: 'i13',                          // identificador único
    materia: 'Informática',             // matéria
    tema: 'Excel — função SE',          // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'No Excel, a fórmula =SE(A1>=7;"Aprovado";"Reprovado") faz o seguinte:', // pergunta
    alternativas: [                     // opções
      'Soma a quantidade de aprovados',
      'Mostra "Aprovado" se A1 for maior ou igual a 7 e "Reprovado" caso contrário',
      'Conta quantos alunos foram aprovados',
      'Arredonda o valor de A1 para 7',
      'Formata a célula A1 como texto'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A função SE(testar; valor se verdadeiro; valor se falso) faz um teste lógico e devolve um dos dois valores. Aqui: se A1 ≥ 7, aparece "Aprovado"; senão, "Reprovado".', // explicação
    dica: 'A pegadinha está na ORDEM dos argumentos: primeiro o teste, depois o valor de VERDADEIRO e por último o de FALSO. A banca inverte os dois últimos.', // pegadinha
    video: 'função se no excel para concurso' // busca no YouTube
  },
  {
    id: 'i14',                          // identificador único
    materia: 'Informática',             // matéria
    tema: 'Extensões de arquivo',       // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'A extensão .xlsx corresponde a um arquivo de:', // pergunta
    alternativas: [                     // opções
      'Texto do Word',
      'Planilha do Excel',
      'Apresentação do PowerPoint',
      'Documento PDF',
      'Imagem digital'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Cada programa do pacote Office usa uma extensão: .docx = Word, .xlsx = Excel e .pptx = PowerPoint. O PDF é de leitura e o .jpg/.png são imagens.', // explicação
    dica: 'Pegadinha de uma letra: .docx (Word) x .xlsx (Excel). A banca troca o "d" pelo "x" e pega quem lê rápido demais.', // pegadinha
    video: 'extensões de arquivos docx xlsx pptx para concurso' // busca no YouTube
  },
  {
    id: 'i15',                          // identificador único
    materia: 'Informática',             // matéria
    tema: 'Navegadores — cookies',      // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'Sobre os cookies de navegador, é correto afirmar que:', // pergunta
    alternativas: [                     // opções
      'São vírus que danificam o computador',
      'São pequenos arquivos que guardam informações da navegação, como preferências e sessão de login',
      'Substituem o antivírus',
      'Aumentam a velocidade da conexão',
      'São programas instalados no sistema operacional'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Cookies são arquivos de texto que o site grava no navegador para lembrar preferências, manter você logado e guardar itens de carrinho. Não são vírus nem programas.', // explicação
    dica: 'A confusão clássica é chamar cookie de vírus. Cookie é DADO salvo; malware é PROGRAMA malicioso. A CESPE explora exatamente isso.', // pegadinha
    video: 'o que são cookies do navegador para concurso' // busca no YouTube
  },
  {
    id: 'i16',                          // identificador único
    materia: 'Informática',             // matéria
    tema: 'Segurança — firewall',       // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FGV',                       // banca inspiradora
    enunciado: 'A principal função de um firewall é:', // pergunta
    alternativas: [                     // opções
      'Apagar vírus já instalados no computador',
      'Filtrar o tráfego de rede, bloqueando conexões não autorizadas',
      'Fazer backup automático dos arquivos',
      'Compactar arquivos para ocupar menos espaço',
      'Atualizar o sistema operacional'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O firewall controla o que entra e o que sai da rede (portas e conexões), funcionando como um porteiro. Quem identifica e remove vírus é o antivírus.', // explicação
    dica: 'Guarde a analogia: firewall = porteiro (controla a entrada); antivírus = faxineiro (limpa o que já entrou). A banca troca as funções de propósito.', // pegadinha
    video: 'firewall e antivírus diferença para concurso' // busca no YouTube
  },

  /* ===================== LOTE NOVO — DIREITO CONSTITUCIONAL (c08 a c10) ===================== */
  {
    id: 'c08',                          // identificador único
    materia: 'Direito Constitucional',  // matéria
    tema: 'Direitos políticos — voto facultativo', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'No Brasil, o voto é FACULTATIVO para:', // pergunta
    alternativas: [                     // opções
      'Todos os maiores de 18 anos',
      'Analfabetos, maiores de 70 anos e jovens de 16 e 17 anos',
      'Apenas os militares',
      'Todos os maiores de 60 anos',
      'Somente quem está fora do país'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Art. 14, §1º, II da Constituição: o voto é facultativo para os analfabetos, os maiores de 70 anos e os maiores de 16 e menores de 18 anos.', // explicação
    dica: 'As idades caem direto: obrigatório de 18 a 70; facultativo de 16 a 18 e acima de 70. E os ANALFABETOS também entram no facultativo — muita gente esquece.', // pegadinha
    video: 'direitos políticos voto facultativo artigo 14 para concurso' // busca no YouTube
  },
  {
    id: 'c09',                          // identificador único
    materia: 'Direito Constitucional',  // matéria
    tema: 'Art. 5º — liberdade de expressão', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'Segundo a Constituição, é livre a manifestação do pensamento, sendo:', // pergunta
    alternativas: [                     // opções
      'permitido o anonimato',
      'vedado o anonimato',
      'obrigatória a autorização judicial prévia',
      'proibida em qualquer meio de comunicação',
      'restrita aos maiores de 18 anos'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Art. 5º, IV: "é livre a manifestação do pensamento, sendo vedado o anonimato". A vedação existe para garantir o direito de resposta a quem se sentir ofendido.', // explicação
    dica: 'A palavra que a banca cobra é VEDADO. Ela escreve "permitido o anonimato" para pegar quem lê correndo — e ainda mistura com o inciso V (direito de resposta).', // pegadinha
    video: 'artigo 5 liberdade de expressão vedado o anonimato concurso' // busca no YouTube
  },
  {
    id: 'c10',                          // identificador único
    materia: 'Direito Constitucional',  // matéria
    tema: 'Competências (art. 22)',     // assunto
    nivel: 'dificil',                   // dificuldade
    ensino: 'superior',              // nível do concurso
    banca: 'FGV',                       // banca inspiradora
    enunciado: 'Compete PRIVATIVAMENTE à União legislar sobre:', // pergunta
    alternativas: [                     // opções
      'Direito civil, penal e eleitoral',
      'Ensino fundamental',
      'Transporte coletivo municipal',
      'Uso do solo urbano',
      'Criação de municípios'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'Art. 22 da Constituição: é competência privativa da União legislar sobre direito civil, penal, eleitoral, comercial, do trabalho e outras matérias listadas nos incisos.', // explicação
    dica: 'Pegadinha de esfera: direito civil, penal e eleitoral são da União; transporte coletivo e uso do solo urbano são do MUNICÍPIO (interesse local). A banca mistura União, Estados e Municípios.', // pegadinha
    video: 'competência privativa da união artigo 22 para concurso' // busca no YouTube
  },

  /* ===================== LOTE NOVO — DIREITO CONSTITUCIONAL (c11 a c12) ===================== */
  {
    id: 'c11',                          // identificador único
    materia: 'Direito Constitucional',  // matéria
    tema: 'Poder Executivo — mandato',  // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'O mandato do Presidente da República é de:', // pergunta
    alternativas: [                     // opções
      '4 anos, sem possibilidade de reeleição',
      '4 anos, permitida uma reeleição para o período subsequente',
      '5 anos, sem possibilidade de reeleição',
      '6 anos, permitida a reeleição',
      '4 anos, com reeleições ilimitadas'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Art. 82 da Constituição: o mandato é de 4 anos. A Emenda Constitucional 16/1997 passou a permitir UMA reeleição para o período subsequente.', // explicação
    dica: 'A banca troca "uma reeleição" por "reeleição ilimitada". Leia o advérbio com atenção: é UMA única reeleição, e no período subsequente.', // pegadinha
    video: 'mandato do presidente da república reeleição emenda 16 concurso' // busca no YouTube
  },
  {
    id: 'c12',                          // identificador único
    materia: 'Direito Constitucional',  // matéria
    tema: 'Segurança pública (art. 144)', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'superior',              // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'São órgãos de segurança pública previstos no art. 144 da Constituição, EXCETO:', // pergunta
    alternativas: [                     // opções
      'Polícia Federal',
      'Polícia Rodoviária Federal',
      'Polícias Civis',
      'Exército Brasileiro',
      'Polícias Militares'
    ],
    correta: 3,                         // índice da certa
    explicacao: 'O art. 144 lista: Polícia Federal, Polícia Rodoviária Federal, Polícia Ferroviária Federal, Polícias Civis, Polícias Militares e Corpos de Bombeiros Militares, além das polícias penais. As Forças Armadas estão no art. 142 e não integram a segurança pública.', // explicação
    dica: 'Exército, Marinha e Aeronáutica são FORÇAS ARMADAS (art. 142), não segurança pública (art. 144). Essa separação de artigos cai muito em prova.', // pegadinha
    video: 'segurança pública artigo 144 órgãos para concurso' // busca no YouTube
  },

  /* ===================== LOTE NOVO — DIREITO ADMINISTRATIVO (a08 a a11) ===================== */
  {
    id: 'a08',                          // identificador único
    materia: 'Direito Administrativo',  // matéria
    tema: 'Princípios — impessoalidade', // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FGV',                       // banca inspiradora
    enunciado: 'Um prefeito nomeia seu sobrinho para um cargo em comissão. Esse ato viola diretamente o princípio da:', // pergunta
    alternativas: [                     // opções
      'Legalidade',
      'Impessoalidade',
      'Publicidade',
      'Eficiência',
      'Autotutela'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O princípio da impessoalidade proíbe favorecimento pessoal e veda o nepotismo (Súmula Vinculante 13). A atuação deve mirar o interesse público, não o interesse do agente ou de parentes.', // explicação
    dica: 'Nepotismo e promoção pessoal atacam a IMPESSOALIDADE. A banca oferece "moralidade" para confundir: os dois princípios são atingidos, mas o alvo direto do nepotismo é a impessoalidade.', // pegadinha
    video: 'princípio da impessoalidade nepotismo súmula vinculante 13' // busca no YouTube
  },
  {
    id: 'a09',                          // identificador único
    materia: 'Direito Administrativo',  // matéria
    tema: 'Licitação — dispensa x inexigibilidade', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'superior',              // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'A contratação de um artista consagrado pela crítica especializada ou pela opinião pública é hipótese de:', // pergunta
    alternativas: [                     // opções
      'Licitação dispensável',
      'Inexigibilidade de licitação',
      'Dispensa de licitação',
      'Licitação deserta',
      'Licitação fracassada'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Na inexigibilidade há impossibilidade de competição (artista consagrado, fornecedor exclusivo). Na dispensa a competição seria possível, mas a lei autoriza não licitar (valores baixos, emergência, entre outros).', // explicação
    dica: 'Diferença que a CESPE cobra todo ano: INEXIGÍVEL = competição IMPOSSÍVEL; DISPENSÁVEL = competição possível, mas a lei libera. Grave essa frase.', // pegadinha
    video: 'dispensa e inexigibilidade de licitação diferença para concurso' // busca no YouTube
  },
  {
    id: 'a10',                          // identificador único
    materia: 'Direito Administrativo',  // matéria
    tema: 'Provimento x vacância',      // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'São formas de PROVIMENTO de cargo público, EXCETO:', // pergunta
    alternativas: [                     // opções
      'Nomeação',
      'Promoção',
      'Readaptação',
      'Reversão',
      'Exoneração'
    ],
    correta: 4,                         // índice da certa
    explicacao: 'A exoneração é forma de VACÂNCIA (saída do cargo), não de provimento. São formas de provimento: nomeação, promoção, readaptação, reversão, aproveitamento, reintegração e recondução.', // explicação
    dica: 'Decore o par: PROVIMENTO = entrar; VACÂNCIA = sair. Exoneração, demissão, aposentadoria, falecimento e posse em outro cargo inacumulável são vacância.', // pegadinha
    video: 'formas de provimento e vacância cargo público para concurso' // busca no YouTube
  },
  {
    id: 'a11',                          // identificador único
    materia: 'Direito Administrativo',  // matéria
    tema: 'Contratos — cláusulas exorbitantes', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'superior',              // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'São exemplos de cláusulas exorbitantes dos contratos administrativos:', // pergunta
    alternativas: [                     // opções
      'Alteração unilateral e rescisão unilateral pela Administração',
      'Direito de o contratado alterar sozinho o objeto do contrato',
      'Impossibilidade de fiscalização pela Administração',
      'Renúncia prévia a todos os direitos pela Administração',
      'Garantia de equilíbrio econômico-financeiro'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'As cláusulas exorbitantes dão à Administração prerrogativas que o particular não tem: alterar e rescindir unilateralmente, fiscalizar a execução, aplicar sanções e ocupar provisoriamente bens e serviços.', // explicação
    dica: 'A alternativa (e) "equilíbrio econômico-financeiro" é garantia do CONTRATADO, não cláusula exorbitante. A banca coloca esse "primo" no meio para confundir.', // pegadinha
    video: 'cláusulas exorbitantes contratos administrativos para concurso' // busca no YouTube
  },

  /* ===================== LOTE NOVO — ATUALIDADES (t07 a t10) ===================== */
  {
    id: 't07',                          // identificador único
    materia: 'Atualidades',             // matéria
    tema: 'ONU — Conselho de Segurança', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Instituto AOCP',            // banca inspiradora
    enunciado: 'São membros permanentes do Conselho de Segurança da ONU, com direito a veto:', // pergunta
    alternativas: [                     // opções
      'Estados Unidos, Rússia, China, França e Reino Unido',
      'Estados Unidos, China, Brasil, Índia e Rússia',
      'Estados Unidos, Japão, Alemanha, França e Rússia',
      'Brasil, Rússia, Índia, China e África do Sul',
      'Estados Unidos, Canadá, México, França e Reino Unido'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'Os cinco membros permanentes (o chamado P5) são Estados Unidos, Rússia, China, França e Reino Unido. Os demais membros são rotativos e não têm direito a veto.', // explicação
    dica: 'O "P5" cai direto em atualidades. Cuidado com a alternativa BRICS (Brasil, Rússia, Índia, China e África do Sul): BRICS é bloco econômico, não Conselho de Segurança.', // pegadinha
    video: 'conselho de segurança da onu membros permanentes veto' // busca no YouTube
  },
  {
    id: 't08',                          // identificador único
    materia: 'Atualidades',             // matéria
    tema: 'Acordo de Paris',            // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'O Acordo de Paris, firmado em 2015, tem como objetivo central:', // pergunta
    alternativas: [                     // opções
      'Acabar com o uso de energia nuclear no mundo',
      'Limitar o aumento da temperatura global bem abaixo de 2 ºC, buscando 1,5 ºC',
      'Criar uma moeda única para o comércio internacional',
      'Proibir o desmatamento em todos os países signatários',
      'Facilitar o comércio entre os países das Américas'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O Acordo de Paris (COP21) definiu metas para conter o aquecimento global: manter o aumento da temperatura bem abaixo de 2 ºC e buscar 1,5 ºC. Cada país apresenta sua contribuição nacional (NDC).', // explicação
    dica: 'Números que caem: 2015, 2 ºC e 1,5 ºC. A banca troca os valores (por exemplo, "abaixo de 5 ºC") para pegar quem decorou pela metade.', // pegadinha
    video: 'acordo de paris 2015 mudanças climáticas resumo' // busca no YouTube
  },
  {
    id: 't09',                          // identificador único
    materia: 'Atualidades',             // matéria
    tema: 'LGPD',                       // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Instituto AOCP',            // banca inspiradora
    enunciado: 'A Lei Geral de Proteção de Dados (LGPD) trata:', // pergunta
    alternativas: [                     // opções
      'Da proteção de dados pessoais e da privacidade dos titulares',
      'Da criminalização de todos os crimes cibernéticos',
      'Da criação de impostos sobre tecnologia',
      'Do bloqueio de redes sociais durante as eleições',
      'Da obrigatoriedade de usar antivírus no serviço público'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'A LGPD (Lei 13.709/2018) estabelece regras para coleta, uso, armazenamento e compartilhamento de dados pessoais, criando direitos para o titular e deveres para empresas e órgãos públicos.', // explicação
    dica: 'Pegadinha de sigla: LGPD é sobre proteção de DADOS pessoais, não sobre crimes cibernéticos. O marco civil da internet é outra lei (12.965/2014).', // pegadinha
    video: 'lgpd lei geral de proteção de dados resumo' // busca no YouTube
  },
  {
    id: 't10',                          // identificador único
    materia: 'Atualidades',             // matéria
    tema: 'PIX',                        // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'Sobre o PIX, criado pelo Banco Central do Brasil, é correto afirmar:', // pergunta
    alternativas: [                     // opções
      'É um cartão de crédito internacional',
      'É um meio de pagamento instantâneo, disponível 24 horas por dia em todos os dias',
      'É um aplicativo de investimento em ações',
      'É uma criptomoeda brasileira',
      'É um tipo de boleto bancário com prazo de compensação'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O PIX é o sistema de pagamentos instantâneos do Banco Central: transferências e pagamentos em segundos, 24 horas por dia, usando chave PIX, QR Code, dados bancários ou aproximação.', // explicação
    dica: 'PIX não é criptomoeda nem cartão: é um sistema de pagamento instantâneo com trilha bancária. A banca explora a confusão entre PIX e cripto.', // pegadinha
    video: 'o que é pix banco central como funciona' // busca no YouTube
  },

  /* ===================== LOTE NOVO — LÍNGUA PORTUGUESA (p26 a p29) ===================== */
  // TEAM_001: novo lote de 40 questões (total: 168)
  {
    id: 'p26',                          // identificador único
    materia: 'Língua Portuguesa',       // matéria
    tema: 'Classes de palavras — pronome relativo "que"', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'Em "O candidato que estuda todos os dias aprende", a palavra "que" é:', // pergunta
    alternativas: [                     // opções
      'Conjunção integrante',
      'Pronome relativo',
      'Advérbio de modo',
      'Preposição',
      'Conjunção coordenativa'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O "que" retoma "candidato" (antecedente) e introduz uma oração adjetiva — é pronome relativo. Teste clássico: dá para trocar por "o qual" (o candidato O QUAL estuda). Na conjunção integrante, a troca não funciona.', // explicação
    dica: 'CESPE cobra essa distinção direto: "que" trocável por "o qual/a qual" = pronome relativo; "que" introduzindo oração substantiva ("espero que chova") = conjunção integrante.', // pegadinha
    video: 'que pronome relativo ou conjunção integrante para concurso' // busca no YouTube
  },
  {
    id: 'p27',                          // identificador único
    materia: 'Língua Portuguesa',       // matéria
    tema: 'Coesão — referência anafórica', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FGV',                       // banca inspiradora
    enunciado: 'No trecho "O aluno comprou a apostila e levou-a para casa", o elemento "a" refere-se a:', // pergunta
    alternativas: [                     // opções
      'O aluno',
      'A apostila',
      'A casa',
      'O estudo',
      'O material'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O pronome oblíquo "a" retoma "apostila", termo já citado — é referência anafórica (aponta para trás no texto). A FGV adora perguntar a quem o pronome se refere.', // explicação
    dica: 'Para achar o referente, procure o substantivo mais próximo que combine em gênero e número com o pronome ("a" feminino singular → apostila). Não caia no primeiro substantivo da frase.', // pegadinha
    video: 'coesão referencial anáfora pronome para concurso' // busca no YouTube
  },
  {
    id: 'p28',                          // identificador único
    materia: 'Língua Portuguesa',       // matéria
    tema: 'Ortografia — mal x mau / bem x bom', // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'Assinale a frase correta quanto ao uso de "mal" e "mau":', // pergunta
    alternativas: [                     // opções
      'O aluno foi mau na prova de matemática.',
      'O mal comportamento do aluno gerou advertência.',
      'Ele está sempre de mau humor.',
      'Fizeram mal julgamento do professor.',
      'O professor é mal com os alunos.'
    ],
    correta: 2,                         // índice da certa
    explicacao: '"Mau" é adjetivo (oposto de bom): mau humor, mau comportamento. "Mal" é advérbio ou substantivo (oposto de bem/malefício): foi mal na prova, fez o mal. Troque por "bom/bem" para conferir.', // explicação
    dica: 'Regra rápida da IBFC: MAU ↔ BOM (adjetivos), MAL ↔ BEM (advérbio). Se dá para trocar por "bom", é "mau" com U.', // pegadinha
    video: 'diferença entre mal e mau para concurso' // busca no YouTube
  },
  {
    id: 'p29',                          // identificador único
    materia: 'Língua Portuguesa',       // matéria
    tema: 'Sinônimos — variante contextual', // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'No trecho "o edital saiu de forma abrupta, sem aviso", a palavra "abrupta" pode ser substituída, sem prejuízo de sentido, por:', // pergunta
    alternativas: [                     // opções
      'gradual',
      'repentina',
      'lenta',
      'parcial',
      'definitiva'
    ],
    correta: 1,                         // índice da certa
    explicacao: '"Abrupto" significa súbito, repentino — algo que acontece de uma vez. "Gradual" e "lenta" são antônimos; "parcial" e "definitiva" fogem do sentido do contexto.', // explicação
    dica: 'A FCC cobra sinônimo SEMPRE no contexto da frase, nunca de dicionário puro. Leia a frase inteira antes de marcar o sinônimo mais óbvio.', // pegadinha
    video: 'sinônimos em contexto para concurso como resolver' // busca no YouTube
  },

  /* ===================== LOTE NOVO — MATEMÁTICA (m25 a m28) ===================== */
  {
    id: 'm25',                          // identificador único
    materia: 'Matemática',              // matéria
    tema: 'Frações',                    // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'Um candidato estudou 3/5 de um edital de 200 tópicos. Quantos tópicos ainda faltam estudar?', // pergunta
    alternativas: [                     // opções
      '60',
      '80',
      '100',
      '120',
      '140'
    ],
    correta: 1,                         // índice da certa
    passos: [                           // passo a passo
      'Calcule o que já foi estudado: 3/5 de 200 = (200 ÷ 5) × 3 = 40 × 3 = 120.',
      'Subtraia do total: 200 − 120 = 80 tópicos.'
    ],
    explicacao: '3/5 de 200 são 120 tópicos estudados; restam 80. A pergunta é sobre o que FALTA, não sobre o que já foi feito.', // explicação
    dica: 'A alternativa "120" é o valor estudado — a Vunesp aposta que você marca a primeira conta que aparece. Confira o comando: estudou ou faltam?', // pegadinha
    video: 'frações problemas para concurso como resolver' // busca no YouTube
  },
  {
    id: 'm26',                          // identificador único
    materia: 'Matemática',              // matéria
    tema: 'Conversão de unidades (tempo)', // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'Um simulado durou 2 horas e 45 minutos. Quantos minutos durou o simulado?', // pergunta
    alternativas: [                     // opções
      '105 minutos',
      '120 minutos',
      '145 minutos',
      '165 minutos',
      '245 minutos'
    ],
    correta: 3,                         // índice da certa
    passos: [                           // passo a passo
      'Converta as horas: 2 h × 60 = 120 minutos.',
      'Some os minutos restantes: 120 + 45 = 165 minutos.'
    ],
    explicacao: 'Cada hora tem 60 minutos: 2 horas são 120 minutos, mais os 45 avulsos, totalizam 165 minutos.', // explicação
    dica: 'A alternativa "120" é só a conversão das horas — a IBFC deixa a conta incompleta de propósito. Converta tudo para a MESMA unidade antes de somar.', // pegadinha
    video: 'conversão de unidades de tempo horas minutos para concurso' // busca no YouTube
  },
  {
    id: 'm27',                          // identificador único
    materia: 'Matemática',              // matéria
    tema: 'Equação do 2º grau',         // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'As raízes da equação x² − 5x + 6 = 0 são:', // pergunta
    alternativas: [                     // opções
      'x = 1 e x = 6',
      'x = 2 e x = 3',
      'x = −2 e x = −3',
      'x = 5 e x = 1',
      'x = 6 e x = −1'
    ],
    correta: 1,                         // índice da certa
    passos: [                           // passo a passo
      'Por Bhaskara ou por soma e produto: dois números que somam 5 e multiplicam 6.',
      '2 + 3 = 5 e 2 × 3 = 6.',
      'As raízes são x = 2 e x = 3.'
    ],
    explicacao: 'Usando as relações de Girard: soma das raízes = −b/a = 5; produto = c/a = 6. Os números 2 e 3 satisfazem as duas condições — muito mais rápido que Bhaskara.', // explicação
    dica: 'Soma e produto resolvem equações com raízes inteiras em segundos. A alternativa "−2 e −3" pega quem esquece que com produto positivo e soma positiva as duas raízes são positivas.', // pegadinha
    video: 'equação do segundo grau soma e produto para concurso' // busca no YouTube
  },
  {
    id: 'm28',                          // identificador único
    materia: 'Matemática',              // matéria
    tema: 'Velocidade média',           // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'Um candidato dirigiu 240 km para prestar concurso e gastou 3 horas no trajeto. Qual foi a velocidade média da viagem?', // pergunta
    alternativas: [                     // opções
      '60 km/h',
      '70 km/h',
      '80 km/h',
      '90 km/h',
      '96 km/h'
    ],
    correta: 2,                         // índice da certa
    passos: [                           // passo a passo
      'Aplique a fórmula: velocidade média = distância ÷ tempo.',
      'v = 240 ÷ 3 = 80 km/h.'
    ],
    explicacao: 'Velocidade média é a razão entre a distância total e o tempo total: 240 km em 3 horas dão 80 km/h.', // explicação
    dica: 'Fórmula para decorar: v = Δs/Δt. A Vunesp inverte a conta nas alternativas erradas — quem divide 3 por 240 acha um número absurdo e desespera.', // pegadinha
    video: 'velocidade média problemas para concurso' // busca no YouTube
  },

  /* ===================== LOTE NOVO — RACIOCÍNIO LÓGICO (r19 a r22) ===================== */
  {
    id: 'r19',                          // identificador único
    materia: 'Raciocínio Lógico',       // matéria
    tema: 'Calendários — dias da semana', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'Se hoje é sábado, daqui a 100 dias será:', // pergunta
    alternativas: [                     // opções
      'Domingo',
      'Segunda-feira',
      'Terça-feira',
      'Quarta-feira',
      'Sexta-feira'
    ],
    correta: 1,                         // índice da certa
    passos: [                           // passo a passo
      'Divida 100 por 7 (dias da semana): 100 = 7 × 14 + 2.',
      'O resto é 2: basta avançar 2 dias a partir de sábado.',
      'Sábado + 1 = domingo; sábado + 2 = segunda-feira.'
    ],
    explicacao: 'Em problemas de calendário, só o resto da divisão por 7 importa. 100 dias têm 14 semanas completas (que voltam para sábado) e sobram 2 dias: segunda-feira.', // explicação
    dica: 'A CESPE adora números grandes para assustar: 100, 365, 1.000 dias. Divida por 7 e trabalhe só com o resto — semanas inteiras não mudam o dia.', // pegadinha
    video: 'calendário dias da semana raciocínio lógico para concurso' // busca no YouTube
  },
  {
    id: 'r20',                          // identificador único
    materia: 'Raciocínio Lógico',       // matéria
    tema: 'Associações lógicas',        // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'Ana, Bia e Caio bebem, cada um, uma bebida diferente: café, chá e suco. Ana não bebe chá. Bia não bebe suco. Caio não bebe café nem suco. Qual é a bebida de Ana?', // pergunta
    alternativas: [                     // opções
      'Café',
      'Chá',
      'Suco',
      'Café ou suco',
      'Não é possível determinar'
    ],
    correta: 2,                         // índice da certa
    passos: [                           // passo a passo
      'Caio não bebe café nem suco → só sobra chá para Caio.',
      'Restam café e suco para Ana e Bia. Bia não bebe suco → Bia fica com o café.',
      'Sobra o suco para Ana (que não bebe chá, mas chá já é de Caio).'
    ],
    explicacao: 'Resolva por quem tem mais restrições: Caio só pode beber chá. Sobram café e suco; como Bia não bebe suco, ela fica com o café, e o suco sobra para Ana — que, aliás, não bebe chá mesmo.', // explicação
    dica: 'Monte uma tabela (pessoas × bebidas) e marque X nas impossibilidades. Preencha primeiro quem tem MAIS restrições (Caio); o resto da tabela se resolve sozinho.', // pegadinha
    video: 'associações lógicas problemas para concurso tabela' // busca no YouTube
  },
  {
    id: 'r21',                          // identificador único
    materia: 'Raciocínio Lógico',       // matéria
    tema: 'Conjuntos — união e interseção', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'Em uma turma de 40 alunos, 25 estudam inglês, 18 estudam espanhol e 10 estudam os dois idiomas. Quantos alunos não estudam nenhum dos dois?', // pergunta
    alternativas: [                     // opções
      '5',
      '7',
      '8',
      '10',
      '12'
    ],
    correta: 1,                         // índice da certa
    passos: [                           // passo a passo
      'Use a fórmula: |I ∪ E| = |I| + |E| − |I ∩ E| = 25 + 18 − 10 = 33.',
      'Subtraia do total: 40 − 33 = 7 alunos.'
    ],
    explicacao: 'Somando 25 + 18 = 43, os 10 alunos que estudam os dois foram contados duas vezes — desconte-os uma vez: 33 estudam ao menos um idioma. Os 7 restantes não estudam nenhum.', // explicação
    dica: 'O erro clássico é somar 25 + 18 = 43 e marcar que "estourou a turma". A interseção ("estudam os dois") é o ajuste — sempre subtraia uma vez.', // pegadinha
    video: 'conjuntos união interseção diagrama de venn para concurso' // busca no YouTube
  },
  {
    id: 'r22',                          // identificador único
    materia: 'Raciocínio Lógico',       // matéria
    tema: 'Quantificadores — todo/algum', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'Se "todo aprovado estuda", então é correto concluir que:', // pergunta
    alternativas: [                     // opções
      'Quem estuda é aprovado',
      'Quem não estuda não é aprovado',
      'Algum aprovado não estuda',
      'Todo estudioso é aprovado',
      'Nenhum aprovado estuda'
    ],
    correta: 1,                         // índice da certa
    explicacao: '"Todo A é B" equivale à contrapositiva "quem não é B não é A": quem não estuda não pode ser aprovado. Inverter ("quem estuda é aprovado") é o erro clássico — o enunciado não garante isso.', // explicação
    dica: 'CESPE explora a inversão indevida: "Todo aprovado estuda" NÃO quer dizer "Todo que estuda é aprovado". A contrapositiva preserva o sentido; a inversão, não.', // pegadinha
    video: 'quantificadores todo algum nenhum lógica para concurso' // busca no YouTube
  },

  /* ===================== LOTE NOVO — INFORMÁTICA (i17 a i20) ===================== */
  {
    id: 'i17',                          // identificador único
    materia: 'Informática',             // matéria
    tema: 'Internet — URL, IP e DNS',   // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'Em "https://www.site.com.br/provas", o endereço completo é chamado de:', // pergunta
    alternativas: [                     // opções
      'Endereço IP',
      'URL',
      'Servidor DNS',
      'Cookie de sessão',
      'Firewall'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'URL é o endereço completo de um recurso na web (protocolo + domínio + caminho). O IP é o número do servidor; o DNS é o serviço que traduz o domínio em IP; o "https" é o protocolo seguro.', // explicação
    dica: 'A FCC mistura URL, IP e DNS na mesma questão: URL = o endereço que você digita; IP = o número por trás dele; DNS = a "agenda telefônica" que faz a tradução.', // pegadinha
    video: 'o que é url ip dns diferença informática para concurso' // busca no YouTube
  },
  {
    id: 'i18',                          // identificador único
    materia: 'Informática',             // matéria
    tema: 'E-mail — campos Cc e Cco',   // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'Ao enviar um e-mail, o campo "Cco" (Bcc) serve para:', // pergunta
    alternativas: [                     // opções
      'Enviar cópia visível para todos os destinatários',
      'Enviar cópia oculta: os demais destinatários não veem quem recebeu',
      'Anexar arquivos grandes ao e-mail',
      'Marcar o e-mail como urgente',
      'Encaminhar a mensagem automaticamente'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Cco = cópia oculta: quem está nesse campo recebe a mensagem, mas não aparece para os demais destinatários. Já o "Cc" envia cópia visível para todos.', // explicação
    dica: 'Decore o par da IBFC: Cc = cópia VISÍVEL (com carbono); Cco = cópia OCULTA (com carbono oculto). A banca inverte os dois nas alternativas.', // pegadinha
    video: 'campo cc cco bcc e-mail para concurso informática' // busca no YouTube
  },
  {
    id: 'i19',                          // identificador único
    materia: 'Informática',             // matéria
    tema: 'Armazenamento em nuvem',     // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'Uma vantagem de guardar arquivos em nuvem (Google Drive, OneDrive) em relação ao disco local é:', // pergunta
    alternativas: [                     // opções
      'Os arquivos ficam inacessíveis fora do computador',
      'O acesso de qualquer dispositivo conectado à internet, com sincronização automática',
      'A impossibilidade de compartilhar arquivos com outras pessoas',
      'A garantia de que os arquivos jamais serão apagados',
      'O uso obrigatório de senha única para cada arquivo'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Nuvem = servidores remotos acessados pela internet: os arquivos ficam disponíveis em qualquer dispositivo, sincronizam sozinhos e facilitam o compartilhamento — sem depender de um único computador.', // explicação
    dica: 'Pegadinha CESPE: "nuvem" NÃO é um lugar mágico — são servidores de outras pessoas. E o acesso exige internet (ou sincronização prévia); quem diz "funciona sempre offline" está errado.', // pegadinha
    video: 'armazenamento em nuvem google drive onedrive para concurso' // busca no YouTube
  },
  {
    id: 'i20',                          // identificador único
    materia: 'Informática',             // matéria
    tema: 'Internet x intranet',        // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'A principal diferença entre internet e intranet é que a intranet:', // pergunta
    alternativas: [                     // opções
      'É uma rede restrita a uma organização, com acesso limitado a usuários autorizados',
      'É uma rede pública mundial acessível por qualquer pessoa',
      'Funciona sem uso do protocolo TCP/IP',
      'Não permite acesso a e-mail corporativo',
      'Substitui a internet em todas as funções'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'A intranet usa a mesma tecnologia da internet (TCP/IP, navegador, e-mail), mas é privada: restrita a funcionários de uma empresa ou órgão, geralmente acessada via login ou rede interna.', // explicação
    dica: 'A CESPE vende a ideia de que intranet usa tecnologia diferente — errado: ela usa a MESMA tecnologia da internet; o que muda é quem pode acessar.', // pegadinha
    video: 'diferença entre internet e intranet para concurso' // busca no YouTube
  },

  /* ===================== LOTE NOVO — DIREITO CONSTITUCIONAL (c13 a c16) ===================== */
  {
    id: 'c13',                          // identificador único
    materia: 'Direito Constitucional',  // matéria
    tema: 'Art. 5º — proibição de prisão por dívida', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'Segundo a Constituição, não haverá prisão civil por dívida, EXCETO a do:', // pergunta
    alternativas: [                     // opções
      'Devedor de alimentos e do depositário infiel',
      'Devedor de impostos e multas',
      'Devedor de empréstimo bancário',
      'Fiador em contrato de aluguel',
      'Responsável por dano em acidente de trânsito'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'O art. 5º, LXVII, prevê apenas DUAS exceções à prisão civil por dívida: o devedor voluntário de pensão alimentícia e o depositário infiel (quem não devolve o bem confiado).', // explicação
    dica: 'A CESPE troca "depositário infiel" por "devedor de impostos" — imposto não gera prisão civil. Decore as duas únicas exceções: ALIMENTOS e DEPÓSITO INFIEL.', // pegadinha
    video: 'prisão civil por dívida exceções art 5 constituição concurso' // busca no YouTube
  },
  {
    id: 'c14',                          // identificador único
    materia: 'Direito Constitucional',  // matéria
    tema: 'Nacionalidade — cargos privativos', // assunto
    nivel: 'dificil',                   // dificuldade
    ensino: 'superior',              // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'São cargos privativos de brasileiros NATOS, EXCETO:', // pergunta
    alternativas: [                     // opções
      'Presidente da República',
      'Ministro de Estado da Fazenda',
      'Presidente do Senado Federal',
      'Oficial-general das Forças Armadas',
      'Ministro do Supremo Tribunal Federal'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O art. 12, §3º, lista os cargos privativos de brasileiros natos: Presidente e Vice da República, presidentes da Câmara e do Senado, ministros do STF, carreira diplomática e oficial-general. Ministro da Fazenda não está na lista.', // explicação
    dica: 'Macete da FCC: os cargos privativos têm um "G" a mais — general e diplomata; os demais são os "3 P" (Presidente da República, da Câmara, do Senado) mais STF. Ministro de Estado comum não entra.', // pegadinha
    video: 'brasileiro nato cargos privativos art 12 constituição concurso' // busca no YouTube
  },
  {
    id: 'c15',                          // identificador único
    materia: 'Direito Constitucional',  // matéria
    tema: 'Remédios — Habeas Data',     // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FGV',                       // banca inspiradora
    enunciado: 'O remédio constitucional que garante acesso a informações pessoais do próprio requerente em bancos de dados públicos é o:', // pergunta
    alternativas: [                     // opções
      'Habeas Corpus',
      'Habeas Data',
      'Mandado de Segurança',
      'Ação Popular',
      'Mandado de Injunção'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O Habeas Data (art. 5º, LXXII) serve para conhecer ou retificar informações pessoais em bancos de dados públicos (ou de caráter público, como o Serasa). HC protege a locomoção; MS protege direito líquido e certo.', // explicação
    dica: 'A FGV troca HC com HD de propósito: HC = ir e vir (locomoção); HD = informação (DATA = dado). Se a questão fala em "banco de dados" ou "retificar informação", é Habeas Data.', // pegadinha
    video: 'habeas data remédios constitucionais para concurso' // busca no YouTube
  },
  {
    id: 'c16',                          // identificador único
    materia: 'Direito Constitucional',  // matéria
    tema: 'Seguridade social (art. 194)', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'superior',              // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'Integram a seguridade social, segundo a Constituição:', // pergunta
    alternativas: [                     // opções
      'Saúde, previdência social e assistência social',
      'Saúde, educação e trabalho',
      'Previdência, assistência e moradia',
      'Saúde, habitação e saneamento',
      'Assistência, alimentação e lazer'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'O art. 194 define a seguridade social como um conjunto integrado de ações nas áreas de SAÚDE, PREVIDÊNCIA e ASSISTÊNCIA social. Educação, trabalho e moradia são direitos sociais (art. 6º), mas não integram a seguridade.', // explicação
    dica: 'Decore a trinca PAS: Previdência + Assistência + Saúde = Seguridade. A IBFC enfia educação e moradia (que são do art. 6º) no meio para confundir.', // pegadinha
    video: 'seguridade social saúde previdência assistência art 194 concurso' // busca no YouTube
  },

  /* ===================== LOTE NOVO — DIREITO ADMINISTRATIVO (a12 a a15) ===================== */
  {
    id: 'a12',                          // identificador único
    materia: 'Direito Administrativo',  // matéria
    tema: 'Ato discricionário x vinculado', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'superior',              // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'O ato administrativo é DISCRICIONÁRIO quando:', // pergunta
    alternativas: [                     // opções
      'A lei deixa margem de juízo de conveniência e oportunidade ao administrador',
      'A lei define rigorosamente todos os requisitos do ato',
      'O administrador atua contra a vontade da lei',
      'O ato é praticado por agente incompetente',
      'O ato não produz efeitos jurídicos'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'No ato discricionário, a lei deixa liberdade de escolha (juízo de conveniência e oportunidade) no motivo e/ou no objeto — ex.: aplicar ou não uma sanção. No ato vinculado, tudo está predeterminado na lei.', // explicação
    dica: 'Palavras-chave da CESPE: conveniência + oportunidade + mérito administrativo = discricionariedade. Se a lei amarrar todos os requisitos, é vinculado — sem liberdade.', // pegadinha
    video: 'ato administrativo discricionário e vinculado diferença concurso' // busca no YouTube
  },
  {
    id: 'a13',                          // identificador único
    materia: 'Direito Administrativo',  // matéria
    tema: 'Elementos do ato administrativo', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'superior',              // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'Um ato administrativo praticado por agente sem competência legal tem vício no elemento:', // pergunta
    alternativas: [                     // opções
      'Forma',
      'Motivo',
      'Finalidade',
      'Competência',
      'Objeto'
    ],
    correta: 3,                         // índice da certa
    explicacao: 'Os cinco elementos são: competência, finalidade, forma, motivo e objeto. Agente fora da sua competência gera vício de competência — em regra anulável (salvo convalidação).', // explicação
    dica: 'Mnemônico da FCC: COM-FI-FOR-MO-OB — COmpetência, FInalidade, FORma, MOtivo, OBjeto. Identifique qual elemento a questão descreveu violado.', // pegadinha
    video: 'elementos do ato administrativo competência finalidade forma concurso' // busca no YouTube
  },
  {
    id: 'a14',                          // identificador único
    materia: 'Direito Administrativo',  // matéria
    tema: 'Princípio da autotutela',    // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'superior',              // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'O princípio que permite à Administração anular seus próprios atos ilegais, sem precisar ir ao Judiciário, é a:', // pergunta
    alternativas: [                     // opções
      'Supremacia do interesse público',
      'Indisponibilidade do interesse público',
      'Autotutela',
      'Presunção de legitimidade',
      'Continuidade do serviço'
    ],
    correta: 2,                         // índice da certa
    explicacao: 'A autotutela (Súmulas 346 e 473 do STF) autoriza a Administração a anular atos ilegais e revogar atos inoportunos por conta própria, sem recorrer ao Judiciário.', // explicação
    dica: 'Associação direta: autotutela = "guarda de si mesma" = anular (ilegal) ou revogar (inconveniente) ato próprio. Controle judicial não é autotutela.', // pegadinha
    video: 'princípio da autotutela administração pública concurso' // busca no YouTube
  },
  {
    id: 'a15',                          // identificador único
    materia: 'Direito Administrativo',  // matéria
    tema: 'Serviço público — concessão x permissão', // assunto
    nivel: 'dificil',                   // dificuldade
    ensino: 'superior',              // nível do concurso
    banca: 'FGV',                       // banca inspiradora
    enunciado: 'Na CONCESSÃO de serviço público, é correto afirmar:', // pergunta
    alternativas: [                     // opções
      'É ato unilateral e precário, revogável a qualquer tempo',
      'É contrato entre Administração e concessionária, precedido de licitação',
      'Dispensa licitação por se tratar de ato administrativo simples',
      'É proibida a remuneração do concessionário',
      'É destinada apenas a servidores públicos'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Concessão = contrato administrativo firmado após licitação, por prazo determinado; a concessionária se remunera pela tarifa cobrada do usuário (alienígena). A permissão é ato unilateral e precário, mais frágil.', // explicação
    dica: 'Par que a FGV cobra: CONCESSÃO = contrato + licitação + prazo + tarifa; PERMISSÃO = ato unilateral + precário + revogável. A autorização é ainda mais simples: ato unilateral, sem licitação.', // pegadinha
    video: 'concessão permissão autorização serviço público diferenças concurso' // busca no YouTube
  },

  /* ===================== LOTE NOVO — ATUALIDADES (t11 a t14) ===================== */
  {
    id: 't11',                          // identificador único
    materia: 'Atualidades',             // matéria
    tema: 'Drex (moeda digital)',       // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Instituto AOCP',            // banca inspiradora
    enunciado: 'O Drex, anunciado pelo Banco Central, é:', // pergunta
    alternativas: [                     // opções
      'Uma criptomoeda privada lançada por bancos digitais',
      'A moeda digital do real (CBDC), emitida pelo Banco Central',
      'Um novo sistema de transferências para substituir o PIX',
      'Um cartão de crédito emitido pelo governo federal',
      'Um índice de inflação para contratos bancários'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O Drex é a versão digital do real (moeda digital de banco central — CBDC): mesmo valor do real físico, emitida e garantida pelo Banco Central, focada em contratos inteligentes e tokenização.', // explicação
    dica: 'Trinca que a banca confunde: PIX (pagamento instantâneo), Drex (moeda digital do BC) e cripto privada (Bitcoin). Drex não substitui o PIX e não é criptomoeda.', // pegadinha
    video: 'drex moeda digital banco central o que é' // busca no YouTube
  },
  {
    id: 't12',                          // identificador único
    materia: 'Atualidades',             // matéria
    tema: 'Reforma tributária (EC 132/2023)', // assunto
    nivel: 'dificil',                   // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'A reforma tributária sobre o consumo (EC 132/2023) prevê, em linhas gerais:', // pergunta
    alternativas: [                     // opções
      'A criação de um imposto único sobre renda',
      'A unificação de tributos sobre consumo em um IVA dual: CBS (federal) e IBS (estadual/municipal)',
      'O fim de todos os impostos estaduais',
      'A extinção do Imposto de Renda',
      'A criação de contribuições municipais sobre serviços digitais apenas'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A reforma substitui PIS/Cofins, ICMS, ISS (e parte do IPI) por um IVA dual: CBS (controle federal) e IBS (estados e municípios), com transição gradual até 2033 e cashback para baixa renda.', // explicação
    dica: 'Cai muito em concurso de 2024-2026: lembre IVA dual = CBS + IBS. Se a alternativa disser "imposto único" ou "fim do ICMS imediato", está errada — a transição dura anos.', // pegadinha
    video: 'reforma tributária emenda 132 cbs ibs resumo' // busca no YouTube
  },
  {
    id: 't13',                          // identificador único
    materia: 'Atualidades',             // matéria
    tema: 'Mercosul',                   // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'São membros plenos do Mercosul:', // pergunta
    alternativas: [                     // opções
      'Brasil, Argentina, Paraguai, Uruguai e Bolívia',
      'Brasil, Argentina, Chile, Peru e Colômbia',
      'Brasil, México, Argentina e Estados Unidos',
      'Brasil, Argentina, Venezuela, Equador e Chile',
      'Todos os países da América do Sul'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'O Mercosul é um bloco econômico fundado em 1991 (Tratado de Assunção). Membros plenos: Brasil, Argentina, Paraguai, Uruguai e Bolívia (que concluiu a adesão). Venezuela está suspensa; Chile é associado.', // explicação
    dica: 'A FCC mistura membros plenos com associados (Chile, Peru, Colômbia, Equador). E atenção: Mercosul não tem moeda comum — é união aduaneira, não monetária.', // pegadinha
    video: 'mercosul membros plenos associados resumo' // busca no YouTube
  },
  {
    id: 't14',                          // identificador único
    materia: 'Atualidades',             // matéria
    tema: 'Eleições — urna eletrônica', // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'Sobre as urnas eletrônicas brasileiras, é correto afirmar:', // pergunta
    alternativas: [                     // opções
      'Foram introduzidas em todas as eleições a partir de 1996',
      'São conectadas à internet durante a votação para totalização em tempo real',
      'Foram criadas pelo Congresso Nacional em 2010',
      'São fabricadas exclusivamente no exterior',
      'Permitem ao eleitor votar mais de uma vez com checagem digital'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'As urnas eletrônicas foram usadas em todas as eleições desde 1996, são criadas e fiscalizadas pelo TSE e ficam totalmente desconectadas da internet durante a votação — requisito de segurança.', // explicação
    dica: 'A alternativa "conectadas à internet" é a pegadinha: as urnas funcionam OFFLINE; a totalização acontece depois, por mídia física e transmissão criptografada.', // pegadinha
    video: 'urna eletrônica como funciona segurança tse' // busca no YouTube
  },

  /* ===================== LOTE NOVO — HISTÓRIA DO BRASIL (h07 a h12) ===================== */
  {
    id: 'h07',                          // identificador único
    materia: 'História do Brasil',      // matéria
    tema: 'Colonização — capitanias hereditárias', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'O primeiro sistema administrativo usado por Portugal para ocupar o Brasil foi o das:', // pergunta
    alternativas: [                     // opções
      'Capitanias hereditárias',
      'Sesmarias rurais',
      'Missões jesuíticas',
      'Companhias de comércio',
      'Províncias autônomas'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'Em 1534, D. João III dividiu o litoral em 15 capitanias hereditárias doadas a particulares (donatários), com poderes quase absolutos. O sistema falhou em parte por ataques indígenas e falta de recursos.', // explicação
    dica: 'Confusão clássica: capitanias hereditárias (colonização, 1534) x sesmarias (doação de TERRA para cultivo, dentro das capitanias). Capitania = governo; sesmaria = terra.', // pegadinha
    video: 'capitanias hereditárias história do brasil resumo' // busca no YouTube
  },
  {
    id: 'h08',                          // identificador único
    materia: 'História do Brasil',      // matéria
    tema: 'Ditadura militar — AI-5',    // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Fuvest / Unicamp (vestibular)', // banca inspiradora
    enunciado: 'O momento de maior repressão da ditadura militar é associado ao:', // pergunta
    alternativas: [                     // opções
      'AI-1, de 1964',
      'AI-5, de 1968',
      'Pacote de Abril, de 1977',
      'Ato Adicional, de 1969',
      'Referendo de 1963'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O AI-5 (dezembro de 1968) fechou o Congresso, suspendeu direitos políticos e habeas corpus, endureceu a censura e abriu os "anos de chumbo" (1968-1974).', // explicação
    dica: 'Atos Institucionais têm ordem: AI-1 (64, legitimou o golpe), AI-2 (65, bipartidarismo/Arena-MDB), AI-5 (68, fechou tudo). O vestibular adora a ordem cronológica.', // pegadinha
    video: 'ai-5 ditadura militar anos de chumbo resumo' // busca no YouTube
  },
  {
    id: 'h09',                          // identificador único
    materia: 'História do Brasil',      // matéria
    tema: 'Inconfidência Mineira',      // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Fuvest / Unicamp (vestibular)', // banca inspiradora
    enunciado: 'A Inconfidência Mineira (1789) foi um movimento que:', // pergunta
    alternativas: [                     // opções
      'Lutava pelo fim imediato da escravidão em todo o Brasil',
      'Planejava a independência de Minas Gerais e a implantação de uma república',
      'Queria a volta da família real a Portugal',
      'Defendia a coroação de Dom Pedro I',
      'Reivindicava anistia para os jesuítas expulsos'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Inspirada no Iluminismo, a Inconfidência reuniu elite mineira, militares e intelectuais contra a derrama (cobrança de tributos). Planejava a independência da capitania e uma república — o delator, Joaquim Silvério dos Reis, entregou todos. Tiradentes foi executado em 1792.', // explicação
    dica: 'A banca troca o alvo do movimento: era separatista (Minas de Portugal), NÃO o fim da escravidão. "Independência do Brasil" em 1789 é anacronismo — o Brasil nem existia ainda.', // pegadinha
    video: 'inconfidência mineira 1789 tiradentes resumo história' // busca no YouTube
  },
  {
    id: 'h10',                          // identificador único
    materia: 'História do Brasil',      // matéria
    tema: 'Segundo Reinado — Guerra do Paraguai', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'A Guerra do Paraguai (1864-1870) teve como consequência direta para o Brasil:', // pergunta
    alternativas: [                     // opções
      'A independência imediata do Paraguai',
      'O fortalecimento do Exército e a crise entre militares e a monarquia',
      'O fim da escravidão no mesmo ano',
      'A proclamação da República',
      'A anexação de todo o Paraguai'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A vitória (Tríplice Aliança: Brasil, Argentina e Uruguai) custou caro: milhares de mortos e um Exército fortalecido e insatisfeito — a "questão militar" ajudou a derrubar a monarquia em 1889.', // explicação
    dica: 'A banca antecipa a República para 1870: a guerra terminou em 1870, mas a República só veio em 1889 — e justamente por causa do Exército fortalecido na guerra.', // pegadinha
    video: 'guerra do paraguai consequências brasil resumo' // busca no YouTube
  },
  {
    id: 'h11',                          // identificador único
    materia: 'História do Brasil',      // matéria
    tema: 'Coronelismo e voto de cabresto', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'Durante a República Velha, o "voto de cabresto" consistia em:', // pergunta
    alternativas: [                     // opções
      'Voto secreto e obrigatório para todos os cidadãos',
      'Controle dos votos dos eleitores pelos coronéis, graças ao voto aberto',
      'Sistema de votação por telefone nas cidades grandes',
      'Voto exclusivo dos militares nas eleições estaduais',
      'Escolha do presidente apenas pelos deputados federais'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Como o voto era aberto (não secreto) e a fiscalização era dos próprios coronéis, os chefes locais controlavam "suas" agremiações de eleitores — cabresto = levar o eleitorado como se leva um animal.', // explicação
    dica: 'O ENEM ama ligar coronelismo + voto aberto + República Velha. O voto secreto só veio em 1932 (Código Eleitoral) — marcar "voto secreto" em questão sobre República Velha é erro.', // pegadinha
    video: 'coronelismo voto de cabresto república velha resumo' // busca no YouTube
  },
  {
    id: 'h12',                          // identificador único
    materia: 'História do Brasil',      // matéria
    tema: 'Diretas Já',                 // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Fuvest / Unicamp (vestibular)', // banca inspiradora
    enunciado: 'A campanha "Diretas Já" (1983-1984) mobilizou milhões de brasileiros exigindo:', // pergunta
    alternativas: [                     // opções
      'O impeachment do presidente Sarney',
      'Eleições diretas para presidente, ainda na ditadura',
      'A estatização das empresas privadas',
      'O fim do voto obrigatório',
      'A convocação da Constituinte de 1988'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'As Diretas Já pediam a aprovação da emenda Dante de Oliveira (eleições diretas em 1984). A emenda foi REJEITADA no Congresso — e Tancredo Neves acabou eleito indiretamente pelo Colégio Eleitoral em 1985.', // explicação
    dica: 'Pegadinha fina: o movimento pediu diretas, mas elas NÃO aconteceram naquele momento — Tancredo foi eleito indiretamente. A primeira eleição direta pós-ditadura foi só em 1989.', // pegadinha
    video: 'diretas já 1984 tancredo neves resumo história' // busca no YouTube
  },

  /* ===================== LOTE NOVO — GEOGRAFIA (g07 a g12) ===================== */
  {
    id: 'g07',                          // identificador único
    materia: 'Geografia',               // matéria
    tema: 'Hidrografia — rio Amazonas', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'Sobre o rio Amazonas, é correto afirmar:', // pergunta
    alternativas: [                     // opções
      'É o rio mais longo do mundo, superando o Nilo em todos os critérios',
      'É o rio mais caudaloso do mundo, com a maior bacia hidrográfica',
      'Nasce em território brasileiro e deságua no rio Prata',
      'Tem caudal menor que o do rio São Francisco',
      'Não recebe afluentes fora do Brasil'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O Amazonas é o rio mais caudaloso do planeta (≈20% da água doce que chega aos oceanos) e tem a maior bacia do mundo. O título de mais extenso é disputado com o Nilo — e nasce no Peru, não no Brasil.', // explicação
    dica: 'A pegadinha é o "mais comprido": o Nilo disputa esse título. O que é incontestável: Amazonas = maior CAUDAL e maior BACIA. Nasce no Peru (rio Ucayali).', // pegadinha
    video: 'rio amazonas maior caudal bacia hidrográfica geografia' // busca no YouTube
  },
  {
    id: 'g08',                          // identificador único
    materia: 'Geografia',               // matéria
    tema: 'Migrações internas',         // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'Entre as décadas de 1960 e 1980, o principal fluxo migratório interno no Brasil foi:', // pergunta
    alternativas: [                     // opções
      'Do Sudeste para o Norte agrícola',
      'Do campo (sobretudo do Nordeste) para as metrópoles do Sudeste',
      'Das capitais para o interior rural',
      'Do Sul para o Nordeste litorâneo',
      'Do Centro-Oeste para o Sul industrializado'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O êxodo rural nordestino para São Paulo e outras metrópoles foi o maior movimento migratório do século XX no Brasil, puxado pela industrialização e empurrado pela seca e pela concentração de terras.', // explicação
    dica: 'Fatores que caem juntos: êxodo rural = expulsão do campo (mecanização, seca) + atração urbana (indústria, serviços). Não confunda com a migração de retorno posterior.', // pegadinha
    video: 'êxodo rural migrações internas brasil geografia resumo' // busca no YouTube
  },
  {
    id: 'g09',                          // identificador único
    materia: 'Geografia',               // matéria
    tema: 'Fusos horários do Brasil',   // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'O território brasileiro abrange, atualmente, quantos fusos horários?', // pergunta
    alternativas: [                     // opções
      'Dois',
      'Três',
      'Quatro',
      'Cinco',
      'Seis'
    ],
    correta: 2,                         // índice da certa
    explicacao: 'O Brasil tem quatro fusos: o de Brasília (UTC−3), o de Mato Grosso/Amazônia (UTC−4), o do Acre e sudoeste do Amazonas (UTC−5) e o das ilhas oceânicas, como Fernando de Noronha (UTC−2).', // explicação
    dica: 'Pegadinha de atualidade: entre 2008 e 2013 o Brasil chegou a ter apenas 3 fusos (o Acre perdeu o dele). Lei de 2013 restituiu o quarto fuso — confira o ano da prova!', // pegadinha
    video: 'fusos horários do brasil quantos são geografia' // busca no YouTube
  },
  {
    id: 'g10',                          // identificador único
    materia: 'Geografia',               // matéria
    tema: 'Cartografia — escala',       // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'Em um mapa de escala 1:100.000, uma distância de 5 cm no mapa corresponde, na realidade, a:', // pergunta
    alternativas: [                     // opções
      '500 metros',
      '5 quilômetros',
      '50 quilômetros',
      '500 quilômetros',
      '5 metros'
    ],
    correta: 1,                         // índice da certa
    passos: [                           // passo a passo
      'Escala 1:100.000 significa que 1 cm no mapa = 100.000 cm na realidade.',
      '5 cm × 100.000 = 500.000 cm na realidade.',
      'Converta: 500.000 cm = 5.000 m = 5 km.'
    ],
    explicacao: 'Basta multiplicar a medida do mapa pelo denominador da escala e converter as unidades: 5 cm × 100.000 = 500.000 cm = 5 km.', // explicação
    dica: 'Corta de zeros que cai muito: de cm para km são 5 zeros (cm→m = 2 zeros, m→km = 3 zeros). 500.000 cm corta 5 zeros e vira 5 km. A Vunesp coloca "50 km" e "500 m" de isca.', // pegadinha
    video: 'escala cartográfica como calcular distância no mapa' // busca no YouTube
  },
  {
    id: 'g11',                          // identificador único
    materia: 'Geografia',               // matéria
    tema: 'Coordenadas — latitude e longitude', // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'A LATITUDE de um ponto indica a distância angular desse ponto em relação:', // pergunta
    alternativas: [                     // opções
      'À linha do Equador, para norte ou para sul',
      'Ao meridiano de Greenwich, para leste ou para oeste',
      'Ao Círculo Polar Ártico, para qualquer direção',
      'Ao Trópico de Capricórnio, para leste',
      'À Linha Internacional de Data, para norte'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'Latitude = distância angular em relação ao Equador (0° a 90° N ou S). Longitude = distância angular em relação ao meridiano de Greenwich (0° a 180° E ou W). São elas que definem as coordenadas geográficas.', // explicação
    dica: 'Macete: LATItude tem "LAT" de lado a lado (linhas horizontais, paralelas ao Equador). A FCC inverte latitude com longitude nas alternativas — grave qual é qual.', // pegadinha
    video: 'latitude e longitude coordenadas geográficas resumo' // busca no YouTube
  },
  {
    id: 'g12',                          // identificador único
    materia: 'Geografia',               // matéria
    tema: 'Agrária — concentração de terras', // assunto
    nivel: 'dificil',                   // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'A elevada concentração de terras no Brasil (poucos donos de muitas terras) tem como marco histórico principal:', // pergunta
    alternativas: [                     // opções
      'A Lei de Terras de 1850, que passou a exigir compra das terras públicas',
      'A Constituição de 1824, que aboliu a propriedade privada',
      'A Abolição da escravidão, que distribuiu terras aos libertos',
      'A Proclamação da República, que nacionalizou os latifúndios',
      'O Estatuto da Cidade, que criou o zoneamento rural'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'A Lei de Terras (1850) passou a exigir registro e compra das terras devolutas — barrando o acesso dos libertos e dos pobres à terra e consolidando o latifúndio herdado das sesmarias e capitanias.', // explicação
    dica: 'Raiz histórica que o ENEM cobra: capitanias/sesmarias já concentravam, e a Lei de Terras de 1850 selou o processo. Libertos NUNCA receberam terra — isso sustenta a questão agrária até hoje.', // pegadinha
    video: 'lei de terras 1850 concentração fundiária brasil resumo' // busca no YouTube
  },

  /* ===================== LOTE NOVO — LÍNGUA PORTUGUESA (p30 a p34) ===================== */
  {
    id: 'p30',                          // identificador único
    materia: 'Língua Portuguesa',       // matéria
    tema: 'Conectivos — conclusão',     // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'Complete: "O candidato gabaritou o simulado; ___, foi aprovado."', // pergunta
    alternativas: [                     // opções
      'mas',
      'porque',
      'portanto',
      'embora',
      'contudo'
    ],
    correta: 2,                         // índice da certa
    explicacao: 'A segunda oração é consequência lógica da primeira (gabaritou → aprovado): conjunção conclusiva (portanto, logo, assim). Mas/contudo/embora marcam oposição; porque marca causa.', // explicação
    dica: 'Conclusivo atende por "logo" e "portanto": se a segunda parte é o RESULTADO da primeira, é conclusão — não confunda com causa (porque), que aponta o motivo, não o resultado.', // pegadinha
    video: 'conjunções conclusivas portanto logo para concurso' // busca no YouTube
  },
  {
    id: 'p31',                          // identificador único
    materia: 'Língua Portuguesa',       // matéria
    tema: 'Acentuação diferencial (pôde x pode)', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'Assinale a frase correta quanto ao uso de "pôde/pode":', // pergunta
    alternativas: [                     // opções
      'Ele pode resolver a questão ontem, mas não quis.',
      'Ele pôde resolver a questão ontem e gabaritou.',
      'Ele pôde resolver a questão amanhã, se quiser.',
      'Ele pode resolveu a questão ontem.',
      'Ele pôde vai resolver a questão ontem.'
    ],
    correta: 1,                         // índice da certa
    explicacao: '"Pôde" (com acento) é pretérito perfeito — ação concluída no passado: ontem ele pôde. "Pode" (sem acento) é presente ou possibilidade futura: hoje ele pode. O acento diferencia os tempos verbais.', // explicação
    dica: 'Regra de bolso da FCC: passado tem acento (pôde), presente não tem (pode). A alternativa "pôde amanhã" junta passado com futuro — impossível.', // pegadinha
    video: 'diferença entre pôde e pode acento diferencial concurso' // busca no YouTube
  },
  {
    id: 'p32',                          // identificador único
    materia: 'Língua Portuguesa',       // matéria
    tema: 'Partícula "se" — apassivador x indeterminador', // assunto
    nivel: 'dificil',                   // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FGV',                       // banca inspiradora
    enunciado: 'Em "Alugam-se salas para estudo", a partícula "se" e o sujeito são, respectivamente:', // pergunta
    alternativas: [                     // opções
      'Índice de indeterminação do sujeito; sujeito indeterminado',
      'Partícula apassivadora; "salas" é o sujeito paciente',
      'Pronome reflexivo; o sujeito é "o locador"',
      'Conjunção integrante; o sujeito é oculto',
      'Partícula expletiva; o sujeito é "estudo"'
    ],
    correta: 1,                         // índice da certa
    explicacao: '"Alugar" é transitivo direto: VTD + "se" = partícula apassivadora, e a frase está em voz passiva ("salas são alugadas") — "salas" é o sujeito. Já em "precisa-se de professores" (VTI), o "se" é índice de indeterminação.', // explicação
    dica: 'Chave da FGV: verbo pede objeto DIRETO + se → apassivador (existe sujeito: é o objeto virado sujeito). Verbo pede preposição (VTI) + se → índice de indeterminação (sujeito indeterminado).', // pegadinha
    video: 'partícula se apassivador índice indeterminação sujeito concurso' // busca no YouTube
  },
  {
    id: 'p33',                          // identificador único
    materia: 'Língua Portuguesa',       // matéria
    tema: 'Concordância — "um dos que"', // assunto
    nivel: 'dificil',                   // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'Complete: "Ele foi um dos candidatos que ___ aprovados na primeira fase."', // pergunta
    alternativas: [                     // opções
      'foi',
      'foram',
      'será',
      'é',
      'era'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Com "um dos que", o pronome relativo "que" retoma o conjunto plural ("dos candidatos"): "foram aprovados" — ele pertence ao grupo dos aprovados. O singular só se justificaria para isolar o indivíduo, uso minoritário.', // explicação
    dica: 'Pegadinha clássica: "um dos que" pede PLURAL na maioria das bancas, porque o "que" se refere ao grupo inteiro. Quem marca "foi" concordou só com "um" — é a isca.', // pegadinha
    video: 'concordância um dos que foi ou foram para concurso' // busca no YouTube
  },
  {
    id: 'p34',                          // identificador único
    materia: 'Língua Portuguesa',       // matéria
    tema: 'Aposto x vocativo',          // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'Na frase "Prestem atenção, candidatos, a prova já começou", o termo "candidatos" é:', // pergunta
    alternativas: [                     // opções
      'Aposto',
      'Vocativo',
      'Adjunto adverbial',
      'Sujeito',
      'Complemento nominal'
    ],
    correta: 1,                         // índice da certa
    explicacao: '"Candidatos" é o chamado, a invocação dirigida aos ouvintes: vocativo — sempre separado por vírgula. Aposto explicaria um termo anterior ("a prova, exame decisivo"); o sujeito da ordem é "vocês".', // explicação
    dica: 'Pergunta simples que resolve tudo: o termo CHAMA alguém? Vocativo. EXPLICA outro termo? Aposto. A Vunesp adora colocar os dois na mesma questão.', // pegadinha
    video: 'diferença entre aposto e vocativo para concurso' // busca no YouTube
  },

  /* ===================== LOTE NOVO — MATEMÁTICA (m29 a m33) ===================== */
  {
    id: 'm29',                          // identificador único
    materia: 'Matemática',              // matéria
    tema: 'Operações com decimais',     // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Instituto AOCP',            // banca inspiradora
    enunciado: 'O resultado de 0,7 + 0,35 + 1,05 é:', // pergunta
    alternativas: [                     // opções
      '1,75',
      '2,10',
      '2,15',
      '1,90',
      '2,05'
    ],
    correta: 1,                         // índice da certa
    passos: [                           // passo a passo
      'Alinhe as vírgulas e complete com zeros: 0,70 + 0,35 + 1,05.',
      'Some os centésimos: 70 + 35 + 105 = 210 centésimos.',
      'Resultado: 2,10.'
    ],
    explicacao: 'O erro típico é alinhar os números pela direita como se fossem inteiros. Com as vírgulas alinhadas, a conta vira soma de centésimos: 210/100 = 2,10.', // explicação
    dica: 'Sempre iguale o número de casas decimais com zeros antes de somar (0,7 vira 0,70). A alternativa "2,05" pega quem ignorou o alinhamento das vírgulas.', // pegadinha
    video: 'soma de números decimais vírgula alinhada concurso' // busca no YouTube
  },
  {
    id: 'm30',                          // identificador único
    materia: 'Matemática',              // matéria
    tema: 'Média ponderada',            // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'Um candidato fez 3 provas: nota 6 (peso 1), nota 8 (peso 2) e nota 7 (peso 2). A média ponderada dele é:', // pergunta
    alternativas: [                     // opções
      '7,0',
      '7,2',
      '7,5',
      '8,0',
      '6,8'
    ],
    correta: 1,                         // índice da certa
    passos: [                           // passo a passo
      'Multiplique cada nota pelo peso: 6×1 = 6; 8×2 = 16; 7×2 = 14.',
      'Some os produtos: 6 + 16 + 14 = 36.',
      'Divida pela soma dos pesos: 36 ÷ (1 + 2 + 2) = 36 ÷ 5 = 7,2.'
    ],
    explicacao: 'Média ponderada dá mais força às notas de peso maior: as duas provas de peso 2 puxam a média para cima da média simples (7,0) — que a banca deixa de isca na alternativa "a".', // explicação
    dica: 'Peso funciona como repetição: nota 8 com peso 2 equivale a tirar 8 duas vezes. A média simples (7,0) é SEMPRE a resposta errada quando os pesos diferem.', // pegadinha
    video: 'média ponderada para concurso como calcular' // busca no YouTube
  },
  {
    id: 'm31',                          // identificador único
    materia: 'Matemática',              // matéria
    tema: 'Sistema — problema contextual', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'Um lápis e uma borracha custam juntos R$ 4,50. O lápis custa R$ 1,50 a mais que a borracha. Quanto custa a borracha?', // pergunta
    alternativas: [                     // opções
      'R$ 1,00',
      'R$ 1,50',
      'R$ 2,00',
      'R$ 2,50',
      'R$ 3,00'
    ],
    correta: 1,                         // índice da certa
    passos: [                           // passo a passo
      'Monte as equações: L + B = 4,50 e L = B + 1,50.',
      'Substitua: (B + 1,50) + B = 4,50 → 2B = 3,00.',
      'B = R$ 1,50 (e o lápis, R$ 3,00).'
    ],
    explicacao: 'O problema esconde um sistema de duas equações. Substituindo o preço do lápis, sobra 2B = 3,00, logo a borracha custa R$ 1,50.', // explicação
    dica: 'A alternativa "R$ 3,00" é o preço do LÁPIS — a banca pergunta a borracha e deixa a resposta do lápis esperando o apressado. Sempre confira O QUE foi perguntado.', // pegadinha
    video: 'sistema de equações problemas para concurso' // busca no YouTube
  },
  {
    id: 'm32',                          // identificador único
    materia: 'Matemática',              // matéria
    tema: 'Conjuntos numéricos — irracionais', // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Instituto AOCP',            // banca inspiradora
    enunciado: 'Qual dos números abaixo é IRRACIONAL?', // pergunta
    alternativas: [                     // opções
      '0,333...',
      '√2',
      '−7',
      '3/4',
      '√49'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Irracionais têm representação decimal infinita e NÃO periódica: √2 ≈ 1,4142... Dízimas (0,333...), inteiros, frações e raízes exatas (√49 = 7) são racionais.', // explicação
    dica: 'Teste rápido: virou fração ou dízima periódica? Racional. Raiz inexata ou π? Irracional. A banca planta √49 no meio — parece irracional, mas vale 7.', // pegadinha
    video: 'números racionais e irracionais conjuntos concurso' // busca no YouTube
  },
  {
    id: 'm33',                          // identificador único
    materia: 'Matemática',              // matéria
    tema: 'Equação do 2º grau — problema', // assunto
    nivel: 'dificil',                   // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'Um terreno retangular tem comprimento 3 m maior que a largura e área de 40 m². A largura do terreno é:', // pergunta
    alternativas: [                     // opções
      '4 m',
      '5 m',
      '8 m',
      '10 m',
      '13 m'
    ],
    correta: 1,                         // índice da certa
    passos: [                           // passo a passo
      'Chame a largura de x; o comprimento é x + 3.',
      'Área: x(x + 3) = 40 → x² + 3x − 40 = 0.',
      'Por soma e produto: raízes que somam −3 e multiplicam −40 → 5 e −8.',
      'Descarte a negativa: largura = 5 m.'
    ],
    explicacao: 'A área gera a equação x² + 3x − 40 = 0, com raízes 5 e −8 — medida negativa não existe, sobra 5 m de largura (e 8 m de comprimento: 5 × 8 = 40 ✓).', // explicação
    dica: 'Sempre teste a resposta no enunciado: 5 × (5 + 3) = 40 ✓. A raiz negativa (−8) vira alternativa para fisgar quem esquece de descartar soluções impossíveis.', // pegadinha
    video: 'equação do segundo grau problemas de área concurso' // busca no YouTube
  },

  /* ===================== LOTE NOVO — RACIOCÍNIO LÓGICO (r23 a r27) ===================== */
  {
    id: 'r23',                          // identificador único
    materia: 'Raciocínio Lógico',       // matéria
    tema: 'Sequência de Fibonacci',     // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'Na sequência 1, 1, 2, 3, 5, 8, ..., o próximo termo é:', // pergunta
    alternativas: [                     // opções
      '10',
      '11',
      '12',
      '13',
      '16'
    ],
    correta: 3,                         // índice da certa
    passos: [                           // passo a passo
      'Observe o padrão: cada termo é a soma dos dois anteriores.',
      '5 + 8 = 13.'
    ],
    explicacao: 'É a sequência de Fibonacci: 1+1=2, 1+2=3, 2+3=5, 3+5=8, 5+8=13. Uma das sequências mais cobradas em provas de todos os níveis.', // explicação
    dica: 'Se a diferença entre termos não é constante nem multiplicativa, teste somar os dois últimos — sequências de Fibonacci disfarçadas enganam quem procura só PA ou PG.', // pegadinha
    video: 'sequência de fibonacci raciocínio lógico concurso' // busca no YouTube
  },
  {
    id: 'r24',                          // identificador único
    materia: 'Raciocínio Lógico',       // matéria
    tema: 'Argumentação — modus tollens', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'Premissas: "Se chove, a aula é cancelada." e "A aula não foi cancelada." A conclusão válida é:', // pergunta
    alternativas: [                     // opções
      'Choveu.',
      'Não choveu.',
      'A aula foi cancelada.',
      'Choveu só um pouco.',
      'Não é possível concluir nada.'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'É o modus tollens: se p → q e q NÃO aconteceu, então p também não aconteceu — a aula não foi cancelada, logo não choveu. É a contrapositiva em ação.', // explicação
    dica: 'Par inseparável: confirmou p → confirma q (modus ponens); negou q → nega p (modus tollens). Negar p não prova nada sobre q — cuidado com a falácia da negação do antecedente.', // pegadinha
    video: 'modus tollens argumentação lógica para concurso' // busca no YouTube
  },
  {
    id: 'r25',                          // identificador único
    materia: 'Raciocínio Lógico',       // matéria
    tema: 'Verdades e mentiras — auto-referência', // assunto
    nivel: 'dificil',                   // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FGV',                       // banca inspiradora
    enunciado: 'Ana e Bruno: um sempre diz a verdade e o outro sempre mente. Ana diz: "Nós dois somos mentirosos." Quem diz a verdade?', // pergunta
    alternativas: [                     // opções
      'Ana diz a verdade e Bruno mente',
      'Bruno diz a verdade e Ana mente',
      'Os dois dizem a verdade',
      'Os dois mentem',
      'Impossível determinar'
    ],
    correta: 1,                         // índice da certa
    passos: [                           // passo a passo
      'Teste Ana verdadeira: então os dois seriam mentirosos — incluindo ela, que mentiria dizendo a verdade. Contradição.',
      'Teste Ana mentirosa: a frase "somos dois mentirosos" é falsa — logo não são dois mentirosos.',
      'Como Ana mente, quem diz a verdade é Bruno: um mente, o outro fala verdade. Consistente.'
    ],
    explicacao: 'Ana NÃO pode ser a verdadeira: dizer "somos dois mentirosos" se tornaria mentira na própria boca. Então Ana mente, e a negativa da frase dela garante que só um mente — ela. Bruno fala a verdade.', // explicação
    dica: 'Em verdades e mentiras, teste cada hipótese até achar a que não gera contradição. Declarações auto-referentes ("nós dois mentimos") são as mais traiçoeiras da FGV.', // pegadinha
    video: 'verdades e mentiras raciocínio lógico para concurso' // busca no YouTube
  },
  {
    id: 'r26',                          // identificador único
    materia: 'Raciocínio Lógico',       // matéria
    tema: 'Associações — 4 pessoas',    // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'Ana, Bia, Caio e Davi estudam matérias diferentes: português, matemática, direito e informática. Ana não estuda português nem informática. Bia estuda direito. Caio não estuda matemática. O que Ana estuda?', // pergunta
    alternativas: [                     // opções
      'Português',
      'Matemática',
      'Direito',
      'Informática',
      'Não é possível determinar'
    ],
    correta: 1,                         // índice da certa
    passos: [                           // passo a passo
      'Bia estuda direito (dado direto).',
      'Ana não estuda português nem informática → sobram matemática e direito; direito já é de Bia.',
      'Logo Ana estuda matemática. (Caio fica entre português e informática; Davi, com o resto.)'
    ],
    explicacao: 'Basta a primeira eliminação: das quatro matérias, Ana só pode matemática ou direito — e direito é de Bia. Ana = matemática.', // explicação
    dica: 'Em associações, comece pelo dado CERTO (Bia = direito) e depois pelas proibições — cada cruzamento que você elimina destrava o próximo.', // pegadinha
    video: 'associações lógicas quatro elementos tabela concurso' // busca no YouTube
  },
  {
    id: 'r27',                          // identificador único
    materia: 'Raciocínio Lógico',       // matéria
    tema: 'Diagramas — proposição "nenhum"', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'Se a proposição "nenhum político é honesto" for verdadeira, é correto concluir que:', // pergunta
    alternativas: [                     // opções
      'Todo honesto é político',
      'Algum político é honesto',
      'Nenhum honesto é político',
      'Todo político é desonesto',
      'Algum honesto é político'
    ],
    correta: 2,                         // índice da certa
    explicacao: '"Nenhum A é B" permite a conversão: "nenhum B é A" — se os conjuntos não se tocam, a separação vale nos dois sentidos. As alternativas com "algum" ou "todo" extrapolam a premissa.', // explicação
    dica: 'Nos diagramas: "nenhum A é B" = dois círculos separados — a conversão é livre. Mas "todo A é B" NÃO permite "todo B é A" — círculo dentro do outro não é simétrico.', // pegadinha
    video: 'nenhum todo algum diagramas lógicos para concurso' // busca no YouTube
  },

  /* ===================== LOTE NOVO — INFORMÁTICA (i21 a i24) ===================== */
  {
    id: 'i21',                          // identificador único
    materia: 'Informática',             // matéria
    tema: 'Word — atalhos de alinhamento', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'No Word em português, o atalho para CENTRALIZAR um parágrafo é:', // pergunta
    alternativas: [                     // opções
      'Ctrl + J',
      'Ctrl + E',
      'Ctrl + Q',
      'Ctrl + G',
      'Ctrl + T'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Ctrl + E centraliza (E de "Em relação ao centro", mnemônico da Microsoft). Ctrl + J justifica; Ctrl + Q alinha à esquerda; Ctrl + G alinha à direita; Ctrl + T abre a janela de fonte.', // explicação
    dica: 'Quarteto decorado da IBFC: E=centrE? — pense "E" no meio; J=Justificar; Q=esQuerda; G=direita (G de direita em pt-BR). A banca embaralha as quatro letras.', // pegadinha
    video: 'atalhos alinhamento word ctrl e ctrl j concurso' // busca no YouTube
  },
  {
    id: 'i22',                          // identificador único
    materia: 'Informática',             // matéria
    tema: 'Segurança — autenticação em dois fatores', // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Instituto AOCP',            // banca inspiradora
    enunciado: 'A autenticação em dois fatores (2FA) aumenta a segurança da conta porque:', // pergunta
    alternativas: [                     // opções
      'Obriga o usuário a criar duas senhas iguais',
      'Exige uma segunda prova de identidade além da senha, como um código no celular',
      'Duplica a velocidade do login',
      'Libera o acesso sem senha em computadores conhecidos',
      'Envia a senha por e-mail automaticamente'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O 2FA combina algo que você SABE (senha) com algo que você TEM (celular/token) ou É (biometria): mesmo que a senha vaze, o invasor não entra sem o segundo fator.', // explicação
    dica: 'Os três fatores possíveis: o que você sabe, o que você tem, o que você é. Duas senhas iguais NÃO são dois fatores — são o mesmo fator duas vezes.', // pegadinha
    video: 'autenticação de dois fatores 2fa como funciona' // busca no YouTube
  },
  {
    id: 'i23',                          // identificador único
    materia: 'Informática',             // matéria
    tema: 'Arquivos compactados (.zip)', // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'Um arquivo com extensão .zip serve para:', // pergunta
    alternativas: [                     // opções
      'Executar programas do Windows',
      'Agrupar vários arquivos em um só, compactados para ocupar menos espaço',
      'Abrir documentos de texto formatados',
      'Tocar vídeos em alta definição',
      'Fazer backup automático na nuvem'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O .zip é um contêiner: junta vários arquivos e pastas em um pacote só e ainda comprime para ficar menor — ideal para enviar por e-mail. Precisa ser descompactado para usar o conteúdo.', // explicação
    dica: 'Extensões que a IBFC confunde: .zip/.rar (compactação), .exe (executável), .pdf (documento), .mp4 (vídeo). Um .zip NÃO executa nada sozinho — e todo .exe recebido por e-mail merece desconfiança.', // pegadinha
    video: 'o que é arquivo zip compactar descompactar' // busca no YouTube
  },
  {
    id: 'i24',                          // identificador único
    materia: 'Informática',             // matéria
    tema: 'Protocolos — HTTP x HTTPS',  // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'A principal diferença entre HTTP e HTTPS é que o HTTPS:', // pergunta
    alternativas: [                     // opções
      'É mais rápido para carregar páginas pesadas',
      'Criptografa o tráfego entre o navegador e o servidor',
      'Só funciona em redes corporativas',
      'É um protocolo exclusivo para e-mails',
      'Dispensa o uso de navegadores'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O "S" é de segurança: o HTTPS usa TLS/SSL para criptografar os dados trocados — quem intercepta a rede vê só ruído. O cadeado no navegador indica a conexão cifrada.', // explicação
    dica: 'A FCC mistura protocolos: HTTP/HTTPS (páginas web), FTP (transferência de arquivos), SMTP (envio de e-mail), POP3/IMAP (recebimento). HTTPS não é "mais rápido" — é mais seguro.', // pegadinha
    video: 'diferença http https protocolos para concurso' // busca no YouTube
  },

  /* ===================== LOTE NOVO — DIREITO CONSTITUCIONAL (c17 a c20) ===================== */
  {
    id: 'c17',                          // identificador único
    materia: 'Direito Constitucional',  // matéria
    tema: 'Art. 5º — direito de reunião', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'Sobre o direito de reunião (art. 5º, XVI), a Constituição garante reunião pacífica, sem armas, em local aberto ao público:', // pergunta
    alternativas: [                     // opções
      'Mediante autorização prévia da polícia',
      'Sem necessidade de autorização, bastando aviso prévio à autoridade competente',
      'Somente durante o dia e em vias públicas',
      'Apenas para sindicatos e partidos políticos',
      'Desde que haja menos de cem participantes'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A Constituição exige apenas AVISO PRÉVIO (para garantir outra reunião no mesmo local), não autorização — pedir permissão do Estado esvaziaria o direito. Reunião armada ou fechada ao público sai da proteção.', // explicação
    dica: 'A IBFC troca "aviso prévio" por "autorização prévia" — parece a mesma coisa e não é: avisar é informar; autorizar é pedir licença. Só o aviso é exigido.', // pegadinha
    video: 'direito de reunião art 5 constituição aviso prévio concurso' // busca no YouTube
  },
  {
    id: 'c18',                          // identificador único
    materia: 'Direito Constitucional',  // matéria
    tema: 'Lei complementar x ordinária', // assunto
    nivel: 'dificil',                   // dificuldade
    ensino: 'superior',              // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'A diferença CORRETA entre lei complementar e lei ordinária é:', // pergunta
    alternativas: [                     // opções
      'A lei complementar exige maioria absoluta para aprovação; a ordinária, maioria simples',
      'A lei ordinária exige maioria absoluta; a complementar, maioria simples',
      'A lei complementar só pode tratar de matéria tributária',
      'A lei ordinária não pode ser vetada pelo Presidente',
      'As duas têm o mesmo quórum e diferem apenas no nome'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'Lei complementar precisa de maioria absoluta (metade mais um de TODOS os membros da casa); lei ordinária, de maioria simples (maioria dos presentes). A complementar também trata só das matérias que a CF reserva a ela.', // explicação
    dica: 'Quóruns que a FCC embaralha: emenda constitucional (3/5), complementar (absoluta), ordinária (simples). Grave a escala EC > LC > LO.', // pegadinha
    video: 'lei complementar e lei ordinária diferença quórum concurso' // busca no YouTube
  },
  {
    id: 'c19',                          // identificador único
    materia: 'Direito Constitucional',  // matéria
    tema: 'Concurso público — validade', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'Segundo a Constituição (art. 37, III), a validade do concurso público é de até:', // pergunta
    alternativas: [                     // opções
      'Um ano, improrrogável',
      'Dois anos, prorrogável uma única vez por igual período',
      'Quatro anos, sem prorrogação',
      'Cinco anos, renovável',
      'Tempo indeterminado'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O texto constitucional é literal: validade de até dois anos, prorrogável UMA vez por igual período — no máximo quatro anos no total. A classificação dentro das vagas é direito do candidato aprovado.', // explicação
    dica: 'A IBFC cobra os números soltos: 2 anos + 1 prorrogação de até 2 = máximo 4. Confundir com o mandato presidencial (4 anos) é a pegadinha clássica.', // pegadinha
    video: 'validade do concurso público dois anos art 37 concurso' // busca no YouTube
  },
  {
    id: 'c20',                          // identificador único
    materia: 'Direito Constitucional',  // matéria
    tema: 'Cláusulas pétreas',          // assunto
    nivel: 'dificil',                   // dificuldade
    ensino: 'superior',              // nível do concurso
    banca: 'FGV',                       // banca inspiradora
    enunciado: 'São cláusulas pétreas (imunes a emenda abolitiva), EXCETO:', // pergunta
    alternativas: [                     // opções
      'O voto direto, secreto, universal e periódico',
      'A separação dos Poderes',
      'Os direitos e garantias individuais',
      'A forma federativa de Estado',
      'O mandato presidencial de quatro anos'
    ],
    correta: 4,                         // índice da certa
    explicacao: 'O art. 60, §4º, protege quatro coisas: forma federativa; voto direto, secreto, universal e periódico; separação dos Poderes; e direitos/garantias individuais. O mandato de 4 anos NÃO está na lista — já foi de 5 e de 6 anos.', // explicação
    dica: 'Mnemônico da FGV: FÓDI-VOSI — FOrma federativa, DIreitos individuais, VOto (direto, secreto...), SÍ separação de poderes. O mandato de 4 anos já mudou antes, logo não é pétreo.', // pegadinha
    video: 'cláusulas pétreas art 60 constituição para concurso' // busca no YouTube
  },

  /* ===================== LOTE NOVO — DIREITO ADMINISTRATIVO (a16 a a19) ===================== */
  {
    id: 'a16',                          // identificador único
    materia: 'Direito Administrativo',  // matéria
    tema: 'Poderes — hierárquico',      // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'O poder que permite à Administração organizar e escalonar as funções, dar ordens e fiscalizar os subordinados é o:', // pergunta
    alternativas: [                     // opções
      'Poder disciplinar',
      'Poder hierárquico',
      'Poder de polícia',
      'Poder regulamentar',
      'Poder de veto'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O poder hierárquico estrutura a Administração em níveis: o superior distribui tarefas, ordena, delega e fiscaliza os inferiores. Disciplinar pune faltas internas; polícia limita atividade de terceiros; regulamentar edita decretos.', // explicação
    dica: 'Pense no organograma: hierarquia = relação chefe-subordinado (ordenar, delegar, avocar, fiscalizar). Se a questão fala em punir servidor, é disciplinar; em limitar o particular, é polícia.', // pegadinha
    video: 'poderes administrativos hierárquico disciplinar regulamentar concurso' // busca no YouTube
  },
  {
    id: 'a17',                          // identificador único
    materia: 'Direito Administrativo',  // matéria
    tema: 'Princípio da legalidade',    // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'O princípio da legalidade, aplicado à Administração Pública, significa que ela:', // pergunta
    alternativas: [                     // opções
      'Pode fazer tudo o que a lei não proíbe expressamente',
      'Só pode agir quando a lei autoriza ou determina, ao contrário do particular',
      'Cria leis conforme a conveniência de cada gestor',
      'Está acima da lei por representar o interesse público',
      'Segue apenas a Constituição, ignorando leis ordinárias'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Para o particular, a regra é a autonomia (pode tudo o que não é proibido); para a Administração, é a SUBMISSÃO legal: ela só atua onde a lei manda ou permite — não pode criar obrigações nem prerrogativas por conta própria.', // explicação
    dica: 'A invertida da FCC: a alternativa "pode tudo que a lei não proíbe" vale para VOCÊ, não para o órgão público. Administração = só o permitido; particular = tudo menos o proibido.', // pegadinha
    video: 'princípio da legalidade administração e particular concurso' // busca no YouTube
  },
  {
    id: 'a18',                          // identificador único
    materia: 'Direito Administrativo',  // matéria
    tema: 'Anulação x revogação',       // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'superior',              // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'A Administração REVOGA um ato administrativo quando o ato é:', // pergunta
    alternativas: [                     // opções
      'Ilegal, por vício em qualquer elemento',
      'Válido, mas se tornou inconveniente ou inoportuno para o interesse público',
      'Nulo desde o início, por falta de forma',
      'Praticado por agente sem competência',
      'Contrário à finalidade pública'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Revogação = juízo de conveniência sobre ato VÁLIDO (efeitos só para frente, ex tunc não vale). Anulação (ou invalidação) é para ato ILEGAL — retira os efeitos desde a origem (ex tunc).', // explicação
    dica: 'Fórmula da FCC: ANULAÇÃO = ato ilegal (apaga o passado); REVOGAÇÃO = ato válido, mas inoportuno (só adiante). Juiz não revoga — só a própria Administração revoga.', // pegadinha
    video: 'anulação e revogação ato administrativo diferença concurso' // busca no YouTube
  },
  {
    id: 'a19',                          // identificador único
    materia: 'Direito Administrativo',  // matéria
    tema: 'Regime jurídico — supremacia e indisponibilidade', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'superior',              // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'O regime jurídico administrativo caracteriza-se, principalmente, por:', // pergunta
    alternativas: [                     // opções
      'Igualdade absoluta entre Administração e particulares',
      'Supremacia do interesse público e indisponibilidade — prerrogativas e obrigações que o particular não tem',
      'Liberdade total para o Administrador escolher suas obrigações',
      'Submissão da lei às decisões administrativas',
      'Renúncia do Estado ao controle dos próprios atos'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'São os dois pilares do regime: SUPREMACIA (a Administração tem prerrogativas acima do particular — cláusulas exorbitantes, executividade) e INDISPONIBILIDADE (o interesse público não pode ser negociado nem abandonado).', // explicação
    dica: 'O par nunca vem separado na CESPE: supremacia = a Administração pode mais; indisponibilidade = ela NÃO pode abrir mão do interesse público. Poder de um lado, dever do outro.', // pegadinha
    video: 'supremacia e indisponibilidade regime jurídico administrativo' // busca no YouTube
  },

  /* ===================== LOTE NOVO — ATUALIDADES (t15 a t18) ===================== */
  {
    id: 't15',                          // identificador único
    materia: 'Atualidades',             // matéria
    tema: 'El Niño e La Niña',          // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Instituto AOCP',            // banca inspiradora
    enunciado: 'O fenômeno El Niño consiste em:', // pergunta
    alternativas: [                     // opções
      'O resfriamento anômalo das águas do Pacífico equatorial',
      'O aquecimento anômalo das águas do Pacífico equatorial, alterando chuvas e secas no mundo',
      'Um ciclone tropical do Atlântico Norte',
      'A passagem de um cometa pela órbita terrestre',
      'O derretimento das calotas polares no verão'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'El Niño = aquecimento anormal do Pacífico equatorial na costa do Peru, que bagunça os regimes de chuva (seca no Nordeste brasileiro, excesso no Sul). La Niña é o oposto: resfriamento das mesmas águas.', // explicação
    dica: 'A banca inverte os irmãos: El Niño = QUENTE (mais chuva no Sul do Brasil, seca no Norte/Nordeste); La Niña = FRIO. Associe "niño" com "quente" — os dois têm til mental.', // pegadinha
    video: 'el niño e la niña diferenças efeitos brasil resumo' // busca no YouTube
  },
  {
    id: 't16',                          // identificador único
    materia: 'Atualidades',             // matéria
    tema: 'Censo IBGE 2022',            // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Instituto AOCP',            // banca inspiradora
    enunciado: 'Segundo o Censo 2022 do IBGE, a população do Brasil é de aproximadamente:', // pergunta
    alternativas: [                     // opções
      '180 milhões',
      '203 milhões',
      '215 milhões',
      '230 milhões',
      '250 milhões'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O Censo 2022 contou 203.080.756 brasileiros — abaixo das projeções anteriores, o que surpreendeu e virou notícia. O país cresce menos de 1% ao ano e está envelhecendo.', // explicação
    dica: 'Número para decorar: ~203 milhões. A banca oferece projeções antigas (215+ mi) que as estimativas anteriores sugeriam — o Censo real foi MENOR que o esperado.', // pegadinha
    video: 'censo 2022 ibge população brasileira resultados' // busca no YouTube
  },
  {
    id: 't17',                          // identificador único
    materia: 'Atualidades',             // matéria
    tema: 'Regulação da inteligência artificial', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'O projeto de regulação da inteligência artificial no Brasil (PL 2.338/2023), inspirado no modelo europeu, adota principalmente:', // pergunta
    alternativas: [                     // opções
      'A proibição total de sistemas de IA no país',
      'Uma abordagem baseada em risco, vetando usos de risco excessivo e exigindo transparência dos demais',
      'A liberação completa da IA sem qualquer regra',
      'A criação de uma IA pública obrigatória para órgãos federais',
      'A responsabilização dos usuários finais, nunca dos desenvolvedores'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O texto aprovado no Senado segue o AI Act europeu: classifica sistemas por risco (excessivo = proibido, como reconhecimento facial em massa; alto = regras e relatórios rígidos) e cria governança e direitos dos afetados.', // explicação
    dica: 'A pegadinha é o extremo: nem "proíbe tudo" nem "libera tudo" — a regulação é BASEADA EM RISCO. Se a alternativa é absoluta, desconfie.', // pegadinha
    video: 'pl 2338 regulação inteligência artificial brasil resumo' // busca no YouTube
  },
  {
    id: 't18',                          // identificador único
    materia: 'Atualidades',             // matéria
    tema: 'Economia — taxa Selic',      // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'A taxa Selic, notícia frequente na economia, é:', // pergunta
    alternativas: [                     // opções
      'O imposto federal cobrado sobre importações',
      'A taxa básica de juros da economia, definida pelo Copom do Banco Central',
      'O índice oficial de inflação do país',
      'A cotação oficial do dólar comercial',
      'O salário mínimo calculado pelo governo'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A Selic é a taxa básica de juros, definida a cada 45 dias pelo Copom: sobe para conter inflação (esfria o consumo) e desce para estimular a economia. A inflação medida oficial é o IPCA — não a Selic.', // explicação
    dica: 'A IBFC troca Selic com IPCA de propósito: Selic = juros (Copom decide); IPCA = inflação (IBGE mede). Copom se reúne 8 vezes por ano.', // pegadinha
    video: 'o que é a taxa selic copom como funciona resumo' // busca no YouTube
  },

  /* ===================== LOTE NOVO — HISTÓRIA DO BRASIL (h13 a h16) ===================== */
  {
    id: 'h13',                          // identificador único
    materia: 'História do Brasil',      // matéria
    tema: 'Primeiro Reinado — abdicação', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Fuvest / Unicamp (vestibular)', // banca inspiradora
    enunciado: 'O Primeiro Reinado (1822-1831) terminou quando:', // pergunta
    alternativas: [                     // opções
      'D. Pedro I abdicou ao trono em favor do filho',
      'A República foi proclamada pelos militares',
      'D. Pedro II assumiu o poder aos 14 anos',
      'O imperador foi deposto pela Confederação do Equador',
      'Portugal reconquistou o Brasil colonial'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'Em 7 de abril de 1831, pressionado pela oposição e pelas crises, D. Pedro I abdicou em favor do filho de 5 anos (futuro D. Pedro II) e partiu para Portugal — abrindo o Período Regencial.', // explicação
    dica: 'Cronologia que a banca embaralha: 1822 independência → 1831 abdicação → 1831-40 regências → 1840 golpe da maioridade → 1889 república. A república veio 58 ANOS depois da abdicação.', // pegadinha
    video: 'abdicação de dom pedro I 1831 primeiro reinado resumo' // busca no YouTube
  },
  {
    id: 'h14',                          // identificador único
    materia: 'História do Brasil',      // matéria
    tema: 'Período Regencial',          // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Fuvest / Unicamp (vestibular)', // banca inspiradora
    enunciado: 'Entre a abdicação de D. Pedro I (1831) e a maioridade de D. Pedro II (1840), o Brasil foi governado por:', // pergunta
    alternativas: [                     // opções
      'Uma junta militar permanente',
      'Regências, já que o herdeiro do trono era menor de idade',
      'O Congresso Nacional diretamente',
      'Um presidente eleito pelo povo',
      'A família real portuguesa à distância'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Como o herdeiro tinha 5 anos, regentes assumiram o poder (regência trina depois una). Foi o período mais rebelde do Império: Cabanagem, Sabinada, Farroupilha e Balaiada explodiram nas províncias.', // explicação
    dica: 'O vestibular liga regências às revoltas regionais (Farroupilha no RS, Cabanagem no PA, Sabinada na BA, Balaiada no MA). Regencial = império SEM imperador adulto, não república.', // pegadinha
    video: 'período regencial revoltas regenciais resumo história' // busca no YouTube
  },
  {
    id: 'h15',                          // identificador único
    materia: 'História do Brasil',      // matéria
    tema: 'Semana de Arte Moderna',     // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'A Semana de Arte Moderna de 1922, realizada no Teatro Municipal de São Paulo, marcou:', // pergunta
    alternativas: [                     // opções
      'A inauguração da primeira universidade pública do país',
      'O início do Modernismo brasileiro e a ruptura com a estética acadêmica tradicional',
      'A fundação do Partido Comunista Brasileiro',
      'A assinatura da primeira Constituição republicana',
      'O fim oficial da escravidão nas artes'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Em fevereiro de 1922, artistas e escritores (Oswald e Mário de Andrade, Anita Malfatti, Tarsila do Amaral) apresentaram propostas que rompiam com a arte acadêmica: nasceu o Modernismo — nacionalismo, liberdade formal e linguagem do povo.', // explicação
    dica: 'Tripla que cai junta: Semana de 22 (Modernismo) + Revolução de 30 (Vargas) + tenentismo dos anos 20. Não confunda 1922 (arte) com 1930 (política).', // pegadinha
    video: 'semana de arte moderna 1922 modernismo resumo' // busca no YouTube
  },
  {
    id: 'h16',                          // identificador único
    materia: 'História do Brasil',      // matéria
    tema: 'Abertura — Lei da Anistia',  // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'Fuvest / Unicamp (vestibular)', // banca inspiradora
    enunciado: 'A Lei da Anistia de 1979, marco da abertura política da ditadura, determinou:', // pergunta
    alternativas: [                     // opções
      'A punição imediata dos torturadores do regime',
      'A anistia de presos e exilados políticos, sem responsabilizar os agentes da repressão',
      'O fim imediato do bipartidarismo e a volta das eleições diretas',
      'A cassação dos mandatos de todos os governadores',
      'A convocação da Assembleia Constituinte de 1988'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A anistia (Lei 6.683/79) libertou presos políticos e permitiu a volta dos exilados — mas foi "ampla, geral e irrestrita" também para os agentes do regime, que nunca foram punidos.', // explicação
    dica: 'Nuance que o vestibular cobra: anistia foi para os DOIS lados — perseguidos E agentes do Estado. O Brasil, diferente da Argentina, não julgou seus torturadores.', // pegadinha
    video: 'lei da anistia 1979 ditadura abertura política resumo' // busca no YouTube
  },

  /* ===================== LOTE NOVO — GEOGRAFIA (g13 a g17) ===================== */
  {
    id: 'g13',                          // identificador único
    materia: 'Geografia',               // matéria
    tema: 'Biomas — Mata Atlântica',    // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'O bioma brasileiro mais devastado historicamente, hoje reduzido a pequenos fragmentos (cerca de 12% da área original), é a:', // pergunta
    alternativas: [                     // opções
      'Amazônia',
      'Mata Atlântica',
      'Caatinga',
      'Pantanal',
      'Pampa'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A Mata Atlântica cobria o litoral do Nordeste ao Sul — justamente onde o Brasil se urbanizou e industrializou. Restam fragmentos; Amazônia e Pantanal sofrem pressão, mas retêm áreas contínuas maiores.', // explicação
    dica: 'Pegadinha: maior bioma (Amazônia) ≠ mais devastado (Mata Atlântica). A colonização começou pelo litoral — foi o primeiro bioma a "pagar a conta".', // pegadinha
    video: 'mata atlântica bioma devastado fragmentos resumo' // busca no YouTube
  },
  {
    id: 'g14',                          // identificador único
    materia: 'Geografia',               // matéria
    tema: 'Transição demográfica',      // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'O envelhecimento da população brasileira (queda da fecundidade somada ao aumento da expectativa de vida) tende a provocar:', // pergunta
    alternativas: [                     // opções
      'O aumento da oferta de vagas em escolas infantis',
      'A ampliação da proporção de idosos e a pressão sobre previdência e saúde pública',
      'A redução do número de aposentados no país',
      'O crescimento da taxa de natalidade',
      'A diminuição da população economicamente ativa do mundo'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Menos nascimentos + viver mais = pirâmide etária invertendo: cresce a parcela de idosos sustentada por menos trabalhadores ativos — o que pressiona a previdência e demanda mais saúde e cuidados.', // explicação
    dica: 'O ENEM adora a pirâmide: base fina (menos jovens) + topo largo (mais idosos) = transição demográfica avançada. A consequência central é sempre a conta previdenciária.', // pegadinha
    video: 'transição demográfica envelhecimento população brasil resumo' // busca no YouTube
  },
  {
    id: 'g15',                          // identificador único
    materia: 'Geografia',               // matéria
    tema: 'Bacias hidrográficas',       // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'A maior bacia hidrográfica do Brasil — e do mundo — é a bacia:', // pergunta
    alternativas: [                     // opções
      'Do Rio São Francisco',
      'Do Rio Paraná',
      'Amazônica',
      'Do Rio Tocantins',
      'Do Rio da Prata'
    ],
    correta: 2,                         // índice da certa
    explicacao: 'A bacia Amazônica drena ~6 milhões de km² (cerca de 63% do território nacional e partes de países vizinhos) e reúne os maiores rios do planeta em volume de água.', // explicação
    dica: 'A IBFC oferece "Rio da Prata" como isca: a bacia Platina é grande, mas formada por rios de fora (Paraná, Paraguai, Uruguai). Amazônica é a campeã absoluta das duas categorias.', // pegadinha
    video: 'bacias hidrográficas do brasil bacia amazônica resumo' // busca no YouTube
  },
  {
    id: 'g16',                          // identificador único
    materia: 'Geografia',               // matéria
    tema: 'Industrialização — concentração no Sudeste', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                 // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'A concentração histórica da indústria brasileira no Sudeste, sobretudo em São Paulo, explica-se principalmente por:', // pergunta
    alternativas: [                     // opções
      'Incentivos governamentais criados nos anos 2000',
      'Acumulação de capitais do ciclo do café, infraestrutura e proximidade do mercado consumidor',
      'A proximidade das fronteiras comerciais com a Argentina',
      'A obrigatoriedade legal das sedes industriais',
      'A presença das maiores reservas minerais do país'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O café financiou ferrovias, portos e bancos paulistas; a imigração forneceu mão de obra; e a população formou mercado. O capital cafeeiro migrou para a indústria no século XX — acumulação histórica, não decreto.', // explicação
    dica: 'Lógica ENEM: industrialização de SP = café (capital) + ferrovia + imigrantes (trabalho) + mercado. Incentivo estatal veio depois (polos de descentração), não explica a origem.', // pegadinha
    video: 'concentração industrial são paulo sudeste café resumo' // busca no YouTube
  },
  {
    id: 'g17',                          // identificador único
    materia: 'Geografia',               // matéria
    tema: 'Fronteiras agrícolas',       // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Fuvest / Unicamp (vestibular)', // banca inspiradora
    enunciado: 'A expansão da soja e do gado sobre o Cerrado e a Amazônia ilustra geograficamente:', // pergunta
    alternativas: [                     // opções
      'A reforma agrária bem-sucedida no país',
      'O avanço das fronteiras agrícolas e a pressão sobre os biomas',
      'A redução da área plantada no Brasil',
      'O fim do agronegócio de exportação',
      'A urbanização dos centros históricos'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Fronteira agrícola é a faixa móvel onde a produção agropecuária avança sobre áreas ainda não incorporadas — primeiro o Cerrado (MATOPIBA), agora franjas da Amazônia, com desmatamento associado.', // explicação
    dica: 'Termos do par: fronteira agrícola (avanço produtivo) x fronteira de pobreza (expansão urbana precária). O vestibular cobra a primeira ligada a soja, gado e desmatamento.', // pegadinha
    video: 'fronteiras agrícolas cerrado amazônia soja resumo' // busca no YouTube
  },

  /* ===================== DIREITO PENAL (matéria nova) ===================== */
  // TEAM_001: matéria nova para cargos policiais e de tribunais (PM, GCM, PP, PF, PRF, TJ)
  {
    id: 'd01',                          // identificador único
    materia: 'Direito Penal',           // matéria
    tema: 'Legítima defesa',            // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'Sobre a legítima defesa (art. 25 do Código Penal), é correto afirmar:', // pergunta
    alternativas: [                     // opções
      'Exige perigo iminente ou atual, agressão injusta e uso moderado dos meios de defesa',
      'Pode ser usada contra qualquer provocação verbal',
      'Admite reagir dias depois da agressão sofrida',
      'Só é admitida para policiais em serviço',
      'Autoriza o uso ilimitado da força'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'A legítima defesa exige três requisitos juntos: agressão INJUSTA, perigo ATUAL ou IMINENTE, e uso MODERADO dos meios necessários. Agiu assim? A conduta deixa de ser crime (excludente de ilicitude).', // explicação
    dica: 'A CESPE troca "atual ou iminente" por "futuro" — reagir depois que a agressão passou NÃO é legítima defesa, é vingança. E a moderação é sempre exigida.', // pegadinha
    video: 'legítima defesa código penal requisitos para concurso' // busca no YouTube
  },
  {
    id: 'd02',                          // identificador único
    materia: 'Direito Penal',           // matéria
    tema: 'Furto x roubo',              // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'A diferença entre furto e roubo está no uso de:', // pergunta
    alternativas: [                     // opções
      'Violência ou grave ameaça contra a pessoa — presente só no roubo',
      'Escalada ou arrombamento — presente só no furto',
      'Arma de fogo — presente só no roubo',
      'Planejamento prévio — presente em ambos',
      'Chave falsa — presente só no furto'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'Roubo = subtrair coisa alheia mediante VIOLÊNCIA ou GRAVE AMEAÇA à pessoa (art. 157). Furto = subtrair SEM violência à pessoa (art. 155) — pode ter violência contra coisas, como arrombar uma vitrine.', // explicação
    dica: 'Teste da IBFC: houve ameaça ou violência CONTRA A PESSOA? Roubo. Sem isso (nem arma importa, se ninguém foi intimidado), é furto — e furto com arma é qualificado, não roubo.', // pegadinha
    video: 'diferença entre furto e roubo código penal concurso' // busca no YouTube
  },
  {
    id: 'd03',                          // identificador único
    materia: 'Direito Penal',           // matéria
    tema: 'Flagrante delito',           // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'Constitui flagrante PREPARADO (ou provocado):', // pergunta
    alternativas: [                     // opções
      'O crime descoberto logo depois, com prova do autor',
      'A situação montada para induzir o suspeito a cometer o crime e prendê-lo no ato',
      'A prisão feita dias depois com mandado judicial',
      'O suspeito perseguido logo após o crime',
      'O crime que acontece na presença de testemunhas'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'No flagrante preparado, agentes provocam a situação para que o suspeito cometa o crime e seja preso — é válido quando a ação do agente não é a causa única do crime. Não confunda com flagrante esperado (vigilância sem provocação).', // explicação
    dica: 'Quarteto da CESPE: PRÓPRIO (cometendo agora), IMPRÓPRIO (acabou de cometer, perseguido), PRESUMIDO (achado logo depois com objetos do crime), PREPARADO (armadilha montada pela polícia).', // pegadinha
    video: 'espécies de flagrante próprio impróprio presumido preparado concurso' // busca no YouTube
  },
  {
    id: 'd04',                          // identificador único
    materia: 'Direito Penal',           // matéria
    tema: 'Homicídio qualificado',      // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'O homicídio é QUALIFICADO quando cometido:', // pergunta
    alternativas: [                     // opções
      'Por motivo fútil ou torpe, mediante crueldade, ou que impossibilite a defesa da vítima',
      'Somente quando há mais de uma vítima',
      'Apenas quando o autor é reincidente',
      'Sempre que a vítima for mulher',
      'Quando cometido durante o dia'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'O §2º do art. 121 qualifica o homicídio por motivo torpe/fútil, paga ou promessa, meio cruel (veneno, fogo, tortura), emboscada ou recurso que dificulte a defesa, e feminicídio. Pena: 12 a 30 anos (o simples é 6 a 20).', // explicação
    dica: 'A FCC pega na diferenciação entre CULPOSO (sem intenção) e QUALIFICADO (com circunstância agravante). "Feminicídio" virou qualificadora própria em 2015 — atualidade que já cai.', // pegadinha
    video: 'homicídio qualificado qualificadoras art 121 concurso' // busca no YouTube
  },
  {
    id: 'd05',                          // identificador único
    materia: 'Direito Penal',           // matéria
    tema: 'Retroatividade da lei penal', // assunto
    nivel: 'dificil',                   // dificuldade
    ensino: 'superior',                 // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'Sobre a aplicação da lei penal no tempo, é correto afirmar:', // pergunta
    alternativas: [                     // opções
      'A lei mais benéfica retroage sempre, inclusive para penas já executadas',
      'A lei mais gravosa retroage para crimes anteriores',
      'Abolitio criminis (a lei deixou de tipificar o fato) não afeta condenações antigas',
      'A lei penal nunca pode retroagir, em hipótese alguma',
      'O juiz pode escolher a lei que quiser aplicar'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'Regra do art. 5º, XL: a lei não retroage, EXCETO para beneficiar o réu — e a benéfica alcança até pena em execução e efeitos de sentença transitada. Lei MAIS GRAVOSA nunca retroage.', // explicação
    dica: 'A CESPE cobra o alcance da retroatividade benéfica: vale até para pena já cumprida (efeitos extrapenais) e para crime permanente (vale a lei do tempo da ação para o autor). "Nunca retroage" está errada — existe a exceção benéfica.', // pegadinha
    video: 'retroatividade da lei penal lei mais benéfica concurso' // busca no YouTube
  },
  {
    id: 'd06',                          // identificador único
    materia: 'Direito Penal',           // matéria
    tema: 'Peculato',                   // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'superior',                 // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'O funcionário público que se apropria de dinheiro público que tem sob sua guarda comete:', // pergunta
    alternativas: [                     // opções
      'Furto qualificado',
      'Peculato',
      'Estelionato',
      'Corrupção passiva',
      'Improbidade civil apenas'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Peculato (art. 312) é o crime do funcionário público que se apropria de dinheiro ou bem público do qual tem a posse ou guarda em razão do cargo — o "desvio clássico" da administração.', // explicação
    dica: 'Crimes de funcionário que a FCC mistura: peculato (apropria-se do que tem sob guarda), concussão (exige vantagem usando o cargo) e corrupção passiva (solicita/recebe vantagem). Peculato é com o que já está na mão.', // pegadinha
    video: 'peculato crimes contra administração pública para concurso' // busca no YouTube
  },
  {
    id: 'd07',                          // identificador único
    materia: 'Direito Penal',           // matéria
    tema: 'Abuso de autoridade',        // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'superior',                 // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'A Lei de Abuso de Autoridade (13.869/2019) alcança:', // pergunta
    alternativas: [                     // opções
      'Apenas policiais militares em serviço',
      'Agentes públicos que, com finalidade específica de prejudicar, excedem suas atribuições',
      'Qualquer cidadão que desacate um funcionário público',
      'Somente autoridades com foro privilegiado',
      'Exclusivamente servidores federais'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A lei pune quem detém poder público (agentes de qualquer ente, servidores, militares, membros de Poderes e do MP) quando age com FINALIDADE ESPECÍFICA de prejudicar, beneficiar ou por capricho — não basta o mero excesso.', // explicação
    dica: 'Ponto que a CESPE cobra da lei nova: exige a finalidade ESPECÍFICA (prejudicar, beneficiar ou satisfação pessoal). Erro funcional sem essa finalidade não configura o abuso.', // pegadinha
    video: 'lei de abuso de autoridade 13869 resumo concurso' // busca no YouTube
  },
  {
    id: 'd08',                          // identificador único
    materia: 'Direito Penal',           // matéria
    tema: 'Tentativa x consumação',     // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'Há TENTATIVA de crime quando o agente:', // pergunta
    alternativas: [                     // opções
      'Consuma todos os atos e alcança o resultado',
      'Inicia a execução e não consuma por circunstâncias alheias à sua vontade',
      'Apenas planeja o crime mentalmente',
      'Desiste livremente de continuar os atos executivos',
      'Fere a vítima de propósito leve'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Tentativa = iniciou a execução e não consumou por causas ALHEIAS à vontade (art. 14, II) — punível com pena reduzida de 1/3 a 2/3. Se desistir por livre vontade, é desistência voluntária (responde só pelos atos já praticados).', // explicação
    dica: 'A banca troca tentativa com desistência: alheio à vontade = tentativa (pena reduzida); arrependimento próprio = desistência. E pensar/ameaçar não é tentativa — falta o início da execução.', // pegadinha
    video: 'tentativa consumação desistência voluntária iter criminis' // busca no YouTube
  },
  {
    id: 'd09',                          // identificador único
    materia: 'Direito Penal',           // matéria
    tema: 'LEP — regimes penais',       // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'Sobre os regimes de cumprimento de pena (Lei de Execução Penal), o regime SEMIABERTO caracteriza-se por:', // pergunta
    alternativas: [                     // opções
      'Cumprimento integral em penitenciária de segurança máxima',
      'Possibilidade de trabalho externo durante o dia e retorno ao estabelecimento',
      'Cumprimento domiciliar desde o início da pena',
      'Dispensa de qualquer vigilância',
      'Aplicação apenas a penas acima de 8 anos'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'No semiaberto o condenado pode sair para trabalhar ou estudar durante o dia, retornando ao estabelecimento (colônia agrícola, industrial ou casa do albergado). Fechado = integral; aberto = casa de albergado sem recolhimento diário obrigatório de presídio.', // explicação
    dica: 'Escada dos regimes da LEP: fechado (dentro do presídio), semiaberto (sai para trabalhar e volta), aberto (casa do albergado, quase livre). A banca troca semiaberto com aberto.', // pegadinha
    video: 'regimes penais fechado semiaberto aberto lep concurso' // busca no YouTube
  },
  {
    id: 'd10',                          // identificador único
    materia: 'Direito Penal',           // matéria
    tema: 'Inimputabilidade — menoridade', // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'Segundo a Constituição, são penalmente inimputáveis os menores de:', // pergunta
    alternativas: [                     // opções
      '16 anos',
      '18 anos',
      '21 anos',
      '14 anos',
      '12 anos'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Menor de 18 anos não responde penalmente (art. 228 da CF) — pratica "ato infracional" e responde pelo ECA com medidas socioeducativas (internação, semiliberdade, advertência etc.), nunca com pena de prisão.', // explicação
    dica: 'Pegadinha de número: inimputável penal < 18; voto facultativo 16-17; maioridade civil 18. A banca troca os marcos de propósito.', // pegadinha
    video: 'inimputabilidade menor de 18 anos eca ato infracional' // busca no YouTube
  },
  {
    id: 'd11',                          // identificador único
    materia: 'Direito Penal',           // matéria
    tema: 'Inquérito policial',         // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'superior',                 // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'Sobre o inquérito policial, é correto afirmar:', // pergunta
    alternativas: [                     // opções
      'É a fase judicial que precede a sentença condenatória',
      'É procedimento administrativo presidido pela autoridade policial para apurar indícios de crime',
      'Substitui o processo penal em crimes leves',
      'É dirigido pelo juiz de instrução desde o começo',
      'Tem prazo único de 90 dias em todos os casos'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O inquérito é fase ADMINISTRATIVA (não judicial), presidida pelo delegado, que reúne indícios para embasar a denúncia do Ministério Público. Requerido, ele preso: 10 dias (lei nova); solto: mais tempo conforme o caso.', // explicação
    dica: 'Erros clássicos da CESPE: inquérito NÃO é processo (não é judicial), NÃO é obrigatório em todos os casos (MP pode dispensar) e o preso tem prazo de 10 dias — o pacote anticrime mudou isso em 2019.', // pegadinha
    video: 'inquérito policial o que é fases para concurso' // busca no YouTube
  },
  {
    id: 'd12',                          // identificador único
    materia: 'Direito Penal',           // matéria
    tema: 'Prisão preventiva x temporária', // assunto
    nivel: 'dificil',                   // dificuldade
    ensino: 'superior',                 // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'A prisão TEMPORÁRIA difere da preventiva porque ela:', // pergunta
    alternativas: [                     // opções
      'Tem prazo máximo definido em lei e só cabe para crimes graves listados',
      'Pode ser decretada por qualquer autoridade policial',
      'Dura até o fim do processo',
      'Só é aplicada a menores de idade',
      'É determinada sempre por 5 anos'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'A temporária é medida cautelar de curto prazo (5 dias, ou 30 em crimes hediondos/equiparados, prorrogáveis uma vez) e só cabe nos crimes do rol legal — para garantir a investigação. A preventiva não tem prazo fixo e decorre dos requisitos do art. 312 do CPP.', // explicação
    dica: 'A FCC cobra os números: temporária = 5 dias (30 nos hediondos), prazo da PRISÃO em flagrante não existe (é situação, não modalidade). Somente juiz decreta prisão cautelar — delegado nunca.', // pegadinha
    video: 'prisão temporária e preventiva diferença concurso' // busca no YouTube
  },

  /* ===================== CRIMINOLOGIA (matéria nova) ===================== */
  // TEAM_001: matéria nova para perito criminal e carreiras policiais
  {
    id: 'k01',                          // identificador único
    materia: 'Criminologia',            // matéria
    tema: 'Cadeia de custódia',         // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'superior',                 // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'A cadeia de custódia de vestígios (instituída pelo pacote anticrime, Lei 13.964/2019) serve para:', // pergunta
    alternativas: [                     // opções
      'Registrar a posse de armas dos policiais',
      'Garantir a integridade do vestígio, documentando quem o recolheu, transportou e analisou',
      'Vigiar o preso durante o cumprimento da pena',
      'Autorizar a devolução de bens apreendidos',
      'Organizar o arquivo de antecedentes criminais'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A cadeia de custódia rastreia o caminho do vestígio desde a coleta no local até o laudo: quem achou, guardou, transportou e analisou — evita contaminação e garante a validade da prova pericial.', // explicação
    dica: 'A quebra da cadeia pode invalidar a prova — é por isso que a CESPE pergunta os elos: coleta, acondicionamento, transporte, recebimento, processamento e armazenamento. Memorize a trilha.', // pegadinha
    video: 'cadeia de custódia vestígios lei 13964 concurso' // busca no YouTube
  },
  {
    id: 'k02',                          // identificador único
    materia: 'Criminologia',            // matéria
    tema: 'Exame de corpo de delito',   // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'superior',                 // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'O exame de corpo de delito é:', // pergunta
    alternativas: [                     // opções
      'A autópsia obrigatória em todas as mortes',
      'A perícia que constata materialmente a infração e suas circunstâncias',
      'O interrogatório do suspeito perante o delegado',
      'A revista corporal feita na prisão em flagrante',
      'A avaliação psicológica do acusado'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Corpo de delito é o conjunto de vestígios que prova a materialidade do crime; o exame pericial correspondente é feito por peritos oficiais — nos crimes que deixam vestígio, é obrigatório para a confissão não suprir a falta do exame.', // explicação
    dica: 'A FCC troca corpo de delito com autópsia: a autópsia é UMA das formas do exame de corpo de delito (morte violenta), não o conceito inteiro — o exame vale para qualquer vestígio.', // pegadinha
    video: 'exame de corpo de delito perícia o que é concurso' // busca no YouTube
  },
  {
    id: 'k03',                          // identificador único
    materia: 'Criminologia',            // matéria
    tema: 'Vestígios e local de crime', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'superior',                 // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'Na preservação do local de crime, a conduta correta é:', // pergunta
    alternativas: [                     // opções
      'Remover os objetos antes da chegada da perícia para facilitar o trabalho',
      'Isolar a área e não tocar em nada até a chegada dos peritos',
      'Limpar o sangue para não assustar a família',
      'Fotografar com flash sobre as impressões digitais',
      'Permitir a entrada de curiosos que ajudem a testemunhar'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Local de crime deve ser isolado e preservado: ninguém toca, move ou limpa nada — vestígio modificado pode perder valor probatório. A isolamento protege provas frágeis (digitais, fibras, fluidos).', // explicação
    dica: 'Regra de ouro do perito: "olhe, não toque". A banca cria alternativas de "boa intenção" (limpar, recolher) — todas destroem prova. Só a preservação protege a investigação.', // pegadinha
    video: 'preservação do local de crime vestígios concurso' // busca no YouTube
  },
  {
    id: 'k04',                          // identificador único
    materia: 'Criminologia',            // matéria
    tema: 'Papiloscopia',               // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'superior',                 // nível do concurso
    banca: 'Instituto AOCP',            // banca inspiradora
    enunciado: 'A papiloscopia é a ciência forense que identifica pessoas por meio:', // pergunta
    alternativas: [                     // opções
      'Do exame de DNA do sangue',
      'Das impressões digitais e papilares',
      'Da arcada dentária',
      'Do formato do crânio',
      'Da caligrafia e assinatura'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Papiloscopia estuda as papilas dérmicas (as "digitais") — únicas em cada pessoa e imutáveis ao longo da vida. Datiloscopia é o estudo mais amplo das papilas; exame de DNA é outra técnica, não papiloscopia.', // explicação
    dica: 'Pegadinha de nome: papiloscopia = papilas (digitais); documentoscopia = documentos; grafoscopia = escrita. A banca mistura as técnicas forenses entre si.', // pegadinha
    video: 'papiloscopia impressões digitais perícia concurso' // busca no YouTube
  },
  {
    id: 'k05',                          // identificador único
    materia: 'Criminologia',            // matéria
    tema: 'Escolas criminológicas',     // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'superior',                 // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'A principal diferença entre a Escola Clássica e a Escola Positivista da criminologia é que:', // pergunta
    alternativas: [                     // opções
      'A Clássica explica o crime pelo livre-arbítrio; a Positivista, por fatores biológicos, psicológicos e sociais determinantes',
      'A Clássica usa o método científico; a Positivista usa a lógica jurídica',
      'A Positivista defende penas proporcionais ao crime',
      'A Clássica estuda a personalidade do criminoso',
      'As duas escolas pensam igual, só mudam de época'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'A Escola CLÁSSICA (Beccaria) vê o crime como escolha — o homem é livre e a pena deve ser proporcional e certa. A POSITIVISTA (Lombroso, Ferri, Garofalo) vê o crime como fenômeno determinado por causas biológicas e sociais, estudado cientificamente.', // explicação
    dica: 'O resumo que a CESPE usa: Clássica = direito penal do ATO e livre-arbítrio; Positivista = criminologia do AUTOR e determinismo. Inverter as escolas é a pegadinha número 1.', // pegadinha
    video: 'escola clássica e positivista criminologia diferença concurso' // busca no YouTube
  },
  {
    id: 'k06',                          // identificador único
    materia: 'Criminologia',            // matéria
    tema: 'Lombroso — criminoso nato',  // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'superior',                 // nível do concurso
    banca: 'Instituto AOCP',            // banca inspiradora
    enunciado: 'Cesare Lombroso ficou conhecido na criminologia por defender que:', // pergunta
    alternativas: [                     // opções
      'O crime nasce da miséria e da desigualdade social',
      'O criminoso nasce predisposto — traços atávicos marcaria o "criminoso nato"',
      'A punição deve ser sempre a mais dura possível',
      'A sociedade fabrica o criminoso pelo rótulo',
      'O crime é fruto da livre escolha racional'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Lombroso, pai da antropologia criminal (Escola Positivista), escreveu "O Homem Delinquente": o criminoso seria um ser atávico, marcado por características físicas — hoje refutado, mas marco do método científico aplicado ao crime.', // explicação
    dica: 'Autor x teoria na AOCP: Lombroso = criminoso nato (biologia); Becker = etiquetamento (rótulo social); Durkheim/Merton = anomia. Cada teoria tem seu dono.', // pegadinha
    video: 'lombroso criminoso nato atavismo criminologia resumo' // busca no YouTube
  },
  {
    id: 'k07',                          // identificador único
    materia: 'Criminologia',            // matéria
    tema: 'Teoria do etiquetamento',    // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'superior',                 // nível do concurso
    banca: 'FGV',                       // banca inspiradora
    enunciado: 'A teoria do etiquetamento (labeling approach), associada a Howard Becker, afirma que:', // pergunta
    alternativas: [                     // opções
      'O criminoso nasce com predisposição genética',
      'A sociedade produz o desvio ao rotular certas pessoas e grupos como criminosos',
      'O crime é inevitável nas grandes cidades',
      'A punição dissuade o criminoso por medo',
      'O crime decorre da falta de normas sociais'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Para Becker, nenhum ato é criminoso por natureza: é a REAÇÃO SOCIAL (o rótulo de "criminoso", "vagabundo") que consolida a identidade desviante e empurra a pessoa para a carreira do crime.', // explicação
    dica: 'A FGV confunde etiquetamento com anomia: etiquetamento = o RÓTULO fabrica o desvio; anomia = a FALTA de norma deixa o caminho livre. São respostas opostas sobre "onde mora o crime".', // pegadinha
    video: 'teoria do etiquetamento howard becker criminologia' // busca no YouTube
  },
  {
    id: 'k08',                          // identificador único
    materia: 'Criminologia',            // matéria
    tema: 'Anomia',                     // assunto
    nivel: 'dificil',                   // dificuldade
    ensino: 'superior',                 // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'A anomia, conceito trabalhado por Durkheim e Merton, designa:', // pergunta
    alternativas: [                     // opções
      'A predisposição genética ao crime',
      'O estado de enfraquecimento das normas sociais, quando metas culturais não podem ser alcançadas por meios legítimos',
      'O medo coletivo da criminalidade',
      'A doença mental do infrator',
      'O excesso de leis penais'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Anomia = "falta de norma". Durkheim via a anomia como desregulação social; Merton adaptou: quando a sociedade cobra o sucesso mas fecha os meios legítimos, cresce a tensão — e a "inovação" (o crime) vira caminho alternativo.', // explicação
    dica: 'A CESPE cobra a diferença: Durkheim = anomia da DESREGLAMENTAÇÃO social; Merton = anomia da TENSÃO entre metas (dinheiro/status) e meios legítimos. O verbo-chave é "enfraquecer as normas".', // pegadinha
    video: 'anomia durkheim merton criminologia resumo concurso' // busca no YouTube
  },
  {
    id: 'k09',                          // identificador único
    materia: 'Criminologia',            // matéria
    tema: 'Indício x vestígio x prova', // assunto
    nivel: 'dificil',                   // dificuldade
    ensino: 'superior',                 // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'Sobre os elementos da investigação criminal, é correto afirmar que o VESTÍGIO é:', // pergunta
    alternativas: [                     // opções
      'A certeza absoluta da autoria do crime',
      'O material alterado ou deixado no local do crime que pode virar prova após a perícia',
      'A confissão formal do suspeito',
      'O depoimento da vítima ao delegado',
      'A ordem judicial de busca'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Vestígio é o que resta do crime no mundo material (mancha, fibra, projétil, digital); a perícia o transforma em PROVA. O INDÍCIO é circunstância que sugere um fato (mas não o prova sozinho). A prova é o que vale no processo.', // explicação
    dica: 'A tríade que a FCC adora misturar: INDÍCIO (circunstância que indica), VESTÍGIO (material do crime), PROVA (o que embasa a decisão judicial). Vestígio vira prova; indício não é prova.', // pegadinha
    video: 'indício vestígio prova diferença investigação criminal' // busca no YouTube
  },
  {
    id: 'k10',                          // identificador único
    materia: 'Criminologia',            // matéria
    tema: 'Sinais cadavéricos',         // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'superior',                 // nível do concurso
    banca: 'Instituto AOCP',            // banca inspiradora
    enunciado: 'A lividez cadavérica (livores) é o sinal de morte caracterizado por:', // pergunta
    alternativas: [                     // opções
      'O endurecimento dos músculos após a morte',
      'O acúmulo de sangue nas partes mais baixas do corpo por gravidade',
      'O resfriamento progressivo do corpo',
      'A produção de gases pela putrefação',
      'O desaparecimento dos reflexos'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A lividez (livores) é o sangue que desce por gravidade e mancha as regiões declives do corpo — aparece entre 20 min e 2h e se fixa por volta de 8-12h. Confunde-se com rigidez (músculos) e algor mortis (frio).', // explicação
    dica: 'Tríade da morte que a AOCP troca: LIVIDEZ = sangue desce; RIGIDEZ = músculo enrijece; ALGOR MORTIS = corpo esfria. A ordem de aparecimento importa para estimar a hora da morte.', // pegadinha
    video: 'lividez rigidez algor mortis sinais cadavéricos perícia' // busca no YouTube
  },
  {
    id: 'k11',                          // identificador único
    materia: 'Criminologia',            // matéria
    tema: 'Quesitos e quesitação',      // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'superior',                 // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'Os "quesitos" na perícia oficial são:', // pergunta
    alternativas: [                     // opções
      'Os instrumentos usados na coleta de provas',
      'As perguntas formuladas pelo juiz ou pelas partes para o perito responder no laudo',
      'Os achados fotográficos do local',
      'As conclusões obrigatórias do perito',
      'Os honorários dos assistentes técnicos'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Quesitos são as perguntas técnicas que o juiz e as partes fazem ao perito — o laudo responde ponto por ponto. A quesitação é a fase em que esses quesitos são apresentados e discutidos.', // explicação
    dica: 'A CESPE confunde quesito (pergunta ao perito) com quesitação (o ato de apresentar os quesitos). Lembre: quesito é a pergunta; quesitação é a formalização. E o assistente técnico é o perito particular das partes.', // pegadinha
    video: 'quesitos quesitação perícia oficial concurso' // busca no YouTube
  },
  {
    id: 'k12',                          // identificador único
    materia: 'Criminologia',            // matéria
    tema: 'Balística forense',          // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'superior',                 // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'A balística forense identifica a arma usada em um crime principalmente por meio:', // pergunta
    alternativas: [                     // opções
      'Do peso do projétil e do calibre do cano',
      'Das estrias (marcas) que o raiamento do cano deixa no projétil, comparadas no microscópio de comparação',
      'Do DNA do atirador na cápsula',
      'Da cor do estojo deflagrado',
      'Do barulho do disparo'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Cada cano tem estrias (micro-marcas) únicas que se imprimem no projétil — como uma impressão digital da arma. O exame confronta o projétil do crime com um disparo de teste da arma suspeita no microscópio de comparação.', // explicação
    dica: 'A FCC confunde balística externa (trajetória do projétil no ar), interna (dentro do cano) e terminal/de efeitos (impacto no alvo). A IDENTIFICAÇÃO da arma vem das estrias — sempre.', // pegadinha
    video: 'balística forense estrias projétil identificação arma' // busca no YouTube
  },

  /* ===================== DIREITO PREVIDENCIÁRIO (matéria nova) ===================== */
  // TEAM_001: matéria nova focada no cargo de Técnico do Seguro Social (INSS)
  {
    id: 'v01',                          // identificador único
    materia: 'Direito Previdenciário',  // matéria
    tema: 'Segurados obrigatórios',     // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'São segurados OBRIGATÓRIOS do Regime Geral de Previdência Social (RGPS):', // pergunta
    alternativas: [                     // opções
      'Empregados, trabalhadores avulsos, contribuintes individuais e domésticos',
      'Apenas servidores públicos federais',
      'Somente quem se inscreve voluntariamente',
      'Apenas militares das Forças Armadas',
      'Somente empresários com CNPJ'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'Segurados obrigatórios do RGPS: empregado (inclui doméstico), trabalhador avulso, contribuinte individual (autônomo), segurado especial (rural familiar) e empregado/doméstico. O facultativo é quem contribui por opção (desempregado, estudante, dona de casa).', // explicação
    dica: 'A CESPE troca obrigatório com facultativo: obrigatório = quem trabalha (empregado, avulso, individual, especial, doméstico); facultativo = quem não trabalha e contribui por escolha. Servidor público tem RPPS próprio, não RGPS.', // pegadinha
    video: 'segurados obrigatórios rgps inss para concurso' // busca no YouTube
  },
  {
    id: 'v02',                          // identificador único
    materia: 'Direito Previdenciário',  // matéria
    tema: 'Carência',                   // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'Carência, no RGPS, é:', // pergunta
    alternativas: [                     // opções
      'O tempo que falta para a aposentadoria por idade',
      'O número mínimo de contribuições mensais exigido para ter direito ao benefício',
      'O período de graça após perder o emprego',
      'O valor mínimo do salário de contribuição',
      'A falta de registro em carteira'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Carência = número mínimo de contribuições mensais indispensáveis para pedir o benefício (aposentadoria por idade pede 180 meses; auxílio por incapacidade, 12). Difere do "período de graça", que é o tempo em que a qualidade de segurado se mantém parando de contribuir.', // explicação
    dica: 'Confusão mortal da IBFC: carência (contribuições exigidas) x período de graça (tempo de proteção após parar de pagar — em regra 12 meses, podendo chegar a 36). Troque os dois e a questão sai errada.', // pegadinha
    video: 'carência e período de graça inss para concurso' // busca no YouTube
  },
  {
    id: 'v03',                          // identificador único
    materia: 'Direito Previdenciário',  // matéria
    tema: 'Auxílio por incapacidade temporária', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'O auxílio por incapacidade temporária (antigo auxílio-doença) é devido ao segurado que:', // pergunta
    alternativas: [                     // opções
      'Fica permanentemente incapaz de trabalhar',
      'Fica temporariamente incapaz para o trabalho por mais de 15 dias consecutivos',
      'Se aposenta por idade',
      'Perde o emprego por justa causa',
      'Sofre acidente de qualquer natureza, sem incapacidade'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O benefício exige incapacidade TEMPORÁRIA e mais de 15 dias de afastamento (para o empregado, os primeiros 15 dias são da empresa, e o INSS paga a partir do 16º). Incapacidade permanente gera aposentadoria por incapacidade — benefício diferente.', // explicação
    dica: 'Número-chave: 15 dias. Antes de 15 é empresa; a partir do 16º é INSS. E cuidado: é temporário, não definitivo — a banca troca com aposentadoria por invalidez (hoje "aposentadoria por incapacidade permanente").', // pegadinha
    video: 'auxílio por incapacidade temporária auxílio doença inss' // busca no YouTube
  },
  {
    id: 'v04',                          // identificador único
    materia: 'Direito Previdenciário',  // matéria
    tema: 'Pensão por morte',           // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'A pensão por morte é paga aos:', // pergunta
    alternativas: [                     // opções
      'Herdeiros testamentários do segurado',
      'Dependentes do segurado falecido (cônjuge, filhos menores ou inválidos, pais e irmãos em certas condições)',
      'Qualquer pessoa que convivia com o segurado',
      'Apenas filhos maiores de 21 anos',
      'Somente cônjuges com união estável formalizada em cartório'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Dependentes em classes: 1ª (cônjuge, companheiro, filho menor de 21 ou inválido), 2ª (pais) e 3ª (irmãos menores/inválidos) — achado dependente numa classe, exclui as seguintes. Não é herança: é benefício previdenciário.', // explicação
    dica: 'Ordem dos dependentes da CESPE: 1º cônjuge/companheiro/filhos (menor de 21 ou inválido), 2º pais, 3º irmãos. A existência de dependente na classe anterior exclui a próxima.', // pegadinha
    video: 'pensão por morte dependentes inss ordem concurso' // busca no YouTube
  },
  {
    id: 'v05',                          // identificador único
    materia: 'Direito Previdenciário',  // matéria
    tema: 'Teto do INSS e salário de benefício', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'O "teto" do INSS representa:', // pergunta
    alternativas: [                     // opções
      'O salário mínimo garantido a todo segurado',
      'O valor máximo de benefício pago pelo Regime Geral',
      'A idade máxima para se aposentar',
      'O limite de dependentes por segurado',
      'O tempo máximo de contribuição contado'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O teto é o limite máximo do salário de contribuição e dos benefícios do RGPS — quem ganha acima dele contribui só até o teto e não recebe benefício maior que isso. O valor é reajustado anualmente.', // explicação
    dica: 'A IBFC troca teto com piso: teto = máximo (contribuição e benefício); piso = mínimo (nenhum benefício pode ser menor que o salário mínimo). Guarda os dois pólos.', // pegadinha
    video: 'teto do inss salário de contribuição e benefício concurso' // busca no YouTube
  },

  /* ===================== LOTE NOVO — LÍNGUA PORTUGUESA (p35 a p40) ===================== */
  {
    id: 'p35',                          // identificador único
    materia: 'Língua Portuguesa',       // matéria
    tema: 'Inferência em texto',        // assunto
    nivel: 'dificil',                   // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'Leia: "O edital exigia pontualidade. João, que chega atrasado, leu e riu." É correto INFERIR do texto que:', // pergunta
    alternativas: [                     // opções
      'O edital obriga todos os brasileiros à pontualidade',
      'João achou graça porque ele mesmo descumpre a regra',
      'João riu porque a regra é impossível',
      'O texto diz que João será demitido',
      'O edital foi anulado por João'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Inferir é ler nas entrelinhas o que o texto não afirma literalmente: a graça está no contraste entre a exigência do edital e o comportamento de João. As demais alternativas extrapolam o texto.', // explicação
    dica: 'Diferença que a CESPE cobra: o que está ESCRITO (compreensão) x o que se CONCLUI (inferência). A resposta de inferência usa a lógica do texto, nunca opinião externa.', // pegadinha
    video: 'inferência e compreensão de texto para concurso' // busca no YouTube
  },
  {
    id: 'p36',                          // identificador único
    materia: 'Língua Portuguesa',       // matéria
    tema: 'Reescrita de frases',        // assunto
    nivel: 'dificil',                   // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'FGV',                       // banca inspiradora
    enunciado: '"O servidor atendeu o público porque era seu dever." Mantendo o sentido, a frase pode ser reescrita como:', // pergunta
    alternativas: [                     // opções
      'O servidor atendeu o público apesar de ser seu dever.',
      'O servidor atendeu o público, pois era seu dever.',
      'O servidor atenderia o público se fosse seu dever.',
      'O servidor atendeu o público quando deixou de ser dever.',
      'O servidor atendeu o público para que fosse seu dever.'
    ],
    correta: 1,                         // índice da certa
    explicacao: '"Porque" e "pois" são conjunções explicativas/causais com sentido equivalente aqui. "Apesar de" (concessiva), "se" (condicional) e "para que" (final) trocam a relação lógica — e a FGV adora isso.', // explicação
    dica: 'Reescrita FGV = troca de conector. Identifique primeiro a relação original (causa, concessão, condição, finalidade) e só marque a alternativa que preserva a MESMA relação.', // pegadinha
    video: 'reescrita de frases sentido e forma fgv concurso' // busca no YouTube
  },
  {
    id: 'p37',                          // identificador único
    materia: 'Língua Portuguesa',       // matéria
    tema: 'Ortografia — sessão/seção/cessão', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'Complete: "A ___ de cinema começou atrasada; a ___ de fotos será publicada amanhã; a ___ dos bens foi homologada."', // pergunta
    alternativas: [                     // opções
      'seção, sessão, cessão',
      'sessão, seção, cessão',
      'cessão, sessão, seção',
      'sessão, cessão, seção',
      'seção, cessão, sessão'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'SESSÃO = evento/reunião (sessão de cinema, sessão plenária). SEÇÃO = divisão/partes (seção de esportes, seção eleitoral). CESSÃO = ato de ceder, transferência (cessão de bens, cessão de crédito).', // explicação
    dica: 'Macete da Vunesp: SESSÃO = assembleia/funcionamento ("sessão começa e termina"); SEÇÃO = fatiamento (seção do jornal); CESSÃO = doação/transferência jurídica.', // pegadinha
    video: 'sessão seção cessão diferença para concurso' // busca no YouTube
  },
  {
    id: 'p38',                          // identificador único
    materia: 'Língua Portuguesa',       // matéria
    tema: 'Funções da linguagem',       // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Instituto AOCP',            // banca inspiradora
    enunciado: 'A placa de trânsito "PARE" exerce predominantemente a função:', // pergunta
    alternativas: [                     // opções
      'Referencial',
      'Emotiva',
      'Conativa',
      'Poética',
      'Metalinguística'
    ],
    correta: 2,                         // índice da certa
    explicacao: 'A função conativa (apelativa) visa influenciar o comportamento do receptor — ordens, apelos, propagandas e placas de trânsito. Referencial informa; emotiva expressa sentimentos; poética trabalha a forma; metalinguística explica a própria língua.', // explicação
    dica: 'Chave da AOCP: verbo no imperativo ou chamada à ação = conativa. A placa não informa — ela MANDA. Propaganda é sempre o exemplo favorito.', // pegadinha
    video: 'funções da linguagem conativa emotiva para concurso' // busca no YouTube
  },
  {
    id: 'p39',                          // identificador único
    materia: 'Língua Portuguesa',       // matéria
    tema: 'Crase — casos especiais',    // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'Em qual alternativa a crase está empregada incorretamente?', // pergunta
    alternativas: [                     // opções
      'Entreguei o relatório ao diretor.',
      'Referi-me àquela servidora.',
      'O aluno foi à escola.',
      'As provas começaram à meia-noite.',
      'Os dados foram enviados à ele.'
    ],
    correta: 4,                         // índice da certa
    explicacao: 'Não há crase antes de pronome pessoal ("a ele" sem acento). "Ao diretor" (a+o), "àquela" (a+aquela), "à escola" (a+a) e "à meia-noite" (locução adverbial) estão todos corretos.', // explicação
    dica: 'Casos em que a FCC NÃO admite crase: antes de pronome pessoal (a ele, a mim), antes de verbo (a estudar), antes de palavra masculina (a cavalo), e antes de pronomes indefinidos (a qualquer).', // pegadinha
    video: 'crase casos proibidos antes de pronome para concurso' // busca no YouTube
  },
  {
    id: 'p40',                          // identificador único
    materia: 'Língua Portuguesa',       // matéria
    tema: 'Classes — numeral',          // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'Em "os três primeiros colocados", "três" e "primeiros" são, respectivamente:', // pergunta
    alternativas: [                     // opções
      'Adjetivo e advérbio',
      'Numeral cardinal e numeral ordinal',
      'Pronome e artigo',
      'Artigo e numeral',
      'Preposição e conjunção'
    ],
    correta: 1,                         // índice da certa
    explicacao: '"Três" indica quantidade exata (numeral cardinal); "primeiros" indica ordem na série (numeral ordinal). Ambos pertencem à classe dos numerais — uma das dez classes de palavras.', // explicação
    dica: 'A IBFC confunde numeral com adjetivo: cardinal (um, dois, três) conta; ordinal (primeiro, segundo) ordena; multiplicativo (dobro, triplo) multiplica; fracionário (metade, terço) divide.', // pegadinha
    video: 'numerais cardinal ordinal multiplicativo fracionário concurso' // busca no YouTube
  },

  /* ===================== LOTE NOVO — MATEMÁTICA (m34 a m39) ===================== */
  {
    id: 'm34',                          // identificador único
    materia: 'Matemática',              // matéria
    tema: 'Desconto simples comercial', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'Um título de R$ 5.000,00 foi descontado 3 meses antes do vencimento, a uma taxa de desconto simples comercial de 2% ao mês. O valor recebido foi de:', // pergunta
    alternativas: [                     // opções
      'R$ 4.700,00',
      'R$ 4.800,00',
      'R$ 4.900,00',
      'R$ 4.400,00',
      'R$ 4.850,00'
    ],
    correta: 0,                         // índice da certa
    passos: [                           // passo a passo
      'Calcule o desconto: D = N × i × t = 5.000 × 0,02 × 3 = R$ 300,00.',
      'Subtraia do valor nominal: 5.000 − 300 = R$ 4.700,00.'
    ],
    explicacao: 'No desconto simples comercial ("por fora"), o desconto incide sobre o valor NOMINAL: 2% × 3 meses = 6% de 5.000 = 300. Valor atual = 5.000 − 300 = 4.700.', // explicação
    dica: 'No desconto simples, a taxa incide sempre sobre o valor cheio (nominal). Não confunda com juros: desconto subtrai antes, juros somam depois.', // pegadinha
    video: 'desconto simples comercial para concurso fórmula' // busca no YouTube
  },
  {
    id: 'm35',                          // identificador único
    materia: 'Matemática',              // matéria
    tema: 'Taxas equivalentes',         // assunto
    nivel: 'dificil',                   // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'Qual taxa TRIMESTRAL de juros compostos equivale a 21% ao semestre?', // pergunta
    alternativas: [                     // opções
      '7% ao trimestre',
      '10% ao trimestre',
      '10,5% ao trimestre',
      '12% ao trimestre',
      '42% ao trimestre'
    ],
    correta: 1,                         // índice da certa
    passos: [                           // passo a passo
      'Um semestre tem 2 trimestres: busque i tal que (1 + i)² = 1,21.',
      '√1,21 = 1,10.',
      'i = 0,10 = 10% ao trimestre.'
    ],
    explicacao: 'Taxas equivalentes usam potenciação, não divisão: 10% ao trimestre compõe 1,1 × 1,1 = 1,21 = 21% ao semestre. A resposta errada "10,5%" vem da divisão por 2 — válida só no regime simples.', // explicação
    dica: 'Regra de ouro: juros compostos = taxas equivalentes por raiz/potência; juros simples = taxas proporcionais por divisão. A banca espera que você divida 21 ÷ 2 e marque 10,5%.', // pegadinha
    video: 'taxas equivalentes juros compostos para concurso' // busca no YouTube
  },
  {
    id: 'm36',                          // identificador único
    materia: 'Matemática',              // matéria
    tema: 'Amortização — SAC x Price',  // assunto
    nivel: 'dificil',                   // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'No Sistema de Amortização Constante (SAC), é correto afirmar:', // pergunta
    alternativas: [                     // opções
      'As prestações são constantes ao longo do tempo',
      'As amortizações são iguais em todas as parcelas',
      'Os juros crescem a cada parcela',
      'A primeira parcela é sempre a menor',
      'O saldo devedor nunca diminui'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'No SAC, a AMORTIZAÇÃO é constante e a prestação decresce (o juro incide sobre o saldo, que cai). No Sistema Price (tabela Price), a prestação é fixa e a amortização cresce.', // explicação
    dica: 'A CESPE troca os dois sistemas de propósito: SAC = amortização constante + prestação decrescente; Price = prestação constante + amortização crescente. Decore o par.', // pegadinha
    video: 'sac e price sistemas de amortização diferença concurso' // busca no YouTube
  },
  {
    id: 'm37',                          // identificador único
    materia: 'Matemática',              // matéria
    tema: 'Aumentos percentuais encadeados', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'Uma população cresceu 10% ao ano durante dois anos seguidos. O crescimento percentual total no período foi de:', // pergunta
    alternativas: [                     // opções
      '20%',
      '21%',
      '22%',
      '10%',
      '15%'
    ],
    correta: 1,                         // índice da certa
    passos: [                           // passo a passo
      'Some 100% com cada aumento: 1,10 × 1,10.',
      '1,10 × 1,10 = 1,21.',
      '1,21 − 1 = 0,21 = 21%.'
    ],
    explicacao: 'Aumentos sucessivos se multiplicam (fator 1,10 ao quadrado), não se somam: o segundo aumento incide sobre o valor já crescido. Resultado: 21% de crescimento acumulado — a pegadinha é o "20%" da soma direta.', // explicação
    dica: 'Atalho do vestibular: transforme % em fator (10% vira 1,10) e multiplique os fatores. Aumento+desconto é o irmão gêmeo que também não se anula — 10% depois −10% dá 0,99, não 1.', // pegadinha
    video: 'aumentos percentuais sucessivos fator multiplicativo' // busca no YouTube
  },
  {
    id: 'm38',                          // identificador único
    materia: 'Matemática',              // matéria
    tema: 'Porcentagem — cadeia de variações', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'Uma cidade tinha 50.000 habitantes. Em um ano cresceu 4% e no ano seguinte diminuiu 2%. A população final é de:', // pergunta
    alternativas: [                     // opções
      '50.000',
      '50.960',
      '51.000',
      '50.600',
      '49.960'
    ],
    correta: 1,                         // índice da certa
    passos: [                           // passo a passo
      'Crescimento de 4%: 50.000 × 1,04 = 52.000.',
      'Diminuição de 2% sobre o novo valor: 52.000 × 0,98 = 50.960.',
      'População final: 50.960.'
    ],
    explicacao: 'O segundo porcentual incide sobre o valor JÁ alterado (52.000, não 50.000): 52.000 × 0,98 = 50.960. A alternativa "50.000" é a isca de quem acha que +4% e −2% se compensam.', // explicação
    dica: 'Quando a base muda entre as variações, some os fatores por multiplicação, nunca por diferença simples. +4% depois −2% NÃO dá +2%: dá +1,92%.', // pegadinha
    video: 'porcentagem encadeada variações para concurso' // busca no YouTube
  },
  {
    id: 'm39',                          // identificador único
    materia: 'Matemática',              // matéria
    tema: 'Taxa nominal x efetiva',     // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'Uma taxa nominal de 12% ao ano, com capitalização mensal, corresponde a uma taxa efetiva mensal de:', // pergunta
    alternativas: [                     // opções
      '12% ao mês',
      '1% ao mês',
      '6% ao mês',
      '0,12% ao mês',
      '1,2% ao mês'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Taxa nominal anual com capitalização mensal divide pelos 12 meses: 12% ÷ 12 = 1% ao mês efetivo. A nominal é um "letreiro"; a efetiva é a que realmente capitaliza.', // explicação
    dica: 'A FCC planta a mesma taxa nominal com capitalizações diferentes: anual capitalizada anualmente = efetiva igual; anual capitalizada mensalmente = divide por 12. Confira sempre o período de capitalização.', // pegadinha
    video: 'taxa nominal e efetiva juros compostos concurso' // busca no YouTube
  },

  /* ===================== LOTE NOVO — RACIOCÍNIO LÓGICO (r28 a r31) ===================== */
  {
    id: 'r28',                          // identificador único
    materia: 'Raciocínio Lógico',       // matéria
    tema: 'Conjuntos — três conjuntos', // assunto
    nivel: 'dificil',                   // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'Em um concurso com 60 candidatos: 30 estudam português, 25 matemática, 15 lógica; 10 estudam português e matemática; 5 português e lógica; 5 matemática e lógica; e 2 estudam as três. Quantos candidatos não estudam nenhuma das três?', // pergunta
    alternativas: [                     // opções
      '5',
      '7',
      '8',
      '10',
      '12'
    ],
    correta: 2,                         // índice da certa
    passos: [                           // passo a passo
      'Use inclusão-exclusão para 3 conjuntos: |P∪M∪L| = |P|+|M|+|L| − |P∩M| − |P∩L| − |M∩L| + |P∩M∩L|.',
      '30 + 25 + 15 − 10 − 5 − 5 + 2 = 52.',
      'Subtraia do total: 60 − 52 = 8.'
    ],
    explicacao: 'Somando os três conjuntos, as interseções duplas foram contadas duas vezes (desconte uma vez cada) e a tripla, três vezes (desconte duas, mas some de volta uma porque ela foi subtraída a mais). Estudam ao menos uma: 52; não estudam: 8.', // explicação
    dica: 'Fórmula pronta para 3 conjuntos: some tudo, tire os pares, devolva a interseção tripla. A banca planta o resultado sem o "+2" final (50 em vez de 52) — nesse caso a resposta sairia "10".', // pegadinha
    video: 'três conjuntos inclusão exclusão diagrama venn concurso' // busca no YouTube
  },
  {
    id: 'r29',                          // identificador único
    materia: 'Raciocínio Lógico',       // matéria
    tema: 'Relógios — atraso acumulado', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'Um relógio atrasa 5 minutos por dia. Se está certo agora, em quantos dias estará exatamente 1 hora atrasado?', // pergunta
    alternativas: [                     // opções
      '6 dias',
      '10 dias',
      '12 dias',
      '15 dias',
      '20 dias'
    ],
    correta: 2,                         // índice da certa
    passos: [                           // passo a passo
      'Converta 1 hora em minutos: 60 minutos.',
      'Divida pelo atraso diário: 60 ÷ 5 = 12 dias.'
    ],
    explicacao: 'Acumulando 5 minutos por dia, o relógio precisa de 12 dias para atrasar 60 minutos (1 hora).', // explicação
    dica: 'Em problemas de relógio com atraso/adiantamento, converta TUDO para a mesma unidade (minutos) antes de dividir. A alternativa "10 dias" pega quem usou 50 minutos.', // pegadinha
    video: 'problemas de relógio atraso raciocínio lógico concurso' // busca no YouTube
  },
  {
    id: 'r30',                          // identificador único
    materia: 'Raciocínio Lógico',       // matéria
    tema: 'Associações — cidade e profissão', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'FGV',                       // banca inspiradora
    enunciado: 'Ana, Bia e Caio moram em SP, RJ e BH e são médico, professor e engenheiro (não nessa ordem). Ana não mora em SP nem em RJ. Bia não é médica. O médico mora no RJ. Então Caio:', // pergunta
    alternativas: [                     // opções
      'Mora em BH e é engenheiro',
      'Mora no RJ e é médico',
      'Mora em SP e é professor',
      'Mora em BH e é médico',
      'Mora no RJ e é professor'
    ],
    correta: 1,                         // índice da certa
    passos: [                           // passo a passo
      'Ana não mora em SP nem RJ → Ana mora em BH.',
      'O médico mora no RJ; Bia não é médica → Bia não mora no RJ; como BH já é de Ana, Bia mora em SP.',
      'Sobra RJ para Caio → Caio mora no RJ e, portanto, é o médico.'
    ],
    explicacao: 'Resolva pelas posições travadas: Ana em BH (única cidade que sobra para ela), Bia em SP (não é médica, logo não está no RJ). Resta RJ + médico para Caio.', // explicação
    dica: 'Quando a pergunta une dois dados (cidade + profissão), resolva primeiro a parte que tem só UMA resposta (a cidade de Ana) e a profissão vem de brinde pelo vínculo dado.', // pegadinha
    video: 'associações lógicas cidade profissão para concurso' // busca no YouTube
  },
  {
    id: 'r31',                          // identificador único
    materia: 'Raciocínio Lógico',       // matéria
    tema: 'Sequência — números primos', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'Na sequência 2, 3, 5, 7, 11, 13, ..., o próximo termo é:', // pergunta
    alternativas: [                     // opções
      '14',
      '15',
      '16',
      '17',
      '19'
    ],
    correta: 3,                         // índice da certa
    explicacao: 'É a sequência dos números primos (divisíveis apenas por 1 e por si mesmos): depois de 13 vem 17. O "19" que vem depois também é primo — mas é o SEGUNDO próximo, não o primeiro.', // explicação
    dica: 'Quando a diferença entre termos não é constante nem multiplicativa e a soma não fecha Fibonacci, teste primos, quadrados, cubos e potências — a Vunesp esconde primos em sequência "simples".', // pegadinha
    video: 'sequência de números primos raciocínio lógico concurso' // busca no YouTube
  },

  /* ===================== LOTE NOVO — INFORMÁTICA (i25 a i28) ===================== */
  {
    id: 'i25',                          // identificador único
    materia: 'Informática',             // matéria
    tema: 'Redes — VPN',                // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'Uma VPN (Rede Privada Virtual) permite:', // pergunta
    alternativas: [                     // opções
      'Acelerar a velocidade da internet',
      'Criar um túnel criptografado e seguro sobre a rede pública para acessar uma rede privada remotamente',
      'Compartilhar a senha do wi-fi com vizinhos',
      'Bloquear o firewall da rede doméstica',
      'Navegar sem qualquer endereço IP'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A VPN estende uma rede privada por cima da internet pública: o tráfego viaja num "túnel" criptografado, como se o dispositivo estivesse dentro da empresa — usada para home office e acesso remoto seguro.', // explicação
    dica: 'A CESPE confunde VPN com proxy e com navegação anônima: VPN criptografa a conexão inteira até a rede de destino; ainda existe IP (o IP muda para o da rede/servidor VPN), não é anonimato absoluto.', // pegadinha
    video: 'o que é vpn rede privada virtual para concurso' // busca no YouTube
  },
  {
    id: 'i26',                          // identificador único
    materia: 'Informática',             // matéria
    tema: 'Excel — função PROCV',       // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'No Excel, a função PROCV serve para:', // pergunta
    alternativas: [                     // opções
      'Somar os valores de uma coluna',
      'Procurar um valor na primeira coluna de uma tabela e retornar o dado de outra coluna da mesma linha',
      'Criar gráficos automáticos',
      'Proteger a planilha com senha',
      'Converter texto em números'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'PROCV (VLOOKUP) busca um valor na coluna mais à esquerda de um intervalo e devolve o conteúdo da coluna indicada naquela linha — a "lupa" do Excel para cruzar tabelas.', // explicação
    dica: 'A FCC cobra os 4 argumentos: valor procurado, tabela, número da coluna e o VERDADEIRO/FALSO do final (FALSO = correspondência exata — quase sempre o desejado).', // pegadinha
    video: 'procv vlookup excel para concurso' // busca no YouTube
  },
  {
    id: 'i27',                          // identificador único
    materia: 'Informática',             // matéria
    tema: 'Redes — LAN e WAN',          // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'A sigla LAN designa uma rede que:', // pergunta
    alternativas: [                     // opções
      'Conecta computadores em área local, como uma residência ou escritório',
      'Abrange cidades e países inteiros',
      'Funciona apenas por satélite',
      'É exclusiva de servidores de jogos',
      'Não usa roteadores'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'LAN = Local Area Network: rede local que liga dispositivos próximos (casa, escritório, prédio). WAN = Wide Area Network, a que cobre grandes distâncias (a própria internet é a maior WAN).', // explicação
    dica: 'Escada de cobertura que a IBFC repete: PAN (pessoal, bluetooth) < LAN (local) < MAN (cidade) < WAN (países/mundo). Decore o acrônimo pela letra do meio: L=local, W=wide.', // pegadinha
    video: 'diferença entre lan wan man pan redes concurso' // busca no YouTube
  },
  {
    id: 'i28',                          // identificador único
    materia: 'Informática',             // matéria
    tema: 'E-mail — protocolos',        // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'Os protocolos usados para ENVIAR e RECEBER e-mails são, respectivamente:', // pergunta
    alternativas: [                     // opções
      'SMTP e POP3/IMAP',
      'POP3 e SMTP',
      'HTTP e FTP',
      'FTP e SMTP',
      'DHCP e DNS'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'SMTP cuida do envio (Simple Mail Transfer Protocol); POP3 e IMAP cuidam do recebimento — POP baixa as mensagens para o aparelho, IMAP mantém no servidor sincronizado.', // explicação
    dica: 'Macete da FCC: SMTP = "Saiu Meu e-mail, Trânsito de Mensagem" (envio). POP e IMAP recebem. E FTP é arquivo, não e-mail — clássica confusão das alternativas.', // pegadinha
    video: 'protocolos de e-mail smtp pop3 imap concurso' // busca no YouTube
  },

  /* ===================== LOTE NOVO — DIREITO CONSTITUCIONAL (c21 a c26) ===================== */
  {
    id: 'c21',                          // identificador único
    materia: 'Direito Constitucional',  // matéria
    tema: 'Acumulação de cargos (art. 37)', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'Segundo o art. 37 da Constituição, é permitido acumular remuneradamente:', // pergunta
    alternativas: [                     // opções
      'Dois cargos de professor',
      'Dois cargos quaisquer, sem limite',
      'Três cargos de professor',
      'Um cargo de professor e um cargo administrativo',
      'Dois cargos de técnico administrativo'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'A regra é a vedação da acumulação, com três exceções: dois cargos de professor; um de professor com um técnico ou científico; e dois cargos privativos de profissional da saúde com profissões regulamentadas.', // explicação
    dica: 'A IBFC cobra as 3 exceções exatas: professor+professor; professor+técnico/científico; saúde+saúde. "Professor + administrativo" NÃO entra — a exceção exige técnico/científico, não administrativo.', // pegadinha
    video: 'acumulação de cargos públicos art 37 exceções concurso' // busca no YouTube
  },
  {
    id: 'c22',                          // identificador único
    materia: 'Direito Constitucional',  // matéria
    tema: 'Nepotismo',                  // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'O nepotismo (nomeação de parentes para cargos na administração em que o agente tem poder) viola principalmente os princípios da:', // pergunta
    alternativas: [                     // opções
      'Legalidade e eficiência apenas',
      'Impessoalidade e moralidade',
      'Publicidade e supremacia',
      'Autotutela e continuidade',
      'Razoabilidade e ampla defesa'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Nepotismo = usar o cargo para beneficiar parente: fere a impessoalidade (tratar todos igualmente) e a moralidade (agir conforme a ética). A Súmula Vinculante 13 detalha a vedação para cargos em comissão e funções de confiança.', // explicação
    dica: 'A CESPE liga o caso concreto ao princípio: sobrinho do prefeito nomeado? Impessoalidade + moralidade (não existe um "princípio da não-parentalidade" — a resposta vem pelo par).', // pegadinha
    video: 'nepotismo súmula vinculante 13 impessoalidade concurso' // busca no YouTube
  },
  {
    id: 'c23',                          // identificador único
    materia: 'Direito Constitucional',  // matéria
    tema: 'Processo legislativo — veto', // assunto
    nivel: 'dificil',                   // dificuldade
    ensino: 'superior',                 // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'Se o Presidente da República veta um projeto de lei, o Congresso pode derrubar o veto com:', // pergunta
    alternativas: [                     // opções
      'Maioria simples dos deputados presentes',
      'Maioria absoluta dos deputados e senadores, em votação conjunta',
      'Dois terços das duas casas',
      'Três quintos do Senado apenas',
      'A assinatura do presidente da Câmara'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O veto presidencial é derrubado por maioria absoluta dos membros de Cada Casa, em sessão conjunta do Congresso (art. 66). Se não apreciado em 30 dias, o veto sobrestima a pauta.', // explicação
    dica: 'Quóruns que a FCC confunde: emenda constitucional = 3/5; derrubada de veto = maioria absoluta (metade mais um dos membros de cada casa). Simples é maioria dos PRESENTES — não serve para veto.', // pegadinha
    video: 'veto presidencial maioria absoluta congresso art 66 concurso' // busca no YouTube
  },
  {
    id: 'c24',                          // identificador único
    materia: 'Direito Constitucional',  // matéria
    tema: 'Poder Judiciário — tribunais', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'superior',                 // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'São órgãos do Poder Judiciário previstos no art. 92 da Constituição, EXCETO:', // pergunta
    alternativas: [                     // opções
      'Supremo Tribunal Federal',
      'Superior Tribunal de Justiça',
      'Tribunais Regionais Federais',
      'Tribunal de Contas da União',
      'Conselho Nacional de Justiça'
    ],
    correta: 3,                         // índice da certa
    explicacao: 'O TCU NÃO é órgão do Judiciário — é órgão auxiliar do Congresso Nacional (fiscalização contábil, orçamentária e administrativa). O CNJ também é Judiciário (órgão de controle interno), embora não julgue processos.', // explicação
    dica: 'Armadilha eterna da FCC: TCU = órgão auxiliar do LEGISLATIVO, nunca do Judiciário — ele "fiscaliza", não "julga". Já o CNJ é do Judiciário mesmo sem julgar.', // pegadinha
    video: 'tribunais brasileiros art 92 tcu judiciário concurso' // busca no YouTube
  },
  {
    id: 'c25',                          // identificador único
    materia: 'Direito Constitucional',  // matéria
    tema: 'Controle de constitucionalidade', // assunto
    nivel: 'dificil',                   // dificuldade
    ensino: 'superior',                 // nível do concurso
    banca: 'FGV',                       // banca inspiradora
    enunciado: 'A ação direta de inconstitucionalidade (ADI) serve para:', // pergunta
    alternativas: [                     // opções
      'Julgar crimes comuns de governadores',
      'Declarar a inconstitucionalidade de lei ou ato normativo federal ou estadual perante o STF',
      'Fiscalizar contas de prefeitos',
      'Definir competências entre tribunais',
      'Obrigar o juiz a julgar processo paralisado'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A ADI é o instrumento do controle abstrato/concentrado: pede ao STF que declare uma lei ou ato normativo (federal ou estadual) inconstitucional, com efeito geral (erga omnes) — só os legitimados do art. 103 podem propor.', // explicação
    dica: 'A FGV troca ADI com ADC e ADPF: ADI (inconstitucional), ADC (ação de conformidade — declara CONSTITUCIONAL), ADPF (arguição de descumprimento de preceito fundamental). E só entes do art. 103 propõem.', // pegadinha
    video: 'adi adc adpf controle de constitucionalidade concurso' // busca no YouTube
  },
  {
    id: 'c26',                          // identificador único
    materia: 'Direito Constitucional',  // matéria
    tema: 'Art. 7º — direitos trabalhistas', // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'São direitos dos trabalhadores urbanos e rurais, além de outros que visem à melhoria de sua condição social, EXCETO:', // pergunta
    alternativas: [                     // opções
      'Décimo terceiro salário',
      'Férias anuais remuneradas com, pelo menos, um terço a mais que o salário normal',
      'Aposentadoria compulsória aos 60 anos para todos',
      'Jornada de 8 horas diárias e 44 semanais',
      'Salário mínimo fixado em lei'
    ],
    correta: 2,                         // índice da certa
    explicacao: 'O art. 7º garante 13º salário, férias +1/3, jornada de 8h/44h semanais e salário mínimo — mas NÃO prevê aposentadoria compulsória aos 60 como direito universal (compulsória existe para servidores públicos aos 75).', // explicação
    dica: 'A Vunesp usa a técnica do "inventado convincente": mistura direitos reais com um que parece razoável mas não existe. No rol do art. 7º, "compulsória aos 60" não aparece.', // pegadinha
    video: 'direitos dos trabalhadores art 7 constituição concurso' // busca no YouTube
  },

  /* ===================== LOTE NOVO — DIREITO ADMINISTRATIVO (a20 a a23) ===================== */
  {
    id: 'a20',                          // identificador único
    materia: 'Direito Administrativo',  // matéria
    tema: 'Provimento — reversão e aproveitamento', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'O retorno do aposentado por invalidez ao cargo quando cessa a incapacidade, ou do aposentado voluntário por interesse da Administração, chama-se:', // pergunta
    alternativas: [                     // opções
      'Readaptação',
      'Reversão',
      'Aproveitamento',
      'Recondução',
      'Reintegração'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'REVERSÃO = volta do aposentado (v de "velho" voltando). READAPTAÇÃO = servidor capaz muda de cargo por limitação. APROVEITAMENTO = retorna do cargo em disponibilidade. RECONDUÇÃO = volta por inabilitação em estágio probatório ou demissão ilegal em outro cargo.', // explicação
    dica: 'Macete da IBFC com os R: ReVersão = Velho volta; ReAdaptação = Ajuste por limitação; ReCondução = quebra de Confiança (probatoriedade); ReIntegração = Injustiça revertida; AProveitamento = sobra na gaveta.', // pegadinha
    video: 'reversão readaptação aproveitamento recondução concurso' // busca no YouTube
  },
  {
    id: 'a21',                          // identificador único
    materia: 'Direito Administrativo',  // matéria
    tema: 'PAD — processo administrativo disciplinar', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'Para demitir um servidor estável por falta grave, a Administração deve abrir:', // pergunta
    alternativas: [                     // opções
      'Sindicância simples, com decisão do chefe imediato',
      'Processo administrativo disciplinar com ampla defesa e contraditório',
      'Processo judicial trabalhista',
      'Inquérito policial',
      'Avaliação de desempenho ordinária'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A demissão do estável exige PAD (processo administrativo disciplinar) com ampla defesa e contraditório — garantias do art. 5º, LV. Sem defesa, a demissão é nula; a sindicância serve para infrações leves.', // explicação
    dica: 'A CESPE troca PAD com sindicância: PAD = penalidade grave (demissão, cassação de aposentadoria) e tem comissão de 3 servidores estáveis; sindicância = falta leve (advertência, suspensão até 30 dias).', // pegadinha
    video: 'processo administrativo disciplinar pad servidor concurso' // busca no YouTube
  },
  {
    id: 'a22',                          // identificador único
    materia: 'Direito Administrativo',  // matéria
    tema: 'Licitação — tipos',          // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'superior',                 // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'Na Lei 14.133/2021, são tipos de licitação previstos:', // pergunta
    alternativas: [                     // opções
      'Menor preço e melhor técnica',
      'Maior preço e pior técnica',
      'Apenas menor preço',
      'Sorteio e menor tempo',
      'Maior desconto e melhor apresentação'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'A nova lei define os tipos (o critério de julgamento): menor preço; melhor técnica ou conteúdo artístico; técnica e preço; maior lance ou oferta; e maior desconto. Não confunda com as MODALIDADES (concorrência, pregão, diálogo competitivo etc.).', // explicação
    dica: 'A FCC mistura TIPO (critério de julgamento — como vence) com MODALIDADE (forma da disputa — como se licita). Menor preço/técnica e preço/maior lance são tipos; pregão/concorrência/diálogo são modalidades.', // pegadinha
    video: 'tipos de licitação menor preço melhor técnica lei 14133' // busca no YouTube
  },
  {
    id: 'a23',                          // identificador único
    materia: 'Direito Administrativo',  // matéria
    tema: 'Controle da Administração',  // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'superior',                 // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'O controle INTERNO da Administração Pública é exercido:', // pergunta
    alternativas: [                     // opções
      'Pelo Judiciário, que revoga atos ilegais',
      'Pela própria Administração sobre seus órgãos e agentes (autocontrole, com a autotutela)',
      'Apenas pelo Tribunal de Contas',
      'Somente pelo Congresso Nacional',
      'Pelas empresas contratadas fiscalizando o órgão'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O controle interno é o que a própria Administração exerce sobre si (corregedorias, ouvidorias, autotutela): anula atos ilegais e revoga os inconvenientes. Judiciário e TCU são controle EXTERNO; o popular também existe (ações populares, audiências).', // explicação
    dica: 'Três controles da CESPE: interno (ela mesma, com autotutela — pode anular E revogar), externo (legislativo com TCU, e judiciário — que só ANULA, nunca revoga) e popular (sociedade). O juiz nunca revoga: não julga conveniência.', // pegadinha
    video: 'controle da administração interno externo judicial concurso' // busca no YouTube
  },

  /* ===================== LOTE NOVO — ATUALIDADES (t19 a t21) ===================== */
  {
    id: 't19',                          // identificador único
    materia: 'Atualidades',             // matéria
    tema: 'BRICS',                      // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Instituto AOCP',            // banca inspiradora
    enunciado: 'Os países que formam o núcleo original do BRICS são:', // pergunta
    alternativas: [                     // opções
      'Brasil, Rússia, Índia, China e África do Sul',
      'Brasil, Rússia, Itália, China e Suécia',
      'Bolívia, Rússia, Índia, Chile e África do Sul',
      'Brasil, Reino Unido, Índia, Canadá e Sudão',
      'Brasil, Argentina, Índia, China e Nigéria'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'BRICS = Brasil, Rússia, Índia, China e África do Sul (o "S" entrou em 2010, o acrônimo era BRIC). Bloco de economias emergentes com o Novo Banco de Desenvolvimento — que vem se ampliando com novos membros.', // explicação
    dica: 'A banca troca as iniciais: S é ÁFRICA DO SUL, não Suécia nem Sudão. E BRICS ≠ Mercosul ≠ ONU — é um fórum de cooperação econômica, não tratado de livre comércio.', // pegadinha
    video: 'o que são os brics países membros resumo' // busca no YouTube
  },
  {
    id: 't20',                          // identificador único
    materia: 'Atualidades',             // matéria
    tema: 'Economia — IPCA',            // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'O IPCA, divulgado mensalmente, é:', // pergunta
    alternativas: [                     // opções
      'O índice oficial de inflação do Brasil, medido pelo IBGE',
      'A taxa de juros básica da economia',
      'O imposto sobre produtos industrializados',
      'O índice de preços das ações da Bolsa',
      'A taxa de desemprego do país'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'IPCA = Índice Nacional de Preços ao Consumidor Amplo: o índice oficial da inflação, calculado pelo IBGE com a cesta de consumo das famílias de 1 a 40 salários mínimos. A meta de inflação do Banco Central é definida sobre ele.', // explicação
    dica: 'Par que a IBFC sempre troca: IPCA mede INFLAÇÃO (IBGE); Selic é JUROS (Copom). E a meta de inflação é definida pelo Conselho Monetário Nacional, não pelo BC sozinho.', // pegadinha
    video: 'o que é ipca inflação ibge resumo' // busca no YouTube
  },
  {
    id: 't21',                          // identificador único
    materia: 'Atualidades',             // matéria
    tema: 'Eleições — TSE',             // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'O Tribunal Superior Eleitoral (TSE) é o órgão que:', // pergunta
    alternativas: [                     // opções
      'Julga crimes comuns cometidos por deputados federais',
      'Dirige a Justiça Eleitoral, organiza as eleições e registra candidaturas e partidos',
      'Fiscaliza as contas da União',
      'Define os salários dos vereadores',
      'Comanda as Forças Armadas durante as eleições'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O TSE é o topo da Justiça Eleitoral (com os TREs estaduais e os juízos eleitorais): registra partidos e candidaturas, supervisiona a votação e a totalização e julga os recursos eleitorais.', // explicação
    dica: 'A FCC mistura tribunais: TSE = eleições; STF = constitucional; STJ = leis federais; TST = trabalhista; STM = militar. Cada tribunal tem seu "assunto" — troque e erre.', // pegadinha
    video: 'tse tribunal superior eleitoral funções resumo' // busca no YouTube
  },

  /* ===================== LOTE NOVO — HISTÓRIA DO BRASIL (h17 a h19) ===================== */
  {
    id: 'h17',                          // identificador único
    materia: 'História do Brasil',      // matéria
    tema: 'Revolução de 1930',          // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'A Revolução de 1930 encerrou a República Velha ao:', // pergunta
    alternativas: [                     // opções
      'Proclamar a independência',
      'Impedir a posse de Júlio Prestes e levar Getúlio Vargas ao poder',
      'Assinar a Lei Áurea',
      'Implantar a ditadura militar de 1964',
      'Criar a CLT'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A Aliança Liberal (Vargas) perdeu a eleição de 1930 para Júlio Prestes (candidato do "café com leite"), mas um movimento armado depôs Washington Luís e impediu a posse — Vargas assumiu e ficou 15 anos.', // explicação
    dica: 'Sequência que a banca embaralha: República Velha (1889-1930) → Revolução de 30 → Era Vargas (1930-45). A CLT é de 1943, dentro de Vargas — não "causou" a revolução.', // pegadinha
    video: 'revolução de 1930 getúlio vargas república velha resumo' // busca no YouTube
  },
  {
    id: 'h18',                          // identificador único
    materia: 'História do Brasil',      // matéria
    tema: 'JK — Plano de Metas e Brasília', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Fuvest / Unicamp (vestibular)', // banca inspiradora
    enunciado: 'O governo Juscelino Kubitschek (1956-1961) ficou marcado pelo:', // pergunta
    alternativas: [                     // opções
      'Plano de Metas ("50 anos em 5") e a construção de Brasília',
      'Fim da escravidão',
      'Início da ditadura militar',
      'Programa de privatizações dos anos 90',
      'Retorno da família real ao poder'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'JK prometeu desenvolver o país "50 anos em 5": industrialização pesada, automobilística e a transferência da capital para Brasília (inaugurada em 1960, projetada por Lúcio Costa e Niemeyer).', // explicação
    dica: 'JK = otimismo + desenvolvimentismo + Brasília. A banca coloca "privatizações" (anos 90, FHC/Collor) como isca — cada era tem seu pacote econômico.', // pegadinha
    video: 'governo jk plano de metas brasília resumo' // busca no YouTube
  },
  {
    id: 'h19',                          // identificador único
    materia: 'História do Brasil',      // matéria
    tema: 'Segundo Reinado — economia cafeeira', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Fuvest / Unicamp (vestibular)', // banca inspiradora
    enunciado: 'No Segundo Reinado (1840-1889), a principal base econômica do Império era:', // pergunta
    alternativas: [                     // opções
      'A indústria automobilística',
      'A cafeicultura do Vale do Paraíba e do Oeste Paulista, com trabalho escravo e depois imigrante',
      'A mineração de ouro em Minas Gerais',
      'A exploração de petróleo no litoral',
      'O comércio de especiarias'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O café sustentou o Império: do Vale do Paraíba (RJ/SP, com escravos) migrou para o Oeste Paulista, onde a imigração europeia (sobretudo italiana) foi substituindo a mão de obra escravizada depois de 1850.', // explicação
    dica: 'A banca antecipa o ciclo: ouro = século XVIII (Minas colonial); café = XIX (Império); petróleo = XX. Cada produto tem seu século — troque e erre.', // pegadinha
    video: 'ciclo do café segundo reinado economia resumo' // busca no YouTube
  },

  /* ===================== LOTE NOVO — GEOGRAFIA (g18 a g20) ===================== */
  {
    id: 'g18',                          // identificador único
    materia: 'Geografia',               // matéria
    tema: 'Problemas urbanos',          // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'O processo de "periferização" das cidades brasileiras refere-se a:', // pergunta
    alternativas: [                     // opções
      'O esvaziamento dos centros urbanos em favor do campo',
      'O crescimento urbano desordenado, com habitação precária e falta de serviços nos limites da cidade',
      'A criação de novas capitais planejadas',
      'O retorno da população aos municípios pequenos',
      'A demolição de favelas para construir parques'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A periferização é o empurrão da população pobre para os limites da cidade: moradia precária (favelas, ocupações, loteamentos irregulares), longe do emprego e sem saneamento/transporte adequados.', // explicação
    dica: 'Termos do par do ENEM: periferização (segregação nos limites) x gentrificação (valorização que expulsa o pobre do centro renovado). Os dois produzem segregação urbana — em direções opostas.', // pegadinha
    video: 'periferização e segregação urbana brasil resumo' // busca no YouTube
  },
  {
    id: 'g19',                          // identificador único
    materia: 'Geografia',               // matéria
    tema: 'Setores da economia',        // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'A agropecuária e a mineração pertencem ao setor da economia chamado:', // pergunta
    alternativas: [                     // opções
      'Primário',
      'Secundário',
      'Terciário',
      'Quaternário',
      'Informal'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'Setor primário = extração da natureza (agricultura, pecuária, mineração, pesca). Secundário = indústria e transformação. Terciário = serviços e comércio (o maior empregador do Brasil).', // explicação
    dica: 'A IBFC troca os setores de propósito: professor, médico e motorista são TERCIÁRIOS (serviços); fábrica é SECUNDÁRIO; fazenda e mina são PRIMÁRIO. Decore pela ordem do processo produtivo.', // pegadinha
    video: 'setores da economia primário secundário terciário resumo' // busca no YouTube
  },
  {
    id: 'g20',                          // identificador único
    materia: 'Geografia',               // matéria
    tema: 'Cartografia — projeções',    // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'Ao representar a Terra esférica em um mapa plano, as projeções cartográficas sempre:', // pergunta
    alternativas: [                     // opções
      'Eliminam totalmente as distorções',
      'Geram algum tipo de distorção de forma, área, distância ou direção',
      'Aumentam o tamanho real dos países',
      'Preservam perfeitamente todas as proporções',
      'Só funcionam no hemisfério norte'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'É impossível "achatar" uma esfera sem deformar: cada projeção preserva uma propriedade (forma, área, distância ou direção) e sacrifica as demais — por isso existem várias projeções para usos diferentes.', // explicação
    dica: 'A FCC cobra o par famoso: Mercator (preserva formas/direções, distorce áreas — Groenlândia gigante) x Peters (preserva áreas/proporções, distorce formas). Nenhuma projeção é perfeita — escolhe-se pela finalidade.', // pegadinha
    video: 'projeções cartográficas mercator peters distorções resumo' // busca no YouTube
  },

  /* ===================== LITERATURA (matéria nova — vestibulares) ===================== */
  // TEAM_001: matéria nova para vestibulares (ENEM, Fuvest, Comvest, Univesp, ETEC...)
  {
    id: 'l01',                          // identificador único
    materia: 'Literatura',              // matéria
    tema: 'Romantismo indianista',      // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Fuvest / Unicamp (vestibular)', // banca inspiradora
    enunciado: 'O indianismo, característica do Romantismo brasileiro, valorizava:', // pergunta
    alternativas: [                     // opções
      'O índio como herói idealizado e símbolo da identidade nacional',
      'A vida urbana e a crítica social',
      'A fidelidade aos modelos europeus',
      'O verso livre e a linguagem coloquial',
      'A sátira aos costumes da corte'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'O indianismo (Alencar, Gonçalves Dias) fez do indígena o herói nacional idealizado — nobre, corajoso, ligado à natureza — numa fase em que o Brasil buscava identidade própria pós-independência. Obras: "O Guarani", "Iracema", "Ubirajara".', // explicação
    dica: 'A banca troca os Romantismos: indianismo (herói indígena idealizado) x urbano/mal-do-século (eu lírico sofredor — Álvares de Azevedo). Iracema e O Guarani são do primeiro.', // pegadinha
    video: 'romantismo brasileiro indianismo alencar gonçalves dias resumo' // busca no YouTube
  },
  {
    id: 'l02',                          // identificador único
    materia: 'Literatura',              // matéria
    tema: 'Realismo — Machado de Assis', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'Memórias Póstumas de Brás Cubas (1881), de Machado de Assis, marcou o início do Realismo brasileiro e é famosa por:', // pergunta
    alternativas: [                     // opções
      'Ser narrada por um defunto que conta a própria vida após morrer',
      'Descrever as conquistas da independência',
      'Ser um poema épico sobre o índio',
      'Ter sido escrita em versos livres',
      'Louvar a natureza brasileira'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'Brás Cubas é o "defunto-autor": morto, ele narra a própria vida com ironia, pessimismo e distanciamento — marca do Realismo (olhar crítico sobre a sociedade), que rompe com o idealismo romântico.', // explicação
    dica: 'Romantismo idealiza; Realismo ironiza e critica. Machado é o nome do Realismo psicológico — a Vunesp adora o narrador morto e o marco de 1881.', // pegadinha
    video: 'memórias póstumas de brás cubas machado de assis realismo' // busca no YouTube
  },
  {
    id: 'l03',                          // identificador único
    materia: 'Literatura',              // matéria
    tema: 'Semana de Arte Moderna',     // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'A Semana de Arte Moderna de 1922 marcou o início do Modernismo brasileiro, movimento que propunha:', // pergunta
    alternativas: [                     // opções
      'O retorno ao Barroco',
      'A valorização da cultura nacional, a ruptura com o passado e a liberdade formal (verso livre)',
      'A cópia fiel dos modelos portugueses',
      'A proibição da sátira',
      'A separação total entre arte e política'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A Semana de 22 (no Teatro Municipal de SP) reuniu escritores e artistas que defendiam arte nacional, linguagem coloquial, verso livre e ruptura com a tradição — início do Modernismo brasileiro (Mário e Oswald de Andrade, Anita Malfatti, Tarsila).', // explicação
    dica: 'Datas do ENEM: 1922 = Semana de Arte Moderna (Modernismo); 1881 = Brás Cubas (Realismo). E o verso livre é modernista — Parnasianismo é o extremo oposto (forma perfeita).', // pegadinha
    video: 'semana de arte moderna 1922 modernismo resumo' // busca no YouTube
  },
  {
    id: 'l04',                          // identificador único
    materia: 'Literatura',              // matéria
    tema: 'Barroco',                    // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Unicamp (Comvest)',         // banca inspiradora
    enunciado: 'O Barroco brasileiro (século XVII) é marcado pelo conflito entre razão e fé e teve como autores principais:', // pergunta
    alternativas: [                     // opções
      'Machado de Assis e Guimarães Rosa',
      'Gregório de Matos e padre Antônio Vieira',
      'Oswald e Mário de Andrade',
      'Almeida Garrett e José de Alencar',
      'Carlos Drummond e Cecília Meireles'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O Barroco expressa a tensão homem/Deus, pecado/perdão, corpo/espírito — figuras: Gregório de Matos (poeta, "Boca do Inferno") e Antônio Vieira (orador e prosador). Na arte, corresponde ao século de Aleijadinho e ao ouro de Minas.', // explicação
    dica: 'Escola x século x autores: a banca mistura Barroco (XVII, fé×razão, Matos/Vieira) com Arcadismo (XVIII, pastoreio, Tomás Antônio Gonzaga) e Romantismo (XIX, indianismo). A cola é o PAR de autores.', // pegadinha
    video: 'barroco brasileiro gregório de matos antônio vieira resumo' // busca no YouTube
  },

  /* ===================== INGLÊS (matéria nova — vestibulares) ===================== */
  {
    id: 'e01',                          // identificador único
    materia: 'Inglês',                  // matéria
    tema: 'Falsos cognatos',            // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Univesp (vestibular)',      // banca inspiradora
    enunciado: 'Na frase "She pretended to sleep during the class", o verbo "pretended" significa:', // pergunta
    alternativas: [                     // opções
      'Pretendeu',
      'Fingiu',
      'Teve a intenção de',
      'Preferiu',
      'Aparentou estar'
    ],
    correta: 1,                         // índice da certa
    explicacao: '"Pretend" é falso cognato: significa FINGIR, não pretender. Para "pretender/ter intenção", o inglês usa "to intend". A frase quer dizer "ela fingiu estar dormindo durante a aula".', // explicação
    dica: 'Os falsos cognatos que mais caem: pretend = fingir (pretender = intend); actually = na verdade (atualmente = nowadays); push = empurrar (puxe = pull); library = biblioteca (livraria = bookstore).', // pegadinha
    video: 'falsos cognatos inglês pretend actually para vestibular' // busca no YouTube
  },
  {
    id: 'e02',                          // identificador único
    materia: 'Inglês',                  // matéria
    tema: 'Present perfect',            // assunto
    nivel: 'dificil',                   // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'FATEC/ETEC (vestibular)',   // banca inspiradora
    enunciado: 'Qual alternativa usa corretamente o present perfect?', // pergunta
    alternativas: [                     // opções
      'I have visited Paris in 2020.',
      'I have visited Paris before.',
      'I have went to Paris.',
      'She have been to Paris.',
      'They has visited Paris.'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O present perfect ("I have visited") indica experiência de vida sem data definida — com data marcada ("in 2020") usa o simple past ("I visited"). "have went" é erro (deve ser "have been/gone"); "she have" e "they has" quebram a concordância.', // explicação
    dica: 'Regra de bolso da Fatec: data definida? Simple past. Sem data ("ever", "never", "before", "already", "yet")? Present perfect. O "in 2020" na alternativa A é a isca clássica.', // pegadinha
    video: 'present perfect e simple past inglês para vestibular' // busca no YouTube
  },
  {
    id: 'e03',                          // identificador único
    materia: 'Inglês',                  // matéria
    tema: 'Verbos modais',              // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'Na frase "You must wear a seat belt", o modal "must" expressa:', // pergunta
    alternativas: [                     // opções
      'Sugestão',
      'Obrigação',
      'Permissão',
      'Possibilidade',
      'Capacidade'
    ],
    correta: 1,                         // índice da certa
    explicacao: '"Must" expressa obrigação forte (você é obrigado). "Should" é conselho; "may/might" é permissão ou possibilidade; "can" é capacidade. Cinto de segurança é lei — obrigação.', // explicação
    dica: 'Par favorito do ENEM: must (obrigação forte) x have to (obrigação externa, regra) x should (conselho). E must not = proibido; do not have to = não é obrigatório (são opostos diferentes!).', // pegadinha
    video: 'verbos modais inglês must have to should para vestibular' // busca no YouTube
  },
  {
    id: 'e04',                          // identificador único
    materia: 'Inglês',                  // matéria
    tema: 'Compreensão de texto',       // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Coperve (UFSC)',            // banca inspiradora
    enunciado: 'Leia: "The flight was cancelled due to the heavy rain." A frase informa que:', // pergunta
    alternativas: [                     // opções
      'O voo foi cancelado por causa da chuva forte',
      'O voo atrasou por causa do vento',
      'A chuva atrapalhou o aeroporto inteiro',
      'O voo decolou mesmo com a tempestade',
      'A viagem foi remarcada para o dia seguinte'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'Vocabulário-chave: cancelled = cancelado; due to = por causa de; heavy rain = chuva forte. Alternativas com "atrasou" (delayed), "vento" (wind) e "remarcada" (rescheduled) trocam as palavras-chave.', // explicação
    dica: 'Em leitura de inglês, a banca troca VOCÁBULO-CHAVE de função: cancelled ≠ delayed ≠ rescheduled. Sublinhe os verbos antes de marcar.', // pegadinha
    video: 'inglês interpretação de texto vocabulário para vestibular' // busca no YouTube
  },

  /* ===================== ESPANHOL (matéria nova — vestibulares) ===================== */
  {
    id: 's01',                          // identificador único
    materia: 'Espanhol',                // matéria
    tema: 'Por x para',                 // assunto
    nivel: 'dificil',                   // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Comvest (Unicamp)',         // banca inspiradora
    enunciado: 'Qual frase em espanhol usa corretamente "por" e "para"?', // pergunta
    alternativas: [                     // opções
      'Este regalo es por ti, compré para ti.',
      'Este regalo es para ti; lo compré por cincuenta pesos.',
      'Trabajo por mi familia mañana.',
      'Lo hice para la telefonía.',
      'Gracias para tu ayuda.'
    ],
    correta: 1,                         // índice da certa
    explicacao: '"Para" indica destino/finalidade (regalo para ti = para você); "por" indica preço, causa, meio ou troca (compré por cincuenta = paguei cinquenta). "Gracias por" é a forma certa (gracias para é erro comum).', // explicação
    dica: 'Macete do vestibular: PARA = destino/prazo/finalidade; POR = causa/preço/troca/meio/duração. "Gracias por" (causa) e "trabaja para" (empregador) são os exemplos que as bancas mais cobram.', // pegadinha
    video: 'por e para espanhol diferença para vestibular' // busca no YouTube
  },
  {
    id: 's02',                          // identificador único
    materia: 'Espanhol',                // matéria
    tema: 'Ser x estar',                // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'Em espanhol, a frase "María está cansada" usa "estar" (e não "ser") porque:', // pergunta
    alternativas: [                     // opções
      'Ser é para coisas permanentes e estar, para estados temporários',
      'Estar é sempre errado com cansaço',
      'Ser é só para o passado',
      'Estar é só para lugares',
      'Não há diferença'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'SER marca características permanentes/essenciais (ser brasileiro, ser alto); ESTAR marca estados e condições temporárias (estar cansado, estar doente, estar em casa). "Está cansada" = está num estado temporário.', // explicação
    dica: 'A banca usa o caso que muda de sentido: "es aburrido" (ele é chato, permanente) x "está aburrido" (ele está entediado, temporário). Ser/estar podem trocar o significado do adjetivo.', // pegadinha
    video: 'ser y estar español diferencia para vestibular' // busca no YouTube
  },
  {
    id: 's03',                          // identificador único
    materia: 'Espanhol',                // matéria
    tema: 'Falsos cognatos',            // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'A palavra espanhola "embarazada" significa:', // pergunta
    alternativas: [                     // opções
      'Embaraçada (enrolada)',
      'Envergonhada',
      'Grávida',
      'Confusa',
      'Doente'
    ],
    correta: 2,                         // índice da certa
    explicacao: 'Embarazada = GRÁVIDA (não embaraçada!). Para "envergonhada", o espanhol usa "avergonzada". É o falso cognato mais famoso do espanhol — e o ENEM adora cobrá-lo.', // explicação
    dica: 'Falsos cognatos espanhóis clássicos: embarazada = grávida; largo = comprido (não largo); oficina = escritório; exquisito = delicioso (não esquisito); sopa = sopa. ⚠️ "Rato" em espanhol é "momento" e não o ratinho (ratón).', // pegadinha
    video: 'falsos cognatos espanhol embarazada largo para vestibular' // busca no YouTube
  },
  {
    id: 's04',                          // identificador único
    materia: 'Espanhol',                // matéria
    tema: 'Hay, ahí, ¡ay!',             // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Univesp (vestibular)',      // banca inspiradora
    enunciado: 'Complete corretamente: "___ una farmacia cerca, está por ___ y, ___, cerró temprano!"', // pergunta
    alternativas: [                     // opções
      'Ahí, hay, ¡ay!',
      'Hay, ahí, ¡ay!',
      '¡Ay!, hay, ahí',
      'Hay, ¡ay!, ahí',
      'Ahí, ¡ay!, hay'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'HAY = há/existe (de haber); AHÍ = ali/lá (lugar); ¡AY! = exclamação de dor ou surpresa. "HAY una farmacia" (existe), "está por AHÍ" (por lá), "¡AY!, cerró" (exclamação).', // explicação
    dica: 'Trio homófono que toda prova de espanhol cobra: HAY (verbo), AHÍ (lugar), ¡AY! (exclamação). Mesmo som, funções totalmente diferentes — e a banca embaralha de propósito.', // pegadinha
    video: 'hay ahí ay español diferencia para vestibular' // busca no YouTube
  },

  /* ===================== ARTES (matéria nova — vestibulares) ===================== */
  {
    id: 'ar01',                         // identificador único
    materia: 'Artes',                   // matéria
    tema: 'Cubismo',                    // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'O Cubismo, vanguarda artística de início do século XX, caracteriza-se por:', // pergunta
    alternativas: [                     // opções
      'Pintar o movimento e a velocidade das máquinas',
      'Fragmentar objetos em formas geométricas e mostrar vários pontos de vista ao mesmo tempo',
      'Representar sonhos e o inconsciente',
      'Copiar a natureza com realismo absoluto',
      'Usar apenas cores primárias'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O Cubismo (Picasso e Braque, ~1907) quebra o objeto em planos geométricos e junta várias visões na mesma tela — "Les Demoiselles d\'Avignon" é o marco. Velocidade = Futurismo; sonhos = Surrealismo.', // explicação
    dica: 'Vanguardas que o ENEM embaralha: Cubismo (geometria/fragmentação), Futurismo (movimento/velocidade), Surrealismo (sonho/inconsciente), Expressionismo (emoção/distorção). Cada uma tem uma palavra-chave.', // pegadinha
    video: 'cubismo picasso vanguardas artísticas resumo vestibular' // busca no YouTube
  },
  {
    id: 'ar02',                         // identificador único
    materia: 'Artes',                   // matéria
    tema: 'Antropofagia — Tarsila',     // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Unicamp (Comvest)',         // banca inspiradora
    enunciado: 'O Manifesto Antropofágico (1928) e a tela "Abaporu" (Tarsila do Amaral) defendiam:', // pergunta
    alternativas: [                     // opções
      'A rejeição total de qualquer influência estrangeira',
      'Devorar a cultura estrangeira e a nacional para criar uma arte genuinamente brasileira',
      'A arte sem assunto e só geométrica',
      'A imitação fiel da Renascença',
      'A pintura religiosa colonial'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A Antropofagia (Oswald de Andrade + Tarsila) usava a metáfora do "comer": digerir a cultura estrangeira e a indígena para criar algo genuinamente brasileiro — não copiar, mas transformar. "Abaporu" (o homem que come gente) é o ícone.', // explicação
    dica: 'A Unicamp cobra o PAR: Manifesto Antropofágico (texto de Oswald, 1928) + Abaporu (tela de Tarsila, 1928). Antropofagia ≠ xenofobia — é deglutição, não rejeição do estrangeiro.', // pegadinha
    video: 'antropofagia abaporu tarsila do amaral oswald resumo' // busca no YouTube
  },
  {
    id: 'ar03',                         // identificador único
    materia: 'Artes',                   // matéria
    tema: 'Aleijadinho — barroco mineiro', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Fuvest / Unicamp (vestibular)', // banca inspiradora
    enunciado: 'Aleijadinho (Antônio Francisco Lisboa), mestre do barroco mineiro, é famoso por:', // pergunta
    alternativas: [                     // opções
      'As telas da Semana de Arte Moderna',
      'As esculturas em pedra-sabão dos profetas, no santuário de Congonhas',
      'O projeto urbano de Brasília',
      'A pintura abstrata geométrica',
      'As xilogravuras nordestinas'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Aleijadinho esculpiu os 12 Profetas em pedra-sabão no santuário do Bom Jesus de Matosinhos (Congonhas, MG) — obra-prima do barroco colonial brasileiro. Apesar da doença que deformava seu corpo, esculpiu até o fim da vida.', // explicação
    dica: 'A Fuvest liga Aleijadinho ao ciclo do ouro de Minas e à pedra-sabão. Não confunda com Anita Malfatti e Tarsila (modernistas do século XX) nem com Oscar Niemeyer (arquiteto de Brasília).', // pegadinha
    video: 'aleijadinho profetas congonhas barroco brasileiro resumo' // busca no YouTube
  },
  {
    id: 'ar04',                         // identificador único
    materia: 'Artes',                   // matéria
    tema: 'Elementos da linguagem visual', // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'São elementos básicos da linguagem visual:', // pergunta
    alternativas: [                     // opções
      'Linha, cor, forma, textura e volume',
      'Ritmo, rima e métrica',
      'Melodia, harmonia e timbre',
      'Tema, enredo e narrador',
      'Proposição e conclusão'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'Os elementos da linguagem visual são linha, ponto, cor, forma, textura, luz/sombra e volume. Ritmo/melodia são da música; tema/enredo são da literatura; proposição é da lógica.', // explicação
    dica: 'O ENEM testa o básico: arte visual usa cor, linha, forma — o resto vem emprestado de outras artes como isca. Se a alternativa tem "rima" ou "melodia", não é visual.', // pegadinha
    video: 'elementos da linguagem visual artes para vestibular' // busca no YouTube
  },

  /* ===================== EDUCAÇÃO FÍSICA (matéria nova — vestibulares e cargos PM) ===================== */
  {
    id: 'ef01',                         // identificador único
    materia: 'Educação Física',         // matéria
    tema: 'Exercício aeróbio x anaeróbio', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'A diferença entre exercício aeróbio e anaeróbio está em:', // pergunta
    alternativas: [                     // opções
      'Aeróbio usa oxigênio para produzir energia em esforço prolongado; anaeróbio produz energia rápida sem oxigênio em esforço curto e intenso',
      'Aeróbio é só natação; anaeróbio é só musculação',
      'Aeróbio cansa mais que anaeróbio',
      'Anaeróbio é sempre seguro para cardíacos',
      'Não existe diferença fisiológica'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'Aeróbio = longo e moderado com oxigênio (corrida leve, ciclismo). Anaeróbio = curto e intenso sem depender de oxigênio (sprint, musculação pesada) — gera ácido lático. Corredor de maratona = aeróbio; velocista = anaeróbio.', // explicação
    dica: 'O ENEM contextualiza: quem corre maratona desenvolve fibras lentas (aeróbias); quem faz sprint, fibras rápidas (anaeróbias). "Musculação é anaeróbica" e "jogar futebol é misto" são as pegadinhas de exemplo.', // pegadinha
    video: 'exercício aeróbio e anaeróbio diferença para vestibular' // busca no YouTube
  },
  {
    id: 'ef02',                         // identificador único
    materia: 'Educação Física',         // matéria
    tema: 'Aptidão física',             // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Instituto AOCP',            // banca inspiradora
    enunciado: 'São componentes da aptidão física relacionada à saúde:', // pergunta
    alternativas: [                     // opções
      'Força, resistência cardiorrespiratória, flexibilidade e composição corporal',
      'Velocidade e agilidade apenas',
      'Somente força muscular',
      'Coordenação e equilíbrio exclusivamente',
      'Técnica esportiva e refino do gesto'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'A aptidão física "de saúde" é composta por 4 pilares: força muscular, resistência cardiorrespiratória (aeróbia), flexibilidade e composição corporal. Velocidade, agilidade e equilíbrio são da aptidão ESPORTIVA (desempenho), não da saúde.', // explicação
    dica: 'A AOCP troca os dois grupos: aptidão de SAÚDE (força, resistência, flexibilidade, composição corporal) x aptidão de DESEMPENHO (velocidade, agilidade, coordenação, equilíbrio, potência). Guarda os 4 da saúde.', // pegadinha
    video: 'componentes da aptidão física saúde desempenho concurso' // busca no YouTube
  },
  {
    id: 'ef03',                         // identificador único
    materia: 'Educação Física',         // matéria
    tema: 'OMS — atividade física',     // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'Segundo a OMS, a recomendação mínima de atividade física para adultos é de:', // pergunta
    alternativas: [                     // opções
      '30 minutos por semana',
      '150 minutos de atividade moderada por semana',
      '60 minutos diários de alta intensidade',
      '10 minutos por dia',
      '300 minutos por dia'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A OMS recomenda 150 a 300 minutos semanais de atividade aeróbia moderada (ou 75-150 de vigorosa) para adultos — o equivalente a ~30 min por dia útil. Crianças e adolescentes: ~60 min diários.', // explicação
    dica: 'Números OMS para guardar: adulto = 150-300 min moderada SEMANA (não dia); criança/adolescente = ~60 min/dia; sedentarismo é fator de risco para doenças crônicas — tema recorrente no ENEM.', // pegadinha
    video: 'oms recomendação atividade física semanal saúde' // busca no YouTube
  },
  {
    id: 'ef04',                         // identificador único
    materia: 'Educação Física',         // matéria
    tema: 'Olimpíadas — origem',        // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Univesp (vestibular)',      // banca inspiradora
    enunciado: 'Os Jogos Olímpicos nasceram:', // pergunta
    alternativas: [                     // opções
      'Na Roma imperial, como espetáculo de gladiadores',
      'Na Grécia antiga, em Olímpia, como festival religioso e esportivo em honra a Zeus',
      'No Egito dos faraós',
      'Na Inglaterra vitoriana',
      'No Brasil colonial'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Os Jogos Olímpicos nasceram na antiga Olímpia (Grécia) — tradicionalmente em 776 a.C. — como festival religioso e atlético em homenagem a Zeus. A era moderna começou em 1896, com Pierre de Coubertin.', // explicação
    dica: 'Datas: Grécia antiga (776 a.C., Olímpia) × era moderna (1896, Atenas — Coubertin). A banca troca o festival religioso grego com os jogos romanos (gladiadores = luta mortal, não esporte).', // pegadinha
    video: 'origem dos jogos olímpicos grécia antiga resumo' // busca no YouTube
  },

  /* ===================== FISIOLOGIA (matéria nova — vestibulares e saúde) ===================== */
  {
    id: 'fs01',                         // identificador único
    materia: 'Fisiologia',              // matéria
    tema: 'Neurônio e sinapse',         // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'Na sinapse entre dois neurônios, a informação passa de um para o outro principalmente por:', // pergunta
    alternativas: [                     // opções
      'Contato elétrico direto entre as células',
      'Neurotransmissores liberados na fenda sináptica',
      'Troca de sangue entre os neurônios',
      'Vibração óssea do crânio',
      'Impulso que pula pelo ar'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Na sinapse química (a mais comum), o impulso elétrico do primeiro neurônio libera neurotransmissores (dopamina, serotonina, acetilcolina...) na fenda sináptica, que ativam o neurônio seguinte.', // explicação
    dica: 'A banca confunde sinapse com "junção dos corpos": a fenda sináptica NÃO é contato físico — é o espaço onde os neurotransmissores viajam. Dopamina e serotonina são exemplos famosos.', // pegadinha
    video: 'neurônio sinapse neurotransmissores resumo vestibular' // busca no YouTube
  },
  {
    id: 'fs02',                         // identificador único
    materia: 'Fisiologia',              // matéria
    tema: 'Homeostase',                 // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Comvest (Unicamp)',         // banca inspiradora
    enunciado: 'A homeostase é a capacidade do organismo de:', // pergunta
    alternativas: [                     // opções
      'Produzir anticorpos',
      'Manter o meio interno em equilíbrio (temperatura, glicose, pH) apesar das mudanças externas',
      'Reproduzir-se',
      'Digerir alimentos',
      'Realizar fotossíntese'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Homeostase = manter o meio interno estável: temperatura (~37°C), glicose, pH do sangue, pressão, água. Quando faz calor, suamos; quando a glicose sobe, a insulina age — tudo para manter o equilíbrio interno.', // explicação
    dica: 'A Unicamp amarra homeostase a exemplos: suor quando faz calor, insulina quando a glicose sobe, respiração acelerada quando o CO2 acumula. Homeostase é SEMPRE equilíbrio interno.', // pegadinha
    video: 'homeostase equilíbrio interno fisiologia resumo' // busca no YouTube
  },
  {
    id: 'fs03',                         // identificador único
    materia: 'Fisiologia',              // matéria
    tema: 'Circulação dupla',           // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'Na circulação humana, a "pequena circulação" corresponde ao trajeto:', // pergunta
    alternativas: [                     // opções
      'Coração → corpo → coração',
      'Coração → pulmão → coração',
      'Pulmão → corpo → pulmão',
      'Cérebro → coração → cérebro',
      'Fígado → rim → coração'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Pequena circulação (pulmonar): ventrículo direito → artéria pulmonar → pulmão (hematose) → veia pulmonar → átrio esquerdo. Grande circulação (sistêmica): ventrículo esquerdo → aorta → corpo → veias cavas → átrio direito.', // explicação
    dica: 'A Vunesp inverte os lados: lado DIREITO do coração = sangue venoso (vai ao pulmão); lado ESQUERDO = sangue arterial (vai ao corpo). Decore: direito para o pulmão, esquerdo para o corpo.', // pegadinha
    video: 'pequena e grande circulação coração pulmão resumo' // busca no YouTube
  },
  {
    id: 'fs04',                         // identificador único
    materia: 'Fisiologia',              // matéria
    tema: 'Contração muscular',         // assunto
    nivel: 'dificil',                   // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Fuvest / Unicamp (vestibular)', // banca inspiradora
    enunciado: 'A contração do músculo esquelético acontece quando:', // pergunta
    alternativas: [                     // opções
      'Os neurônios motores mandam impulso elétrico que libera cálcio e faz actina e miosina deslizarem uma sobre a outra',
      'O músculo aumenta de volume por força própria',
      'O osso se contrai e puxa o músculo',
      'A pele aperta o músculo',
      'O sangue enche o músculo de oxigênio'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'O impulso nervoso chega ao músculo, libera cálcio, e as proteínas actina e miosina deslizam uma sobre a outra encurtando o sarcômero — mecanismo que gasta ATP (energia).', // explicação
    dica: 'Ponto avançado da Fuvest: o cálcio é o "gatilho" da contração (ele libera os sítios da actina). O músculo não "gera" movimento sozinho — depende de neurônio motor + cálcio + ATP.', // pegadinha
    video: 'contração muscular actina miosina cálcio resumo' // busca no YouTube
  },

  /* ===================== FILOSOFIA (matéria nova — vestibulares) ===================== */
  {
    id: 'fl01',                         // identificador único
    materia: 'Filosofia',               // matéria
    tema: 'Nascimento da filosofia',    // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Unicamp (Comvest)',         // banca inspiradora
    enunciado: 'A filosofia nasceu na Grécia antiga (séc. VI a.C.) como a passagem:', // pergunta
    alternativas: [                     // opções
      'Do logos ao mito',
      'Do mito ao logos — da explicação sobrenatural para a explicação racional',
      'Da fé à magia',
      'Do império à república',
      'Da escrita à oralidade'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A filosofia nasce quando os gregos trocam a explicação mítica (deuses fazem chover) pela explicação racional — o logos: observação, argumentação e busca de causas naturais (arché) para os fenômenos.', // explicação
    dica: 'A ordem é SEMPRE mito → logos, nunca o contrário. Os pré-socráticos (Tales, Heráclito) buscavam a arché (princípio natural das coisas: água, fogo, ar...). Platão e Aristóteles vêm depois.', // pegadinha
    video: 'nascimento da filosofia mito ao logos grécia resumo' // busca no YouTube
  },
  {
    id: 'fl02',                         // identificador único
    materia: 'Filosofia',               // matéria
    tema: 'Sócrates — maiêutica',       // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'O método socrático da maiêutica ("parto das ideias") consiste em:', // pergunta
    alternativas: [                     // opções
      'Dar a resposta pronta ao aluno',
      'Fazer perguntas que levam o interlocutor a descobrir a verdade por si mesmo',
      'Decorar os textos antigos',
      'Debater sempre a favor da maioria',
      'Escrever tratados de matemática'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A maiêutica de Sócrates (o "parteira" de ideias, filho de parteira): por perguntas sucessivas, o interlocutor "dá à luz" o conhecimento que já tinha dentro de si — como a parteira ajuda o bebê a nascer.', // explicação
    dica: 'Sócrates não deixou textos — quem escreveu sobre ele foi Platão. "Conhece-te a ti mesmo" + "só sei que nada sei" são dele. A banca confunde ironia (desmontar a falsa sabedoria) com maiêutica (fazer nascer a verdade).', // pegadinha
    video: 'sócrates maiêutica ironia conhece-te a ti mesmo' // busca no YouTube
  },
  {
    id: 'fl03',                         // identificador único
    materia: 'Filosofia',               // matéria
    tema: 'Kant — imperativo categórico', // assunto
    nivel: 'dificil',                   // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Fuvest / Unicamp (vestibular)', // banca inspiradora
    enunciado: 'O imperativo categórico de Kant afirma que devemos agir de modo que:', // pergunta
    alternativas: [                     // opções
      'O resultado da ação seja sempre o mais prazeroso',
      'A nossa ação possa valer como lei universal para todos',
      'Obedeçamos às ordens sem questionar',
      'Sigamos sempre o costume do nosso povo',
      'Busquemos a felicidade acima de tudo'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Para Kant, a moralidade está no DEVER, não nas consequências: aja de modo que a máxima da sua ação possa ser universalizada — se a regra que você segue pudesse ser lei para todos, é moral. Não minta, porque a mentira universal destruiria a verdade.', // explicação
    dica: 'A Fuvest opõe as éticas: KANT = dever/intenção (universalidade); UTILITARISTAS = consequência (maior felicidade para o maior número). "É pelas consequências" nunca é Kant.', // pegadinha
    video: 'imperativo categórico kant ética do dever resumo' // busca no YouTube
  },
  {
    id: 'fl04',                         // identificador único
    materia: 'Filosofia',               // matéria
    tema: 'Mito da caverna',            // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'No "Mito da caverna" de Platão, as sombras projetadas na parede representam:', // pergunta
    alternativas: [                     // opções
      'O conhecimento verdadeiro',
      'A aparência — a realidade ilusória que os prisioneiros tomam por verdade',
      'A virtude dos governantes',
      'A felicidade dos justos',
      'Os deuses do Olimpo'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Os prisioneiros veem só as sombras na parede e acham que são a realidade — é a alegoria de como confundimos aparência com verdade. Sair da caverna = ascensão ao conhecimento; o sol = o bem e a verdade.', // explicação
    dica: 'Leitura política do ENEM: o mito critica quem aceita a opinião sem questionar. As sombras = senso comum/aparência; a subida dolorosa = educação/filosofia. Quem volta a contar a verdade é desacreditado.', // pegadinha
    video: 'mito da caverna platão alegoria resumo vestibular' // busca no YouTube
  },

  /* ===================== SOCIOLOGIA (matéria nova — vestibulares) ===================== */
  {
    id: 'so01',                         // identificador único
    materia: 'Sociologia',              // matéria
    tema: 'Fato social — Durkheim',     // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'Para Durkheim, "fato social" é aquilo que:', // pergunta
    alternativas: [                     // opções
      'Depende da vontade individual de cada pessoa',
      'Existe fora do indivíduo, é geral e exerce coerção (pressão) sobre ele',
      'Só acontece nas tribos antigas',
      'É fruto da biologia humana',
      'É sempre escolha consciente'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O fato social de Durkheim tem 3 marcas: é EXTERIOR (existe independente de mim), é GERAL (está na sociedade toda) e exerce COERÇÃO (me obriga a seguir — língua, lei, costumes). Você não escolhe falar português ou seguir leis.', // explicação
    dica: 'Marca tripla do ENEM: exterior + geral + coercitivo. Se a alternativa diz "escolha individual" ou "da consciência de cada um", NÃO é fato social — é opção pessoal.', // pegadinha
    video: 'fato social durkheim exterior geral coercitivo resumo' // busca no YouTube
  },
  {
    id: 'so02',                         // identificador único
    materia: 'Sociologia',              // matéria
    tema: 'Alienação do trabalho — Marx', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Unicamp (Comvest)',         // banca inspiradora
    enunciado: 'Para Marx, o trabalhador é "alienado" no capitalismo porque:', // pergunta
    alternativas: [                     // opções
      'Trabalha pouco e ganha muito',
      'Se separa do produto do seu trabalho, que não lhe pertence e retorna como mais-valia para o dono',
      'Não sabe trabalhar em equipe',
      'Prefere o ócio ao trabalho',
      'Vive isolado das máquinas'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A alienação marxista: o operário produz algo que não é seu — o produto vai para o dono dos meios de produção, e o lucro (mais-valia) vem do trabalho não pago. O trabalhador perde o controle sobre o que faz e sobre o processo.', // explicação
    dica: 'Marx: alienação = perder o produto e o processo do trabalho; mais-valia = a diferença entre o que o trabalhador produz e o que recebe. A banca confunde alienação (sociologia) com doença mental — não é.', // pegadinha
    video: 'alienação do trabalho marx mais-valia resumo vestibular' // busca no YouTube
  },
  {
    id: 'so03',                         // identificador único
    materia: 'Sociologia',              // matéria
    tema: 'Indústria cultural',         // assunto
    nivel: 'dificil',                   // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'A "indústria cultural" (Adorno e Horkheimer, Escola de Frankfurt) critica:', // pergunta
    alternativas: [                     // opções
      'A arte popular produzida por comunidades',
      'A produção da cultura como mercadoria em massa, que padroniza o gosto e distrai o público do pensamento crítico',
      'A falta de museus nas cidades',
      'O excesso de criatividade na publicidade',
      'A gratuidade dos meios de comunicação'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Adorno e Horkheimer viam o cinema, a TV e a música industrial como mercadoria: a cultura vira produto padronizado, feita para entreter e entorpecer — não para formar. A massa consome passivamente e deixa de pensar criticamente.', // explicação
    dica: 'Escola de Frankfurt = teoria crítica. Indústria cultural ≠ "indústria de cultura" inocente: a palavra denuncia que a arte passou a obedecer à lógica do mercado (lucro), não da criação livre.', // pegadinha
    video: 'indústria cultural adorno horkheimer escola de frankfurt' // busca no YouTube
  },
  {
    id: 'so04',                         // identificador único
    materia: 'Sociologia',              // matéria
    tema: 'Etnocentrismo',              // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'Julgar a cultura de outro povo pelos valores da própria cultura é atitude chamada:', // pergunta
    alternativas: [                     // opções
      'Relativismo cultural',
      'Etnocentrismo',
      'Multiculturalismo',
      'Universalismo',
      'Alteridade'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Etnocentrismo = ver o mundo a partir da SUA cultura como se fosse a única certa — julgar o outro como "errado" ou "primitivo". O oposto é o relativismo cultural: entender cada cultura em seus próprios termos.', // explicação
    dica: 'Par do ENEM: etnocentrismo (minha cultura é a medida) × relativismo cultural (cada cultura se entende por si). O relativismo NÃO diz que tudo é certo — diz que julgamos pelo contexto do outro.', // pegadinha
    video: 'etnocentrismo e relativismo cultural sociologia resumo' // busca no YouTube
  },

  /* ===================== BIOLOGIA (matéria nova — vestibulares) ===================== */
  {
    id: 'b01',                          // identificador único
    materia: 'Biologia',                // matéria
    tema: 'Célula procariótica x eucariótica', // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Univesp (vestibular)',      // banca inspiradora
    enunciado: 'A principal diferença entre célula procariótica e eucariótica é:', // pergunta
    alternativas: [                     // opções
      'A procariótica tem parede celular e a eucariótica não',
      'A eucariótica tem núcleo definido por membrana; a procariótica tem o material genético solto no citoplasma',
      'A procariótica é maior',
      'A eucariótica não tem ribossomos',
      'A procariótica tem mitocôndrias'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Eucariótica = núcleo envolto por membrana (eu = verdadeiro, karyon = núcleo). Procariótica = sem núcleo delimitado, DNA solto no citoplasma — bactérias e arqueias. Plantas, animais e fungos são eucariontes.', // explicação
    dica: 'A banca troca as peças: procarióticas são SIMPLES e pequenas (bactéria); eucarióticas são complexas e maiores (nós). E atenção: ambas têm ribossomo — só a eucariótica tem organelas membranosas.', // pegadinha
    video: 'célula procariótica e eucariótica diferença vestibular' // busca no YouTube
  },
  {
    id: 'b02',                          // identificador único
    materia: 'Biologia',                // matéria
    tema: 'Fotossíntese',               // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'Na fotossíntese, as plantas usam a luz solar para transformar:', // pergunta
    alternativas: [                     // opções
      'Oxigênio e glicose em gás carbônico e água',
      'Gás carbônico e água em glicose e oxigênio',
      'Nitrogênio em proteínas',
      'Glicose em luz solar',
      'Água em energia térmica'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Fotossíntese: CO2 + água + luz → glicose + O2. A clorofila captura a luz no cloroplasto; a planta fabrica seu alimento (glicose) e libera o oxigênio que respiramos. A respiração celular é o caminho inverso.', // explicação
    dica: 'O ENEM cruza fotossíntese com respiração: fotossíntese PRODUZ glicose e O2 (de dia, no cloroplasto); respiração celular CONSOME glicose e O2 produzindo ATP (todo dia, na mitocôndria). Plantas fazem as duas.', // pegadinha
    video: 'fotossíntese clorofila equação resumo vestibular' // busca no YouTube
  },
  {
    id: 'b03',                          // identificador único
    materia: 'Biologia',                // matéria
    tema: 'Genética — Lei de Mendel',   // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Fuvest / Unicamp (vestibular)', // banca inspiradora
    enunciado: 'No cruzamento de dois heterozigotos Aa × Aa (A = dominante, a = recessivo), a proporção fenotípica esperada na descendência é:', // pergunta
    alternativas: [                     // opções
      '1:1',
      '3:1 (três dominantes para um recessivo)',
      '9:3:3:1',
      '2:1',
      'Todos iguais'
    ],
    correta: 1,                         // índice da certa
    passos: [                           // passo a passo
      'Aa × Aa gera os genótipos: AA, Aa, aA e aa (quadro de Punnett).',
      'AA, Aa e aA têm fenótipo DOMINANTE (A domina): 3 em 4.',
      'aa tem fenótipo recessivo: 1 em 4.',
      'Proporção fenotípica: 3 dominantes : 1 recessivo (3:1).'
    ],
    explicacao: 'Cruzando heterozigotos, o quadro de Punnett dá 1 AA : 2 Aa : 1 aa — fenótipos 3:1 (a recessiva só aparece no "aa"). A proporção 9:3:3:1 é de DOIS genes em heterozigose (AaBb × AaBb).', // explicação
    dica: 'A Fuvest confunde os quadros: Aa×Aa (um gene) = 3:1 fenotípico / 1:2:1 genotípico; AaBb×AaBb (dois genes) = 9:3:3:1. Conte os genes da questão antes de marcar.', // pegadinha
    video: 'primeira lei de mendel quadro de punnett proporção 3:1' // busca no YouTube
  },
  {
    id: 'b04',                          // identificador único
    materia: 'Biologia',                // matéria
    tema: 'Cadeia alimentar',           // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'Numa cadeia alimentar, o fluxo de energia é:', // pergunta
    alternativas: [                     // opções
      'Bidirecional e reciclável',
      'Unidirecional — do produtor para os consumidores, dissipando-se como calor a cada nível',
      'Circular entre os decompositores',
      'Sempre crescente de um nível para o outro',
      'Fixo, sem perdas'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A energia flui de um nível para o outro SEM voltar: produtor (planta) → herbívoro → carnívoro → decompositores. A cada passo, ~90% se perde como calor — por isso as cadeias têm poucos elos e o topo é escasso.', // explicação
    dica: 'O ENEM cobra a "pirâmide": energia diminui a cada nível (~10% passa adiante), então o topo da cadeia (predador) tem menos indivíduos. E os decompositores reciclam MATÉRIA, não energia.', // pegadinha
    video: 'cadeia alimentar fluxo de energia pirâmide resumo' // busca no YouTube
  },

  /* ===================== ECONOMIA (matéria nova — Bacen, bancos e vestibulares) ===================== */
  {
    id: 'ec01',                         // identificador único
    materia: 'Economia',                // matéria
    tema: 'Oferta e demanda',           // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'Se a demanda por um produto aumenta e a oferta se mantém igual, a tendência do preço é:', // pergunta
    alternativas: [                     // opções
      'Cair',
      'Subir',
      'Ficar estável',
      'Zerar',
      'Depender do imposto'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Lei da oferta e da demanda: mais gente querendo a mesma quantidade empurra o preço para cima (escassez relativa). Demanda baixa com oferta igual tende a baixar o preço.', // explicação
    dica: 'As quatro combinações da FCC: demanda sobe + oferta igual → preço sobe; demanda cai → preço cai; oferta sobe → preço cai; oferta cai → preço sobe. Demanda e preço andam na MESMA direção; oferta e preço, em direções opostas.', // pegadinha
    video: 'lei da oferta e demanda economia básica resumo' // busca no YouTube
  },
  {
    id: 'ec02',                         // identificador único
    materia: 'Economia',                // matéria
    tema: 'Inflação e deflação',        // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'A inflação é definida como:', // pergunta
    alternativas: [                     // opções
      'A queda generalizada e contínua dos preços',
      'O aumento generalizado e contínuo dos preços, com perda do poder de compra da moeda',
      'A alta do salário mínimo',
      'A emissão de moeda nova',
      'O aumento do desemprego'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Inflação = aumento GENERALIZADO e CONTÍNUO de preços — não é um produto caro, é tudo subindo de forma persistente, e a moeda valendo menos (você compra menos com o mesmo dinheiro). Deflação é o contrário (preços caindo de forma geral).', // explicação
    dica: 'Termos da CESPE: inflação (preços sobem), deflação (preços caem), desinflação (inflação positiva diminuindo), estagflação (inflação + desemprego). O detalhe é "generalizado e contínuo" — preço de um bem só não é inflação.', // pegadinha
    video: 'inflação deflação desinflação diferença economia resumo' // busca no YouTube
  },
  {
    id: 'ec03',                         // identificador único
    materia: 'Economia',                // matéria
    tema: 'PIB',                        // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'O Produto Interno Bruto (PIB) mede:', // pergunta
    alternativas: [                     // opções
      'A riqueza total acumulada de um país desde sua fundação',
      'O valor de todos os bens e serviços finais produzidos em um país durante um período',
      'O dinheiro em circulação no país',
      'A dívida total do governo',
      'O total exportado menos o importado'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'PIB = soma dos bens e serviços FINAIS produzidos no território em um período (ano/trimestre). "Interno" = produzido dentro do país; "final" = sem contar etapas intermediárias (evita contar o trigo, a farinha E o pão).', // explicação
    dica: 'A IBFC confunde PIB com PNB: PIB conta o que é produzido NO país (mesmo por estrangeiro); PNB conta o que é produzido POR brasileiros (mesmo fora). E "bens finais" é o que evita a contagem dupla.', // pegadinha
    video: 'o que é pib produto interno bruto resumo concurso' // busca no YouTube
  },
  {
    id: 'ec04',                         // identificador único
    materia: 'Economia',                // matéria
    tema: 'Taxa Selic',                 // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'Quando o Banco Central quer conter a inflação, a política monetária típica é:', // pergunta
    alternativas: [                     // opções
      'Baixar a taxa Selic para estimular o consumo',
      'Subir a taxa Selic, encarecendo o crédito e reduzindo a demanda',
      'Imprimir mais dinheiro',
      'Aumentar o salário mínimo',
      'Congelar o câmbio'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Selic alta = crédito caro → menos consumo e investimento → demanda esfria → preços sobem menos. É o instrumento clássico do Banco Central para segurar a inflação (o efeito colateral é frear a economia).', // explicação
    dica: 'A CESPE inverte a lógica de propósito: Selic SOBE para segurar inflação (esfria a economia); Selic CAI para estimular crescimento (mas pode acender a inflação). Juro alto atrai capital estrangeiro também.', // pegadinha
    video: 'taxa selic e inflação política monetária resumo' // busca no YouTube
  },

  /* ===================== QUÍMICA (matéria nova — vestibulares) ===================== */
  {
    id: 'q01',                          // identificador único
    materia: 'Química',                 // matéria
    tema: 'Átomo e número atômico',     // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Univesp (vestibular)',      // banca inspiradora
    enunciado: 'O número atômico (Z) de um elemento corresponde:', // pergunta
    alternativas: [                     // opções
      'À soma de prótons e nêutrons',
      'Ao número de prótons do núcleo',
      'Ao número de elétrons da última camada',
      'À massa do átomo em gramas',
      'À carga do núcleo'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Z = número de PRÓTONS — é a identidade do elemento (carbono tem Z=6, sempre). A soma prótons+nêutrons é a massa (A). Em átomo neutro, Z também indica o número de elétrons.', // explicação
    dica: 'A banca troca Z com A: Z = prótons (identidade); A = prótons + nêutrons (massa); nêutrons = A − Z. Isótopos = mesmo Z, A diferente (carbono-12 e carbono-14).', // pegadinha
    video: 'número atômico prótons nêutrons massa resumo vestibular' // busca no YouTube
  },
  {
    id: 'q02',                          // identificador único
    materia: 'Química',                 // matéria
    tema: 'Ligações químicas',          // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'A ligação química do cloreto de sódio (NaCl), o sal de cozinha, é do tipo:', // pergunta
    alternativas: [                     // opções
      'Covalente — os átomos compartilham elétrons',
      'Iônica — o metal doa um elétron para o ametal',
      'Metálica — mar de elétrons livres',
      'De hidrogênio — moléculas se atraem',
      'De coordenação — entre proteínas'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Sódio (metal, tende a DOAR) + cloro (ametal, tende a RECEBER): o Na entrega um elétron ao Cl, formando Na+ e Cl− que se atraem — ligação iônica, típica dos sais. Compartilhamento (ametal+ametal) é covalente, como na água.', // explicação
    dica: 'Regra do ENEM: metal + ametal = iônica (transfere elétron); ametal + ametal = covalente (compartilha); metal + metal = metálica. NaCl, CaCO3, MgO são iônicos; H2O, CO2, O2 são covalentes.', // pegadinha
    video: 'ligação iônica covalente metálica diferença vestibular' // busca no YouTube
  },
  {
    id: 'q03',                          // identificador único
    materia: 'Química',                 // matéria
    tema: 'pH — ácidos e bases',        // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Comvest (Unicamp)',         // banca inspiradora
    enunciado: 'Uma solução com pH 3 é:', // pergunta
    alternativas: [                     // opções
      'Básica',
      'Ácida',
      'Neutra',
      'Salina',
      'Indicativa de água destilada'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Escala pH: menor que 7 = ácido; igual a 7 = neutro; maior que 7 = básico. pH 3 é ácido forte (ex.: limão, vinagre). Quanto mais perto de 0, mais ácido; mais perto de 14, mais básico.', // explicação
    dica: 'A Unicamp amarra ao cotidiano: estômago (pH ~2, ácido), água pura (7), sangue (~7,4, levemente básico), sabonete/água sanitária (básicos). Guarda o marco do 7.', // pegadinha
    video: 'ph escala ácidos e bases resumo vestibular' // busca no YouTube
  },
  {
    id: 'q04',                          // identificador único
    materia: 'Química',                 // matéria
    tema: 'Estequiometria',             // assunto
    nivel: 'dificil',                   // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Fuvest / Unicamp (vestibular)', // banca inspiradora
    enunciado: 'Na equação balanceada 2 H₂ + O₂ → 2 H₂O, quantos mols de H₂ são necessários para reagir com 1 mol de O₂?', // pergunta
    alternativas: [                     // opções
      '1 mol',
      '2 mols',
      '0,5 mol',
      '4 mols',
      '3 mols'
    ],
    correta: 1,                         // índice da certa
    passos: [                           // passo a passo
      'Leia os coeficientes da equação balanceada: 2 H₂ para 1 O₂.',
      'A proporção em mols é 2:1.',
      'Para 1 mol de O₂ são necessários 2 mols de H₂.'
    ],
    explicacao: 'Os coeficientes da equação balanceada dão a proporção em mol: 2 H₂ : 1 O₂ : 2 H₂O. Estequiometria é a "regra de três da química" — sempre a proporção dos coeficientes.', // explicação
    dica: 'Erro clássico: ler "2 H₂" como "2 gramas" — coeficiente é MOL, não massa. Se a questão pedir gramas, multiplique pela massa molar (H₂ = 2 g/mol → 2 mols de H₂ = 4 g).', // pegadinha
    video: 'estequiometria proporção em mol regra de três vestibular' // busca no YouTube
  },

  /* ===================== FÍSICA (matéria nova — vestibulares) ===================== */
  {
    id: 'f01',                          // identificador único
    materia: 'Física',                  // matéria
    tema: 'Leis de Newton',             // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'Um ônibus freia bruscamente e os passageiros são jogados para a frente. Isso ilustra:', // pergunta
    alternativas: [                     // opções
      'A segunda lei de Newton (F = m·a)',
      'A primeira lei de Newton — a inércia: o corpo tende a manter o movimento que tinha',
      'A terceira lei de Newton (ação e reação)',
      'A lei da gravitação universal',
      'A conservação da energia'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Inércia (1ª lei): o corpo mantém o estado de movimento se nenhuma força resultante o altera. O ônibus freou, mas os passageiros continuam com a velocidade que tinham — por isso são "empurrados" para a frente.', // explicação
    dica: 'Decore pelas situações do ENEM: frenagem → passageiro vai para frente (inércia); arrancada → corpo vai para trás (inércia). Cinto de segurança existe justamente por causa da 1ª lei.', // pegadinha
    video: 'primeira lei de newton inércia exemplos resumo' // busca no YouTube
  },
  {
    id: 'f02',                          // identificador único
    materia: 'Física',                  // matéria
    tema: 'Energia cinética e potencial', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'FATEC/ETEC (vestibular)',   // banca inspiradora
    enunciado: 'Numa queda livre (sem atrito), a energia mecânica de um corpo:', // pergunta
    alternativas: [                     // opções
      'Aumenta porque a velocidade cresce',
      'Diminui porque a altura diminui',
      'Conserva-se — a energia potencial transforma-se em cinética',
      'Zera no ponto mais baixo',
      'Transforma-se em energia elétrica'
    ],
    correta: 2,                         // índice da certa
    explicacao: 'Sem atrito, a energia mecânica se conserva: o que o corpo perde de potencial (m·g·h, pela altura) ganha de cinética (½m·v², pela velocidade). A energia não aparece nem some — ela muda de forma.', // explicação
    dica: 'A Fatec cobra a conservação em montanha-russa e queda livre: em cima, mais potencial e menos cinética; embaixo, menos potencial e mais cinética. A soma (mecânica) é constante sem atrito.', // pegadinha
    video: 'energia cinética e potencial conservação queda livre' // busca no YouTube
  },
  {
    id: 'f03',                          // identificador único
    materia: 'Física',                  // matéria
    tema: 'Lei de Ohm',                 // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'FATEC/ETEC (vestibular)',   // banca inspiradora
    enunciado: 'Um resistor de 4 Ω é ligado a uma bateria de 12 V. A corrente que atravessa o circuito é de:', // pergunta
    alternativas: [                     // opções
      '48 A',
      '3 A',
      '0,33 A',
      '16 A',
      '8 A'
    ],
    correta: 1,                         // índice da certa
    passos: [                           // passo a passo
      'Lei de Ohm: V = R × i (tensão = resistência × corrente).',
      'Isole a corrente: i = V ÷ R.',
      'i = 12 ÷ 4 = 3 A.'
    ],
    explicacao: 'i = V/R. Com 12 volts e 4 ohms, a corrente é 3 amperes. As alternativas "48" (12×4) e "0,33" (4÷12) são as trocas de operação típicas da banca.', // explicação
    dica: 'Macete do triângulo V-R-i: cobre quem você quer achar e faz a conta com os dois que sobram. Quer i? V÷R. Quer R? V÷i. Quer V? R×i.', // pegadinha
    video: 'lei de ohm v=ri exercício corrente tensão resistência' // busca no YouTube
  },
  {
    id: 'f04',                          // identificador único
    materia: 'Física',                  // matéria
    tema: 'Óptica — reflexão e refração', // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'Um lápis mergulhado num copo com água parece "quebrado" na superfície. Esse fenômeno é chamado de:', // pergunta
    alternativas: [                     // opções
      'Reflexão',
      'Refração',
      'Difração',
      'Interferência',
      'Dispersão'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A luz muda de velocidade ao passar do ar para a água e desvia o caminho — a refração cria a ilusão do lápis "quebrado". A reflexão é a luz voltando (espelho); a difração, a luz contornando obstáculos.', // explicação
    dica: 'Exemplos do ENEM para refração: lápis quebrado na água, piscina que parece mais rasa, miragem no asfalto quente. Espelho e imagem no vidro são reflexão — não misture.', // pegadinha
    video: 'refração da luz lápis na água fenômeno resumo' // busca no YouTube
  },

  /* ===================== GEOGRAFIA — lote extra (g21 a g24) ===================== */
  {
    id: 'g21',                          // identificador único
    materia: 'Geografia',               // matéria
    tema: 'Energias renováveis no Brasil', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'A energia eólica no Brasil cresceu especialmente na região:', // pergunta
    alternativas: [                     // opções
      'Sul, pela proximidade com o oceano',
      'Nordeste, pelos ventos constantes no litoral e no sertão',
      'Norte, pela força dos rios',
      'Centro-Oeste, pelos chapadões',
      'Sudeste, pela densidade industrial'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O Nordeste lidera a eólica brasileira: ventos fortes e constantes (alisios) no litoral e no sertão, terrenos amplos e complementaridade com a seca — os parques enchem justamente quando as hidrelétricas enfrentam falta de água.', // explicação
    dica: 'O ENEM cobra o casamento: eólica (Nordeste) + solar (seca/sol do sertão) como fontes que COMPLEMENTAM a hidrelétrica em estiagem. E a matriz brasileira segue mais limpa que a média mundial por causa das hidrelétricas.', // pegadinha
    video: 'energia eólica nordeste brasil complementaridade resumo' // busca no YouTube
  },
  {
    id: 'g22',                          // identificador único
    materia: 'Geografia',               // matéria
    tema: 'Migrações internacionais',   // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Comvest (Unicamp)',         // banca inspiradora
    enunciado: 'Refugiados e migrantes se distinguem juridicamente porque o refugiado:', // pergunta
    alternativas: [                     // opções
      'Muda de país por vontade econômica',
      'Foge de perseguição, conflito ou violação de direitos e tem proteção legal internacional (status de refugiado)',
      'Trabalha ilegalmente no exterior',
      'Tem dupla cidadania automática',
      'Volta sempre ao país de origem'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O refugiado é quem cruza a fronteira fugindo de perseguição (raça, religião, nacionalidade, opinião política) ou conflito grave — tem status legal e não pode ser devolvido ao perigo (non-refoulement). O migrante comum muda por trabalho/qualidade de vida, sem essa proteção específica.', // explicação
    dica: 'A Unicamp cobra a diferença: refugiado = fuga de perigo (proteção legal); migrante econômico = busca de melhor vida; deslocado interno = fugiu mas não cruzou fronteira. Brasil recebeu muitos venezuelanos como refugiados.', // pegadinha
    video: 'diferença entre refugiado migrante e deslocado resumo' // busca no YouTube
  },
  {
    id: 'g23',                          // identificador único
    materia: 'Geografia',               // matéria
    tema: 'Blocos econômicos — União Europeia', // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'A União Europeia se caracteriza como um bloco econômico que possui:', // pergunta
    alternativas: [                     // opções
      'Apenas livre comércio entre os países membros',
      'Moeda única (euro) adotada pela maioria dos membros e livre circulação de pessoas',
      'Membros na América do Sul',
      'Uma única língua oficial para todos',
      'Exclusão do Reino Unido desde a fundação'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A UE é o bloco mais integrado do mundo: mercado único, livre circulação de pessoas (Espaço Schengen) e moeda comum — o euro, usado pela maioria (não todos). O Reino Unido SAIU do bloco no Brexit (2020), mas esteve dentro por décadas.', // explicação
    dica: 'Comparação que a IBFC adora: Mercosul = união aduaneira (sem moeda comum); UE = união econômica e monetária (euro + Schengen). E Brexit = o Reino Unido SAIU, não "nunca esteve".', // pegadinha
    video: 'união europeia euro schengen brexit resumo geografia' // busca no YouTube
  },
  {
    id: 'g24',                          // identificador único
    materia: 'Geografia',               // matéria
    tema: 'Geotecnologias — GPS e GIS', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'O SIG/GIS (Sistema de Informação Geográfica) difere do GPS porque o SIG:', // pergunta
    alternativas: [                     // opções
      'Localiza a posição por satélite',
      'Organiza, analisa e cruza dados georreferenciados em camadas (mapas temáticos)',
      'Mede a velocidade do vento',
      'Fotografa a superfície por satélite',
      'Calcula rotas de carro'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'GPS diz ONDE você está (coordenadas); o SIG/GIS guarda e analisa O QUE tem ali: cruza camadas de mapas (solo, uso da terra, saneamento, crimes, dengue) para auxiliar decisões de planejamento e gestão pública.', // explicação
    dica: 'O ENEM separa as três tecnologias: GPS = localização; sensoriamento remoto = captura de imagens/dados à distância; SIG/GIS = análise e cruzamento desses dados em camadas. "SIG pensa, GPS localiza, sensoriamento vê".', // pegadinha
    video: 'sig gis gps sensoriamento remoto diferença resumo' // busca no YouTube
  },

  /* ===================== DIREITO PENAL — completando para 16 (d13 a d16) ===================== */
  {
    id: 'd13',                          // identificador único
    materia: 'Direito Penal',           // matéria
    tema: 'Crimes contra a honra',      // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'Atribuir a alguém, falsamente, a prática de crime é o delito de:', // pergunta
    alternativas: [                     // opções
      'Difamação',
      'Injúria',
      'Calúnia',
      'Estelionato',
      'Falsa identidade'
    ],
    correta: 2,                         // índice da certa
    explicacao: 'Calúnia (art. 138) = imputar FALSAMENTE crime a alguém — a honra é atingida pela invenção. Difamação (139) = fato desonroso (não necessariamente crime); injúria (140) = ofensa à dignidade no rosto da pessoa. O trio é cobrança padrão de polícia.', // explicação
    dica: 'O triângulo da honra: calúnia = inventa crime; difamação = fala mal de fato (não crime); injúria = ofende na cara. Lembre: CA-lúnia = Crime Atribuído.', // pegadinha
    video: 'calúnia difamação injúria diferenças direito penal resumo' // busca no YouTube
  },
  {
    id: 'd14',                          // identificador único
    materia: 'Direito Penal',           // matéria
    tema: 'Estelionato x apropriação indébita', // assunto
    nivel: 'dificil',                   // dificuldade
    ensino: 'superior',                 // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'A diferença essencial entre estelionato (art. 171) e apropriação indébita (art. 168) está em:', // pergunta
    alternativas: [                     // opções
      'O valor do bem envolvido',
      'A forma como o bem é obtido: o estelionato usa fraude/engano; a apropriação é de bem recebido licitamente e não devolvido',
      'A idade da vítima',
      'O tipo de bem (móvel x imóvel)',
      'O local do crime'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Estelionato = obter vantagem ilícita EM PREJUÍZO ALHEIO por artifício enganoso (fraude ativa — a vítima é induzida a entregar). Apropriação indébita = recebeu o bem licitamente (depósito, comissão) e depois se recusou a devolver — o "se apega".', // explicação
    dica: 'A FCC adora o exemplo do cheque sem fundo: se a vítima entrega o bem porque foi enganada = estelionato; se recebeu licitamente e se recusa a devolver = apropriação indébita. O "entrou de boa-fé" é a chave.', // pegadinha
    video: 'estelionato e apropriação indébita diferença direito penal' // busca no YouTube
  },
  {
    id: 'd15',                          // identificador único
    materia: 'Direito Penal',           // matéria
    tema: 'Corrupção — ativa, passiva e concussão', // assunto
    nivel: 'dificil',                   // dificuldade
    ensino: 'superior',                 // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'O funcionário que EXIGE vantagem indevida usando o cargo (sem que ninguém ofereça) comete:', // pergunta
    alternativas: [                     // opções
      'Corrupção passiva',
      'Corrupção ativa',
      'Concussão',
      'Peculato',
      'Prevaricação'
    ],
    correta: 2,                         // índice da certa
    explicacao: 'Concussão (art. 316) = o funcionário EXIGE vantagem — a iniciativa e a pressão partem dele. Corrupção passiva (317) = ele SOLICITA ou recebe oferta; corrupção ativa (333) = o particular que oferece.', // explicação
    dica: 'A CESPE testa o verbo: EXIGIR = concussão (funcionário impõe); SOLICITAR/RECEBER = corrupção passiva; OFERECER = ativa. "Exigir" é a palavra-sinal de concussão.', // pegadinha
    video: 'concussão corrupção ativa passiva peculato diferença' // busca no YouTube
  },
  {
    id: 'd16',                          // identificador único
    materia: 'Direito Penal',           // matéria
    tema: 'Culpa — modalidades',        // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Instituto AOCP',            // banca inspiradora
    enunciado: 'O motorista que responde por homicídio culposo no trânsito (sem intenção) agiu por:', // pergunta
    alternativas: [                     // opções
      'Dolo direto',
      'Culpa — imprudência, negligência ou imperícia',
      'Dolo eventual',
      'Preterdolo',
      'Responsabilidade civil apenas'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Culpa = agir sem intenção de produzir o resultado, por IMPRUDÊNCIA (agir sem cuidado), NEGLIGÊNCIA (omissão do dever) ou IMPERÍCIA (falta de técnica). O motorista que causa morte sem querer responde por homicídio culposo.', // explicação
    dica: 'Trio da culpa da AOCP: imprudência = ação arriscada; negligência = não fazer o que devia; imperícia = não saber fazer. Dolo = querer o resultado; culpa = não querer mas causar por descuido.', // pegadinha
    video: 'dolo e culpa imprudência negligência imperícia direito penal' // busca no YouTube
  },

  /* ===================== CRIMINOLOGIA — completando para 16 (k13 a k16) ===================== */
  {
    id: 'k13',                          // identificador único
    materia: 'Criminologia',            // matéria
    tema: 'Controle social',            // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'superior',                 // nível do concurso
    banca: 'Instituto AOCP',            // banca inspiradora
    enunciado: 'A família, a escola e a igreja são exemplos de controle social:', // pergunta
    alternativas: [                     // opções
      'Formal',
      'Informal',
      'Repressivo',
      'Preventivo jurídico',
      'De Estado'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Controle social informal = mecanismos não institucionalizados que moldam o comportamento (família, escola, costumes, opinião pública). Formal = leis, polícia, tribunais — o Estado em ação.', // explicação
    dica: 'A AOCP divide em dois sacos: formal (Estado: polícia, juiz, prisão) x informal (sociedade: família, escola, religião, vergonha pública). Repressivo = após o crime; preventivo = antes.', // pegadinha
    video: 'controle social formal informal criminologia resumo' // busca no YouTube
  },
  {
    id: 'k14',                          // identificador único
    materia: 'Criminologia',            // matéria
    tema: 'Toxicologia forense',        // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'superior',                 // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'A toxicologia forense, em uma perícia de morte suspeita, tem como objetivo principal:', // pergunta
    alternativas: [                     // opções
      'Determinar a hora da morte',
      'Identificar a presença de substâncias químicas (drogas, venenos, medicamentos) no organismo',
      'Reconstituir a cena do crime',
      'Analisar impressões digitais',
      'Fotografar o local'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Toxicologia forense = detectar e medir substâncias químicas no corpo (tela tóxica, sangue, cabelo, vísceras) — venenos, drogas, medicamentos, álcool. Determina se houve intoxicação ou envenenamento.', // explicação
    dica: 'Não confunda com tanatologia (estuda a morte em si) e tanatoscopia (sinais cadavéricos). Toxicologia = substâncias no corpo. O material vai ao laboratório, não ao IML comum.', // pegadinha
    video: 'toxicologia forense detecção de substâncias perícia resumo' // busca no YouTube
  },
  {
    id: 'k15',                          // identificador único
    materia: 'Criminologia',            // matéria
    tema: 'Genética forense — DNA',     // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'superior',                 // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'O uso de DNA em investigação criminal fundamenta-se no fato de que:', // pergunta
    alternativas: [                     // opções
      'Todo mundo tem o mesmo DNA',
      'O DNA de cada pessoa é único (exceto gêmeos idênticos), permitindo identificar vestígios biológicos',
      'O DNA muda com a idade',
      'O DNA só está no sangue',
      'O teste de DNA é inválido em juízo'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O DNA nuclear é praticamente único por indivíduo (gêmeos monozigóticos compartilham o mesmo). Sangue, sêmen, cabelo com raiz, saliva — qualquer vestígio biológico pode identificar o autor. O teste é prova robusta e admissível.', // explicação
    dica: 'Detalhes da FCC: gêmeos idênticos têm o MESMO DNA; o DNA mitocondrial vem só da mãe; o DNA está em qualquer célula com núcleo — não só sangue. E o teste é válido como prova.', // pegadinha
    video: 'dna forense genética perícia criminal resumo' // busca no YouTube
  },
  {
    id: 'k16',                          // identificador único
    materia: 'Criminologia',            // matéria
    tema: 'O perito no processo',       // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'superior',                 // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'O perito criminal, no processo penal, atua como:', // pergunta
    alternativas: [                     // opções
      'Advogado do Estado',
      'Auxiliar da justiça — produz prova técnica sem julgar a culpa',
      'Investigador que prende suspeitos',
      'Testemunha de defesa',
      'Substituto do juiz'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O perito é auxiliar da justiça: fornece parecer técnico (laudo) sobre o vestígio/materialidade, sem opinar sobre culpa — a decisão é do juiz. Ele é imparcial por lei (não é de defesa nem de acusação).', // explicação
    dica: 'A CESPE testa o papel do perito: técnico e imparcial, auxiliar da justiça. Quem acusa é o MP; quem defende é o advogado; quem julga é o juiz. O perito só diz "o que a ciência mostra" no vestígio.', // pegadinha
    video: 'papel do perito criminal auxiliar da justiça resumo' // busca no YouTube
  },

  /* ===================== DIREITO PREVIDENCIÁRIO — completando para 16 (v06 a v16) ===================== */
  {
    id: 'v06',                          // identificador único
    materia: 'Direito Previdenciário',  // matéria
    tema: 'Benefício por incapacidade permanente', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'superior',                 // nível do concurso
    banca: 'INSS / bancas previdenciárias', // banca inspiradora
    enunciado: 'O segurado que perde permanentemente a capacidade de trabalhar por doença ou acidente tem direito à:', // pergunta
    alternativas: [                     // opções
      'Aposentadoria por tempo de contribuição',
      'Aposentadoria por incapacidade permanente (antiga aposentadoria por invalidez)',
      'Pensão por morte',
      'Salário-maternidade',
      'Auxílio-reclusão'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Incapacidade TOTAL e PERMANENTE para o trabalho → aposentadoria por incapacidade permanente (renomeada da antiga aposentadoria por invalidez). A temporária (parcial) gera auxílio por incapacidade.', // explicação
    dica: 'A banca troca permanente x temporário: permanente = aposentadoria por incapacidade (recebe até morrer); temporário = auxílio por incapacidade temporária (antigo auxílio-doença, recebe só enquanto incapaz).', // pegadinha
    video: 'aposentadoria por incapacidade permanente inss resumo' // busca no YouTube
  },
  {
    id: 'v07',                          // identificador único
    materia: 'Direito Previdenciário',  // matéria
    tema: 'Salário-maternidade',        // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'INSS / bancas previdenciárias', // banca inspiradora
    enunciado: 'O salário-maternidade é devido à segurada do INSS:', // pergunta
    alternativas: [                     // opções
      'Apenas se ela contribuir há 20 anos',
      'Por 120 dias a partir do parto (ou adoção), independentemente de carência em alguns casos',
      'Somente para servidora pública',
      'Apenas para gestante de risco',
      'Só se for o primeiro filho'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Salário-maternidade = 120 dias a partir do parto, aborto não-criminoso, adoção ou guarda para fins de adoção. Para segurada empregada/MEI, não exige carência — nasce com a filiação (o evento basta).', // explicação
    dica: 'Detalhe da prova: adoção também gera salário-maternidade (120 dias para adoção de criança de qualquer idade — houve extensão legal). E o segurado facultativo/contribuinte individual precisa de 10 contribuições.', // pegadinha
    video: 'salário-maternidade inss 120 dias requisitos resumo' // busca no YouTube
  },
  {
    id: 'v08',                          // identificador único
    materia: 'Direito Previdenciário',  // matéria
    tema: 'BPC — benefício assistencial', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'INSS / bancas previdenciárias', // banca inspiradora
    enunciado: 'O BPC (benefício de prestação continuada) difere da aposentadoria porque:', // pergunta
    alternativas: [                     // opções
      'Exige 30 anos de contribuição',
      'É assistencial — não exige contribuição, mas sim idoso 65+ ou pessoa com deficiência de baixa renda',
      'Só servidores públicos recebem',
      'É pago pelo empregador',
      'Depende do salário do requerente'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'BPC = benefício ASSISTENCIAL (LOAS): garante 1 salário mínimo mensal a idosos 65+ ou pessoas com deficiência de longa data, de família com renda per capita inferior a 1/4 do SM. Não exige contribuição ao INSS.', // explicação
    dica: 'BPC ≠ aposentadoria: BPC é para quem NÃO contribuiu (assistência); aposentadoria é para quem contribuiu (previdência). BPC não deixa pensão por morte e não paga 13º.', // pegadinha
    video: 'bpc benefício de prestação continuada loas resumo' // busca no YouTube
  },
  {
    id: 'v09',                          // identificador único
    materia: 'Direito Previdenciário',  // matéria
    tema: 'Contribuição facultativa',   // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'INSS / bancas previdenciárias', // banca inspiradora
    enunciado: 'Uma dona de casa sem renda própria que quer se aposentar pelo INSS pode contribuir como:', // pergunta
    alternativas: [                     // opções
      'Segurado empregado',
      'Segurado facultativo — contribuição voluntária por alíquota sobre o salário de contribuição',
      'Segurado especial rural',
      'Dependente',
      'Contribuinte individual obrigatório'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Sem vínculo de trabalho, a pessoa pode se filiar VOLUNTARIAMENTE como segurado facultativo: paga uma alíquota (em geral 20% sobre o salário escolhido, ou ~5-11% em modalidades reduzidas) e acumula tempo de contribuição.', // explicação
    dica: 'Segurado EMPREGADO = vínculo obrigatório; FACULTATIVO = sem vínculo, contribui por opção (donas de casa, estudantes, desempregados que querem se proteger); ESPECIAL RURAL = agricultor familiar; INDIVIDUAL = autônomo/profissional liberal.', // pegadinha
    video: 'segurado facultativo inss contribuição voluntária resumo' // busca no YouTube
  },
  {
    id: 'v10',                          // identificador único
    materia: 'Direito Previdenciário',  // matéria
    tema: 'Reforma de 2019 — regras de transição', // assunto
    nivel: 'dificil',                   // dificuldade
    ensino: 'superior',                 // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'A Reforma da Previdência de 2019 (EC 103) criou "regras de transição" porque:', // pergunta
    alternativas: [                     // opções
      'A Constituição não permite aposentadoria',
      'Quem já contribuía antes da reforma não pode perder todo o tempo acumulado — as regras suavizam a migração para o novo sistema',
      'A reforma não valeu para ninguém',
      'As aposentadorias antigas foram revogadas',
      'Só o setor privado foi atingido'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Quem já estava no sistema não pode simplesmente migrar para a regra nova "seca" — as regras de transição (pedágio, idade progressiva, pontos) dão caminhos intermediários que respeitam o tempo já contribuído.', // explicação
    dica: 'A CESPE cobra a lógica: direito adquirido + expectativa de direito. As regras de transição protegem quem já contribuía — não são benefício a mais, são forma suave de ir do sistema antigo ao novo.', // pegadinha
    video: 'reforma da previdência 2019 regras de transição resumo' // busca no YouTube
  },
  {
    id: 'v11',                          // identificador único
    materia: 'Direito Previdenciário',  // matéria
    tema: 'Segurado especial rural',    // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'INSS / bancas previdenciárias', // banca inspiradora
    enunciado: 'O agricultor familiar que trabalha sozinho ou em regime de economia familiar no campo é considerado:', // pergunta
    alternativas: [                     // opções
      'Segurado facultativo',
      'Segurado especial — contribuição indireta pela receita bruta da atividade, com requisitos mais brandos para aposentar',
      'Segurado empregado',
      'Isento de qualquer proteção previdenciária',
      'Dependente do cônjuge'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Segurado ESPECIAL = produtor rural, pescador artesanal ou indígena em regime de economia familiar (sem empregado permanente). Contribui indiretamente (na venda da produção) e se aposenta por idade rural (60 homem/55 mulher) com requisitos reduzidos.', // explicação
    dica: 'Características do especial: economia FAMILIAR (não pode ter empregado efetivo), terra própria ou arrendada, e a contribuição é sobre a produção — não mensal como o individual. Idade rural = reduzida.', // pegadinha
    video: 'segurado especial rural inss agricultor familiar resumo' // busca no YouTube
  },
  {
    id: 'v12',                          // identificador único
    materia: 'Direito Previdenciário',  // matéria
    tema: 'Acidente de trabalho',       // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'INSS / bancas previdenciárias', // banca inspiradora
    enunciado: 'O trabalhador que sofre acidente que gera incapacidade definitiva parcial (perde um dedo, por exemplo) tem direito ao:', // pergunta
    alternativas: [                     // opções
      'Auxílio por incapacidade temporária (substituto do salário)',
      'Auxílio-acidente — indenização mensal por sequelas que reduzem a capacidade de trabalho',
      'Pensão por morte',
      'Seguro-desemprego',
      'Aposentadoria por idade'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Auxílio-ACIDENTE = indenização paga ao segurado que teve acidente e ficou com SEQUELA que reduz a capacidade de trabalho (não impede de trabalhar). O auxílio por incapacidade temporária é para quem NÃO pode trabalhar durante a recuperação.', // explicação
    dica: 'A distinção clássica: auxílio por incapacidade temporária = você NÃO pode trabalhar (substitui o salário); auxílio-acidente = você PODE trabalhar mas ficou com sequela (indenização). A doença ocupacional equipara-se a acidente de trabalho.', // pegadinha
    video: 'auxílio-acidente vs auxílio por incapacidade inss resumo' // busca no YouTube
  },
  {
    id: 'v13',                          // identificador único
    materia: 'Direito Previdenciário',  // matéria
    tema: 'Aposentadoria especial',     // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'superior',                 // nível do concurso
    banca: 'INSS / bancas previdenciárias', // banca inspiradora
    enunciado: 'A aposentadoria especial do INSS destina-se ao segurado que trabalha:', // pergunta
    alternativas: [                     // opções
      'Em qualquer função administrativa',
      'Exposto a agentes nocivos à saúde (insalubridade, periculosidade ou ruído), com tempo reduzido conforme o agente',
      'Somente à noite',
      'Em trabalho rural qualquer',
      'Com contrato temporário'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Aposentadoria especial = para quem trabalha exposto a agentes nocivos: químicos, biológicos, ruído, periculosidade (vigilante armado, eletricidade). Quanto mais grave o agente, menor o tempo exigido (15, 20 ou 25 anos).', // explicação
    dica: 'Exemplos de prova: vigilante armado (periculosidade), frentista (inflamável), radiologista (radiação), enfermeiro (agentes biológicos). O PPP (Perfil Profissiográfico Previdenciário) é o documento que comprova a exposição.', // pegadinha
    video: 'aposentadoria especial insalubridade periculosidade inss' // busca no YouTube
  },
  {
    id: 'v14',                          // identificador único
    materia: 'Direito Previdenciário',  // matéria
    tema: 'Pensão por morte — rateio',  // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'INSS / bancas previdenciárias', // banca inspiradora
    enunciado: 'Um segurado deixa esposa e dois filhos menores como dependentes. A pensão por morte é:', // pergunta
    alternativas: [                     // opções
      'Paga integralmente à esposa',
      'Dividida em partes iguais entre todos os dependentes habilitados',
      'Paga só ao filho mais velho',
      'Dividida por metade para a esposa e metade para os filhos',
      'Convertida em aposentadoria'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A pensão é dividida igualmente entre os dependentes habilitados (esposa + filhos menores de 21 ou inválidos). Se um dependente perde a condição (maior de 21, casa), a parte dele reverte para os demais.', // explicação
    dica: 'Ordem dos dependentes: 1ª classe = cônjuge/companheiro e filhos menores de 21 ou inválidos; 2ª classe = pais; 3ª classe = irmãos menores de 21 ou inválidos. A pensão só sobe para a classe seguinte se a anterior estiver vazia.', // pegadinha
    video: 'pensão por morte divisão entre dependentes inss resumo' // busca no YouTube
  },
  {
    id: 'v15',                          // identificador único
    materia: 'Direito Previdenciário',  // matéria
    tema: 'Licença-maternidade por adoção', // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'O servidor público que adota uma criança tem direito à licença-maternidade/paternidade?', // pergunta
    alternativas: [                     // opções
      'Não, adoção não gera licença',
      'Sim — a lei estende a licença-maternidade à adoção/guarda para fins de adoção',
      'Só se a criança tiver menos de 1 ano',
      'Apenas o pai tem direito',
      'Só no setor privado'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A CF e a lei estendem a licença-maternidade (120 dias) à adoção e à guarda judicial para fins de adoção — a mãe/pai adotivo tem os mesmos direitos do biológico, porque o objetivo é o vínculo, não o parto.', // explicação
    dica: 'A IBFC testa se você sabe que adoção GERA licença. A lei 12.010/2009 equiparou adoção a parto para o INSS e o serviço público. O pai adotivo também tem direito à licença-paternidade (5 dias).', // pegadinha
    video: 'licença-maternidade adoção servidor público direito' // busca no YouTube
  },
  {
    id: 'v16',                          // identificador único
    materia: 'Direito Previdenciário',  // matéria
    tema: 'Filiação e inscrição no INSS', // assunto
    nivel: 'dificil',                   // dificuldade
    ensino: 'superior',                 // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'A diferença entre "filiação" e "inscrição" no INSS é que:', // pergunta
    alternativas: [                     // opções
      'São sinônimos',
      'Filiação é o vínculo do segurado com a previdência (automático pelo trabalho ou voluntário); inscrição é o número/NIT que identifica o contribuinte',
      'Filiação é só para aposentados',
      'Inscrição garante benefício automaticamente',
      'Filiação exige pagamento mensal'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'FILIAÇÃO = o vínculo jurídico do segurado ao regime (empregado filia-se automaticamente ao trabalhar; facultativo, ao se inscrever). INSCRIÇÃO = o número (NIT/PIS/NIS) que identifica o contribuinte no sistema. Filiação ≠ garantia de benefício.', // explicação
    dica: 'Confusão clássica da CESPE: estar filiado ≠ ter direito ao benefício (precisa também de carência/qualidade de segurado); ter inscrição ≠ contribuir (o número é só identificação).', // pegadinha
    video: 'filiação inscrição nit inss diferença resumo' // busca no YouTube
  },

  /* ===================== LITERATURA — completando para 16 (l05 a l16) ===================== */
  {
    id: 'l05',                          // identificador único
    materia: 'Literatura',              // matéria
    tema: 'Arcadismo',                  // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Unicamp (Comvest)',         // banca inspiradora
    enunciado: 'O Arcadismo brasileiro (séc. XVIII) valorizava a vida simples no campo. "Marília de Dirceu" é a obra de:', // pergunta
    alternativas: [                     // opções
      'Gregório de Matos',
      'Tomás Antônio Gonzaga',
      'José de Alencar',
      'Machado de Assis',
      'Castro Alves'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Arcadismo = idealização do campo, pastores, natureza serena — reação ao excesso barroco. Tomás Antônio Gonzaga escreveu "Marília de Dirceu", lírica em que o pastor Dirceu canta o amor por Marília. Bocage e Cláudio Manuel são outros arcádicos.', // explicação
    dica: 'Pares que a banca troca: Barroco (XVII, conflito fé×razão, Gregório de Matos) x Arcadismo (XVIII, campo idealizado, Gonzaga). "Marília" não é de Gregório de Matos — ele escrevia sátira e poemas sacros.', // pegadinha
    video: 'arcadismo tomás antônio gonzaga marília de dirceu resumo' // busca no YouTube
  },
  {
    id: 'l06',                          // identificador único
    materia: 'Literatura',              // matéria
    tema: 'Naturalismo — O Cortiço',    // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: '"O Cortiço" (1890), de Aluísio Azevedo, representa o Naturalismo brasileiro ao retratar:', // pergunta
    alternativas: [                     // opções
      'O índio como herói nacional',
      'A vida no cortiço carioca e a tese de que meio e hereditariedade determinam o comportamento humano',
      'O amor idealizado da aristocracia',
      'As viagens marítimas portuguesas',
      'A vida pastoral do interior'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O Naturalismo radicaliza o Realismo: o homem é determinado por raça, meio e momento — "O Cortiço" mostra o morro carioca, a pobreza e a "bestialização" dos personagens pelo meio. Personagens como Rita Baiana e João Romão viram arquétipos.', // explicação
    dica: 'Realismo x Naturalismo: os dois criticam a sociedade, mas o Naturalismo adiciona o determinismo científico — o personagem é "produto do meio". O Cortiço é o romance canônico; Dom Casmurro é realista.', // pegadinha
    video: 'o cortiço aluísio azevedo naturalismo resumo' // busca no YouTube
  },
  {
    id: 'l07',                          // identificador único
    materia: 'Literatura',              // matéria
    tema: 'Parnasianismo',              // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Fuvest / Unicamp (vestibular)', // banca inspiradora
    enunciado: 'O Parnasianismo valorizava acima de tudo:', // pergunta
    alternativas: [                     // opções
      'A mensagem social engajada',
      'A forma perfeita — "arte pela arte", sonetos rigorosos e linguagem rebuscada',
      'A linguagem do povo',
      'A improvisação poética',
      'A prosa romântica'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Parnasianismo = culto à FORMA: sonetos de estrutura rígida, vocabulário erudito, "arte pela arte" (a beleza é o fim, não a mensagem). Olavo Bilac é o expoente ("Profissão de Fé" é o manifesto prático).', // explicação
    dica: 'Escolas em sequência no fim do séc. XIX: Parnasianismo (forma perfeita, Bilac) × Simbolismo (musicalidade, sugestão, Cruz e Sousa) — quase opostos. A banca adora o contraste entre "arte pela arte" (parnasiana) e o verso livre moderno.', // pegadinha
    video: 'parnasianismo olavo bilac forma perfeita resumo' // busca no YouTube
  },
  {
    id: 'l08',                          // identificador único
    materia: 'Literatura',              // matéria
    tema: 'Simbolismo',                 // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'O Simbolismo de Cruz e Sousa ("Missal", "Broquéis") se caracteriza por:', // pergunta
    alternativas: [                     // opções
      'Descrição realista da favela',
      'Musicalidade, sinestesia, misticismo e sugestão do inefável',
      'Sátira política',
      'Narrativa histórica',
      'Verso colonial'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O Simbolismo busca sugerir o invisível: musicalidade do verso, sinestesia (misturar sentidos — "cor que soa"), misticismo e evasão. Cruz e Sousa ("O Poeta Negro") é o grande nome; escreveu "Emparedado" e "Carnavais".', // explicação
    dica: 'Símbolo-chave da Cruz e Sousa: a cor BRANCA (misticismo) e os sinéstesias. A banca embaralha com Parnasianismo: simbolismo é sugestão e música; parnasianismo é forma perfeita e descrição fria.', // pegadinha
    video: 'simbolismo cruz e sousa poesia resumo vestibular' // busca no YouTube
  },
  {
    id: 'l09',                          // identificador único
    materia: 'Literatura',              // matéria
    tema: 'Poesia concreta',            // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Unicamp (Comvest)',         // banca inspiradora
    enunciado: 'A poesia concreta (anos 1950, Haroldo e Augusto de Campos, Décio Pignatari) inovou ao:', // pergunta
    alternativas: [                     // opções
      'Usar rimas ricas e forma fixa',
      'Valorizar a forma visual do poema — a disposição das palavras na página cria o sentido',
      'Imitar a poesia grega',
      'Proibir experimentação',
      'Rejeitar a tipografia'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A poesia concreta explora o aspecto VISUAL e espacial do verso: as palavras desenhadas na página fazem parte do sentido ("velocidade", "beija coca cola" de Décio). É vanguarda literária — o leitor "vê" o poema, não só lê.', // explicação
    dica: 'Poesia concreta vs. concretismo musical? A banca associa à forma: o poema concreto não é sobre algo — ele É o objeto. Augusto e Haroldo de Campos = os irmãos que revolucionaram a página.', // pegadinha
    video: 'poesia concreta campos pignatari forma visual resumo' // busca no YouTube
  },
  {
    id: 'l10',                          // identificador único
    materia: 'Literatura',              // matéria
    tema: 'Literatura de cordel',       // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'A literatura de cordel, tradição nordestina, caracteriza-se por:', // pergunta
    alternativas: [                     // opções
      'Livros acadêmicos encadernados',
      'Folhetos impressos pendurados em corda, com histórias rimadas e xilogravura na capa',
      'Poesia escrita na parede',
      'Romances de banca',
      'Cartilhas escolares'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Cordel = folhetos de histórias populares em versos (geralmente sextilhas), com capa em xilogravura, vendidos pendurados em cordas nas feiras — Patativa do Assaré, Leandro Gomes de Barros. É voz do sertão e patrimônio cultural.', // explicação
    dica: 'O ENEM valoriza cordel como cultura popular: sextilha (estrofe de 6 versos), xilogravura na capa, narrativa oral. E tem rosto feminino forte — as cordelistas vêm crescendo muito.', // pegadinha
    video: 'literatura de cordel nordeste patativa do assaré resumo' // busca no YouTube
  },
  {
    id: 'l11',                          // identificador único
    materia: 'Literatura',              // matéria
    tema: 'Guimarães Rosa',             // assunto
    nivel: 'dificil',                   // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Fuvest / Unicamp (vestibular)', // banca inspiradora
    enunciado: '"Grande Sertão: Veredas" (1956), de João Guimarães Rosa, narra a história de:', // pergunta
    alternativas: [                     // opções
      'Capitu e Bentinho',
      'Riobaldo, jagunço que narra suas aventuras e seu amor por Diadorim no sertão',
      'Macunaíma na cidade grande',
      'Budas e santos do interior',
      'O sertão durante a Canudos'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Riobaldo Tatarana, jagunço velho, conta sua vida a um interlocutor silencioso: guerras de jagunços, pacto com o diabo e o amor velado por Diadorim (que é mulher). Rosa revolucionou a língua — criou um idioma próprio, "o sertão é dentro da gente".', // explicação
    dica: 'A Fuvest cobra o giro: Diadorim é MULHER (revelação final) e o romance é uma longa confissão oral de Riobaldo. Guimarães Rosa inventou uma linguagem — não tente traduzir palavra por palavra.', // pegadinha
    video: 'grande sertão veredas guimarães rosa riobaldo resumo' // busca no YouTube
  },
  {
    id: 'l12',                          // identificador único
    materia: 'Literatura',              // matéria
    tema: 'Carlos Drummond de Andrade', // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: '"No meio do caminho tinha uma pedra / tinha uma pedra no meio do caminho" é de:', // pergunta
    alternativas: [                     // opções
      'Cecília Meireles',
      'Carlos Drummond de Andrade',
      'Manuel Bandeira',
      'Mário Quintana',
      'Vinicius de Moraes'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O poema "No meio do caminho" (de "Alguma Poesia", 1930) repete o verso como um tique — Drummond mostra a obsessão e a simplicidade da memória. É a marca do poeta mineiro que escrevia sobre o cotidiano, o desconforto e a lembrança.', // explicação
    dica: 'Drummond = "poeta das coisas simples" com dificuldade de se comunicar ("poema de sete faces"). Manuel Bandeira também é modernista, mas o verso da pedra é marca registrada do Drummond.', // pegadinha
    video: 'carlos drummond de andrade no meio do caminho resumo' // busca no YouTube
  },
  {
    id: 'l13',                          // identificador único
    materia: 'Literatura',              // matéria
    tema: 'Mal-do-século — ultrarromantismo', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'Álvares de Azevedo, poeta do "mal-do-século", escreveu versos marcados por:', // pergunta
    alternativas: [                     // opções
      'Otimismo e patriotismo',
      'Angústia, pessimismo, evasão e fascínio pela morte',
      'Exaltação do índio',
      'Sátira política',
      'Descrição da natureza tropical'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O ultrarromantismo/mal-do-século exagera o sentimento: sofrimento amoroso, tédio, evasão e morte — "Lira dos Vinte Anos" de Álvares de Azevedo (morto aos 20) e "Cancioneiro" de Casimiro de Abreu.', // explicação
    dica: 'O romantismo tem fases: indianismo (Alencar, idealização) → social (Castro Alves, condoreiro/escravidão) → ultrarromântico (Álvares de Azevedo, mal-do-século). O "eu lírico sofredor" é o terceiro.', // pegadinha
    video: 'ultrarromantismo álvares de azevedo mal-do-século resumo' // busca no YouTube
  },
  {
    id: 'l14',                          // identificador único
    materia: 'Literatura',              // matéria
    tema: 'Teatro brasileiro',          // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Unicamp (Comvest)',         // banca inspiradora
    enunciado: 'Nelson Rodrigues revolucionou o teatro brasileiro com "Vestido de Noiva" (1943), obra que:', // pergunta
    alternativas: [                     // opções
      'Narra as guerras de Canudos',
      'Mistura realidade, memória e delírio de Alaíde, mulher atropelada que revisita sua vida',
      'Reconta o mito grego de Orfeu',
      'Critica o coronelismo do sertão',
      'Dramatiza a independência'
    ],
    correta: 1,                         // índice da certa
    explicacao: '"Vestido de Noiva" junta três planos — realidade (o atropelamento), memória (o passado de Alaíde) e alucinação (seu delírio) — e explora a psicologia da mulher brasileira. Nelson Rodrigues ("o anjo pornográfico") fez o teatro mais psicanalítico do país.', // explicação
    dica: 'Nelson Rodrigues é o dramaturgo obsessivo: traição, família, culpa e hipocrisia burguesa. "Vestido de Noiva" é o marco do teatro moderno brasileiro; "O Beijo no Asfalto" é outra obra famosa.', // pegadinha
    video: 'nelson rodrigues vestido de noiva teatro brasileiro' // busca no YouTube
  },
  {
    id: 'l15',                          // identificador único
    materia: 'Literatura',              // matéria
    tema: 'Dom Casmurro — a dúvida',    // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Fuvest / Unicamp (vestibular)', // banca inspiradora
    enunciado: 'A grande questão de "Dom Casmurro" (Machado de Assis) que nunca se resolve é:', // pergunta
    alternativas: [                     // opções
      'Se Ezequiel era filho de Escobar',
      'Se Capitu traiu Bentinho — o narrador acusa, mas o leitor nunca tem prova',
      'Quem matou Escobar',
      'O paradeiro de Capitu',
      'A identidade do narrador'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Bentinho (Dom Casmurro) narra a história da sua vida e convence o leitor de que Capitu o traiu com Escobar — mas TUDO é o ponto de vista dele. Machado deixa a dúvida de propósito: a "traição" pode ser só ciúme e invenção do narrador.', // explicação
    dica: 'A Fuvest adora: o narrador é PARTE interessada — tudo que sabemos vem de Bentinho, que tinha motivo para condenar Capitu. "Capitu traiu?" é a pergunta sem resposta da literatura brasileira.', // pegadinha
    video: 'dom casmurro capitu traiu bentinho debate resumo' // busca no YouTube
  },
  {
    id: 'l16',                          // identificador único
    materia: 'Literatura',              // matéria
    tema: 'Clarice Lispector',          // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Unicamp (Comvest)',         // banca inspiradora
    enunciado: 'Clarice Lispector, uma das maiores escritoras do século XX, é conhecida por:', // pergunta
    alternativas: [                     // opções
      'A poesia de cordel',
      'O fluxo de consciência e a exploração do mundo interior feminino',
      'Os romances históricos',
      'A dramaturgia de revista',
      'A sátira política'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Clarice escreve com fluxo de consciência — entra na mente dos personagens, na epifania, na solidão feminina ("A Hora da Estrela", "Perto do Coração Selvagem", "Laços de Família"). Ela é a voz da intimidade na prosa brasileira.', // explicação
    dica: 'A Unicamp liga Clarice ao modernismo psicológico: não é ação, é reflexão — "o instante que passa". Macabéa em "A Hora da Estrela" é a nordestina invisível que o narrador Rodrigo S.M. conta.', // pegadinha
    video: 'clarice lispector a hora da estrela resumo' // busca no YouTube
  },

  /* ===================== INGLÊS — completando para 16 (e05 a e16) ===================== */
  {
    id: 'e05',                          // identificador único
    materia: 'Inglês',                  // matéria
    tema: 'There is / there are',       // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Univesp (vestibular)',      // banca inspiradora
    enunciado: 'Complete: "___ three books on the table."', // pergunta
    alternativas: [                     // opções
      'There is',
      'There are',
      'It is',
      'They is',
      'Has'
    ],
    correta: 1,                         // índice da certa
    explicacao: '"There are" para plural (three books); "there is" para singular (there is a book). Equivale a "há/existe" — a escolha depende do número do que vem depois.', // explicação
    dica: 'Padrão da Univesp: singular = there is; plural = there are. E "there is" com lista ("there is a book and two pens") usa o mais próximo para a concordância.', // pegadinha
    video: 'there is there are inglês para vestibular' // busca no YouTube
  },
  {
    id: 'e06',                          // identificador único
    materia: 'Inglês',                  // matéria
    tema: 'Comparativos',               // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'FATEC/ETEC (vestibular)',   // banca inspiradora
    enunciado: 'Complete: "My house is ___ than yours."', // pergunta
    alternativas: [                     // opções
      'big',
      'bigger',
      'biggest',
      'more big',
      'most big'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Adjetivos curtos (uma sílaba) ganham -er + than: big → bigger than. Adjetivos longos usam more + adj: more beautiful than. "More big" é o erro comum de quem mistura as duas regras.', // explicação
    dica: 'Macete: curto → -er (big/bigger, fast/faster); longo → more (beautiful/more beautiful). Irregulares: good→better, bad→worse, far→farther/further. Superlativo usa -est ou most.', // pegadinha
    video: 'comparativo e superlativo inglês adjetivos vestibular' // busca no YouTube
  },
  {
    id: 'e07',                          // identificador único
    materia: 'Inglês',                  // matéria
    tema: 'Superlativos',               // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'Complete: "This is ___ movie I have ever seen."', // pergunta
    alternativas: [                     // opções
      'the better',
      'the best',
      'the most best',
      'better than',
      'more good'
    ],
    correta: 1,                         // índice da certa
    explicacao: '"Ever seen" pede superlativo: the best (irregular de good). "The better" é comparativo; "the most best" é redundância de regra. Superlativo sempre com "the".', // explicação
    dica: 'Isca clássica: comparativo com "the" = the better/more X; superlativo = the best/most X. "Ever" (alguma vez) pede superlativo na vida toda.', // pegadinha
    video: 'superlativo inglês best most para vestibular' // busca no YouTube
  },
  {
    id: 'e08',                          // identificador único
    materia: 'Inglês',                  // matéria
    tema: 'Preposições de tempo',       // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Coperve (UFSC)',            // banca inspiradora
    enunciado: 'Complete: "I was born ___ 1995 ___ April ___ Monday."', // pergunta
    alternativas: [                     // opções
      'in, in, on',
      'on, in, in',
      'in, on, in',
      'at, in, on',
      'in, on, at'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'IN para anos, meses, estações e períodos (in 1995, in April); ON para dias e datas (on Monday, on April 5); AT para horas e pontos (at 8, at night).', // explicação
    dica: 'A regra é de tamanho: IN = grande (ano, mês); ON = dia/data; AT = hora. "At night" é exceção (seria "in the night" lógica, mas o inglês usa "at").', // pegadinha
    video: 'preposições in on at tempo inglês resumo' // busca no YouTube
  },
  {
    id: 'e09',                          // identificador único
    materia: 'Inglês',                  // matéria
    tema: 'Artigos a/an/the',           // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Univesp (vestibular)',      // banca inspiradora
    enunciado: 'Complete: "___ apple a day keeps ___ doctor away."', // pergunta
    alternativas: [                     // opções
      'A, a',
      'An, the',
      'The, a',
      'An, a',
      'A, the'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'AN antes de som de vogal (an apple — apple começa com som vocálico); THE para o específico ("the doctor" — o médico em geral). "A" para som de consoante.', // explicação
    dica: 'Regra do som, não da letra: "an hour" (h mudo → som vocálico), "a university" (som de consoante "yu"). A banca testa "an honest" e "a European".', // pegadinha
    video: 'artigos a an the inglês regras vestibular' // busca no YouTube
  },
  {
    id: 'e10',                          // identificador único
    materia: 'Inglês',                  // matéria
    tema: 'Phrasal verbs',              // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'Em "I am looking for my keys", o phrasal verb "look for" significa:', // pergunta
    alternativas: [                     // opções
      'Olhar para',
      'Procurar',
      'Cuidar de',
      'Esperar por',
      'Parecer'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Phrasal verbs mudam de sentido com a preposição: look for = procurar; look after = cuidar; look at = olhar para; look forward to = aguardar com expectativa. "I am looking for" = estou procurando.', // explicação
    dica: 'Os que o ENEM mais cobra: look for (procurar), look after (cuidar), give up (desistir), put off (adiar), take off (decolar/tirar), get along (dar-se bem). O sentido vem do conjunto verbo+partícula.', // pegadinha
    video: 'phrasal verbs inglês look for give up resumo' // busca no YouTube
  },
  {
    id: 'e11',                          // identificador único
    materia: 'Inglês',                  // matéria
    tema: 'Voz passiva',                // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: '"The book was written by Machado de Assis" é uma frase em:', // pergunta
    alternativas: [                     // opções
      'Voz ativa',
      'Voz passiva — o sujeito (the book) recebe a ação; o agente (by Machado) aparece depois',
      'Presente contínuo',
      'Futuro próximo',
      'Imperativo'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Voz passiva: o sujeito RECEBE a ação (o livro "foi escrito"). Estrutura: be + particípio (was written). O agente vem com "by" (by Machado). A ativa seria "Machado de Assis wrote the book".', // explicação
    dica: 'Marcador da passiva: be (is/are/was/were/been) + particípio (done/written/made). O "by" é a pista do agente — se aparece "by someone", é passiva.', // pegadinha
    video: 'voz passiva inglês be particípio resumo vestibular' // busca no YouTube
  },
  {
    id: 'e12',                          // identificador único
    materia: 'Inglês',                  // matéria
    tema: 'Will x going to',            // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'FATEC/ETEC (vestibular)',   // banca inspiradora
    enunciado: 'Qual frase usa "going to" corretamente para um plano já decidido?', // pergunta
    alternativas: [                     // opções
      'I will probably go to the party.',
      'I am going to visit my grandmother tomorrow — we already bought the tickets.',
      'It will rain someday.',
      'I will help you.',
      'She wills to study.'
    ],
    correta: 1,                         // índice da certa
    explicacao: '"Going to" indica PLANO ou decisão já tomada antes de falar (já comprei as passagens → decisão prévia). "Will" é promessa/decisão espontânea no momento da fala ou previsão.', // explicação
    dica: 'A distinção: GOING TO = plano anterior (decidi antes); WILL = decisão do momento/promessa ("I will help you"). Evidência visual (nuvens escuras) = going to ("it is going to rain").', // pegadinha
    video: 'will vs going to futuro inglês resumo vestibular' // busca no YouTube
  },
  {
    id: 'e13',                          // identificador único
    materia: 'Inglês',                  // matéria
    tema: 'Wh-questions',               // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Univesp (vestibular)',      // banca inspiradora
    enunciado: 'Complete: "___ do you live? — In São Paulo."', // pergunta
    alternativas: [                     // opções
      'What',
      'When',
      'Where',
      'Why',
      'Who'
    ],
    correta: 2,                         // índice da certa
    explicacao: 'A resposta é um lugar (São Paulo) → WHERE (onde). What=o que, when=quando, why=por que, who=quem. Cada wh- word pede um tipo de resposta.', // explicação
    dica: 'Mapa das wh-words: what (coisa), when (tempo), where (lugar), why (motivo), who (pessoa), how (modo), which (escolha), whose (posse). Resposta "In São Paulo" = lugar = where.', // pegadinha
    video: 'wh questions what where when why inglês' // busca no YouTube
  },
  {
    id: 'e14',                          // identificador único
    materia: 'Inglês',                  // matéria
    tema: 'Much / many',                // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Coperve (UFSC)',            // banca inspiradora
    enunciado: 'Complete: "How ___ water do you drink?" e "How ___ books did you read?"', // pergunta
    alternativas: [                     // opções
      'many, much',
      'much, many',
      'many, many',
      'much, much',
      'a lot, many'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'MUCH para incontáveis (water, money, time); MANY para contáveis (books, people, cars). "How much water" / "how many books". "A lot of" funciona para os dois.', // explicação
    dica: 'Regra do contável: se dá para contar (books, apples) → many; se não dá (water, money, information, advice) → much. A banca testa "information" — é incontável em inglês!', // pegadinha
    video: 'much many countables uncountables inglês resumo' // busca no YouTube
  },
  {
    id: 'e15',                          // identificador único
    materia: 'Inglês',                  // matéria
    tema: 'Advérbios de frequência',    // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Univesp (vestibular)',      // banca inspiradora
    enunciado: 'Qual frase coloca o advérbio de frequência na posição correta?', // pergunta
    alternativas: [                     // opções
      'I always am tired.',
      'I am always tired.',
      'Always I am tired.',
      'I am tired always.',
      'Always tired I am.'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Advérbios de frequência (always, usually, often, never) vão: ANTES do verbo comum (I always work), mas DEPOIS do verbo be (I am always tired). "Always I am" e "always am" são os erros típicos.', // explicação
    dica: 'Posição com be: depois (am always, is never). Com verbo comum: antes (always work, never eat). Com auxiliar: entre auxiliar e principal (have always done).', // pegadinha
    video: 'advérbios de frequência posição inglês resumo' // busca no YouTube
  },
  {
    id: 'e16',                          // identificador único
    materia: 'Inglês',                  // matéria
    tema: 'Leitura — inferência',       // assunto
    nivel: 'dificil',                   // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'Leia: "Although she studied hard, Maria failed the exam. The teacher suggested more practice." O texto sugere que:', // pergunta
    alternativas: [                     // opções
      'Maria passou no exame',
      'Maria não estudou o suficiente',
      'Maria reprovou mesmo estudando muito — o professor recomendou mais treino',
      'O professor reprovou Maria por inveja',
      'Maria desistiu do curso'
    ],
    correta: 2,                         // índice da certa
    explicacao: 'O conectivo "although" (= embora) sinaliza concessão: reprovou APESAR de estudar — não por falta de estudo. "Suggested more practice" = o remédio é treinar mais. Inferência leve, mas a palavra-chave é o "although".', // explicação
    dica: 'Conectivos que mudam o sentido do texto: although/though/despite (concessão), however/but (contraste), because/since (causa), therefore/so (consequência). Identificar o conectivo resolve metade da questão.', // pegadinha
    video: 'conectivos inglês although however because interpretação' // busca no YouTube
  },

  /* ===================== ESPANHOL — completando para 16 (s05 a s16) ===================== */
  {
    id: 's05',                          // identificador único
    materia: 'Espanhol',                // matéria
    tema: 'Pretérito perfecto x indefinido', // assunto
    nivel: 'dificil',                   // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Comvest (Unicamp)',         // banca inspiradora
    enunciado: 'Em espanhol, "Esta mañana he desayunado" usa o pretérito perfecto porque:', // pergunta
    alternativas: [                     // opções
      'A ação é muito antiga',
      'A ação está ligada ao presente — "esta mañana" ainda faz parte de hoje',
      'É sempre o tempo de todas as ações passadas',
      'É o futuro',
      'É o condicional'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Perfecto (he desayunado) = ação passada COM vínculo ao presente (este/esta mañana, hoy, siempre). Indefinido (desayuné) = ação terminada e distante (ayer, el año pasado). O marcador de tempo decide.', // explicação
    dica: 'Macete: "hoy, esta mañana, esta semana" → perfecto (he visto); "ayer, en 2020, el año pasado" → indefinido (vi). A Unicamp troca os marcadores de tempo como isca.', // pegadinha
    video: 'pretérito perfecto indefinido español diferencia vestibular' // busca no YouTube
  },
  {
    id: 's06',                          // identificador único
    materia: 'Espanhol',                // matéria
    tema: 'Gustar e similares',         // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Univesp (vestibular)',      // banca inspiradora
    enunciado: 'Complete: "A María ___ gusta el chocolate."', // pergunta
    alternativas: [                     // opções
      'me',
      'te',
      'le',
      'lo',
      'la'
    ],
    correta: 2,                         // índice da certa
    explicacao: '"Gustar" é verbo invertido: a coisa gostada é o sujeito e a pessoa recebe o pronome indireto (me, te, le, nos, os, les). "A María LE gusta el chocolate" = chocolate agrada a María. Concorda com o objeto (el chocolate).', // explicação
    dica: 'Verbos com a mesma estrutura: gustar, encantar, molestar, interesar — todos invertem (me gusta, nos encanta). O artigo "a María" indica destinatário → pronome indireto LE.', // pegadinha
    video: 'verbo gustar espanhol pronome indireto resumo' // busca no YouTube
  },
  {
    id: 's07',                          // identificador único
    materia: 'Espanhol',                // matéria
    tema: 'Demonstrativos',             // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Coperve (UFSC)',            // banca inspiradora
    enunciado: 'Complete: "___ libro que está allá lejos es mío."', // pergunta
    alternativas: [                     // opções
      'Este',
      'Ese',
      'Aquel',
      'Estos',
      'Esos'
    ],
    correta: 2,                         // índice da certa
    explicacao: 'Este = perto de quem fala; ese = perto de quem ouve/médio; aquel = longe dos dois. "Allá lejos" pede aquel — o grau máximo de distância. Concorda em gênero/número com "libro" (aquel, masculino singular).', // explicação
    dica: 'Tabela da distância: este (aqui/perto), ese (aí/médio), aquel (ali/longe). No plural: estos, esos, aquellos. "Allá lejos" sempre aquel.', // pegadinha
    video: 'demonstrativos este ese aquel espanhol resumo' // busca no YouTube
  },
  {
    id: 's08',                          // identificador único
    materia: 'Espanhol',                // matéria
    tema: 'Verbos irregulares',         // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'Qual é a forma correta do presente de "tener" para "yo"?', // pergunta
    alternativas: [                     // opções
      'tieno',
      'tengo',
      'teno',
      'tenges',
      'tienes'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Tener é irregular: yo TENGO, tú tienes, él tiene, nosotros tenemos, ellos tienen. A primeira pessoa muda a raiz (teng-). "Tienes" é a segunda pessoa.', // explicação
    dica: 'Os irregulares mais cobrados: tener (tengo), hacer (hago), salir (salgo), poner (pongo), conocer (conozco), decir (digo) — todos mudam na primeira pessoa do presente.', // pegadinha
    video: 'verbos irregulares presente espanhol tener hacer resumo' // busca no YouTube
  },
  {
    id: 's09',                          // identificador único
    materia: 'Espanhol',                // matéria
    tema: 'Concordância de gênero',     // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Univesp (vestibular)',      // banca inspiradora
    enunciado: 'Complete: "___ problema es grave; ___ solución es fácil."', // pergunta
    alternativas: [                     // opções
      'La, el',
      'El, la',
      'El, el',
      'La, la',
      'Lo, la'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Problema é masculino (termina em -ma, exceção grega) → EL problema; solución é feminino (termina em -ción) → LA solución. Palavras em -ma/-pa/-ta são masculinas: el problema, el mapa, el planeta.', // explicação
    dica: 'Iscas de gênero em espanhol: EL problema/mapa/día/mano (exceções); LA mano é um caso raro. Terminações -ción, -dad, -tad = femininas; -o, -ma = masculinas.', // pegadinha
    video: 'gênero espanhol masculino feminino exceções resumo' // busca no YouTube
  },
  {
    id: 's10',                          // identificador único
    materia: 'Espanhol',                // matéria
    tema: 'Mais falsos cognatos',       // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'A palavra espanhola "oficina" significa:', // pergunta
    alternativas: [                     // opções
      'Oficina mecânica apenas',
      'Escritório',
      'Farmácia',
      'Fábrica',
      'Aula'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Oficina em espanhol = escritório (local de trabalho administrativo). Para a oficina mecânica do carro, o espanhol usa "taller". Outros: "largo" = comprido, "sopa" = sopa (mas "sopresa" = surpresa).', // explicação
    dica: 'Lista ENEM: oficina = escritório; largo = comprido; exquisito = delicioso; cera = vela/cera; desgracia = desgraça/desventura; atender = atender/prestar atenção. "Rato" = momento, não o ratinho.', // pegadinha
    video: 'falsos cognatos espanhol oficina largo lista vestibular' // busca no YouTube
  },
  {
    id: 's11',                          // identificador único
    materia: 'Espanhol',                // matéria
    tema: 'Interrogativos',             // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Univesp (vestibular)',      // banca inspiradora
    enunciado: 'Complete: "___ vives? — En Madrid."', // pergunta
    alternativas: [                     // opções
      'Qué',
      'Cómo',
      'Dónde',
      'Cuándo',
      'Quién'
    ],
    correta: 2,                         // índice da certa
    explicacao: 'A resposta é um lugar (Madrid) → DÓNDE (onde). Qué=o que, cómo=como, cuándo=quando, quién=quem. Os acentos nos interrogativos são obrigatórios.', // explicação
    dica: 'Mapa dos interrogativos: qué (coisa), quién (pessoa), dónde (lugar), cuándo (tempo), cómo (modo), por qué (motivo), cuál (escolha). "En Madrid" = lugar = dónde.', // pegadinha
    video: 'interrogativos espanhol qué dónde cuándo resumo' // busca no YouTube
  },
  {
    id: 's12',                          // identificador único
    materia: 'Espanhol',                // matéria
    tema: 'Pronomes de objeto',         // assunto
    nivel: 'dificil',                   // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Comvest (Unicamp)',         // banca inspiradora
    enunciado: 'Complete: "Veo a mi hermano y ___ ayudo."', // pergunta
    alternativas: [                     // opções
      'lo',
      'le',
      'la',
      'se',
      'me'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A quem se ajuda? A él → pronome de objeto INDIRETO: le ayudo (ajudo A ele). "Lo" é objeto direto (lo veo = o vejo). "La" é feminino. A ajuda é ação "a alguém" → indireto.', // explicação
    dica: 'Objeto DIRETO (o/la/los/las) = quem recebe a ação (lo veo = vejo ele); INDIRETO (le/les) = a quem (le ayudo = ajudo A ele). A preposição "a" antes do pronome é a pista do indireto.', // pegadinha
    video: 'pronomes objeto direto indireto espanhol lo le resumo' // busca no YouTube
  },
  {
    id: 's13',                          // identificador único
    materia: 'Espanhol',                // matéria
    tema: 'Futuro próximo — ir a + infinitivo', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'FATEC/ETEC (vestibular)',   // banca inspiradora
    enunciado: '"Voy a estudiar medicina" expressa:', // pergunta
    alternativas: [                     // opções
      'Uma ação no passado',
      'Um plano futuro próximo ou intenção',
      'Uma ordem',
      'Uma condição',
      'Um desejo impossível'
    ],
    correta: 1,                         // índice da certa
    explicacao: '"Ir a + infinitivo" forma o futuro próximo (voy a estudiar = vou estudar) — plano/intenção já pensada, equivalente ao português "vou fazer". O futuro simples (estudiaré) é mais formal ou distante.', // explicação
    dica: 'Em espanhol como em português: "voy a + inf" = futuro imediato/íntimo. O futuro simples (estudiaré, hablaré) é mais formal. Ir é irregular: voy, vas, va, vamos, van.', // pegadinha
    video: 'futuro próximo ir a infinitivo espanhol resumo' // busca no YouTube
  },
  {
    id: 's14',                          // identificador único
    materia: 'Espanhol',                // matéria
    tema: 'Possessivos',                // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Univesp (vestibular)',      // banca inspiradora
    enunciado: 'Complete: "Este es ___ libro." (o livro é meu)', // pergunta
    alternativas: [                     // opções
      'mi',
      'tu',
      'su',
      'mí',
      'yo'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'Posse antes do substantivo usa o adjetivo possessivo: MI libro (meu), TU libro (teu), SU libro (dele/deles). "Mí" (com acento) é pronome depois de preposição ("para mí"). "Yo" é sujeito.', // explicação
    dica: 'Possessivo adjetivo: mi/mis, tu/tus, su/sus, nuestro, vuestro — concorda em número com a COISA possuída (mis libros), não com o dono. Cuidado com "su" ambíguo (dele/dela/deles).', // pegadinha
    video: 'possessivos espanhol mi tu su resumo vestibular' // busca no YouTube
  },
  {
    id: 's15',                          // identificador único
    materia: 'Espanhol',                // matéria
    tema: 'Preposições de lugar',       // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: '"El gato está ___ la mesa." (o gato está SOBRE a mesa)', // pergunta
    alternativas: [                     // opções
      'debajo de',
      'encima de / sobre',
      'detrás de',
      'dentro de',
      'al lado de'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Sobre/em cima = encima de ou sobre. Debajo de = embaixo; detrás de = atrás; dentro de = dentro; al lado de = ao lado. Cada preposição localiza o gato numa posição diferente.', // explicação
    dica: 'O ENEM testa o par encima/debajo (cima/baixo) e delante/detrás (frente/trás). "Sobre" é mais formal; "encima de" é o uso comum. Desenhe a cena mental para não trocar.', // pegadinha
    video: 'preposiciones de lugar espanhol encima debajo detrás resumo' // busca no YouTube
  },
  {
    id: 's16',                          // identificador único
    materia: 'Espanhol',                // matéria
    tema: 'Leitura — inferência',       // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'Leia: "Aunque llegó tarde, Juan pudo entrar a la reunión." O texto informa que:', // pergunta
    alternativas: [                     // opções
      'Juan chegou cedo',
      'Juan não entrou na reunião',
      'Juan entrou na reunião apesar de ter chegado tarde',
      'A reunião foi cancelada',
      'Juan se desculpou'
    ],
    correta: 2,                         // índice da certa
    explicacao: '"Aunque" (= embora) cria concessão: entrou APESAR do atraso. "Pudo entrar" = conseguiu entrar. A banca testa se você entende a força do conectivo concessivo.', // explicação
    dica: 'Conectivos espanhóis: aunque (embora), pero (mas), porque (porque), por eso (por isso), sin embargo (no entanto), entonces (então). Marque o conectivo antes de escolher.', // pegadinha
    video: 'conectivos espanhol aunque pero porque interpretación' // busca no YouTube
  },

  /* ===================== ARTES — completando para 16 (ar05 a ar16) ===================== */
  {
    id: 'ar05',                         // identificador único
    materia: 'Artes',                   // matéria
    tema: 'Renascimento',               // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Unicamp (Comvest)',         // banca inspiradora
    enunciado: 'O Renascimento (séculos XV-XVI) colocou o homem no centro da arte. São exemplos de artistas renascentistas:', // pergunta
    alternativas: [                     // opções
      'Picasso e Dalí',
      'Leonardo da Vinci e Michelangelo',
      'Tarsila e Anita Malfatti',
      'Aleijadinho e Mestre Vitalino',
      'Monet e Van Gogh'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Renascimento = retorno aos modelos greco-romanos + humanismo (homem como medida) + técnicas de perspectiva e anatomia. Leonardo ("Mona Lisa", "Última Ceia") e Michelangelo ("Davi", Capela Sistina) são o topo; Rafael e Botticelli completam.', // explicação
    dica: 'A banca mistura períodos: Renascimento (XV-XVI, humanismo) × Barroco (XVII, dramaticidade) × Impressionismo (XIX, luz) × Modernismo (XX, ruptura). Leonardo e Michelangelo são renascentistas puros.', // pegadinha
    video: 'renascimento leonardo da vinci michelangelo arte resumo' // busca no YouTube
  },
  {
    id: 'ar06',                         // identificador único
    materia: 'Artes',                   // matéria
    tema: 'Impressionismo',             // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'O Impressionismo (Monet, Renoir, Degas) revolucionou a pintura ao:', // pergunta
    alternativas: [                     // opções
      'Pintar apenas retratos da realeza',
      'Capturar a luz e a impressão momentânea da cena, com pinceladas soltas e cores puras',
      'Copiar a fotografia com precisão',
      'Usar só preto e branco',
      'Pintar temas religiosos'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Os impressionistas saíram do ateliê para pintar ao ar livre, perseguindo a LUZ do momento — pinceladas visíveis, cores sem mistura prévia, cenas do cotidiano. "Impression, soleil levant" (Monet) deu nome ao movimento.', // explicação
    dica: 'O ENEM liga o nome ao conceito: impressionismo = "impressão" fugaz do instante (luz, clima). Não é falta de técnica — é técnica de capturar a luz. Pós-impressionismo (Van Gogh, Cézanne) vem depois.', // pegadinha
    video: 'impressionismo monet luz pintura resumo vestibular' // busca no YouTube
  },
  {
    id: 'ar07',                         // identificador único
    materia: 'Artes',                   // matéria
    tema: 'Expressionismo',             // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Unicamp (Comvest)',         // banca inspiradora
    enunciado: 'Edvard Munch, autor de "O Grito", representa o Expressionismo, movimento que:', // pergunta
    alternativas: [                     // opções
      'Pinta a beleza ideal',
      'Distorce a realidade para expressar a emoção e a angústia interior',
      'Usa apenas formas geométricas',
      'Reproduz fotografias',
      'Evita qualquer figura humana'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Expressionismo = a emoção dita a forma: cores intensas, linhas distorcidas, figuras deformadas para gritar a angústia interior. "O Grito" de Munch é o ícone da angústia moderna — não é sobre o que se vê, é sobre o que se sente.', // explicação
    dica: 'Expressionismo (emoção/distorção) × Impressionismo (luz/momento) × Cubismo (geometria/fragmentos). A palavra-chave de cada vanguarda resolve 90% das questões.', // pegadinha
    video: 'expressionismo munch o grito arte resumo vestibular' // busca no YouTube
  },
  {
    id: 'ar08',                         // identificador único
    materia: 'Artes',                   // matéria
    tema: 'Surrealismo',                // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'O Surrealismo (Salvador Dalí, René Magritte) explorava:', // pergunta
    alternativas: [                     // opções
      'O realismo social',
      'O inconsciente, os sonhos e o irracional — imagens ilógicas combinadas',
      'A técnica do ponto',
      'A arte religiosa',
      'A natureza-morta'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O Surrealismo (anos 1920-30) mergulha no inconsciente freudiano: relógios derretidos ("A Persistência da Memória" de Dalí), rostos ocultos, cenários oníricos — a arte do sonho e do ilógico.', // explicação
    dica: 'Surrealismo = sonho/inconsciente (Dalí, Magritte, Miró). Os relógios derretidos de Dalí são a imagem-assinatura. Dadaísmo (anti-arte, Duchamp) é o irmão provocador — não confunda.', // pegadinha
    video: 'surrealismo dalí magritte sonho arte resumo' // busca no YouTube
  },
  {
    id: 'ar09',                         // identificador único
    materia: 'Artes',                   // matéria
    tema: 'Arte naïf e popular',        // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'A arte naïf ("ingênua"), como a das pintoras do ciclo brasileiro, caracteriza-se por:', // pergunta
    alternativas: [                     // opções
      'Técnica acadêmica refinada',
      'Espontaneidade, cores vivas e ausência de perspectiva formal — arte de quem não estudou a técnica',
      'Abstração total',
      'Cópia dos mestres europeus',
      'Uso só de mármore'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Naïf = "ingênuo": o artista sem formação acadêmica pinta com o instinto — cores alegres, perspectiva "errada", cenas do cotidiano e da memória. No Brasil, ligada à arte popular e à autoexpressão fora dos circuitos formais.', // explicação
    dica: 'O ENEM valoriza a arte popular como legítima: naïf não é "arte ruim" — é linguagem própria. Vitalino (escultura em barro), Djanira e as pintoras de São Paulo são referências.', // pegadinha
    video: 'arte naïf popular brasileira resumo vestibular' // busca no YouTube
  },
  {
    id: 'ar10',                         // identificador único
    materia: 'Artes',                   // matéria
    tema: 'Xilogravura',                // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'A xilogravura, arte presente nas capas da literatura de cordel, é:', // pergunta
    alternativas: [                     // opções
      'Pintura sobre tela',
      'Gravura feita entalhando-se madeira, que recebe tinta e é prensada no papel',
      'Escultura em pedra',
      'Fotografia em preto e branco',
      'Desenho a lápis'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Xilogravura = entalhe em madeira: entalha-se a imagem (o que fica em relevo pega tinta), cobre-se de tinta e pressiona-se contra o papel. As capas de cordel e a obra de J. Borges popularizaram a técnica.', // explicação
    dica: 'Técnicas de gravura que a banca compara: xilogravura (madeira) × litografia (pedra) × serigrafia (tela, usada no pop art de Warhol). J. Borges é o mestre da xilo nordestina.', // pegadinha
    video: 'xilogravura literatura de cordel técnica resumo' // busca no YouTube
  },
  {
    id: 'ar11',                         // identificador único
    materia: 'Artes',                   // matéria
    tema: 'Arte urbana — grafite',      // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'Grafite e pichação são frequentemente confundidos, mas se diferenciam porque o grafite:', // pergunta
    alternativas: [                     // opções
      'É sempre ilegal',
      'É uma forma artística com intenção estética, muitas vezes autorizada',
      'Só usa a assinatura do autor',
      'É feito em papel',
      'Não usa spray'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Grafite = arte urbana com intenção estética (murais, mensagens sociais), muitas vezes legal e comissionada (Os Gêmeos, Kobra). Pichação = a assinatura/tag, geralmente ilegal, marcando território — objeto de debate urbano, não obra.', // explicação
    dica: 'O ENEM contextualiza: grafite legal é reconhecido como arte (arte urbana, street art); pichação é ato de marcação. A diferença está na INTENÇÃO estética, não no material.', // pegadinha
    video: 'grafite pichação diferença arte urbana resumo' // busca no YouTube
  },
  {
    id: 'ar12',                         // identificador único
    materia: 'Artes',                   // matéria
    tema: 'Barroco europeu',            // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Fuvest / Unicamp (vestibular)', // banca inspiradora
    enunciado: 'A pintura barroca europeia (Caravaggio, Velázquez, Rubens) se caracteriza por:', // pergunta
    alternativas: [                     // opções
      'Serenidade e simplicidade',
      'Dramaticidade, contraste forte de luz e sombra (claro-escuro) e movimento',
      'Formas geométricas',
      'Cores pastel',
      'Abstração total'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O Barroco do século XVII quer emocionar: claro-escuro (chiaroscuro de Caravaggio), cenas em movimento, tensão e teatralidade — a arte da Contrarreforma e dos reis absolutos. Velázquez ("Las Meninas") é o exemplo complexo.', // explicação
    dica: 'Renascimento (equilíbrio, harmonia) × Barroco (drama, luz e sombra, movimento). Caravaggio = o mestre do claro-escuro; Vermeer usa luz mais suave mas é também barroco holandês.', // pegadinha
    video: 'barroco europeu caravaggio claro-escuro resumo' // busca no YouTube
  },
  {
    id: 'ar13',                         // identificador único
    materia: 'Artes',                   // matéria
    tema: 'Arte indígena e grafismo',   // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'O grafismo indígena brasileiro (pintura corporal, cerâmica) é entendido pelos povos originários como:', // pergunta
    alternativas: [                     // opções
      'Mera decoração',
      'Linguagem visual que identifica grupo, função e espiritualidade — arte ligada ao corpo e à cosmologia',
      'Imitação da arte europeia',
      'Publicidade',
      'Arte só para venda'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Para os povos indígenas, o grafismo é linguagem: cada padrão na pele e na cerâmica marca grupo, gênero, ocasião e relação espiritual — arte integrada à vida, não objeto separado. A arte keniata/krahô e a cerâmica marajoara são exemplos.', // explicação
    dica: 'O ENEM combate a ideia de "arte ingênua indígena": é um sistema simbólico sofisticado. O padrão na pele identifica quem é a pessoa — como um RG visual e uma oração ao mesmo tempo.', // pegadinha
    video: 'grafismo indígena arte corporal significado resumo' // busca no YouTube
  },
  {
    id: 'ar14',                         // identificador único
    materia: 'Artes',                   // matéria
    tema: 'Modernismo nas artes visuais', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Unicamp (Comvest)',         // banca inspiradora
    enunciado: 'A exposição de Anita Malfatti (1917) e a Semana de Arte Moderna (1922) marcaram a arte brasileira porque:', // pergunta
    alternativas: [                     // opções
      'Copiaram a pintura colonial',
      'Introduziram o modernismo — cores fortes, formas distorcidas e valorização do Brasil — e romperam com o academicismo',
      'Proibiram a escultura',
      'Rejeitaram a cultura popular',
      'Voltaram ao barroco'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Anita Malfatti trouxe o expressionismo para o Brasil (escandalizou o público em 1917); a Semana de 22 consolidou a ruptura com a arte acadêmica. Tarsila, Di Cavalcanti e Oswald Goeldi foram os outros pilares da "invasão modernista".', // explicação
    dica: 'Sequência: Anita Malfatti escandaliza (1917) → Semana de 22 consolida → "Abaporu" de Tarsila (1928) vira ícone. Monteiro Lobato criticou Anita em 1917 e depois virou defensor — ironia famosa.', // pegadinha
    video: 'anita malfatti semana de 22 modernismo artes resumo' // busca no YouTube
  },
  {
    id: 'ar15',                         // identificador único
    materia: 'Artes',                   // matéria
    tema: 'Bauhaus e design',           // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Unicamp (Comvest)',         // banca inspiradora
    enunciado: 'A escola Bauhaus (Alemanha, 1919-1933) revolucionou o design ao defender que:', // pergunta
    alternativas: [                     // opções
      'O ornamento é essencial',
      'A forma deve seguir a função — design funcional, simples e produzível em série',
      'A arte deve ser elitista',
      'O artesanato deve desaparecer',
      'A cor deve ser proibida'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Bauhaus = "forma segue função": o objeto bonito é o que funciona bem, com linhas simples, sem ornamento supérfluo, feito para a indústria. É a base de todo o design moderno (móveis, tipografia, arquitetura).', // explicação
    dica: 'Herança da Bauhaus: o prédio sem decoração (funcionalista), a cadeira de tubo de aço, a tipografia limpa. Walter Gropius fundou; a escola fechou com os nazistas. O "menos é mais" vem dessa tradição.', // pegadinha
    video: 'bauhaus forma segue função design resumo' // busca no YouTube
  },
  {
    id: 'ar16',                         // identificador único
    materia: 'Artes',                   // matéria
    tema: 'Arte contemporânea — instalação', // assunto
    nivel: 'dificil',                   // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'As "penetráveis" e os "parangolés" de Hélio Oiticica são arte contemporânea porque:', // pergunta
    alternativas: [                     // opções
      'São pinturas de cavalete',
      'Convidam o espectador a atravessar, vestir e participar — a obra depende da ação do público',
      'São esculturas de mármore',
      'Reproduzem o Renascimento',
      'São só fotografias'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Hélio Oiticica fez a arte sair do suporte: os parangolés são capas/bandeiras que só "existem" vestidos e dançados; os penetráveis são espaços que o público atravessa. A obra precisa do CORPO do espectador — a "vivência" substitui o objeto.', // explicação
    dica: 'Arte contemporânea brasileira: Oiticica (participação corporal), Lygia Clark (sensorial), Adriana Varejão (azulejo e história). O ENEM valoriza a obra que exige a ação do espectador — não é quadro na parede.', // pegadinha
    video: 'hélio oiticica parangolé penetrável arte contemporânea' // busca no YouTube
  },

  /* ===================== EDUCAÇÃO FÍSICA — completando para 16 (ef05 a ef16) ===================== */
  {
    id: 'ef05',                         // identificador único
    materia: 'Educação Física',         // matéria
    tema: 'Aquecimento e alongamento',  // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Instituto AOCP',            // banca inspiradora
    enunciado: 'Aquecimento antes do exercício serve principalmente para:', // pergunta
    alternativas: [                     // opções
      'Emagrecer mais rápido',
      'Elevar a temperatura corporal, aumentar o fluxo sanguíneo e preparar músculos e articulações para o esforço',
      'Alongar os ossos',
      'Substituir o treino',
      'Relaxar após o treino'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O aquecimento prepara o corpo: eleva a temperatura, aumenta fluxo sanguíneo aos músculos, melhora a mobilidade articular e reduz o risco de lesão. O alongamento flexiona os músculos; o aquecimento prepara o corpo todo.', // explicação
    dica: 'A banca confunde os dois: AQUECIMENTO = prepara o corpo (antes, geral); ALONGAMENTO = flexiona músculos (antes e depois, local). Volta à calma = desaceleração final, não aquecimento.', // pegadinha
    video: 'aquecimento e alongamento diferença exercício resumo' // busca no YouTube
  },
  {
    id: 'ef06',                         // identificador único
    materia: 'Educação Física',         // matéria
    tema: 'Frequência cardíaca máxima', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'A fórmula mais comum para estimar a frequência cardíaca máxima em adultos é:', // pergunta
    alternativas: [                     // opções
      '100 + idade',
      '220 − idade',
      '180 − peso',
      '200 − altura',
      '120 + pulso'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'FCmáx = 220 − idade. Uma pessoa de 30 anos tem FCmáx estimada de 190 bpm. As zonas de treino usam percentuais desse valor (60-70% aeróbio leve, 70-80% moderado, 80-90% intenso).', // explicação
    dica: 'A CESPE testa a conta: com 40 anos, FCmáx = 180; zona de queima de gordura ≈ 60-70% = 108-126 bpm. A fórmula é estimativa — testes reais medem a FCmáx de verdade.', // pegadinha
    video: 'frequência cardíaca máxima 220 menos idade zona treino' // busca no YouTube
  },
  {
    id: 'ef07',                         // identificador único
    materia: 'Educação Física',         // matéria
    tema: 'Músculos agonista e antagonista', // assunto
    nivel: 'dificil',                   // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Fuvest / Unicamp (vestibular)', // banca inspiradora
    enunciado: 'Quando você flexiona o cotovelo (biceps curl), o bíceps é o agonista e o tríceps é o:', // pergunta
    alternativas: [                     // opções
      'Sinergista',
      'Antagonista — o músculo que se relaxa para permitir o movimento oposto',
      'Estabilizador',
      'Ligamento',
      'Tendão'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Agonista = o músculo que faz o movimento (bíceps flexiona); antagonista = o que relaxa e se opõe (tríceps estica). Quando você ESTICA o braço, os papéis invertem: tríceps é o agonista. Sinergista ajuda; estabilizador segura a postura.', // explicação
    dica: 'Pares agonista/antagonista que a Fuvest cobra: bíceps (flexiona) × tríceps (estende); quadríceps (estende joelho) × isquiotibiais (flexiona joelho); peitoral (empurra) × dorsais (puxa).', // pegadinha
    video: 'músculo agonista antagonista bíceps tríceps resumo' // busca no YouTube
  },
  {
    id: 'ef08',                         // identificador único
    materia: 'Educação Física',         // matéria
    tema: 'Regras do futebol',          // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Instituto AOCP',            // banca inspiradora
    enunciado: 'No futebol, o impedimento ocorre quando o atacante:', // pergunta
    alternativas: [                     // opções
      'Toca a bola com a mão',
      'Está à frente do penúltimo adversário no momento do passe, sem bola e mais perto do gol',
      'Chuta a bola para fora',
      'Faz gol de fora da área',
      'Dribla o goleiro'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Impedimento = o jogador está em posição irregular (à frente da linha do penúltimo defensor, sem bola) no instante em que o companheiro toca/passa a bola. Posição + participação no lance = falta marcada.', // explicação
    dica: 'Detalhes da regra que a AOCP testa: NÃO há impedimento em tiro de meta, lateral ou escanteio; estar em posição irregular só pune se o jogador participar do lance. VAR veio para revisar esses lances.', // pegadinha
    video: 'regra do impedimento futebol explicação simples' // busca no YouTube
  },
  {
    id: 'ef09',                         // identificador único
    materia: 'Educação Física',         // matéria
    tema: 'Regras do vôlei',            // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Instituto AOCP',            // banca inspiradora
    enunciado: 'No vôlei, cada equipe pode tocar a bola no máximo:', // pergunta
    alternativas: [                     // opções
      '1 vez',
      '2 vezes',
      '3 vezes (o bloqueio não conta)',
      '4 vezes',
      '5 vezes'
    ],
    correta: 2,                         // índice da certa
    explicacao: 'Regra dos 3 toques: a equipe tem até 3 contatos para passar a bola ao outro lado — em geral recepção (1), levantamento (2), ataque (3). O toque do bloqueio NÃO conta como um dos três.', // explicação
    dica: 'Números do vôlei que a AOCP cobra: 3 toques por equipe, 6 jogadores em quadra, set até 25 pontos (vantagem de 2), tie-break até 15. Rodízio a cada ponto conquistado no saque adversário.', // pegadinha
    video: 'regras do vôlei toques bloqueio pontos resumo' // busca no YouTube
  },
  {
    id: 'ef10',                         // identificador único
    materia: 'Educação Física',         // matéria
    tema: 'Sono e recuperação',         // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'O descanso e o sono são parte essencial do treino porque:', // pergunta
    alternativas: [                     // opções
      'O músculo só cresce dormindo, mas qualquer sono basta',
      'A recuperação muscular, a consolidação do treino e a liberação de hormônios anabólicos acontecem durante o sono profundo',
      'O sono queima gordura',
      'O descanso é perda de tempo',
      'O exercício noturno dispensa sono'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O treino "quebra" o músculo; o sono e o descanso é quando ele se reconstrói mais forte — síntese proteica e liberação de GH (hormônio do crescimento) no sono profundo. Sem descanso, o corpo não progride e entra em overtraining.', // explicação
    dica: 'O ENEM trata descanso como parte do treino, não luxo: microlesões musculares → reparação no sono → hipertrofia. Overtraining = efeito de treinar sem recuperar (queda de desempenho, lesões, insônia).', // pegadinha
    video: 'sono e recuperação muscular hipertrofia resumo' // busca no YouTube
  },
  {
    id: 'ef11',                         // identificador único
    materia: 'Educação Física',         // matéria
    tema: 'Hidratação no exercício',    // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Univesp (vestibular)',      // banca inspiradora
    enunciado: 'Durante exercício prolongado, a recomendação sobre hidratação é:', // pergunta
    alternativas: [                     // opções
      'Beber água só quando tiver sede intensa',
      'Beber líquidos antes, durante e depois — a sede é sinal tardio de desidratação',
      'Evitar qualquer líquido durante',
      'Beber só bebidas energéticas',
      'Reidratar só no dia seguinte'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A sede aparece quando você já está parcialmente desidratado — por isso a regra é beber regularmente antes, durante e depois do esforço, não esperar a sede. Em esforço > 1h, eletrólitos (sódio) ajudam.', // explicação
    dica: 'Sinais de desidratação que a Univesp cobra: urina escura, tontura, cãibras, pele seca, queda de desempenho. "Esperar a sede" é o erro clássico — ela é alarme tardio.', // pegadinha
    video: 'hidratação exercício físico desidratação resumo' // busca no YouTube
  },
  {
    id: 'ef12',                         // identificador único
    materia: 'Educação Física',         // matéria
    tema: 'Sedentarismo e obesidade',   // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'O sedentarismo é considerado fator de risco principalmente porque:', // pergunta
    alternativas: [                     // opções
      'Garante boa saúde',
      'Está associado a doenças cardiovasculares, diabetes tipo 2, obesidade e mortalidade prematura',
      'Fortalece os ossos',
      'Melhora a pressão arterial',
      'Não tem relação com doenças'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O sedentarismo (falta de atividade física) é fator de risco independente para infarto, AVC, diabetes tipo 2, obesidade, osteoporose e alguns cânceres — a OMS o classifica como um dos principais fatores de mortalidade global.', // explicação
    dica: 'O ENEM contextualiza: sedentarismo ≠ falta de esporte apenas — é padrão de vida (sentado o dia todo). Mesmo quem treina 1h e passa 10h sentado tem risco ("sedentário ativo"). Solução: mover-se ao longo do dia.', // pegadinha
    video: 'sedentarismo risco cardiovascular oms resumo' // busca no YouTube
  },
  {
    id: 'ef13',                         // identificador único
    materia: 'Educação Física',         // matéria
    tema: 'Esporte paralímpico',        // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Instituto AOCP',            // banca inspiradora
    enunciado: 'A classificação funcional nos esportes paralímpicos serve para:', // pergunta
    alternativas: [                     // opções
      'Separar os atletas por idade',
      'Agrupar competidores pelo grau e tipo de limitação, equilibrando a disputa',
      'Dar vantagem aos mais fortes',
      'Eliminar a competição',
      'Uniformizar o treino'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A classificação funcional é o "peso do boxe" paralímpico: agrupa atletas pelo impacto da deficiência na função esportiva — não pelo diagnóstico, mas pelo que a pessoa consegue fazer. Garante que a disputa seja justa.', // explicação
    dica: 'A AOCP testa o conceito: a classificação é FUNCIONAL (o que o corpo faz), não médica (qual é a doença). Nadador com paraplegia compete com quem tem limitação equivalente, não com quem tem a mesma doença.', // pegadinha
    video: 'classificação funcional esporte paralímpico resumo' // busca no YouTube
  },
  {
    id: 'ef14',                         // identificador único
    materia: 'Educação Física',         // matéria
    tema: 'Capoeira — cultura corporal', // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'A capoeira, patrimônio cultural imaterial brasileiro (UNESCO), nasceu:', // pergunta
    alternativas: [                     // opções
      'Na Europa medieval',
      'Entre os escravizados africanos no Brasil colonial — mistura de luta, dança, música e resistência',
      'Nos Estados Unidos',
      'Na Índia',
      'Como esporte olímpico'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A capoeira nasceu da resistência dos africanos escravizados no Brasil: a luta disfarçada de dança e música (berimbau, canto, roda) — expressão corporal que mistura jogo, luta e cultura afro-brasileira. Em 2014 a UNESCO a reconheceu como patrimônio imaterial.', // explicação
    dica: 'O ENEM enquadra a capoeira como cultura corporal + resistência: não é "esporte" no sentido europeu — é manifestação social. O berimbau comanda o jogo; a roda é o espaço ritual.', // pegadinha
    video: 'capoeira história patrimônio unesco cultura resumo' // busca no YouTube
  },
  {
    id: 'ef15',                         // identificador único
    materia: 'Educação Física',         // matéria
    tema: 'Ginástica artística x rítmica', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Instituto AOCP',            // banca inspiradora
    enunciado: 'A diferença entre ginástica artística e rítmica está em que a rítmica:', // pergunta
    alternativas: [                     // opções
      'Usa aparelhos fixos (barra, argolas)',
      'É disputada com aparelhos portáteis (corda, arco, bola, maças, fita) e elementos de dança',
      'É só para homens',
      'Não é esporte olímpico',
      'Usa piscina'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Artística = aparelhos fixos (solo, salto, barras, argolas, cavalo) — Rebeca Andrade é a referência. Rítmica = manejo de aparelhos portáteis (bola, fita, arco, maças, corda) com dança e flexibilidade — feminino no programa olímpico.', // explicação
    dica: 'Os 5 aparelhos da rítmica que a AOCP cobra: corda, arco, bola, maças e fita. A artística tem 6 aparelhos masculinos e 4 femininos. Rebeca Andrade é da ARTÍSTICA (solo e salto), não da rítmica.', // pegadinha
    video: 'ginástica artística rítmica diferença aparelhos resumo' // busca no YouTube
  },
  {
    id: 'ef16',                         // identificador único
    materia: 'Educação Física',         // matéria
    tema: 'Judô — origem e espírito',   // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Univesp (vestibular)',      // banca inspiradora
    enunciado: 'O judô foi criado no Japão por Jigoro Kano em 1882, baseado no princípio de:', // pergunta
    alternativas: [                     // opções
      'Força bruta e socos',
      'Usar a força do adversário contra ele (máxima eficiência) e o bem mútuo',
      'Autodefesa armada',
      'Luta de chão apenas',
      'Competição mortal'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Kano tirou as técnicas perigosas do jiu-jitsu e criou o "caminho da suavidade": seiryoku zenyo (melhor uso da energia — aproveitar a força do outro) e jita kyoei (prosperidade mútua). Brasil domina o judô olímpico: Aurélio Miguel, Sarah Menezes.', // explicação
    dica: 'Judô ("caminho suave") ≠ jiu-jitsu (lutas de chão, Brasil). Os dois princípios do Kano — eficiência e bem mútuo — são o que torna o judô filosofia além de esporte.', // pegadinha
    video: 'judô jigoro kano princípios resumo história' // busca no YouTube
  },

  /* ===================== FISIOLOGIA — completando para 16 (fs05 a fs16) ===================== */
  {
    id: 'fs05',                         // identificador único
    materia: 'Fisiologia',              // matéria
    tema: 'Sistema digestório',         // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'A absorção da maior parte dos nutrientes (açúcares, aminoácidos, vitaminas) acontece no:', // pergunta
    alternativas: [                     // opções
      'Estômago',
      'Intestino delgado — as vilosidades aumentam a superfície de absorção',
      'Intestino grosso',
      'Esôfago',
      'Fígado'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O intestino delgado é o órgão da absorção: suas vilosidades e microvilosidades multiplicam a superfície (uns 200 m²) e os nutrientes passam para o sangue. O estômago inicia a digestão da proteína; o grosso absorve água e forma fezes.', // explicação
    dica: 'Papéis do tubo digestivo que a banca troca: boca (amilase, começa o carboidrato) → estômago (ácido + pepsina, proteína) → delgado (enzimas + absorção) → grosso (água, vitaminas K, fezes).', // pegadinha
    video: 'intestino delgado absorção vilosidades digestão resumo' // busca no YouTube
  },
  {
    id: 'fs06',                         // identificador único
    materia: 'Fisiologia',              // matéria
    tema: 'Sistema respiratório',       // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Comvest (Unicamp)',         // banca inspiradora
    enunciado: 'A hematose — a troca de O2 e CO2 entre o ar e o sangue — ocorre nos:', // pergunta
    alternativas: [                     // opções
      'Brônquios',
      'Alvéolos pulmonares',
      'Traqueia',
      'Vértebras',
      'Artérias'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Os alvéolos são os saquinhos de ar onde acontece a hematose: O2 do ar difunde para o sangue dos capilares; CO2 vai do sangue para o ar. Milhões de alvéolos criam uma superfície de ~70 m² para a troca.', // explicação
    dica: 'A Unicamp desce o tubo: fossas nasais → faringe → laringe → traqueia → brônquios → bronquíolos → ALVÉOLOS (a troca). Só os alvéolos trocam gases; o resto é via de passagem.', // pegadinha
    video: 'alvéolos hematose troca gasosa pulmão resumo' // busca no YouTube
  },
  {
    id: 'fs07',                         // identificador único
    materia: 'Fisiologia',              // matéria
    tema: 'Sistema excretor — rim',     // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'A unidade funcional do rim, onde o sangue é filtrado e a urina é formada, chama-se:', // pergunta
    alternativas: [                     // opções
      'Neurônio',
      'Néfron',
      'Alvéolo',
      'Vilosidade',
      'Fibra'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O néfron é a "fábrica" do rim (cada rim tem ~1 milhão): o glomérulo filtra o sangue e os túbulos reabsorvem o que serve (água, glicose, sais) — o resto vira urina. Rim = filtro + balanceador de água e sais.', // explicação
    dica: 'A Vunesp testa o nome do filtro: néfron (não neurônio!). O glomérulo filtra; os túbulos reabsorvem; a uretra e os ureteres conduzem a urina — não filtram nada.', // pegadinha
    video: 'néfron rim filtração urina resumo vestibular' // busca no YouTube
  },
  {
    id: 'fs08',                         // identificador único
    materia: 'Fisiologia',              // matéria
    tema: 'Sistema endócrino — insulina', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'Após uma refeição rica em carboidrato, a glicose do sangue sobe. O hormônio que a baixa, fazendo-a entrar nas células, é:', // pergunta
    alternativas: [                     // opções
      'Adrenalina',
      'Insulina',
      'Glucagon',
      'Cortisol',
      'Tiroxina'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O pâncreas libera INSULINA quando a glicose sobe — ela abre a porta das células para a glicose entrar e baixa a taxa no sangue. O GLUCAGON faz o oposto (sobe a glicose no jejum). Diabetes tipo 1 = falta de insulina; tipo 2 = resistência a ela.', // explicação
    dica: 'Par antagônico do pâncreas: INSULINA (glucose para dentro da célula, baixa o sangue) × GLUCAGON (glucose do fígado para o sangue, sobe). Diabetes tipo 1 = produção falha; tipo 2 = célula não responde.', // pegadinha
    video: 'insulina glucagon pâncreas glicose diabetes resumo' // busca no YouTube
  },
  {
    id: 'fs09',                         // identificador único
    materia: 'Fisiologia',              // matéria
    tema: 'Sistema imune — anticorpos', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Unicamp (Comvest)',         // banca inspiradora
    enunciado: 'Os anticorpos são produzidos por:', // pergunta
    alternativas: [                     // opções
      'Hemácias',
      'Linfócitos B — células brancas que reconhecem o antígeno e fabricam anticorpos específicos',
      'Plaquetas',
      'Neurônios',
      'Células musculares'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Linfócitos B amadurecem e viram plasmócitos que fabricam anticorpos — proteínas em Y que se encaixam no antígeno específico como chave na fechadura. Os linfócitos T fazem a imunidade celular; as hemácias transportam oxigênio.', // explicação
    dica: 'Diferenças que a banca confunde: hemácia (vermelha) = leva O2; leucócito (branco) = defesa — linfócito B faz anticorpo, T coordena/destrói células; plaqueta = coagulação. Vacina "ensina" o B a fazer o anticorpo.', // pegadinha
    video: 'anticorpos linfócitos imunologia resumo vestibular' // busca no YouTube
  },
  {
    id: 'fs10',                         // identificador único
    materia: 'Fisiologia',              // matéria
    tema: 'Sistema nervoso — divisões', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Fuvest / Unicamp (vestibular)', // banca inspiradora
    enunciado: 'O sistema nervoso se divide em central e periférico. O central inclui:', // pergunta
    alternativas: [                     // opções
      'Apenas os nervos dos braços',
      'O encéfalo e a medula espinhal — os centros de processamento',
      'Só os sentidos',
      'Os músculos',
      'Os órgãos internos'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'SNC (sistema nervoso central) = encéfalo (cérebro, cerebelo, tronco) + medula espinhal — processa. SNP (periférico) = os nervos e gânglios que ligam o corpo ao SNC. A medula é a "autoestrada" entre corpo e cérebro.', // explicação
    dica: 'A Fuvest subdivide: SNC (cérebro+medula) vs SNP (nervos). Dentro do periférico, o autônomo (simpático — acelera) e parassimpático (calma) controlam órgãos sem você pensar.', // pegadinha
    video: 'sistema nervoso central periférico encéfalo medula resumo' // busca no YouTube
  },
  {
    id: 'fs11',                         // identificador único
    materia: 'Fisiologia',              // matéria
    tema: 'Sangue — componentes',       // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Univesp (vestibular)',      // banca inspiradora
    enunciado: 'O sangue é formado por plasma (líquido) e elementos figurados. As hemácias (glóbulos vermelhos) têm como função:', // pergunta
    alternativas: [                     // opções
      'Coagular',
      'Transportar oxigênio (via hemoglobina) e gás carbônico',
      'Produzir anticorpos',
      'Digerir bactérias',
      'Formar a medula óssea'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Hemácias = transporte de O2 (a hemoglobina com ferro captura o oxigênio nos pulmões e solta nos tecidos) e parte do CO2 de volta. Leucócitos = defesa; plaquetas = coagulação; plasma = o líquido que carrega tudo.', // explicação
    dica: 'Quadro de prova: hemácia = vermelha = O2; leucócito = branca = defesa; plaqueta = fragmento = coagula. A anemia é falta de hemácias/hemoglobina — por isso a pessoa fica cansada.', // pegadinha
    video: 'componentes do sangue hemácias leucócitos plaquetas resumo' // busca no YouTube
  },
  {
    id: 'fs12',                         // identificador único
    materia: 'Fisiologia',              // matéria
    tema: 'Sistema esquelético',        // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'FATEC/ETEC (vestibular)',   // banca inspiradora
    enunciado: 'Além de dar forma e proteger órgãos, o osso tem a função de:', // pergunta
    alternativas: [                     // opções
      'Produzir calor',
      'Fabricar células do sangue na medula óssea vermelha',
      'Bombear o sangue',
      'Filtrar toxinas',
      'Produzir saliva'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A medula óssea VERMELHA, dentro dos ossos, é onde nascem hemácias, leucócitos e plaquetas (hematopoiese) — o osso é a "fábrica de sangue". A medula AMARELA armazena gordura.', // explicação
    dica: 'Ossos têm 5 funções de prova: sustentação, proteção, movimento (alavanca), hematopoiese (medula vermelha) e reserva de cálcio/fósforo. Osteoporose = perda de cálcio → ossos porosos e frágeis.', // pegadinha
    video: 'sistema esquelético ossos medula hematopoiese resumo' // busca no YouTube
  },
  {
    id: 'fs13',                         // identificador único
    materia: 'Fisiologia',              // matéria
    tema: 'Tipos de músculo',           // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Vunesp',                    // banca inspiradora
    enunciado: 'O músculo do coração (miocárdio) pertence ao tipo:', // pergunta
    alternativas: [                     // opções
      'Esquelético — voluntário e estriado',
      'Cardíaco — estriado e involuntário',
      'Liso — involuntário e liso',
      'Tendíneo',
      'Adiposo'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Três tipos de músculo: esquelético (voluntário, estriado — move os ossos), cardíaco (involuntário, estriado — só no coração, nunca descansa) e liso (involuntário, não estriado — órgãos internos, vasos, intestino).', // explicação
    dica: 'Matriz da Vunesp: esquelético = estriado+voluntário; cardíaco = estriado+involuntário; liso = liso+involuntário. O coração é o único lugar do músculo cardíaco — por isso infarto é tão grave.', // pegadinha
    video: 'tipos de músculo esquelético cardíaco liso resumo' // busca no YouTube
  },
  {
    id: 'fs14',                         // identificador único
    materia: 'Fisiologia',              // matéria
    tema: 'Sistema reprodutor — hormônios', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Comvest (Unicamp)',         // banca inspiradora
    enunciado: 'Na mulher, os principais hormônios sexuais produzidos pelos ovários são:', // pergunta
    alternativas: [                     // opções
      'Insulina e glucagon',
      'Estrogênio e progesterona — controlam o ciclo menstrual e a gravidez',
      'Adrenalina e cortisol',
      'Melatonina e tiroxina',
      'Testosterona e dopamina'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Estrogênio (desenvolve características femininas, 1ª metade do ciclo) e progesterona (prepara o útero para a gravidez, 2ª metade) são produzidos pelos ovários. FSH e LH da hipófise comandam o ciclo.', // explicação
    dica: 'A Unicamp amarra a dança hormonal: FSH (hipófise) amadurece o óvulo → ovários liberam estrogênio → LH dispara a ovulação → progesterona prepara o útero. Testosterona é principalmente masculina (testículos).', // pegadinha
    video: 'hormônios femininos estrogênio progesterona ciclo resumo' // busca no YouTube
  },
  {
    id: 'fs15',                         // identificador único
    materia: 'Fisiologia',              // matéria
    tema: 'Sentidos — visão',           // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'Na visão, a luz atravessa a córnea e o cristalino e forma a imagem invertida na:', // pergunta
    alternativas: [                     // opções
      'Íris',
      'Retina — onde cones e bastonetes transformam a luz em impulso nervoso',
      'Pupila',
      'Córnea',
      'Esclera'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A RETINA é a "tela" do olho: tem fotorreceptores (cones = cor e detalhe; bastonetes = luz fraca) que convertem a luz em sinal elétrico para o nervo óptico levar ao cérebro — que revira a imagem de cabeça para cima.', // explicação
    dica: 'Percurso da luz: córnea → pupila (abertura) → cristalino (lente que foca) → retina (sensores). Miopia = imagem se forma antes da retina (não enxerga longe); hipermetropia = atrás (não enxerga perto).', // pegadinha
    video: 'retina cones bastonetes visão miopia resumo' // busca no YouTube
  },
  {
    id: 'fs16',                         // identificador único
    materia: 'Fisiologia',              // matéria
    tema: 'Pele — camadas e funções',   // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Univesp (vestibular)',      // banca inspiradora
    enunciado: 'A pele, maior órgão do corpo, tem como funções:', // pergunta
    alternativas: [                     // opções
      'Só embelezar',
      'Barreira contra patógenos, regulação de temperatura (suor), sensibilidade ao tato e produção de vitamina D',
      'Produzir sangue',
      'Respirar como os pulmões',
      'Armazenar ar'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A pele é multifuncional: barreira física (1ª linha de defesa), termorreguladora (suor esfria, calafrio aquece), sensorial (tato, dor, temperatura) e produz vitamina D com a luz solar. Epiderme (externa) + derme (vasos, nervos, glândulas).', // explicação
    dica: 'A Univesp lista as funções: proteção, termorregulação, sensação, vitamina D e impermeabilização. Camadas: epiderme (fora, queratina), derme (meio, vasos/nervos), hipoderme (embaixo, gordura/isolante).', // pegadinha
    video: 'pele epiderme derme hipoderme funções resumo' // busca no YouTube
  },

  /* ===================== FILOSOFIA — completando para 16 (fl05 a fl16) ===================== */
  {
    id: 'fl05',                         // identificador único
    materia: 'Filosofia',               // matéria
    tema: 'Platão — dois mundos',       // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Unicamp (Comvest)',         // banca inspiradora
    enunciado: 'Para Platão, o mundo que percebemos pelos sentidos é:', // pergunta
    alternativas: [                     // opções
      'O mundo verdadeiro',
      'O mundo sensível — cópia imperfeita do mundo inteligível das ideias',
      'O único que existe',
      'O mundo das formas',
      'Igual ao mundo das ideias'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Platão divide a realidade: mundo SENSÍVEL (o que vemos e tocamos — imperfeito, mutável, ilusão) e mundo INTELIGÍVEL (as ideias/formas perfeitas — a verdade, acessível só pela razão). A cadeira real é cópia da "ideia de cadeira".', // explicação
    dica: 'Dualismo platônico: sensível (baixo, mutável) = opinião (doxa); inteligível (alto, perfeito) = conhecimento (episteme). Aristóteles, seu aluno, "desceu" as ideias para dentro das coisas.', // pegadinha
    video: 'platão mundo sensível inteligível teoria das ideias' // busca no YouTube
  },
  {
    id: 'fl06',                         // identificador único
    materia: 'Filosofia',               // matéria
    tema: 'Aristóteles — ética do meio-termo', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'Para Aristóteles, a virtude ética é o meio-termo entre dois vícios. A coragem, por exemplo, é o equilíbrio entre:', // pergunta
    alternativas: [                     // opções
      'Mentira e verdade',
      'Covardia e temeridade — entre não enfrentar nada e ser imprudente',
      'Amor e ódio',
      'Riqueza e pobreza',
      'Silêncio e grito'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A ética aristotélica busca a eudaimonia (felicidade/florescimento) pela virtude — e a virtude é o meio-termo entre excesso e falta. Coragem = entre covardia (falta) e temeridade (excesso); generosidade = entre avareza e prodigalidade.', // explicação
    dica: 'Pares que o ENEM cobra: coragem (covardia × temeridade), generosidade (avareza × esbanjamento), temperança (insensibilidade × libertinagem). A virtude NÃO é extremo — é equilíbrio.', // pegadinha
    video: 'aristóteles ética meio-termo virtude resumo' // busca no YouTube
  },
  {
    id: 'fl07',                         // identificador único
    materia: 'Filosofia',               // matéria
    tema: 'Descartes — cogito',         // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Fuvest / Unicamp (vestibular)', // banca inspiradora
    enunciado: '"Penso, logo existo" (cogito ergo sum) de Descartes é a certeza que resistiu à:', // pergunta
    alternativas: [                     // opções
      'Magia',
      'Dúvida metódica — duvidar de tudo até sobrar o indubitável: eu duvido, logo penso, logo existo',
      'Fé cega',
      'Ciência experimental',
      'Tradição'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Descartes duvida de TUDO (sentidos, sonhos, gênio maligno) procurando uma verdade que não seja contestável — e acha: "se estou pensando/duvidando, eu existo". O cogito é o ponto de partida do racionalismo.', // explicação
    dica: 'Racionalismo x Empirismo: Descartes (razão/dúvida, "penso") × Locke e Hume (sensação/experiência, "o conhecimento vem dos sentidos"). A Fuvest pede essa oposição com frequência.', // pegadinha
    video: 'descartes cogito penso logo existo dúvida metódica' // busca no YouTube
  },
  {
    id: 'fl08',                         // identificador único
    materia: 'Filosofia',               // matéria
    tema: 'Empirismo',                  // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'Para os empiristas (Locke, Hume), o conhecimento humano vem de:', // pergunta
    alternativas: [                     // opções
      'Deus',
      'Da experiência sensorial — a mente nasce uma "tábula rasa" que a experiência escreve',
      'Das ideias inatas',
      'Da geometria',
      'Da revelação'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Empirismo: não existem ideias inatas — a mente nasce como uma folha em branco (tabula rasa) e a experiência pelos sentidos a preenche. O conhecimento se constrói do que vimos, ouvimos, sentimos — não de verdades dadas.', // explicação
    dica: 'O opositor do empirismo é o racionalismo (Descartes): razão e ideias inatas x sentidos e experiência. "Inato" = nasce com você (racionalista); "adquirido" = vem da experiência (empirista).', // pegadinha
    video: 'empirismo locke hume tabula rasa experiência resumo' // busca no YouTube
  },
  {
    id: 'fl09',                         // identificador único
    materia: 'Filosofia',               // matéria
    tema: 'Nietzsche — vontade de potência', // assunto
    nivel: 'dificil',                   // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Fuvest / Unicamp (vestibular)', // banca inspiradora
    enunciado: 'Quando Nietzsche diz "Deus está morto", ele quer dizer que:', // pergunta
    alternativas: [                     // opções
      'Deus foi assassinado',
      'Os valores tradicionais e religiosos perderam o centro da cultura ocidental — e cabe ao homem criar seus próprios valores',
      'A ciência provou que Deus não existe',
      'As igrejas fecharam',
      'O mal venceu'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Nietzsche não celebra a morte literal de Deus — diagnostica que a moral e a religião tradicionais deixaram de ser fundamento. Com o vácuo, o homem deve criar seus valores (o "super-homem" = quem se torna criador de valores, não seguidor).', // explicação
    dica: 'Conceitos de Nietzsche em prova: "Deus está morto" (crise dos valores), vontade de potência (impulso criador da vida), eterno retorno, moral de senhores x de escravos. O "super-homem" não é super-herói — é o criador de valores.', // pegadinha
    video: 'nietzsche deus está morto vontade de potência resumo' // busca no YouTube
  },
  {
    id: 'fl10',                         // identificador único
    materia: 'Filosofia',               // matéria
    tema: 'Existencialismo — Sartre',   // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'Para Sartre, "a existência precede a essência" significa que o homem:', // pergunta
    alternativas: [                     // opções
      'Nasce com destino traçado por Deus',
      'Nasce primeiro e depois se define pelas suas escolhas — somos o que fazemos de nós, condenados a ser livres',
      'Não tem liberdade',
      'É determinado pela genética',
      'Copia a essência dos outros'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O existencialismo de Sartre: a caneta tem essência antes de existir (foi feita para escrever); o homem não — ele existe primeiro e cria sua essência pelas escolhas. Liberdade é condenação: somos responsáveis por tudo que somos.', // explicação
    dica: 'A diferença existencialista: essência→existência (objeto fabricado) x existência→essência (homem). "Condenado a ser livre" = não pode escapar da escolha. Simone de Beauvoir e Camus compartilham o movimento.', // pegadinha
    video: 'sartre existência precede essência existencialismo resumo' // busca no YouTube
  },
  {
    id: 'fl11',                         // identificador único
    materia: 'Filosofia',               // matéria
    tema: 'Contrato social',            // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'Os contratualistas explicam a origem do Estado como:', // pergunta
    alternativas: [                     // opções
      'Criação divina',
      'Um pacto — os indivíduos abrem mão de parte da liberdade natural em troca de segurança e direitos',
      'Conquista militar',
      'Acidente histórico',
      'Evolução biológica'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Contratualismo = o Estado nasce de um contrato: saímos do "estado de natureza" e entregamos poder ao soberano/leis em troca de proteção. Hobbes (medo da guerra), Locke (direitos naturais) e Rousseau (vontade geral) deram versões diferentes.', // explicação
    dica: 'Os três em comparação: HOBBES = homem é lobo do homem, precisa de Estado absoluto (Leviatã); LOCKE = direitos naturais (vida, liberdade, propriedade) — pai do liberalismo; ROUSSEAU = homem nasce bom, sociedade corrompe — vontade geral.', // pegadinha
    video: 'contratualistas hobbes locke rousseau estado resumo' // busca no YouTube
  },
  {
    id: 'fl12',                         // identificador único
    materia: 'Filosofia',               // matéria
    tema: 'Maquiavel — razão de estado', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Unicamp (Comvest)',         // banca inspiradora
    enunciado: '"O Príncipe" de Maquiavel ficou famoso por defender que o governante:', // pergunta
    alternativas: [                     // opções
      'Deve ser sempre gentil',
      'Pode usar meios moralmente questionáveis para garantir o poder e a ordem do Estado — "os fins justificam os meios"',
      'Deve abdicar do poder',
      'Deve ser escolhido por sorteio',
      'Deve ignorar a guerra'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Maquiavel separou a política da moral: para manter o Estado, o príncipe pode usar a força e a astúcia — "é melhor ser temido que amado, se não der para ser os dois". A eficácia do poder vale mais que a aparência de virtude.', // explicação
    dica: 'Cuidado: "maquiavélico" virou sinônimo de manipulador, mas Maquiavel descrevia a realidade do poder — não pregava maldade. "Virtù" (habilidade do príncipe) × "fortuna" (sorte) é o par que a Unicamp cobra.', // pegadinha
    video: 'maquiavel o príncipe razão de estado resumo' // busca no YouTube
  },
  {
    id: 'fl13',                         // identificador único
    materia: 'Filosofia',               // matéria
    tema: 'Estoicismo',                 // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'O estoicismo (Zenão, Epicteto, Marco Aurélio) ensina que a sabedoria é:', // pergunta
    alternativas: [                     // opções
      'Evitar qualquer prazer',
      'Distinguir o que depende de nós (nossa reação) do que não depende (o externo) — e aceitar serenamente o segundo',
      'Não sentir nada',
      'Acumular riqueza',
      'Lutar contra tudo'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O estoico divide o mundo em "o que eu controlo" (minhas opiniões, reações, escolhas) e "o que não controlo" (clima, morte, opinião alheia). A paz vem de não desperdiçar energia no incontrolável e cultivar a virtude no controlável.', // explicação
    dica: 'A "dicotomia do controle" é o mantra estoico — não é apatia nem frieza, é foco no que depende de você. Marco Aurélio (imperador romano) escreveu "Meditações" como diário estoico.', // pegadinha
    video: 'estoicismo dicotomia do controle marco aurélio resumo' // busca no YouTube
  },
  {
    id: 'fl14',                         // identificador único
    materia: 'Filosofia',               // matéria
    tema: 'Utilitarismo',               // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Fuvest / Unicamp (vestibular)', // banca inspiradora
    enunciado: 'O utilitarismo de Bentham e Mill julga a moralidade de uma ação pelo:', // pergunta
    alternativas: [                     // opções
      'Dever universal',
      'Resultado — a ação certa é a que produz a maior felicidade para o maior número',
      'Respeito às tradições',
      'Mandamento divino',
      'Razão pura'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Utilitarismo = ética da consequência: a ação moralmente certa é a que gera maior utilidade/felicidade para o maior número de pessoas. "O maior bem para o maior número" é o critério — não a intenção, mas o resultado.', // explicação
    dica: 'Oposição da Fuvest: UTILITARISMO (consequência, Bentham/Mill) × KANT (dever, intenção). O utilitarista sacrificaria poucos para salvar muitos; o kantiano diria que pessoas não são meios.', // pegadinha
    video: 'utilitarismo bentham mill maior felicidade resumo' // busca no YouTube
  },
  {
    id: 'fl15',                         // identificador único
    materia: 'Filosofia',               // matéria
    tema: 'Ceticismo',                  // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Univesp (vestibular)',      // banca inspiradora
    enunciado: 'A atitude cética, na filosofia, consiste em:', // pergunta
    alternativas: [                     // opções
      'Aceitar tudo sem crítica',
      'Suspender o juízo e questionar a possibilidade de um conhecimento absoluto e certo',
      'Negar a existência do mundo',
      'Acreditar em tudo que se lê',
      'Seguir a tradição sem questionar'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O ceticismo (Pirro, depois Hume) suspende o juízo: diante da dificuldade de ter certezas absolutas, o cético não afirma nem nega — investiga e fica em aberto. É uma postura crítica, não pessimismo.', // explicação
    dica: 'Ceticismo ≠ negar tudo: o cético SUSPENDE o juízo (não decide), enquanto o negacionista nega sem prova. Na prática do vestibular, ceticismo = "duvido que tenhamos certeza absoluta" — atitude saudável de questionar.', // pegadinha
    video: 'ceticismo filosofia suspensão do juízo resumo' // busca no YouTube
  },
  {
    id: 'fl16',                         // identificador único
    materia: 'Filosofia',               // matéria
    tema: 'Bioética',                   // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'A bioética, ramo da filosofia aplicada, debate questões como:', // pergunta
    alternativas: [                     // opções
      'Impostos sobre remédios',
      'Aborto, eutanásia, pesquisa com células-tronco, experimentos em humanos e distribuição de recursos na saúde',
      'Agricultura orgânica',
      'Direito do trabalho',
      'História da medicina'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A bioética aplica a filosofia moral aos dilemas da vida e da saúde: aborto, eutanásia, células-tronco, pesquisa em humanos, transplantes, recursos escassos no SUS. Os princípios clássicos: autonomia, beneficência, não-maleficência e justiça.', // explicação
    dica: 'Os 4 princípios da bioética de prova: autonomia (a pessoa decide sobre seu corpo), beneficência (fazer o bem), não-maleficência (não causar dano), justiça (distribuir com equidade). O ENEM contextualiza com o SUS.', // pegadinha
    video: 'bioética princípios aborto eutanásia resumo vestibular' // busca no YouTube
  },

  /* ===================== SOCIOLOGIA — completando para 16 (so05 a so16) ===================== */
  {
    id: 'so05',                         // identificador único
    materia: 'Sociologia',              // matéria
    tema: 'Weber — ação social e dominação', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Unicamp (Comvest)',         // banca inspiradora
    enunciado: 'Para Max Weber, uma ação é "social" quando:', // pergunta
    alternativas: [                     // opções
      'Envolve várias pessoas',
      'Tem sentido para quem age e é orientada pelo comportamento dos outros',
      'Ocorre na rua',
      'Tem lei que a regule',
      'É impulsiva'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Para Weber, ação social = ação dotada de SENTIDO para o agente e orientada pelos outros. Chorar sozinho por tristeza não é ação social; chorar na frente dos outros para comover é — tem sentido e mira o outro.', // explicação
    dica: 'Os 4 tipos de ação de Weber: racional com relação a fins (meio mais eficaz), racional com relação a valores (convicção), afetiva (emoção) e tradicional (costume). A moderna é a racional-fins.', // pegadinha
    video: 'max weber ação social tipos resumo vestibular' // busca no YouTube
  },
  {
    id: 'so06',                         // identificador único
    materia: 'Sociologia',              // matéria
    tema: 'Comte — positivismo',        // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'O positivismo de Auguste Comte, pai da sociologia, defendia que o conhecimento deveria ser:', // pergunta
    alternativas: [                     // opções
      'Baseado na fé',
      'Científico — observável, verificável e ordenado pela lei do progresso',
      'Místico',
      'Traduzido dos mitos',
      'Intuitivo apenas'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Comte criou a palavra "sociologia" e propôs que ela fosse ciência positiva: observável, verificável, que descobre leis da sociedade como a física descobre leis da natureza. "Ordem e progresso" (na bandeira do Brasil) é lema positivista.', // explicação
    dica: 'Lei dos três estados de Comte: teológico (deuses explicam) → metafísico (abstrações) → positivo (ciência/fatos). A bandeira brasileira tem "Ordem e Progresso" porque os republicanos admiravam Comte.', // pegadinha
    video: 'auguste comte positivismo lei dos três estados resumo' // busca no YouTube
  },
  {
    id: 'so07',                         // identificador único
    materia: 'Sociologia',              // matéria
    tema: 'Socialização',               // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'O processo pelo qual a pessoa aprende as normas, valores e costumes de sua sociedade desde criança chama-se:', // pergunta
    alternativas: [                     // opções
      'Evolução biológica',
      'Socialização',
      'Industrialização',
      'Urbanização',
      'Burocratização'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Socialização = aprendizado do ser social: a criança absorve língua, valores, papéis e normas pela família (primária), escola, amigos e mídia (secundária). É como o "nós" vira o que somos — não nascemos sociais, tornamo-nos.', // explicação
    dica: 'Primária (infância, família — forma a identidade) x secundária (escola, trabalho, grupos — especializa). Feral children (crianças selvagens) são a prova extrema: sem socialização, não se desenvolve a humanidade plena.', // pegadinha
    video: 'socialização primária secundária sociologia resumo' // busca no YouTube
  },
  {
    id: 'so08',                         // identificador único
    materia: 'Sociologia',              // matéria
    tema: 'Estratificação e mobilidade', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Comvest (Unicamp)',         // banca inspiradora
    enunciado: 'Mobilidade social ascendente ocorre quando:', // pergunta
    alternativas: [                     // opções
      'Uma pessoa fica mais rica na mesma profissão',
      'Uma pessoa muda de posição na hierarquia social para um status superior',
      'A população envelhece',
      'O país cresce',
      'Alguém muda de cidade'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Mobilidade social = mudança de posição na estratificação: o filho de operário que vira médico subiu (ascendente); quem perde status desce (descendente). Estratificação = a hierarquia de classes; mobilidade = mover-se nela.', // explicação
    dica: 'Tipos que a Unicamp compara: ascendente (sobe) × descendente (desce); intergeracional (entre gerações — filho de faxineiro vira juiz) × intrageracional (na vida da pessoa). Castas (Índia) = sistema fechado, sem mobilidade.', // pegadinha
    video: 'mobilidade social estratificação sociologia resumo' // busca no YouTube
  },
  {
    id: 'so09',                         // identificador único
    materia: 'Sociologia',              // matéria
    tema: 'Instituições sociais',       // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Univesp (vestibular)',      // banca inspiradora
    enunciado: 'Família, escola, igreja e Estado são chamados de instituições sociais porque:', // pergunta
    alternativas: [                     // opções
      'São prédios grandes',
      'São estruturas duradouras que organizam o comportamento e transmitem papéis e normas',
      'São empresas',
      'São ilegais',
      'Mudam todos os dias'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Instituição social = padrão estável e duradouro de relações que organiza a vida coletiva: a família socializa, a escola ensina, a igreja dá sentido, o Estado governa. Elas persistem além das pessoas que passam por elas.', // explicação
    dica: 'A instituição não é o prédio nem as pessoas — é o CONJUNTO de regras e papéis que se mantém. A "escola" como instituição existe mesmo que todos os alunos troquem todo ano.', // pegadinha
    video: 'instituições sociais família escola estado sociologia' // busca no YouTube
  },
  {
    id: 'so10',                         // identificador único
    materia: 'Sociologia',              // matéria
    tema: 'Movimentos sociais',         // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'Os movimentos sociais (sem-terra, negro, feminista, ambientalista) se caracterizam por:', // pergunta
    alternativas: [                     // opções
      'Ação individual de cada cidadão',
      'Ação coletiva organizada para pressionar por mudanças sociais e direitos',
      'Ter sempre partido político',
      'Usar só a violência',
      'Ser instituições do Estado'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Movimento social = ação coletiva fora das instituições formais que luta por demandas comuns (terra, igualdade racial, direito das mulheres, ambiente). Agem por pressão pública, protesto e mobilização — não são o Estado nem partidos.', // explicação
    dica: 'O ENEM diferencia: movimento social (sociedade civil pressionando, MST, Fridays for Future) × partido político (busca o poder estatal) × ONG (organização formal). O movimento pode virar partido, mas nasce da base.', // pegadinha
    video: 'movimentos sociais sociologia exemplos resumo' // busca no YouTube
  },
  {
    id: 'so11',                         // identificador único
    materia: 'Sociologia',              // matéria
    tema: 'Cultura — material e imaterial', // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Univesp (vestibular)',      // banca inspiradora
    enunciado: 'Os elementos da cultura de um povo se dividem em material e imaterial. É exemplo de cultura IMATERIAL:', // pergunta
    alternativas: [                     // opções
      'Uma igreja colonial',
      'O frevo, a capoeira e os saberes tradicionais',
      'Um monumento histórico',
      'Um prédio antigo',
      'Um museu'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Cultura material = os objetos físicos (monumentos, utensílios, prédios); imaterial = os saberes, festas, músicas, rituais e técnicas que se passam de geração em geração (frevo, capoeira, acarajé, festas juninas). A UNESCO protege os dois.', // explicação
    dica: 'Exemplos de patrimônio imaterial brasileiro: frevo, capoeira, acarajé das baianas, feira de Caruaru, ofício das baianas de acarajé, Círio de Nazaré. Material: igrejas, centros históricos, obras.', // pegadinha
    video: 'cultura material imaterial patrimônio exemplos resumo' // busca no YouTube
  },
  {
    id: 'so12',                         // identificador único
    materia: 'Sociologia',              // matéria
    tema: 'Globalização',               // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'A globalização contemporânea é marcada principalmente por:', // pergunta
    alternativas: [                     // opções
      'O isolamento dos países',
      'A integração acelerada de economias, culturas e fluxos (pessoas, capitais, informação) entre regiões',
      'O fim das fronteiras físicas',
      'A volta ao feudalismo',
      'A produção só local'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Globalização = integração dos mercados, culturas e pessoas por tecnologia (internet, transporte) — a produção fragmentada entre países, a cultura circulando e as crises se espalhando. "Aldeia global" (McLuhan) resume: tudo conectado.', // explicação
    dica: 'O ENEM mostra as duas faces: globalização aproxima (comunicação, comércio) E acentua desigualdades (riqueza concentrada, periferia explorada). Nem é boa nem ruim — é processo com efeitos contraditórios.', // pegadinha
    video: 'globalização características efeitos sociologia resumo' // busca no YouTube
  },
  {
    id: 'so13',                         // identificador único
    materia: 'Sociologia',              // matéria
    tema: 'Classe social',              // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Comvest (Unicamp)',         // banca inspiradora
    enunciado: 'A diferença entre "classe" (Marx) e "estamento" (Weber) é que a classe se define pela:', // pergunta
    alternativas: [                     // opções
      'Cor da pele',
      'Posição na produção econômica — o estamento inclui estilo de vida e prestígio social',
      'Religião',
      'Região do país',
      'Idade'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Para Marx, classe = posição na produção (quem possui os meios = burguesia; quem só tem o trabalho = proletariado). Weber ampliou: além da economia, há ESTAMENTO (prestígio, estilo de vida — um médico rico x um pequeno comerciante rico têm classes iguais, estamentos diferentes) e partido (poder político).', // explicação
    dica: 'Marx = economia decide a classe; Weber = três dimensões (classe economia + estamento prestígio + partido poder). Um milionário sem estudo pode ter classe alta e estamento médio — a Unicamp adora essa distinção.', // pegadinha
    video: 'classe social marx estamento weber diferença resumo' // busca no YouTube
  },
  {
    id: 'so14',                         // identificador único
    materia: 'Sociologia',              // matéria
    tema: 'Identidade social',          // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'A identidade social de uma pessoa se constrói principalmente por:', // pergunta
    alternativas: [                     // opções
      'Genética pura',
      'Interação social — a pessoa se reconhece pelos grupos a que pertence e pelo olhar dos outros',
      'Destino',
      'Vontade divina',
      'Isolamento'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A identidade não nasce pronta — se constrói na interação: quem sou eu depende de como os outros me veem e dos grupos a que pertenço (família, nação, gênero, religião). "Eu" é sempre social — sou o que o outro me permite ser.', // explicação
    dica: 'O "eu" de Charles Cooley (espelho social): imaginamos como os outros nos veem e nos moldamos. Identidade nacional, de gênero, de classe — todas construídas socialmente, não naturais.', // pegadinha
    video: 'identidade social construção sociologia resumo' // busca no YouTube
  },
  {
    id: 'so15',                         // identificador único
    materia: 'Sociologia',              // matéria
    tema: 'Solidariedade mecânica x orgânica', // assunto
    nivel: 'dificil',                   // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Fuvest / Unicamp (vestibular)', // banca inspiradora
    enunciado: 'Para Durkheim, a sociedade moderna se mantém unida por "solidariedade orgânica", que é:', // pergunta
    alternativas: [                     // opções
      'A semelhança entre todos os membros',
      'A interdependência da divisão do trabalho — cada um depende da função especializada do outro',
      'A força da religião',
      'A proximidade territorial',
      'O parentesco'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Solidariedade MECÂNICA (sociedades simples): união pela SEMELHANÇA — todos parecidos, mesma religião. ORGÂNICA (moderna): união pela DIFERENÇA e interdependência — você precisa do médico, do padeiro, do motorista porque cada um faz uma coisa.', // explicação
    dica: 'O nome engana: "orgânica" é a moderna (como órgãos diferentes formando um corpo); "mecânica" é a antiga (peças iguais). Padrões: mecânica = direito repressivo (punir quem quebra); orgânica = direito restitutivo (reparar o dano).', // pegadinha
    video: 'durkheim solidariedade mecânica orgânica resumo' // busca no YouTube
  },
  {
    id: 'so16',                         // identificador único
    materia: 'Sociologia',              // matéria
    tema: 'Cidadania',                  // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'A cidadania plena inclui os direitos:', // pergunta
    alternativas: [                     // opções
      'Apenas civis (ir e vir)',
      'Civis (liberdade), políticos (votar e ser votado) e sociais (saúde, educação, trabalho)',
      'Só políticos',
      'Apenas econômicos',
      'Somente os de consumo'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Marshall classificou a cidadania em três dimensões: direitos CIVIS (liberdade individual, propriedade, justiça), POLÍTICOS (voto, participação) e SOCIAIS (saúde, educação, trabalho, bem-estar). Cidadania plena = os três juntos.', // explicação
    dica: 'O ENEM liga as três dimensões à história: civis (séc XVIII, iluminismo), políticos (XIX, sufrágio), sociais (XX, Estado de bem-estar). No Brasil, a CF/88 garante os três — mas a efetivação social segue o debate.', // pegadinha
    video: 'cidadania direitos civis políticos sociais marshall resumo' // busca no YouTube
  },

  /* ===================== BIOLOGIA — completando para 16 (b05 a b16) ===================== */
  {
    id: 'b05',                          // identificador único
    materia: 'Biologia',                // matéria
    tema: 'DNA — estrutura',            // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Unicamp (Comvest)',         // banca inspiradora
    enunciado: 'A molécula de DNA tem a forma de dupla hélice, e suas bases nitrogenadas se pareiam assim:', // pergunta
    alternativas: [                     // opções
      'A com C, T com G',
      'A com T e C com G (adenina-timina, citosina-guanina)',
      'A com G',
      'Todas se pareiam igual',
      'A com U'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A dupla hélice de DNA pareia as bases por pontes de hidrogênio: adenina com timina (A-T, duas pontes) e citosina com guanina (C-G, três pontes). A quantidade de A sempre iguala a de T, e a de C iguala a de G.', // explicação
    dica: 'Macete da Unicamp: A-T são par romântico; C-G são par romântico (e mais forte, 3 pontes de hidrogênio). No RNA, a timina (T) é trocada por uracila (U) — então no RNA A pareia com U.', // pegadinha
    video: 'dna dupla hélice bases nitrogenadas pareamento resumo' // busca no YouTube
  },
  {
    id: 'b06',                          // identificador único
    materia: 'Biologia',                // matéria
    tema: 'Proteínas',                  // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'As proteínas são formadas por cadeias de:', // pergunta
    alternativas: [                     // opções
      'Glicose',
      'Aminoácidos ligados por ligações peptídicas',
      'Ácidos graxos',
      'Nucleotídeos',
      'Vitaminas'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Proteína = sequência de aminoácidos unidos por ligações peptídicas. As funções são vastas: enzimas aceleram reações, anticorpos defendem, hormônios (insulina) regulam, colágeno estrutura, miosina contrai o músculo.', // explicação
    dica: 'O ENEM cobra a versatilidade: proteína pode ser enzima, hormônio, anticorpo, estrutura (queratina do cabelo) ou transporte (hemoglobina). E são "quebradas" na digestão para virar aminoácidos de novo.', // pegadinha
    video: 'proteínas aminoácidos ligação peptídica funções resumo' // busca no YouTube
  },
  {
    id: 'b07',                          // identificador único
    materia: 'Biologia',                // matéria
    tema: 'Mitocôndria — respiração celular', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Fuvest / Unicamp (vestibular)', // banca inspiradora
    enunciado: 'A mitocôndria é chamada de "casa de força da célula" porque é onde ocorre:', // pergunta
    alternativas: [                     // opções
      'A fotossíntese',
      'A respiração celular — a quebra da glicose com O2 para produzir ATP (energia)',
      'A síntese de proteínas',
      'A digestão celular',
      'A reprodução'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A respiração celular acontece na mitocôndria: a glicose é "queimada" com O2 produzindo ATP (a moeda de energia da célula), CO2 e água. Células com muito gasto (músculo, coração) têm muitas mitocôndrias.', // explicação
    dica: 'Par de organelas da Fuvest: MITOCÔNDRIA = respiração celular (produz ATP em todas as células); CLOROPLASTO = fotossíntese (só plantas/algas). As duas fazem energia, mas de jeitos opostos.', // pegadinha
    video: 'mitocôndria respiração celular atp resumo vestibular' // busca no YouTube
  },
  {
    id: 'b08',                          // identificador único
    materia: 'Biologia',                // matéria
    tema: 'Ecossistema',                // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'Um ecossistema é formado por:', // pergunta
    alternativas: [                     // opções
      'Apenas os animais',
      'Os fatores bióticos (seres vivos) e abióticos (água, luz, solo, clima) em interação',
      'Só as plantas',
      'Apenas o clima',
      'Somente o solo'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Ecossistema = comunidade biótica (produtores, consumidores, decompositores) + fatores abióticos (água, luz, temperatura, solo, pH) interagindo em equilíbrio. Um lago, uma floresta, um aquário são exemplos.', // explicação
    dica: 'Hierarquia da ecologia do ENEM: indivíduo → população → comunidade → ecossistema → biosfera. "Biótico" = vivo; "abiótico" = não vivo (água, luz, solo).', // pegadinha
    video: 'ecossistema fatores bióticos abióticos resumo' // busca no YouTube
  },
  {
    id: 'b09',                          // identificador único
    materia: 'Biologia',                // matéria
    tema: 'Eutrofização',               // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'A eutrofização de um lago — excesso de nutrientes, em geral por esgoto e fertilizante — causa:', // pergunta
    alternativas: [                     // opções
      'Água cristalina',
      'Proliferação de algas, morte delas por apodrecimento e consumo do oxigênio — matando os peixes',
      'Aumento da biodiversidade',
      'Purisma da água',
      'Aumento do oxigênio'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Nutriente demais (fósforo/nitrogênio de esgoto e agrotóxicos) alimenta uma explosão de algas; quando elas morrem, as bactérias que as decompõem consomem o O2 da água — os peixes asfixiam. O lago fica verde e "morto".', // explicação
    dica: 'Sequência do ENEM: nutriente → alga explode → alga morre → bactéria decompõe consumindo O2 → peixe morre por asfixia. A causa raiz é poluição orgânica/fertilizante — não falta de oxigênio natural.', // pegadinha
    video: 'eutrofização lagos algas oxigênio peixes resumo' // busca no YouTube
  },
  {
    id: 'b10',                          // identificador único
    materia: 'Biologia',                // matéria
    tema: 'Espécies invasoras',         // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'O javali e o mexilhão-dourado são "espécies invasoras" no Brasil porque:', // pergunta
    alternativas: [                     // opções
      'São brasileiros nativos',
      'Foram introduzidos pelo homem, não têm predadores locais e desequilibram o ecossistema ao competir com as espécies nativas',
      'São muito raros',
      'Vivem só em cativeiro',
      'Foram descobertos recentemente'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Espécie invasora = exótica (de fora) que se espalha sem controle porque não tem predadores naturais e compete/come as nativas — quebrando o equilíbrio do ecossistema. Javali, mexilhão-dourado, capim-gordura e azevém são exemplos.', // explicação
    dica: 'A banca diferencia: exótica × invasora × nativa. Nem toda exótica é invasora (muitas se mantêm); a invasora se espalha e causa dano. O javali, destruído por ter sido "solto", virou peste no sul.', // pegadinha
    video: 'espécies invasoras javali mexilhão dourado resumo' // busca no YouTube
  },
  {
    id: 'b11',                          // identificador único
    materia: 'Biologia',                // matéria
    tema: 'Taxonomia',                  // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Univesp (vestibular)',      // banca inspiradora
    enunciado: 'Na classificação científica (Lineu), o gênero e a espécie do ser humano são escritos:', // pergunta
    alternativas: [                     // opções
      'homo sapiens (tudo minúsculo)',
      'Homo sapiens (gênero maiúsculo, espécie minúscula, em itálico)',
      'HOMO SAPIENS',
      'Homo Sapiens',
      'sapiens Homo'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A regra binomial de Lineu: Gênero com inicial maiúscula + epíteto específico minúsculo, em itálico — Homo sapiens, Canis familiaris, Felis catus. É o nome científico universal que evita a confusão dos nomes populares.', // explicação
    dica: 'A hierarquia da Univesp: Reino → Filo → Classe → Ordem → Família → Gênero → Espécie (do mais amplo ao mais específico). Macete: "Rei Filósofo Clássico Ordenou Famílias de Gênios e Espécies".', // pegadinha
    video: 'taxonomia classificação lineu reino filo espécie resumo' // busca no YouTube
  },
  {
    id: 'b12',                          // identificador único
    materia: 'Biologia',                // matéria
    tema: 'Vírus',                      // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'Os vírus são considerados seres "no limite da vida" porque:', // pergunta
    alternativas: [                     // opções
      'São bactérias pequenas',
      'São estruturas acelulares — sem citoplasma, sem metabolismo próprio — que só se reproduzem dentro de uma célula hospedeira',
      'Fotossintetizam',
      'Têm núcleo',
      'Vivem sozinhos na natureza'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O vírus não é célula: é só material genético (DNA ou RNA) em uma cápsula de proteína (capsídeo). Ele não come, não respira, não se reproduz sozinho — "sequestra" a maquinaria de uma célula para se copiar. Por isso vacinas previnem e antibióticos NÃO funcionam.', // explicação
    dica: 'Ponto crítico do ENEM: antibiótico mata bactéria (célula), NÃO mata vírus. Contra vírus, o corpo usa vacina (previne) e antivirais; a resposta imune que resolve. Vírus = parasita intracelular obrigatório.', // pegadinha
    video: 'vírus estrutura reprodução por que antibiótico não funciona' // busca no YouTube
  },
  {
    id: 'b13',                          // identificador único
    materia: 'Biologia',                // matéria
    tema: 'Vacinas — imunologia',       // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'Uma vacina funciona porque:', // pergunta
    alternativas: [                     // opções
      'Injeta o vírus vivo forte',
      'Apresenta antígenos (partes inativas do patógeno) que ensinam o sistema imune a produzir anticorpos e memória',
      'Mata todas as bactérias do corpo',
      'Substitui o sangue',
      'Cura a doença já instalada'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'A vacina é um "ensaio": mostra um pedaço inofensivo do patógeno (antígeno) para os linfócitos B produzirem anticorpos e deixarem células de memória. Se o patógeno real chegar depois, a defesa já está pronta.', // explicação
    dica: 'Vacina = PREVENÇÃO (imuniza antes); soro = TRATAMENTO (anticorpos prontos para emergência — ex.: soro antiofídico); antibiótico = mata bactéria. O ENEM testa a diferença vacina x soro com frequência.', // pegadinha
    video: 'como funciona a vacina anticorpos memória resumo' // busca no YouTube
  },
  {
    id: 'b14',                          // identificador único
    materia: 'Biologia',                // matéria
    tema: 'Classificação dos seres vivos', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Univesp (vestibular)',      // banca inspiradora
    enunciado: 'Os seres vivos são agrupados em reinos. As bactérias pertencem ao reino:', // pergunta
    alternativas: [                     // opções
      'Animalia',
      'Monera — organismos procariontes e unicelulares',
      'Fungi',
      'Plantae',
      'Protista'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Sistema de 5 reinos (Whittaker): Monera (procariontes — bactérias e arqueias), Protista (eucariontes unicelulares — protozoários, algas unicelulares), Fungi (fungos — heterótrofos decompositores), Plantae (plantas) e Animalia (animais).', // explicação
    dica: 'Os 5 reinos que a Univesp cobra: Monera (bactéria), Protista (ameba, protozoário), Fungi (cogumelo, mofo), Plantae (plantas), Animalia (nós). Vírus não tem reino — não é célula.', // pegadinha
    video: 'cinco reinos seres vivos monera protista fungi resumo' // busca no YouTube
  },
  {
    id: 'b15',                          // identificador único
    materia: 'Biologia',                // matéria
    tema: 'Biotecnologia',              // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'A produção de insulina por bactérias modificadas (introduzindo o gene humano na bactéria) é exemplo de:', // pergunta
    alternativas: [                     // opções
      'Seleção natural',
      'Engenharia genética — manipulação do DNA para obter produtos úteis',
      'Fermentação simples',
      'Reprodução sexuada',
      'Clonagem humana'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Engenharia genética = cortar e colar genes: coloca-se o gene humano da insulina no DNA da bactéria, que passa a produzir insulina em larga escala. Transgênicos (soja resistente), CRISPR e insulina recombinante são biotecnologia.', // explicação
    dica: 'O ENEM contextualiza: transgênico = organismo com gene de outra espécie (soja com gene de resistência); clonagem = cópia genética (ovelha Dolly); engenharia genética = a técnica do recorte e cola do DNA.', // pegadinha
    video: 'engenharia genética insulina bactéria transgênico resumo' // busca no YouTube
  },
  {
    id: 'b16',                          // identificador único
    materia: 'Biologia',                // matéria
    tema: 'Respiração celular',         // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Comvest (Unicamp)',         // banca inspiradora
    enunciado: 'A respiração celular aeróbica produz ATP a partir de:', // pergunta
    alternativas: [                     // opções
      'Água e luz solar',
      'Glicose e oxigênio — rendendo gás carbônico e água como produtos',
      'Nitrogênio',
      'Gordura apenas',
      'DNA'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Respiração celular = o inverso da fotossíntese: C6H12O6 + O2 → CO2 + H2O + ATP. A célula "queima" a glicose com oxigênio para extrair energia — todos os seres aeróbicos fazem isso na mitocôndria.', // explicação
    dica: 'A Unicamp pede a diferença: FOTOSSÍNTESE (só plantas) guarda energia na glicose; RESPIRAÇÃO (plantas e animais) libera a energia da glicose. A planta fotossintetiza de dia e respira sempre.', // pegadinha
    video: 'respiração celular glicose oxigênio atp resumo' // busca no YouTube
  },

  /* ===================== ECONOMIA — completando para 16 (ec05 a ec16) ===================== */
  {
    id: 'ec05',                         // identificador único
    materia: 'Economia',                // matéria
    tema: 'Custos fixo e variável',     // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'O aluguel da fábrica, que se paga produzindo ou não, é custo:', // pergunta
    alternativas: [                     // opções
      'Variável',
      'Fixo — não depende da quantidade produzida',
      'Marginal',
      'Total',
      'De oportunidade'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Custo fixo = existe mesmo com produção zero (aluguel, salário administrativo, seguro). Custo variável = muda com a quantidade (matéria-prima, energia das máquinas). Marginal = custo de produzir mais uma unidade.', // explicação
    dica: 'Exemplos da CESPE: aluguel, depreciação, salário fixo = FIXO; matéria-prima, embalagem, hora extra por peça = VARIÁVEL. O "custo de oportunidade" é conceito diferente — o que se perde pela escolha.', // pegadinha
    video: 'custo fixo variável marginal economia resumo' // busca no YouTube
  },
  {
    id: 'ec06',                         // identificador único
    materia: 'Economia',                // matéria
    tema: 'Bens substitutos e complementares', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'Manteiga e margarina são bens:', // pergunta
    alternativas: [                     // opções
      'Complementares',
      'Substitutos — satisfazem a mesma necessidade e um pode trocar o outro',
      'Superiores',
      'Inferiores',
      'De luxo'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Substitutos = um substitui o outro (manteiga × margarina, carne × frango, ônibus × metrô): se o preço de um sobe, a demanda do outro aumenta. Complementares = se usam juntos (impressora × cartucho, carro × gasolina).', // explicação
    dica: 'A IBFC testa os pares: café×açúcar (complementares), manteiga×margarina (substitutos), tênis×meia (complementares). A reação: se o preço do substituto sobe, sua demanda cai e a do outro sobe.', // pegadinha
    video: 'bens substitutos e complementares economia resumo' // busca no YouTube
  },
  {
    id: 'ec07',                         // identificador único
    materia: 'Economia',                // matéria
    tema: 'Estruturas de mercado',      // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'O mercado das teles no Brasil (poucas empresas grandes dominando) é um exemplo de:', // pergunta
    alternativas: [                     // opções
      'Concorrência perfeita',
      'Oligopólio — poucos vendedores dominam o mercado',
      'Monopólio',
      'Monopsônio',
      'Economia solidária'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Oligopólio = poucos grandes vendedores dominam (teles, montadoras, bancos). Monopólio = um só vendedor; concorrência perfeita = muitos vendedores iguais (modelo teórico); monopsônio = um só comprador.', // explicação
    dica: 'A FCC desenha o espectro: concorrência perfeita (muitos) → competição monopolística → oligopólio (poucos) → monopólio (um). Teles e montadoras são oligopólios; saneamento municipal, monopólio natural.', // pegadinha
    video: 'oligopólio monopólio concorrência perfeita resumo' // busca no YouTube
  },
  {
    id: 'ec08',                         // identificador único
    materia: 'Economia',                // matéria
    tema: 'Tipos de desemprego',        // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'O trabalhador desempregado porque sua função foi automatizada por uma máquina exemplifica o desemprego:', // pergunta
    alternativas: [                     // opções
      'Friccional',
      'Estrutural — a vaga desapareceu por mudança na estrutura da economia (tecnologia, realocação)',
      'Sazonal',
      'Cíclico',
      'Voluntário'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Estrutural = a vaga sumiu por transformação da economia (automação, mudança de setor) — exige requalificação. Friccional = transição entre empregos; sazonal = época do ano (safra, Natal); cíclico = recessão.', // explicação
    dica: 'Os 4 tipos da CESPE: friccional (entre empregos), estrutural (vaga acabou por tecnologia/setor), sazonal (época — agricultura, turismo), cíclico (crise econômica). O estrutural é o mais sério.', // pegadinha
    video: 'tipos de desemprego friccional estrutural sazonal resumo' // busca no YouTube
  },
  {
    id: 'ec09',                         // identificador único
    materia: 'Economia',                // matéria
    tema: 'Juros simples x compostos',  // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'A diferença fundamental entre juros simples e compostos é que nos compostos:', // pergunta
    alternativas: [                     // opções
      'O juro incide sempre só sobre o capital inicial',
      'O juro incide sobre o capital + os juros já acumulados — o "juros sobre juros"',
      'Não há juros',
      'O prazo não importa',
      'A taxa é sempre 1%'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Simples: juro sempre sobre o capital inicial (cresce em linha reta). Compostos: juro sobre o saldo atual (cresce exponencialmente — "juro sobre juro"). Investimentos e dívidas usam compostos.', // explicação
    dica: 'Na prática: R$ 1.000 a 10% ao mês. Simples: mês 1 = 1.100, mês 2 = 1.200, mês 3 = 1.300. Compostos: mês 1 = 1.100, mês 2 = 1.210, mês 3 = 1.331. O composto cresce cada vez mais rápido.', // pegadinha
    video: 'juros simples e compostos diferença resumo concurso' // busca no YouTube
  },
  {
    id: 'ec10',                         // identificador único
    materia: 'Economia',                // matéria
    tema: 'Balança comercial',          // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'FCC',                       // banca inspiradora
    enunciado: 'Um país tem superávit na balança comercial quando:', // pergunta
    alternativas: [                     // opções
      'Importa mais do que exporta',
      'Exporta mais (em valor) do que importa',
      'Não comercializa',
      'Só importa',
      'Fecha as fronteiras'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Balança comercial = exportações − importações. Superávit = exporta mais (entra mais dólar); déficit = importa mais. O Brasil historicamente tem superávit graças às commodities (soja, minério).', // explicação
    dica: 'A FCC embaralha com o "balanço de pagamentos" (mais amplo — inclui serviços e capitais). A balança COMERCIAL é só bens físicos. Superávit ≠ sempre bom; déficit ≠ sempre ruim — depende do contexto.', // pegadinha
    video: 'balança comercial exportação importação superávit resumo' // busca no YouTube
  },
  {
    id: 'ec11',                         // identificador único
    materia: 'Economia',                // matéria
    tema: 'Câmbio — valorização do real', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'Quando o real se valoriza frente ao dólar (o dólar cai):', // pergunta
    alternativas: [                     // opções
      'As exportações brasileiras ficam mais caras e difíceis; as importações, mais baratas',
      'As exportações ficam mais baratas',
      'O turismo internacional brasileiro encarece',
      'Os importados ficam mais caros',
      'O Brasil deixa de exportar'
    ],
    correta: 0,                         // índice da certa
    explicacao: 'Real forte = dólar barato: importar fica mais barato (celular, trigo, tecnologia), mas exportar fica mais difícil — nossos produtos custam mais caro em dólar lá fora. E viajar para fora fica mais barato.', // explicação
    dica: 'A lógica da CESPE: real VALORIZADO favorece importador e turista; real DESVALORIZADO (dólar alto) favorece exportador (soja ganha mais em reais) e turismo vindo ao Brasil. Cada lado tem seu público.', // pegadinha
    video: 'câmbio real valorizado exportação importação resumo' // busca no YouTube
  },
  {
    id: 'ec12',                         // identificador único
    materia: 'Economia',                // matéria
    tema: 'PIB per capita',             // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'O PIB per capita é obtido por:', // pergunta
    alternativas: [                     // opções
      'PIB × população',
      'PIB ÷ população — medida da produção média por habitante',
      'População ÷ PIB',
      'PIB + inflação',
      'PIB − desemprego'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'PIB per capita = PIB total ÷ número de habitantes. É uma média — não mostra distribuição: um país pode ter PIB alto e concentração extrema (o Brasil tem PIB per capita médio, mas desigualdade enorme).', // explicação
    dica: 'Cuidado da IBFC: PIB per capita ALTO não significa vida boa para todos — mede a média, não a distribuição. Países com alta renda per capita e muita pobreza revelam a desigualdade escondida na média.', // pegadinha
    video: 'pib per capita média por habitante resumo' // busca no YouTube
  },
  {
    id: 'ec13',                         // identificador único
    materia: 'Economia',                // matéria
    tema: 'Impostos diretos e indiretos', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'O imposto de renda sobre a pessoa física é um imposto:', // pergunta
    alternativas: [                     // opções
      'Indireto',
      'Direto — incide sobre a renda/patrimônio de quem paga, sem repassar',
      'Sobre consumo',
      'Ad valorem',
      'Estadual apenas'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Direto = sobre a renda/patrimônio da pessoa (IRPF, IPVA, IPTU) — quem ganha/possui paga diretamente. Indireto = embutido no preço do bem/serviço (ICMS, IPI, ISS) — o contribuinte repassa para o consumidor.', // explicação
    dica: 'Exemplos da CESPE: DIRETOS = IRPF, IPVA, IPTU; INDIRETOS = ICMS, IPI, ISS, PIS/COFINS. Os indiretos são considerados mais injustos (o pobre paga a mesma taxa do rico ao comprar).', // pegadinha
    video: 'impostos diretos indiretos icms ipi irpf resumo' // busca no YouTube
  },
  {
    id: 'ec14',                         // identificador único
    materia: 'Economia',                // matéria
    tema: 'Coeficiente de Gini',        // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'O índice de Gini mede:', // pergunta
    alternativas: [                     // opções
      'A inflação',
      'A desigualdade de renda — vai de 0 (todos iguais) a 1 (uma pessoa com tudo)',
      'O crescimento do PIB',
      'O desemprego',
      'A balança comercial'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Gini = medida de desigualdade de renda: 0 = igualdade perfeita (todos com a mesma renda); 1 = desigualdade máxima (uma pessoa com tudo). O Brasil tem ~0,53 — um dos mais desiguais do mundo.', // explicação
    dica: 'O ENEM cruza Gini com desenvolvimento: Brasil tem PIB per capita médio MAS Gini alto — a riqueza é concentrada. Países como Noruega têm Gini ~0,25; Brasil e África do Sul, acima de 0,50.', // pegadinha
    video: 'índice gini desigualdade renda resumo vestibular' // busca no YouTube
  },
  {
    id: 'ec15',                         // identificador único
    materia: 'Economia',                // matéria
    tema: 'Política fiscal',            // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'CESPE/Cebraspe',            // banca inspiradora
    enunciado: 'Em recessão, a política fiscal expansionista típica do governo é:', // pergunta
    alternativas: [                     // opções
      'Cortar gastos e subir juros',
      'Aumentar os gastos públicos e/ou reduzir impostos para estimular a economia',
      'Congelar salários',
      'Parar de investir',
      'Fechar o Banco Central'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Fiscal expansionista = mais gasto público (obras, programas) + menos imposto → mais dinheiro circulando → demanda sobe → emprego e produção. O oposto (contracionista) freia a economia para conter inflação.', // explicação
    dica: 'As duas políticas: FISCAL (gastos/impostos do governo) × MONETÁRIA (Selic do Banco Central). Para combater recessão: expansionista nas duas (mais gasto + Selic baixa); contra inflação: contracionista nas duas.', // pegadinha
    video: 'política fiscal expansionista contracionista resumo' // busca no YouTube
  },
  {
    id: 'ec16',                         // identificador único
    materia: 'Economia',                // matéria
    tema: 'Déficit público',            // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'IBFC',                      // banca inspiradora
    enunciado: 'O déficit primário do governo ocorre quando:', // pergunta
    alternativas: [                     // opções
      'A arrecadação supera os gastos',
      'Os gastos (sem juros da dívida) superam a arrecadação de impostos',
      'O governo não gasta nada',
      'O país não tem dívida',
      'A inflação é zero'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Déficit PRIMÁRIO = gastos correntes e de investimento − arrecadação (sem contar os juros da dívida). Se os juros entram na conta, vira déficit NOMINAL. Superávit primário = o governo arrecada mais do que gasta (sinal de contas saudáveis).', // explicação
    dica: 'Primário x nominal: primário = sem juros (o "resultado do esforço"); nominal = com juros (o total). O Brasil busca superávit primário para não deixar a dívida pública explodir.', // pegadinha
    video: 'déficit primário nominal contas públicas resumo' // busca no YouTube
  },

  /* ===================== QUÍMICA — completando para 16 (qm05 a qm16) ===================== */
  {
    id: 'qm05',                         // identificador único
    materia: 'Química',                 // matéria
    tema: 'Tabela periódica — grupos',  // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Unicamp (Comvest)',         // banca inspiradora
    enunciado: 'Na tabela periódica, os elementos da coluna 1 (Li, Na, K...) são chamados de:', // pergunta
    alternativas: [                     // opções
      'Gases nobres',
      'Metais alcalinos — têm um elétron na última camada e reagem vigorosamente com água',
      'Halogênios',
      'Calcogênios',
      'Metais de transição'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Coluna 1 = metais alcalinos (Li, Na, K, Rb, Cs): um elétron na camada de valência, muito reativos (explodem com água), maleáveis e não encontrados puros na natureza. A última coluna (18) é dos gases nobres (estáveis).', // explicação
    dica: 'Famílias que a Unicamp cobra: alcalinos (coluna 1), alcalinos terrosos (coluna 2), halogênios (coluna 17 — F, Cl, Br), gases nobres (coluna 18 — He, Ne, Ar). A posição na tabela diz o comportamento.', // pegadinha
    video: 'tabela periódica famílias alcalinos halogênios resumo' // busca no YouTube
  },
  {
    id: 'qm06',                         // identificador único
    materia: 'Química',                 // matéria
    tema: 'Ligação metálica',           // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'Os metais conduzem eletricidade porque sua ligação metálica forma:', // pergunta
    alternativas: [                     // opções
      'Moléculas isoladas',
      'Um "mar de elétrons" — elétrons livres que fluem pelo metal',
      'Íons fixos',
      'Covalências rígidas',
      'Gases presos'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Na ligação metálica, os átomos do metal cedem seus elétrons de valência para um "mar de elétrons" compartilhado — elétrons livres que carregam a corrente e o calor. Por isso metal conduz, brilha e é maleável.', // explicação
    dica: 'As 3 ligações: IÔNICA (metal+ametal, transfere — sal), COVALENTE (ametal+ametal, compartilha — água), METÁLICA (metal+metal, mar de elétrons — cobre). Só a metálica explica a condutividade no sólido.', // pegadinha
    video: 'ligação metálica mar de elétrons condutividade resumo' // busca no YouTube
  },
  {
    id: 'qm07',                         // identificador único
    materia: 'Química',                 // matéria
    tema: 'Mol e massa molar',          // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Fuvest / Unicamp (vestibular)', // banca inspiradora
    enunciado: 'A massa molar da água (H₂O, com H=1 e O=16) é:', // pergunta
    alternativas: [                     // opções
      '10 g/mol',
      '18 g/mol (2×1 + 16)',
      '17 g/mol',
      '20 g/mol',
      '16 g/mol'
    ],
    correta: 1,                         // índice da certa
    passos: [                           // passo a passo
      'Massa molar = soma das massas atômicas de cada átomo da fórmula.',
      'H₂O = 2 hidrogênios (2×1) + 1 oxigênio (16).',
      '2 + 16 = 18 g/mol.'
    ],
    explicacao: 'Massa molar = soma das massas atômicas da fórmula: H₂O = 2(1) + 16 = 18 g/mol. Um mol de água pesa 18 gramas e contém 6,02×10²³ moléculas (número de Avogadro).', // explicação
    dica: 'Cálculos clássicos da Fuvest: H₂O=18, CO₂=44, O₂=32, CaCO₃=100, NaCl=58,5 g/mol. O mol é a "ponte" entre massa e número de partículas — treine regra de três.', // pegadinha
    video: 'mol massa molar avogadro química resumo vestibular' // busca no YouTube
  },
  {
    id: 'qm08',                         // identificador único
    materia: 'Química',                 // matéria
    tema: 'Mudanças de estado',         // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Univesp (vestibular)',      // banca inspiradora
    enunciado: 'Quando a água do copo evapora, ela passa do estado:', // pergunta
    alternativas: [                     // opções
      'Sólido para líquido',
      'Líquido para gasoso — evaporação/vaporização',
      'Gasoso para sólido',
      'Sólido para gasoso',
      'Líquido para sólido'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Líquido → gasoso = evaporação (superfície, em qualquer temperatura) ou ebulição (todo o líquido, a 100°C para a água). Sublimação = sólido direto para gás (gelo seco); condensação = gás para líquido.', // explicação
    dica: 'Mapa das mudanças que a banca embaralha: fusão (sólido→líquido), vaporização (líquido→gás), condensação (gás→líquido), solidificação (líquido→sólido), sublimação (sólido↔gás). O gás de cozinha é o isqueiro da vida real.', // pegadinha
    video: 'mudanças de estado físico fusão vaporização resumo' // busca no YouTube
  },
  {
    id: 'qm09',                         // identificador único
    materia: 'Química',                 // matéria
    tema: 'Misturas — separação',       // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'Para separar o sal dissolvido na água do mar, o método adequado é:', // pergunta
    alternativas: [                     // opções
      'Filtração',
      'Destilação — evapora-se a água e condensa-se de volta, deixando o sal',
      'Decantação',
      'Centrifugação',
      'Peneiração'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Sal dissolvido não sai por filtro (mistura homogênea). A DESTILAÇÃO separa: a água evapora, condensa e é recolhida pura; o sal fica no balão. Nas salinas, a evaporação solar faz o mesmo (sem recolher a água).', // explicação
    dica: 'Métodos de separação por tipo de mistura: filtração (sólido+líquido, heterogênea — café), decantação (líquidos que não se misturam — óleo+água), destilação (sólido dissolvido ou líquidos — sal+água, álcool+água).', // pegadinha
    video: 'métodos de separação misturas filtração destilação resumo' // busca no YouTube
  },
  {
    id: 'qm10',                         // identificador único
    materia: 'Química',                 // matéria
    tema: 'Tipos de reação',            // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Comvest (Unicamp)',         // banca inspiradora
    enunciado: 'A reação 2H₂O → 2H₂ + O₂ (quebra de uma substância em outras) é do tipo:', // pergunta
    alternativas: [                     // opções
      'Síntese',
      'Decomposição — uma substância se divide em duas ou mais',
      'Dupla troca',
      'Combustão',
      'Substituição'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Decomposição (análise) = uma substância vira várias (AB → A + B) — a eletrólise da água é o exemplo: corrente elétrica quebra a água em H₂ e O₂. Síntese é o inverso (A + B → AB).', // explicação
    dica: 'Os tipos da Unicamp: síntese (junta: 2+1 → 1), decomposição (divide: 1 → 2+1), simples troca (um elemento troca: A + BC → AC + B), dupla troca (dois compostos trocam: AB + CD → AD + CB).', // pegadinha
    video: 'tipos de reação química síntese decomposição resumo' // busca no YouTube
  },
  {
    id: 'qm11',                         // identificador único
    materia: 'Química',                 // matéria
    tema: 'Concentração de soluções',   // assunto
    nivel: 'dificil',                   // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Fuvest / Unicamp (vestibular)', // banca inspiradora
    enunciado: 'A molaridade (mol/L) de uma solução de NaCl com 2 mols dissolvidos em 4 litros é:', // pergunta
    alternativas: [                     // opções
      '8 mol/L',
      '0,5 mol/L',
      '2 mol/L',
      '4 mol/L',
      '1 mol/L'
    ],
    correta: 1,                         // índice da certa
    passos: [                           // passo a passo
      'Molaridade = mols de soluto ÷ litros de solução.',
      'M = 2 mols ÷ 4 L.',
      'M = 0,5 mol/L.'
    ],
    explicacao: 'M = n/V: 2 mols em 4 litros = 0,5 mol/L. A molaridade diz quantos mols de soluto há por litro de solução — medida central da química analítica.', // explicação
    dica: 'A Fuvest testa o inverso: quanto mais soluto por litro, mais concentrada. Erro comum: dividir volume por mol ou confundir massa em gramas com mols. Sempre converta grama → mol pela massa molar.', // pegadinha
    video: 'molaridade concentração mol por litro cálculo resumo' // busca no YouTube
  },
  {
    id: 'qm12',                         // identificador único
    materia: 'Química',                 // matéria
    tema: 'Hidrocarbonetos',            // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'Os hidrocarbonetos são compostos formados apenas por:', // pergunta
    alternativas: [                     // opções
      'Carbono e oxigênio',
      'Carbono e hidrogênio',
      'Hidrogênio e nitrogênio',
      'Carbono e enxofre',
      'Oxigênio e hidrogênio'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Hidrocarboneto = só carbono + hidrogênio: metano (CH4, gás natural), gasolina, etano, propano, benzeno. Se tiver O, N ou outro elemento, é derivado (álcool, cetona...). Os combustíveis fósseis são hidrocarbonetos.', // explicação
    dica: 'Nomenclatura da prova: metano (1 C), etano (2), propano (3), butano (4), pentano (5). Ligações simples = "-ano" (alcano); dupla = "-eno" (alceno); tripla = "-ino" (alcino). O gás de cozinha é propano+butano.', // pegadinha
    video: 'hidrocarbonetos metano propano alceno alcino resumo' // busca no YouTube
  },
  {
    id: 'qm13',                         // identificador único
    materia: 'Química',                 // matéria
    tema: 'Funções orgânicas',          // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Unicamp (Comvest)',         // banca inspiradora
    enunciado: 'O álcool etílico (etanol) e a acetona pertencem às funções orgânicas:', // pergunta
    alternativas: [                     // opções
      'As duas são álcoois',
      'Etanol = álcool (OH na cadeia); acetona = cetona (C=O no meio da cadeia)',
      'As duas são ácidos',
      'Etanol = éster; acetona = éter',
      'As duas são fenóis'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Álcool tem -OH ligado a carbono saturado (etanol do álcool); cetona tem C=O dupla no MEIO da cadeia (acetona, removedor de esmalte); ácido carboxílico tem COOH (vinagre/ácido acético); éster dá aroma de frutas.', // explicação
    dica: 'Funções clássicas da Unicamp: álcool (OH), cetona (C=O no meio), aldeído (C=O na ponta), ácido carboxílico (COOH), éster (COO, aroma), éter (O entre carbonos). Decore o grupo funcional de cada uma.', // pegadinha
    video: 'funções orgânicas álcool cetona ácido éster resumo' // busca no YouTube
  },
  {
    id: 'qm14',                         // identificador único
    materia: 'Química',                 // matéria
    tema: 'Catalisador',                // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'Um catalisador acelera uma reação química porque:', // pergunta
    alternativas: [                     // opções
      'É consumido na reação',
      'Oferece um caminho alternativo com energia de ativação menor — e não é consumido',
      'Aumenta a temperatura',
      'É o produto final',
      'Impede a reação'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O catalisador abre um "atalho" para a reação: diminui a energia de ativação (a "colina" que os reagentes precisam subir) sem ser consumido — sai intacto. As enzimas do corpo são catalisadores biológicos.', // explicação
    dica: 'Pontos do ENEM: catalisador NÃO é consumido (reutilizável), NÃO muda o equilíbrio nem o rendimento — só acelera. Inibidor = o contrário (retarda). O catalisador do escapamento do carro converte gases poluentes.', // pegadinha
    video: 'catalisador energia de ativação reação resumo' // busca no YouTube
  },
  {
    id: 'qm15',                         // identificador único
    materia: 'Química',                 // matéria
    tema: 'Chuva ácida',                // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'A chuva ácida é causada principalmente pela emissão de:', // pergunta
    alternativas: [                     // opções
      'Vapor de água',
      'Óxidos de enxofre (SOx) e de nitrogênio (NOx) — que viram ácidos na atmosfera',
      'CO2 sozinho',
      'Poeira comum',
      'Oxigênio'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Indústrias e carros queimam combustível fóssil liberando SOx (enxofre) e NOx (nitrogênio); na atmosfera viram ácido sulfúrico e nítrico e descem com a chuva — corroem monumentos, acidificam lagos e matam plantas.', // explicação
    dica: 'O ENEM separa os poluentes: chuva ácida = SOx/NOx (enxofre e nitrogênio); efeito estufa = CO2/CH4 (carbono); buraco na camada de ozônio = CFCs (clorofluorcarbonos). Cada problema tem seu gás.', // pegadinha
    video: 'chuva ácida sox nox poluição química resumo' // busca no YouTube
  },
  {
    id: 'qm16',                         // identificador único
    materia: 'Química',                 // matéria
    tema: 'Polímeros',                  // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Univesp (vestibular)',      // banca inspiradora
    enunciado: 'Os polímeros (plásticos, borrachas, proteínas) são:', // pergunta
    alternativas: [                     // opções
      'Moléculas pequenas',
      'Macromoléculas formadas pela repetição de unidades menores chamadas monômeros',
      'Metais',
      'Gases',
      'Íons'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Polímero = macromolécula de "contas" repetidas (monômeros): o polietileno (sacola) repete o eteno; o PVC repete cloreto de vinila; as proteínas repetem aminoácidos; o amido repete glicose. Uns são sintéticos, outros naturais.', // explicação
    dica: 'Polímeros naturais que a banca testa: proteína (aminoácidos), amido/celulose (glicose), DNA (nucleotídeos), borracha natural (isopreno). Sintéticos: PE, PVC, PET, nylon, poliestireno (isopor).', // pegadinha
    video: 'polímeros monômeros plástico proteína resumo' // busca no YouTube
  },

  /* ===================== FÍSICA — completando para 16 (f05 a f16) ===================== */
  {
    id: 'f05',                          // identificador único
    materia: 'Física',                  // matéria
    tema: 'MRU — velocidade constante', // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Univesp (vestibular)',      // banca inspiradora
    enunciado: 'Um carro percorre 240 km em 3 horas em movimento uniforme. Sua velocidade média é:', // pergunta
    alternativas: [                     // opções
      '60 km/h',
      '80 km/h',
      '120 km/h',
      '90 km/h',
      '720 km/h'
    ],
    correta: 1,                         // índice da certa
    passos: [                           // passo a passo
      'Velocidade média = distância ÷ tempo.',
      'v = 240 km ÷ 3 h.',
      'v = 80 km/h.'
    ],
    explicacao: 'MRU = velocidade constante: v = Δs/Δt. 240 km em 3 h dão 80 km/h. Se o movimento é uniforme, a velocidade média é igual à instantânea.', // explicação
    dica: 'As três formas da fórmula: v = d/t (velocidade), d = v·t (distância), t = d/v (tempo). Se a questão pede tempo de viagem, use a terceira. Unidade: km/h ÷ 3,6 = m/s.', // pegadinha
    video: 'mru velocidade média distância tempo exercício' // busca no YouTube
  },
  {
    id: 'f06',                          // identificador único
    materia: 'Física',                  // matéria
    tema: 'MRUV — aceleração',          // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'FATEC/ETEC (vestibular)',   // banca inspiradora
    enunciado: 'No MRUV, a aceleração de 2 m/s² significa que a velocidade do corpo:', // pergunta
    alternativas: [                     // opções
      'Fica constante',
      'Aumenta 2 m/s a cada segundo',
      'Diminui 2 m/s a cada segundo',
      'É de 2 m/s sempre',
      'Zera após 2 segundos'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Aceleração = variação da velocidade por tempo (a = Δv/Δt). 2 m/s² = a velocidade cresce 2 m/s a cada segundo que passa: 0→2→4→6 m/s. Se fosse −2, seria frenagem.', // explicação
    dica: 'A Fatec confunde velocidade com aceleração: v = 2 m/s (anda 2 m por segundo) x a = 2 m/s² (ganha 2 m/s por segundo). O "por segundo ao quadrado" é a pista da aceleração.', // pegadinha
    video: 'mruv aceleração velocidade variação resumo' // busca no YouTube
  },
  {
    id: 'f07',                          // identificador único
    materia: 'Física',                  // matéria
    tema: 'Terceira lei — ação e reação', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'Ao remar, o barco avança porque o remo empurra a água para trás e a água empurra o barco para frente. Isso é a:', // pergunta
    alternativas: [                     // opções
      'Primeira lei de Newton',
      'Terceira lei — ação e reação: a toda ação corresponde uma reação igual e oposta',
      'Lei da gravidade',
      'Lei da inércia',
      'Conservação da energia'
    ],
    correta: 1,                         // índice da certa
    explicacao: '3ª lei (ação-reação): forças vêm em pares — se você empurra a água para trás, ela empurra você para a frente com a mesma força e sentido contrário. Caminhar, foguete, natação e tiro de canhão seguem o mesmo princípio.', // explicação
    dica: 'Detalhe da 3ª lei que o ENEM explora: ação e reação agem em CORPOS DIFERENTES (remo na água, água no barco) — por isso não se anulam no mesmo objeto. Forças no mesmo corpo podem cancelar; ação/reação, não.', // pegadinha
    video: 'terceira lei de newton ação e reação exemplos resumo' // busca no YouTube
  },
  {
    id: 'f08',                          // identificador único
    materia: 'Física',                  // matéria
    tema: 'Pressão',                    // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'FATEC/ETEC (vestibular)',   // banca inspiradora
    enunciado: 'Uma faca afiada corta melhor que uma cega porque a pressão:', // pergunta
    alternativas: [                     // opções
      'Não depende da área',
      'Aumenta quando a mesma força é aplicada numa área menor',
      'Diminui com a área pequena',
      'Não existe na faca',
      'Depende do peso da faca'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Pressão = força ÷ área (P = F/A). Com a mesma força, a lâmina fina (área menor) concentra a pressão e corta — é por isso que a agulha fura e o dedo, não. Salto fino e atado de neve seguem o mesmo princípio.', // explicação
    dica: 'Exemplos da Fatec: salto de agulha (área mínima → pressão máxima, fura o chão); botas de neve largas (área grande → afunda menos); prego na ponta (fura); pregos na tábua inteira (não fura — cama de faquir).', // pegadinha
    video: 'pressão força área faca afiada salto agulha resumo' // busca no YouTube
  },
  {
    id: 'f09',                          // identificador único
    materia: 'Física',                  // matéria
    tema: 'Empuxo — Arquimedes',        // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Comvest (Unicamp)',         // banca inspiradora
    enunciado: 'Um navio de aço flutua porque o empuxo da água sobre ele é:', // pergunta
    alternativas: [                     // opções
      'Zero',
      'Igual ao peso do volume de água que o casco desloca',
      'Menor que o peso do navio',
      'Só no oceano',
      'Indiferente ao formato'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Princípio de Arquimedes: o empuxo é igual ao peso do fluido deslocado. O aço do navio é denso, mas o casco oco desloca muito volume de água — a densidade média do conjunto fica menor que a da água e ele flutua.', // explicação
    dica: 'O truque do aço: o metal é mais denso que a água (afunda sozinho), mas o casco oco cria uma densidade média menor — é a mesma física do barco de papel. Iceberg flutua porque o gelo é menos denso que a água.', // pegadinha
    video: 'empuxo arquimedes navio flutua densidade resumo' // busca no YouTube
  },
  {
    id: 'f10',                          // identificador único
    materia: 'Física',                  // matéria
    tema: 'Transmissão de calor',       // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'A garrafa térmica conserva o líquido quente porque:', // pergunta
    alternativas: [                     // opções
      'É mágica',
      'Tem paredes duplas com vácuo que bloqueiam a condução e a convecção do calor',
      'Tem cor clara',
      'É de vidro',
      'Gera calor'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'O vácuo entre as paredes da garrafa térmica bloqueia a condução (não há matéria para passar calor) e a convecção (não há fluido para circular). A prata reflete a radiação — três mecanismos de calor bloqueados.', // explicação
    dica: 'Os 3 modos de transmissão: CONDUÇÃO (contato direto, colher na panela), CONVECÇÃO (fluido circulando, ar condicionado, água fervendo), RADIAÇÃO (onda eletromagnética, sol, lareira). O vácuo só deixa passar radiação.', // pegadinha
    video: 'transmissão de calor condução convecção radiação resumo' // busca no YouTube
  },
  {
    id: 'f11',                          // identificador único
    materia: 'Física',                  // matéria
    tema: 'Ondas — elementos',          // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Unicamp (Comvest)',         // banca inspiradora
    enunciado: 'Na onda, o comprimento de onda (λ) é:', // pergunta
    alternativas: [                     // opções
      'A altura da crista',
      'A distância entre duas cristas consecutivas (ou dois pontos iguais do ciclo)',
      'A velocidade da onda',
      'O número de ciclos por segundo',
      'A amplitude'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Comprimento de onda (λ) = distância de um ciclo completo — crista a crista, vale a vale, ou ponto a ponto correspondente. Amplitude = altura (energia); frequência = ciclos por segundo (Hz); período = tempo de um ciclo.', // explicação
    dica: 'Os 4 elementos que a Unicamp mistura: λ (tamanho do ciclo), amplitude (altura/energia), frequência f (Hz — inverso do período), período T (tempo do ciclo). v = λ·f é a equação fundamental.', // pegadinha
    video: 'onda comprimento de onda amplitude frequência resumo' // busca no YouTube
  },
  {
    id: 'f12',                          // identificador único
    materia: 'Física',                  // matéria
    tema: 'Som — propagação',           // assunto
    nivel: 'facil',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Univesp (vestibular)',      // banca inspiradora
    enunciado: 'O som não se propaga no vácuo porque ele é uma onda:', // pergunta
    alternativas: [                     // opções
      'Eletromagnética',
      'Mecânica — precisa de um meio material (ar, água, sólido) para vibrar',
      'De luz',
      'Rápida demais',
      'Lenta demais'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Som = onda mecânica: viaja pelo empurra-empurra das partículas do meio. No vácuo não há partículas para vibrar — por isso no espaço o som não se propaga ("no espaço ninguém ouve seu grito" — a física do Alien).', // explicação
    dica: 'Par que a Univesp separa: som = mecânica (precisa de meio); luz = eletromagnética (viaja no vácuo). E a velocidade: som ~340 m/s no ar, mais rápido em sólido; luz = 300 mil km/s — a luz é MUITO mais rápida.', // pegadinha
    video: 'som onda mecânica vácuo propagação resumo' // busca no YouTube
  },
  {
    id: 'f13',                          // identificador único
    materia: 'Física',                  // matéria
    tema: 'Corrente contínua x alternada', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'FATEC/ETEC (vestibular)',   // banca inspiradora
    enunciado: 'A eletricidade da tomada de casa é corrente alternada (CA), que se diferencia da contínua (CC) porque:', // pergunta
    alternativas: [                     // opções
      'Flui num único sentido',
      'Os elétrons invertem o sentido periodicamente — o que permite transmitir a alta tensão e reduzir perdas',
      'Não é eletricidade',
      'Só existe em pilhas',
      'É mais lenta'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'CA = corrente que oscila de sentido (60 Hz no Brasil — 60 ciclos por segundo) — fácil de elevar e abaixar a tensão com transformadores, essencial para transmitir longe. CC = sentido único (pilha, bateria, celular).', // explicação
    dica: 'Por que a rede usa CA: transformador só funciona com corrente variável — sobe a tensão para a transmissão (menos perda por aquecimento) e desce para a casa. Bateria e celular são CC; tomada é CA.', // pegadinha
    video: 'corrente alternada contínua tomada pilha diferença resumo' // busca no YouTube
  },
  {
    id: 'f14',                          // identificador único
    materia: 'Física',                  // matéria
    tema: 'Potência e consumo elétrico', // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'Um chuveiro de 5.500 W ligado por 1 hora consome:', // pergunta
    alternativas: [                     // opções
      '5,5 W',
      '5,5 kWh de energia — potência × tempo',
      '55 kWh',
      '0,55 kWh',
      '550 kWh'
    ],
    correta: 1,                         // índice da certa
    passos: [                           // passo a passo
      'Energia = potência × tempo.',
      '5.500 W = 5,5 kW.',
      '5,5 kW × 1 h = 5,5 kWh.'
    ],
    explicacao: 'Energia = P × t. 5,5 kW × 1 h = 5,5 kWh — a conta de luz cobra por kWh consumido. Chuveiro, ar-condicionado e secador são os "vilões" da conta porque têm potência alta.', // explicação
    dica: 'O ENEM cobra a conta real: kWh = kW × horas. 1.000 W = 1 kW. Aparelho potente + tempo longo = conta alta. O chuveiro de 5.500 W por 30 min/dia num mês consome ~82 kWh.', // pegadinha
    video: 'potência elétrica consumo kwh conta de luz resumo' // busca no YouTube
  },
  {
    id: 'f15',                          // identificador único
    materia: 'Física',                  // matéria
    tema: 'Espelhos e lentes',          // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'Unicamp (Comvest)',         // banca inspiradora
    enunciado: 'Os óculos de quem é míope usam lentes:', // pergunta
    alternativas: [                     // opções
      'Convergentes — juntam a luz',
      'Divergentes — espalham a luz para trás do foco e corrigem a imagem que se forma antes da retina',
      'Prismáticas',
      'Cilíndricas',
      'Espelhadas'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Miopia = a imagem se forma ANTES da retina (não enxerga longe): a lente DIVERGENTE joga o foco para trás, na retina. Hipermetropia (não enxerga perto) usa CONVERGENTE. Astigmatismo usa cilíndrica.', // explicação
    dica: 'Padrão óptico da Unicamp: miopia → divergente; hipermetropia → convergente; astigmatismo → cilíndrica (corrige a córnea torta). Na miopia, "ver longe" é o problema.', // pegadinha
    video: 'miopia lente divergente hipermetropia convergente resumo' // busca no YouTube
  },
  {
    id: 'f16',                          // identificador único
    materia: 'Física',                  // matéria
    tema: 'Peso x massa',               // assunto
    nivel: 'medio',                     // dificuldade
    ensino: 'medio',                    // nível do concurso
    banca: 'ENEM (vestibular)',         // banca inspiradora
    enunciado: 'Na Lua, a massa de um astronauta e o seu peso:', // pergunta
    alternativas: [                     // opções
      'Os dois ficam iguais à Terra',
      'A massa permanece a mesma; o peso diminui porque a gravidade lunar é menor',
      'Os dois dobram',
      'A massa some',
      'O peso aumenta'
    ],
    correta: 1,                         // índice da certa
    explicacao: 'Massa = quantidade de matéria (não muda em lugar nenhum). Peso = força gravitacional sobre a massa (P = m·g): na Lua g ≈ 1,6 m/s² → o astronauta de 70 kg "pesa" ~1/6 do peso terrestre, mas tem a mesma massa.', // explicação
    dica: 'O ENEM testa a confusão: massa (kg) é intrínseca; peso (N) depende do planeta. Balança mede massa; dinamômetro mede peso (força). "Perdi 5 kg" na vida real quer dizer 5 kg de massa — mas o físico diria que você pesa menos.', // pegadinha
    video: 'peso e massa diferença gravidade lua resumo' // busca no YouTube
  }
];
