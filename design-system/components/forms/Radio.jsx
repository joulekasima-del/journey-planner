import React from "react";

export function Radio({ label, checked, onChange, name }) {
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontFamily: "var(--font-body)", cursor: "pointer" }}>
      <span
        onClick={() => onChange && onChange()}
        role="radio"
        aria-checked={checked}
        style={{
          width: 20, height: 20, borderRadius: "50%",
          border: checked ? "1.5px solid var(--brand-primary)" : "1.5px solid var(--border-hairline-strong)",
          background: "var(--surface-card)",
          display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
        }}
      >
        {checked && <span style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--brand-primary)" }} />}
      </span>
      <span style={{ font: "var(--text-body-md)", color: "var(--text-primary)" }}>{label}</span>
    </label>
  );
}
