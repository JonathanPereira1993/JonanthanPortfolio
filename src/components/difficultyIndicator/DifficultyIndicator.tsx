type Props = {
  difficulty: number;
};

const DificultyIndicator = ({ difficulty }: Props) => {
  const bars = [];

  for (let i = 0; i < 10; i++) {
    const columnsHeight = 10 + i * 4;

    bars.push(
      <div
        key={i}
        style={{ height: columnsHeight + "px" }}
        className={`bar ${i < difficulty ? "filled" : "empty"}`}
      />
    );
  }

  return <div className="difficulty-indicator">{bars}</div>;
};

export default DificultyIndicator;
