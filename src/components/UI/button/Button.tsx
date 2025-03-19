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
};

export default function Button({
  children,
  onClick,
  type = "primary",
  size = "medium",
  ...props
}: Props) {
  return (
    <motion.button
      onClick={onClick}
      disabled={type === "disabled"}
      whileTap={{ scale: 0.99, opacity: 0.8 }}
      className={`btn btn-${type} btn-${size}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
