import React from "react";
import { NavLink } from "react-router";

import "./Layout.scss";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="layout-main">
      <Header>
        <NavLink className="nav-link" to="/">
          _hello
        </NavLink>
        <NavLink className="nav-link" to="/about">
          _about-me
        </NavLink>
        <NavLink className="nav-link" to="/projects">
          _projects
        </NavLink>
      </Header>
      <main>{children}</main>
    </div>
  );
}
