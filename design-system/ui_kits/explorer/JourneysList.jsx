const { Badge, Button, Card } = window.JPProductFoundationJourneyPlannerDesignSystem_e30f18;

const JOURNEYS = [
  { name: "Northern Thailand Loop", dates: "12–22 Oct", days: 6, readiness: "success", label: "Ready", accommodation: "6/6 nights covered" },
  { name: "Isaan Slow Weekend", dates: "Undated", days: 3, readiness: "attention", label: "Needs Attention", accommodation: "1 night uncovered" },
  { name: "First Bangkok visit", dates: "Exploring", days: 0, readiness: "neutral", label: "Exploring", accommodation: "Not planned yet" },
];

function JourneysList({ desktop, onOpenDay }) {
  return (
    <div style={{ padding: desktop ? "32px 48px" : "16px 18px", display: "flex", flexDirection: "column", gap: 18 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ font: "var(--text-display-md)", fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>Your Journeys</div>
        <Button size={desktop ? "md" : "sm"}>Create Journey</Button>
      </div>
      <div style={{ display: desktop ? "grid" : "flex", gridTemplateColumns: desktop ? "repeat(3,1fr)" : undefined, flexDirection: desktop ? undefined : "column", gap: 16 }}>
        {JOURNEYS.map((j) => (
          <Card key={j.name} onClick={onOpenDay}>
            <div style={{ height: desktop ? 120 : 90, background: "var(--bg-canopy)", borderRadius: "var(--radius-sm)", marginBottom: 12 }} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
              <div style={{ font: "var(--text-heading-sm)", color: "var(--text-primary)" }}>{j.name}</div>
              <Badge tone={j.readiness}>{j.label}</Badge>
            </div>
            <div style={{ font: "var(--text-body-sm)", color: "var(--text-secondary)" }}>{j.dates} · {j.days > 0 ? `${j.days} Journey Days` : "Not yet structured"}</div>
            <div style={{ font: "var(--text-caption)", color: "var(--text-tertiary)", marginTop: 4 }}>{j.accommodation}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
window.JourneysList = JourneysList;
