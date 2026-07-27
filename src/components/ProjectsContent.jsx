export default function ProjectsContent() {
  return (
    <pre className="code-block">
      <code>
        <span className="token comment">// Projects</span>{"\n"}

        <span className="token keyword">const</span>{" "}
        <span className="token variable">projects</span>{" "}
        <span className="token operator-white">=</span>{" "}
        <span className="token operator-yellow">{"["}</span>

        {"\n  "}
        <span className="token operator-yellow">{"{"}</span>
        {"\n    "}
        <span className="token property">name</span>
        <span className="token operator-white">:</span>{" "}
        <span className="token string">"Water Sort Puzzle"</span>
        <span className="token punctuation">,</span>

        {"\n    "}
        <span className="token property">stack</span>
        <span className="token operator-white">:</span>{" "}
        <span className="token string">"JavaScript, HTML, CSS"</span>
        <span className="token punctuation">,</span>

        {"\n    "}
        <span className="token property">year</span>
        <span className="token operator-white">:</span>{" "}
        <span className="token number">2025</span>
        <span className="token punctuation">,</span>

        {"\n    "}
        <span className="token property">description</span>
        <span className="token operator-white">:</span>{" "}
        <span className="token string">
          "The game where the player sorts colored liquids into tubes."
        </span>
        <span className="token punctuation">,</span>

        {"\n    "}
        <span className="token property">link</span>
        <span className="token operator-white">:</span>{" "}
        <span
          className="token string"
          onClick={() =>
            window.open("https://github.com/woodw1n/Water-Sort-Puzzle", "_blank")
          }
          style={{ cursor: "pointer" }}
        >
          "https://github.com/woodw1n/Water-Sort-Puzzle"
        </span>
        <span className="token punctuation">,</span>

        {"\n  "}
        <span className="token operator-yellow">{"}"}</span>
        <span className="token punctuation">,</span>

        {"\n  "}
        <span className="token operator-yellow">{"{"}</span>
        {"\n    "}
        <span className="token property">name</span>
        <span className="token operator-white">:</span>{" "}
        <span className="token string">"Todo App (React + TypeScript)"</span>
        <span className="token punctuation">,</span>

        {"\n    "}
        <span className="token property">stack</span>
        <span className="token operator-white">:</span>{" "}
        <span className="token string">"React, TypeScript, CSS"</span>
        <span className="token punctuation">,</span>

        {"\n    "}
        <span className="token property">year</span>
        <span className="token operator-white">:</span>{" "}
        <span className="token number">2026</span>
        <span className="token punctuation">,</span>

        {"\n    "}
        <span className="token property">description</span>
        <span className="token operator-white">:</span>{" "}
        <span className="token string">
          "A modern todo application with clean responsive UI."
        </span>
        <span className="token punctuation">,</span>

        {"\n    "}
        <span className="token property">link</span>
        <span className="token operator-white">:</span>{" "}
        <span
          className="token string"
          onClick={() =>
            window.open(
              "https://github.com/woodw1n/todo-react-typescript-app",
              "_blank"
            )
          }
          style={{ cursor: "pointer" }}
        >
          "https://github.com/woodw1n/todo-react-typescript-app"
        </span>
        <span className="token punctuation">,</span>

        {"\n  "}
        <span className="token operator-yellow">{"}"}</span>
        <span className="token punctuation">,</span>

        {"\n  "}
        <span className="token operator-yellow">{"{"}</span>
        {"\n    "}
        <span className="token property">name</span>
        <span className="token operator-white">:</span>{" "}
        <span className="token string">"Quiz App"</span>
        <span className="token punctuation">,</span>

        {"\n    "}
        <span className="token property">stack</span>
        <span className="token operator-white">:</span>{" "}
        <span className="token string">"JavaScript, HTML, CSS"</span>
        <span className="token punctuation">,</span>

        {"\n    "}
        <span className="token property">year</span>
        <span className="token operator-white">:</span>{" "}
        <span className="token number">2026</span>
        <span className="token punctuation">,</span>

        {"\n    "}
        <span className="token property">description</span>
        <span className="token operator-white">:</span>{" "}
        <span className="token string">
          "Interactive quiz application with dynamic UI updates."
        </span>
        <span className="token punctuation">,</span>

        {"\n    "}
        <span className="token property">link</span>
        <span className="token operator-white">:</span>{" "}
        <span
          className="token string"
          onClick={() =>
            window.open("https://github.com/woodw1n/Quiz-App", "_blank")
          }
          style={{ cursor: "pointer" }}
        >
          "https://github.com/woodw1n/Quiz-App"
        </span>

        {"\n  "}
        <span className="token operator-yellow">{"}"}</span>

        {"\n"}
        <span className="token operator-yellow">{"]"}</span>
        <span className="token punctuation">;</span>
      </code>
    </pre>
  );
}
