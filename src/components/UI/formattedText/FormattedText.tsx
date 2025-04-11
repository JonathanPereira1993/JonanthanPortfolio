type Props = {
  text: string;
  className?: string;
};

const FormattedText = ({ text, className }: Props) => {
  return (
    <div className={className}>
      {text.split("\n\n").map((paragraph, index) => (
        <p key={index} className="formatted-paragraph">
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default FormattedText;
