import "./HeroDisplay.scss";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const HeroDisplay = ({ children }: Props) => {
  return (
    <div className="hero-display-container">
      <div className="hero-display-container__inner">{children}</div>
    </div>
  );
};

export default HeroDisplay;
