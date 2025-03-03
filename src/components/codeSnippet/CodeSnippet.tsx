import "./CodeSnippet.scss";

type Props = {
  title: string;
  username: string;
  date: string;
  description: string;
};

const CodeSnippet = ({ title, username, date, description }: Props) => {
  return (
    <div className="code-snippet">
      <div>
        <div className="code-snippet__top-content">
          <h3 className="code-snippet__title">
            {title} -{" "}
            <span className="code-snippet__title-username">{username}</span>
          </h3>
          <span className="code-snippet__date">Date: {date}</span>
        </div>
      </div>
      <div className="code-snippet__description">{description}</div>
    </div>
  );
};

export default CodeSnippet;
