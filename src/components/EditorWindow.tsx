import Sidebar from "./Sidebar.jsx";
import Tabs from "./Tabs.tsx";


interface EditorWindowProps {
  children: React.ReactNode;
  activeFile: string;
  onSelect: (file: string) => void;
}

export default function EditorWindow({ children, activeFile, onSelect }) {
  return (
    <div className="editor-window">
      <div className="editor-body">
        <Sidebar onSelect={onSelect} />

        <div className="editor-right">
          <div className="editor-tabs-wrapper">
            <Tabs activeFile={activeFile} onSelect={onSelect} />
          </div>

          <div className="editor-content">
            {children}
          </div>

          {/* Мини-терминал приклеен к низу */}
          
        </div>
      </div>
    </div>
  );
}
