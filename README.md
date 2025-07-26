# Quizzera.PK

**Quizzera.PK** is a modern, multilingual EdTech platform built for global competitive exam preparation.

## 🌐 Hosted on
- **Cloudflare Pages** (static site)
- **Cloudflare Workers** (edge logic)
- **Cloudflare KV** (backend data store)

---

## 📦 Features

- 💡 1M+ MCQs in QuizBank
- 🛡️ Role-based access (admin, user, author)
- 🔒 Authentication via **Cloudflare Access (Zero Trust)**
- ⚡ Fast & edge-native (no backend servers)
- 🎨 TailwindCSS for sleek, modern UI
- 🌍 Multilingual support planned
- 🧠 Gemini AI-ready architecture (future integration)

---

## 🗂️ Folder Structure

```
quizzera-pk/
├── public/                   # Static pages (HTML)
│   └── blog/                 # Blog articles
├── workers/                 # Cloudflare Worker logic
├── wrangler.jsonc           # Cloudflare config
├── tailwind.config.js       # Tailwind CSS setup
├── postcss.config.js        # PostCSS config for Tailwind
└── README.md                # You're reading it!
```

---

## 🚀 Getting Started

### 1. Install Wrangler
```bash
npm install -g wrangler
```

### 2. Set Up Project
Replace the KV namespace IDs in `wrangler.jsonc` with your own.

### 3. Publish Worker
```bash
wrangler publish
```

### 4. Deploy Static Pages
Push your `/public` folder to Cloudflare Pages via GitHub integration.

---

## 📧 Support

For any issues, contact: **support@quizzera.pk**

Made with 💙 by **Shahid Hussain Soomro** and team.
