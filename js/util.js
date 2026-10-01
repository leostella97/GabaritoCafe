/* ============================================================
   GABARITO CAFÉ — js/util.js
   Utilitários compartilhados entre os módulos. Nasceu para
   acabar com a cópia idêntica do escape() em 9 arquivos
   (TEAM_007 — auditoria de redundâncias).
   ============================================================ */

// Objeto global de utilidades
const Util = {

  // Foge do HTML: transforma caracteres perigosos em entidades.
  // Usado sempre que um texto do usuário/dados vira innerHTML.
  escape(texto) {
    return String(texto)                          // garante texto
      .replace(/&/g, '&amp;')                     // escapa "&" (primeiro!)
      .replace(/</g, '&lt;')                      // escapa "<"
      .replace(/>/g, '&gt;')                      // escapa ">"
      .replace(/"/g, '&quot;')                    // escapa aspas
      .replace(/'/g, '&#39;');                    // escapa apóstrofo
  }
};
