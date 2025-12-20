import React from "react";

import "./Button.scss";

import { motion } from "framer-motion";

type ButtonSize = "small" | "medium" | "big";

type ButtonType =
  | "primary"
  | "default"
  | "ghost"
  | "success"
  | "error"
  | "warning"
  | "disabled"
  | "link";

type Props = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  type?: ButtonType;
  size?: ButtonSize;
  title?: string;
  className?: string;
};

export default function Button({
  children,
  onClick,
  type = "primary",
  size = "medium",
  title,
  className,
  ...props
}: Props) {
  return (
    <motion.button
      onClick={onClick}
      title={title}
      disabled={type === "disabled"}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.92 }}
      transition={{ duration: 0.05, ease: "linear" }}
      className={`btn btn-${type} btn-${size} ${className ? className : ""}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
