# Cartographie du projet

## Identite

- Nom du projet : `Cours HTML Complet`
- Nature : site statique pedagogique en HTML/CSS/JavaScript natif
- Point d'entree principal : `index.html`
- Documentation existante : `README.md`

## Vue d'ensemble

Le projet est une formation HTML en francais structuree autour d'une page d'accueil, de 18 modules de cours, de 5 annexes et d'un module final consacre a des projets pratiques.

Le socle technique est minimal :

- `HTML` pour toutes les pages de contenu
- `assets/css/style-cours.css` pour le style global
- `assets/js/navigation.js` pour le surlignage du lien actif, le bouton retour en haut si present et quelques comportements d'interface

## Inventaire reel du depot

Comptage actuel des fichiers :

- `24` fichiers `.html`
- `1` fichier `.css`
- `1` fichier `.js`
- `2` fichiers `.md` (`README.md` et cette cartographie)
- `1` fichier `.gitignore`
- `7` fichiers `.gitkeep` pour conserver les dossiers vides utiles

Total des fichiers suivables detectes : `35`.

## Arborescence reelle

```text
Cours Complet HTML/
├── .gitignore
├── CARTOGRAPHIE_PROJET.md
├── README.md
├── index.html
├── annexes/
│   ├── bonnes-pratiques.html
│   ├── erreurs-frequentes.html
│   ├── glossaire.html
│   ├── memo-rapide.html
│   └── reference-balises.html
├── assets/
│   ├── css/
│   │   └── style-cours.css
│   ├── images/
│   │   └── .gitkeep
│   └── js/
│       └── navigation.js
└── modules/
    ├── 01-introduction/
    │   └── cours.html
    ├── 02-environnement/
    │   └── cours.html
    ├── 03-structure/
    │   └── cours.html
    ├── 04-balises-base/
    │   └── cours.html
    ├── 05-liens-navigation/
    │   └── cours.html
    ├── 06-images-medias/
    │   └── cours.html
    ├── 07-listes/
    │   └── cours.html
    ├── 08-tableaux/
    │   └── cours.html
    ├── 09-formulaires/
    │   └── cours.html
    ├── 10-semantique/
    │   └── cours.html
    ├── 11-accessibilite/
    │   └── cours.html
    ├── 12-seo/
    │   └── cours.html
    ├── 13-css-integration/
    │   └── cours.html
    ├── 14-js-integration/
    │   └── cours.html
    ├── 15-html-avance/
    │   └── cours.html
    ├── 16-performance/
    │   └── cours.html
    ├── 17-architecture/
    │   └── cours.html
    └── 18-projets/
        ├── cours.html
        ├── projet-01-page-personnelle/
        │   └── .gitkeep
        ├── projet-02-site-multipage/
        │   ├── css/
        │   │   └── .gitkeep
        │   └── images/
        │       └── .gitkeep
        ├── projet-03-blog/
        │   └── css/
        │       └── .gitkeep
        ├── projet-04-ecommerce/
        │   └── css/
        │       └── .gitkeep
        └── projet-05-formulaire/
            └── css/
                └── .gitkeep
```

## Organisation fonctionnelle

### 1. Racine

- `index.html` sert de hub principal du cours.
- `README.md` decrit le projet, ses objectifs et une structure cible plus ambitieuse.
- `.gitignore` couvre des artefacts systeme, editeur, Node et archives.

### 2. Dossier `assets/`

- `assets/css/style-cours.css` centralise toute la charte visuelle.
- `assets/js/navigation.js` gere la navigation active dans la sidebar et quelques micro-comportements.
- `assets/images/` est preserve dans git via un `.gitkeep`.

### 3. Dossier `modules/`

- 18 sous-dossiers numerotes structurent la progression pedagogique.
- Les modules `01` a `17` contiennent chacun un unique `cours.html`.
- Le module `18-projets` contient :
  - un `cours.html` de synthese pedagogique
  - cinq dossiers de projets servant de squelette de travail
  - des `.gitkeep` pour conserver les repertoires de base encore vides

### 4. Dossier `annexes/`

- Contient 5 pages de reference complementaires.
- Ces pages prolongent le cours avec aide-memoire, glossaire, bonnes pratiques et reference de balises.

## Flux de navigation

- `index.html` reference tous les modules et annexes.
- Chaque page de module reutilise la feuille de style globale et le script `navigation.js`.
- La navigation est basee sur des liens relatifs entre pages statiques.
- Le projet ne depend d'aucun build, package manager ou framework.

## Ecarts entre documentation et etat reel

Le `README.md` annonce une structure plus complete que celle presente dans le dossier actuel.

Ecarts constates :

- des dossiers `exemples/` et `exercices/` sont decrits mais absents dans la plupart des modules
- `modules/18-projets/README.md` est mentionne dans le `README`, mais absent du disque
- plusieurs dossiers de projets pratiques existent mais ne contiennent encore que des placeholders `.gitkeep`
- `assets/images/` est cree sans contenu metier, uniquement preserve par `.gitkeep`

Conclusion : la structure du projet est deja exploitable pour consultation du cours, mais une partie du contenu annonce reste a produire.

## Mode d'execution

Le projet peut etre utilise sans installation :

1. ouvrir `index.html` dans un navigateur
2. naviguer vers les modules via la sidebar et les liens relatifs

## Recommandations techniques

- conserver `index.html` comme point d'entree unique
- aligner le `README.md` sur la structure reelle, ou completer les dossiers manquants annonces
- ajouter un fichier de contenu minimal dans chaque projet pratique vide pour eviter l'impression de depot incomplet
- prevoir une convention de nommage identique pour tous futurs exercices, exemples et assets
