import React from "react";

import "./Header.scss";

type Props = {
  children: React.ReactNode;
};

const Header = ({ children }: Props) => {
  return (
    <header className="header">
      <nav className="nav-links">{children}</nav>
    </header>
  );
};

export default Header;
