import React from 'react';
import '../styles.css';

const NotebookCell = ({ type, content }) => {
  return (
    <div className={`notebook-cell ${type}`}>
      {type === 'code' && (
        <div className="code-cell">
          <pre><code>{content}</code></pre>
        </div>
      )}
      {type === 'markdown' && (
        <div className="markdown-cell">
          <p>{content}</p>
        </div>
      )}
      {type === 'output' && (
        <div className="output-cell">
          <pre>{content}</pre>
        </div>
      )}
    </div>
  );
};

export default NotebookCell;
