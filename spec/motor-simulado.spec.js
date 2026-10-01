// TEAM_007 — spec do motor do simulado (lógica pura de montagem/correção)
describe('MotorSimulado', () => {
  let MotorSimulado;

  // Banco fake pequeno para os testes (sem carregar os 15 MB reais)
  const BANCO_FAKE = `
    var BancoQuestoes = [
      { id: 'q1', materia: 'Português', tema: 'Verbos', nivel: 'facil', ensino: 'medio', banca: 'FCC', alternativas: ['a','b','c'], correta: 0 },
      { id: 'q2', materia: 'Português', tema: 'Crase', nivel: 'medio', ensino: 'medio', banca: 'FGV', alternativas: ['a','b'], correta: 1 },
      { id: 'q3', materia: 'Matemática', tema: 'Porcentagem', nivel: 'dificil', ensino: 'superior', banca: 'FCC', alternativas: ['a','b','c','d'], correta: 2 },
      { id: 'q4', materia: 'Direito', tema: 'CF', nivel: 'facil', ensino: 'superior', banca: 'CESPE', alternativas: ['a','b'], correta: 0 }
    ];
  `;

  beforeEach(() => {
    const ctx = carregarModulos(['js/armazenamento.js', 'js/motor-simulado.js']);
    ctx.roda(BANCO_FAKE);                               // injeta o banco fake no contexto
    MotorSimulado = ctx.pega('MotorSimulado');
  });

  it('embaralhar não altera a lista original', () => {
    const lista = [1, 2, 3, 4, 5];
    const copia = MotorSimulado.embaralhar(lista);
    expect(lista).toEqual([1, 2, 3, 4, 5]);             // original intacta
    expect(copia.sort()).toEqual([1, 2, 3, 4, 5]);      // mesmos itens
  });

  it('embaralharAlternativas mantém a resposta correta apontando pro texto certo', () => {
    const q = { id: 'x', alternativas: ['errada1', 'CERTA', 'errada2'], correta: 1 };
    for (let i = 0; i < 20; i++) {                      // várias vezes por causa do aleatório
      const emb = MotorSimulado.embaralharAlternativas(q);
      expect(emb.alternativas[emb.correta]).toBe('CERTA'); // correta sempre aponta o texto certo
      expect(emb.alternativas.length).toBe(3);
    }
  });

  it('corrigir compara índice da resposta com o gabarito', () => {
    const q = { correta: 2 };
    expect(MotorSimulado.corrigir(q, 2)).toBe(true);
    expect(MotorSimulado.corrigir(q, 0)).toBe(false);
    expect(MotorSimulado.corrigir(q, -1)).toBe(false);  // questão pulada erra
  });

  it('montar respeita quantidade e filtro de matéria', () => {
    const qs = MotorSimulado.montar({ quantidade: 10, materias: ['Português'] });
    expect(qs.length).toBe(2);                          // só q1 e q2 são de Português
    expect(qs.every(q => q.materia === 'Português')).toBe(true);
  });

  it('montar com idsExatos traz só as questões pedidas', () => {
    const qs = MotorSimulado.montar({ quantidade: 10, idsExatos: ['q3', 'q4'] });
    expect(qs.length).toBe(2);
    expect(qs.map(q => q.id).sort()).toEqual(['q3', 'q4']);
  });

  it('montar filtra por banca, nível e ensino juntos', () => {
    const qs = MotorSimulado.montar({ quantidade: 10, banca: 'FCC', niveis: ['dificil'], ensinos: ['superior'] });
    expect(qs.length).toBe(1);
    expect(qs[0].id).toBe('q3');
  });

  it('contarDisponiveis soma certo com filtros', () => {
    expect(MotorSimulado.contarDisponiveis({})).toBe(4);
    expect(MotorSimulado.contarDisponiveis({ banca: 'FCC' })).toBe(2);
    expect(MotorSimulado.contarDisponiveis({ materias: ['Direito'], niveis: ['facil'] })).toBe(1);
  });

  it('facetas conta cada dimensão ignorando o próprio filtro', () => {
    const f = MotorSimulado.facetas({ materias: ['Português'] });
    expect(f.materias['Português']).toBe(2);            // dimensão própria: todas as matérias
    expect(f.bancas['FCC']).toBe(1);                    // dentro de Português: 1 FCC + 1 FGV
    expect(f.bancas['FGV']).toBe(1);
    expect(f.bancas['CESPE']).toBeUndefined();          // CESPE não tem Português
  });

  it('materiasDoBanco ordena por quantidade desc', () => {
    const mats = MotorSimulado.materiasDoBanco();
    expect(mats[0].nome).toBe('Português');
    expect(mats[0].quantidade).toBe(2);
  });
});
