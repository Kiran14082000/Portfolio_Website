import React from "react";
import { motion } from "framer-motion";
import CodeCell from "./CodeCell";
import MarkdownCell from "./MarkdownCell";
import OutputCell from "./OutputCell";
import "../NotebookCell.css";

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
      className="notebook-wrapper"
    >
      {render()}
    </motion.div>
  );
};

export default NotebookCell;
