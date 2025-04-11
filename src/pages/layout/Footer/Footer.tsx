import React from "react";

type Props = {
  children?: React.ReactNode;
};

const Footer = ({ children }: Props) => {
  return <footer className="layout-main__footer">{children}</footer>;
};

export default Footer;
