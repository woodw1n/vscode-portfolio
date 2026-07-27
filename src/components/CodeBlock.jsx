export default function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <pre className="code-block">
      <code>{children}</code>
    </pre>
  );
}