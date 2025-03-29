import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { IoLogoLinkedin, IoLogoInstagram } from "react-icons/io5";
import MobileMenu from "./MobileMenu";

import { useTypingEffect } from "../../hooks/useTypingEffect";

import "./Layout.scss";
import Header from "./Header";
import Footer from "./Footer";
import BackdropGlowingEffect from "../../components/backdropGlowingEffect/BackdropGlowingEffect";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const location = useLocation();

  const isAboutPage = location.pathname === "/about";

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
              <NavLink className="nav-link" to={"/"}>
                _hello
              </NavLink>
              <NavLink className="nav-link" to={"/about"}>
                _about-me
              </NavLink>
              <NavLink className="nav-link" to={"/projects"}>
                _projects
              </NavLink>
            </div>
          </div>

          <NavLink className="nav-link nav-link-right" to="/contacts">
            _contacts
          </NavLink>
          <MobileMenu
            sidebarLinks={
              isAboutPage
                ? [
                    <NavLink className="nav-link" to={"/"}>
                      _bio
                    </NavLink>,
                  ]
                : []
            }
            isOpen={false}
            navLinks={[
              <NavLink className="nav-link" to={"/"}>
                _hello
              </NavLink>,
              <NavLink className="nav-link" to={"/about"}>
                _about-me
              </NavLink>,
              <NavLink className="nav-link" to={"/projects"}>
                _projects
              </NavLink>,
              <NavLink className="nav-link" to="/contacts">
                _contacts
              </NavLink>,
            ]}
          />
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
