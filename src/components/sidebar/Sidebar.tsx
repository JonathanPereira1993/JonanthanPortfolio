import React from "react";
import { useState } from "react";
import { LuPanelLeftOpen, LuPanelRightOpen } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";

import "./Sidebar.scss";

type Props = {
  children?: React.ReactNode;
  open?: boolean;
  bottomAction?: React.ReactNode;
};

const widthVariants = {
  open: {
    width: "var(--sidebar-width)",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  closed: {
    width: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const toggleVariants = {
  open: {
    top: "20px",
    right: "10px",
    transform: "translateX(0px)",
    transition: { duration: 0.3, ease: "easeInOut", delay: 0.4 },
  },
  closed: {
    top: "20px",
    right: "0px",
    transform: "translateX(25px)",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const backgroundVariants = {
  open: {
    opacity: 0,
    width: 0,
    transition: { duration: 0.3, ease: "easeInOut", delay: 0.2 },
  },
  closed: {
    opacity: 1,
    width: "36px",
    backgroundColor: "var(--primary-background)",
    transformOrigin: "left",
    transition: { duration: 0.3, ease: "easeInOut", delay: 0.4 },
  },
};

const Sidebar = ({ children, open = false, bottomAction }: Props) => {
  const [sidebarOpened, setSidebarOpened] = useState(open);

  const onOpenSidebarHandler = () => {
    setSidebarOpened((prev) => !prev);
  };
  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={widthVariants}
        initial="closed"
        animate={sidebarOpened ? "open" : "closed"}
        className={`sidebar ${
          sidebarOpened ? "sidebar-opened" : "sidebar-closed"
        }`}
      >
        <motion.div
          className="sidebar-toggle"
          onClick={onOpenSidebarHandler}
          variants={toggleVariants}
          animate={sidebarOpened ? "open" : "closed"}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            className="sidebar-toggle-bg"
            variants={backgroundVariants}
            animate={sidebarOpened ? "open" : "closed"}
          />

          {!sidebarOpened ? (
            <LuPanelLeftOpen title="Open sidebar" size={24} />
          ) : (
            <LuPanelRightOpen title="Close sidebar" size={24} />
          )}
        </motion.div>
        <div className="sidebar-content">
          <div>{children}</div>
          {bottomAction}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Sidebar;
