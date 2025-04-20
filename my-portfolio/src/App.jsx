import React from "react";
import NotebookCell from "./components/NotebookCell";
import Navbar from "./components/Navbar";
import Taskbar from "./components/Taskbar";
import "./index.css";

function App() {
  return (
    <div className="bg-zinc-900 text-white font-mono min-h-screen">
      <Navbar />
      <Taskbar />

      <main className="p-6 max-w-4xl mx-auto space-y-6" id="home">
        <NotebookCell type="markdown" content="# Hello, I'm Kiran 👋" />
        <NotebookCell type="code" content={`def greet():\n    return "Hello from Python!"`} />
        <NotebookCell type="output" content="Hello from Python!" />
        
        <NotebookCell type="markdown" content="🔍 I'm passionate about AI/ML and building cool projects!" />
        <NotebookCell type="code" content={`print("Predicting Airbnb prices...")`} />
        <NotebookCell type="output" content="Model accuracy: 94.5%" />
        
        <NotebookCell type="markdown" content="## 🧠 ML Projects" id="projects" />
        <NotebookCell type="code" content={`from sklearn.ensemble import RandomForestRegressor\nmodel = RandomForestRegressor()\nmodel.fit(X_train, y_train)`} />
        <NotebookCell type="output" content="Training complete. R²: 0.96" />
        
        <NotebookCell type="markdown" content="## 📊 Visualizations Coming Soon..." />
        <img src="/images/airbnb-dashboard.png" alt="Project preview" className="rounded-xl border border-zinc-700 shadow-xl" />

        <NotebookCell type="markdown" content={`## 📬 Contact Me\n\nEmail: [kiranxgobi@gmail.com](mailto:kiranxgobi@gmail.com)  \nGitHub: [Kiran14082000](https://github.com/Kiran14082000)  \nLinkedIn: [Kiran Gobi](https://linkedin.com/in/kiran1408)`} id="contact" />
      </main>
    </div>
  );
}

export default App;
