import "./ProjectDetailsPage.scss";
import { useNavigate, useParams } from "react-router";
import Button from "../../components/UI/button/Button";
import { FaArrowLeft } from "react-icons/fa6";

import { projects } from "../../constants/Constants";

const ProjectDetailsPage = () => {
  const navigate = useNavigate();
  const { pid } = useParams();
  const project = projects.find((p) => p.id === pid);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="project-details">
      <div className="project-details-back-action">
        <Button onClick={() => navigate(-1)} type="ghost" size="big">
          <FaArrowLeft size={20} />
        </Button>
      </div>
      <div className="project-details__content">
        <h1 className="project-details__content-title">{project.title}</h1>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
