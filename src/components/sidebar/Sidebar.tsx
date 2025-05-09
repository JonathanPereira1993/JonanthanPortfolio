import React, { useEffect, useRef } from "react";

import "./Sidebar.scss";

import { LuPanelLeftOpen, LuPanelRightOpen } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";

import { useSidebar } from "../../Context/UseSidebar";

import useScreenSize from "../../hooks/useScreenSize";

type Props = {
  children?: React.ReactNode;
  open?: boolean;
  bottomAction?: React.ReactNode;
};

const widthVariants = {
  open: {
    width: "var(--sidebar-width)",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      type: "tween",
      damping: 30,
      stiffness: 300,
    },
  },
  closed: {
    width: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
      type: "spring",
      damping: 30,
      stiffness: 300,
    },
  },
};

const toggleVariants = {
  open: {
    right: "10px",
    transform: "translateX(-10px)",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      delay: 0.4,
    },
  },
  closed: {
    right: "0px",
    transform: "translateX(23px)",
    transition: {
      duration: 0.4,
      ease: "easeInOut",
      delay: 0.2,
    },
  },
};

const backgroundVariants = {
  open: {
    opacity: 0,
    width: "0px",
    backgroundColor: "var(--primary-background)",
    transformOrigin: "left",
    transition: { duration: 0.3, ease: "easeInOut", delay: 0.2 },
  },
  closed: {
    opacity: 1,
    width: "37px",
    backgroundColor: "var(--primary-background)",
    transformOrigin: "left",
    transition: { duration: 0.4, ease: "easeInOut", delay: 0.4 },
  },
};

const Sidebar = ({ children, bottomAction }: Props) => {
  const { isOpen, toggleSidebar, closeSidebar } = useSidebar();
  const hasMounted = useRef(false);

  const isScreenBig = useScreenSize(1620);

  const onOpenSidebarHandler = () => {
    toggleSidebar();
  };

  const prevScreenBig = useRef<boolean>(true);

  useEffect(() => {
    if (prevScreenBig.current && !isScreenBig && isOpen) {
      closeSidebar();
    }
    prevScreenBig.current = isScreenBig;
  }, [isScreenBig, closeSidebar, isOpen]);

  return (
    <>
      <AnimatePresence mode="wait">
        <div className="sidebar-wrapper">
          <motion.div
            variants={widthVariants}
            initial={hasMounted.current ? "closed" : false}
            animate={isOpen ? "open" : "closed"}
            className={`sidebar ${isOpen ? "sidebar-opened" : "sidebar-closed"}`}
          >
            <motion.div
              className="sidebar-toggle"
              onClick={onOpenSidebarHandler}
              variants={toggleVariants}
              initial={hasMounted.current ? "closed" : false}
              animate={isOpen ? "open" : "closed"}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                className="sidebar-toggle-bg"
                variants={backgroundVariants}
                initial={hasMounted.current ? "closed" : false}
                animate={isOpen ? "open" : "closed"}
              />

              {!isOpen ? (
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
        </div>
      </AnimatePresence>
      <AnimatePresence>
        {!isScreenBig && isOpen && (
          <div
            onClick={() => closeSidebar()}
            className="sidebar-backdrop"
          ></div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
