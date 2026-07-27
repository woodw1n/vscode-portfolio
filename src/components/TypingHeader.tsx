import { useState, useEffect } from "react";

const TYPING_TEXT =
  "Hello, my name is Vitaliy. I am a junior frontend developer.";

const SPEED = 80;

export default function TypingHeader(): JSX.Element {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayed(TYPING_TEXT.slice(0, index));
      index++;

      if (index > TYPING_TEXT.length) {
        clearInterval(interval);
      }
    }, SPEED);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="typing-header">
      {displayed}
      <span className="cursor">|</span>
    </div>
  );
}