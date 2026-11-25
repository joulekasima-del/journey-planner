import React from "react";

export function Select({ label, options = [], value, onChange }) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontFamily: "var(--font-body)" }}>
      {label && <span style={{ font: "var(--text-label)", color: "var(--text-secondary)" }}>{label}</span>}
      <select
        value={value}
        onChange={onChange}
        style={{
          font: "var(--text-body-md)",
          fontFamily: "var(--font-body)",
          padding: "12px 16px",
          borderRadius: "var(--radius-sm)",
          border: "1px solid var(--border-hairline-strong)",
          background: "var(--surface-card)",
          color: "var(--text-primary)",
          outline: "none",
        }}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </label>
  );
}
