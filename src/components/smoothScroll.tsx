"use client"; // This makes it a client component

import React, { ElementType, ReactNode } from "react";

interface ScrollLinkProps {
  sectionId: string;            // The ID of the section to scroll to
  as?: ElementType;             // The HTML tag or component to render as
  children: ReactNode;          // The content inside the element
  [key: string]: any;           // Allow any other props (e.g., className, style, etc.)
}

const ScrollLink: React.FC<ScrollLinkProps> = ({ sectionId, as: Component = "div", children, ...props }) => {
  const handleScroll = () => {
    const section = document.querySelector(`#${sectionId}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Component onClick={handleScroll} {...props}>
      {children}
    </Component>
  );
};

export default ScrollLink;
