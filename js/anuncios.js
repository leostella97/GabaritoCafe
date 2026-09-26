/* ============================================================
   GABARITO CAFÉ — anuncios.js
   Liga os blocos de anúncio do Google AdSense espalhados na
   página. Cada <ins class="adsbygoogle"> precisa de um
   data-ad-slot real (criado em AdSense → Anúncios → Por bloco).
   Enquanto o slot estiver com o valor de exemplo "0000000000",
   o bloco é ignorado e fica vazio sem sujar o console.

   TEAM_002: arquivo novo — monetização via AdSense.
   ============================================================ */

const AnunciosUI = {                                        // TEAM_002: liga os blocos de anúncio
  SLOT_PENDENTE: '0000000000',                              // TEAM_002: marcador de "ainda sem slot"

  iniciar() {
    // Procura todos os blocos de anúncio da página
    document.querySelectorAll('ins.adsbygoogle').forEach(bloco => {
      if (bloco.dataset.adSlot === this.SLOT_PENDENTE) return; // slot ainda não configurado → pula
      if (bloco.dataset.adsenseLigado) return;              // já foi ligado → não repete
      bloco.dataset.adsenseLigado = '1';                    // marca para nunca empurrar 2×
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({}); // pede anúncio ao Google
      } catch (erro) {
        // bloqueador de anúncio ou rede fora: segue a vida sem anúncio
      }
    });
  }
};

// Liga os blocos assim que o DOM estiver pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => AnunciosUI.iniciar());
} else {
  AnunciosUI.iniciar();
}
