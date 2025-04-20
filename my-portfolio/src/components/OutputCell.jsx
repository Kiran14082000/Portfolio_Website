import React from "react";

const OutputCell = ({ output }) => (
  <div>
    <div className="text-blue-400 mb-2">Out [ ]:</div>
    <div className="bg-zinc-700 p-3 rounded text-green-300">{output}</div>
  </div>
);

export default OutputCell;
