import React from "react";

import Button from "../UI/Button/Button";

import { useNavigate } from "react-router";

type Props = {
  projNum: string;
  image?: string;
  icon?: React.ReactNode;
  title: string;
  smallDescription?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  buttonText?: string;
};

const ProjectItem = ({
  projNum,
  image,
  icon,
  title,
  smallDescription,
  onClick,
  buttonText = "view-project",
}: Props) => {
  const navigate = useNavigate();

  const openDetailsHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick(e);
    navigate(`/projects/${projNum}`);
  };

  return (
    <div className="project-item-wrapper">
      <h3 className="project-item-title">
        <span className="project-number">Project {projNum} </span>
        // {title}
      </h3>
      <div className="project-item">
        <span className="project-item-icon">{icon}</span>
        <img className="project-item__image" src={image} alt={title} />
        <div className="project-item__content">
          <p className="project-item__content-smallDescription">
            {smallDescription}
          </p>
          <Button
            title="Check this project"
            type="default"
            onClick={openDetailsHandler}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
