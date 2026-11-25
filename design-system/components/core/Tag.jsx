import React from "react";

export function Tag({ children, onRemove, tone = "quiet" }) {
  const bg = tone === "quiet" ? "var(--surface-sunken)" : "var(--bg-canopy)";
  const fg = tone === "quiet" ? "var(--text-secondary)" : "var(--brand-primary-active)";
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "4px 10px",
        borderRadius: "var(--radius-sm)",
        background: bg,
        color: fg,
        font: "var(--text-body-sm)",
        fontFamily: "var(--font-body)",
      }}
    >
      {children}
      {onRemove && (
        <button
          onClick={onRemove}
          aria-label="Remove"
          style={{ border: "none", background: "none", cursor: "pointer", color: "inherit", opacity: 0.6, padding: 0, font: "inherit" }}
        >
          ×
        </button>
      )}
    </span>
  );
}
