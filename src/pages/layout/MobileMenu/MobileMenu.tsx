import React, { useState, useRef, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { IoMdArrowDropup } from "react-icons/io";

import "./MobileMenu.scss";

type Props = {
  navLinks: React.ReactNode[];
  sidebarLinks: React.ReactNode[];
  isOpen?: boolean;
};

const MobileMenu = ({ navLinks, sidebarLinks, isOpen = false }: Props) => {
  const [expanded, setExpanded] = useState(isOpen);
  const [showSidebarLinks, setShowSidebarLinks] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  const expandMenuHandler = () => {
    setExpanded((prev) => !prev);
    setShowSidebarLinks(false);
    setHeight("0px");
  };

  const closeMenuHandler = () => {
    setExpanded(false);
    setShowSidebarLinks(false);
    setHeight("0px");
  };

  useEffect(() => {
    if (!wrapperRef.current) return;

    if (showSidebarLinks) {
      setTimeout(() => {
        const scrollHeight = wrapperRef.current?.scrollHeight || 0;
        setHeight(`${scrollHeight}px`);
      }, 0);
    } else {
      setHeight("0px");
    }
  }, [showSidebarLinks, sidebarLinks]);

  return (
    <div
      className={`mobile-menu ${expanded ? "mobile-menu--expanded" : ""}`}
      data-expanded={expanded}
    >
      <div className="mobile-menu__action" onClick={expandMenuHandler}>
        {expanded ? <IoClose size={24} /> : <RxHamburgerMenu size={24} />}
      </div>

      {expanded && (
        <div className="mobile-menu__menu">
          <div onClick={closeMenuHandler}>{navLinks[0]}</div>

          {/* About dropdown trigger */}
          <div
            className={`mobile-menu__dropdown-trigger ${showSidebarLinks ? "open" : ""}`}
            onClick={() => setShowSidebarLinks((prev) => !prev)}
          >
            _about-me
            <IoMdArrowDropup />
          </div>

          {/* Animated Dropdown */}
          <div
            className="mobile-menu__sidebar"
            style={{
              height,
              overflow: "hidden",
              transition: "height 0.3s ease",
            }}
          >
            <div
              ref={wrapperRef}
              className="mobile-menu__sidebar__navlinks"
              style={{
                paddingTop: "var(--space-base)",
                paddingBottom: "var(--space-base)",
              }}
            >
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
