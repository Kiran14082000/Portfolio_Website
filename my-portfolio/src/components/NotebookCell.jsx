// src/components/NotebookCell.jsx
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';

const NotebookCell = ({ type, content, cellIndex }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <motion.div
  className="notebook-cell"
  layout
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4, ease: 'easeOut' }}
  whileHover={{
    scale: 1.015,
    borderColor: "orange",
    boxShadow: "0 8px 18px rgba(0, 123, 255, 0.15)",
  }}
>
      {/* Cell header with label and button */}
      <div className="cell-toolbar">
        <span className="cell-label">
          {type === 'code' && `In [${cellIndex}]:`}
          {type === 'output' && `Out [${cellIndex}]:`}
        </span>
        <div className="cell-buttons">
          <button onClick={() => setCollapsed(!collapsed)}>🔽</button>
        </div>
      </div>

      {!collapsed && (
        <div className="cell-content">
          {type === 'markdown' && (
            <div className="markdown-cell">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          )}
          {type === 'code' && (
            <pre className="code-cell">
              <code>{content}</code>
            </pre>
          )}
          {type === 'output' && (
            <div className="output-cell">
              <pre>{content}</pre>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default NotebookCell;
