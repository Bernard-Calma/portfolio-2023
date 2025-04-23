import React, { forwardRef } from "react";

const Link = forwardRef(({ name, label, href, onClick, active = false }, ref) => {
  return (
    <a
      ref={ref}
      className={`navLink ${name} ${active ? "active" : ""}`}
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={onClick}
    >
      {label}
    </a>
  );
});

export default Link;
