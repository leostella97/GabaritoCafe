// Acessibilidade básica: skip link, foco visível
const Acessibilidade = {
  init() {
    this.skipLink();
    this.focusVisible();
    this.keyboardNav();
  },
  skipLink() {
    if(document.getElementById('skip-link')) return;
    const a = document.createElement('a');
    a.id='skip-link';
    a.href='#area-app';
    a.textContent='Pular para o conteúdo';
    a.style.position='absolute';
    a.style.left='-999px';
    a.style.top='0';
    a.style.background='#6f4e37';
    a.style.color='#fff';
    a.style.padding='8px';
    a.style.zIndex='10000';
    a.addEventListener('focus',()=>a.style.left='8px');
    a.addEventListener('blur',()=>a.style.left='-999px');
    document.body.prepend(a);
  },
  focusVisible() {
    const style=document.createElement('style');
    style.textContent=`*:focus-visible{outline:3px solid #a4572d;outline-offset:2px}`;
    document.head.appendChild(style);
  },
  keyboardNav() {
    document.addEventListener('keydown',e=>{
      if(e.key==='Escape'){
        const open=[...document.querySelectorAll('.modal, .menu-aberto')];
        open.forEach(el=>el.classList.remove('ativo'));
      }
    });
  }
};
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',()=>Acessibilidade.init());
else Acessibilidade.init();
