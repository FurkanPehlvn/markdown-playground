/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      typography: {
        // dark modda başlıklar ve metin rengi
        dark: {
          css: {
            color: "#fff",
            a: { color: "#93c5fd" },
            strong: { color: "#fff" },
            h1: { color: "#fff" },
            h2: { color: "#fff" },
            h3: { color: "#fff" },
            h4: { color: "#fff" },
            code: { color: "#facc15" },
            blockquote: { color: "#ccc" },
          },
        },
      },
    },
  },
  plugins: [typography],
};
