import React from "react";
import { useState } from "react";
import { LuPanelLeftOpen, LuPanelRightOpen } from "react-icons/lu";

import "./Sidebar.scss";

type Props = {
  children?: React.ReactNode;
  open: boolean;
};

const Sidebar = ({ children, open = false }: Props) => {
  const [sidebarOpened, setSidebarOpened] = useState(open);

  const onOpenSidebarHandler = () => {
    setSidebarOpened((prev) => !prev);
  };
  return (
    <div
      className={`sidebar ${
        sidebarOpened ? "sidebar-opened" : "sidebar-closed"
      }`}
    >
      <div onClick={onOpenSidebarHandler} className="sidebar-toggle">
        {sidebarOpened ? (
          <LuPanelLeftOpen title="Close sidebar" size={24} />
        ) : (
          <LuPanelRightOpen title="Open sidebar" size={24} />
        )}
      </div>
      <div className="sidebar-content">{children}</div>
    </div>
  );
};

export default Sidebar;
