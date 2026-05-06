# 🌸 Portfolio — Christiane Randrianjafy
**Assistante Virtuelle** — Portfolio React + Vite

---

## 📁 Ajouter vos photos

Placez vos 3 photos dans le dossier `public/` :
- `public/chris1.jpg` → Photo Hero (fond rose)
- `public/chris2.jpg` → Photo "Travailler ensemble"
- `public/chris3.jpg` → Photo "Pourquoi moi" & Contact

---

## 🚀 Démarrer en local

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev

# 3. Ouvrir http://localhost:5173
```

---

## 📤 Déployer sur GitHub

### Étape 1 — Créer un dépôt sur github.com
1. Allez sur **github.com** → cliquez **"New repository"**
2. Nom : `christiane-portfolio`
3. Laissez **Public** → cliquez **"Create repository"**

### Étape 2 — Pusher le code (terminal dans ce dossier)

```bash
git init
git add .
git commit -m "Initial commit — Portfolio Christiane"
git branch -M main
git remote add origin https://github.com/VOTRE_USERNAME/christiane-portfolio.git
git push -u origin main
```
> Remplacez `VOTRE_USERNAME` par votre nom GitHub

---

## 🌐 Déployer sur Netlify

### Méthode 1 — Via GitHub (recommandée)
1. Allez sur **app.netlify.com**
2. Cliquez **"Add new site"** → **"Import an existing project"**
3. Choisissez **"Deploy with GitHub"**
4. Sélectionnez le dépôt `christiane-portfolio`
5. Vérifiez les paramètres :
   - **Build command** : `npm install && npm run build`
   - **Publish directory** : `dist`
6. Cliquez **"Deploy site"** ✅

### Méthode 2 — Drag & Drop (le plus simple)
1. Lancez `npm run build` en local
2. Un dossier `dist/` est créé
3. Allez sur **app.netlify.com** → **"Add new site"** → **"Deploy manually"**
4. Glissez-déposez le dossier `dist/` → Terminé ! ✅

---

## 🔄 Mettre à jour le site

À chaque modification :
```bash
git add .
git commit -m "Mise à jour"
git push
```
Netlify redéploie automatiquement ✨

---

## 🎨 Personnaliser

| Élément | Fichier | Ligne |
|---------|---------|-------|
| Nom & titre | `src/App.jsx` | Composant `Hero` |
| Services | `src/App.jsx` | Tableau `SERVICES` |
| Tarif | `src/App.jsx` | Composant `Offre` |
| Email/Tel | `src/App.jsx` | Composant `Contact` |
| Couleurs | `src/App.jsx` | Variables CSS inline |

---

## 📦 Stack technique
- **React 18** + **Vite 5**
- **Framer Motion** — animations
- **Google Fonts** — Playfair Display + Cormorant Garamond
- Déploiement : **Netlify** (gratuit)
