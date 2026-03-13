<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Module 04 — Balises HTML de base — Cours HTML Complet</title>
  <meta name="description" content="Cours HTML complet — Module 04 : Balises HTML de base. Apprenez le HTML de A à Z.">
  <link rel="stylesheet" href="../../assets/css/style-cours.css">
</head>
<body>
<div class="mise-en-page">
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
        <li><a href="../../modules/04-balises-base/cours.html" class="actif">04 — Balises de base</a></li>
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
        <li><a href="../../modules/16-performance/cours.html">16 — Performance Web</a></li>
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
  <main class="contenu-principal">
    <div class="contenu-interieur">
      <nav class="fil-ariane"><a href="../../index.html">Accueil</a> <span>›</span> <span>Module 04 — Balises HTML de base</span></nav>
      <header class="module-hero">
        <div class="niveau">
          <span class="badge badge-debutant">🟢 Débutant</span>
          <span class="badge" style="color:#a0aec0;border-color:#a0aec0;background:rgba(160,174,192,0.1);">Module 04 / 18</span>
        </div>
        <h1>Balises HTML de base</h1>
        <p class="accroche">Maîtrisez les balises fondamentales du HTML : titres, paragraphes, formatage sémantique, commentaires et entités. La boîte à outils essentielle de tout développeur Web.</p>
      </header>

      <h2 id="titres">4.1 — Les titres : h1 à h6</h2>
      <p>HTML propose 6 niveaux de titres (<em>headings</em>), de <code>&lt;h1&gt;</code> (le plus important) à <code>&lt;h6&gt;</code> (le moins important). Ils créent une hiérarchie sémantique dans votre page — comme les chapitres, sections et sous-sections d'un livre.</p>
      <div class="bloc-code"><div class="code-etiquette"><span class="code-etiquette-nom">Les 6 niveaux de titres</span><span class="code-etiquette-lang">HTML</span></div>
        <pre><code><span class="s-balise">&lt;h1&gt;</span>Titre de niveau 1 — Le plus important (unique par page)<span class="s-balise">&lt;/h1&gt;</span>
<span class="s-balise">&lt;h2&gt;</span>Titre de niveau 2 — Sections principales<span class="s-balise">&lt;/h2&gt;</span>
<span class="s-balise">&lt;h3&gt;</span>Titre de niveau 3 — Sous-sections<span class="s-balise">&lt;/h3&gt;</span>
<span class="s-balise">&lt;h4&gt;</span>Titre de niveau 4<span class="s-balise">&lt;/h4&gt;</span>
<span class="s-balise">&lt;h5&gt;</span>Titre de niveau 5<span class="s-balise">&lt;/h5&gt;</span>
<span class="s-balise">&lt;h6&gt;</span>Titre de niveau 6 — Le moins important<span class="s-balise">&lt;/h6&gt;</span></code></pre>
      </div>
      <div class="encadre encadre-attention"><span class="encadre-titre">⚠️ Règles fondamentales pour les titres</span>
        <ul>
          <li><strong>Un seul &lt;h1&gt; par page</strong> : il représente le sujet principal de toute la page. Google et les lecteurs d'écran lui accordent une importance capitale.</li>
          <li><strong>Ne jamais sauter de niveaux</strong> : ne passez pas de h2 à h4 sans h3 intermédiaire. La hiérarchie doit être logique.</li>
          <li><strong>Ne pas choisir le niveau selon la taille</strong> : les titres doivent refléter la structure sémantique, pas l'apparence visuelle. La taille, c'est le rôle du CSS.</li>
        </ul>
      </div>
      <div class="grille-comparative">
        <div class="panneau panneau-mal"><div class="panneau-titre">❌ Hiérarchie incorrecte</div>
          <pre><code><span class="s-balise">&lt;h1&gt;</span>Mon blog<span class="s-balise">&lt;/h1&gt;</span>
