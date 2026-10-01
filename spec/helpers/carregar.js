// TEAM_007 — helper Jasmine: carrega os scripts clássicos do projeto
// (const X = {...}) num contexto vm com localStorage stubado e devolve
// um "pega(nome)" para ler os globais e um "roda(codigo)" para injetar
// stubs/dados de teste dentro do contexto.
const fs = require('fs');
const path = require('path');
const vm = require('vm');

global.carregarModulos = function (arquivos, stubs = {}) {
  const store = {};                                    // localStorage em memória
  const base = {
    console,
    setTimeout, clearTimeout,
    navigator: { language: 'pt-BR' },                  // idioma padrão do navegador fake
    // DOM mínimo permissivo — os módulos consultam elementos na carga
    document: {
      getElementById: () => null,
      querySelector: () => null,
      querySelectorAll: () => [],
      createElement: (tag) => ({ tagName: tag, style: {}, dataset: {}, classList: { add() {}, remove() {}, toggle() {}, contains: () => false } }),
      addEventListener: () => {},
      documentElement: { lang: 'pt-BR' }
    },
    localStorage: {
      getItem: (k) => (Object.prototype.hasOwnProperty.call(store, k) ? store[k] : null),
      setItem: (k, v) => { store[k] = String(v); },
      removeItem: (k) => { delete store[k]; },
      _store: store                                    // acesso direto p/ semear cenários
    }
  };
  const ctx = vm.createContext(Object.assign(base, stubs));
  for (const a of arquivos) {
    const fonte = fs.readFileSync(path.join(__dirname, '..', '..', a), 'utf8'); // lê o módulo real
    vm.runInContext(fonte, ctx, { filename: a });       // executa no contexto isolado
  }
  ctx.pega = (nome) => vm.runInContext(nome, ctx);      // lê um global const do contexto
  ctx.roda = (codigo) => vm.runInContext(codigo, ctx);  // roda código dentro do contexto
  return ctx;
};
