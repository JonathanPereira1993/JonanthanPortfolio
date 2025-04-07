import React from "react";
import "./ContentLayout.scss";
import { motion, AnimatePresence } from "framer-motion";

import { useSidebar } from "../../Context/UseSidebar";

type Props = {
  title: string;
  subtitle?: string;
  verticalCenter?: boolean;
  children: React.ReactNode;
};

const fadeVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.7 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

const ContentLayout = ({
  title,
  subtitle,
  verticalCenter = false,
  children,
}: Props) => {
  const { isOpen } = useSidebar();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={title}
        variants={fadeVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className={`content-layout ${isOpen ? "sidebar--open" : "sidebar--close"}`}
      >
        <h1 className="content-layout__title">{title}</h1>
        <p className="content-layout__subtitle">{subtitle}</p>
        <div
          className={`content-layout__content ${verticalCenter ? "content-layout__content--centered" : ""}`}
        >
          {children}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContentLayout;
