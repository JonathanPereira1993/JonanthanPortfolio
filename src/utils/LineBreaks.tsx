type Props = {
  text?: string;
  className?: string;
};

export const LineBreak = ({ text = "", className = "" }: Props) => {
  return (
    <div className={className}>
      {text.split(/\n{2,}/).map((paragraph, index) => (
        <p key={index} style={{ marginBottom: "1.5em" }}>
          {paragraph}
        </p>
      ))}
    </div>
  );
};
