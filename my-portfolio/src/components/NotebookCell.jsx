import React from "react";
import { motion } from "framer-motion";
import CodeCell from "./CodeCell";
import MarkdownCell from "./MarkdownCell";
import OutputCell from "./OutputCell";
import "../NotebookCell.css";

const NotebookCell = ({ type, content }) => {
  const render = () => {
    if (type === "code") {
      return (
        <div className="code-cell">
          <div className="prompt">In [ ]:</div>
          <pre><code>{content}</code></pre>
        </div>
      );
    }
    if (type === "output") {
      return (
        <div className="output-cell">
          <div className="prompt">Out [ ]:</div>
          <pre><code>{content}</code></pre>
        </div>
      );
    }
    if (type === "markdown") {
      return (
        <div className="markdown-cell">
          <p>{content}</p>
        </div>
      );
    }
    return null;
  };

  return <div className="notebook-wrapper">{render()}</div>;
};

export default NotebookCell;