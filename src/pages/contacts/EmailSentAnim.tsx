import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  show: boolean;
};

const EmailSentAnim = ({ show }: Props) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (!show) {
      setStage(0);
      return;
    }

    let growTimeout: ReturnType<typeof setTimeout>;
    let showMessageTimeout: ReturnType<typeof setTimeout>;
    let exitTimeout: ReturnType<typeof setTimeout>;

    if (show) {
      setStage(1);

      growTimeout = setTimeout(() => {
        setStage(2);
      }, 600);

      showMessageTimeout = setTimeout(() => {
        setStage(3);
      }, 2600);

      exitTimeout = setTimeout(() => {
        setStage(0);
      }, 3200);
    } else {
      setStage(0);
    }

    return () => {
      clearTimeout(growTimeout);
      clearTimeout(showMessageTimeout);
      clearTimeout(exitTimeout);
    };
  }, [show]);

  return (
    <AnimatePresence>
      {stage > 0 && stage < 4 && (
        <motion.div
          className="send-mail-success__anim"
          key="container"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <AnimatePresence>
            {stage >= 2 && stage < 3 && (
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
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EmailSentAnim;
