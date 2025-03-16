import { useEffect, useRef, useState } from "react";
import "./CodeSnippet.scss";

type Props = {
  title?: string;
  subtitle?: string;
  username?: string;
  date?: string;
  description?: string;
  formattedDescription?: string;
  showLineNumbers?: boolean;
};

const CodeSnippet = ({
  title,
  subtitle,
  username,
  date,
  description,
  formattedDescription,
  showLineNumbers = false,
}: Props) => {
  const content = formattedDescription || description || "";
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineCount, setLineCount] = useState<number[]>([]);

  const calculateLineNumbers = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const computedStyles = window.getComputedStyle(container);
      const lineHeight = parseFloat(computedStyles.lineHeight);
      const containerHeight = container.scrollHeight;
      const totalLines = Math.floor(containerHeight / lineHeight);
      setLineCount(Array.from({ length: totalLines }, (_, i) => i + 1));
    }
  };

  useEffect(() => {
    calculateLineNumbers();

    const resizeObserver = new ResizeObserver(() => {
      calculateLineNumbers();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    window.addEventListener("resize", calculateLineNumbers);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", calculateLineNumbers);
    };
  }, [content]);

  return (
    <div className="code-snippet">
      <div className="code-snippet__top-content">
        <h3 className="code-snippet__title">
          {title}{" "}
          {username && (
            <>
              <span> - </span>
              <span className="code-snippet__title-username">{username}</span>
            </>
          )}
        </h3>
        <h4 className="code-snippet__subtitle">{subtitle}</h4>
        {date && <span className="code-snippet__date">{date}</span>}
      </div>

      <div className="code-snippet__description">
        {showLineNumbers && (
          <div className="code-snippet__line-numbers">
            {lineCount.map((lineNumber) => (
              <div key={lineNumber} className="code-snippet__line-number">
                {lineNumber}
              </div>
            ))}
          </div>
        )}
        <div ref={containerRef} className="code-snippet__text">
          {content}
        </div>
      </div>
    </div>
  );
};

export default CodeSnippet;
