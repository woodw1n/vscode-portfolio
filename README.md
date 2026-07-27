

# VS Code Style Portfolio

A personal developer portfolio built with **React**, **TypeScript**, and a custom **VS Code‑inspired interface**.  
The project recreates the look and feel of Visual Studio Code, including a sidebar explorer, tab system, editor window, and animated UI elements.

---

## 🚀 Features

- ⚛ React + TypeScript  
- 🎨 Custom VS Code UI (tabs, sidebar, editor layout)  
- ⌨️ Typing animation header  
- 📁 File‑based navigation (about.jsx, skills.tsx, projects.jsx, etc.)  
- 🌙 Dark theme with grid background  
- 🧩 Modular components  
- ⚡ Powered by Vite  

---

## 📦 Tech Stack

- React  
- TypeScript  
- Vite  
- CSS (custom styles)  
- Fira Code font  

---

## 📁 Project Structure
src/
  components/
    AboutContent.jsx
    SkillsContent.jsx
    ProjectsContent.jsx
    ContactContent.jsx
    Education.jsx
    README.jsx
    EditorWindow.tsx
    Sidebar.jsx
    Tabs.tsx
    TypingHeader.tsx
  styles/
    grid.css
    editor.css
    sidebar.css
    tabs.css
    typing.css
    code.css

## 🛠 Installation

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
npm run dev
The project runs at: http://localhost:5173

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}