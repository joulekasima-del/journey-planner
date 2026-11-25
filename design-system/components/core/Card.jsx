import React from "react";

export function Card({ children, padding = "20px", onClick, style, variant = "solid" }) {
  const [hover, setHover] = React.useState(false);
  const isFeatured = variant === "featured";
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => onClick && setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        overflow: "hidden",
        background: isFeatured ? "var(--canopy-green)" : "var(--surface-card)",
        borderRadius: "var(--radius-lg)",
        padding,
        boxShadow: isFeatured
          ? `0 1px 0 color-mix(in oklch, var(--mist-white) 25%, transparent) inset, ${hover ? "0 8px 20px" : "0 6px 16px"} color-mix(in oklch, var(--forest-shade) 22%, transparent)`
          : hover ? "var(--shadow-md)" : "var(--shadow-sm)",
        border: isFeatured ? "none" : "1px solid var(--border-hairline)",
        color: isFeatured ? "var(--text-inverse)" : undefined,
        cursor: onClick ? "pointer" : "default",
        transition: "box-shadow var(--duration-base) var(--ease-standard)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
