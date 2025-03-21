import { useEffect, useRef } from "react";
import "./CodeSnippet.scss";

type Props = {
  image?: string;
  title?: string;
  subtitle?: string;
  username?: string;
  date?: string;
  description?: string;
  formattedDescription?: string;
};

const CodeSnippet = ({
  image,
  title,
  subtitle,
  username,
  date,
  description,
  formattedDescription,
}: Props) => {
  const content = formattedDescription || description || "";
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.textContent = content;
    }
  }, [content]);

  return (
    <div className="code-snippet">
      <div className="code-snippet__top-content">
        {image && (
          <img
            className="code-snippet__top-content-image"
            src={image}
            alt={subtitle}
          />
        )}

        <div>
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
      </div>

      <div className="code-snippet__description">
        <div ref={containerRef} className="code-snippet__text">
          {content}
        </div>
      </div>
    </div>
  );
};

export default CodeSnippet;
