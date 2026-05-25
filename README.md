# Truptimayee Sahu — Portfolio

Terminal Luxury aesthetic portfolio built with React 18 + TypeScript + Vite + Framer Motion.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## 🛠 Tech Stack

- React 18 + TypeScript (strict)
- Vite
- Framer Motion
- Tailwind CSS
- Google Fonts (Space Mono, DM Sans, Fira Code)

## 📁 Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Hero, About, Skills, Projects, Experience, Contact
│   ├── ui/           # GlowCard, TechBadge, SectionHeader, ParticleCanvas
│   └── shared/       # ScrollProgress
├── hooks/            # useTypewriter, useCountUp, useScrollAnimation
├── data/             # portfolio.ts — all content here
├── styles/           # globals.css
└── types/            # TypeScript interfaces
```

## ✏️ Customise

Edit `src/data/portfolio.ts` to update:
- Name, email, links
- Skills
- Projects
- Stats

## 📦 Build

```bash
npm run build
```

Output goes to `dist/` — deploy to Vercel, Netlify, or GitHub Pages.
