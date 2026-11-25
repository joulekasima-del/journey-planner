import React from "react";
import { Icon } from "../core/Icon.jsx";

const iconByTone = { attention: "attention", success: "ready" };

export function ActionCard({ what, why, whatToDo, status, tone = "attention", actionLabel, onAction }) {
  const tones = {
    attention: { bg: "var(--status-attention-bg)", accent: "var(--status-attention)", text: "var(--status-attention-text)" },
    danger: { bg: "var(--status-danger-bg)", accent: "var(--status-danger)", text: "var(--status-danger-text)" },
    info: { bg: "var(--status-info-bg)", accent: "var(--status-info)", text: "var(--status-info-text)" },
    success: { bg: "var(--status-success-bg)", accent: "var(--status-success)", text: "var(--status-success-text)" },
  };
  const t = tones[tone] || tones.attention;
  const iconName = iconByTone[tone];
  return (
    <div style={{
      background: "var(--surface-card)",
      borderRadius: "var(--radius-md)",
      border: `1px solid ${t.accent}`,
      borderLeft: `4px solid ${t.accent}`,      padding: "16px 18px",
      fontFamily: "var(--font-body)",
      display: "flex", flexDirection: "column", gap: "8px",
      maxWidth: 380,
    }}>
      <div style={{ font: "var(--text-heading-sm)", color: "var(--text-primary)", display: "flex", alignItems: "center", gap: 8 }}>
        {iconName && <Icon name={iconName} size={18} color={t.accent} />}
        {what}
      </div>
      <div style={{ font: "var(--text-body-sm)", color: "var(--text-secondary)" }}>{why}</div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 4 }}>
        {status && <span style={{ font: "var(--text-caption)", color: "var(--text-tertiary)" }}>{status}</span>}
        {actionLabel && (
          <button onClick={onAction} style={{
            border: "none", background: t.bg, color: t.text, borderRadius: "var(--radius-pill)",
            padding: "7px 16px", font: "var(--text-label)", cursor: "pointer",
          }}>{actionLabel}</button>
        )}
      </div>
    </div>
  );
}
