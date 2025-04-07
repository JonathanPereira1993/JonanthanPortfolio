import "./ProjectDetailsPage.scss";
import { useNavigate, useParams } from "react-router";
import Button from "../../components/UI/button/Button";
import { FaArrowLeft } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import { motion, AnimatePresence } from "framer-motion";

import { projects } from "../../constants/Constants";
import { LineBreak } from "../../utils/LineBreaks";
import FloatingTags from "../../components/FloatingTags/FloatingTags";
import DificultyIndicator from "../../components/difficultyIndicator/DifficultyIndicator";

const ProjectDetailsPage = () => {
  const navigate = useNavigate();
  const { pid } = useParams();
  const project = projects.find((p) => p.id === pid);

  if (!project) {
    return <p>Project not found</p>;
  }

  const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8 } },
    exit: { opacity: 0, transition: { duration: 0.8 } },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={fadeVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="project-details"
      >
        <div className="project-details-back-action">
          <Button onClick={() => navigate(-1)} type="ghost" size="big">
            <FaArrowLeft size={20} />
          </Button>
        </div>

        {/* Content */}
        <div className="project-details__content">
          <div className="project-details__content-header">
            <h1 className="project-details__content-header-title">
              {project.title}
            </h1>
            <p className="project-details__content-header-subtitle">
              {project.details?.subtitle}
            </p>
          </div>
          <div
            className="project-details__content-difficulty"
            title="Difficulty of the project"
          >
            <DificultyIndicator difficulty={project.difficulty.value} />
            <p>{project.difficulty.label}</p>
          </div>
          <div className="project-details__content-image">
            <img src={project.image} alt={project.title} />
          </div>

          <p className="project-details__content-why">
            "{project.details?.why}"
          </p>

          <div className="project-details__content-tech">
            <FloatingTags tags={project.tags} />
          </div>
          <div className="project-details__content-github">
            <a
              href={project.gitHub}
              title="Open github repository"
              target="_blank"
            >
              <FaGithub size={50} />
            </a>
          </div>

          <LineBreak
            className="project-details__content-mainDescription"
            text={project.details?.mainDescription}
          />
          <div className="project-details__content-features">
            <ul>
              {project.details?.features.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectDetailsPage;
