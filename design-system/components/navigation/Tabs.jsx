import React from "react";

export function Tabs({ tabs = [], value, onChange }) {
  return (
    <div style={{ display: "flex", gap: "4px", background: "var(--surface-sunken)", borderRadius: "var(--radius-pill)", padding: "4px", width: "fit-content", fontFamily: "var(--font-body)" }}>
      {tabs.map((t) => {
        const active = t.value === value;
        return (
          <button key={t.value} onClick={() => onChange && onChange(t.value)} style={{
            border: "none", cursor: "pointer", padding: "8px 18px", borderRadius: "var(--radius-pill)",
            background: active ? "var(--surface-card)" : "transparent",
            color: active ? "var(--brand-primary-active)" : "var(--text-secondary)",
            font: active ? "600 13px var(--font-body)" : "var(--text-label)",
            boxShadow: active ? "var(--shadow-sm)" : "none",
            transition: "all var(--duration-fast) var(--ease-standard)",
          }}>{t.label}</button>
        );
      })}
    </div>
  );
}
