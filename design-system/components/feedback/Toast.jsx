import React from "react";
import { Icon } from "../core/Icon.jsx";

export function Toast({ message, tone = "neutral", onClose }) {
  const tones = {
    neutral: { bg: "var(--forest-shade)", fg: "var(--mist-white)" },
    success: { bg: "var(--status-success-text)", fg: "var(--mist-white)", icon: "verified" },
    danger: { bg: "var(--status-danger-text)", fg: "var(--mist-white)" },
  };
  const t = tones[tone] || tones.neutral;
  return (
    <div style={{
      background: t.bg, color: t.fg, borderRadius: "var(--radius-md)",
      padding: "14px 18px", display: "flex", alignItems: "center", gap: "14px",
      boxShadow: "var(--shadow-lg)", fontFamily: "var(--font-body)", font: "var(--text-body-sm)",
      maxWidth: 360,
    }}>
      {t.icon && <Icon name={t.icon} size={18} color={t.fg} />}
      <span style={{ flex: 1 }}>{message}</span>
      {onClose && <button onClick={onClose} aria-label="Dismiss" style={{ background: "none", border: "none", color: "inherit", opacity: 0.7, cursor: "pointer", fontSize: 16 }}>×</button>}
    </div>
  );
}
