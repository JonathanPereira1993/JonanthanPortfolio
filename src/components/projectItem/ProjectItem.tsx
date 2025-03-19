import React from "react";

import Button from "../UI/button/Button";
import "./ProjectItem.scss";

type Props = {
  image?: string;
  icon?: React.ReactNode;
  title: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  buttonText?: string;
};

const ProjectItem = ({
  image,
  icon,
  title,
  onClick,
  buttonText = "view-project",
}: Props) => {
  return (
    <div className="project-item">
      <span className="project-item-icon">{icon}</span>
      <img className="project-item__image" src={image} alt={title} />
      <div className="project-item__content">
        <h3 className="project-item__content-title">{title}</h3>
        <Button type="default" onClick={onClick}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default ProjectItem;
