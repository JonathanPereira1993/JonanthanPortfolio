import { useState, useRef, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { useLocation, NavLink, Link } from "react-router-dom";
import useScreenSize from "../../../hooks/useScreenSize";

import { NavItem } from "../../../Types/types";

type Props = {
  navLinks: NavItem[];
  isOpen?: boolean;
};

const MobileMenu = ({ navLinks, isOpen = false }: Props) => {
  const [expanded, setExpanded] = useState(isOpen);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dropdownHeights, setDropdownHeights] = useState<
    Record<string, string>
  >({});
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const location = useLocation();
  const screenSize = useScreenSize("width", 1024);

  const activeSection = new URLSearchParams(location.search).get("section");

  const toggleMenu = () => {
    setExpanded((prev) => !prev);
  };

  const toggleDropdown = (id: string) => {
    setActiveDropdown((prev) => (prev === id ? null : id));
  };

  const isSubItemActive = (subPath: string) => {
    if (!activeSection) return false;
    return activeSection.toLowerCase() === subPath.toLowerCase();
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      const newHeights: Record<string, string> = {};

      navLinks.forEach((item) => {
        if (item.hasSubmenu && dropdownRefs.current[item.id]) {
          const el = dropdownRefs.current[item.id];
          const height = el?.scrollHeight;

          if (height) {
            newHeights[item.id] = `${height}px`;
          }
        }
      });

      setDropdownHeights(newHeights);
    }, 0);

    return () => clearTimeout(timeout);
  }, [navLinks, expanded]);

  useEffect(() => {
    if (screenSize) {
      setExpanded(false);
    }
  }, [screenSize]);

  useEffect(() => {
    if (!activeSection) return;

    const matchedDropdown = navLinks.find(
      (link) =>
        link.hasSubmenu &&
        link.sidebar.some(
          (item) => item.path.toLowerCase() === activeSection.toLowerCase()
        )
    );

    if (matchedDropdown) {
      setActiveDropdown(matchedDropdown.id);
    } else {
      setActiveDropdown(null);
    }
  }, [activeSection, navLinks]);

  return (
    <div className={`mobile-menu ${expanded ? "mobile-menu--expanded" : ""}`}>
      <div className="mobile-menu__action" onClick={toggleMenu}>
        {expanded ? <IoClose size={28} /> : <RxHamburgerMenu size={28} />}
      </div>

      <div className="mobile-menu__menu">
        {navLinks.map((item) => {
          const isOpen = activeDropdown === item.id;

          if (item.hasSubmenu) {
            return (
              <div key={item.id}>
                <div
                  className={`mobile-menu__dropdown-trigger ${isOpen ? "open" : ""}`}
                  onClick={() => toggleDropdown(item.id)}
                >
                  {item.label}
                  <IoMdArrowDropdown />
                </div>

                <div
                  className="mobile-menu__dropdown"
                  ref={(el) => {
                    dropdownRefs.current[item.id] = el;
                  }}
                  style={{
                    height: isOpen ? dropdownHeights[item.id] || "auto" : "0px",
                    overflow: "hidden",
                    transition: "height 0.3s ease",
                  }}
                >
                  <div className="mobile-menu__dropdown__content">
                    {item.sidebar.map((subItem) => (
                      <Link
                        key={subItem.id}
                        to={`${item.path}?section=${subItem.path}`}
                        onClick={toggleMenu}
                        className={`nav-link ${isSubItemActive(subItem.path) ? "active" : ""}`}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          }

          return (
            <NavLink
              className="nav-link"
              key={item.id}
              to={item.path}
              onClick={toggleMenu}
            >
              {item.label}
            </NavLink>
          );
        })}
        <NavLink
          className="nav-link"
          key="contact-page"
          to="/contacts"
          onClick={toggleMenu}
        >
          _contact
        </NavLink>
      </div>
    </div>
  );
};

export default MobileMenu;
