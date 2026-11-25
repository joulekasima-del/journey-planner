import React from "react";

export function Checkbox({ label, checked, onChange }) {
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontFamily: "var(--font-body)", cursor: "pointer" }}>
      <span
        onClick={() => onChange && onChange(!checked)}
        style={{
          width: 20, height: 20, borderRadius: "6px",
          border: checked ? "1.5px solid var(--brand-primary)" : "1.5px solid var(--border-hairline-strong)",
          background: checked ? "var(--brand-primary)" : "var(--surface-card)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "var(--text-on-brand)", fontSize: 13, flexShrink: 0,
          transition: "background var(--duration-fast) var(--ease-standard)",
        }}
      >
        {checked ? "✓" : ""}
      </span>
      <span style={{ font: "var(--text-body-md)", color: "var(--text-primary)" }}>{label}</span>
    </label>
  );
}
