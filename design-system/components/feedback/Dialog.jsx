import React from "react";

export function Dialog({ open, title, children, onClose, actions }) {
  if (!open) return null;
  return (
    <div style={{
      position: "fixed", inset: 0, background: "color-mix(in oklch, var(--forest-shade) 55%, transparent)",
      display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100,
    }} onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} style={{
        background: "var(--surface-card)", borderRadius: "var(--radius-lg)", padding: "24px",
        width: 380, maxWidth: "90vw", boxShadow: "var(--shadow-lg)", fontFamily: "var(--font-body)",
      }}>
        <div style={{ font: "var(--text-heading-md)", color: "var(--text-primary)", marginBottom: 10 }}>{title}</div>
        <div style={{ font: "var(--text-body-md)", color: "var(--text-secondary)", marginBottom: 20 }}>{children}</div>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>{actions}</div>
      </div>
    </div>
  );
}
