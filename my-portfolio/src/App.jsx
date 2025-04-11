import './App.css';
import NotebookCell from './components/NotebookCell.jsx';

function App() {
  return (
    <div className="App" style={{ maxWidth: '960px', margin: '2rem auto' }}>
      
      {/* Header / About */}
      <NotebookCell
        type="markdown"
        content={`### 👋 Hi, I'm Kiran Gobi Manivannan\n\nWelcome to my portfolio! I specialize in Python-based AI/ML projects, and this site is styled like a Jupyter notebook to reflect how I think and work.`}
      />

      {/* Project 1 - Title */}
      <NotebookCell
        type="markdown"
        content={`## 🧠 Project: Clickstream Prediction`}
      />

      {/* Project 1 - Code */}
      <NotebookCell
        type="code"
        content={`# Import libraries\nimport pandas as pd\nimport numpy as np\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.ensemble import RandomForestClassifier`}
      />
      <NotebookCell
        type="code"
        content={`# Load data\ndf = pd.read_csv('events.csv')\nX = df.drop('target', axis=1)\ny = df['target']\nX_train, X_test, y_train, y_test = train_test_split(X, y)`}
      />
      
      {/* Project 1 - Output */}
      <NotebookCell
        type="output"
        content={`Model trained successfully ✔️\nAccuracy: 89.3%\nF1 Score: 0.86`}
      />

      {/* Project 1 - Explanation */}
      <NotebookCell
        type="markdown"
        content={`This project predicts user purchase behavior based on clickstream data. I trained a Random Forest classifier using behavioral signals from a large ecommerce dataset.`}
      />
    </div>
  );
}

export default App;
