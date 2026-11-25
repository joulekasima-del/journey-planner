import React from "react";
import { Icon } from "../core/Icon.jsx";

const tones = {
  neutral: { bg: "var(--status-neutral-bg)", fg: "var(--status-neutral-text)", dot: "var(--status-neutral)" },
  success: { bg: "var(--status-success-bg)", fg: "var(--status-success-text)", dot: "var(--status-success)", icon: "ready" },
  info: { bg: "var(--status-info-bg)", fg: "var(--status-info-text)", dot: "var(--status-info)" },
  attention: { bg: "var(--status-attention-bg)", fg: "var(--status-attention-text)", dot: "var(--status-attention)", icon: "attention" },
  danger: { bg: "var(--status-danger-bg)", fg: "var(--status-danger-text)", dot: "var(--status-danger)" },
};

export function Badge({ tone = "neutral", children, dot = true }) {
  const t = tones[tone] || tones.neutral;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "5px 12px",
        borderRadius: "var(--radius-pill)",
        background: t.bg,
        color: t.fg,
        font: "var(--text-label)",
        fontFamily: "var(--font-body)",
        letterSpacing: "var(--tracking-label)",
      }}
    >
      {dot && (t.icon ? <Icon name={t.icon} size={14} color={t.dot} /> : <span style={{ width: 7, height: 7, borderRadius: "50%", background: t.dot, flexShrink: 0 }} />)}
      {children}
    </span>
  );
}