<span class="s-balise">&lt;h3&gt;</span>Article récent<span class="s-balise">&lt;/h3&gt;</span>  <span class="s-commentaire">&lt;!-- h2 sauté ! --&gt;</span>
<span class="s-balise">&lt;h5&gt;</span>Sous-titre<span class="s-balise">&lt;/h5&gt;</span>    <span class="s-commentaire">&lt;!-- h4 sauté ! --&gt;</span></code></pre>
        </div>
        <div class="panneau panneau-bien"><div class="panneau-titre">✅ Hiérarchie correcte</div>
          <pre><code><span class="s-balise">&lt;h1&gt;</span>Mon blog<span class="s-balise">&lt;/h1&gt;</span>
  <span class="s-balise">&lt;h2&gt;</span>Article récent<span class="s-balise">&lt;/h2&gt;</span>
    <span class="s-balise">&lt;h3&gt;</span>Sous-titre<span class="s-balise">&lt;/h3&gt;</span></code></pre>
        </div>
      </div>

      <h2 id="paragraphes">4.2 — Les paragraphes &lt;p&gt;</h2>
      <p>La balise <code>&lt;p&gt;</code> crée un <strong>paragraphe de texte</strong>. Le navigateur ajoute automatiquement un espace vertical avant et après chaque paragraphe.</p>
      <div class="bloc-code"><div class="code-etiquette"><span class="code-etiquette-nom">Utilisation des paragraphes</span><span class="code-etiquette-lang">HTML</span></div>
        <pre><code><span class="s-balise">&lt;p&gt;</span>Voici le premier paragraphe. Il peut contenir autant de texte que nécessaire.
Le navigateur gère automatiquement les retours à la ligne.<span class="s-balise">&lt;/p&gt;</span>

<span class="s-balise">&lt;p&gt;</span>Voici le deuxième paragraphe. Un espace vertical sépare les deux paragraphes.<span class="s-balise">&lt;/p&gt;</span>

