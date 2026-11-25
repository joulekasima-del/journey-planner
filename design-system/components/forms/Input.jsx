import React from "react";

export function Input({ label, placeholder, value, onChange, hint, error, type = "text" }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontFamily: "var(--font-body)" }}>
      {label && <span style={{ font: "var(--text-label)", color: "var(--text-secondary)" }}>{label}</span>}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          font: "var(--text-body-md)",
          fontFamily: "var(--font-body)",
          padding: "12px 16px",
          borderRadius: "var(--radius-sm)",
          border: error ? "1.5px solid var(--status-danger)" : focus ? "1.5px solid var(--brand-primary)" : "1px solid var(--border-hairline-strong)",
          outline: "none",
          background: "var(--surface-card)",
          color: "var(--text-primary)",
          boxShadow: focus ? "var(--shadow-focus)" : "none",
          transition: "box-shadow var(--duration-fast) var(--ease-standard), border var(--duration-fast) var(--ease-standard)",
        }}
      />
      {(hint || error) && (
        <span style={{ font: "var(--text-caption)", color: error ? "var(--status-danger)" : "var(--text-tertiary)" }}>
          {error || hint}
        </span>
      )}
    </label>
  );
}
