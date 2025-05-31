import React, { useEffect, useState } from "react";

interface PreviewProps {
  markdown: string;
}

const Preview: React.FC<PreviewProps> = ({ markdown }) => {
  const [html, setHtml] = useState<string>("Loading preview...");

  useEffect(() => {
    const parseMarkdown = async () => {
      const { unified } = await import("unified");
      const remarkParse = (await import("remark-parse")).default;
      const remarkBreaks = (await import("remark-breaks")).default;
      const remarkRehype = (await import("remark-rehype")).default;
      const rehypeSanitize = (await import("rehype-sanitize")).default;
      const rehypeStringify = (await import("rehype-stringify")).default;

      const file = await unified()
        .use(remarkParse)
        .use(remarkBreaks)
        .use(remarkRehype)
        .use(rehypeSanitize)
        .use(rehypeStringify)
        .process(markdown);

      setHtml(String(file));
    };

    const timeout = setTimeout(() => {
      parseMarkdown();
    }, 250); // debounce

    return () => clearTimeout(timeout);
  }, [markdown]);

  return (
    <div className="w-full md:w-1/2 p-4 bg-gray-100 dark:bg-gray-800 dark:text-white border-l border-gray-300 dark:border-gray-600">
      <h2 className="text-lg font-semibold mb-2">Preview</h2>

      <div
        className="prose max-w-none bg-white dark:bg-gray-900 text-black dark:text-white p-4 rounded overflow-y-auto h-[80vh] border border-gray-300 dark:border-gray-600"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};

export default Preview;
