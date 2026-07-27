export default function SkillsContent() {
  return (
    <pre className="code-block">
      <code>
        <span className="token comment">// Skills</span>{"\n"}

        <span className="token keyword">type</span>{" "}
        <span className="token type">Skill</span>{" "}
        <span className="token operator-white">=</span>{" "}
        <span className="token operator-yellow">{"{"}</span>

        {"\n  "}
        <span className="token property">name</span>
        <span className="token operator-white">:</span>{" "}
        <span className="token type">string</span>
        <span className="token punctuation">;</span>

        {"\n  "}
        <span className="token property">level</span>
        <span className="token operator-white">:</span>{" "}
        <span className="token string">
          "solid" | "growing" | "handsOn" | "productionReady"
        </span>
        <span className="token punctuation">;</span>

        {"\n"}
        <span className="token operator-yellow">{"}"}</span>
        <span className="token punctuation">;</span>

        {"\n\n"}
        <span className="token keyword">function</span>{" "}
        <span className="token function">getSkills</span>
        <span className="token operator-yellow">(</span>
        <span className="token operator-yellow">)</span>{" "}
        <span className="token operator-white">:</span>{" "}
        <span className="token type">Skill</span>
        <span className="token operator-yellow">[]</span>{" "}
        <span className="token operator-yellow">{"{"}</span>

        {"\n  "}
        <span className="token function">return</span>{" "}
        <span className="token operator-yellow">{"["}</span>

        {"\n    "}
        <span className="token operator-yellow">{"{"}</span>
        <span className="token property">name</span>
        <span className="token operator-white">:</span>{" "}
        <span className="token string">"HTML"</span>
        <span className="token punctuation">,</span>{" "}
        <span className="token property">level</span>
        <span className="token operator-white">:</span>{" "}
        <span className="token string">"solid"</span>
        <span className="token operator-yellow">{"}"}</span>
        <span className="token punctuation">,</span>

        {"\n    "}
        <span className="token operator-yellow">{"{"}</span>
        <span className="token property">name</span>
        <span className="token operator-white">:</span>{" "}
        <span className="token string">"CSS"</span>
        <span className="token punctuation">,</span>{" "}
        <span className="token property">level</span>
        <span className="token operator-white">:</span>{" "}
        <span className="token string">"solid"</span>
        <span className="token operator-yellow">{"}"}</span>
        <span className="token punctuation">,</span>

        {"\n    "}
        <span className="token operator-yellow">{"{"}</span>
        <span className="token property">name</span>
        <span className="token operator-white">:</span>{" "}
        <span className="token string">"JavaScript"</span>
        <span className="token punctuation">,</span>{" "}
        <span className="token property">level</span>
        <span className="token operator-white">:</span>{" "}
        <span className="token string">"handsOn"</span>
        <span className="token operator-yellow">{"}"}</span>
        <span className="token punctuation">,</span>

        {"\n    "}
        <span className="token operator-yellow">{"{"}</span>
        <span className="token property">name</span>
        <span className="token operator-white">:</span>{" "}
        <span className="token string">"TypeScript"</span>
        <span className="token punctuation">,</span>{" "}
        <span className="token property">level</span>
        <span className="token operator-white">:</span>{" "}
        <span className="token string">"growing"</span>
        <span className="token operator-yellow">{"}"}</span>
        <span className="token punctuation">,</span>

        {"\n    "}
        <span className="token operator-yellow">{"{"}</span>
        <span className="token property">name</span>
        <span className="token operator-white">:</span>{" "}
        <span className="token string">"React"</span>
        <span className="token punctuation">,</span>{" "}
        <span className="token property">level</span>
        <span className="token operator-white">:</span>{" "}
        <span className="token string">"productionReady"</span>
        <span className="token operator-yellow">{"}"}</span>

        {"\n  "}
        <span className="token operator-yellow">{"]"}</span>
        <span className="token punctuation">;</span>

        {"\n"}
        <span className="token operator-yellow">{"}"}</span>
      </code>
    </pre>
  );
}
