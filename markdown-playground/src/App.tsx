import { useEffect, useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import SampleSelector from "./components/SampleSelector";
import ThemeToggle from "./components/ThemeToggle";
import { useIndexedDB } from "./hooks/useIndexedDB";

function App() {
  const [markdown, setMarkdown] = useState<string>("");
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

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <ThemeToggle />

      <SampleSelector setMarkdown={setMarkdown} />

      <div className="flex flex-col md:flex-row">
        <Editor markdown={markdown} setMarkdown={setMarkdown} />
        <Preview markdown={markdown} />
      </div>
    </div>
  );
}

export default App;
