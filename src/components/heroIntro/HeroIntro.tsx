import { motion, AnimatePresence } from "framer-motion";

type Props = {
  introText?: string;
  title: string;
  subtitle?: string;
};

const fadeVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1.2 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

const HeroIntro = ({ introText, title, subtitle }: Props) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={fadeVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="hero-intro-container"
      >
        <p className="hero-intro-container__intro">{introText}</p>
        <h1 className="hero-intro-container__title">{title}</h1>
        <p className="hero-intro-container__subtitle">{subtitle}</p>
      </motion.div>
    </AnimatePresence>
  );
};

export default HeroIntro;
