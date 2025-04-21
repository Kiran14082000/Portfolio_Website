import React from "react";

const OutputCell = ({ output }) => {
  return (
    <div className="output-cell">
      <div className="prompt">Out [ ]:</div>
      <pre><code>{output}</code></pre>
    </div>
  );
};

export default OutputCell;
