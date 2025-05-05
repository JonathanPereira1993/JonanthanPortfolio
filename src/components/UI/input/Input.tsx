import React from "react";

import { motion, AnimatePresence } from "framer-motion";

import "./Input.scss";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  as?: "input";
};

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  as: "textarea";
};

type Props = (InputProps | TextareaProps) & {
  label: string;
  errorMessage?: string;
  valid?: boolean;
};

const Input = ({
  label,
  valid = true,
  as = "input",
  errorMessage,
  ...props
}: Props) => {
  return (
    <motion.div
      className={`input-container ${!valid && "input-container--invalid"}`}
    >
      <label className="input-container__label">{label}</label>
      {as === "textarea" ? (
        <textarea
          className="input-container__input input-container__textarea"
          {...(props as TextareaProps)}
        />
      ) : (
        <input className="input-container__input" {...(props as InputProps)} />
      )}
      <AnimatePresence>
        {!valid && errorMessage && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="error-text"
          >
            {errorMessage}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Input;
