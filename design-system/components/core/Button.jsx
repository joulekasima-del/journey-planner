import React from "react";

const sizes = {
  sm: { padding: "8px 14px", font: "var(--text-label)" },
  md: { padding: "11px 20px", font: "var(--text-body-md)" },
  lg: { padding: "14px 26px", font: "var(--text-heading-sm)" },
};

const variants = {
  primary: { background: "var(--brand-primary)", color: "var(--text-on-brand)", border: "1px solid transparent" },
  secondary: { background: "transparent", color: "var(--brand-primary-active)", border: "1.5px solid var(--brand-primary)" },
  ghost: { background: "transparent", color: "var(--text-primary)", border: "1px solid transparent" },
  danger: { background: "var(--status-danger)", color: "var(--text-on-brand)", border: "1px solid transparent" },
};

export function Button({ variant = "primary", size = "md", disabled = false, children, onClick, style }) {
  const v = variants[variant] || variants.primary;
  const s = sizes[size] || sizes.md;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const bg = disabled
    ? "var(--surface-sunken)"
    : active
    ? variant === "primary" ? "var(--brand-primary-active)" : v.background
    : hover
    ? variant === "primary" ? "var(--brand-primary-hover)" : "var(--bg-canopy)"
    : v.background;
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{
        fontFamily: "var(--font-body)",
        font: s.font,
        padding: s.padding,
        borderRadius: "var(--radius-pill)",
        cursor: disabled ? "not-allowed" : "pointer",
        color: disabled ? "var(--text-tertiary)" : v.color,
        background: bg,
        border: v.border,
        opacity: disabled ? 0.6 : 1,
        transform: active && !disabled ? "scale(0.97)" : "scale(1)",
        transition: "background var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)",
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        ...style,
      }}
    >
      {children}
    </button>
  );
}
