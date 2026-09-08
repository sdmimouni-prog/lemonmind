# Lemon Mind Digital

Première base Astro pour le site Lemon Mind Digital, construite à partir de la référence technique Richmedia.

## Stack

- Astro 7
- MDX
- Tailwind v4
- Sitemap
- Contenu statique, prêt pour SEO et déploiement

## Commandes

```bash
npm install
npm run dev
npm run check
npm run build
npm run preview
```

Le serveur local démarre sur `http://127.0.0.1:4323`.

## Variables d’environnement

`NEWSLETTER_WEBHOOK_URL` connecte le formulaire newsletter Insights à un webhook serveur. Sans cette variable, le formulaire valide les champs puis renvoie une erreur explicite au lieu de simuler une inscription.

## Assets

`public/assets/lemon-mind-logo.png` est un recadrage provisoire issu de la maquette. Remplacer ce fichier par le logo officiel SVG ou PNG transparent dès que disponible.
