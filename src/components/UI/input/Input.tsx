import React from "react";
import "./Input.scss";

type Props = React.InputHTMLAttributes<HTMLElement> & {
  label: string;
  valid?: boolean;
};

const Input = ({ label, valid = true, ...props }: Props) => {
  return (
    <div className={`input-container ${!valid && "input-container--invalid"}`}>
      <label className="input-container__label">{label}</label>
      <input className="input-container__input" {...props}></input>
    </div>
  );
};

export default Input;
