import React from "react";
import "./Button.scss";

type Props = React.ButtonHTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
};

export default function Button({ children }: Props) {
  return <button>{children}</button>;
}
