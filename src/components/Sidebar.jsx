import { useState } from "react";

export default function Sidebar({ onSelect }) {
  const [openSrc, setOpenSrc] = useState(true);
  const [openPublic, setOpenPublic] = useState(true);

  return (
    <aside className="sidebar">

      
      <div className="sidebar-topbar">
        <span className="btn red"></span>
        <span className="btn yellow"></span>
        <span className="btn green"></span>
      </div>

     
      <div className="sidebar-title">  <img
    src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"
    alt="VS Code Logo"
    style={{ width: "12px", height: "12px", marginRight: "5px" }}
  />EXPLORER </div>

      <ul className="sidebar-list">

        
        <li className="folder" onClick={() => setOpenSrc(!openSrc)}>
          {openSrc ? "▾" : "▸"} src
        </li>

        {openSrc && (
          <>
            <li className="file indented" onClick={() => onSelect("about.jsx")}>
              about.jsx
            </li>

            <li className="file indented" onClick={() => onSelect("skills.tsx")}>
              skills.tsx
            </li>

            <li className="file indented" onClick={() => onSelect("projects.jsx")}>
              projects.jsx
            </li>

            <li className="file indented" onClick={() => onSelect("contact.jsx")}>
              contact.jsx
            </li>
          </>
        )}

        
        <li className="folder" onClick={() => setOpenPublic(!openPublic)}>
          {openPublic ? "▾" : "▸"} public
        </li>

        {openPublic && (
          <>
            <li className="file indented" onClick={() => onSelect("education.jsx")}>
              education.jsx
            </li>
          </>
        )}

        
        <li className="file" onClick={() => onSelect("README.jsx")}>
          README.md
        </li>
      </ul>
    </aside>
  );
}

