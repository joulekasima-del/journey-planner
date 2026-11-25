import React from "react";

export function Switch({ checked, onChange, label }) {
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontFamily: "var(--font-body)", cursor: "pointer" }}>
      <span
        onClick={() => onChange && onChange(!checked)}
        style={{
          width: 40, height: 24, borderRadius: "var(--radius-pill)",
          background: checked ? "var(--brand-primary)" : "var(--path-stone)",
          position: "relative", transition: "background var(--duration-base) var(--ease-standard)", flexShrink: 0,
        }}
      >
        <span style={{
          position: "absolute", top: 3, left: checked ? 19 : 3,
          width: 18, height: 18, borderRadius: "50%", background: "var(--white)",
          boxShadow: "var(--shadow-sm)", transition: "left var(--duration-base) var(--ease-standard)",
        }} />
      </span>
      {label && <span style={{ font: "var(--text-body-md)", color: "var(--text-primary)" }}>{label}</span>}
    </label>
  );
}
