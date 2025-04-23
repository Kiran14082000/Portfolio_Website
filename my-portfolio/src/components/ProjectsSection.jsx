import NotebookCell from "./NotebookCell";

const ProjectsSection = () => (
  <>
    <NotebookCell type="markdown" content="📄 Resume Suitability Prediction System" />
    <NotebookCell type="code" content={`model = RandomForestClassifier()\nkeywords = tfidf.fit_transform(job_descriptions)`} />
    <NotebookCell type="output" content={`✅ 85% accuracy\n📌 Extracted keywords using SpaCy + TF-IDF`} />

    <NotebookCell type="markdown" content="🎬 Binge Bot – Movie Recommendation Chatbot" />
    <NotebookCell type="code" content={`NER = spacy.load("en_core_web_sm")\nSentiment = Vader().analyze(reviews)`} />
    <NotebookCell type="output" content={`🎥 Personalized recommendations using BERT & VADER\n🧠 Built with Flask + AJAX`} />

    <NotebookCell type="markdown" content="🛑 Driver Drowsiness Detection" />
    <NotebookCell type="code" content={`if EAR < 0.2:\n    trigger_alert()\n    save_to_sql(driver_id)`} />
    <NotebookCell type="output" content={`🔔 Alert triggered if driver is drowsy\n📊 Logs stored for analysis`} />
  </>
);

export default ProjectsSection;
