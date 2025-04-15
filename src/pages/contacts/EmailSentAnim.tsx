import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  show: boolean;
};

const EmailSentAnim = ({ show }: Props) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (show) {
      setStage(1);

      const growTimeout = setTimeout(() => {
        setStage(2);
      }, 2600);

      const exitTimeout = setTimeout(() => {
        setStage(3);
      }, 2600);

      return () => {
        clearTimeout(growTimeout);
        clearTimeout(exitTimeout);
      };
    } else {
      setStage(0);
    }
  }, [show]);

  return (
    <AnimatePresence>
      {stage < 3 && (
        <motion.div
          className="send-mail-success__anim"
          key="container"
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: 1,
            y:
              stage >= 1
                ? "calc(100% + var(--header-height) + var(--margin-layout))"
                : 0,
          }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {stage >= 2 && (
            <motion.div
              key="message"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              Your email is on the way!
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EmailSentAnim;
