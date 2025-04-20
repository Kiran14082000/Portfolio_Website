import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeCell = ({ code }) => (
  <>
    <div className="flex items-center justify-between mb-2 text-green-400">
      <span>In [ ]:</span>
      <button className="bg-zinc-700 px-2 py-1 rounded text-xs hover:bg-green-600">▶ Run</button>
    </div>
    <SyntaxHighlighter language="python" style={vscDarkPlus} customStyle={{ background: 'transparent' }}>
      {code}
    </SyntaxHighlighter>
  </>
);

export default CodeCell;
