import React from "react";

export function IconButton({ icon, label, size = 40, active = false, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      aria-label={label}
      title={label}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: size,
        height: size,
        borderRadius: "var(--radius-pill)",
        border: active ? "1.5px solid var(--brand-primary)" : "1px solid var(--border-hairline)",
        background: active ? "var(--bg-canopy)" : hover ? "var(--surface-sunken)" : "var(--surface-card)",
        color: active ? "var(--brand-primary-active)" : "var(--text-primary)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "background var(--duration-fast) var(--ease-standard)",
        fontSize: size * 0.45,
        lineHeight: 1,
      }}
    >
      {icon}
    </button>
  );
}
