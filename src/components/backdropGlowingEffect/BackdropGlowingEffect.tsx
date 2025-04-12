import { motion } from "framer-motion";

import "./BackdropGlowingEffect.scss";

const BackdropGlowingEffect = () => {
  return (
    <div className="glowing-effect-outer">
      <div className="glowing-effect">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [1, 1.1, 0.95, 1.2],
            opacity: [0.5, 1, 0.7, 1.3, 0.8, 1, 0.5],
            y: [0, -10, -90, -120],
            x: [0, -10, -20, -170],
          }}
          transition={{
            scale: {
              duration: 16,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            },
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
            x: {
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
            scale: [1, 1.1, 0.95, 1.2],
            opacity: [0.5, 1, 0.7, 1.2, 0.5],
            y: [0, -30, -100, -20],
            x: [0, -30, -100, -20],
          }}
          transition={{
            scale: {
              duration: 10,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            },
            opacity: {
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            },
            y: {
              duration: 22,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            },
            x: {
              duration: 23,
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
            scale: [1, 1.1, 0.95, 1.2],
            opacity: [0.5, 1, 0.7, 1.2, 0.5],
            y: [0, -80, 0 - 100, 10],
            x: [20, 2, 40, 100],
          }}
          transition={{
            scale: {
              duration: 28,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            },
            opacity: {
              duration: 20,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            },
            y: {
              duration: 17,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            },
            x: {
              duration: 30,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            },
          }}
          className="shape-4"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [1, 1.1, 0.95, 1.2],
            opacity: [0.3, 1, 0.8, 1.2, 0.5],
            y: [0, -80, 0, -200],
            x: [0, -80, 0, -200],
          }}
          transition={{
            scale: {
              duration: 25,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            },
            opacity: {
              duration: 18,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            },
            y: {
              duration: 18,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            },
            x: {
              duration: 19,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            },
          }}
          className="shape-3"
        />
      </div>
    </div>
  );
};

export default BackdropGlowingEffect;
