// Acessibilidade básica: skip link, foco visível, banner de cookies
const Acessibilidade = {
  init() {
    this.skipLink();
    this.focusVisible();
    this.cookieBanner();
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
  cookieBanner() {
    if(localStorage.getItem('gc_cookie_ok')) return;
    const banner=document.createElement('div');
    banner.role='dialog';
    banner.ariaLabel='Aviso de cookies';
    banner.style.cssText='position:fixed;left:0;right:0;bottom:0;background:#3a2c22;color:#fff;padding:12px 16px;display:flex;gap:12px;align-items:center;z-index:9999;font-family:inherit;flex-wrap:wrap';
    banner.innerHTML=`<span>Usamos anúncios de terceiros. Saiba mais em <a href="cookies.html" style="color:#ffd8a6">Aviso de Cookies</a>.</span>
      <button id="gc-cookie-aceitar" style="margin-left:auto;background:#a4572d;color:#fff;border:0;padding:8px 12px;border-radius:8px;cursor:pointer">Entendi</button>`;
    document.body.appendChild(banner);
    document.getElementById('gc-cookie-aceitar').addEventListener('click',()=>{
      localStorage.setItem('gc_cookie_ok','1');
      banner.remove();
    });
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
