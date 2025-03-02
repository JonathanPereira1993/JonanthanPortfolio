import React from "react";
import "./GridContainer.scss";

type Props = {
  children: React.ReactNode;
  columns: string;
  gap?: string;
};

const GridContainer = ({ children, columns, gap = "4px" }: Props) => {
  return (
    <div
      className="grid-container"
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: `${gap}` }}
    >
      {children}
    </div>
  );
};

export default GridContainer;
