const files = [
  { key: "about.jsx", label: "about.jsx" },
  { key: "skills.tsx", label: "skills.tsx" },
  { key: "projects.jsx", label: "projects.jsx" },
  { key: "contact.jsx", label: "contact.jsx" },
  { key: "education.jsx", label: "education.jsx" },
  { key: "README.jsx", label: "README.md" }
];

interface TabsProps {
  activeFile: string;
  onSelect: (file: string) => void;
}

export default function Tabs({ activeFile, onSelect }: TabsProps) {
  return (
    <div className="tabs">
      {files.map((file) => (
        <div
          key={file.key}
          className={`tab ${activeFile === file.key ? "active" : ""}`}
          onClick={() => onSelect(file.key)}
        >
          {file.label}
        </div>
      ))}
    </div>
  );
}
