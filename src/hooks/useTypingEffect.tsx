import { useState, useEffect } from "react";
import { motion } from "framer-motion";

type TypingEffectProps = {
  text: string;
  speed?: number;
  loop?: boolean;
  cursorBlink?: boolean;
  cursorStopDelay?: number;
};

export const useTypingEffect = ({
  text,
  speed = 100,
  loop = false,
  cursorBlink = true,
  cursorStopDelay = 2000,
}: TypingEffectProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [cursorActive, setCursorActive] = useState(true);

  useEffect(() => {
    if (!loop && index === text.length) return;

    const timeout = setTimeout(() => {
      setDisplayedText(text.slice(0, index + 1));
      setIndex((prev) => prev + 1);

      if (index >= text.length) {
        if (loop) {
          setTimeout(() => {
            setIndex(0);
            setDisplayedText("");
            setCursorActive(true);
          }, 1000);
        } else {
          setTimeout(() => setCursorActive(false), cursorStopDelay);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, loop, text, speed, cursorStopDelay]);

  useEffect(() => {
    if (!cursorBlink || !cursorActive) return;
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, [cursorBlink, cursorActive]);

  return (
    <motion.span>
      {displayedText}
      {cursorBlink && cursorActive && (
        <motion.span animate={{ opacity: showCursor ? 1 : 0 }}>|</motion.span>
      )}
    </motion.span>
  );
};
