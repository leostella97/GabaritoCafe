/* ============================================================
   GABARITO CAFÉ — js/dados-temas.js
   Os temas que mais caem em concursos e vestibulares,
   escritos em tom de estudante. Frequência vai de 1 a 5
   (5 = cai demais, pode apostar o cafezinho).
   ============================================================ */

// Conteúdo dos temas de estudo
const DadosTemas = {

  // ---------- Temas campeões de CONCURSOS ----------
  concursos: [
    {
      materia: 'Língua Portuguesa',      // nome da matéria
      icone: '📖',                       // emoji do cartão
      resumo: 'A espinha dorsal de toda prova: quase nenhum concurso escapa dela e é onde muita gente é eliminada por bobeira.', // resumo em tom de estudante
      topicos: [                         // tópicos que mais caem dentro da matéria
        { nome: 'Interpretação de texto', frequencia: 5, porque: 'Abre praticamente toda prova e decide sua classificação.', como: 'Leia o enunciado antes do texto e grife o verbo principal: é ele que diz o que a questão quer.' },
        { nome: 'Concordância verbal e nominal', frequencia: 4, porque: 'Toda banca adora um sujeito escondido no meio da frase.', como: 'Ache o sujeito e pergunte "quem faz a ação?" antes de conjugar o verbo.' },
        { nome: 'Crase', frequencia: 4, porque: 'É clássica, tem regra decorável e a banca sabe que você confunde "a" com "à".', como: 'Troque a palavra por uma masculina: se aparecer "ao", tem crase. "Vou à praia" → "Vou ao clube".' },
        { nome: 'Pontuação (especialmente vírgula)', frequencia: 4, porque: 'Uma vírgula muda o sentido, e a banca cobra exatamente isso.', como: 'Nunca separe sujeito de verbo. Releia em voz alta: onde você respira, a vírgula costuma morar.' },
        { nome: 'Regência verbal e nominal', frequencia: 3, porque: 'Verbos como "assistir", "preferir" e "visar" são os queridinhos das bancas.', como: 'Faça fichas dos verbos que mudam de sentido conforme a preposição (assistir o / assistir a).' },
        { nome: 'Colocação pronominal', frequencia: 3, porque: 'Cai direto na FCC e na FGV, quase sempre com palavra negativa atraindo o pronome.', como: 'Decore os gatilhos de próclise: palavras negativas, advérbios e pronomes relativos puxam o pronome para antes do verbo.' },
        { nome: 'Classes de palavras e morfologia', frequencia: 4, porque: 'Pronomes, conjunções e afixos aparecem em análise e reescrita de frases.', como: 'Decore a função de cada classe: pronome substitui o nome, conjunção liga orações, artigo determina. Identifique-as no texto real.' },
        { nome: 'Figuras de linguagem', frequencia: 3, porque: 'Metáfora, metonímia e hipérbole caem na interpretação.', como: 'Metáfora = comparação implícita; metonímia = parte pelo todo; hipérbole = exagero. Um exemplo do cotidiano para cada.' }
      ]
    },
    {
      materia: 'Matemática',             // nome da matéria
      icone: '🧮',                       // emoji
      resumo: 'Não foge: porcentagem e regra de três aparecem em uns 80% das provas, do nível fundamental ao superior.', // resumo
      topicos: [                         // tópicos
        { nome: 'Porcentagem', frequencia: 5, porque: 'Está em desconto, aumento, taxa e até em gráfico de atualidades.', como: 'Transforme tudo em fração de 100: 20% é 20/100. E cuidado com aumentos sucessivos: 10% + 10% não é 20%.' },
        { nome: 'Regra de três (simples e composta)', frequencia: 5, porque: 'Resolve metade das questões "do dia a dia" que a banca inventa.', como: 'Monte a tabela com grandezas, veja se são diretas ou inversas e multiplique em cruz na simples.' },
        { nome: 'Juros simples e compostos', frequencia: 4, porque: 'Cai em quase todo edital que tem matemática financeira.', como: 'Simples: J = C·i·t. Composto: M = C·(1+i)^t. Grave as fórmulas e faça 10 questões de cada.' },
        { nome: 'Média aritmética', frequencia: 4, porque: 'É rápida de cobrar e rende questão "de graça" para quem treinou.', como: 'Some tudo e divida pela quantidade. Em média ponderada, não esqueça de multiplicar pelos pesos.' },
        { nome: 'Equações e sistemas do 1º grau', frequencia: 3, porque: 'Aparece disfarçada em probleminhas de texto.', como: 'Traduza o texto: "o dobro de x mais 5" vira 2x + 5. Depois isole o x sem medo.' },
        { nome: 'Razão, proporção e divisão proporcional', frequencia: 3, porque: 'Divide lucro, mistura tinta e paga herança: a banca ama.', como: 'Some as partes da razão e divida o total por essa soma para achar o valor de uma "parte".' },
        { nome: 'MMC e MDC', frequencia: 3, porque: 'Problemas de ciclo e divisão exata rendem questão rápida.', como: 'MDC divide juntos; MMC encontra o reencontro dos ciclos. Fature nos primos e monte a tabelinha.' },
        { nome: 'Expressões numéricas e potências', frequencia: 4, porque: 'A ordem das operações é o erro mais clássico.', como: 'Parênteses → potência → multiplicação/divisão → soma/subtração. Treine a ordem até virar automático.' }
      ]
    },
    {
      materia: 'Raciocínio Lógico',      // nome da matéria
      icone: '🧩',                       // emoji
      resumo: 'O terror de muita gente — mas é puro treino: as questões seguem uns 6 modelos que se repetem.', // resumo
      topicos: [                         // tópicos
        { nome: 'Proposições, negações e equivalências', frequencia: 5, porque: 'É o carro-chefe da banca quando o edital cita "lógica proposicional".', como: 'Decore as negações: "todo" vira "algum não"; "p e q" vira "não p ou não q"; "se p então q" vira "p e não q".' },
        { nome: 'Sequências lógicas', frequencia: 4, porque: 'Aparece em toda prova e vale ponto rápido para quem enxerga o padrão.', como: 'Olhe a diferença entre termos seguidos antes de inventar fórmula: quase sempre é soma ou multiplicação.' },
        { nome: 'Diagramas lógicos (todo/algum/nenhum)', frequencia: 4, porque: 'Questão clássica de "todo A é B" que confunde geral.', como: 'Desenhe círculos! "Todo A é B" = círculo A dentro do B. O desenho resolve sem decorar.' },
        { nome: 'Verdades e mentiras', frequencia: 3, porque: 'Parece charada, mas tem método: testar cada hipótese.', como: 'Supõe que o primeiro diz a verdade e vê se o resto se sustenta. Se quebrar, troca a hipótese.' },
        { nome: 'Contagem e princípio multiplicativo', frequencia: 3, porque: 'Questão de combinar camiseta com calça que todo mundo erra por desatenção.', como: 'Multiplique as escolhas independentes. Se a ordem importar, é arranjo; se não, combinação.' },
        { nome: 'Calendários e contagem de dias', frequencia: 3, porque: '"Que dia da semana será daqui a N dias?" cai direto.', como: 'Divida por 7 e trabalhe com o resto: 30 dias = 4 semanas + 2 dias para frente.' },
        { nome: 'Silogismo e argumentação', frequencia: 3, porque: '"Se todo A é B e todo B é C..." é modelo fixo da banca.', como: 'Desenhe os círculos: encaixe as premissas e só conclua o que o desenho forçar.' }
      ]
    },
    {
      materia: 'Informática',            // nome da matéria
      icone: '💻',                       // emoji
      resumo: 'Presente em quase todo edital de nível médio, com Excel e segurança dominando as questões.', // resumo
      topicos: [                         // tópicos
        { nome: 'Excel / planilhas (fórmulas e atalhos)', frequencia: 5, porque: 'É o assunto mais cobrado de informática, disparado.', como: 'Abra o Excel de verdade e teste =SOMA, =MÉDIA, =SE e =PROCV. Decorar sem testar não funciona.' },
        { nome: 'Segurança da informação', frequencia: 4, porque: 'Phishing, malware e backup caem em toda prova recente.', como: 'Entenda os golpes: phishing imita banco e pede seus dados; backup é cópia de segurança. Relacione exemplos reais.' },
        { nome: 'Atalhos e Windows', frequencia: 4, porque: 'É o "ponto fácil" que a banca dá para quem usa o computador no dia a dia.', como: 'Decore os clássicos: Ctrl+C copiar, Ctrl+V colar, Ctrl+Z desfazer, Alt+Tab trocar janela, Alt+= soma no Excel.' },
        { nome: 'Internet e navegadores', frequencia: 3, porque: 'Modo anônimo e HTTP/HTTPS são perguntas certeiras.', como: 'Guarde: modo anônimo não esconde sua navegação do provedor, só do histórico local.' },
        { nome: 'Hardware básico', frequencia: 3, porque: 'RAM, SSD e processador aparecem em questões conceituais.', como: 'RAM é memória volátil (some ao desligar); SSD é armazenamento. Uma frase para cada peça resolve.' },
        { nome: 'Word e editores de texto', frequencia: 3, porque: 'Atalhos de formatação são perguntas frequentes.', como: 'Ctrl+N negrito, Ctrl+S sublinhado, Ctrl+I itálico. Treine no programa de verdade.' },
        { nome: 'LGPD e privacidade digital', frequencia: 4, porque: 'A lei de dados virou assunto certo em provas recentes.', como: 'Saiba os direitos do titular (acesso, correção, exclusão) e os papéis: controlador decide, operador executa.' }
      ]
    },
    {
      materia: 'Direito Constitucional', // nome da matéria
      icone: '⚖️',                       // emoji
      resumo: 'Cai em praticamente todo concurso de nível médio e superior — e o art. 5º é o rei absoluto.', // resumo
      topicos: [                         // tópicos
        { nome: 'Art. 5º (direitos e garantias fundamentais)', frequencia: 5, porque: 'É a mina de ouro: sozinho responde por boa parte da prova de constitucional.', como: 'Leia o art. 5º inteiro pelo menos 3 vezes na semana e sublinhe as exceções (são as mais cobradas).' },
        { nome: 'Remédios constitucionais (HC, MS, HD)', frequencia: 4, porque: 'Toda banca pergunta "qual remédio para qual direito".', como: 'Decore a tríade: Habeas Corpus = liberdade de locomoção; Mandado de Segurança = direito líquido e certo; Habeas Data = informações pessoais.' },
        { nome: 'Nacionalidade', frequencia: 4, porque: 'As exceções (estrangeiro a serviço do país) são pegadinha clássica.', como: 'Monte uma tabela: nato x naturalizado, com as exceções de cada caso. A exceção é a questão.' },
        { nome: 'Administração pública (art. 37)', frequencia: 4, porque: 'Os princípios LIMPE caem em TODA prova, inclusive de português e ética.', como: 'Decore LIMPE: Legalidade, Impessoalidade, Moralidade, Publicidade, Eficiência — e o que cada um significa.' },
        { nome: 'Organização dos poderes', frequencia: 3, porque: 'Separação de poderes e competências aparecem com frequência.', como: 'Faça um mapa mental com Legislativo, Executivo e Judiciário e a função típica de cada um.' },
        { nome: 'Direitos sociais (art. 6º-11)', frequencia: 4, porque: 'Saúde, educação e trabalho caem todo ano — e o rol é exemplificativo.', como: 'Decore os direitos sociais: saúde, educação, trabalho, moradia, lazer, segurança, previdência, proteção à maternidade e à infância, assistência.' },
        { nome: 'Segurança pública (art. 144)', frequencia: 3, porque: 'PF, PRF, PM e GCM cobram as competências de cada órgão.', como: 'PF = polícia judiciária da União; PRF = rodovias federais; PM = policiamento ostensivo; GCM = proteção de bens municipais. Um papel por força.' }
      ]
    },
    {
      materia: 'Direito Administrativo', // nome da matéria
      icone: '🏛️',                       // emoji
      resumo: 'Parece árido, mas é puro padrão: atos, poderes e licitação se repetem em todas as bancas.', // resumo
      topicos: [                         // tópicos
        { nome: 'Atos administrativos e atributos', frequencia: 5, porque: 'Os atributos (presunção, imperatividade, autoexecutoriedade) caem sem dó.', como: 'Uma frase para cada atributo e um exemplo real: multa de trânsito tem imperatividade (você obedece mesmo sem querer).' },
        { nome: 'Poderes administrativos', frequencia: 4, porque: 'Poder de polícia é disparado o mais cobrado.', como: 'Poder de polícia = Estado limitando direitos em nome do coletivo. Pense em fiscalização, alvará e multa.' },
        { nome: 'Licitações (Lei 14.133/2021)', frequencia: 4, porque: 'A lei nova virou febre nas provas recentes.', como: 'Decore as 5 modalidades novas: pregão, concorrência, concurso, leilão e diálogo competitivo.' },
        { nome: 'Responsabilidade civil do Estado', frequencia: 4, porque: 'O art. 37, §6º da CF é clássico de prova.', como: 'Guarde: o Estado responde objetivamente (não precisa provar culpa) pelos danos de seus agentes.' },
        { nome: 'Improbidade administrativa (Lei 8.429)', frequencia: 4, porque: 'As três espécies de ato ímprobo caem muito.', como: 'Decore os 3 tipos: enriquecimento ilícito, prejuízo ao erário e violação de princípios.' },
        { nome: 'Organização administrativa', frequencia: 3, porque: 'Autarquia, fundação e empresa pública se confundem.', como: 'Autarquia = direito público, criada por lei; fundação = pública ou privada; empresa pública = 100% estatal; SEM = capital misto.' },
        { nome: 'Serviços públicos e concessões', frequencia: 4, porque: 'Delegação e concessão caem contextualizados.', como: 'Concessão = licitação + contrato para empresa privada; permissão = precária e revogável. O serviço continua público.' }
      ]
    },
    {
      materia: 'Atualidades',            // nome da matéria
      icone: '🌎',                       // emoji
      resumo: 'Não dá para estudar só na véspera: é hábito. Dez minutinhos de notícia por dia valem ouro.', // resumo
      topicos: [                         // tópicos
        { nome: 'Meio ambiente e ODS (Agenda 2030)', frequencia: 4, porque: 'Sustentabilidade virou tema fixo de redação e objetivas.', como: 'Saiba que a ONU tem 17 Objetivos de Desenvolvimento Sustentável e cite 3 de cor: fome zero, educação, clima.' },
        { nome: 'Tecnologia e inteligência artificial', frequencia: 4, porque: 'IA generativa virou pergunta padrão de atualidades.', como: 'Entenda o básico: IA generativa cria conteúdo novo (texto, imagem) a partir de padrões aprendidos.' },
        { nome: 'Saúde e SUS', frequencia: 3, porque: 'Universalidade, integralidade e equidade caem até em prova de prefeitura.', como: 'Decore os 3 princípios do SUS e o que cada um significa na prática.' },
        { nome: 'Economia brasileira', frequencia: 3, porque: 'Inflação, juros e emprego aparecem contextualizados.', como: 'Inflação = aumento generalizado de preços. Quando ela sobe, o Banco Central sobe os juros. Ponto.' },
        { nome: 'Cidadania e democracia', frequencia: 3, porque: 'Voto, direitos e deveres são clássicos de prova cidadã.', como: 'Guarde as idades: voto obrigatório dos 18 aos 70; facultativo aos 16-17 e acima de 70.' },
        { nome: 'Geopolítica e conflitos atuais', frequencia: 4, porque: 'Guerras e blocos aparecem contextualizados em objetivas e redação.', como: 'Mapeie os conflitos do ano: quem são os lados, o que está em jogo e o papel dos organismos internacionais.' },
        { nome: 'Eleições e sistema eleitoral', frequencia: 3, porque: 'Voto, urna eletrônica e TSE são temas de cidadania.', como: 'TSE organiza as eleições; maioria absoluta elege em 1º turno presidente, governador e prefeito (cidades >200 mil).' }
      ]
    },
    {
      materia: 'Legislação',             // nome da matéria
      icone: '📜',                       // emoji
      resumo: 'Aqui o edital manda: cada órgão tem sua lei — e a banca copia o texto dela ao pé da letra.', // resumo
      topicos: [                         // tópicos
        { nome: 'Estatuto do servidor (lei do edital)', frequencia: 5, porque: 'Quando está no edital, é a matéria que mais derruba candidato.', como: 'Baixe a lei exata do edital e leia os artigos de deveres, proibições e penalidades — as bancas copiam o texto.' },
        { nome: 'Lei Orgânica / leis municipais', frequencia: 4, porque: 'Concurso de prefeitura cobra a lei local na veia.', como: 'Imprima a lei orgânica do município e grife prazos e competências: é decoreba pura.' },
        { nome: 'Lei 8.112 (regime federal)', frequencia: 5, porque: 'Nomeação, posse, licenças e PAD são clássicos de nível médio.', como: 'Decore os prazos: 30 dias para posse, 15 para exercício; e as licenças que mais caem.' },
        { nome: 'Lei de licitações (14.133)', frequencia: 4, porque: 'A lei nova virou febre nas provas recentes.', como: 'Decore as 5 modalidades e para que serve cada uma: pregão é bens e serviços comuns.' },
        { nome: 'LGPD e proteção de dados', frequencia: 3, porque: 'Lei recente que já virou pergunta padrão.', como: 'Foque nos direitos do titular: consentimento, acesso, correção e exclusão dos dados.' },
        { nome: 'Improbidade (Lei 8.429)', frequencia: 4, porque: 'Os três tipos de ato ímprobo caem disfarçados de situação.', como: 'Enriquecimento ilícito (o mais grave), prejuízo ao erário e violação de princípios — cada um com sua pena.' },
        { nome: 'ECA — criança e adolescente', frequencia: 4, porque: 'Proteção integral e prioridade caem em concursos de prefeitura.', como: 'Criança = até 12 anos; adolescente = 12-18; prioridade absoluta no atendimento; direito à vida, saúde e educação.' }
      ]
    },
    {
      materia: 'Ética',                  // nome da matéria
      icone: '🤝',                       // emoji
      resumo: 'Parece senso comum, mas a banca cobra os nomes técnicos: código de ética, conflito de interesses e censura.', // resumo
      topicos: [                         // tópicos
        { nome: 'Ética no serviço público', frequencia: 5, porque: 'Impessoalidade, moralidade e conflito de interesses caem em todo lugar.', como: 'Pense em situações: servidor usando o cargo para benefício próprio = violação. Relacione com o art. 37 da CF.' },
        { nome: 'Código de ética (Decreto 1.171)', frequencia: 5, porque: 'A lista de deveres e vedações do servidor é decoreba certa.', como: 'Leia o decreto original: são só 4 páginas e a banca copia os incisos.' },
        { nome: 'Conflito de interesses', frequencia: 4, porque: 'Situação-problema clássica das provas de ética.', como: 'Regra prática: o servidor deve declarar o conflito e se impedir de agir — memorize isso.' },
        { nome: 'Comissão de ética e censura', frequencia: 4, porque: 'As bancas confundem censura ética com demissão de propósito.', como: 'Guarde: comissão de ética só aplica CENSURA; demissão é do PAD; crime é do juiz.' },
        { nome: 'Ética x moral x direito', frequencia: 3, porque: 'Conceituação que abre toda prova de ética.', como: 'Moral = a prática vivida; ética = a reflexão sobre ela; direito = a norma escrita. Uma frase para cada.' },
        { nome: 'Acesso à informação (LAI)', frequencia: 4, porque: 'Transparência pública é tema quente nas provas.', como: 'Todo cidadão pode pedir informação pública sem justificar; o sigilo só vale nos casos da lei (segurança, intimidade).' },
        { nome: 'Nepotismo e moralidade', frequencia: 4, porque: 'A Súmula Vinculante 13 é pegadinha clássica.', como: 'Nepotismo = parente em cargo comissionado, direto ou cruzado — vedado; ferir a moralidade é ato ímprobo.' }
      ]
    },
    {
      materia: 'Direito Penal',          // nome da matéria
      icone: '🚨',                       // emoji
      resumo: 'Carreiras policiais vivem disso: crimes contra o patrimônio e a administração respondem pela maior parte.', // resumo
      topicos: [                         // tópicos
        { nome: 'Crimes contra o patrimônio', frequencia: 5, porque: 'Furto, roubo e estelionato se confundem de propósito na prova.', como: 'Monte a tríade: furto (sem violência), roubo (violência grave), estelionato (engano). Um exemplo de cada.' },
        { nome: 'Crimes contra a administração', frequencia: 5, porque: 'Peculato e corrupção são assinatura da CESPE.', como: 'Peculato = desvio do que já está sob sua guarda; corrupção passiva = pedir/receber vantagem. Decore os verbos.' },
        { nome: 'Legítima defesa e excludentes', frequencia: 4, porque: 'PM, GCM e penal cobram os requisitos na veia.', como: 'Decore: uso moderado dos meios necessários + repelir injusta agressão atual/iminente. Excesso = pune.' },
        { nome: 'Flagrante e prisão', frequencia: 4, porque: 'Qualquer cidadão pode prender em flagrante — a banca adora.', como: 'Flagrante = faculdade (não crime não prender). Só juiz decreta preventiva.' },
        { nome: 'LEP — execução penal', frequencia: 4, porque: 'Regimes e progressão são o coração de polícia penal.', como: 'Aberto = albergue domiciliar; semiaberto = trabalho fora; fechado = presídio. Progressão = bom comportamento + fração da pena.' },
        { nome: 'Dosimetria e regimes de pena', frequencia: 4, porque: 'PM e polícia penal cobram as três fases e os limites de cada regime.', como: '1ª fase = circunstâncias do art. 59; 2ª = agravantes/atenuantes; 3ª = causas de aumento/diminuição. Fechado >8 anos, semiaberto 4-8, aberto até 4.' },
        { nome: 'Maria da Penha e crimes hediondos', frequencia: 4, porque: 'Medida protetiva e hediondez são presença garantida.', como: 'Protetiva = urgência judicial para proteger a vítima; hediondos (estupro, latrocínio, tráfico) = insuscetíveis de fiança e anistia.' }
      ]
    },
    {
      materia: 'Direito Previdenciário', // nome da matéria
      icone: '🏦',                       // emoji
      resumo: 'A matéria do INSS: segurados, carência e benefícios respondem quase tudo na prova de técnico.', // resumo
      topicos: [                         // tópicos
        { nome: 'Segurados e dependência', frequencia: 5, porque: 'A cadeia segurado → benefício → dependente é a espinha dorsal.', como: 'Decore as classes: empregado/avulso/contribuinte individual são obrigatórios; facultativo é por opção.' },
        { nome: 'Carência e qualidade de segurado', frequencia: 5, porque: 'Os prazos (12/24/36 meses) são pegadinha garantida.', como: 'Carência = contribuições mínimas para pedir o benefício; qualidade = estar na graça do sistema. Não misture.' },
        { nome: 'Benefícios (aposentadorias, auxílios)', frequencia: 5, porque: 'Auxílio por incapacidade, aposentadorias e salário-maternidade caem sempre.', como: 'Monte a tabela: cada benefício tem idade/carência próprias. BPC é assistencial — não exige contribuição.' },
        { nome: 'Pensão por morte', frequencia: 4, porque: 'A dependência presumida é pegadinha clássica.', como: 'Cônjuge, companheiro e filho menor = dependência presumida; pais e irmãos precisam provar.' },
        { nome: 'Reforma de 2019 e transição', frequencia: 4, porque: 'As regras novas são o que a banca cobra agora.', como: 'Guarde as idades (62/65) + contribuição mínima e saiba que transição protege quem já estava no sistema.' },
        { nome: 'Período de graça e teto do INSS', frequencia: 4, porque: 'Os prazos que mantêm a qualidade de segurado são cobrados ao pé da letra.', como: 'Graça = até 12 meses sem contribuir mantendo direitos (36 para desempregado/BPC); o teto limita qualquer benefício.' },
        { nome: 'Auxílio por incapacidade', frequencia: 4, porque: 'A diferença entre auxílio comum e acidentário é clássica.', como: 'Acidentário = decorre de acidente de trabalho (estabilidade de 12 meses ao voltar); comum = qualquer incapacidade. Carência de 12 contribuições, salvo acidente.' }
      ]
    },
    {
      materia: 'Criminologia',           // nome da matéria
      icone: '🔬',                       // emoji
      resumo: 'A ciência do crime para peritos e policiais: escolas, vestígios e cadeia de custódia são os campeões.', // resumo
      topicos: [                         // tópicos
        { nome: 'Escolas criminológicas', frequencia: 5, porque: 'Clássica x Positivista é a questão mais batida.', como: 'Beccaria (livre-arbítrio, lei) x Lombroso (determinismo, criminoso). Um autor por escola.' },
        { nome: 'Cadeia de custódia', frequencia: 4, porque: 'Perito e investigador precisam dominar o rastro da prova.', como: 'A cadeia garante que a prova não foi alterada: quem coletou, transportou e guardou — cada elo importa.' },
        { nome: 'Vestígio x prova', frequencia: 4, porque: 'A diferença conceitual cai literal.', como: 'Vestígio = o que sobrou do crime; indício = o que sugere; prova = o que convence o juiz. Ordem crescente.' },
        { nome: 'Corpo de delito e quesitos', frequencia: 3, porque: 'Terminologia de perícia aparece em editais policiais.', como: 'Corpo de delito = o conjunto de vestígios que materializa o crime; quesitos são as perguntas que o juiz faz ao perito.' },
        { nome: 'Perícias e corpo de delito', frequencia: 4, porque: 'A terminologia pericial cai literal nas provas policiais.', como: 'Corpo de delito = o conjunto de vestígios que materializa o crime; necropsia é para cadáver; quesitos são as perguntas do juiz ao perito.' },
        { nome: 'Papiloscopia e balística', frequencia: 4, porque: 'Digital e projétil são as perícias mais citadas.', como: 'Papiloscopia compara cristas (arcos, presilhas, verticilos); balística compara as estrias que o cano deixa na ogiva.' },
        { nome: 'Penas e medidas de segurança', frequencia: 3, porque: 'O sistema sancionador aparece em provas de PP e polícia.', como: 'Pena privativa = para o imputável; medida de segurança = internação do inimputável perigoso (doença mental). Dois destinos diferentes.' }
      ]
    },
    {
      materia: 'Direito Civil',          // nome da matéria
      icone: '📖',                       // emoji
      resumo: 'Tribunais cobram a base: pessoas, obrigações e responsabilidade civil são os três pilares.', // resumo
      topicos: [                         // tópicos
        { nome: 'Capacidade civil', frequencia: 4, porque: 'Absoluta/relativa incapacidade é pegadinha de idade.', como: 'Decore: absoluta até 16; relativa 16-18, 70+, prodigalidade... Plena aos 18 (com emancipação como exceção).' },
        { nome: 'Obrigações e inadimplemento', frequencia: 4, porque: 'Dar, fazer, não fazer e a mora são conceitos-chave.', como: 'Mora = atraso culposo; inadimplemento = descumprimento. O credor pode exigir perdas e danos.' },
        { nome: 'Responsabilidade civil', frequencia: 4, porque: 'Dano, nexo e culpa são os elementos cobrados.', como: 'Responsabilidade subjetiva = precisa de culpa/dolo; objetiva = basta o dano+ nexo (atividade de risco).' },
        { nome: 'Contratos', frequencia: 3, porque: 'Elementos e vícios do contrato aparecem em tribunal.', como: 'Elementos: agente capaz + objeto lícito + forma prescrita. Vício de consentimento = coação, erro, dolo.' },
        { nome: 'Bens e propriedade', frequencia: 3, porque: 'Posse x propriedade e os tipos de bem caem em tribunais.', como: 'Posse = fato (detém a coisa); propriedade = direito (é o dono). Imóvel = terra; móvel = se desloca; bem de família = protegido.' },
        { nome: 'Família e sucessões', frequencia: 3, porque: 'Herança, legítima e testamento são clássicos.', como: 'Legítima = metade reservada aos herdeiros necessários (descendentes, ascendentes, cônjuge); o testamento só dispõe da outra metade.' },
        { nome: 'Prescrição e decadência', frequencia: 4, porque: 'Os prazos dos direitos civis são pegadinha de tribunal.', como: 'Prescrição = prazo para agir (perde a pretensão, mas o direito vive); decadência = prazo do direito (perde o direito em si).' }
      ]
    },
    {
      materia: 'Direito do Trabalho',    // nome da matéria
      icone: '⚒️',                       // emoji
      resumo: 'CLT pura: jornada, férias, FGTS e rescisão são o que a prova de técnico cobra.', // resumo
      topicos: [                         // tópicos
        { nome: 'Jornada e horas extras', frequencia: 5, porque: '8 horas/dia, 44/semana e o adicional de 50% são decoreba certa.', como: 'Jornada padrão = 8h/dia e 44h/semana; extra = +50% em dia útil, +100% em feriado/domingo (regra).' },
        { nome: 'Férias e 13º salário', frequencia: 4, porque: 'Direitos anuais com prazos cobrados.', como: 'Férias = 30 dias a cada 12 meses + 1/3 constitucional; 13º = um salário por ano, em 2 parcelas.' },
        { nome: 'FGTS e rescisão', frequencia: 4, porque: 'Demissão sem justa causa x com justa causa rende questão.', como: 'FGTS = 8% do salário depositado; sem justa causa = 40% de multa; justa causa = perde a multa e o saque.' },
        { nome: 'Princípios trabalhistas', frequencia: 3, porque: 'Proteção, norma mais favorável e irrenunciabilidade caem na teoria.', como: 'A CLT protege o hipossuficiente: direitos trabalhistas são irrenunciáveis e a norma melhor para o trabalhador prevalece.' },
        { nome: 'Reforma trabalhista (13.467/2017)', frequencia: 4, porque: 'As mudanças novas são o alvo atual das bancas.', como: 'Negociado pode flexibilizar jornada, banco de horas e intervalo — mas nunca os mínimos (salário mínimo, FGTS, 13º, licenças).' },
        { nome: 'Negociação coletiva (ACT e CCT)', frequencia: 4, porque: 'A diferença acordo x convenção é pergunta certa.', como: 'ACT = sindicato + empresa específica; CCT = sindicato x sindicato (vale para a categoria toda). Os dois têm força de norma.' },
        { nome: 'Prescrição trabalhista', frequencia: 4, porque: 'Os prazos para reclamar são decoreba.', como: '5 anos durante o vínculo e 2 anos após a rescisão para ajuizar — e só alcança os 5 anos anteriores ao processo.' }
      ]
    },
    {
      materia: 'Administração',          // nome da matéria
      icone: '📊',                       // emoji
      resumo: 'Teorias de gestão: Fayol, Taylor e Weber são o trio que toda banca testa.', // resumo
      topicos: [                         // tópicos
        { nome: 'Fayol x Taylor x Weber', frequencia: 5, porque: 'O trio clássico aparece disfarçado em todo edital.', como: 'Fayol = funções do administrador (POCCC); Taylor = eficiência da tarefa; Weber = burocracia ideal. Um retrato de cada.' },
        { nome: 'Processo administrativo (PODC)', frequencia: 5, porque: 'Planejar, organizar, dirigir e controlar caem sempre.', como: 'Memorize o ciclo: planear o objetivo → organizar recursos → dirigir pessoas → controlar resultados.' },
        { nome: 'Motivação (Maslow, Herzberg)', frequencia: 4, porque: 'A pirâmide de Maslow é a teoria mais cobrada.', como: 'Fisiologia → segurança → social → estima → autorrealização. As de baixo vêm primeiro.' },
        { nome: 'Liderança e estilos', frequencia: 4, porque: 'Autocrático, democrático e liberal são questões de cena.', como: 'Autocrático decide sozinho; democrático decide em grupo; liberal deixa livre. Associe um exemplo a cada.' },
        { nome: 'Qualidade (PDCA, SWOT)', frequencia: 3, porque: 'Ferramentas de gestão caem contextualizadas.', como: 'PDCA = Plan-Do-Check-Act; SWOT = forças/fraquezas (internas) e oportunidades/ameaças (externas).' },
        { nome: 'Gestão de qualidade e processos', frequencia: 3, porque: 'Kaizen, 6 sigma e BPM aparecem contextualizados.', como: '6 sigma = reduzir defeitos a 3,4 por milhão; Kaizen = melhoria contínua; BPM = gestão por processos. Uma frase por sigla.' },
        { nome: 'Administração pública x privada', frequencia: 4, porque: 'As diferenças de gestão pública caem em cargos administrativos.', como: 'Público = legalidade estrita e interesse coletivo; privado = liberdade contratual e lucro. O gestor público não pode "fazer o que quiser".' }
      ]
    },
    {
      materia: 'Contabilidade',          // nome da matéria
      icone: '📒',                       // emoji
      resumo: 'Bancos e tribunais cobram a base: equação patrimonial, partidas dobradas e os demonstrativos.', // resumo
      topicos: [                         // tópicos
        { nome: 'Equação fundamental (A = P + PL)', frequencia: 5, porque: 'A fórmula que abre toda prova de contabilidade.', como: 'Ativo = bens+direitos; Passivo = obrigações; PL = o que sobra dos sócios. Exercite a conta mental.' },
        { nome: 'Partidas dobradas', frequencia: 5, porque: 'Débito e crédito confundem metade dos candidatos.', como: 'Não é bom/ruim: débito aumenta ativo/despesa; crédito aumenta passivo/receita/PL. Toda entrada tem saída.' },
        { nome: 'Balanço e DRE', frequencia: 4, porque: 'A foto x o filme é a analogia mais cobrada.', como: 'Balanço = foto do patrimônio numa data; DRE = resultado do período (receitas − despesas = lucro).' },
        { nome: 'Circulante x não circulante', frequencia: 4, porque: 'O corte de 12 meses é pegadinha certa.', como: 'Circulante = até 12 meses; acima = não circulante. Estoque e caixa são circulantes; imobilizado não.' },
        { nome: 'Depreciação e capital de giro', frequencia: 3, porque: 'Aparecem em cargos de nível superior.', como: 'Depreciação = desgaste do bem ao longo da vida útil; giro = ativo circulante − passivo circulante.' },
        { nome: 'Índices financeiros', frequencia: 4, porque: 'Liquidez e endividamento são as contas mais cobradas.', como: 'Liquidez corrente = AC/PC (maior que 1 = folga); endividamento = Passivo/Ativo. Duas frações respondem muita questão.' },
        { nome: 'Lançamentos e livros contábeis', frequencia: 3, porque: 'Diário e razão aparecem na teoria.', como: 'Diário = registro cronológico fato a fato; razão = o extrato de cada conta. O lançamento traz data, débito, crédito e histórico.' }
      ]
    },
    {
      materia: 'Pedagogia',              // nome da matéria
      icone: '🏫',                       // emoji
      resumo: 'Edital de professor: teorias da aprendizagem e a legislação educacional são o núcleo.', // resumo
      topicos: [                         // tópicos
        { nome: 'LDB (Lei 9.394/96)', frequencia: 5, porque: 'A lei de diretrizes é a matéria mais cobrada de pedagogia.', como: 'Decore os níveis (básica e superior), os anos da básica e a gestão democrática da escola pública.' },
        { nome: 'Teorias da aprendizagem', frequencia: 4, porque: 'Piaget, Vygotsky e Paulo Freire caem em toda prova.', como: 'Piaget = estágios do desenvolvimento; Vygotsky = interação social; Freire = educação libertadora. Um resumo de cada.' },
        { nome: 'Currículo e avaliação', frequencia: 4, porque: 'BNCC e os tipos de avaliação rendem questões diretas.', como: 'Avaliação diagnóstica (início), formativa (durante) e somativa (final): um propósito para cada.' },
        { nome: 'Didática e planejamento', frequencia: 3, porque: 'Plano de aula e metodologias ativas são tendência.', como: 'Metodologia ativa = aluno protagonista; o plano de aula tem objetivo, conteúdo, método e avaliação.' },
        { nome: 'ECA e inclusão escolar', frequencia: 4, porque: 'Proteção à infância e educação especial são padrão.', como: 'Educação inclusiva = matricular e adaptar para todos; o ECA garante o direito à educação da criança e do adolescente.' },
        { nome: 'Gestão democrática e PPP', frequencia: 4, porque: 'A gestão democrática da escola e o projeto político-pedagógico caem em redes públicas.', como: 'PPP = o projeto da escola construído com a comunidade; gestão democrática = participação de pais, alunos e comunidade.' }
      ]
    }
  ],

  // ---------- Temas campeões de VESTIBULARES ----------
  vestibular: [
    {
      materia: 'Redação',                // nome da matéria
      icone: '✍️',                       // emoji
      resumo: 'Vale quase metade da nota em muita universidade. É o tema mais importante do vestibular, sem discussão.', // resumo
      topicos: [                         // tópicos
        { nome: 'Estrutura dissertativa-argumentativa', frequencia: 5, porque: 'É o formato exigido pelo ENEM e pela maioria das bancas.', como: 'Decore o esqueleto: introdução com tese, 2 parágrafos de desenvolvimento com repertório e conclusão com proposta.' },
        { nome: 'Repertório sociocultural', frequencia: 5, porque: 'Sem citação/referência consistente, a nota trava.', como: 'Tenha 10 repertórios coringa (filmes, livros, dados) que servem para vários temas e use 1 por parágrafo.' },
        { nome: 'Temas de atualidades', frequencia: 4, porque: 'A redação quase sempre parte de uma notícia do ano.', como: 'Toda semana escreva uma redação sobre a manchete mais importante do Brasil.' },
        { nome: 'Conclusão com proposta de intervenção', frequencia: 5, porque: 'O ENEM exige os 5 elementos da proposta — faltar um zera a competência 5.', como: 'Ação + agente + meio + finalidade + detalhamento: memorize a fórmula e encaixe no problema do tema.' },
        { nome: 'Coesão e conectivos', frequencia: 4, porque: 'Texto sem elo entre ideias perde ponto na competência 4.', como: 'Monte estoque de conectores: adição (além disso), oposição (entretanto), causa (por isso), conclusão (logo).' },
        { nome: 'Argumentação e contra-argumento', frequencia: 4, porque: 'Tese sem defesa vira opinião — a banca cobra a estrutura.', como: 'Cada parágrafo = 1 argumento + 1 prova + 1 ligação com a tese. Antecipe o "mas" do leitor e responda.' }
      ]
    },
    {
      materia: 'História do Brasil',     // nome da matéria
      icone: '🏛️',                       // emoji
      resumo: 'O vestibular ama a história do Brasil — e alguns períodos caem mais que os outros.', // resumo
      topicos: [                         // tópicos
        { nome: 'Escravidão e abolição (Lei Áurea, 1888)', frequencia: 5, porque: 'Cai sempre, junto com as leis anteriores (Ventre Livre, Sexagenários).', como: 'Monte a linha do tempo das leis abolicionistas: 1850 (Eusébio de Queirós) → 1871 → 1885 → 1888.' },
        { nome: 'República Velha e a política do café com leite', frequencia: 4, porque: 'Combina com o nosso tema! Alternância SP-MG é pergunta clássica.', como: 'Entenda o pacto: São Paulo (café) e Minas (leite) revezavam a presidência entre 1894 e 1930.' },
        { nome: 'Era Vargas (1930-1945)', frequencia: 4, porque: 'CLT, Estado Novo e trabalhismo caem em toda prova.', como: 'Decore as fases: Governo Provisório (30-34), Constitucional (34-37), Estado Novo (37-45). CLT é de 1943.' },
        { nome: 'Ditadura militar (1964-1985)', frequencia: 4, porque: 'AI-5, censura e abertura política são presença garantida.', como: 'Construa a linha do tempo dos presidentes militares e marque o AI-5 (1968) como o ponto de endurecimento.' },
        { nome: 'Período colonial e capitanias', frequencia: 4, porque: 'Pau-brasil, cana e ouro estruturam toda a história nacional.', como: 'Linha do tempo: 1500 → 1530 capitanias → cana no Nordeste → ouro em Minas (séc. XVIII) → corte no Rio (1808).' },
        { nome: 'Independência e Império', frequencia: 4, porque: 'Primeiro e Segundo Reinado têm questões próprias.', como: '1822 independência; 1º Reinado (22-31); Regências (31-40); 2º Reinado (40-89) com Paraguai e abolição.' }
      ]
    },
    {
      materia: 'Geografia',              // nome da matéria
      icone: '🗺️',                       // emoji
      resumo: 'Brasil físico + população: esses dois blocos respondem pela maior parte da prova.', // resumo
      topicos: [                         // tópicos
        { nome: 'Clima e biomas brasileiros', frequencia: 5, porque: 'Clima da Amazônia (equatorial) e domínio do bioma Amazônia são pergunta batida.', como: 'Faça um mapa e cole em cada região seu clima e bioma. Amazonas = equatorial, quente e úmido.' },
        { nome: 'Urbanização e êxodo rural', frequencia: 4, porque: 'O Brasil virou urbano no século XX e a banca cobra esse processo.', como: 'Êxodo rural = migração campo → cidade. Associa com industrialização dos anos 1950-80.' },
        { nome: 'Demografia e densidade', frequencia: 3, porque: 'Densidade demográfica (hab/km²) cai como conta ou como conceito.', como: 'Decore a fórmula: população ÷ área. E lembre: Brasil é populoso, mas pouco povoado no interior.' },
        { nome: 'Geopolítica e globalização', frequencia: 3, porque: 'Blocos econômicos (Mercosul) e tensões atuais aparecem contextualizados.', como: 'Saiba o básico: Mercosul é bloco sul-americano; a ONU tem órgãos como a Assembleia Geral e o Conselho de Segurança.' },
        { nome: 'Relevo e hidrografia', frequencia: 4, porque: 'Bacias e formações do relevo caem em prova objetiva.', como: 'Decore as grandes bacias: Amazônica (a maior do mundo), São Francisco (a do interior), Paraná/Paraguai (a das fronteiras).' },
        { nome: 'Agropecuária e fronteira agrícola', frequencia: 4, porque: 'Soja, cerrado e MATOPIBA são temas atuais.', como: 'Fronteira agrícola = avanço do cultivo sobre cerrado e Amazônia; associe com desmatamento e agronegócio.' }
      ]
    },
    {
      materia: 'Biologia',               // nome da matéria
      icone: '🧬',                       // emoji
      resumo: 'Ecologia é o tema mais rentável: cai no ENEM todo ano e rende questões fáceis de acertar.', // resumo
      topicos: [                         // tópicos
        { nome: 'Ecologia (cadeias, ciclos, impactos)', frequencia: 5, porque: 'É o queridinho do ENEM: sustentabilidade + biomas.', como: 'Entenda fluxo de energia (produtor → consumidor) e o efeito estufa natural vs. intensificado.' },
        { nome: 'Genética básica', frequencia: 4, porque: 'Heredograma e leis de Mendel caem com regularidade.', como: 'Treine cruzamentos simples (Aa × Aa) e monte quadros de Punnett até ficar automático.' },
        { nome: 'Fisiologia humana', frequencia: 3, porque: 'Sistemas (circulatório, digestório) aparecem de forma aplicada.', como: 'Uma função por sistema: coração bombeia, pulmão troca gases, rim filtra. Relacione com situações do cotidiano.' },
        { nome: 'Citologia e organelas', frequencia: 4, porque: 'A célula e suas partes abrem toda prova de biologia.', como: 'Membrana protege, citoplasma metaboliza, núcleo guarda o DNA, mitocôndria faz energia, ribossomo monta proteína. Uma função por organela.' },
        { nome: 'Fotossíntese e respiração', frequencia: 4, porque: 'Os dois processos se cruzam e a banca adora a diferença.', como: 'Fotossíntese: CO₂ + água + luz → glicose + O₂ (cloroplasto). Respiração: glicose + O₂ → CO₂ + água + ATP (mitocôndria).' },
        { nome: 'Imunologia e vacinas', frequencia: 4, porque: 'Anticorpo, vacina e soro caem contextualizados.', como: 'Vacina = antígeno que previne (antes); soro = anticorpo pronto que trata (depois). Um para prevenir, outro para curar.' }
      ]
    },
    {
      materia: 'Física',                 // nome da matéria
      icone: '⚡',                       // emoji
      resumo: 'Mecânica domina: se você dominar cinemática e energia, já garante boa parte da prova.', // resumo
      topicos: [                         // tópicos
        { nome: 'Mecânica (cinemática e leis de Newton)', frequencia: 5, porque: 'MRU, MRUV e as 3 leis de Newton caem em todo vestibular.', como: 'Decore as equações do MRUV e treine interpretar gráficos de posição e velocidade.' },
        { nome: 'Energia e trabalho', frequencia: 4, porque: 'Conservação de energia é o caminho mais rápido em várias questões.', como: 'Guarde: energia mecânica = cinética + potencial; sem atrito, ela se conserva.' },
        { nome: 'Eletricidade', frequencia: 4, porque: 'Lei de Ohm e potência aparecem todo ano.', como: 'V = R·i e P = V·i. Duas fórmulas resolvem metade das questões de circuito.' },
        { nome: 'Óptica e espelhos', frequencia: 4, porque: 'Reflexão e refração são o bloco clássico.', como: 'Reflexão = a luz volta ao mesmo meio (espelho); refração = muda de meio e desvia (lente, copo de água).' },
        { nome: 'Ondas', frequencia: 3, porque: 'Comprimento, frequência e velocidade rendem questão direta.', como: 'V = λ·f: velocidade = comprimento de onda × frequência. Som precisa de meio; luz viaja no vácuo.' },
        { nome: 'Termologia', frequencia: 4, porque: 'Calor, temperatura e escalas caem todo ano.', como: 'Calor = energia térmica em trânsito; temperatura = grau de agitação. Conversões: °C→K soma 273; °F = 1,8·°C + 32.' }
      ]
    },
    {
      materia: 'Química',                // nome da matéria
      icone: '🧪',                       // emoji
      resumo: 'Estequiometria e orgânica são os campeões de queda — e assustam, mas são treináveis.', // resumo
      topicos: [                         // tópicos
        { nome: 'Estequiometria', frequencia: 4, porque: 'É a "regra de três da química" e cai todo ano.', como: 'Balanceie a equação, ache a proporção em mol e converta para gramas com a massa molar. Passo a passo sempre.' },
        { nome: 'Ligações químicas', frequencia: 3, porque: 'Iônica x covalente é conceito rápido e frequente.', como: 'Metal + ametal = ligação iônica; ametal + ametal = covalente. Decore os exemplos clássicos (NaCl, H₂O).' },
        { nome: 'Química orgânica', frequencia: 4, porque: 'Funções (álcool, cetona...) e reações básicas caem muito no ENEM.', como: 'Monte flashcards das funções orgânicas com um exemplo do cotidiano (etanol, acetona, ácido acético).' },
        { nome: 'Tabela periódica', frequencia: 4, porque: 'Famílias e tendências são a base de tudo.', como: 'Coluna = família (1A alcalinos, 7A halogênios, 8A gases nobres); período = camadas. Raio cresce para baixo e para a esquerda.' },
        { nome: 'Soluções e concentração', frequencia: 4, porque: 'Molaridade e diluição são conta garantida.', como: 'M = mol/L de soluto. Diluir = acrescentar solvente — use M₁·V₁ = M₂·V₂.' },
        { nome: 'Ácidos, bases e pH', frequencia: 4, porque: 'A escala de pH cai contextualizada (chuva ácida, estômago).', como: 'pH <7 ácido, =7 neutro, >7 básico — e cada unidade vale 10×. Ácido doa H⁺; base doa OH⁻.' }
      ]
    },
    {
      materia: 'Literatura',             // nome da matéria
      icone: '📚',                       // emoji
      resumo: 'Escolas literárias com autores e obras: Romantismo, Realismo e Modernismo respondem pela maioria.', // resumo
      topicos: [                         // tópicos
        { nome: 'Romantismo (Alencar, indianismo)', frequencia: 5, porque: 'Iracema e O Guarani são leitura obrigatória das bancas.', como: 'Associe cada obra ao tipo de herói: índio idealizado (indianismo), burguês (romance urbano), sofredor (ultrarromântico).' },
        { nome: 'Realismo e Machado de Assis', frequencia: 5, porque: 'Brás Cubas e Dom Casmurro são cobrança clássica da Fuvest.', como: 'Saiba o narrador de cada obra: defunto-narrador (Brás Cubas) e narrador que duvida (Bentinho).' },
        { nome: 'Modernismo e a Semana de 22', frequencia: 4, porque: 'Marco da arte brasileira — cai contextualizado com artes.', como: 'Decore o trio: Mário (Macunaíma), Oswald (Antropofagia) e Anita Malfatti (pintura) — e o que a Semana rompeu.' },
        { nome: 'Barroco e Arcadismo', frequencia: 3, porque: 'As escolas anteriores ao Romantismo fecham o mapa.', como: 'Barroco = contraste e conflito (Gregório de Matos); Arcadismo = pastoril e simplicidade (Cláudio Manuel da Costa). Contexto colonial.' },
        { nome: 'Naturalismo e Parnasianismo', frequencia: 3, porque: 'O Cortiço e a "arte pela arte" caem contextualizados.', como: 'Naturalismo = determinismo científico (Aluísio Azevedo); Parnasianismo = forma perfeita (Olavo Bilac). Um é tese, outro é estética.' },
        { nome: 'Poesia moderna (2ª e 3ª gerações)', frequencia: 4, porque: 'Drummond e João Cabral são cobrança de elite (Fuvest, Unicamp).', como: '2ª geração = lírica e engajada (Drummond); 3ª = experimental e social (João Cabral). Um verso marcante de cada autor.' }
      ]
    },
    {
      materia: 'Inglês',                 // nome da matéria
      icone: '🗽',                       // emoji
      resumo: 'Interpretação de texto + falsos cognatos: a prova mede leitura, não fluência.', // resumo
      topicos: [                         // tópicos
        { nome: 'Falsos cognatos', frequencia: 5, porque: 'Pretend, actually, library caem em toda prova.', como: 'Faça lista de falsos amigos por bloco: verbos, substantivos e adjetivos — são os mesmos há anos.' },
        { nome: 'Tempos verbais-chave', frequencia: 4, porque: 'Present perfect e simple past decidem metade das questões.', como: 'Regra bolso: data definida = simple past; sem data = present perfect.' },
        { nome: 'Estratégia de leitura', frequencia: 4, porque: 'O ENEM cobra inferência, não tradução palavra a palavra.', como: 'Leia as alternativas primeiro, marque palavras-chave (verbos e números) e cace-as no texto.' },
        { nome: 'Conectivos e marcadores', frequencia: 4, porque: 'However, therefore e although decidem a inferência do texto.', como: 'Liste os conectores por função: adição (furthermore), contraste (however), consequência (therefore), condição (unless).' },
        { nome: 'Vocabulário de temas recorrentes', frequencia: 4, porque: 'Tecnologia, saúde e meio ambiente são os textos do ENEM.', como: 'Monte glossário por tema: health (disease, treatment), tech (AI, privacy), environment (pollution, sustainable).' }
      ]
    },
    {
      materia: 'Espanhol',               // nome da matéria
      icone: '🌎',                       // emoji
      resumo: 'Ser/estar, por/para e falsos cognatos são a espinha dorsal da prova.', // resumo
      topicos: [                         // tópicos
        { nome: 'Ser x estar', frequencia: 5, porque: 'A alternativa que troca o verbo troca o sentido do adjetivo.', como: 'Permanente/identidade = ser; temporário/estado/lugar = estar. "Es aburrido" x "está aburrido" muda tudo.' },
        { nome: 'Falsos cognatos', frequencia: 4, porque: 'Embarazada e largo enganam quem confia no parecido.', como: 'Estude a lista com frases completas — o contexto revela o sentido real.' },
        { nome: 'Por x para', frequencia: 4, porque: 'O erro mais cobrado da gramática espanhola.', como: 'Para = destino/finalidade; por = causa/preço/meio. "Gracias por" é a cola.' },
        { nome: 'Verbos irregulares-chave', frequencia: 4, porque: 'Ser, estar, tener e hacer no presente confundem muito.', como: 'Conjugue os 4 por dia: soy/eres/es/somos/son; estoy/estás/está/estamos/están. Pratique dentro de frases.' },
        { nome: 'Vocabulário jornalístico', frequencia: 3, porque: 'As provas usam textos de notícia — o vocabulário se repete.', como: 'Palavras de notícia: gobierno, medida, derecho, informe, política. Leia um jornal em espanhol por semana.' }
      ]
    },
    {
      materia: 'Artes',                  // nome da matéria
      icone: '🎨',                       // emoji
      resumo: 'Vanguardas europeias + arte brasileira (Semana de 22, Antropofagia, Aleijadinho) são o eixo.', // resumo
      topicos: [                         // tópicos
        { nome: 'Vanguardas (Cubismo, Surrealismo)', frequencia: 5, porque: 'Cada movimento tem uma palavra-chave que a banca troca.', como: 'Cubismo = geometria; Futurismo = velocidade; Surrealismo = sonho. Monte um quadro comparativo.' },
        { nome: 'Semana de 22 e Antropofagia', frequencia: 5, porque: 'Marco da arte nacional — cai com literatura e história.', como: 'Ligue os pontos: 1922 (Semana) → 1928 (Manifesto Antropofágico + Abaporu) → "devorar para criar".' },
        { nome: 'Barroco mineiro e Aleijadinho', frequencia: 4, porque: 'O ciclo do ouro explica a arte colonial brasileira.', como: 'Associe: ouro de Minas → igrejas e esculturas em pedra-sabão → profetas de Congonhas.' },
        { nome: 'Arte contemporânea brasileira', frequencia: 4, porque: 'Tropicália, neoconcretismo e arte urbana caem no ENEM.', como: 'Hélio Oiticica (participação do público), Lygia Clark (arte sensorial), grafite como linguagem urbana. Uma obra por nome.' },
        { nome: 'Arte indígena e afro-brasileira', frequencia: 4, porque: 'A valorização das matrizes é tendência nas provas.', como: 'Associe: grafismo indígena, arte sacra afro-barroca (Aleijadinho), capoeira e umbigada como expressões de resistência.' }
      ]
    },
    {
      materia: 'Educação Física',        // nome da matéria
      icone: '🏃',                       // emoji
      resumo: 'Aptidão física, tipos de exercício e saúde pública — curto, técnico e muito cobrado.', // resumo
      topicos: [                         // tópicos
        { nome: 'Aeróbio x anaeróbio', frequencia: 5, porque: 'A classificação do esporte é a questão mais batida.', como: 'Liga oxigênio + duração: longo e leve = aeróbio; curto e intenso = anaeróbio. Maratonista x velocista.' },
        { nome: 'Componentes da aptidão', frequencia: 4, porque: 'Força, resistência, flexibilidade e composição corporal caem em provas de PM.', como: 'Decore os 4 da saúde; velocidade/agilidade são da aptidão esportiva.' },
        { nome: 'OMS e sedentarismo', frequencia: 4, porque: 'Números de atividade física caem contextualizados no ENEM.', como: 'Adulto: 150 min/semana moderada; criança: 60 min/dia. Sedentarismo = fator de risco cardiovascular.' },
        { nome: 'Regras dos esportes coletivos', frequencia: 4, porque: 'Futsal, vôlei e basquete caem como regra pura.', como: 'Futsal = quadra, 5 jogadores; vôlei = 6 com rotação; basquete = 5 e cesta de 2 ou 3 pontos. Um número por modalidade.' },
        { nome: 'Olimpíadas e grandes eventos', frequencia: 3, porque: 'A história dos jogos cai contextualizada.', como: 'Olimpíada moderna desde 1896, ciclo de 4 anos; o Brasil sediou 2016. Ligue esporte + sociedade + política.' }
      ]
    },
    {
      materia: 'Fisiologia',             // nome da matéria
      icone: '🫀',                       // emoji
      resumo: 'Sistemas do corpo humano: circulatório, nervoso e endócrino são os mais cobrados.', // resumo
      topicos: [                         // tópicos
        { nome: 'Circulação dupla e coração', frequencia: 5, porque: 'Lado direito x esquerdo do coração é pegadinha clássica.', como: 'Decore o desenho: direito → pulmão; esquerdo → corpo. Hematose acontece nos alvéolos.' },
        { nome: 'Sistema nervoso', frequencia: 4, porque: 'Neurônio e sinapse caem aplicados (drogas, neurotransmissores).', como: 'Ordem: dendrito recebe → corpo processa → axônio manda → sinapse química libera neurotransmissor.' },
        { nome: 'Sistema endócrino', frequencia: 4, porque: 'Insulina e adrenalina aparecem em contextos do dia a dia.', como: 'Cada glândula um hormônio: pâncreas (insulina), tireoide (tiroxina), adrenal (adrenalina).' },
        { nome: 'Sistema imunológico', frequencia: 4, porque: 'Anticorpos, vacinas e imunidade caem contextualizados.', como: 'Imunidade inata = a barreira que já existe; adaptativa = os anticorpos que a vacina treina antes da infecção.' },
        { nome: 'Respiratório e excretor', frequencia: 3, porque: 'Hematose e filtração renal fecham o mapa do corpo.', como: 'Respiratório: ar → pulmão → alvéolo (hematose). Excretor: rim → néfron filtra → uréter → bexiga. Um caminho por sistema.' }
      ]
    },
    {
      materia: 'Filosofia',              // nome da matéria
      icone: '🤔',                       // emoji
      resumo: 'Platão, Sócrates e as éticas (Kant x utilitarismo) respondem a maior parte das questões.', // resumo
      topicos: [                         // tópicos
        { nome: 'Mito da caverna (Platão)', frequencia: 5, porque: 'A alegoria mais cobrada do vestibular brasileiro.', como: 'Sombras = aparência; subida dolorosa = filosofia; sol = verdade. Leitura política: massa x elite.' },
        { nome: 'Ética: Kant x utilitarismo', frequencia: 5, porque: 'As duas éticas opostas são o enunciado de toda questão moral.', como: 'Kant = dever/universalidade; utilitarista = consequência/maior felicidade. Não misture.' },
        { nome: 'Sócrates e a maiêutica', frequencia: 4, porque: 'O método do "parto das ideias" cai como conceito.', como: 'Ironia desmonta, maiêutica constrói: perguntas sucessivas fazem o outro descobrir a verdade sozinho.' },
        { nome: 'Aristóteles e o meio-termo', frequencia: 4, porque: 'A virtude como equilíbrio fecha a tríade grega com Platão e Sócrates.', como: 'Virtude = justa medida entre excessos (coragem fica entre covardia e temeridade). Eudaimonia = a vida florescente.' },
        { nome: 'Contrato social (Hobbes, Locke, Rousseau)', frequencia: 4, porque: 'Os contratualistas explicam a origem do Estado e caem todo ano.', como: 'Hobbes = Estado forte contra o caos; Locke = direitos naturais; Rousseau = vontade geral. Um livro por autor.' }
      ]
    },
    {
      materia: 'Sociologia',             // nome da matéria
      icone: '👥',                       // emoji
      resumo: 'Os três clássicos (Marx, Durkheim, Weber) + temas atuais como cidadania e cultura.', // resumo
      topicos: [                         // tópicos
        { nome: 'Durkheim — fato social', frequencia: 5, porque: 'Exterior, geral e coercitivo são as três palavras-chave.', como: 'Teste cada alternativa: se é escolha individual, não é fato social.' },
        { nome: 'Marx — alienação e mais-valia', frequencia: 5, porque: 'A exploração do trabalho é tema de todo ano.', como: 'Alienação = perder o produto e o processo; mais-valia = trabalho não pago. São conceitos irmãos.' },
        { nome: 'Weber — ação social e dominação', frequencia: 4, porque: 'O terceiro clássico completa o trio.', como: 'Ação social tem SENTIDO para quem age; dominação tradicional/legal/carismática são os tipos.' },
        { nome: 'Indústria cultural', frequencia: 4, porque: 'A cultura como mercadoria (Adorno) é tema clássico do ENEM.', como: 'Cultura de massa = produção industrial que padroniza o gosto. Relacione com séries, hits e redes sociais de hoje.' },
        { nome: 'Cidadania e direitos (Marshall)', frequencia: 4, porque: 'Civil, político e social de T.H. Marshall caem direto.', como: 'Civil (séc. XVIII — liberdade), político (XIX — voto), social (XX — previdência e escola). A ordem dos direitos.' }
      ]
    },
    {
      materia: 'Economia',               // nome da matéria
      icone: '💹',                       // emoji
      resumo: 'Conceitos básicos de macro: inflação, PIB, Selic e mercado — o que o Bacen e os bancos cobram.', // resumo
      topicos: [                         // tópicos
        { nome: 'Inflação, PIB e Selic', frequencia: 5, porque: 'O trio macro que não sai das provas.', como: 'Inflação = preços sobem; PIB = bens finais produzidos; Selic sobe = conter inflação (crédito caro).' },
        { nome: 'Oferta e demanda', frequencia: 4, porque: 'A lei mais básica — e a mais errada sob pressão.', como: 'Demanda e preço andam juntos; oferta e preço, opostos. Desenhe o gráfico mental.' },
        { nome: 'Mercados e moeda', frequencia: 4, porque: 'Câmbio e tipos de mercado caem nos bancos.', como: 'Real valorizado = importação barata, exportação difícil; monopólio = um vendedor só.' },
        { nome: 'Mercado financeiro', frequencia: 4, porque: 'Bolsa, ações e renda fixa x variável caem nas provas bancárias.', como: 'Renda fixa = retorno conhecido (poupança, CDB); variável = oscila (ações). A bolsa é o mercado secundário de ações.' },
        { nome: 'Comércio internacional', frequencia: 3, porque: 'Câmbio e balança comercial aparecem contextualizados.', como: 'Exportar mais que importar = superávit; real valorizado deixa a importação barata. O Brasil exporta commodities.' }
      ]
    }
  ],

  // ---------- Dicas rápidas mostradas abaixo dos simulados (por idioma) ----------
  dicasRapidas: {
    pt: [
      'Leia o enunciado duas vezes: a banca esconde o verbo principal atrás de enfeite. Sublinhe o que a questão realmente pede.',
      'Elimine primeiro as alternativas absurdas — cada eliminação aumenta (e muito) sua chance de acertar o chute consciente.',
      'Na hora da prova CESPE/Cebraspe, questão errada costuma anular uma certa: responda só o que tem confiança. Leia o edital para confirmar!',
      'Controle o relógio: 3 minutos por questão é o ritmo médio da maioria das provas. Se travou, pula e volta depois.',
      'Marque sua resposta no rascunho antes de passar para o gabarito oficial — transcrever tudo no fim evita erro de bolinha.',
      'Guarde os 10 minutos finais para revisar as questões em dúvida. A pressa é a maior aliada da banca.'
    ],
    en: [
      'Read the question twice: the board hides the main verb behind decoration. Underline what the question really asks.',
      'Eliminate the absurd options first — each one removed hugely increases your chance of a smart guess.',
      'On CESPE/Cebraspe tests a wrong answer often cancels a right one: only answer what you are sure about. Check the notice to confirm!',
      'Watch the clock: 3 minutes per question is the average pace in most tests. If you get stuck, skip it and come back later.',
      'Mark your answer on the draft sheet before transferring it to the official answer sheet — copying everything at the end avoids bubbling mistakes.',
      'Save the last 10 minutes to review the questions you doubted. Hurry is the board’s best ally.'
    ],
    es: [
      'Lee el enunciado dos veces: el comité esconde el verbo principal detrás de adornos. Subraya lo que la pregunta pide de verdad.',
      'Elimina primero las opciones absurdas — cada una que descartas aumenta muchísimo tu chance de acertar con criterio.',
      'En exámenes CESPE/Cebraspe, una pregunta errada suele anular una correcta: responde solo lo que dominas. ¡Revisa la convocatoria para confirmar!',
      'Controla el reloj: 3 minutos por pregunta es el ritmo medio de la mayoría de los exámenes. Si te trabas, sáltala y vuelve después.',
      'Marca tu respuesta en el borrador antes de pasarla a la hoja oficial — copiar todo al final evita errores de marcado.',
      'Guarda los últimos 10 minutos para revisar las preguntas dudosas. La prisa es la mejor aliada del comité.'
    ]
  },

  // ---------- Frases motivacionais de estudo (sorteadas a cada acesso), por idioma ----------
  frasesMotivacionais: {
    pt: [
      'A aprovação não chega de uma vez: chega em goles diários.',
      'Cada questão errada hoje é uma certa amanhã.',
      'O edital é o mapa; o simulado, o caminho.',
      'Constância vence intensidade: 1 hora por dia vale mais que 10 no domingo.',
      'Você não precisa ser o melhor do mundo — precisa passar da nota de corte.',
      'Estudar é como passar café: devagar, o sabor sai melhor.',
      'Foca no processo que a aprovação vira consequência.',
      'Descansar também é estudo: cérebro cansado não aprende. Vai dormir, campeão(a).',
      'Quem revisa hoje responde com segurança amanhã.',
      'Não existe matéria impossível: existe matéria ainda não revisada.',
      'Três páginas por dia viram um livro por mês. E um livro vira aprovação.',
      'A banca cobra justamente o que você evitou estudar. Encara a matéria chata primeiro.',
      'Fazer questão é o único jeito de descobrir o que você ainda não sabe.',
      'Anota o erro, revisa a anotação: é assim que a nota sobe.',
      'Disciplina é lembrar do objetivo quando a vontade passa longe.',
      'Você não está atrasado(a) — está no caminho. Só não pare.',
      'Resumo bom é resumo curto: se não couber numa página, ainda não ficou claro.',
      'Aprovação é feita de dias comuns bem aproveitados.',
      'Teoria, questão, correção do erro. Repete. É simples, não é fácil.',
      'Pequenos avanços diários constroem grandes notas.'
    ],
    en: [
      'Approval doesn’t come all at once: it comes in daily sips.',
      'Every question you miss today is a right answer tomorrow.',
      'The exam notice is the map; the mock test is the road.',
      'Consistency beats intensity: 1 hour a day is worth more than 10 on Sunday.',
      'You don’t have to be the best in the world — you just have to beat the cut-off score.',
      'Studying is like brewing coffee: slowly, the flavour comes out better.',
      'Focus on the process and approval becomes a consequence.',
      'Resting is studying too: a tired brain doesn’t learn. Go to sleep, champ.',
      'Whoever reviews today answers with confidence tomorrow.',
      'There is no impossible subject: only a subject you haven’t reviewed yet.',
      'Three pages a day become a book a month. And a book becomes approval.',
      'The board tests exactly what you avoided studying. Face the boring subject first.',
      'Solving questions is the only way to find out what you still don’t know.',
      'Write down the mistake, review the note: that’s how the score goes up.',
      'Discipline is remembering the goal when motivation is far away.',
      'You are not behind — you are on the way. Just don’t stop.',
      'A good summary is a short summary: if it doesn’t fit on one page, it’s not clear yet.',
      'Approval is made of ordinary days well used.',
      'Theory, question, fix the mistake. Repeat. It’s simple, not easy.',
      'Small daily steps build big scores.'
    ],
    es: [
      'La aprobación no llega de una vez: llega a sorbos diarios.',
      'Cada pregunta fallada hoy es un acierto mañana.',
      'La convocatoria es el mapa; el simulacro, el camino.',
      'La constancia vence a la intensidad: 1 hora al día vale más que 10 el domingo.',
      'No necesitas ser el mejor del mundo — necesitas superar la nota de corte.',
      'Estudiar es como preparar café: despacio, el sabor sale mejor.',
      'Enfócate en el proceso y la aprobación será una consecuencia.',
      'Descansar también es estudiar: un cerebro cansado no aprende. A dormir, campeón(a).',
      'Quien repasa hoy responde con seguridad mañana.',
      'No existe materia imposible: existe materia aún no repasada.',
      'Tres páginas al día se vuelven un libro al mes. Y un libro se vuelve aprobación.',
      'El comité evalúa justo lo que evitaste estudiar. Enfrenta primero la materia aburrida.',
      'Resolver preguntas es la única forma de descubrir lo que aún no sabes.',
      'Anota el error, repasa la nota: así sube la calificación.',
      'La disciplina es recordar el objetivo cuando las ganas están lejos.',
      'No estás atrasado(a) — estás en el camino. Solo no pares.',
      'Un buen resumen es un resumen corto: si no cabe en una página, aún no está claro.',
      'La aprobación se hace de días comunes bien aprovechados.',
      'Teoría, pregunta, corrección del error. Repite. Es simple, no fácil.',
      'Los pequeños avances diarios construyen grandes notas.'
    ]
  },

  // ---------- Dicas importantes, organizadas por categoria (por idioma) ----------
  dicasImportantes: {
    pt: [
      {
        icone: '🗓️',                                   // emoji da categoria
        titulo: 'Rotina que funciona',                  // título da categoria
        dicas: [                                        // lista de dicas
          { titulo: 'Estude todo dia, nem que seja 30 minutos', texto: 'A memória consolida com frequência, não com maratona. Meia hora por dia rende mais que 5 horas no domingo.' },
          { titulo: 'Defina o horário e proteja ele', texto: 'Trate o horário de estudo como consulta médica: ninguém marca outra coisa em cima.' },
          { titulo: 'Blocos de foco com pausa de verdade', texto: 'Estude 25 a 50 minutos concentrado e descanse 5 a 10. Cérebro cansado começa a fingir que aprende.' },
          { titulo: 'Anote o plano antes de abrir o caderno', texto: 'Chegar sem saber o que estudar gasta metade do tempo só decidindo por onde começar.' }
        ]
      },
      {
        icone: '🧠',
        titulo: 'Técnicas que fazem a nota subir',
        dicas: [
          { titulo: 'Resolva questões ANTES de reler a teoria', texto: 'Errar primeiro faz o cérebro prestar atenção na explicação. É o caminho mais rápido para aprender.' },
          { titulo: 'Monte um caderno de erros', texto: 'Anote cada questão errada e o motivo do erro. Reler esse caderno 1x por semana é revisar o que você mais precisa.' },
          { titulo: 'Revisão espaçada (a arma secreta)', texto: 'Revise no mesmo dia, em uma semana e em um mês. Sem revisão, você esquece boa parte do que estudou.' },
          { titulo: 'Explique em voz alta (técnica Feynman)', texto: 'Se não consegue explicar de forma simples, ainda não entendeu. Fale como se estivesse ensinando alguém.' }
        ]
      },
      {
        icone: '✍️',
        titulo: 'Na hora da prova',
        dicas: [
          { titulo: 'Leia o comando duas vezes e sublinhe', texto: 'A banca esconde o que quer atrás de texto bonito. Sublinhe palavras-chave: "assinale", "exceto", "incorreta".' },
          { titulo: 'Responda primeiro o que você domina', texto: 'Garanta os pontos fáceis e volte nas difíceis. Não deixe questão fácil para o fim com o relógio apertado.' },
          { titulo: 'Chute com critério: elimine 2 alternativas', texto: 'Entre 3 opções o chute vale 33%; entre 5, apenas 20%. Eliminar alternativas já é estudar.' },
          { titulo: 'Controle o tempo por blocos', texto: 'Divida a prova em blocos e confira o relógio. Cerca de 3 minutos por questão é o ritmo médio.' }
        ]
      },
      {
        icone: '🧘',
        titulo: 'Corpo, mente e véspera',
        dicas: [
          { titulo: 'Durma 7 a 8 horas (principalmente na véspera)', texto: 'É durante o sono que a memória se fixa. Virar a noite antes da prova derruba sua nota.' },
          { titulo: 'Na véspera, revise leve e durma cedo', texto: 'Nada de matéria nova. Reveja seus resumos, separe documento e caneta e vá dormir.' },
          { titulo: 'Não compare seu processo com o dos outros', texto: 'Nas redes sociais todo mundo aprova. Compare você de hoje com você de um mês atrás.' },
          { titulo: 'Cuide do básico: água, comida e movimento', texto: 'Cérebro desidratado não raciocina. Água, comida de verdade e uma caminhada de 15 minutos fazem diferença.' }
        ]
      }
    ],
    en: [
      {
        icone: '🗓️',
        titulo: 'A routine that works',
        dicas: [
          { titulo: 'Study every day, even 30 minutes', texto: 'Memory is built by frequency, not by marathon sessions. Half an hour a day beats 5 hours on Sunday.' },
          { titulo: 'Set a time and protect it', texto: 'Treat your study time like a doctor’s appointment: nobody schedules anything on top of it.' },
          { titulo: 'Focus blocks with real breaks', texto: 'Study 25 to 50 minutes focused, then rest 5 to 10. A tired brain only pretends to learn.' },
          { titulo: 'Write your plan before opening the book', texto: 'Arriving without knowing what to study wastes half your time just deciding where to start.' }
        ]
      },
      {
        icone: '🧠',
        titulo: 'Techniques that raise your score',
        dicas: [
          { titulo: 'Answer questions BEFORE rereading the theory', texto: 'Getting it wrong first makes your brain pay attention to the explanation. It is the fastest way to learn.' },
          { titulo: 'Keep a mistake notebook', texto: 'Write down every wrong question and why you missed it. Reviewing it once a week covers exactly what you need.' },
          { titulo: 'Spaced repetition (the secret weapon)', texto: 'Review the same day, in a week and in a month. Without reviewing, you forget much of what you studied.' },
          { titulo: 'Explain it out loud (Feynman technique)', texto: 'If you cannot explain it simply, you have not understood it yet. Talk as if you were teaching someone.' }
        ]
      },
      {
        icone: '✍️',
        titulo: 'During the test',
        dicas: [
          { titulo: 'Read the command twice and underline', texto: 'The exam board hides what it wants behind pretty text. Underline key words: "choose", "except", "incorrect".' },
          { titulo: 'Answer what you master first', texto: 'Secure the easy points and come back to the hard ones. Never leave easy questions for the final minutes.' },
          { titulo: 'Guess smart: eliminate 2 options', texto: 'Among 3 options a guess is worth 33%; among 5, only 20%. Eliminating options is already studying.' },
          { titulo: 'Control time in blocks', texto: 'Split the test into blocks and check the clock. Around 3 minutes per question is the average pace.' }
        ]
      },
      {
        icone: '🧘',
        titulo: 'Body, mind and the day before',
        dicas: [
          { titulo: 'Sleep 7 to 8 hours (especially the night before)', texto: 'Memory is consolidated while you sleep. Pulling an all-nighter before the test lowers your score.' },
          { titulo: 'The day before: light review and early sleep', texto: 'No new subjects. Review your summaries, pack your documents and pen, and go to bed.' },
          { titulo: 'Do not compare your journey with others', texto: 'On social media everyone passes. Compare today’s you with the you from a month ago.' },
          { titulo: 'Take care of the basics: water, food, movement', texto: 'A dehydrated brain cannot reason. Water, real food and a 15-minute walk make a difference.' }
        ]
      }
    ],
    es: [
      {
        icone: '🗓️',
        titulo: 'Una rutina que funciona',
        dicas: [
          { titulo: 'Estudia todos los días, aunque sean 30 minutos', texto: 'La memoria se construye con frecuencia, no con maratones. Media hora al día rinde más que 5 horas el domingo.' },
          { titulo: 'Fija el horario y protégelo', texto: 'Trata tu horario de estudio como una cita médica: nadie agenda nada encima.' },
          { titulo: 'Bloques de foco con pausas reales', texto: 'Estudia 25 a 50 minutos concentrado y descansa 5 a 10. Un cerebro cansado solo finge aprender.' },
          { titulo: 'Anota el plan antes de abrir el cuaderno', texto: 'Llegar sin saber qué estudiar gasta la mitad del tiempo solo decidiendo por dónde empezar.' }
        ]
      },
      {
        icone: '🧠',
        titulo: 'Técnicas que suben la nota',
        dicas: [
          { titulo: 'Resuelve preguntas ANTES de releer la teoría', texto: 'Equivocarse primero hace que el cerebro preste atención a la explicación. Es el camino más rápido para aprender.' },
          { titulo: 'Arma un cuaderno de errores', texto: 'Anota cada pregunta fallada y el motivo. Repasarlo una vez por semana es repasar justo lo que necesitas.' },
          { titulo: 'Repaso espaciado (el arma secreta)', texto: 'Repasa el mismo día, en una semana y en un mes. Sin repaso, olvidas buena parte de lo estudiado.' },
          { titulo: 'Explícalo en voz alta (técnica Feynman)', texto: 'Si no puedes explicarlo de forma simple, aún no lo entendiste. Habla como si enseñaras a alguien.' }
        ]
      },
      {
        icone: '✍️',
        titulo: 'En el momento del examen',
        dicas: [
          { titulo: 'Lee el enunciado dos veces y subraya', texto: 'El comité esconde lo que quiere detrás de un texto bonito. Subraya palabras clave: "señala", "excepto", "incorrecta".' },
          { titulo: 'Responde primero lo que dominas', texto: 'Asegura los puntos fáciles y vuelve a las difíciles. No dejes preguntas fáciles para el final con el reloj apretado.' },
          { titulo: 'Adivina con criterio: elimina 2 opciones', texto: 'Entre 3 opciones el acierto vale 33%; entre 5, solo 20%. Eliminar opciones ya es estudiar.' },
          { titulo: 'Controla el tiempo por bloques', texto: 'Divide el examen en bloques y revisa el reloj. Unos 3 minutos por pregunta es el ritmo medio.' }
        ]
      },
      {
        icone: '🧘',
        titulo: 'Cuerpo, mente y la víspera',
        dicas: [
          { titulo: 'Duerme 7 u 8 horas (sobre todo la noche anterior)', texto: 'La memoria se fija mientras duermes. Trasnochar antes del examen baja tu nota.' },
          { titulo: 'La víspera: repaso ligero y dormir temprano', texto: 'Nada de materia nueva. Revisa tus resúmenes, prepara documento y bolígrafo y a dormir.' },
          { titulo: 'No compares tu proceso con el de otros', texto: 'En las redes todos aprueban. Compara tu yo de hoy con tu yo de hace un mes.' },
          { titulo: 'Cuida lo básico: agua, comida y movimiento', texto: 'Un cerebro deshidratado no razona. Agua, comida de verdad y una caminata de 15 minutos hacen diferencia.' }
        ]
      }
    ]
  }
};
