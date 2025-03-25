##  Recipe Find

An website showing recipe of avl ingrediants. Built with React, Vite and deployed via Vercel.

🔗 Live Demo: [View Website](https://advancerecipefind-p22atl3yx-narutos-projects-6bc0d28d.vercel.app)

---

## 🛠 Tech Stack

Frontend: React, Vite
Styling: CSS

---

## 📂 Project Structure

```
Advance_recipe_find/  
│── public/             # Static assets  
│── src/                # Source code  
│   ├── components/     # React components  
│   ├── pages/          # Page components  
│   ├── App.jsx         # Main app file  
│   ├── main.jsx        # Entry point0  
│── dist/               # Build files (after build) 
│── index.html          # HTML entry point  
│── vite.config.js      # Vite configuration  
│── package.json        # Dependencies & scripts  
│── README.md           # Documentation
```

---

## ⚙️ Installation

1. Clone the repo:

```git clone https://github.com/Biki-dev/advance_recipe_find.git
cadvance_recipe_find
```

2. Install dependencies:
```
npm install
```

3. Start the server:
```
npm run dev
```

4. Open http://localhost:5173/

---

## 🚀 Deployment (GitHub Pages)

1. Build the project:
```
npm run build
```

2. Install gh-pages:
```
npm install gh-pages --save-dev
```

3. Add these scripts to package.json:
```
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

4. Deploy:
```
npm run deploy
```

5. Enable GitHub Pages in repo settings (Set branch to gh-pages).

---

## 🔧 Troubleshooting

If you see a blank page after deployment, update vite.config.js:
```
export default defineConfig({
  base: '/advance_recipe_find',
});
```

Rebuild & deploy:
```
npm run build && npm run deploy
```

Clear cache and refresh.

---

## 📜 License

MIT Licensed – Contributions welcome!

Made with ❤️ by Biki Kalita


---

