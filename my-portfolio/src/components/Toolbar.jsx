import React from 'react';
import '../styles.css';

const Toolbar = () => {
  return (
    <div className="toolbar">
      <button>▶ Run</button>
      <button>➕ Add Cell</button>
      <button>💾 Save</button>
      <button>📤 Share</button>
    </div>
  );
};

export default Toolbar;
