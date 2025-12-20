import React from "react";

import "./ProjectItem.scss";

import Button from "../UI/Button/Button";

import { useNavigate } from "react-router";
import ImagePlaceholder from "../ImagePlaceholder/ImagePlaceholder";

type Props = {
  projNum: string;
  image: string;
  icon?: React.ReactNode;
  title: string;
  hash: string;
  smallDescription?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  buttonText?: string;
};

const ProjectItem = ({
  projNum,
  image,
  icon,
  title,
  hash,
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
      <div className="project-item theme-shadow">
        <span className="project-item-icon">{icon}</span>
        <div className="project-item__image-cover">
          <ImagePlaceholder
            src={image}
            alt={title}
            width={500}
            height={450}
            hash={hash}
          />
        </div>

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
