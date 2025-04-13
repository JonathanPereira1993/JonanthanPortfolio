import { useNavigate, useParams } from "react-router";
import Button from "../../components/UI/Button/Button";
import { FaArrowLeft } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

import { motion, AnimatePresence } from "framer-motion";

import { hobbies } from "../../constants/Constants";
import { LineBreak } from "../../utils/LineBreaks";
import ImageGallery from "../../components/ImageGallery/ImageGallery";

import "./HobbieDetailsPage.scss";

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
        className="hobbie-details "
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
          <div className="hobbie-details__content__inner">
            <h1 className="hobbie-details__content__inner-title">
              {hobbie.title}
            </h1>
            <p className="hobbie-details__content__inner-subtitle">
              {hobbie?.subtitle}
            </p>

            <div className="hobbie-details__content__inner-column">
              <img
                className="hobbie-details__content__inner-cover"
                src={hobbie.cover}
                alt={`${hobbie.title} cover image`}
              />
              <LineBreak
                className="hobbie-details__content__inner-mainDescription"
                text={hobbie?.mainDescription}
              />
            </div>
            <div className="hobbie-details__content__inner-phrase">
              {hobbie.phrase}
            </div>
            <div className="hobbie-details__content__inner-gallery">
              <ImageGallery altText="" images={hobbie.photos} />
            </div>

            <div className="hobbie-details__content__inner-link-container">
              <p className="hobbie-details__content__inner-link-container__title">
                {hobbie.linkTitle}
              </p>
              <a
                className="hobbie-details__content__inner-link-container__link"
                href={hobbie.link}
                tabIndex={0}
                title="Check my youtube channel"
                target="_blank"
              >
                <FaYoutube size={80} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default HobbieDetailsPage;
