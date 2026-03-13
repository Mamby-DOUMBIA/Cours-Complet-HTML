<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Module 16 — Performance Web — Cours HTML Complet</title>
  <link rel="stylesheet" href="../../assets/css/style-cours.css">
</head>
<body><div class="mise-en-page">
  <aside class="sidebar">
    <div class="sidebar-logo"><span class="sidebar-logo-titre">📘 Cours HTML Complet</span><span class="sidebar-logo-sous">Du débutant à l'expert</span></div>
    <nav>
      <div class="nav-section">Accueil</div>
      <ul><li><a href="../../index.html">🏠 Accueil du cours</a></li></ul>
      <div class="nav-section">🟢 Niveau Débutant</div>
      <ul>
        <li><a href="../../modules/01-introduction/cours.html">01 — Introduction au Web</a></li>
        <li><a href="../../modules/02-environnement/cours.html">02 — Environnement dev</a></li>
        <li><a href="../../modules/03-structure/cours.html">03 — Structure HTML</a></li>
        <li><a href="../../modules/04-balises-base/cours.html">04 — Balises de base</a></li>
        <li><a href="../../modules/05-liens-navigation/cours.html">05 — Liens &amp; Navigation</a></li>
      </ul>
      <div class="nav-section">🔵 Niveau Intermédiaire</div>
      <ul>
        <li><a href="../../modules/06-images-medias/cours.html">06 — Images &amp; Médias</a></li>
        <li><a href="../../modules/07-listes/cours.html">07 — Listes HTML</a></li>
        <li><a href="../../modules/08-tableaux/cours.html">08 — Tableaux HTML</a></li>
        <li><a href="../../modules/09-formulaires/cours.html">09 — Formulaires</a></li>
        <li><a href="../../modules/10-semantique/cours.html">10 — HTML Sémantique</a></li>
      </ul>
      <div class="nav-section">🟠 Niveau Avancé</div>
      <ul>
        <li><a href="../../modules/11-accessibilite/cours.html">11 — Accessibilité</a></li>
        <li><a href="../../modules/12-seo/cours.html">12 — HTML &amp; SEO</a></li>
        <li><a href="../../modules/13-css-integration/cours.html">13 — Intégration CSS</a></li>
        <li><a href="../../modules/14-js-integration/cours.html">14 — Intégration JS</a></li>
        <li><a href="../../modules/15-html-avance/cours.html">15 — HTML Avancé</a></li>
      </ul>
      <div class="nav-section">🔴 Niveau Expert</div>
      <ul>
        <li><a href="../../modules/16-performance/cours.html" class="actif">16 — Performance Web</a></li>
        <li><a href="../../modules/17-architecture/cours.html">17 — Architecture</a></li>
        <li><a href="../../modules/18-projets/cours.html">18 — Projets pratiques</a></li>
      </ul>
      <div class="nav-section">📎 Annexes</div>
      <ul>
        <li><a href="../../annexes/reference-balises.html">Référence des balises</a></li>
        <li><a href="../../annexes/memo-rapide.html">Mémo rapide</a></li>
        <li><a href="../../annexes/erreurs-frequentes.html">Erreurs fréquentes</a></li>
        <li><a href="../../annexes/bonnes-pratiques.html">Bonnes pratiques</a></li>
        <li><a href="../../annexes/glossaire.html">Glossaire</a></li>
      </ul>
    </nav>
  </aside>
  <main class="contenu-principal"><div class="contenu-interieur">
    <nav class="fil-ariane"><a href="../../index.html">Accueil</a> <span>›</span> <span>Module 16 — Performance Web</span></nav>
    <header class="module-hero">
      <div class="niveau"><span class="badge badge-expert">🔴 Expert</span>
        <span class="badge" style="color:#a0aec0;border-color:#a0aec0;background:rgba(160,174,192,0.1);">Module 16 / 18</span></div>
      <h1>Performance Web</h1><p class="accroche">Optimisez les performances de vos pages HTML : chargement des ressources, lazy loading, resource hints, Core Web Vitals. Des techniques professionnelles pour des sites rapides.</p>
    </header>

      <h2 id="core-web-vitals">16.1 — Les Core Web Vitals de Google</h2>
      <p>Les <strong>Core Web Vitals</strong> sont des métriques de performance que Google utilise comme facteur de classement dans ses résultats de recherche depuis 2021. Comprendre et optimiser ces métriques est essentiel pour un développeur Web professionnel.</p>
      <div class="tableau-wrapper"><table>
        <thead><tr><th>Métrique</th><th>Signification</th><th>Cible</th><th>Ce qui impacte</th></tr></thead>
        <tbody>
          <tr><td><strong>LCP</strong> (Largest Contentful Paint)</td><td>Temps de rendu du plus grand élément visible</td><td>&lt; 2.5s</td><td>Images lourdes, CSS bloquant, serveur lent</td></tr>
          <tr><td><strong>FID</strong> (First Input Delay)</td><td>Délai avant la première interaction</td><td>&lt; 100ms</td><td>JavaScript lourd, tâches longues</td></tr>
          <tr><td><strong>CLS</strong> (Cumulative Layout Shift)</td><td>Stabilité visuelle de la page</td><td>&lt; 0.1</td><td>Images sans width/height, polices, pubs</td></tr>
        </tbody>
      </table></div>

      <h2 id="lazy-loading">16.2 — Lazy loading des images</h2>
      <div class="bloc-code"><div class="code-etiquette"><span class="code-etiquette-nom">Optimisation des images</span><span class="code-etiquette-lang">HTML</span></div>
        <pre><code><span class="s-commentaire">&lt;!-- loading="lazy" : charge l'image seulement quand elle approche du viewport --&gt;</span>
