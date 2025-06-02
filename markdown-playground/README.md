Live Markdown Playground

A client-side Markdown editor and previewer built with **React + TypeScript**, styled using **Tailwind CSS**, and powered by **IndexedDB** for persistent storage — no server required.

---

Overview

This single-page application delivers a fast, responsive, and fully offline Markdown playground

Tech Stack
Frontend: React 18+, TypeScript

Styling: Tailwind CSS + Typography plugin

Markdown: unified, remark, rehype, remark-gfm

Persistence: Dexie.js + IndexedDB

Build Tool: Vite

**Markdown Parsing**  
 Uses `unified`, `remark`, and `rehype` to convert Markdown to sanitized HTML.  
 Includes `remark-gfm` for GitHub-flavored Markdown support (e.g., tables, task lists).

**Security**  
 Sanitization is handled with `rehype-sanitize` to prevent unsafe HTML injection.

**Persistence with IndexedDB**  
 Instead of `localStorage`, data is stored using **Dexie.js** and IndexedDB.  
 The last-edited document and theme preferences persist across sessions — even after refresh or tab close.

**Styling & Themes**  
 Tailwind CSS is used for responsive layout and modern UI.  
 Includes light/dark mode toggle, with the user’s theme preference saved in IndexedDB.

**Dynamic Imports**  
 Markdown processing libraries are lazily loaded via `import()` for improved performance and smaller initial bundle size.

**Keyboard Shortcuts**

- `Ctrl + S` to save
- `Ctrl + 1`, `Ctrl + 2`, `Ctrl + 3` to switch between sample Markdown documents

**Sample Markdown Files**  
 Includes built-in samples: `intro.md`, `features.md`, and `usage.md`.

**Custom Hook**  
 IndexedDB save/load logic is abstracted in a custom React hook.

---

Setup & Run

```bash
git clone https://github.com/yourusername/markdown-playground.git
cd markdown-playground
npm install
npm run dev
```
