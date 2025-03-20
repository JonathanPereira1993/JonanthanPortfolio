import React from "react";
import "./Tag.scss";

type Props = {
  icon?: React.ReactNode;
  text: string;
};

const Tag = ({ icon, text }: Props) => {
  return (
    <div className="tag" title={text}>
      {icon && <div className="tag__icon">{icon}</div>}
      <span className="tag__text">{text}</span>
    </div>
  );
};

export default Tag;
