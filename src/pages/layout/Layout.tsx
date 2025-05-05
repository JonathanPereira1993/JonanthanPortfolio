import { NavLink } from "react-router-dom";

import { IoLogoLinkedin, IoLogoInstagram } from "react-icons/io5";
import MobileMenu from "./MobileMenu/MobileMenu";

import { useTypingEffect } from "../../hooks/useTypingEffect";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import BackdropGlowingEffect from "../../components/BackdropGlowingEffect/BackdropGlowingEffect";

import { portfolioNavLinks } from "../../constants/Constants";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <BackdropGlowingEffect />
      <div className="layout-main">
        <Header>
          <div>
            <div
              className="nav-link nav-logo"
              title="My name is Jonathan Pereira"
            >
              {useTypingEffect({
                text: "jonathan-pereira",
                cursorBlink: false,
                speed: 100,
                loop: false,
                cursorStopDelay: 2000,
              })}
            </div>
            <div className="nav-links-desktop">
              {portfolioNavLinks.map((item, index) => (
                <NavLink key={index} className="nav-link" to={item.path}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          <NavLink className="nav-link nav-link-right" to="/contacts">
            _contacts
          </NavLink>

          {/* Mobile menu */}
          <MobileMenu navLinks={portfolioNavLinks} isOpen={false} />
        </Header>
        <main className="layout-main__content">{children}</main>
        <Footer>
          <div>find me in:</div>
          <a
            href="#"
            title="Jonathan's Linkedin profile"
            className="footer-link"
          >
            <IoLogoLinkedin size={24} />
          </a>
          <a
            href="#"
            title="Jonathan's Instagram profile"
            className="footer-link"
          >
            <IoLogoInstagram size={24} />
          </a>
        </Footer>
      </div>
    </>
  );
}
