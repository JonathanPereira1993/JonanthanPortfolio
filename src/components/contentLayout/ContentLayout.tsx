import React from "react";
import "./ContentLayout.scss";

type Props = {
  title: string;
  children: React.ReactNode;
};

const ContentLayout = ({ title, children }: Props) => {
  return (
    <div className="content-layout">
      <h1 className="content-layout__title">{title}</h1>
      <div className="content-layout__content">{children}</div>
    </div>
  );
};

export default ContentLayout;
