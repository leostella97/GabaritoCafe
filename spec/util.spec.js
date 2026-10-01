// TEAM_007 — spec do Util compartilhado (escape único para os 9 módulos)
describe('Util.escape', () => {
  let Util;

  beforeAll(() => {
    const ctx = carregarModulos(['js/util.js']);        // carrega o módulo real
    Util = ctx.pega('Util');                            // pega o global Util
  });

  it('escapa todos os caracteres perigosos de HTML', () => {
    const entrada = '<img src=x onerror="alert(\'x\')"> & "café"';
    const saida = Util.escape(entrada);
    expect(saida).not.toContain('<');
    expect(saida).not.toContain('>');
    expect(saida).not.toContain('"');
    expect(saida).not.toContain("'");
    expect(saida).toContain('&lt;');
    expect(saida).toContain('&gt;');
    expect(saida).toContain('&quot;');
    expect(saida).toContain('&#39;');
    expect(saida).toContain('&amp;');
  });

  it('escapa & antes dos demais (não dupla-escapa)', () => {
    expect(Util.escape('a & b < c')).toBe('a &amp; b &lt; c');
  });

  it('aceita números e valores vazios sem quebrar', () => {
    expect(Util.escape(42)).toBe('42');
    expect(Util.escape('')).toBe('');
    expect(Util.escape(null)).toBe('null');
    expect(Util.escape(undefined)).toBe('undefined');
  });
});
