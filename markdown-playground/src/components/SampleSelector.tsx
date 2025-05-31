import React from "react";

interface SampleSelectorProps {
  setMarkdown: (value: string) => void;
}

const SampleSelector: React.FC<SampleSelectorProps> = ({ setMarkdown }) => {
  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;

    let content = "";
    switch (selected) {
      case "intro":
        content = (await import("../samples/intro.md?raw")).default;
        break;
      case "features":
        content = (await import("../samples/features.md?raw")).default;
        break;
      case "usage":
        content = (await import("../samples/usage.md?raw")).default;
        break;
      default:
        content = "";
    }

    setMarkdown(content);
  };

  return (
    <div className="p-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-600">
      <label
        className="mr-2 font-medium dark:text-white"
        htmlFor="sampleSelect"
      >
        Load Sample:
      </label>
      <select
        id="sampleSelect"
        onChange={handleChange}
        defaultValue=""
        className="p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white rounded"
      >
        <option value="" disabled>
          -- Select a sample --
        </option>
        <option value="intro">Intro</option>
        <option value="features">Features</option>
        <option value="usage">Usage</option>
      </select>
    </div>
  );
};

export default SampleSelector;
