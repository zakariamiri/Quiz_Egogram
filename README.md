# ÉgoScope — Quiz d'égogramme

Application web statique en français : 20 questions, résultat dominant, graphique de 10 facettes et synthèse en 5 familles.

## Démarrage le plus simple

Ouvrez simplement `dist/index.html` dans Chrome, Edge ou Firefox. Aucune installation, aucun compte et aucune base de données ne sont nécessaires.

## Démarrage avec un serveur local (optionnel)

Si Node.js est installé :

```powershell
npx --yes serve dist
```

Puis ouvrez l'adresse indiquée dans le terminal.

## Données et confidentialité

- Toutes les réponses restent dans la mémoire du navigateur pendant le test.
- Rien n'est envoyé sur Internet.
- Recharger ou fermer la page efface les réponses.

## Structure

- `dist/index.html` : structure de l'application
- `dist/styles.css` : design responsive et impression
- `dist/app.js` : questions, navigation, calcul et graphique
