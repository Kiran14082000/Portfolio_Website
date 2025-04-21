import React from "react";

const CodeCell = ({ code }) => {
  return (
    <div className="code-cell">
      <div className="prompt">In [ ]:</div>
      <pre><code>{code}</code></pre>
    </div>
  );
};

export default CodeCell;
