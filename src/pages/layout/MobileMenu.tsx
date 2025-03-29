import React, { useState, useRef, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

type Props = {
  navLinks: React.ReactNode[];
  sidebarLinks: React.ReactNode[];
  isOpen?: boolean;
};

const MobileMenu = ({ navLinks, sidebarLinks, isOpen = false }: Props) => {
  const [expanded, setExpanded] = useState<boolean>(isOpen);
  const [showSidebarLinks, setShowSidebarLinks] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [dropdownHeight, setDropdownHeight] = useState<number>(0);

  const expandMenuHandler = () => {
    setExpanded((prev) => !prev);
    setShowSidebarLinks(false);
  };

  const closeMenuHandler = () => {
    setExpanded(false);
    setShowSidebarLinks(false);
  };

  useEffect(() => {
    if (showSidebarLinks && dropdownRef.current) {
      const scrollHeight = dropdownRef.current.scrollHeight;
      setDropdownHeight(scrollHeight);
    } else {
      setDropdownHeight(0);
    }
  }, [showSidebarLinks]);

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
      {expanded && (
        <div className="mobile-menu__menu">
          <div onClick={closeMenuHandler}>{navLinks[0]}</div>

          {/* _about-me as dropdown trigger */}
          <div
            className={`mobile-menu__dropdown-trigger ${showSidebarLinks ? "mobile-menu__dropdown-trigger--open" : "mobile-menu__dropdown-trigger--close"}`}
            onClick={() => setShowSidebarLinks((prev) => !prev)}
          >
            _about-me
          </div>

          {/* Animated Dropdown */}
          <div
            className={`mobile-menu__sidebar ${showSidebarLinks ? "mobile-menu__sidebar--open" : "mobile-menu__sidebar--close"}`}
            style={{
              height: dropdownHeight,
              overflow: "hidden",
              transition: "height 0.3s ease",
            }}
            ref={dropdownRef}
          >
            <div>
              {sidebarLinks.map((link, index) => (
                <div key={index} onClick={closeMenuHandler}>
                  {link}
                </div>
              ))}
            </div>
          </div>

          <div onClick={closeMenuHandler}>{navLinks[2]}</div>
          <div onClick={closeMenuHandler}>{navLinks[3]}</div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
