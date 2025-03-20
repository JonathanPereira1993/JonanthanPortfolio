import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

type Props = {
  navLinks: React.ReactNode[];
  isOpen?: boolean;
};

const MobileMenu = ({ navLinks, isOpen = false }: Props) => {
  const [expanded, setExpanded] = useState<boolean>(isOpen);

  const expandMenuHandler = () => {
    setExpanded((prev) => !prev);
  };

  const closeMenuHandler = () => {
    setExpanded(false);
  };

  return (
    <div
      className={`mobile-menu ${expanded ? "mobile-menu--expanded" : ""}`}
      data-expanded={expanded}
    >
      {/* Hamburger Button */}
      <div className="mobile-menu__action" onClick={expandMenuHandler}>
        {expanded ? <IoClose size={24} /> : <RxHamburgerMenu size={24} />}
      </div>

      {/* Menu Items */}
      <div className="mobile-menu__menu">
        {navLinks.map((link, index) => (
          <div key={index} onClick={closeMenuHandler}>
            {link}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
