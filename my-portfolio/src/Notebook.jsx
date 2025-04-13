// src/Notebook.jsx
import React from 'react';
import NotebookCell from './components/NotebookCell';
import AnimatedProjectCell from './components/AnimatedProjectCell';

const Notebook = () => {
  return (
    <div className="notebook">

      {/* Introduction */}
      <NotebookCell
        type="markdown"
        content={`### 👋 Hi, I'm Kiran Gobi Manivannan

I'm a Computer Science graduate with a passion for AI/ML, building smart apps, and creating portfolio projects that speak louder than resumes. I love experimenting with Python, React, and anything that combines vision + language.`}
      />

      {/* Animated Project Cell */}
      <AnimatedProjectCell
        title="Visual AI Assistant"
        icon="🤖"
        code={`# Object detection + visual Q&A\nfrom ultralytics import YOLO\nfrom transformers import BlipProcessor`}
        description="✅ Built a full-stack app to identify objects via phone stream and answer contextual questions."
      />

      {/* Chatbot Project */}
      <NotebookCell type="markdown" content={`## 🗓️ Project: Smart Assistant Chatbot`} />
      <NotebookCell
        type="code"
        content={`# Intent recognition + Calendar API\nfrom googleapiclient.discovery import build\nimport nltk`}
      />
      <NotebookCell
        type="output"
        content={`✅ Book/reschedule/cancel events, answer questions, and fetch weather updates.`}
      />

      {/* Skills */}
      <NotebookCell
        type="markdown"
        content={`## 🛠️ Skills\n- Python, JavaScript, SQL\n- React, FastAPI, Flask\n- Hugging Face, YOLO, TensorFlow`}
      />

      {/* Contact */}
      <NotebookCell
        type="markdown"
        content={`## 📫 Contact\n📧 kiranxgobi@gmail.com | 📱 437-838-5167\n🔗 GitHub: Kiran14082000 | LinkedIn: kiran-gobi`}
      />
    </div>
  );
};

export default Notebook;
