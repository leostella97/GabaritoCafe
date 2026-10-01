// TEAM_007 — spec da lógica de pendências da revisão (a parte mais sutil:
// junta erros do histórico, desmarca quem foi acertada depois e prefere a
// questão viva do banco à foto antiga)
describe('RevisaoUI.pendentes', () => {
  let RevisaoUI, ctx;

  // Questões vivas do banco (fake) — note que q3 NÃO existe aqui de propósito
  const BANCO_FAKE = `
    var BancoQuestoes = [
      { id: 'q1', materia: 'Português', tema: 'Verbos', nivel: 'facil', ensino: 'medio', banca: 'FCC',
        alternativas: ['alfa', 'beta', 'gama'], correta: 0, explicacao: 'exp1', dica: 'd1', video: 'v1' },
      { id: 'q2', materia: 'Matemática', tema: 'Juros', nivel: 'medio', ensino: 'superior', banca: 'FGV',
        alternativas: ['x', 'y'], correta: 1, explicacao: 'exp2', dica: 'd2', video: 'v2' }
    ];
  `;

  function novaRevisao(historico) {
    ctx = carregarModulos(['js/armazenamento.js', 'js/idioma.js', 'js/revisao.js'], {
      Auth: { idAtual: () => 'u1' },
      App: { torrada: () => {} }
    });
    ctx.roda(BANCO_FAKE);
    ctx.localStorage.setItem('gc_resultados_u1', JSON.stringify(historico));
    RevisaoUI = ctx.pega('RevisaoUI');
  }

  it('junta erros repetidos e ordena pelos mais errados', () => {
    novaRevisao([
      { erradas: [{ id: 'q1', alternativas: ['alfa', 'beta', 'gama'], resposta: 1 }, { id: 'q2', alternativas: ['x', 'y'], resposta: 0 }], idsPerguntas: ['q1', 'q2'] },
      { erradas: [{ id: 'q1', alternativas: ['alfa', 'beta', 'gama'], resposta: 2 }], idsPerguntas: ['q1'] }
    ]);
    const lista = RevisaoUI.pendentes();
    expect(lista.length).toBe(2);
    expect(lista[0].id).toBe('q1');                     // q1 errou 2× → primeiro
    expect(lista[0].erros).toBe(2);
    expect(lista[1].id).toBe('q2');
    expect(lista[1].erros).toBe(1);
  });

  it('tira da lista quem foi acertada depois (idsPerguntas sem erro)', () => {
    novaRevisao([
      { erradas: [{ id: 'q1', alternativas: ['alfa', 'beta', 'gama'], resposta: 1 }], idsPerguntas: ['q1'] },
      { erradas: [], idsPerguntas: ['q1'] }             // 2º simulado: tentou q1 e acertou
    ]);
    expect(RevisaoUI.pendentes().length).toBe(0);       // corrigida → some da lista
  });

  it('usa a foto do histórico quando o id sumiu do banco', () => {
    const fotoQ3 = { id: 'q3', materia: 'Antiga', tema: 'Tema X', alternativas: ['m', 'n'], correta: 0, resposta: 1 };
    novaRevisao([{ erradas: [fotoQ3], idsPerguntas: ['q3'] }]);
    const lista = RevisaoUI.pendentes();
    expect(lista.length).toBe(1);
    expect(lista[0].questao.materia).toBe('Antiga');    // cai na foto (q3 não está no banco fake)
  });

  it('mapeia a resposta da foto para a ordem atual das alternativas', () => {
    // Na época o usuário marcou "gama" (resposta 2); no banco "gama" continua índice 2
    novaRevisao([{ erradas: [{ id: 'q1', alternativas: ['gama', 'alfa', 'beta'], resposta: 0 }], idsPerguntas: ['q1'] }]);
    const lista = RevisaoUI.pendentes();
    expect(lista[0].questao.id).toBe('q1');             // achou a viva
    expect(lista[0].resposta).toBe(2);                  // "gama" na ordem atual = índice 2
  });

  it('devolve lista vazia sem usuário e sem histórico', () => {
    ctx = carregarModulos(['js/armazenamento.js', 'js/idioma.js', 'js/revisao.js'], {
      Auth: { idAtual: () => null },
      App: { torrada: () => {} }
    });
    ctx.roda(BANCO_FAKE);
    expect(ctx.pega('RevisaoUI').pendentes()).toEqual([]);
  });
});
