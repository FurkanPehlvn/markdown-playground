import React from "react";

interface EditorProps {
  markdown: string;
  setMarkdown: (value: string) => void;
}

const Editor: React.FC<EditorProps> = ({ markdown, setMarkdown }) => {
  return (
    <div className="w-full md:w-1/2 p-4 bg-gray-100 dark:bg-gray-800 dark:text-white border-r border-gray-300 dark:border-gray-600">
      <h2 className="text-lg font-semibold mb-2">Markdown Editor</h2>
      <textarea
        className="w-full h-[80vh] p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-sm text-black dark:text-white rounded resize-none shadow-sm"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Start typing your markdown"
      />
    </div>
  );
};

export default Editor;
