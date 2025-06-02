import { useEffect, useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import SampleSelector from "./components/SampleSelector";
import ThemeToggle from "./components/ThemeToggle";
import { useIndexedDB } from "./hooks/useIndexedDB";

function App() {
  const [markdown, setMarkdown] = useState<string>("");
  const [currentSample, setCurrentSample] = useState<string | null>(null);
  const { load, save } = useIndexedDB("documents");

  useEffect(() => {
    load("current").then((value) => {
      if (value) setMarkdown(value);
    });
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      save("current", markdown);
    }, 400);
    return () => clearTimeout(timeout);
  }, [markdown]);

  useEffect(() => {
    const handleKeyDown = async (e: KeyboardEvent) => {
      const isMac = navigator.platform.toUpperCase().includes("MAC");
      const isSaveCombo =
        (isMac && e.metaKey && e.key === "s") ||
        (!isMac && e.ctrlKey && e.key === "s");

      if (isSaveCombo) {
        e.preventDefault();
        save("current", markdown);
        console.log("Ctrl+S ile içerik kaydedildi.");
        return;
      }

      const isControl = isMac ? e.metaKey : e.ctrlKey;

      if (isControl && e.key === "1") {
        e.preventDefault();
        const content = (await import("./samples/intro.md?raw")).default;
        setMarkdown(content);
        setCurrentSample("intro");
        console.log("Ctrl+1 → intro.md yüklendi");
      } else if (isControl && e.key === "2") {
        e.preventDefault();
        const content = (await import("./samples/features.md?raw")).default;
        setMarkdown(content);
        setCurrentSample("features");
        console.log("Ctrl+2 features.md yüklendi");
      } else if (isControl && e.key === "3") {
        e.preventDefault();
        const content = (await import("./samples/usage.md?raw")).default;
        setMarkdown(content);
        setCurrentSample("usage");
        console.log("Ctrl+3 usage.md yüklendi");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [markdown]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <ThemeToggle />

      <SampleSelector
        setMarkdown={setMarkdown}
        currentSample={currentSample}
        setCurrentSample={setCurrentSample}
      />

      <div className="flex flex-col md:flex-row">
        <Editor markdown={markdown} setMarkdown={setMarkdown} />
        <Preview markdown={markdown} />
      </div>
    </div>
  );
}

export default App;
