import React from "react";

export function Tooltip({ label, children }) {
  const [show, setShow] = React.useState(false);
  return (
    <span style={{ position: "relative", display: "inline-flex" }}
      onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)} onBlur={() => setShow(false)}>
      {children}
      {show && (
        <span style={{
          position: "absolute", bottom: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)",
          background: "var(--forest-shade)", color: "var(--mist-white)", padding: "6px 10px",
          borderRadius: "var(--radius-sm)", font: "var(--text-caption)", whiteSpace: "nowrap",
          fontFamily: "var(--font-body)", boxShadow: "var(--shadow-md)", zIndex: 10,
        }}>{label}</span>
      )}
    </span>
  );
}