<span class="s-commentaire">&lt;!-- ❌ Erreur fréquente : utiliser &lt;br&gt; pour créer des "paragraphes vides" --&gt;</span>
<span class="s-balise">&lt;br&gt;&lt;br&gt;&lt;br&gt;</span> <span class="s-commentaire">&lt;!-- MAUVAISE PRATIQUE — utilisez du CSS pour l'espacement --&gt;</span></code></pre>
      </div>

      <h2 id="formatage">4.3 — Formatage de texte : sémantique vs visuel</h2>
      <p>HTML propose des balises pour mettre en valeur certains mots ou phrases. Il est essentiel de distinguer les <strong>balises sémantiques</strong> (qui donnent un sens) des <strong>balises purement visuelles</strong> (qui ne font que changer l'apparence).</p>
      <div class="tableau-wrapper"><table>
        <thead><tr><th>Balise</th><th>Rendu visuel par défaut</th><th>Signification sémantique</th><th>Utilisation correcte</th></tr></thead>
        <tbody>
          <tr><td><code>&lt;strong&gt;</code></td><td><strong>Gras</strong></td><td>Importance forte, urgence</td><td><code>&lt;strong&gt;Avertissement : danger&lt;/strong&gt;</code></td></tr>
          <tr><td><code>&lt;em&gt;</code></td><td><em>Italique</em></td><td>Emphase, accentuation</td><td><code>&lt;em&gt;vraiment&lt;/em&gt; important</code></td></tr>
          <tr><td><code>&lt;mark&gt;</code></td><td><mark>Surligné</mark></td><td>Terme pertinent, recherche</td><td>Résultats de recherche surlignés</td></tr>
          <tr><td><code>&lt;small&gt;</code></td><td>Petit texte</td><td>Mentions légales, copyright</td><td>Note de bas de page</td></tr>
          <tr><td><code>&lt;del&gt;</code></td><td><del>Barré</del></td><td>Supprimé, obsolète</td><td>Prix barré, texte édité</td></tr>
          <tr><td><code>&lt;ins&gt;</code></td><td><ins>Souligné</ins></td><td>Inséré, ajouté</td><td>Texte ajouté dans une révision</td></tr>
          <tr><td><code>&lt;sub&gt;</code></td><td>H<sub>2</sub>O</td><td>Indice (exposant bas)</td><td>Formules chimiques</td></tr>
          <tr><td><code>&lt;sup&gt;</code></td><td>m<sup>2</sup></td><td>Exposant (exposant haut)</td><td>Puissances, ordinal (1<sup>er</sup>)</td></tr>
          <tr><td><code>&lt;abbr&gt;</code></td><td>Souligné pointillé</td><td>Abréviation avec définition</td><td><code>&lt;abbr title="HyperText Markup Language"&gt;HTML&lt;/abbr&gt;</code></td></tr>
          <tr><td><code>&lt;code&gt;</code></td><td>Police monospace</td><td>Code informatique en ligne</td><td>Noms de balises, variables</td></tr>
          <tr><td><code>&lt;pre&gt;</code></td><td>Police mono + retours conservés</td><td>Texte préformaté</td><td>Blocs de code, ASCII art</td></tr>
          <tr><td><code>&lt;kbd&gt;</code></td><td>Touche de clavier</td><td>Touche à appuyer</td><td>Appuyez sur <code>&lt;kbd&gt;Ctrl&lt;/kbd&gt;</code></td></tr>
          <tr><td><code>&lt;time&gt;</code></td><td>Texte normal</td><td>Date/heure lisible par machine</td><td><code>&lt;time datetime="2024-03-15"&gt;15 mars 2024&lt;/time&gt;</code></td></tr>
          <tr><td><code>&lt;b&gt;</code></td><td><b>Gras</b></td><td>Aucune — purement visuel</td><td>À éviter — préférer &lt;strong&gt;</td></tr>
          <tr><td><code>&lt;i&gt;</code></td><td><i>Italique</i></td><td>Terme étranger, titre d'œuvre</td><td><code>&lt;i lang="la"&gt;carpe diem&lt;/i&gt;</code></td></tr>
        </tbody>
      </table></div>

      <div class="bloc-code"><div class="code-etiquette"><span class="code-etiquette-nom">Exemples de formatage sémantique</span><span class="code-etiquette-lang">HTML</span></div>
        <pre><code><span class="s-balise">&lt;p&gt;</span>
  La formule de l'eau est H<span class="s-balise">&lt;sub&gt;</span>2<span class="s-balise">&lt;/sub&gt;</span>O.
  La surface est de 50 m<span class="s-balise">&lt;sup&gt;</span>2<span class="s-balise">&lt;/sup&gt;</span>.
<span class="s-balise">&lt;/p&gt;</span>

<span class="s-balise">&lt;p&gt;</span>
  <span class="s-balise">&lt;strong&gt;</span>Attention :<span class="s-balise">&lt;/strong&gt;</span> ce produit est <span class="s-balise">&lt;em&gt;</span>extrêmement<span class="s-balise">&lt;/em&gt;</span> fragile.
<span class="s-balise">&lt;/p&gt;</span>

<span class="s-balise">&lt;p&gt;</span>
  Pour sauvegarder, appuyez sur <span class="s-balise">&lt;kbd&gt;</span>Ctrl<span class="s-balise">&lt;/kbd&gt;</span> + <span class="s-balise">&lt;kbd&gt;</span>S<span class="s-balise">&lt;/kbd&gt;</span>.
<span class="s-balise">&lt;/p&gt;</span>

<span class="s-balise">&lt;p&gt;</span>
  Publié le <span class="s-balise">&lt;time</span> <span class="s-attribut">datetime</span>=<span class="s-valeur">"2024-03-15"</span><span class="s-balise">&gt;</span>15 mars 2024<span class="s-balise">&lt;/time&gt;</span>.
<span class="s-balise">&lt;/p&gt;</span>

<span class="s-balise">&lt;p&gt;</span>
  Le <span class="s-balise">&lt;abbr</span> <span class="s-attribut">title</span>=<span class="s-valeur">"HyperText Markup Language"</span><span class="s-balise">&gt;</span>HTML<span class="s-balise">&lt;/abbr&gt;</span> est le langage du Web.
<span class="s-balise">&lt;/p&gt;</span></code></pre>
      </div>

      <h2 id="br-hr">4.4 — &lt;br&gt; et &lt;hr&gt;</h2>
      <p><code>&lt;br&gt;</code> insère un <strong>saut de ligne forcé</strong> à l'intérieur d'un bloc de texte (sans créer un nouveau paragraphe). À utiliser avec parcimonie — uniquement quand un saut de ligne fait partie du contenu (poèmes, adresses postales).</p>
      <p><code>&lt;hr&gt;</code> crée une <strong>séparation thématique</strong> horizontale entre des sections de contenu. Il a une signification sémantique : il signifie "changement de sujet".</p>
      <div class="bloc-code"><div class="code-etiquette"><span class="code-etiquette-nom">Utilisation de br et hr</span><span class="code-etiquette-lang">HTML</span></div>
        <pre><code><span class="s-commentaire">&lt;!-- br : saut de ligne dans un poème --&gt;</span>
<span class="s-balise">&lt;p&gt;</span>
  Sous le pont Mirabeau coule la Seine<span class="s-balise">&lt;br&gt;</span>
  Et nos amours<span class="s-balise">&lt;br&gt;</span>
  Faut-il qu'il m'en souvienne
<span class="s-balise">&lt;/p&gt;</span>

<span class="s-commentaire">&lt;!-- br : adresse postale --&gt;</span>
<span class="s-balise">&lt;address&gt;</span>
  Jean Dupont<span class="s-balise">&lt;br&gt;</span>
  12 rue de la Paix<span class="s-balise">&lt;br&gt;</span>
  75001 Paris, France
<span class="s-balise">&lt;/address&gt;</span>

<span class="s-commentaire">&lt;!-- hr : séparation thématique entre deux sujets --&gt;</span>
<span class="s-balise">&lt;h2&gt;</span>Actualités sportives<span class="s-balise">&lt;/h2&gt;</span>
<span class="s-balise">&lt;p&gt;</span>Les résultats du week-end...<span class="s-balise">&lt;/p&gt;</span>
<span class="s-balise">&lt;hr&gt;</span>
<span class="s-balise">&lt;h2&gt;</span>Actualités politiques<span class="s-balise">&lt;/h2&gt;</span>
<span class="s-balise">&lt;p&gt;</span>Les dernières nouvelles...<span class="s-balise">&lt;/p&gt;</span></code></pre>
      </div>

      <h2 id="commentaires">4.5 — Les commentaires HTML</h2>
      <p>Un commentaire HTML est du texte écrit dans le code source, <strong>invisible à l'écran</strong>, mais visible par quiconque consulte le code source. Il sert à documenter le code, à laisser des notes, ou à désactiver temporairement du code.</p>
      <div class="bloc-code"><div class="code-etiquette"><span class="code-etiquette-nom">Syntaxe des commentaires</span><span class="code-etiquette-lang">HTML</span></div>
        <pre><code><span class="s-commentaire">&lt;!-- Ceci est un commentaire HTML. Il n'est pas affiché à l'écran. --&gt;</span>

<span class="s-commentaire">&lt;!-- Commenter du code pour le désactiver temporairement :
&lt;p&gt;Ce paragraphe est commenté : il n'est pas affiché.&lt;/p&gt;
--&gt;</span>

<span class="s-commentaire">&lt;!-- ═══════════════════════════════════════ --&gt;
&lt;!-- SECTION : En-tête du site              --&gt;
&lt;!-- ═══════════════════════════════════════ --&gt;</span>
<span class="s-balise">&lt;header&gt;</span>...<span class="s-balise">&lt;/header&gt;</span>

<span class="s-commentaire">&lt;!-- TODO : Ajouter la navigation mobile ici --&gt;</span></code></pre>
      </div>
      <div class="encadre encadre-danger"><span class="encadre-titre">🔒 Sécurité : ne pas mettre d'informations sensibles en commentaires</span>
        <p>Les commentaires HTML sont <strong>visibles par tout le monde</strong> via le code source (Ctrl+U). Ne jamais y mettre : mots de passe, clés API, informations personnelles, logique métier confidentielle.</p>
      </div>

      <h2 id="entites">4.6 — Les entités HTML</h2>
      <p>Certains caractères ont une signification spéciale en HTML (comme <code>&lt;</code> et <code>&gt;</code>) et ne peuvent pas être tapés directement. On utilise des <strong>entités HTML</strong> — des codes de remplacement.</p>
      <div class="tableau-wrapper"><table>
        <thead><tr><th>Entité</th><th>Caractère</th><th>Description</th><th>Utilisation</th></tr></thead>
        <tbody>
          <tr><td><code>&amp;lt;</code></td><td>&lt;</td><td>Chevron ouvrant</td><td>Afficher du code HTML dans du HTML</td></tr>
          <tr><td><code>&amp;gt;</code></td><td>&gt;</td><td>Chevron fermant</td><td>Afficher du code HTML dans du HTML</td></tr>
          <tr><td><code>&amp;amp;</code></td><td>&amp;</td><td>Esperluette</td><td>Dans les URLs, les titres</td></tr>
          <tr><td><code>&amp;nbsp;</code></td><td>(espace insécable)</td><td>Espace non sécable</td><td>Empêcher un retour à la ligne entre deux mots</td></tr>
          <tr><td><code>&amp;copy;</code></td><td>©</td><td>Copyright</td><td>Mentions légales</td></tr>
          <tr><td><code>&amp;reg;</code></td><td>®</td><td>Marque déposée</td><td>Noms de marques</td></tr>
          <tr><td><code>&amp;trade;</code></td><td>™</td><td>Marque commerciale</td><td>Noms de marques</td></tr>
          <tr><td><code>&amp;euro;</code></td><td>€</td><td>Symbole euro</td><td>Prix en euros</td></tr>
          <tr><td><code>&amp;mdash;</code></td><td>—</td><td>Tiret cadratin</td><td>Ponctuation typographique</td></tr>
          <tr><td><code>&amp;laquo;</code></td><td>«</td><td>Guillemet français ouvrant</td><td>Typographie française</td></tr>
          <tr><td><code>&amp;raquo;</code></td><td>»</td><td>Guillemet français fermant</td><td>Typographie française</td></tr>
        </tbody>
      </table></div>

      <h2 id="exercices">4.7 — Exercices pratiques</h2>
      <div class="exercice"><div class="exercice-titre">✏️ Exercice 4.1 — Page de présentation</div>
        <p>Créez une page HTML avec : un h1 (votre nom), un h2 "À propos de moi", un paragraphe de présentation avec &lt;strong&gt; pour mettre en valeur votre métier, un h2 "Coordonnées", et votre adresse avec &lt;br&gt;. Utilisez &amp;copy; pour le pied de page.</p>
      </div>
      <div class="exercice"><div class="exercice-titre">✏️ Exercice 4.2 — Formatage avancé</div>
        <p>Rédigez une fiche technique fictive sur un produit chimique (eau = H₂O) qui contient : la formule chimique avec &lt;sub&gt;, une date avec &lt;time&gt;, une abréviation avec &lt;abbr&gt;, un avertissement en &lt;strong&gt;, et un prix barré avec &lt;del&gt; suivi du nouveau prix.</p>
      </div>

      <nav class="nav-modules">
        <a href="../../modules/03-structure/cours.html"><span class="direction">← Précédent</span><span class="nom-module">03 — Structure HTML</span></a>
        <a href="../../modules/05-liens-navigation/cours.html" class="suivant"><span class="direction">Module suivant →</span><span class="nom-module">05 — Liens & Navigation</span></a>
      </nav>
    </div>
    <footer class="pied-page"><p>Cours HTML Complet &nbsp;·&nbsp;
      <a href="https://developer.mozilla.org/fr/docs/Web/HTML" target="_blank" rel="noopener noreferrer">MDN Web Docs</a> &nbsp;·&nbsp;
      <a href="https://html.spec.whatwg.org/" target="_blank" rel="noopener noreferrer">HTML Living Standard</a> &nbsp;·&nbsp;
      <a href="https://validator.w3.org/" target="_blank" rel="noopener noreferrer">Validateur W3C</a>
    </p></footer>
  </main>
</div>
<script src="../../assets/js/navigation.js"></script>
</body>
</html>