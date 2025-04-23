import React from "react";

import "./index.css";

import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import EducationSection from "./components/EducationSection";
import VolunteerSection from "./components/VolunteerSection";
import "./NotebookCell.css";

function App() {
  return (
<div style={{ paddingLeft: "40px", paddingRight: "20px", paddingTop: "20px" }}>
<AboutSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <VolunteerSection />
    </div>
  );
}

export default App;
