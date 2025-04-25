import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import { useContact } from "../../Context/ContactContext/UseContact";

type Props = {
  show: boolean;
  isError?: boolean;
};

const EmailSentAnim = ({ show, isError }: Props) => {
  const { closeSuccessMessage, setFormError } = useContact();
  const [stage, setStage] = useState(0);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const idleMessages = [
    "Do you like this message?",
    "Still here? I'm flattered!",
    "Are you thinking of closing me, or will we be looking at each other forever?",
    "I'm not going anywhere until you tap 😄",
    "Okay, seriously... tap me anytime now.",
    "Okay, lets get nerd. Do you know that one day on Venus is longer than its year? Cool right?",
    "The universe is still expanding. Like this message in relation with your time :D.",
    "I like you very much, don't go please, Jonathan made me be hidden for the entire time! But you send him a message and now I'm free! Thank you!!!",
  ];

  useEffect(() => {
    if (!show) {
      setStage(0);
      return;
    }

    let growTimeout: ReturnType<typeof setTimeout>;
    let timePassedTimeout: ReturnType<typeof setTimeout>;
    let startJokesTimeout: ReturnType<typeof setTimeout>;

    if (show) {
      setStage(1);

      growTimeout = setTimeout(() => {
        setStage(2);
      }, 600);

      timePassedTimeout = setTimeout(() => {
        setStage(3);
      }, 10000);

      startJokesTimeout = setTimeout(() => {
        setStage(4);
      }, 18000);
    } else {
      setStage(0);
    }

    return () => {
      clearTimeout(growTimeout);
      clearTimeout(timePassedTimeout);
      clearTimeout(startJokesTimeout);
    };
  }, [show]);

  // Close Messages timeflow
  useEffect(() => {
    if (stage === 4) {
      let index = 0;
      const interval = setInterval(() => {
        index++;
        if (index < idleMessages.length) {
          setCurrentMessageIndex(index);
        } else {
          clearInterval(interval);
        }
      }, 20000);

      return () => {
        clearInterval(interval);
        setCurrentMessageIndex(0);
      };
    } else {
      setCurrentMessageIndex(0);
    }
  }, [stage, idleMessages.length]);

  const closeHandle = () => {
    closeSuccessMessage();
    setFormError();
    setStage(3);
    setStage(0);
  };

  return (
    <AnimatePresence>
      {stage > 0 && stage < 5 && (
        <motion.div
          className="send-mail-success__anim"
          key="container"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          onClick={closeHandle}
        >
          <AnimatePresence>
            {stage >= 2 && stage < 5 && (
              <motion.div
                key="message"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5 }}
              >
                <h2>
                  {isError
                    ? "Sorry! Something went wrong!"
                    : "Your message is on the way!"}
                </h2>
                <p>
                  {isError
                    ? "I think the server does not want to work today! Please try again later :("
                    : "Thank you for taking the time to view my portfolio. I hope you enjoyed it, and I look forward to the opportunity to create something awesome together!"}
                </p>

                <motion.div>
                  <AnimatePresence>
                    {stage >= 3 && stage < 5 && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="close-message"
                      >
                        You can close by tapping :)
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <AnimatePresence mode="wait">
                    {stage >= 4 && stage < 5 && (
                      <motion.p
                        key={idleMessages[currentMessageIndex]}
                        className="joke-messages"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.4 }}
                      >
                        {idleMessages[currentMessageIndex]}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EmailSentAnim;
