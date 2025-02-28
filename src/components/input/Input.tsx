import React from "react";
import "./Input.scss";

type Props = React.InputHTMLAttributes<HTMLElement> & {
  label: string;
};

const Input = ({ label, ...props }: Props) => {
  return (
    <>
      <label>{label}</label>
      <input {...props}></input>
    </>
  );
};

export default Input;
