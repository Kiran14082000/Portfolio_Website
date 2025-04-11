import React from 'react';
import '../styles.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Files</h3>
      <ul>
        <li>main.ipynb</li>
        <li>eda.py</li>
        <li>README.md</li>
      </ul>
    </div>
  );
};

export default Sidebar;
