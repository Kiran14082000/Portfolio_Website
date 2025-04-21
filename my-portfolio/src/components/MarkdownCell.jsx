import React from "react";

const MarkdownCell = ({ text }) => {
  return (
    <div className="markdown-cell">
      <p>{text}</p>
    </div>
  );
};

export default MarkdownCell;
