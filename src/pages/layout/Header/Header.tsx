import React from "react";

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
