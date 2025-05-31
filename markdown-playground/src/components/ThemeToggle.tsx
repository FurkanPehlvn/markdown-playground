import { useEffect, useState } from "react";
import { useIndexedDB } from "../hooks/useIndexedDB";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const { load, save } = useIndexedDB("settings");

  useEffect(() => {
    load("theme").then((theme) => {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
        setDarkMode(true);
      }
    });
  }, []);

  const toggleTheme = async () => {
    const newTheme = darkMode ? "light" : "dark";
    document.documentElement.classList.toggle("dark", !darkMode);
    setDarkMode(!darkMode);
    await save("theme", newTheme);
  };
  return (
    <div className="p-4 bg-gray-50 border-b border-gray-300 flex justify-end dark:bg-gray-800 dark:text-white">
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded bg-gray-800 text-white dark:bg-yellow-300 dark:text-black transition-all"
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
}