<span class="s-balise">&lt;img</span>
  <span class="s-attribut">src</span>=<span class="s-valeur">"photo.webp"</span>
  <span class="s-attribut">alt</span>=<span class="s-valeur">"Description"</span>
  <span class="s-attribut">width</span>=<span class="s-valeur">"800"</span>
  <span class="s-attribut">height</span>=<span class="s-valeur">"600"</span>
  <span class="s-attribut">loading</span>=<span class="s-valeur">"lazy"</span>
  <span class="s-attribut">decoding</span>=<span class="s-valeur">"async"</span>
<span class="s-balise">&gt;</span>

<span class="s-commentaire">&lt;!-- L'image hero (Above the Fold) doit utiliser loading="eager" --&gt;</span>
<span class="s-balise">&lt;img</span>
  <span class="s-attribut">src</span>=<span class="s-valeur">"hero.webp"</span>
  <span class="s-attribut">alt</span>=<span class="s-valeur">"Image principale"</span>
  <span class="s-attribut">width</span>=<span class="s-valeur">"1200"</span>
  <span class="s-attribut">height</span>=<span class="s-valeur">"600"</span>
  <span class="s-attribut">loading</span>=<span class="s-valeur">"eager"</span>
  <span class="s-attribut">fetchpriority</span>=<span class="s-valeur">"high"</span>
<span class="s-balise">&gt;</span></code></pre>
      </div>

      <h2 id="resource-hints">16.3 — Resource Hints</h2>
      <div class="bloc-code"><div class="code-etiquette"><span class="code-etiquette-nom">Resource hints dans le head</span><span class="code-etiquette-lang">HTML</span></div>
        <pre><code><span class="s-balise">&lt;head&gt;</span>
  <span class="s-commentaire">&lt;!-- preconnect : établir la connexion à l'avance (DNS + TCP + TLS) --&gt;</span>
  <span class="s-balise">&lt;link</span> <span class="s-attribut">rel</span>=<span class="s-valeur">"preconnect"</span> <span class="s-attribut">href</span>=<span class="s-valeur">"https://fonts.googleapis.com"</span><span class="s-balise">&gt;</span>
  <span class="s-balise">&lt;link</span> <span class="s-attribut">rel</span>=<span class="s-valeur">"preconnect"</span> <span class="s-attribut">href</span>=<span class="s-valeur">"https://api.monsite.com"</span><span class="s-balise">&gt;</span>

  <span class="s-commentaire">&lt;!-- preload : télécharger une ressource critique immédiatement --&gt;</span>
  <span class="s-balise">&lt;link</span> <span class="s-attribut">rel</span>=<span class="s-valeur">"preload"</span> <span class="s-attribut">href</span>=<span class="s-valeur">"css/style.css"</span> <span class="s-attribut">as</span>=<span class="s-valeur">"style"</span><span class="s-balise">&gt;</span>
  <span class="s-balise">&lt;link</span> <span class="s-attribut">rel</span>=<span class="s-valeur">"preload"</span> <span class="s-attribut">href</span>=<span class="s-valeur">"fonts/inter.woff2"</span> <span class="s-attribut">as</span>=<span class="s-valeur">"font"</span> <span class="s-attribut">type</span>=<span class="s-valeur">"font/woff2"</span> <span class="s-attribut">crossorigin</span><span class="s-balise">&gt;</span>

  <span class="s-commentaire">&lt;!-- prefetch : précharger pour la prochaine navigation --&gt;</span>
  <span class="s-balise">&lt;link</span> <span class="s-attribut">rel</span>=<span class="s-valeur">"prefetch"</span> <span class="s-attribut">href</span>=<span class="s-valeur">"page-suivante.html"</span><span class="s-balise">&gt;</span>

  <span class="s-commentaire">&lt;!-- defer/async pour les scripts --&gt;</span>
  <span class="s-balise">&lt;script</span> <span class="s-attribut">src</span>=<span class="s-valeur">"js/app.js"</span> <span class="s-attribut">defer</span><span class="s-balise">&gt;&lt;/script&gt;</span>
<span class="s-balise">&lt;/head&gt;</span></code></pre>
      </div>

    <nav class="nav-modules">
      <a href="../../modules/15-html-avance/cours.html"><span class="direction">← Précédent</span><span class="nom-module">15 — HTML Avancé</span></a>
      <a href="../../modules/17-architecture/cours.html" class="suivant"><span class="direction">Suivant →</span><span class="nom-module">17 — Architecture</span></a>
    </nav>
  </div>
  <footer class="pied-page"><p>Cours HTML Complet &nbsp;·&nbsp;
    <a href="https://developer.mozilla.org/fr/docs/Web/HTML" target="_blank" rel="noopener noreferrer">MDN Web Docs</a> &nbsp;·&nbsp;
    <a href="https://validator.w3.org/" target="_blank" rel="noopener noreferrer">Validateur W3C</a>
  </p></footer></main>
</div>
<script src="../../assets/js/navigation.js"></script>
</body></html>