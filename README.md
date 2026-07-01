# Marta Nuñez · Portfolio Website

Personal portfolio site — static HTML/CSS/JS, deployed via GitHub Pages.

---

## 🚀 How to deploy in 5 minutes

### 1. Create a GitHub repo

Go to [github.com/new](https://github.com/new) and create a **public** repo.  
Name it `portfolio` (or `your-username.github.io` for a cleaner URL like `martanunez.github.io`).

### 2. Push this folder

```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 3. Enable GitHub Pages

Go to your repo → **Settings** → **Pages**  
- Source: **GitHub Actions**
- The workflow in `.github/workflows/deploy.yml` will run automatically on every push.

Your site will be live at:  
`https://YOUR_USERNAME.github.io/YOUR_REPO/`

---

## ✏️ How to edit content

### Option A — From your computer (recommended)
1. Open the folder in VS Code or any text editor
2. Edit the HTML files directly
3. `git add . && git commit -m "update" && git push`
4. GitHub Actions will redeploy automatically (takes ~1 min)

### Option B — From the browser (no install needed)
1. Go to your repo on GitHub
2. Press `.` (dot key) — this opens `github.dev`, a browser VS Code
3. Edit files, then go to Source Control (left sidebar) → commit & push

---

## 📁 File structure

```
portfolio/
├── index.html                    ← Main page (edit your bio, links here)
├── assets/
│   ├── css/style.css             ← All styles (colors, fonts, layout)
│   ├── js/main.js                ← Scanner animation + nav
│   └── CV_Marta_Nunez.pdf        ← ⚠️ ADD YOUR CV HERE
├── projects/
│   ├── silverway.html            ← Silverway project detail
│   ├── laundromat.html           ← Laundromat study detail
│   └── portfolio.html            ← Investment portfolio detail
├── .github/
│   └── workflows/deploy.yml      ← Auto-deploy on push (don't edit)
└── README.md                     ← This file
```

---

## 🎨 How to customize

### Change colors
Open `assets/css/style.css` and edit the `:root` block at the top:
```css
:root {
  --accent: #0891B2;   /* main color — change this to any hex */
  --ink:    #0B1120;   /* dark background / text */
  --bg:     #F4F7FA;   /* page background */
}
```

### Add a new project
1. Duplicate any file in `projects/`
2. Edit the content
3. Add a new card in `index.html` inside `.projects-grid`

### Add your CV
Drop your PDF in `assets/` and name it `CV_Marta_Nunez.pdf`  
(or update the links in the HTML to match your filename)

---

## 🧪 Testing with Postman

If you later add a backend (e.g. a contact form, or an API to serve your Silverway data), you can test it with Postman before connecting it to the frontend:

1. Install [Postman](https://www.postman.com/downloads/)
2. Create a new request
3. Point it to your local server (e.g. `http://localhost:3000/api/contact`)
4. Test the response before wiring it to the frontend

A good serverless option for adding a backend later: [Vercel Serverless Functions](https://vercel.com/docs/functions) — free, deploys on push, no server to manage.

---

## 📝 To-do (optional next steps)

- [ ] Add your real CV PDF to `assets/`
- [ ] Add a profile photo to the hero section
- [ ] Add screenshots/charts to each project page
- [ ] Connect a contact form (e.g. via [Formspree](https://formspree.io) — no backend needed)
- [ ] Add Google Analytics or [Plausible](https://plausible.io) for visitor tracking
- [ ] Buy a custom domain (e.g. `martanunez.com`) and connect it in GitHub Pages settings
