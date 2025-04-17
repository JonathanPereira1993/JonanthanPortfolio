import React from "react";
import "./Modal.scss";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import { IoCloseCircleOutline } from "react-icons/io5";

import ReactDOM from "react-dom";

type Props = {
  children: React.ReactNode;
  alt: string;
  modalTitle: string;
  showTitle: boolean;
  onClose: () => void;
};

// Animations
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const modalVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.35,
      type: "spring",
      damping: 20,
      stiffness: 300,
    },
  },
  exit: {
    opacity: 0,
    y: 50,
    scale: 0.95,
    transition: { duration: 0.2 },
  },
};

const Modal = ({ modalTitle, showTitle = true, children, onClose }: Props) => {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const modalRoot = document.getElementById("modal");

  if (!modalRoot) {
    throw new Error("Missing #modal in index.html");
  }

  useEffect(() => {
    const handleKey = (e: globalThis.KeyboardEvent): void => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        const focusableElements =
          modalRef.current?.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
        if (!focusableElements || focusableElements.length < 1) return;

        const first = focusableElements[0];
        const last = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKey);
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <>
      <motion.div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        onClick={onClose}
      >
        <motion.div
          className="modal__content"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalVariants}
          ref={modalRef}
          onClick={(e) => e.stopPropagation()}
        >
          {showTitle ? (
            <h2 className="modal__content-title">{modalTitle}</h2>
          ) : (
            <span id="modal-description" className="sr-only">
              {modalTitle}
            </span>
          )}

          <button
            ref={closeButtonRef}
            className="modal__close"
            onClick={onClose}
            aria-label="Close modal"
          >
            <IoCloseCircleOutline size={40} />
          </button>
          <div className="modal__content-inner">{children}</div>
        </motion.div>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={backdropVariants}
        className="modal__overlay"
      />
    </>,
    modalRoot
  );
};

export default Modal;
