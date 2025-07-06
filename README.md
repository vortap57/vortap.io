
# Vortap.io – Plateforme de liens NFC premium

Vortap.io est une solution ultra-personnalisable permettant à chaque professionnel de partager ses réseaux sociaux, prise de rendez-vous, avis clients, site web, et bien plus… en un simple geste NFC 📲

---

## 🔗 Fonctionnalités clés

- Animation de chargement avec branding `VORTAP.IO`
- Fiche personnalisée pour chaque client (logo, description, liens…)
- Intégration dynamique via `data.json`
- Liens vers :
  - Instagram
  - TikTok
  - Planity
  - WhatsApp
  - Google Maps
  - Site web
  - Téléphone / Email
- Design responsive et professionnel
- Badge "Vérifié Vortap"
- Couleur personnalisée par client

---

## 📁 Structure du projet

```
/
├── index.html          # Page principale avec chargement
├── style.css           # Design responsive
├── script.js           # Chargement dynamique des données
├── data.json           # Données spécifiques à chaque client
└── logo.png            # Logo du client
```

---

## 🚀 Déploiement

1. Fork ou clone ce dépôt
2. Remplace le contenu de `data.json` pour chaque client
3. Héberge-le sur [Vercel](https://vercel.com) ou autre plateforme
4. Partage le lien (ex: `https://vortap.vercel.app/julie-coiffure`)

---

## 🧩 Exemple de `data.json`

```json
{
  "nom": "Julie Coiffure",
  "logo": "logo.png",
  "intro": "Bienvenue chez Julie !",
  "liens": [
    { "type": "Instagram", "url": "https://instagram.com/julie" },
    { "type": "Planity", "url": "https://planity.com/julie" },
    { "type": "TikTok", "url": "https://tiktok.com/@julie" }
  ]
}
```

---

## 🛡️ Vortap.io  
Développé pour une nouvelle génération de cartes NFC intelligentes.  
💡 [vortap.io](https://vortap.io)
