import React from "react";
import './notebookcell.css';

const NotebookCell = ({ type = 'markdown', content }) => {
    if (type === 'markdown') {
        return <div className="cell markdown-cell">{content}</div>;
    } else if (type === 'code') {
        return (
            <div className="cell code-cell">
                <pre><code>{content}</code></pre>
            </div>
        );
    } else if (type === 'output') {
        return <div className="cell output-cell">{content}</div>;
    }
    return null;
};

export default NotebookCell;
