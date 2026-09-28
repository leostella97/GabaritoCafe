/* ============================================================
   GABARITO CAFÉ — js/analise-edital.js
   O "cérebro" que lê o texto do edital. Muito além de achar
   matérias: agora ele extrai a banca organizadora, as datas
   importantes, os números (vagas, salário, taxa, questões),
   a escolaridade exigida e o CONTEÚDO PROGRAMÁTICO tópico por
   tópico de cada matéria — e ainda diz o quanto confia no que
   encontrou.

   Tudo é heurística honesta e roda no seu navegador: dá um
   ótimo ponto de partida, mas o edital oficial é a palavra
   final.
   ============================================================ */

// Objeto global de análise do edital
const AnaliseEdital = {

  // ---------- Catálogo de matérias reconhecidas ----------
  CATALOGO: [
    { id: 'portugues', rotulo: 'Língua Portuguesa', padroes: ['LINGUA PORTUGUESA', 'PORTUGUES', 'PORTUGUÊS'] }, // português
    { id: 'matematica', rotulo: 'Matemática', padroes: ['MATEMATICA', 'MATEMÁTICA'] },                          // matemática
    { id: 'raciocinio', rotulo: 'Raciocínio Lógico', padroes: ['RACIOCINIO LOGICO-MATEMATICO', 'RACIOCINIO LOGICO', 'RACIOCÍNIO LÓGICO', 'LOGICA'] }, // raciocínio lógico
    { id: 'informatica', rotulo: 'Informática', padroes: ['INFORMATICA', 'INFORMÁTICA', 'NOCOES DE INFORMATICA'] }, // informática
    { id: 'constitucional', rotulo: 'Direito Constitucional', padroes: ['DIREITO CONSTITUCIONAL', 'CONSTITUCIONAL'] }, // direito constitucional
    { id: 'administrativo', rotulo: 'Direito Administrativo', padroes: ['DIREITO ADMINISTRATIVO', 'ADMINISTRATIVO'] }, // direito administrativo
    { id: 'penal', rotulo: 'Direito Penal', padroes: ['DIREITO PENAL', 'CODIGO PENAL'] },                       // direito penal
    { id: 'previdenciario', rotulo: 'Direito Previdenciário', padroes: ['DIREITO PREVIDENCIARIO', 'DIREITO PREVIDENCIÁRIO', 'PREVIDENCIA SOCIAL', 'PREVIDÊNCIA SOCIAL'] }, // direito previdenciário
    { id: 'criminologia', rotulo: 'Criminologia', padroes: ['CRIMINOLOGIA', 'CRIMINALISTICA', 'CRIMINALÍSTICA', 'PERICIA CRIMINAL', 'PERÍCIA CRIMINAL'] }, // criminologia
    { id: 'civil', rotulo: 'Direito Civil', padroes: ['DIREITO CIVIL', 'CODIGO CIVIL'] },                       // direito civil
    { id: 'trabalho', rotulo: 'Direito do Trabalho', padroes: ['DIREITO DO TRABALHO', 'TRABALHISTA'] },          // direito do trabalho
    { id: 'atualidades', rotulo: 'Atualidades', padroes: ['ATUALIDADES', 'CONHECIMENTOS GERAIS', 'REALIDADE BRASILEIRA'] }, // atualidades
    { id: 'historia', rotulo: 'História do Brasil', padroes: ['HISTORIA DO BRASIL', 'HISTÓRIA DO BRASIL', 'HISTORIA'] }, // história
    { id: 'geografia', rotulo: 'Geografia', padroes: ['GEOGRAFIA'] },                                            // geografia
    { id: 'biologia', rotulo: 'Biologia', padroes: ['BIOLOGIA'] },                                               // biologia
    { id: 'fisica', rotulo: 'Física', padroes: ['FISICA', 'FÍSICA'] },                                           // física
    { id: 'quimica', rotulo: 'Química', padroes: ['QUIMICA', 'QUÍMICA'] },                                       // química
    { id: 'ingles', rotulo: 'Inglês', padroes: ['LINGUA INGLESA', 'INGLES', 'INGLÊS'] },                         // inglês
    { id: 'espanhol', rotulo: 'Espanhol', padroes: ['LINGUA ESPANHOLA', 'ESPANHOL'] },                           // espanhol
    { id: 'literatura', rotulo: 'Literatura', padroes: ['LITERATURA'] },                                         // literatura
    { id: 'artes', rotulo: 'Artes', padroes: ['ARTES', 'EDUCACAO ARTISTICA', 'EDUCAÇÃO ARTÍSTICA'] },             // artes
    { id: 'edfisica', rotulo: 'Educação Física', padroes: ['EDUCACAO FISICA', 'EDUCAÇÃO FÍSICA', 'ED FISICA'] },  // educação física
    { id: 'fisiologia', rotulo: 'Fisiologia', padroes: ['FISIOLOGIA'] },                                         // fisiologia
    { id: 'filosofia', rotulo: 'Filosofia', padroes: ['FILOSOFIA'] },                                            // filosofia
    { id: 'sociologia', rotulo: 'Sociologia', padroes: ['SOCIOLOGIA'] },                                         // sociologia
    { id: 'economia', rotulo: 'Economia', padroes: ['ECONOMIA', 'CIENCIAS ECONOMICAS', 'CIÊNCIAS ECONÔMICAS'] },  // economia
    { id: 'legislacao', rotulo: 'Legislação', padroes: ['LEGISLACAO', 'LEGISLAÇÃO', 'REGIME JURIDICO', 'ESTATUTO DOS SERVIDORES', 'LEI ORGANICA'] }, // legislação
    { id: 'redacao', rotulo: 'Redação', padroes: ['REDACAO', 'REDAÇÃO', 'PROVA DISCURSIVA'] },                   // redação
    { id: 'etica', rotulo: 'Ética', padroes: ['ETICA', 'ÉTICA NO SERVICO PUBLICO', 'CODIGO DE ETICA'] },          // ética
    { id: 'administracao', rotulo: 'Administração', padroes: ['ADMINISTRACAO PUBLICA', 'ADMINISTRAÇÃO PÚBLICA', 'NOCOES DE ADMINISTRACAO'] }, // administração
    { id: 'contabilidade', rotulo: 'Contabilidade', padroes: ['CONTABILIDADE', 'AUDITORIA', 'CONTABIL'] },        // contabilidade
    { id: 'pedagogia', rotulo: 'Pedagogia', padroes: ['CONHECIMENTOS PEDAGOGICOS', 'PEDAGOGIA'] }                 // pedagogia
  ],

  // ---------- Bancas organizadoras conhecidas ----------
  // Cada item tem o rótulo bonito e os apelidos que procuramos no texto
  BANCAS: [
    { rotulo: 'CESPE/Cebraspe', padroes: ['CEBRASPE', 'CESPE'] },                    // Cebraspe
    { rotulo: 'FGV', padroes: ['FUNDACAO GETULIO VARGAS', 'FGV'] },                  // FGV
    { rotulo: 'FCC', padroes: ['FUNDACAO CARLOS CHAGAS', 'FCC'] },                   // FCC
    { rotulo: 'Vunesp', padroes: ['VUNESP', 'FUNDACAO PARA O VESTIBULAR'] },         // Vunesp
    { rotulo: 'IBFC', padroes: ['IBFC', 'INSTITUTO BRASILEIRO DE FORMACAO'] },       // IBFC
    { rotulo: 'FUMARC', padroes: ['FUMARC'] },                                       // FUMARC
    { rotulo: 'Instituto AOCP', padroes: ['AOCP'] },                                 // AOCP
    { rotulo: 'IDECAN', padroes: ['IDECAN'] },                                       // IDECAN
    { rotulo: 'CEBRASP', padroes: ['CEBRASP', 'CENTRO BRASILEIRO DE APOIO E SELECAO'] }, // CEBRASP (GCM/prefeituras SP)
    { rotulo: 'QUADRIX', padroes: ['QUADRIX'] },                                     // QUADRIX
    { rotulo: 'CESGRANRIO', padroes: ['CESGRANRIO'] },                               // Cesgranrio
    { rotulo: 'Consulplan', padroes: ['CONSULPLAN'] },                               // Consulplan
    { rotulo: 'IBADE', padroes: ['IBADE'] },                                         // IBADE
    { rotulo: 'FUNDATEC', padroes: ['FUNDATEC'] },                                   // FUNDATEC
    { rotulo: 'Selecon', padroes: ['SELECON'] },                                     // Selecon
    { rotulo: 'Legalle', padroes: ['LEGALLE'] },                                     // Legalle
    { rotulo: 'IBGP', padroes: ['IBGP'] },                                           // IBGP
    { rotulo: 'Instituto Mais', padroes: ['INSTITUTO MAIS'] },                       // Instituto Mais
    { rotulo: 'ENEM/Inep', padroes: ['ENEM', 'INEP'] },                              // ENEM (vestibular)
    { rotulo: 'Fuvest/USP', padroes: ['FUVEST', 'FUNDACAO UNIVERSITARIA PARA O VESTIBULAR'] }, // Fuvest (USP)
    { rotulo: 'Comvest/Unicamp', padroes: ['COMVEST', 'UNICAMP'] },                  // Comvest (Unicamp)
    { rotulo: 'Univesp', padroes: ['UNIVESP', 'UNIVERSIDADE VIRTUAL DO ESTADO'] },   // Univesp
    { rotulo: 'Copeve/UFMG', padroes: ['COPEVE', 'UFMG'] },                          // Copeve (UFMG)
    { rotulo: 'Coperve/UFSC', padroes: ['COPERVE', 'UFSC'] },                        // Coperve (UFSC)
    { rotulo: 'FATEC', padroes: ['FATEC', 'FACULDADE DE TECNOLOGIA'] },              // Fatec
    { rotulo: 'ETEC', padroes: ['ETEC', 'ESCOLA TECNICA ESTADUAL'] }                 // Etec
  ],

  // ---------- Dicas de estratégia por banca ----------
  // Quando o edital não identifica a banca, o usuário informa e recebe estas dicas
  BANCAS_DICAS: [
    {
      rotulo: 'CESPE/Cebraspe',
      aliases: ['CEBRASPE', 'CESPE', 'CEPS'],
      dicas: [
        'Formato certo/errado: cada erro desconta um acerto — não chute no escuro.',
        'A palavra-exceção decide: "salvo", "exceto", "desde que", "ainda que" mudam o gabarito.',
        'Lei seca + jurisprudência: ela cobra o texto literal E a aplicação dele.',
        'Cuidado com "sempre/nunca/todos" — os absolutos são a pegadinha preferida.'
      ]
    },
    {
      rotulo: 'FGV',
      aliases: ['FGV', 'FUNDACAO GETULIO VARGAS', 'GETULIO VARGAS'],
      dicas: [
        'Português pesado: exige interpretação contextual, sinonímia fina e reescrita de frase.',
        'Gosta das exceções e dos "pode/deve" — atenção ao que é obrigação e o que é faculdade.',
        'Cobra doutrina e jurisprudência — saber o conceito importa mais que decorar.',
        'Enunciados longos: sublinhe o pedido antes de ler as alternativas.'
      ]
    },
    {
      rotulo: 'FCC',
      aliases: ['FCC', 'FUNDACAO CARLOS CHAGAS', 'CARLOS CHAGAS'],
      dicas: [
        'Lei seca na veia: copia artigo ao pé da letra — decore prazos, números e palavras exatas.',
        'Questões diretas e objetivas: a resposta está no texto legal, não na interpretação.',
        'Erros de um detalhe só: troca um verbo, um prazo ou um inciso.',
        'Repita a leitura dos artigos mais cobrados do edital — ela recicla os mesmos.'
      ]
    },
    {
      rotulo: 'Vunesp',
      aliases: ['VUNESP', 'FUNDACAO PARA O VESTIBULAR'],
      dicas: [
        'Enunciados longos com caso prático: leia o exemplo e encaixe o conceito.',
        'Formato "julgue o item": trate cada assertiva separadamente — um item não anula o outro.',
        'Jurisprudência atual aparece bastante — siga os informativos do STF/STJ.',
        'Nas pegadinhas, troca a ordem dos artigos e inverte competências.'
      ]
    },
    {
      rotulo: 'IBFC',
      aliases: ['IBFC', 'INSTITUTO BRASILEIRO DE FORMACAO'],
      dicas: [
        'Forte em nível médio e prefeituras: gramática normativa e lei seca dominam.',
        'Cobre a literalidade — decore prazos, percentuais e nomes exatos das leis.',
        'Enunciados curtos: o erro costuma estar num detalhe pequeno.',
        'Atualidades e conhecimentos gerais têm peso real — revise notícias do ano.'
      ]
    },
    {
      rotulo: 'Instituto AOCP',
      aliases: ['AOCP', 'INSTITUTO AOCP'],
      dicas: [
        'Prefeituras e níveis médio/fundamental: decoreba de lei e português técnico.',
        'Repete padrões: as mesmas leis e os mesmos artigos voltam de concurso em concurso.',
        'Pegadinha de "troca-o-artigo": altera um número ou uma competência da lei.',
        'Faça provas anteriores da própria AOCP — a repetição é alta.'
      ]
    },
    {
      rotulo: 'Cesgranrio',
      aliases: ['CESGRANRIO'],
      dicas: [
        'Bancos e Petrobras: português contextual + matemática financeira aplicada.',
        'Interpretação acima da decoreba: ela quer o raciocínio por trás do conceito.',
        'Redação/dissertação em muitos cargos — treine texto dissertativo.',
        'Cuidado com a "alternativa parcialmente certa" — leia a última palavra.'
      ]
    },
    {
      rotulo: 'Consulplan',
      aliases: ['CONSULPLAN'],
      dicas: [
        'Municípios e prefeituras: legislação municipal e orgânica local têm peso alto.',
        'Português normativo forte — gramática aplicada à lei.',
        'Questões de nível médio com decoreba direta.',
        'Leia a lei orgânica do município — ela é a seção mais mortal do edital.'
      ]
    },
    {
      rotulo: 'QUADRIX',
      aliases: ['QUADRIX'],
      dicas: [
        'Forte no DF e região: questões objetivas de lei seca e decoreba.',
        'Os erros vêm da troca de palavras pequenas — "pode" x "deve", "e" x "ou".',
        'História e geografia do DF caem em vários editais — revise o local.',
        'Faça provas anteriores — os padrões de redação se repetem.'
      ]
    },
    {
      rotulo: 'IDECAN',
      aliases: ['IDECAN'],
      dicas: [
        'Prefeituras menores: questões literais de lei, nível médio e fundamental.',
        'Interpretação direta — sem rodeios na alternativa.',
        'Lei orgânica municipal e estatuto do servidor locais são o coração do edital.',
        'Atenção a datas, prazos e percentuais — ela cobra os números.'
      ]
    },
    {
      rotulo: 'CEBRASP',
      aliases: ['CEBRASP', 'CENTRO BRASILEIRO DE APOIO'],
      dicas: [
        'A banca dos GCMs e prefeituras de São Paulo: nível médio/fundamental com muita legislação.',
        'Decoreba de lei: Estatuto da GCM (Lei 13.022), LEP, Maria da Penha e leis municipais caem sempre.',
        'Raciocínio lógico e português normativo têm peso real — não negligencie.',
        'Prova objetiva direta: faça provas anteriores da própria CEBRASP, ela repete modelos.'
      ]
    },
    {
      rotulo: 'ENEM/Inep',
      aliases: ['ENEM', 'INEP'],
      dicas: [
        'Questões gigantes de contexto: a resposta está no texto-base — leia com calma.',
        'Competências e habilidades: não é decoreba, é aplicação do conteúdo.',
        'Interdisciplinar: uma questão pode misturar história, geografia e atualidades.',
        'Redação dissertativo-argumentativa vale muito — treine a estrutura.'
      ]
    },
    {
      rotulo: 'Fuvest/USP',
      aliases: ['FUVEST', 'USP', 'FUNDACAO UNIVERSITARIA PARA O VESTIBULAR'],
      dicas: [
        'Interpretação profunda e leitura fina: os enunciados são longos e exigentes.',
        'Literatura obrigatória: as 9 leituras da lista caem — leia com antecedência.',
        'Questões contextualizadas com texto de apoio — ancoragem no texto é tudo.',
        '2ª fase dissertativa: treine resposta argumentada com repertório.'
      ]
    },
    {
      rotulo: 'Comvest/Unicamp',
      aliases: ['COMVEST', 'UNICAMP'],
      dicas: [
        'Casos contextualizados longos: o enunciado já ensina — use-o na resposta.',
        'Interdisciplinar real: biologia com química, história com geografia.',
        'Literatura obrigatória forte: as leituras da Unicamp são cobrança clássica.',
        'Respostas dissertativas na 2ª fase — treine a escrita científica.'
      ]
    },
    {
      rotulo: 'Univesp',
      aliases: ['UNIVESP', 'UNIVERSIDADE VIRTUAL DO ESTADO'],
      dicas: [
        'Vestibular de padrão Vunesp: questões objetivas com contextualização.',
        'Base do ensino médio: o conteúdo segue o currículo paulista.',
        'Redação com tema de atualidade — acompanhe notícias do ano.',
        'Prova única por ano: cada ponto conta mais — revise os erros das anteriores.'
      ]
    },
    {
      rotulo: 'Outra banca',
      aliases: [],                                                                    // fallback genérico
      dicas: [
        'Baixe as provas anteriores da mesma banca — o estilo se repete.',
        'Estude o edital dela com atenção ao número de questões por matéria.',
        'Perceba o padrão de cobrança: lei seca, interpretação ou caso prático.',
        'Treine o formato (certo/errado, múltipla escolha, julgue-o-item) da prova.'
      ]
    }
  ],

  // ---------- Palavras típicas de nome de cargo ----------
  PALAVRAS_CARGO: ['AGENTE', 'ANALISTA', 'ASSISTENTE', 'AUXILIAR', 'TECNICO', 'PROFESSOR', 'AUDITOR', 'OFICIAL', 'GUARDA', 'MOTORISTA', 'ENFERMEIRO', 'FISCAL', 'INSPETOR', 'ESCRIVAO', 'DELEGADO', 'PERITO', 'RECEPCIONISTA', 'SECRETARIO', 'ENGENHEIRO', 'ADVOGADO', 'CONTADOR', 'MEDICO', 'ODONTOLOGO', 'ARQUITETO', 'ADMINISTRADOR', 'COZINHEIRO', 'PORTEIRO', 'ZELADOR', 'VIGIA', 'SERVENTE', 'PEDREIRO', 'ELETRICISTA', 'GARI', 'JARDINEIRO', 'PSICOLOGO', 'BIBLIOTECARIO', 'FARMACEUTICO', 'NUTRICIONISTA', 'FONOAUDIOLOGO', 'PROCURADOR', 'SOCORRISTA', 'SOLDADO', 'ESCRITURARIO', 'CONSULTOR', 'POLICIAL', 'PENITENCIARIO', 'BOMBEIRO', 'MONITOR', 'LEGISLATIVO', 'OPERADOR', 'BANCARIO'],

  // ---------- Cargos conhecidos (reconhecimento direto por nome) ----------
  // Editais de carreiras famosas citam o cargo completo — detectamos pelo nome exato
  CARGOS_CONHECIDOS: [
    { rotulo: 'Agente Administrativo', padroes: ['AGENTE ADMINISTRATIVO'] },                         // agente administrativo
    { rotulo: 'Agente da Polícia Federal', padroes: ['AGENTE DE POLICIA FEDERAL', 'AGENTE FEDERAL'] }, // PF
    { rotulo: 'Policial Rodoviário Federal', padroes: ['POLICIAL RODOVIARIO FEDERAL', 'RODOVIARIO FEDERAL'] }, // PRF
    { rotulo: 'Perito Criminal', padroes: ['PERITO CRIMINAL'] },                                     // perito criminal
    { rotulo: 'Perito Oficial', padroes: ['PERITO OFICIAL'] },                                       // perito oficial
    { rotulo: 'Analista Judiciário', padroes: ['ANALISTA JUDICIARIO'] },                             // analista de tribunais
    { rotulo: 'Técnico Judiciário', padroes: ['TECNICO JUDICIARIO'] },                               // técnico de tribunais
    { rotulo: 'Analista de Tribunal', padroes: ['ANALISTA DE TRIBUNAL', 'ANALISTA DO TRIBUNAL'] },   // analista de tribunal
    { rotulo: 'Consultor Legislativo', padroes: ['CONSULTOR LEGISLATIVO'] },                         // consultor legislativo
    { rotulo: 'Técnico do Seguro Social', padroes: ['TECNICO DO SEGURO SOCIAL'] },                   // INSS técnico
    { rotulo: 'Escriturário', padroes: ['ESCRITURARIO'] },                                           // escriturário (BB/Caixa)
    { rotulo: 'Técnico Bancário', padroes: ['TECNICO BANCARIO'] },                                   // técnico bancário (Caixa)
    { rotulo: 'Técnico de Operações', padroes: ['TECNICO DE OPERACOES', 'TÉCNICO(A) DE OPERAÇÕES'] }, // Petrobras operacional
    { rotulo: 'Técnico do Banco Central', padroes: ['TECNICO DO BANCO CENTRAL', 'TECNICO DO BACEN'] }, // Bacen técnico
    { rotulo: 'Soldado', padroes: ['SOLDADO'] },                                                     // soldado PM/bombeiro
    { rotulo: 'Polícia Penal', padroes: ['POLICIA PENAL', 'POLICIAL PENAL', 'AGENTE PENITENCIARIO', 'AGENTE DE SEGURANCA PENITENCIARIA'] }, // polícia penal
    { rotulo: 'Guarda Civil Municipal', padroes: ['GUARDA CIVIL MUNICIPAL', 'GUARDA MUNICIPAL'] }      // GCM
  ],

  // ---------- Requisitos típicos detectados no texto ----------
  // Cada item tem o rótulo do chip e os padrões que o acusam no edital
  REQUISITOS: [
    { rotulo: 'CNH / habilitação', padroes: ['CNH', 'CARTEIRA NACIONAL DE HABILITACAO', 'HABILITACAO NA CATEGORIA'] }, // habilitação
    { rotulo: 'Título de eleitor', padroes: ['TITULO DE ELEITOR'] },                               // título de eleitor
    { rotulo: 'Quitação militar', padroes: ['QUITACAO MILITAR', 'SERVICO MILITAR', 'RESERVISTA'] }, // quitação militar
    { rotulo: 'Antecedentes criminais', padroes: ['ANTECEDENTES CRIMINAIS', 'CERTIDAO DE ANTECEDENTES', 'BONS ANTECEDENTES', 'FIDONEIDADE'] }, // antecedentes
    { rotulo: 'Exame toxicológico', padroes: ['TOXICOLOGICO'] },                                   // toxicológico
    { rotulo: 'Avaliação médica/psicológica', padroes: ['EXAME MEDICO', 'EXAMES MEDICOS', 'PSICOTECNICO', 'EXAME PSICOLOGICO', 'AVALIACAO PSICOLOGICA'] }, // médico/psico
    { rotulo: 'Investigação social', padroes: ['INVESTIGACAO SOCIAL', 'VIDA PREGRESSA', 'SINDICANCIA DE VIDA PREGRESSA'] }, // investigação social (PF!)
    { rotulo: 'Teste físico (TAF)', padroes: ['TAF', 'APTIDAO FISICA', 'TESTE FISICO', 'CAPACIDADE FISICA'] }, // TAF
    { rotulo: 'Altura mínima', padroes: ['ALTURA MINIMA', 'ESTATURA MINIMA'] },                    // altura mínima
    { rotulo: 'Curso de formação', padroes: ['CURSO DE FORMACAO'] }                                // curso de formação
  ],

  // ---------- Meses em português (para datas escritas por extenso) ----------
  MESES: { JANEIRO: 1, FEVEREIRO: 2, MARCO: 3, ABRIL: 4, MAIO: 5, JUNHO: 6, JULHO: 7, AGOSTO: 8, SETEMBRO: 9, OUTUBRO: 10, NOVEMBRO: 11, DEZEMBRO: 12 },

  // Normaliza o texto: tira acentos e deixa tudo maiúsculo (PDFs bagunçam acentos)
  normalizar(texto) {
    return String(texto)                                    // garante que é texto
      .normalize('NFD')                                     // separa letras dos acentos
      .replace(/[\u0300-\u036f]/g, '')                      // remove os acentos
      .toUpperCase();                                       // tudo maiúsculo
  },

  // Escapa caracteres especiais para usar um texto dentro de uma expressão regular
  escaparRegex(texto) {
    return String(texto).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // coloca "\" antes dos especiais
  },

  // Confere se um padrão aparece no texto COMO PALAVRA INTEIRA
  // (isso evita o clássico "ARITMÉTICA contém ETICA")
  contemPadrao(normal, padrao) {
    const alvo = this.normalizar(padrao);                   // normaliza o padrão (tira acentos)
    const regex = new RegExp('\\b' + this.escaparRegex(alvo) + '\\b'); // monta a regex com limites
    return regex.test(normal);                              // devolve se bateu
  },

  // Acha a posição de um padrão (palavra inteira) dentro do texto normalizado
  acharPadrao(normal, padrao) {
    const alvo = this.normalizar(padrao);                   // normaliza o padrão
    const regex = new RegExp('\\b' + this.escaparRegex(alvo) + '\\b'); // monta a regex
    const m = regex.exec(normal);                           // procura
    return m ? m.index : -1;                                // devolve a posição (ou -1)
  },

  // ---------- MATÉRIAS ----------
  // Procura as matérias citadas no texto do edital
  detectarMaterias(texto) {
    const normal = this.normalizar(texto);                  // normaliza o texto inteiro
    const achadas = [];                                     // lista de matérias encontradas
    const vistas = new Set();                               // evita repetir a mesma matéria
    for (const materia of this.CATALOGO) {                  // percorre o catálogo
      if (materia.padroes.some(p => this.contemPadrao(normal, p))) { // algum padrão apareceu como palavra?
        if (vistas.has(materia.rotulo)) continue;           // se já registramos, pula
        vistas.add(materia.rotulo);                         // marca como registrada
        achadas.push({                                      // monta o registro da matéria
          id: materia.id,                                   // id da matéria
          rotulo: materia.rotulo,                           // nome bonito da matéria
          temBanco: BancoQuestoes.some(q => q.materia === materia.rotulo), // temos questões dela?
          questoes: this.pesoDaMateria(normal, materia),    // quantas questões o edital dá para ela (ou null)
          topicos: []                                       // tópicos do edital (preenchido depois)
        });
      }
    }
    return achadas;                                         // devolve as matérias achadas
  },

  // Descobre quantas questões o edital dá para uma matéria
  // ("Língua Portuguesa: 10 questões" ou "10 questões de Matemática")
  pesoDaMateria(normal, materia) {
    const linhas = normal.split('\n');                      // quebra em linhas
    for (const linha of linhas) {                           // percorre as linhas
      for (const padrao of materia.padroes) {               // percorre os padrões da matéria
        const posMateria = this.acharPadrao(linha, padrao); // onde a matéria aparece na linha
        if (posMateria === -1) continue;                    // não citada nesta linha, próxima
        // Pega números seguidos de "questões" NA MESMA LINHA — e fica com o MAIS PERTO da matéria
        // (editais listam várias matérias na mesma linha: "Português: 20; Matemática: 15")
        const contagens = Array.from(linha.matchAll(/(\d{1,3})\s*QUEST[OES]/g)); // todos os "N questões"
        if (contagens.length === 0) break;                  // linha sem contagem, para nesta linha
        let melhor = null;                                  // melhor candidato até agora
        for (const m of contagens) {                        // percorre as contagens da linha
          const dist = Math.abs(m.index - posMateria);      // distância até o nome da matéria
          if (!melhor || dist < melhor.dist) melhor = { dist, qtd: parseInt(m[1], 10) }; // fica com a mais perto
        }
        if (melhor && melhor.dist <= 60 && melhor.qtd >= 1 && melhor.qtd <= 200) return melhor.qtd; // perto o suficiente?
      }
    }
    return null;                                            // não achou contagem para a matéria
  },

  // ---------- CARGOS ----------
  // Tenta identificar os cargos citados no edital
  extrairCargos(texto) {
    const linhas = String(texto).split(/\r?\n/).map(l => l.trim()).filter(Boolean); // quebra em linhas limpas
    const normLinhas = linhas.map(l => this.normalizar(l)); // versão normalizada de cada linha
    const normalTexto = this.normalizar(texto);             // texto inteiro normalizado (para os conhecidos)
    const candidatos = new Set();                           // conjunto (evita repetidos)
    const vistosNorm = new Set();                           // conjunto normalizado (evita "Analista" + "ANALISTA")

    // Primeiro: procura os cargos conhecidos pelo nome exato (funciona sem seção de vagas)
    for (const conhecido of this.CARGOS_CONHECIDOS) {       // percorre a lista de cargos famosos
      if (conhecido.padroes.some(p => this.contemPadrao(normalTexto, p))) { // o nome aparece como palavra?
        candidatos.add(conhecido.rotulo);                   // registra o nome bonito
        vistosNorm.add(this.normalizar(conhecido.rotulo));  // registra a forma normalizada
      }
    }

    // Procura a seção de cargos para começar a varrer dali
    const indice = normLinhas.findIndex(l => /(DOS CARGOS|CARGOS|VAGAS|EMPREGOS)/.test(l) && l.length < 40); // acha o cabeçalho
    const inicio = indice >= 0 ? indice + 1 : 0;            // começa depois do cabeçalho (ou no início)
    const fim = Math.min(linhas.length, inicio + 60);       // varre no máximo 60 linhas

    for (let i = inicio; i < fim; i++) {                    // percorre as linhas da seção
      const linha = linhas[i];                              // linha original
      const n = normLinhas[i];                              // linha normalizada
      if (n.length < 3 || n.length > 80) continue;          // ignora linhas vazias ou enormes
      // Uma nova seção numerada ("2. DOS REQUISITOS") encerra a lista de cargos
      if (/^\d{1,2}\.\s*[A-Z]/.test(n) && !/^\d+\.\d/.test(n) && n.length < 60) break; // fim da seção
      // Linhas de requisito falam de cargos, mas não SÃO cargos
      if (/(NIVEL|ENSINO|ESCOLARIDADE|COMPLETO PARA O CARGO|REQUISITO|CARGA HORARIA|HABILITACAO)/.test(n)) continue; // pula requisitos
      if (/^(TABELA|QUADRO|CARGOS|VAGAS|TOTAL)/.test(n)) continue; // pula cabeçalhos de tabela
      const temPalavra = this.PALAVRAS_CARGO.some(p => n.includes(p)); // a linha cita um cargo típico?
      if (temPalavra) {                                     // se sim, é candidata a cargo
        // Limpa a linha: separadores de tabela, numeração, salários e vagas
        const limpo = linha.replace(/[|\t]+/g, ' ')         // troca separadores de tabela por espaço
          .replace(/\s{2,}/g, ' ')                          // junta espaços duplos
          .replace(/[-–:]?\s*R\$\s?[\d.,]+\s*$/i, '')       // corta "R$ 2.500,00" do fim (antes das vagas!)
          .replace(/[-–:]?\s*\d+(\.\d{3})*(,\d+)?\s*(VAGAS?|VAGA)\s*$/i, '') // corta "2000 vagas" do fim
          .replace(/^\d+(\.\d+)*[-–:.)]?\s*/, '')           // corta a numeração do início ("1.1 ")
          .replace(/[-–:]\s*$/g, '')                        // corta separador órfão no fim
          .trim();                                          // limpa as pontas
        const limpoNorm = this.normalizar(limpo);           // forma normalizada para deduplicar
        if (limpo.length >= 4 && !vistosNorm.has(limpoNorm)) { // novo e válido?
          candidatos.add(limpo.slice(0, 70));               // guarda o cargo (limitado a 70 chars)
          vistosNorm.add(limpoNorm);                        // marca como visto
        }
      }
    }

    // Plano B: se a seção não existia, varre o documento inteiro atrás de cargos
    if (candidatos.size === 0) {                            // se não achamos nada na seção
      for (let i = 0; i < normLinhas.length; i++) {         // percorre todas as linhas
        const n = normLinhas[i];                            // linha normalizada
        if (n.length > 70) continue;                        // ignora linhas longas demais
        const temPalavra = this.PALAVRAS_CARGO.some(p => n.includes(p)); // cita cargo típico?
        if (temPalavra && /\d/.test(n)) {                   // exige um número junto (vaga/salário)
          candidatos.add(linhas[i].slice(0, 70));           // guarda o candidato
        }
      }
    }

    return Array.from(candidatos).slice(0, 12);             // devolve no máximo 12 cargos
  },

  // ---------- BANCA ORGANIZADORA ----------
  // Descobre qual banca vai organizar o concurso (se o edital disser)
  // TEAM_005: casa o apelido como PALAVRA INTEIRA — antes o indexOf achava
  // "ETEC" dentro de "DETECÇÃO"/"DETECTOR" e qualquer edital saía como Etec.
  // Agora todas as ocorrências entram na disputa: ganha quem tem declaração de
  // banca colada no nome ("banca organizadora: FGV"); no empate, a primeira do texto.
  extrairBanca(texto) {
    const normal = this.normalizar(texto);                  // texto normalizado
    let melhor = null;                                      // melhor candidata até agora
    for (const banca of this.BANCAS) {                      // percorre as bancas conhecidas
      for (const padrao of banca.padroes) {                 // percorre os apelidos
        const alvo = this.normalizar(padrao);               // normaliza o apelido
        const regex = new RegExp('\\b' + this.escaparRegex(alvo) + '\\b', 'g'); // palavra inteira, todas as ocorrências
        for (const m of normal.matchAll(regex)) {           // percorre cada ocorrência do apelido
          const pos = m.index;                              // onde ela apareceu
          const janela = normal.slice(Math.max(0, pos - 160), pos + 160); // contexto largo em volta
          const perto = normal.slice(Math.max(0, pos - 60), pos + 60);  // contexto curto em volta
          // Contexto forte = a linha declara "banca/organizadora" colada no nome
          const declarada = /(BANCA|ORGANIZADORA|ORGANIZACAO)/.test(perto); // declaração explícita?
          const contexto = /(BANCA|ORGANIZADORA|ORGANIZACAO|REALIZACAO|APLICACAO|COMISSAO|EXECUCAO|INSTITUTO|FUNDACAO|EMPRESA)/.test(janela); // contexto certo?
          if (!contexto) continue;                          // menção sem contexto de banca — ignora
          const forca = declarada ? 2 : 1;                  // declaração explícita pesa o dobro
          if (!melhor || forca > melhor.forca || (forca === melhor.forca && pos < melhor.pos)) { // achou candidata melhor?
            melhor = { rotulo: banca.rotulo, trecho: this.limparTrecho(janela), pos: pos, forca: forca }; // guarda a candidata
          }
        }
      }
    }
    return melhor ? { rotulo: melhor.rotulo, trecho: melhor.trecho } : null; // devolve a vencedora (ou nada)
  },

  // Acha as dicas de uma banca pelo nome informado (ou digitado pelo usuário)
  // Devolve o conjunto de dicas — ou o fallback genérico quando não reconhece
  dicasDaBanca(nome) {
    const normal = this.normalizar(nome);                   // normaliza o que o usuário digitou
    const generica = this.BANCAS_DICAS[this.BANCAS_DICAS.length - 1]; // última entrada = fallback
    if (!normal) return null;                               // campo vazio — nada a dizer
    for (const banca of this.BANCAS_DICAS) {                // percorre o catálogo de dicas
      if (banca.aliases.length === 0) continue;             // pula a entrada genérica
      for (const alias of banca.aliases) {                  // testa cada apelido
        if (normal.indexOf(alias) !== -1) {                 // digitou o nome ou apelido?
          return { rotulo: banca.rotulo, dicas: banca.dicas, conhecida: true }; // banca conhecida
        }
      }
    }
    return { rotulo: nome, dicas: generica.dicas, conhecida: false }; // desconhecida — dicas genéricas
  },

  // ---------- DATAS ----------
  // Converte dia/mês/ano em objeto de data (ou null se for inválida)
  paraData(dia, mes, ano) {
    const d = parseInt(dia, 10);                            // dia
    const m = parseInt(mes, 10);                            // mês
    let a = parseInt(ano, 10);                              // ano
    if (a < 100) a += 2000;                                 // "25" vira 2025
    if (d < 1 || d > 31 || m < 1 || m > 12 || a < 2000 || a > 2100) return null; // data inválida
    return new Date(a, m - 1, d, 12, 0, 0);                 // meio-dia evita fuso estranho
  },

  // Junta todas as datas do texto, cada uma com o contexto da SUA linha
  // (usar só a linha + a anterior evita confundir a data da inscrição com a da prova)
  coletarDatas(texto) {
    const normal = this.normalizar(texto);                  // texto normalizado
    const linhas = normal.split('\n');                      // quebra em linhas
    const achadas = [];                                     // lista de datas com contexto
    for (let i = 0; i < linhas.length; i++) {               // percorre as linhas
      const linha = linhas[i];                              // linha atual
      // Contexto = linha anterior + linha atual (o sentido da data mora nelas)
      const contexto = (i > 0 ? linhas[i - 1] + ' ' : '') + linha; // monta o contexto curto
      // Formato numérico: 12/03/2025, 12-03-2025, 12.03.2025
      for (const m of linha.matchAll(/\b(\d{1,2})[\/.\-](\d{1,2})[\/.\-](\d{2,4})\b/g)) { // percorre as ocorrências
        const data = this.paraData(m[1], m[2], m[3]);       // monta a data
        if (data) achadas.push({ data, pos: achadas.length, contexto: contexto, linha: linha }); // guarda com contexto
      }
      // Formato por extenso: "12 de marco de 2025"
      for (const m of linha.matchAll(/\b(\d{1,2})\s+DE\s+([A-Z]+)\s+DE\s+(\d{4})\b/g)) { // percorre as ocorrências
        const mes = this.MESES[m[2]];                       // traduz o nome do mês
        if (!mes) continue;                                 // mês desconhecido, ignora
        const data = this.paraData(m[1], mes, m[3]);        // monta a data
        if (data) achadas.push({ data, pos: achadas.length, contexto: contexto, linha: linha }); // guarda com contexto
      }
    }
    return achadas;                                         // já sai em ordem de aparição no texto
  },

  // Separa as datas importantes: inscrições, prova e resultado
  extrairDatas(texto) {
    const todas = this.coletarDatas(texto);                 // todas as datas com contexto
    const datas = { inscricoesInicio: null, inscricoesFim: null, prova: null, taf: null, resultado: null, total: todas.length }; // pacote
    if (todas.length === 0) return datas;                   // sem datas, devolve vazio

    // Marca cada data com o "papel" que o contexto sugere.
    // Regra: a PRÓPRIA linha manda; só usa o contexto herdado (linha anterior)
    // quando a linha da data não fala de nenhum assunto — assim a "prova" não
    // vira "inscrição" só porque veio logo depois da seção de inscrições.
    const reInscricao = /(INSCRI|ISENCAO)/;                  // família inscrição
    const reTaf = /(TAF|APTIDAO FISICA|TESTE FISICO|CAPACIDADE FISICA)/; // família teste físico
    const reProva = /(PROVA|APLICACAO|REALIZACAO|EXAME|AVALIACAO)/;      // família prova
    const reResultado = /(GABARITO|RESULTADO|CLASSIFICACAO|HOMOLOGACAO|RECURSO)/; // família resultado
    for (const item of todas) {                             // percorre as datas
      const linha = item.linha || item.contexto;            // a linha da própria data
      const linhaTemPapel = reInscricao.test(linha) || reTaf.test(linha) || reProva.test(linha) || reResultado.test(linha); // linha já tem assunto?
      const base = linhaTemPapel ? linha : item.contexto;   // se tem, ela manda; senão, herda da anterior
      item.ehInscricao = reInscricao.test(base);            // fala de inscrição?
      item.ehTaf = reTaf.test(base);                        // fala de teste físico?
      item.ehProva = reProva.test(base) && !item.ehInscricao && !item.ehTaf; // fala de prova?
      item.ehResultado = reResultado.test(base);            // fala de resultado?
    }

    // Inscrições: pega a primeira e a última data de inscrição em ordem
    const inscricoes = todas.filter(d => d.ehInscricao);    // só as de inscrição
    if (inscricoes.length > 0) datas.inscricoesInicio = inscricoes[0].data; // primeira
    if (inscricoes.length > 1) datas.inscricoesFim = inscricoes[inscricoes.length - 1].data; // última

    // Prova: primeira data marcada como prova
    const provas = todas.filter(d => d.ehProva);            // só as de prova
    if (provas.length > 0) datas.prova = provas[0].data;    // primeira delas

    // Resultado/gabarito: a última data desse tipo (normalmente é a final)
    const resultados = todas.filter(d => d.ehResultado);    // só as de resultado
    if (resultados.length > 0) datas.resultado = resultados[resultados.length - 1].data; // última

    // TAF (teste físico): primeira data marcada como física
    const tafs = todas.filter(d => d.ehTaf);                // só as de teste físico
    if (tafs.length > 0) datas.taf = tafs[0].data;          // primeira delas

    return datas;                                           // devolve o pacote de datas
  },

  // ---------- NÚMEROS ----------
  // Extrai os números importantes: vagas, salário, taxa, questões e validade
  extrairNumeros(texto) {
    const normal = this.normalizar(texto);                  // texto normalizado
    const numeros = { vagas: null, salarioMin: null, salarioMax: null, taxa: null, questoes: null, validade: null, cargaHoraria: null, cadastroReserva: false }; // pacote

    // Vagas: o maior "N vagas" encontrado (o total costuma ser o maior)
    const vagas = Array.from(normal.matchAll(/(\d{1,4})\s*VAGAS?/g)).map(m => parseInt(m[1], 10)); // todas as ocorrências
    if (vagas.length > 0) numeros.vagas = Math.max(...vagas); // pega o maior número

    // Salários: todos os valores em reais, guardando o menor e o maior
    const salarios = Array.from(normal.matchAll(/R\$\s?([\d.]+,\d{2})/g)).map(m => this.paraNumero(m[1])); // converte
    const salariosValidos = salarios.filter(v => v !== null && v > 100); // descarta valores esquisitos
    if (salariosValidos.length > 0) {                       // se achou algum salário
      numeros.salarioMin = Math.min(...salariosValidos);    // menor salário
      numeros.salarioMax = Math.max(...salariosValidos);    // maior salário
    }

    // Taxa de inscrição: valor perto da palavra "taxa"
    const mTaxa = normal.match(/TAXA[^.]{0,60}?R\$\s?([\d.]+,\d{2})/) || normal.match(/R\$\s?([\d.]+,\d{2})[^.]{0,40}?TAXA/); // procura
    if (mTaxa) numeros.taxa = this.paraNumero(mTaxa[1]);    // guarda a taxa

    // Número de questões: perto de "prova objetiva" ou "N questoes"
    const mQuestoes = normal.match(/PROVA OBJETIVA[^.]{0,90}?(\d{1,3})\s*QUEST/) || normal.match(/(\d{1,3})\s*QUEST[OÕ]ES/); // procura
    if (mQuestoes) numeros.questoes = parseInt(mQuestoes[1], 10); // guarda a quantidade

    // Validade do concurso: "validade de 2 anos"
    const mValidade = normal.match(/VALIDADE[^.]{0,40}?(\d{1,2})\s*(ANOS?|MESES?)/); // procura
    if (mValidade) numeros.validade = { quantidade: parseInt(mValidade[1], 10), unidade: /ANO/.test(mValidade[2]) ? 'anos' : 'meses' }; // guarda

    // Carga horária semanal: "carga horária de 40 horas" ou "40h semanais"
    const mHoras = normal.match(/CARGA HORARIA[^.]{0,60}?(\d{1,3})\s*(HORAS|H)(?![A-Z])/) || normal.match(/(\d{1,3})\s*(HORAS|H)\s*SEMANAIS?/); // procura
    if (mHoras) numeros.cargaHoraria = parseInt(mHoras[1], 10); // guarda as horas semanais

    // Cadastro reserva: o edital prevê cadastro de reserva?
    numeros.cadastroReserva = /CADASTRO\s+(DE\s+)?RESERVA/.test(normal); // true/false

    return numeros;                                         // devolve o pacote de números
  },

  // Converte "2.500,00" no número 2500
  paraNumero(texto) {
    const limpo = String(texto).replace(/\./g, '').replace(',', '.'); // tira ponto de milhar, vírgula vira ponto
    const valor = parseFloat(limpo);                        // converte para número
    return isNaN(valor) ? null : valor;                     // devolve o número (ou null)
  },

  // ---------- ESCOLARIDADE ----------
  // Descobre os níveis de escolaridade exigidos
  extrairEscolaridade(texto) {
    const normal = this.normalizar(texto);                  // texto normalizado
    const niveis = [];                                      // lista de níveis achados
    // Forma 1: a palavra-chave perto de "nível/ensino/escolaridade" (caso clássico do edital)
    if (/(NIVEL|ENSINO|ESCOLARIDADE)[^.]{0,40}FUNDAMENTAL/.test(normal)) niveis.push('Fundamental'); // fundamental
    if (/(NIVEL|ENSINO|ESCOLARIDADE)[^.]{0,40}MEDIO/.test(normal)) niveis.push('Médio');             // médio
    if (/(NIVEL|ENSINO|ESCOLARIDADE)[^.]{0,40}SUPERIOR/.test(normal)) niveis.push('Superior');       // superior
    // Forma 2 (plano B): expressões soltas que entregam o nível sozinhas
    if (niveis.length === 0) {                              // só tenta se a forma 1 não achou
      if (/\bFUNDAMENTAL\s+COMPLETO\b|\bENSINO\s+FUNDAMENTAL\b/.test(normal)) niveis.push('Fundamental'); // fundamental solto
      if (/\bMEDIO\s+COMPLETO\b|\bENSINO\s+MEDIO\b|\bNIVEL\s+MEDIO\b/.test(normal)) niveis.push('Médio'); // médio solto
      if (/\bSUPERIOR\s+COMPLETO\b|\bFORMACAO\s+SUPERIOR\b|\bCURSO\s+SUPERIOR\b|\bGRADUACAO\b|\bDIPLOMA\b/.test(normal)) niveis.push('Superior'); // superior solto
    }
    return niveis;                                          // devolve os níveis
  },

  // ---------- REQUISITOS ----------
  // Detecta requisitos típicos do edital (CNH, título de eleitor, quitação, TAF...)
  extrairRequisitos(texto) {
    const normal = this.normalizar(texto);                  // texto normalizado
    const achados = [];                                     // lista de requisitos achados
    for (const req of this.REQUISITOS) {                    // percorre o catálogo de requisitos
      if (req.padroes.some(p => this.contemPadrao(normal, p))) { // algum padrão apareceu como palavra?
        achados.push(req.rotulo);                           // guarda o rótulo do requisito
      }
    }
    return achados;                                         // devolve os requisitos
  },

  // ---------- CONTEÚDO PROGRAMÁTICO TÓPICO A TÓPICO ----------
  // Pega o bloco do conteúdo programático e separa os tópicos de cada matéria
  extrairPrograma(texto) {
    const bruto = String(texto);                            // texto original
    // Acha o início da seção do conteúdo programático
    const m = bruto.match(/CONTE[UÚ]DO\s+PROGRAM[ÁA]TICO/i) || bruto.match(/PROGRAMA\s+DE\s+PROVAS?/i); // procura o cabeçalho
    if (!m) return [];                                      // sem seção, sem programa

    // Recorta a seção (até 8000 caracteres ou até outro cabeçalho importante)
    let trecho = bruto.slice(m.index, m.index + 8000);      // pedaço do texto
    const fim = trecho.slice(60).search(/\n\s*(DAS\s+DISPOSI|DISPOSI[ÇC][ÕO]ES|CRONOGRAMA|ANEXO\s+[IVX]+)/i); // procura o fim da seção
    if (fim > 0) trecho = trecho.slice(0, fim + 60);        // corta no fim da seção

    // Junta as linhas e vai agrupando por matéria
    const linhas = trecho.split(/\r?\n/).map(l => l.trim()).filter(l => l.length > 1); // linhas limpas
    const porMateria = {};                                  // matéria → texto dos tópicos
    let materiaAtual = null;                                // matéria sendo preenchida agora

    for (const linha of linhas) {                           // percorre as linhas da seção
      const normalLinha = this.normalizar(linha);           // linha normalizada
      let achouMateria = null;                              // matéria achada nesta linha
      for (const materia of this.CATALOGO) {                // percorre o catálogo
        for (const padrao of materia.padroes) {             // percorre os padrões
          const pos = this.acharPadrao(normalLinha, padrao); // onde a palavra aparece
          if (pos !== -1 && pos <= 25) { achouMateria = materia; break; } // começo da linha = cabeçalho da matéria
        }
        if (achouMateria) break;                            // já achou, para
      }

      if (achouMateria) {                                   // se a linha fala de uma matéria
        materiaAtual = achouMateria.rotulo;                 // passa a preencher essa matéria
        // Pega o que vem depois dos dois-pontos (onde a lista de tópicos costuma começar)
        const doisPontos = linha.indexOf(':');              // posição dos dois-pontos
        const sobra = doisPontos !== -1 ? linha.slice(doisPontos + 1) : ''; // texto depois dos dois-pontos
        if (!porMateria[materiaAtual]) porMateria[materiaAtual] = ''; // cria o espaço
        porMateria[materiaAtual] += ' ' + sobra;            // soma ao texto da matéria
      } else if (materiaAtual) {                            // linha comum dentro de uma matéria
        porMateria[materiaAtual] += ' ' + linha;            // continua somando
      }
    }

    // Transforma cada texto em uma lista de tópicos limpos
    const programa = [];                                    // lista final
    for (const rotulo in porMateria) {                      // percorre as matérias achadas
      const topicos = this.separarTopicos(porMateria[rotulo]); // quebra em tópicos
      if (topicos.length > 0) programa.push({ rotulo: rotulo, topicos: topicos }); // guarda se tiver tópico
    }
    return programa;                                        // devolve o programa
  },

  // Quebra o texto de uma matéria em tópicos (por ponto, ponto e vírgula ou quebra)
  separarTopicos(texto) {
    const limpo = String(texto).replace(/\s{2,}/g, ' ').trim(); // junta espaços
    if (!limpo) return [];                                  // vazio, sem tópicos
    const partes = limpo.split(/[;•·]|\.\s+|\d+\.\d+\.?\s*/); // quebra em pedaços
    const topicos = [];                                     // lista de tópicos
    const vistos = new Set();                               // evita repetição
    for (let parte of partes) {                             // percorre os pedaços
      parte = parte.replace(/^[\s\-–:.)]+/, '').replace(/\s+$/, '').trim(); // limpa as pontas
      if (parte.length < 4 || parte.length > 120) continue; // ignora pedaços ruins
      const chave = this.normalizar(parte);                 // chave para comparar
      if (vistos.has(chave)) continue;                      // já anotado, pula
      vistos.add(chave);                                    // marca como anotado
      topicos.push(parte.slice(0, 110));                    // guarda o tópico
      if (topicos.length >= 12) break;                      // no máximo 12 tópicos por matéria
    }
    return topicos;                                         // devolve os tópicos
  },

  // ---------- TRECHOS ----------
  // Separa trechos importantes do edital (citações literais)
  extrairTrechos(texto) {
    const secoes = [                                        // seções que queremos citar
      { nome: 'Conteúdo programático', regex: /CONTE[UÚ]DO\s+PROGRAM[ÁA]TICO/i }, // o que estudar
      { nome: 'Requisitos para o cargo', regex: /REQUISITOS?/i },                 // o que precisa ter
      { nome: 'Remuneração', regex: /REMUNERA[ÇC][ÃA]O|VENCIMENTOS?|SAL[ÁA]RIO/i }, // quanto paga
      { nome: 'Inscrições', regex: /INSCRI[ÇC][ÕO]ES|DAS INSCRI/i },               // como se inscrever
      { nome: 'Provas e avaliação', regex: /DAS PROVAS|AVALIA[ÇC][ÃA]O|PROVA OBJETIVA/i }, // como será a prova
      { nome: 'Atribuições do cargo', regex: /ATRIBUI[ÇC][ÕO]ES|DAS ATRIBUI/i },  // o que o cargo faz
      { nome: 'Cronograma', regex: /CRONOGRAMA|CALEND[ÁA]RIO/i }                  // prazos
    ];
    const trechos = [];                                     // lista de trechos achados
    for (const secao of secoes) {                           // percorre as seções
      const m = String(texto).match(secao.regex);           // procura o cabeçalho da seção
      if (m) {                                              // se achou
        let pedaco = String(texto).slice(m.index, m.index + 900); // pega 900 caracteres dali em diante
        // Corta quando começa a PRÓXIMA seção numerada (ex.: "5. DAS PROVAS"),
        // assim o trecho fica só com o assunto da seção encontrada
        const proxima = pedaco.slice(40).search(/\n\s*\d{1,2}\.\s*(DAS|DOS|DA|DO)\s+[A-ZÀ-Ú]/); // acha a próxima seção
        if (proxima > 0) pedaco = pedaco.slice(0, proxima + 40); // corta ali
        pedaco = pedaco.replace(/\s{2,}/g, ' ').trim().slice(0, 600); // limpa e limita o tamanho
        trechos.push({ nome: secao.nome, texto: pedaco + '…' }); // guarda o trecho citável
      }
    }
    return trechos;                                         // devolve os trechos
  },

  // Limpa um trecho para exibir bonitinho na tela
  limparTrecho(texto) {
    return String(texto).replace(/\s{2,}/g, ' ').trim().slice(0, 160); // junta espaços e corta
  },

  // ---------- CONFIANÇA ----------
  // Dá uma nota de 0 a 100 para a qualidade da análise (quanto mais achou, melhor)
  calcularConfianca(analise) {
    let nota = 0;                                           // começa do zero
    if (analise.titulo) nota += 8;                          // achou o título
    if (analise.cargos.length > 0) nota += 18;              // achou cargos
    if (analise.cargos.length >= 3) nota += 6;              // achou vários cargos
    if (analise.materias.length >= 3) nota += 20;           // achou matérias suficientes
    else if (analise.materias.length > 0) nota += 10;       // achou algumas matérias
    if (analise.trechos.length >= 2) nota += 12;            // achou seções importantes
    if (analise.banca) nota += 10;                          // identificou a banca
    if (analise.datas.prova) nota += 10;                    // achou a data da prova
    if (analise.datas.inscricoesFim) nota += 4;             // achou o fim das inscrições
    if (analise.numeros.questoes) nota += 4;                // achou o número de questões
    if (analise.numeros.vagas) nota += 4;                   // achou o total de vagas
    if (analise.programa.length > 0) nota += 8;             // separou o conteúdo programático
    if (analise.escolaridade.length > 0) nota += 4;         // descobriu a escolaridade
    if (analise.requisitos && analise.requisitos.length > 0) nota += 3; // achou requisitos típicos
    if (analise.datas.taf) nota += 2;                       // achou a data do TAF
    if (analise.materias.some(m => m.questoes)) nota += 3;  // achou o peso de alguma matéria
    if (analise.numeros.cargaHoraria || analise.numeros.cadastroReserva) nota += 2; // detalhes de jornada/reserva
    // Junta os tópicos do programa dentro de cada matéria
    for (const item of analise.programa) {                  // percorre o programa
      const alvo = analise.materias.find(m => m.rotulo === item.rotulo); // acha a matéria correspondente
      if (alvo) alvo.topicos = item.topicos;                // anexa os tópicos do edital
    }
    return Math.max(0, Math.min(100, nota));                // limita entre 0 e 100
  },

  // ---------- ANÁLISE COMPLETA ----------
  // Faz tudo de uma vez e devolve o pacote completo
  analisar(texto) {
    if (!texto || String(texto).trim().length < 40) {       // texto curto demais para analisar
      return { titulo: '', cargos: [], materias: [], trechos: [], programa: [], banca: null, requisitos: [], // devolve vazio
        datas: { inscricoesInicio: null, inscricoesFim: null, prova: null, taf: null, resultado: null, total: 0 },
        numeros: { vagas: null, salarioMin: null, salarioMax: null, taxa: null, questoes: null, validade: null, cargaHoraria: null, cadastroReserva: false },
        escolaridade: [], confianca: 0, caracteres: 0, valido: false }; // pacote vazio
    }

    const linhas = String(texto).split(/\r?\n/).map(l => l.trim()).filter(Boolean); // quebra em linhas
    // Monta a análise campo por campo
    const analise = {
      titulo: linhas[0].slice(0, 140),                      // primeira linha vira o "título" do concurso
      cargos: this.extrairCargos(texto),                    // cargos detectados
      materias: this.detectarMaterias(texto),               // matérias detectadas
      trechos: this.extrairTrechos(texto),                  // trechos citáveis
      programa: this.extrairPrograma(texto),                // conteúdo programático por matéria
      banca: this.extrairBanca(texto),                      // banca organizadora
      datas: this.extrairDatas(texto),                      // datas importantes
      numeros: this.extrairNumeros(texto),                  // números do edital
      escolaridade: this.extrairEscolaridade(texto),        // escolaridade exigida
      requisitos: this.extrairRequisitos(texto),            // requisitos típicos detectados
      caracteres: String(texto).length,                     // tamanho do texto lido
      valido: true                                          // análise válida
    };
    analise.confianca = this.calcularConfianca(analise);    // nota de confiança (anexa os tópicos)
    return analise;                                         // devolve tudo
  }
};
