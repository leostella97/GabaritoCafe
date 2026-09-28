/* ============================================================
   GABARITO CAFÉ — js/motor-simulado.js
   A "máquina de café" do simulado: sorteia questões,
   embaralha alternativas e confere respostas.
   Aqui só existe lógica pura — nada de tela.
   ============================================================ */

// Objeto global do motor do simulado
const MotorSimulado = {

  // Embaralha uma lista (Fisher-Yates) sem alterar a original
  embaralhar(lista) {
    const copia = lista.slice();                            // copia para não mexer na original
    for (let i = copia.length - 1; i > 0; i--) {            // percorre do fim para o começo
      const j = Math.floor(Math.random() * (i + 1));        // sorteia uma posição de 0 até i
      [copia[i], copia[j]] = [copia[j], copia[i]];          // troca as posições i e j
    }
    return copia;                                           // devolve a cópia embaralhada
  },

  // Embaralha as alternativas de uma questão (e atualiza o índice da certa)
  embaralharAlternativas(questao) {
    // Cria pares "texto + posição original" para lembrar qual era a certa
    const pares = questao.alternativas.map((texto, indice) => ({ texto, indice })); // emparelha
    const sorteado = this.embaralhar(pares);                // embaralha os pares
    return {                                               // devolve a questão pronta para o jogo
      ...questao,                                          // mantém todos os dados originais
      alternativas: sorteado.map(p => p.texto),            // só os textos, já embaralhados
      correta: sorteado.findIndex(p => p.indice === questao.correta) // nova posição da resposta certa
    };
  },

  // Monta um simulado: filtra o banco e sorteia a quantidade pedida
  montar({ quantidade, materias = [], banca = '', niveis = [], ensinos = [], excluirIds = [], idsExatos = null }) {
    // Se vieram questões exatas (modo "refazer erradas"), usa só elas
    let pool = idsExatos
      ? BancoQuestoes.filter(q => idsExatos.includes(q.id))   // pega só os ids pedidos
      : BancoQuestoes.filter(q => !excluirIds.includes(q.id)); // senão, todo o banco (menos exclusões)

    // Filtra por matérias, se o usuário escolheu alguma
    if (materias.length > 0) {
      pool = pool.filter(q => materias.includes(q.materia)); // só questões das matérias escolhidas
    }

    // Filtra pelo estilo de banca, se o usuário escolheu
    if (banca) {
      pool = pool.filter(q => q.banca === banca);           // só questões no estilo da banca
    }

    // Filtra pelos níveis de dificuldade, se o usuário escolheu algum
    if (niveis.length > 0) {
      pool = pool.filter(q => niveis.includes(q.nivel));    // só questões dos níveis escolhidos
    }

    // Filtra pelo nível de ensino (médio/superior), se o usuário escolheu algum
    if (ensinos.length > 0) {
      pool = pool.filter(q => ensinos.includes(q.ensino));  // só questões dos níveis escolhidos
    }

    const sorteadas = this.embaralhar(pool).slice(0, quantidade); // sorteia e limita à quantidade
    return sorteadas.map(q => this.embaralharAlternativas(q));    // embaralha as alternativas de cada uma
  },

  // Confere se a resposta dada bate com a correta
  corrigir(questao, respostaIndice) {
    return respostaIndice === questao.correta;              // compara os índices
  },

  // Conta quantas questões existem para uma combinação de filtros
  contarDisponiveis({ materias = [], banca = '', niveis = [], ensinos = [] }) {
    let pool = BancoQuestoes.slice();                       // começa com o banco inteiro
    if (materias.length > 0) {
      pool = pool.filter(q => materias.includes(q.materia)); // aplica o filtro de matérias
    }
    if (banca) {
      pool = pool.filter(q => q.banca === banca);           // aplica o filtro de banca
    }
    if (niveis.length > 0) {
      pool = pool.filter(q => niveis.includes(q.nivel));    // aplica o filtro de dificuldade
    }
    if (ensinos.length > 0) {
      pool = pool.filter(q => ensinos.includes(q.ensino));  // aplica o filtro de nível de ensino
    }
    return pool.length;                                     // devolve o total disponível
  },

  // TEAM_005: contagens facetadas — cada dimensão conta suas opções ignorando
  // o próprio filtro (senão marcar "FCC" zeraria as outras bancas e você não
  // poderia trocar). Assim os chips/select mostram "o que ainda dá" a cada
  // seleção: matéria → bancas/níveis/ensinos; banca → matérias/níveis/ensinos...
  facetas({ materias = [], banca = '', niveis = [], ensinos = [] }) {
    // Uma questão passa quando atende TODOS os filtros, menos o ignorado na vez
    const passa = (q, ignorar) =>
      (ignorar === 'materias' || materias.length === 0 || materias.includes(q.materia)) && // filtro de matérias (ou ignora)
      (ignorar === 'banca'    || !banca           || q.banca === banca) &&                 // filtro de banca (ou ignora)
      (ignorar === 'niveis'   || niveis.length === 0 || niveis.includes(q.nivel)) &&       // filtro de dificuldade (ou ignora)
      (ignorar === 'ensinos'  || ensinos.length === 0 || ensinos.includes(q.ensino));      // filtro de ensino (ou ignora)
    const contar = (ignorar, campo) => {                    // conta um campo sob os demais filtros
      const contagem = {};                                  // dicionário valor → quantidade
      for (const q of BancoQuestoes) {                      // percorre todas as questões
        if (passa(q, ignorar)) {                            // passou nos outros filtros?
          contagem[q[campo]] = (contagem[q[campo]] || 0) + 1; // soma no valor do campo
        }
      }
      return contagem;                                      // devolve o dicionário
    };
    return {                                                // um dicionário por dimensão
      materias: contar('materias', 'materia'),              // matérias possíveis com os demais filtros
      bancas:   contar('banca', 'banca'),                   // bancas possíveis
      niveis:   contar('niveis', 'nivel'),                  // dificuldades possíveis
      ensinos:  contar('ensinos', 'ensino')                 // níveis de ensino possíveis
    };
  },

  // Lista as matérias que existem no banco (com contagem de questões)
  materiasDoBanco() {
    const contagem = {};                                    // dicionário matéria → quantidade
    for (const q of BancoQuestoes) {                        // percorre todas as questões
      contagem[q.materia] = (contagem[q.materia] || 0) + 1; // soma uma questão na matéria
    }
    // Converte o dicionário em lista ordenada por quantidade (mais questões → mais à esquerda)
    return Object.keys(contagem)
      .map(nome => ({ nome, quantidade: contagem[nome] }))    // lista pronta
      .sort((a, b) => b.quantidade - a.quantidade || a.nome.localeCompare(b.nome, 'pt-BR')); // ordena desc; desempate alfabético
  },

  // Lista as bancas (estilos) presentes no banco, com contagem
  bancasDoBanco() {
    const contagem = {};                                    // dicionário banca → quantidade
    for (const q of BancoQuestoes) {                        // percorre todas as questões
      contagem[q.banca] = (contagem[q.banca] || 0) + 1;     // soma uma questão na banca
    }
    return Object.keys(contagem).map(nome => ({ nome, quantidade: contagem[nome] })); // lista pronta
  },

  // Lista os níveis de dificuldade do banco na ordem fácil → difícil, com contagem
  niveisDoBanco() {
    const contagem = {};                                    // dicionário nível → quantidade
    for (const q of BancoQuestoes) {                        // percorre todas as questões
      contagem[q.nivel] = (contagem[q.nivel] || 0) + 1;     // soma uma questão no nível
    }
    // Ordem fixa de exibição (não alfabética)
    return ['facil', 'medio', 'dificil']
      .filter(n => contagem[n])                             // só níveis que existem no banco
      .map(n => ({ nivel: n, quantidade: contagem[n] }));   // lista pronta
  },

  // Lista os níveis de ensino do banco na ordem médio → superior, com contagem
  ensinosDoBanco() {
    const contagem = {};                                    // dicionário ensino → quantidade
    for (const q of BancoQuestoes) {                        // percorre todas as questões
      contagem[q.ensino] = (contagem[q.ensino] || 0) + 1;   // soma uma questão no nível
    }
    // Ordem fixa de exibição (não alfabética)
    return ['medio', 'superior']
      .filter(e => contagem[e])                             // só níveis que existem no banco
      .map(e => ({ nivel: e, quantidade: contagem[e] }));   // lista pronta
  }
};
