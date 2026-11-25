const { Badge } = window.JPProductFoundationJourneyPlannerDesignSystem_e30f18;

function PhoneFrame({ children, offline }) {
  return (
    <div style={{ width: 390, borderRadius: 40, border: "8px solid var(--forest-shade)", overflow: "hidden", background: "var(--surface-page)", boxShadow: "var(--shadow-lg)", fontFamily: "var(--font-body)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 20px 4px", font: "var(--text-mono-sm)", color: "var(--text-primary)" }}>
        <span>9:41</span>
        <span>{offline ? "Offline" : "Journey Planner"}</span>
      </div>
      <div style={{ height: 700, overflowY: "auto" }}>{children}</div>
    </div>
  );
}
window.PhoneFrame = PhoneFrame;
