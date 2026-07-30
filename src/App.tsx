import { useState } from "react";

import "./styles/grid.css";
import "./styles/editor.css";
import "./styles/sidebar.css";
import "./styles/tabs.css";
import "./styles/typing.css";
import "./styles/code.css";
import "./styles/mobile.css";
import "./styles/status-bar.css";

import TypingHeader from "./components/TypingHeader.tsx";

import EditorWindow from "./components/EditorWindow.tsx";
import BackgroundRipple from "./components/BackgroundRipple";
import StatusBar from "./components/StatusBar.tsx";

import AboutContent from "./components/AboutContent.jsx";
import SkillsContent from "./components/SkillsContent.jsx";
import ProjectsContent from "./components/ProjectsContent.jsx";
import ContactContent from "./components/ContactContent.jsx";
import EducationContent from "./components/Education.jsx";
import ReadmeContent from "./components/README.jsx";


export default function App() {
  const [activeFile, setActiveFile] = useState("about.jsx");

  return (
    <>
    <BackgroundRipple />
      <TypingHeader />

      <EditorWindow activeFile={activeFile} onSelect={setActiveFile}>
        {activeFile === "about.jsx" && <AboutContent />}
        {activeFile === "skills.tsx" && <SkillsContent />}
        {activeFile === "projects.jsx" && <ProjectsContent />}
        {activeFile === "contact.jsx" && <ContactContent />}
        {activeFile === "education.jsx" && <EducationContent />}
        {activeFile === "README.jsx" && <ReadmeContent />}
        <StatusBar />
      </EditorWindow>
      
    </>
  );
}
