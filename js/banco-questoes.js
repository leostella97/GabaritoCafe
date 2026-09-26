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
  }
];
