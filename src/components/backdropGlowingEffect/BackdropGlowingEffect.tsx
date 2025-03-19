import { motion } from "framer-motion";
import "./BackdropGlowingEffect.scss";

const BackdropGlowingEffect = () => {
  return (
    <div className="glowing-effect">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: [0.5, 1, 0.7, 1.3, 0.8, 1, 0.5],
          y: [0, -90, 0],
        }}
        transition={{
          scale: { duration: 1, ease: "easeOut" },
          opacity: {
            duration: 16,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          },
          y: {
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          },
        }}
        className="shape-1"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: [0.5, 1, 0.7, 1.2, 0.5],
          y: [0, -80, 0],
        }}
        transition={{
          scale: { duration: 1, ease: "easeOut" },
          opacity: {
            duration: 7,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          },
          y: {
            duration: 15,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          },
        }}
        className="shape-2"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: [0.5, 1, 0.7, 1.2, 0.5],
          y: [0, -80, 0],
        }}
        transition={{
          scale: { duration: 1, ease: "easeOut" },
          opacity: {
            duration: 18,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          },
          y: {
            duration: 15,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          },
        }}
        className="shape-3"
      />
    </div>
  );
};

export default BackdropGlowingEffect;
