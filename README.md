# 📘 Cours HTML Complet — Du Débutant à l'Expert

> Formation professionnelle complète en HTML, rédigée comme un manuel d'ingénieur Web.  
> Niveau : **Débutant absolu → Expert**  
> Langue : **Français**

---

## 🎯 Objectifs du cours

À la fin de cette formation, vous serez capable de :

- ✅ Comprendre le fonctionnement du Web et le rôle du HTML
- ✅ Créer des pages Web structurées et valides
- ✅ Utiliser correctement toutes les balises HTML modernes
- ✅ Écrire du code HTML propre, accessible et optimisé pour le SEO
- ✅ Intégrer CSS et JavaScript dans vos pages HTML
- ✅ Construire des sites Web multi-pages professionnels
- ✅ Respecter les standards du W3C et du WHATWG

---

## 📚 Structure du cours

Le cours est organisé en **18 modules progressifs** + des **annexes** de référence.

### 🟢 Niveau Débutant (Modules 01-05)

| N° Module | Titre | Contenu Principal |
|-----------|-------|-------------------|
| 01 | [Introduction au Web et au HTML](modules/01-introduction/cours.html) | Histoire du Web, client/serveur, rôles HTML/CSS/JS |
| 02 | [Environnement de développement](modules/02-environnement/cours.html) | VS Code, extensions, navigateurs, DevTools |
| 03 | [Structure d'un document HTML](modules/03-structure/cours.html) | DOCTYPE, html, head, body, métadonnées |
| 04 | [Balises HTML de base](modules/04-balises-base/cours.html) | Titres, paragraphes, formatage, commentaires |
| 05 | [Liens et navigation](modules/05-liens-navigation/cours.html) | Balise a, liens internes/externes, ancres |

### 🔵 Niveau Intermédiaire (Modules 06-10)

| N° Module | Titre | Contenu Principal |
|-----------|-------|-------------------|
| 06 | [Images et médias](modules/06-images-medias/cours.html) | img, srcset, picture, audio, vidéo |
| 07 | [Listes HTML](modules/07-listes/cours.html) | ul, ol, dl, listes imbriquées |
| 08 | [Tableaux HTML](modules/08-tableaux/cours.html) | thead, tbody, tfoot, colspan, rowspan |
| 09 | [Formulaires HTML](modules/09-formulaires/cours.html) | form, input, textarea, select, validation |
| 10 | [HTML sémantique](modules/10-semantique/cours.html) | header, nav, main, section, article, footer |

### 🟠 Niveau Avancé (Modules 11-15)

| N° Module | Titre | Contenu Principal |
|-----------|-------|-------------------|
| 11 | [Accessibilité Web](modules/11-accessibilite/cours.html) | ARIA, WCAG, bonnes pratiques |
| 12 | [HTML et SEO](modules/12-seo/cours.html) | Meta tags, Open Graph, données structurées |
| 13 | [Intégration CSS](modules/13-css-integration/cours.html) | Feuilles de style, sélecteurs, organisation |
| 14 | [Intégration JavaScript](modules/14-js-integration/cours.html) | Script, DOM, événements |
| 15 | [HTML avancé](modules/15-html-avance/cours.html) | Data attributes, Web Components, microdata |

### 🔴 Niveau Expert (Modules 16-18)

| N° Module | Titre | Contenu Principal |
|-----------|-------|-------------------|
| 16 | [Performance Web](modules/16-performance/cours.html) | Lazy loading, resource hints, Core Web Vitals |
| 17 | [Architecture d'un site Web](modules/17-architecture/cours.html) | Organisation, conventions, templates |
| 18 | [Projets pratiques complets](modules/18-projets/cours.html) | 5 projets réels de A à Z |

### 📎 Annexes

| Fichier | Contenu |
|---------|---------|
| [Référence complète des balises](annexes/reference-balises.html) | Toutes les balises HTML5 avec description |
| [Mémo rapide](annexes/memo-rapide.html) | Aide-mémoire visuel pour les balises courantes |
| [Erreurs fréquentes](annexes/erreurs-frequentes.html) | Les 30 erreurs les plus courantes et leurs corrections |
| [Bonnes pratiques](annexes/bonnes-pratiques.html) | Checklist professionnelle complète |
| [Glossaire](annexes/glossaire.html) | Définitions de tous les termes techniques |

---

## 🚀 Comment utiliser ce cours

### Option 1 — Ouvrir directement dans le navigateur

1. Téléchargez ou clonez ce dépôt sur votre ordinateur
2. Ouvrez le fichier `index.html` à la racine dans votre navigateur
3. Naviguez entre les modules via le menu de navigation

```bash
# Cloner le dépôt (si Git est installé)
git clone https://github.com/Mamby-DOUMBIA/cours-html-complet.git

# Entrer dans le dossier
cd cours-html-complet

# Ouvrir la page d'accueil (Windows)
start index.html

# Ouvrir la page d'accueil (macOS)
open index.html

# Ouvrir la page d'accueil (Linux)
xdg-open index.html
```

### Option 2 — Avec VS Code et Live Server

1. Ouvrez le dossier dans VS Code
2. Installez l'extension **Live Server**
3. Faites un clic droit sur `index.html` → **Open with Live Server**
4. Le cours s'ouvre dans votre navigateur avec rechargement automatique

### Option 3 — Suivre module par module

Chaque module est **indépendant** et peut être ouvert directement :

```
modules/01-introduction/cours.html
modules/02-environnement/cours.html
modules/03-structure/cours.html
modules/04-balises-base/cours.html
modules/05-liens-navigation/cours.html
modules/06-images-medias/cours.html
modules/07-listes/cours.html
modules/08-tableaux/cours.html
modules/09-formulaires/cours.html
modules/10-semantique/cours.html
modules/11-accessibilite/cours.html
modules/12-seo/cours.html
modules/13-css-integration/cours.html
modules/14-js-integration/cours.html
modules/15-html-avance/cours.html
modules/16-performance/cours.html
modules/17-architecture/cours.html
modules/18-projets/cours.html
```

---

## 📁 Structure des fichiers

```
cours-html-complet/
│
├── index.html                          ← Page d'accueil du cours
├── README.md                           ← Ce fichier
├── .gitignore                          ← Fichiers ignorés par Git
│
├── assets/
│   ├── css/
│   │   └── style-cours.css             ← Feuille de style globale du cours
│   └── js/
│       └── navigation.js               ← Script de navigation
│
├── modules/
│   ├── 01-introduction/
│   │   ├── cours.html                  ← Cours complet du module
│   │   └── exercices/
│   │       └── exercice-01.html        ← Exercices pratiques
│   ├── 02-environnement/
│   │   └── cours.html
│   ├── 03-structure/
│   │   ├── cours.html
│   │   └── exemples/
│   │       ├── structure-minimale.html
│   │       └── structure-complete.html
│   ├── 04-balises-base/
│   │   ├── cours.html
│   │   └── exemples/
│   ├── 05-liens-navigation/
│   │   ├── cours.html
│   │   └── exemples/
│   ├── 06-images-medias/
│   │   ├── cours.html
│   │   └── exemples/
│   ├── 07-listes/
│   │   ├── cours.html
│   │   └── exemples/
│   ├── 08-tableaux/
│   │   ├── cours.html
│   │   └── exemples/
│   ├── 09-formulaires/
│   │   ├── cours.html
│   │   └── exemples/
│   ├── 10-semantique/
│   │   ├── cours.html
│   │   └── exemples/
│   ├── 11-accessibilite/
│   │   └── cours.html
│   ├── 12-seo/
│   │   └── cours.html
│   ├── 13-css-integration/
│   │   ├── cours.html
│   │   └── exemples/
│   ├── 14-js-integration/
│   │   ├── cours.html
│   │   └── exemples/
│   ├── 15-html-avance/
│   │   └── cours.html
│   ├── 16-performance/
│   │   └── cours.html
│   ├── 17-architecture/
│   │   └── cours.html
│   └── 18-projets/
│       ├── README.md
│       ├── projet-01-page-personnelle/
│       ├── projet-02-site-multipage/
│       ├── projet-03-blog/
│       ├── projet-04-ecommerce/
│       └── projet-05-formulaire/
│
└── annexes/
    ├── reference-balises.html
    ├── memo-rapide.html
    ├── erreurs-frequentes.html
    ├── bonnes-pratiques.html
    └── glossaire.html
```

---

## 🔗 Références officielles

Ce cours s'appuie sur les standards officiels du Web :

- 📖 **MDN Web Docs (Mozilla)** — La référence la plus complète en français :  
  👉 https://developer.mozilla.org/fr/docs/Web/HTML

- 📖 **HTML Living Standard (WHATWG)** — La spécification technique officielle :  
  👉 https://html.spec.whatwg.org/

- 📖 **W3C HTML 5.2** — La recommandation du W3C :  
  👉 https://www.w3.org/TR/html52/

- 📖 **Validateur HTML W3C** — Pour vérifier que votre HTML est valide :  
  👉 https://validator.w3.org/

- 📖 **Can I Use** — Compatibilité des fonctionnalités entre navigateurs :  
  👉 https://caniuse.com/

- 📖 **Web Accessibility Initiative (WAI)** — Guide d'accessibilité :  
  👉 https://www.w3.org/WAI/

---

## 📝 Comment ce cours est organisé

Chaque module suit une **structure pédagogique identique** :

1. **Explication simple** — La notion expliquée avec des mots du quotidien
2. **Définition technique** — La définition précise et complète
3. **Syntaxe** — Comment écrire la balise/attribut
4. **Exemples simples** — Cas d'utilisation élémentaires
5. **Exemples avancés** — Cas d'utilisation professionnels
6. **Analyse ligne par ligne** — Décryptage détaillé du code
7. **Cas d'utilisation concrets** — Situations réelles
8. **Erreurs fréquentes** — Pièges à éviter
9. **Bonnes pratiques** — Les standards professionnels
10. **Performance et accessibilité** — Optimisation et inclusion
11. **Comparaison historique** — Évolution depuis les anciennes versions
12. **Exercices pratiques** — Mise en pratique immédiate
13. **Corrigés détaillés** — Solutions expliquées

---

## 🧑‍🎓 Prérequis

**Aucun prérequis technique** n'est nécessaire. Ce cours est conçu pour :

- Les personnes qui n'ont jamais touché au code
- Les étudiants en informatique qui débutent le Web
- Les professionnels qui souhaitent apprendre le développement Web
- Toute personne curieuse de comprendre comment fonctionnent les sites Web

Il vous suffit d'avoir :
- Un ordinateur (Windows, macOS ou Linux)
- Un navigateur Web (Chrome, Firefox, Safari ou Edge)
- La motivation d'apprendre ! 💪

---

## 📊 Progression suggérée

| Semaine | Modules à étudier | Temps estimé |
|---------|-------------------|--------------|
| Semaine 1 | Modules 01, 02, 03 | 6–8 heures |
| Semaine 2 | Modules 04, 05, 06 | 7–9 heures |
| Semaine 3 | Modules 07, 08, 09 | 7–9 heures |
| Semaine 4 | Modules 10, 11, 12 | 6–8 heures |
| Semaine 5 | Modules 13, 14, 15 | 7–9 heures |
| Semaine 6 | Modules 16, 17, 18 | 8–10 heures |

**Durée totale estimée : 40–50 heures** (formation complète)

---

## 📄 Licence

Ce cours est fourni à des fins éducatives.  
Vous êtes libre de l'utiliser, le modifier et le partager.

---

*Cours rédigé avec passion par Mamby DOUMBIA pour rendre l'apprentissage du HTML accessible à tous* 🚀
