# Vortap – Profils dynamiques personnalisables

## 🎯 Fonctionnement
Chaque plaque NFC redirige vers `vortap.io/{slug}` et charge dynamiquement les infos depuis `data.json`.

## 📦 Champs possibles par fiche
Tous les champs sont optionnels sauf `slug` et `nom`.

- `slug` (obligatoire) : identifiant URL unique
- `nom` : nom à afficher
- `logo` : image du client
- `banniere` : image de couverture
- `couleur` : couleur des boutons
- `intro` : texte court d’introduction
- `description` : texte long
- `telephone` : numéro à appeler
- `maps` : lien Google Maps
- `rdv` : lien Planity, Calendly, etc.
- `liens[]` : liste de réseaux sociaux (type + url)
- `statut` : "actif" ou "inactif"

## 🚀 Déploiement sur Vercel
1. Crée un repo GitHub et ajoute `index.html`, `data.json`, `README.md`
2. Va sur vercel.com > New Project > Import GitHub Repo
3. Clique sur Deploy

## ✅ Exemple de fiche

```json
{
  "slug": "coiffure-julie",
  "nom": "Julie Coiffure",
  "logo": "https://...",
  "banniere": "https://...",
  "couleur": "#FF0077",
  "intro": "Bienvenue !",
  "description": "Salon haut de gamme au centre-ville.",
  "telephone": "+33600000000",
  "maps": "https://g.page/julie",
  "rdv": "https://planity.com/julie",
  "liens": [
    { "type": "Instagram", "url": "https://..." },
    { "type": "TikTok", "url": "https://..." }
  ],
  "statut": "actif"
}
```

—
Vortap.io