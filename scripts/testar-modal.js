// TEAM_007 — teste de dev: fecha o modal compartilhado de QUALQUER tela
// Reproduz a árvore real do modal (#modal-materia > .modal-caixa > #modal-fechar
// + #modal-conteudo), carrega os scripts REAIS e simula cliques com bubbling.
// Cobre o bug: "ao abrir coffee wrap não fecha popup" (✕, véu e Esc).
// Uso: node scripts/testar-modal.js
const fs = require('fs');
const vm = require('vm');

let falhas = 0;
function ok(cond, msg) {
  if (cond) console.log('  ✅ ' + msg);
  else { falhas++; console.log('  ❌ FALHOU: ' + msg); }
}

/* ---------- Mini-DOM fiel ---------- */
function El(tag, id) {
  return {
    tagName: tag.toUpperCase(), id: id || '',
    _classes: new Set(), _ouvintes: {}, pai: null, filhos: [],
    dataset: {}, style: {}, innerHTML: '', textContent: '',
    classList: {
      _s: null,
      add(c) { this._s.add(c); }, remove(c) { this._s.delete(c); },
      contains(c) { return this._s.has(c); }, toggle(c, v) { v ? this._s.add(c) : this._s.delete(c); }
    },
    addEventListener(ev, fn) { (this._ouvintes[ev] = this._ouvintes[ev] || []).push(fn); },
    closest(sel) { return null; },          // nada dentro casa com .topico-item etc.
    appendChild(f) { f.pai = this; this.filhos.push(f); return f; },
    querySelectorAll() { return []; }
  };
}
function comPai(el) { el.classList._s = el._classes; return el; }

const reg = {};                                   // registro por id
function registrar(el) { if (el.id) reg[el.id] = el; return el; }

// Árvore real: modal > caixa > (fechar + conteudo)
const modal = registrar(comPai(El('div', 'modal-materia')));
modal._classes.add('modal'); modal._classes.add('oculto');
const caixa = El('div'); caixa._classes.add('modal-caixa');
const fechar = registrar(El('button', 'modal-fechar'));
const conteudo = registrar(El('div', 'modal-conteudo'));
modal.appendChild(caixa); caixa.appendChild(fechar); caixa.appendChild(conteudo);

const docOuvintes = {};
const documento = {
  _modal: modal,
  getElementById(id) {                            // ids conhecidos: os reais; demais: stub novo
    return reg[id] || (reg[id] = comPai(El('div', id)));
  },
  querySelectorAll() { return []; },
  createElement(tag) {
    if (tag === 'canvas') return {                // canvas fake (coffee wrap desenha nele)
      width: 0, height: 0, _ctx: null,
      getContext() {
        const c = { fillStyle: '', strokeStyle: '', lineWidth: 1, font: '', textAlign: '',
          createLinearGradient: () => ({ addColorStop() {} }), fillRect() {}, strokeRect() {},
          fillText() {}, beginPath() {}, moveTo() {}, lineTo() {}, stroke() {}, fill() {},
          roundRect() {} };
        return c;
      },
      toDataURL() { return 'data:image/png;base64,TESTE'; },
      toBlob(fn) { fn && fn({}); }
    };
    return comPai(El(tag));
  },
  addEventListener(ev, fn) { (docOuvintes[ev] = docOuvintes[ev] || []).push(fn); },
  documentElement: { lang: 'pt' }
};
function disparar(alvo, tipo, extra) {            // clique com bubbling até o document
  const e = Object.assign({ type: tipo, target: alvo, preventDefault() {}, key: extra && extra.key }, extra || {});
  let no = alvo;
  while (no) { (no._ouvintes[tipo] || []).forEach(fn => fn.call(no, e)); no = no.pai; }
  (docOuvintes[tipo] || []).forEach(fn => fn(e));
}

/* ---------- Contexto com stubs mínimos ---------- */
const ctx = {
  console, document: documento,
  window: { addEventListener() {}, print() {}, pdfjsLib: null, scrollTo() {} },
  navigator: {}, localStorage: { _d: {}, getItem(k) { return this._d[k] || null; }, setItem(k, v) { this._d[k] = v; }, removeItem(k) { delete this._d[k]; } },
  setTimeout: (fn) => fn(), clearTimeout() {},
  Auth: { usuarioAtual: () => ({ nome: 'Teste' }), focoAtual: () => '', idAtual: () => 'u1' },
  Armazenamento: { ler: (k, pad) => pad, gravar() {} },
  location: { reload() {} }, alert() {}, fetch: () => Promise.reject(new Error('sem rede'))
};
ctx.window.print = ctx.window.print;
vm.createContext(ctx);
vm.runInContext('var window=this;', ctx);         // window === globalThis no vm

for (const arq of ['js/util.js', 'js/idioma.js', 'js/armazenamento.js', 'js/edital.js', 'js/coffee-wrap.js']) {
  vm.runInContext(fs.readFileSync(arq, 'utf8'), ctx);
}

/* ---------- Cenários ---------- */
console.log('\n▶ Coffee wrap se auto-garante (abrirModalWrap liga a fiação)');
vm.runInContext('CoffeeWrapUI.abrirModalWrap()', ctx);
ok(!modal._classes.has('oculto'), 'modal abriu (oculto removido)');
disparar(fechar, 'click');
ok(modal._classes.has('oculto'), '✕ fecha mesmo SEM boot wiring (auto-fiação)');

console.log('\n▶ Boot wiring (App.iniciar → EditalUI.iniciarModal) também cobre tudo');
modal._classes.add('oculto');                     // força "fechado" para o próximo cenário
vm.runInContext('CoffeeWrapUI.abrirModalWrap()', ctx);
ok(!modal._classes.has('oculto'), 'modal reabriu');
disparar(fechar, 'click');
ok(modal._classes.has('oculto'), '✕ fecha o popup');

console.log('\n▶ Reabre e clica FORA (no véu)');
vm.runInContext('CoffeeWrapUI.abrirModalWrap()', ctx);
disparar(modal, 'click');                          // e.target === modal (clique no véu)
ok(modal._classes.has('oculto'), 'clique fora da caixa fecha');

console.log('\n▶ Reabre e clica DENTRO (não deve fechar)');
vm.runInContext('CoffeeWrapUI.abrirModalWrap()', ctx);
disparar(conteudo, 'click');                       // clique no conteúdo
ok(!modal._classes.has('oculto'), 'clique dentro da caixa não fecha');
(docOuvintes.keydown || []).forEach(fn => fn({ key: 'Escape' })); // aperta Esc
ok(modal._classes.has('oculto'), 'Esc fecha o popup');

console.log('\n▶ Idempotência: iniciarModal 2x não duplica listeners');
const antes = fechar._ouvintes.click.length;
vm.runInContext('EditalUI.iniciarModal()', ctx);
ok(fechar._ouvintes.click.length === antes, 'sem listener duplicado no ✕');

console.log('\n========================================');
console.log(falhas === 0 ? '✅ Tudo certo! O popup fecha por todos os caminhos.' : '❌ ' + falhas + ' checagem(ns) falhou(aram).');
process.exit(falhas === 0 ? 0 : 1);
