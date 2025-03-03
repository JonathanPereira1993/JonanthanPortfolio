import React from "react";
import "./Input.scss";

type Props = React.InputHTMLAttributes<HTMLElement> & {
  label: string;
};

const Input = ({ label, ...props }: Props) => {
  return (
    <div className="input-container">
      <label className="input-container__label">{label}</label>
      <input className="input-container__input" {...props}></input>
    </div>
  );
};

export default Input;
