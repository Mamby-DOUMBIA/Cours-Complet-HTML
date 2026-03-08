/**
 * navigation.js
 * Script de navigation pour le cours HTML complet.
 * Gère : mise en évidence du lien actif dans la sidebar,
 * table des matières dynamique, et persistance du scroll.
 */

document.addEventListener('DOMContentLoaded', function () {

  // ── 1. Marquer le lien actif dans la sidebar ──────────────────────────
  const cheminActuel = window.location.pathname.split('/').pop();
  const liensSidebar = document.querySelectorAll('.sidebar nav a');

  liensSidebar.forEach(function (lien) {
    const cheminLien = lien.getAttribute('href').split('/').pop();
    if (cheminLien === cheminActuel || lien.getAttribute('href').includes(cheminActuel)) {
      lien.classList.add('actif');
      // Faire défiler la sidebar pour montrer le lien actif
      lien.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  });

  // ── 2. Retour en haut de page ─────────────────────────────────────────
  const boutonHaut = document.getElementById('bouton-haut');
  if (boutonHaut) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        boutonHaut.style.opacity = '1';
        boutonHaut.style.pointerEvents = 'auto';
      } else {
        boutonHaut.style.opacity = '0';
        boutonHaut.style.pointerEvents = 'none';
      }
    });
    boutonHaut.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ── 3. Surlignage des blocs de code au survol ─────────────────────────
  const blocsCode = document.querySelectorAll('pre');
  blocsCode.forEach(function (bloc) {
    bloc.title = 'Bloc de code HTML';
  });

});
