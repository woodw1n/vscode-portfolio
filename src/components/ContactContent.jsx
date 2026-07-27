export default function ContactContent() {
  return (
    <pre className="code-block">
      <code>
        <span className="token comment">// Contact</span>{"\n"}

        <span className="token keyword">const</span>{" "}
        <span className="token variable">contact</span>{" "}
        <span className="token operator-white">=</span>{" "}
        <span className="token operator-yellow">{"{"}</span>

        {"\n  "}
        <span className="token property">phone</span>
        <span className="token operator-white">:</span>{" "}
        <span className="token number">375336068630</span>
        <span className="token punctuation">,</span>

        {"\n  "}
        <span className="token property">email</span>
        <span className="token operator-white">:</span>{" "}
        <span
          className="token string"
          onClick={() => window.open("mailto:vitalik.zui@gmail.com")}
          style={{ cursor: "pointer" }}
        >
          "vitalik.zui@gmail.com"
        </span>
        <span className="token punctuation">,</span>

        {"\n  "}
        <span className="token property">telegram</span>
        <span className="token operator-white">:</span>{" "}
        <span
          className="token string"
          onClick={() => window.open("https://t.me/woodv1n", "_blank")}
          style={{ cursor: "pointer" }}
        >
          "@woodv1n"
        </span>
        <span className="token punctuation">,</span>

        {"\n  "}
        <span className="token property">github</span>
        <span className="token operator-white">:</span>{" "}
        <span
          className="token string"
          onClick={() => window.open("https://github.com/woodw1n", "_blank")}
          style={{ cursor: "pointer" }}
        >
          "https://github.com/woodw1n"
        </span>
        <span className="token punctuation">,</span>

        {"\n  "}
        <span className="token property">linkedin</span>
        <span className="token operator-white">:</span>{" "}
        <span
          className="token string"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/vitaliy-zui-067689390/",
              "_blank"
            )
          }
          style={{ cursor: "pointer" }}
        >
          "https://www.linkedin.com/in/vitaliy-zui-067689390/"
        </span>
        <span className="token punctuation">,</span>

        {"\n  "}
        <span className="token property">instagram</span>
        <span className="token operator-white">:</span>{" "}
        <span className="token variable">null</span>
        <span className="token punctuation">,</span>

        {"\n"}
        <span className="token operator-yellow">{"}"}</span>
        <span className="token punctuation">;</span>
      </code>
    </pre>
  );
}

