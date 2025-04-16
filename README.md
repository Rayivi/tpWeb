# TP Web : Javascript et HTML5

## Description
Ce projet est une application web interactive utilisant HTML5 et JavaScript. Il permet de dessiner des formes sur un canvas en utilisant différents outils.

## Structure du projet
- **canvas.html** : Fichier HTML principal.
- **canvas.css** : Styles CSS pour le canvas.
- **controller.js** : Contient la logique de contrôle, y compris la gestion des interactions utilisateur.
- **model.js** : Implémente les classes du modèle pour représenter les formes.
- **view.js** : Gère l'affichage des formes sur le canvas.
- **interaction.js** : Définit les interactions utilisateur avec le canvas.
- **main.js** : Point d'entrée principal pour initialiser l'application.
- **bootstrap/** : Contient les fichiers Bootstrap pour le style et les composants.

## Modifications récentes
- **Ajout des classes du modèle dans `model.js`** : Implémentation des classes pour représenter les formes (Rectangle, Ligne, etc.) avec héritage.
- **Mise en place des fonctions `paint` dans `view.js`** : Ajout des méthodes pour dessiner les formes sur le canvas.
- **Ajout des fonctions d'interaction dans `controller.js`** : Implémentation des fonctions `onInteractionStart`, `onInteractionUpdate` et `onInteractionEnd` pour gérer les interactions utilisateur.
- **Intégration de Bootstrap** : Ajout de styles et composants pour améliorer l'interface utilisateur.
- **Refactorisation du code** : Amélioration de la structure et de la lisibilité du code.

## Instructions pour exécuter le projet
1. Ouvrez le fichier `canvas.html` dans un navigateur web.
2. Interagissez avec le canvas pour dessiner des formes.

## Dépendances
- **jQuery 2.1.3** : Utilisé pour simplifier les manipulations DOM.
- **Bootstrap** : Utilisé pour le style et les composants de l'interface utilisateur.

## Auteur
Projet réalisé dans le cadre du TP Web.
@Author ASSOUGNON Koffi Samuel.
@Author AYIVI Ruth.
