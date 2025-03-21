import "./HobbieDetailsPage.scss";
import { useNavigate, useParams } from "react-router";
import Button from "../../components/UI/button/Button";
import { FaArrowLeft } from "react-icons/fa6";

import { motion, AnimatePresence } from "framer-motion";

import { hobbies } from "../../constants/Constants";
import { LineBreak } from "../../utils/LineBreaks";
import ImageGallery from "../../components/imageGallery/ImageGallery";

const HobbieDetailsPage = () => {
  const navigate = useNavigate();
  const { hid } = useParams();
  const hobbie = hobbies.find((h) => h.id === hid);

  if (!hobbie) {
    return <p>Hobbie not found</p>;
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
        className="hobbie-details"
      >
        <div className="hobbie-details-back-action">
          <Button
            onClick={() => navigate("/about?section=hobbies")}
            type="ghost"
            size="big"
          >
            <FaArrowLeft size={20} />
          </Button>
        </div>
        <div className="hobbie-details__content">
          <h1 className="hobbie-details__content-title">{hobbie.title}</h1>
          <p className="hobbie-details__content-subtitle">{hobbie?.subtitle}</p>

          <div className="hobbie-details__content-column">
            <LineBreak
              className="hobbie-details__content-mainDescription"
              text={hobbie?.mainDescription}
            />
            <div className="hobbie-details__content-phrase">
              {hobbie.phrase}
            </div>
          </div>
          <div className="hobbie-details__content-gallery">
            <ImageGallery images={hobbie.photos} />
          </div>

          <div className="hobbie-details__content-link-container">
            <p className="hobbie-details__content-link-container__title">
              {hobbie.linkTitle}
            </p>
            <a
              className="hobbie-details__content-link-container__link"
              href={hobbie.link}
              target="_blank"
            >
              Check it out
            </a>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default HobbieDetailsPage;
