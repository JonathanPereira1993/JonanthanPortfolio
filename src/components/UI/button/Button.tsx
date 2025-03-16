import React from "react";
import "./Button.scss";
import { motion } from "framer-motion";

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
};

export default function Button({
  children,
  onClick,
  type = "primary",
  ...props
}: Props) {
  return (
    <motion.button
      onClick={onClick}
      disabled={type === "disabled"}
      whileTap={{ scale: 0.99 }}
      className={`btn btn-${type}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
