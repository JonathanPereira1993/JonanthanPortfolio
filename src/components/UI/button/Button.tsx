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
  children: React.ReactNode;
  type?: ButtonType;
};

export default function Button({
  children,
  type = "primary",
  ...props
}: Props) {
  return (
    <motion.button
      disabled={type === "disabled"}
      whileTap={{ scale: 0.98 }}
      className={`btn btn-${type}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
