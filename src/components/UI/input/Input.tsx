import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  as?: "input";
};

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  as: "textarea";
};

type Props = (InputProps | TextareaProps) & {
  label: string;
  valid?: boolean;
};

const Input = ({ label, valid = true, as = "input", ...props }: Props) => {
  return (
    <div className={`input-container ${!valid && "input-container--invalid"}`}>
      <label className="input-container__label">{label}</label>
      {as === "textarea" ? (
        <textarea
          className="input-container__input input-container__textarea"
          {...(props as TextareaProps)}
        />
      ) : (
        <input className="input-container__input" {...(props as InputProps)} />
      )}
    </div>
  );
};

export default Input;
