// src/App.jsx
import React from 'react';
import Sidebar from './components/Sidebar';
import Toolbar from './components/Toolbar';
import Notebook from './Notebook';
import MenuBar from './components/MenuBar';
import './styles.css';

function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-panel">
        <MenuBar />
        <Toolbar />
        <Notebook />
      </div>
    </div>
  );
}

export default App;
