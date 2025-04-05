import { useState, useRef, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { IoMdArrowDropup } from "react-icons/io";
import { useLocation, NavLink, Link } from "react-router-dom";

import "./MobileMenu.scss";
import { NavItem } from "../../../Types/types";

type Props = {
  navLinks: NavItem[];
  isOpen?: boolean;
};

const MobileMenu = ({ navLinks, isOpen = false }: Props) => {
  const [expanded, setExpanded] = useState(isOpen);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [height, setHeight] = useState("0px");
  const location = useLocation();

  const activeSection = new URLSearchParams(location.search).get("section");

  const toggleMenu = () => {
    setExpanded((prev) => {
      const willExpand = !prev;

      if (willExpand) {
        setActiveDropdown("about-page");
      } else {
        setActiveDropdown(null);
      }

      return willExpand;
    });

    setHeight("0px");
  };

  const toggleDropdown = (id: string) => {
    setActiveDropdown((prev) => (prev === id ? null : id));
  };

  const isSubItemActive = (subPath: string) => {
    if (!activeSection) return false;
    return activeSection.toLowerCase() === subPath.toLowerCase();
  };

  useEffect(() => {
    const el = activeDropdown ? dropdownRefs.current[activeDropdown] : null;
    if (el) {
      setHeight(`${el.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [activeDropdown]);

  return (
    <div className={`mobile-menu ${expanded ? "mobile-menu--expanded" : ""}`}>
      <div className="mobile-menu__action" onClick={toggleMenu}>
        {expanded ? <IoClose size={24} /> : <RxHamburgerMenu size={24} />}
      </div>

      <div className="mobile-menu__menu">
        {navLinks.map((item) => {
          const isOpen = activeDropdown === item.id;

          if (item.hasSubmenu) {
            console.log({
              activeSection,
              subPaths: item.sidebar.map((s) => s.path),
            });
            return (
              <div key={item.id}>
                <div
                  className={`mobile-menu__dropdown-trigger ${isOpen ? "open" : ""}`}
                  onClick={() => toggleDropdown(item.id)}
                >
                  {item.label}
                  <IoMdArrowDropup />
                </div>

                <div
                  className="mobile-menu__dropdown"
                  ref={(el) => {
                    dropdownRefs.current[item.id] = el;
                  }}
                  style={{
                    height: isOpen ? height : "0px",
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
