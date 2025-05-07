import { useNavigate, useParams } from "react-router";
import Button from "../../components/UI/Button/Button";
import { FaArrowLeft } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import { motion, AnimatePresence } from "framer-motion";

import { projects } from "../../constants/Constants";
import { LineBreak } from "../../utils/LineBreaks";
import FloatingTags from "../../components/FloatingTags/FloatingTags";
import DificultyIndicator from "../../components/DifficultyIndicator/DifficultyIndicator";

import "./ProjectDetailsPage.scss";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import ImageGallery from "../../components/ImageGallery/ImageGallery";

const ProjectDetailsPage = () => {
  const navigate = useNavigate();
  const { pid } = useParams();
  const project = projects.find((p) => p.id === pid);

  const [selectedIndex, setSelectedIndex] = useState<string | null>(null);

  if (!project) {
    return <p>Project not found</p>;
  }

  const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8 } },
    exit: { opacity: 0, transition: { duration: 0.8 } },
  };

  const modalOpenHandler = (index: string) => {
    setSelectedIndex(index);
  };

  const modalCloseHandler = () => {
    setSelectedIndex(null);
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
          <div className="project-details__content__inner">
            <div className="project-details__content__inner-header">
              <h1 className="project-details__content-header-title">
                {project.title}
              </h1>
              <p className="project-details__content-header-subtitle">
                {project.details?.subtitle}
              </p>
            </div>
            <div
              className="project-details__content__inner-difficulty"
              title="Difficulty of the project"
            >
              <div>
                <DificultyIndicator difficulty={project.difficulty.value} />
                <p>{project.difficulty.label}</p>
              </div>
            </div>
            <div className="project-details__content__inner-github">
              <a
                href={project.gitHub}
                title="Open github repository"
                target="_blank"
              >
                <FaGithub size={80} />
              </a>
            </div>

            <div
              className="project-details__content__inner-image"
              onClick={() => modalOpenHandler(project.id)}
              title="Click to open modal with more images"
            >
              <img src={project.image.src} alt={project.title} />
            </div>

            <div className="project-details__content__inner-tech">
              <FloatingTags tags={project.tags} />
            </div>
            <p className="project-details__content__inner-why">
              "{project.details?.why}"
            </p>
            <LineBreak
              className="project-details__content__inner-mainDescription"
              text={project.details?.mainDescription}
            />
            <div className="project-details__content__inner-features">
              <ul>
                {project.details?.features.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="project-details__content__inner-footer">
              <p className="footer-wrapper">
                <span className="footer-year">
                  {project.details.footer.year}
                </span>
                <span className="footer-separator"> - </span>
                {project.details.footer.phrase}
              </p>
            </div>
          </div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <Modal
              modalTitle={`${project.title} images`}
              showTitle
              alt="Image"
              onClose={modalCloseHandler}
            >
              <ImageGallery images={project.details?.images || []} altText="" />
            </Modal>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectDetailsPage;
