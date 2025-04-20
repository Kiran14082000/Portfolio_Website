import React from "react";
import { motion } from "framer-motion";
import CodeCell from "./CodeCell";
import MarkdownCell from "./MarkdownCell";
import OutputCell from "./OutputCell";

const NotebookCell = ({ type, content }) => {
  const render = () => {
    if (type === "code") return <CodeCell code={content} />;
    if (type === "markdown") return <MarkdownCell text={content} />;
    if (type === "output") return <OutputCell output={content} />;
    return null;
  };

  return (
    <motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
  className="bg-zinc-800 p-5 rounded-md border border-zinc-500 hover:border-blue-400 transition-colors duration-200 shadow-sm"
>
  {render()}
</motion.div>

  );
};

export default NotebookCell;
