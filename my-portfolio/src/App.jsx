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
        <div style={{
  backgroundColor: '#eeeeee',
  borderTop: '1px solid #ccc',
  padding: '6px 12px',
  fontSize: '0.8rem',
  color: '#444',
  fontFamily: 'monospace',
  display: 'flex',
  justifyContent: 'space-between'
}}>
  <span>Python [conda env:base]</span>
  <span>Idle</span>
</div>

      </div>
      
    </div>
    
    
  );
}

export default App;
