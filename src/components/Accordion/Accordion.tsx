import { useState, useRef, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

import "./Accordion.scss";

type Props = {
  isExpanded?: boolean;
  headerText: string;
  children: React.ReactNode;
};

const Accordion = ({ isExpanded = true, headerText, children }: Props) => {
  const [expanded, setExpanded] = useState<boolean>(isExpanded);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<string>("0px");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(expanded ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [expanded, children]);

  const expandHandler = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div
      className={`accordion ${expanded ? "accordion--expanded" : "accordion--closed"}`}
    >
      <div onClick={expandHandler} className="accordion__header">
        {headerText}
        <IoIosArrowUp />
      </div>
      <div
        className="accordion__content"
        ref={contentRef}
        style={{
          maxHeight: height,
          opacity: expanded ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 300ms ease, opacity 300ms ease",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
