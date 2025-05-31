# 📘 Live Markdown Playground

A lightweight, single-page web application that lets you write Markdown and see a live preview in HTML. Built with React + TypeScript, styled with Tailwind CSS, and powered entirely in the browser via IndexedDB.

---

## 🚀 Features

- 🧠 **Real-time Markdown Preview**

  - Instant conversion of Markdown to sanitized HTML on every keystroke.
  - Optimized using `remark`, `rehype`, and `unified`.

- ⚡ **Dynamic Parser Loading**

  - Markdown parser libraries are lazily loaded using `import()`.
  - Improves initial bundle size and page load performance.

- 🗂️ **Sample Documents**

  - Includes `intro.md`, `features.md`, and `usage.md`.
  - Users can load samples via a dropdown selector.

- 🌗 **Theme Toggle**

  - Light/Dark mode toggle using Tailwind's `dark:` variants.
  - User preference is persisted with IndexedDB.

- 💾 **Document Persistence**

  - Last-edited Markdown is saved in IndexedDB (`documents` table).
  - Automatically loaded on page refresh.

- 📱 **Responsive Layout**

  - Editor and preview panes side-by-side on desktop.
  - Stacked vertically on mobile screens.

---

## 🧰 Tech Stack

- **Frontend Framework:** React 18+ with TypeScript
- **Styling:** Tailwind CSS + Typography Plugin
- **Markdown Processing:** unified, remark-parse, remark-rehype, rehype-sanitize
- **Persistence:** Dexie.js (IndexedDB)
- **Build Tool:** Vite

---

## 🗂️ Folder Structure

```
src/
├── components/
│   ├── Editor.tsx
│   ├── Preview.tsx
│   ├── ThemeToggle.tsx
│   └── SampleSelector.tsx
├── hooks/
│   └── useIndexedDB.ts
├── samples/
│   ├── intro.md
│   ├── features.md
│   └── usage.md
├── db/
│   └── db.ts
├── App.tsx
├── main.tsx
└── index.css
```

---

## 📦 Setup & Run

```bash
git clone https://github.com/FurkanPehlvn/markdown-playground.git
cd markdown-playground
npm install
npm run dev
```

---

## 📝 Notes & Trade-offs

- Used `rehype-sanitize` to prevent unsafe HTML injection.
- Used `setTimeout` debouncing for Markdown processing and persistence.
- Kept UI minimal to focus on performance, responsiveness, and state logic.

---

## 🎁 Potential Improvements

- ⌨️ Add keyboard shortcuts like Ctrl+S (save), Ctrl+1/2/3 (sample switch)
- 🔳 Fullscreen toggle for editor/preview
- 📥 Download rendered HTML as a file
- 🧩 Support tables, footnotes, or task lists with Markdown extensions
- ♿ Accessibility audit with Lighthouse

---

## 📤 Submission

- ✅ No localStorage or backend used
- ✅ Everything runs in browser
- ✅ IndexedDB via Dexie.js used for settings and content
- ✅ Markdown parser loaded dynamically

> Proudly crafted as a technical case study. ✨
