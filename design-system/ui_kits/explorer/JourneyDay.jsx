const { Badge, ActionCard, IconButton, Tabs } = window.JPProductFoundationJourneyPlannerDesignSystem_e30f18;

const DAYS = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"];
const ITEMS = [
  { time: "8:30", title: "Breakfast at Scout homestay", place: "Nong Bua village", trust: "success", trustLabel: "Verified", booking: null },
  { time: "10:00", title: "Indigo weaving workshop", place: "Nong Bua village", trust: "attention", trustLabel: "Needs Verification", booking: "Booking required" },
  { time: "Flexible", title: "Riverside walk", place: "Along the Songkhram", trust: "success", trustLabel: "Verified", booking: null },
];

function JourneyDay({ desktop, offline }) {
  const [day, setDay] = React.useState("Day 4");
  return (
    <div style={{ display: desktop ? "flex" : "block", gap: 24, padding: desktop ? "32px 48px" : "16px 18px 40px" }}>
      <div style={{ flex: desktop ? 2 : undefined }}>
        {offline && (
          <div style={{ background: "var(--surface-inverse)", color: "var(--text-inverse)", borderRadius: "var(--radius-sm)", padding: "8px 14px", font: "var(--text-caption)", marginBottom: 14 }}>
            Offline — showing saved Journey Day. Route estimates require internet.
          </div>
        )}
        <div style={{ font: "var(--text-display-md)", fontFamily: "var(--font-display)", color: "var(--text-primary)", marginBottom: 6 }}>Northern Thailand Loop</div>
        <div style={{ display: "flex", gap: 8, overflowX: "auto", marginBottom: 16 }}>
          {DAYS.map((d) => (
            <button key={d} onClick={() => setDay(d)} style={{
              border: "none", cursor: "pointer", padding: "8px 16px", borderRadius: "var(--radius-pill)", flexShrink: 0,
              background: d === day ? "var(--brand-primary)" : "var(--surface-sunken)",
              color: d === day ? "var(--text-on-brand)" : "var(--text-secondary)", font: "var(--text-label)",
            }}>{d}</button>
          ))}
        </div>
        <div style={{ background: "var(--bg-ochre)", borderRadius: "var(--radius-md)", padding: 14, marginBottom: 18 }}>
          <div style={{ font: "var(--text-heading-sm)", color: "var(--text-primary)" }}>32°C</div>
          <div style={{ font: "var(--text-body-sm)", color: "var(--text-secondary)" }}>Sticky by midday — good for an early waterfall visit, rest after lunch.</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {ITEMS.map((it, i) => (
            <React.Fragment key={it.title}>
              <div style={{ display: "flex", gap: 14, padding: "14px 0", borderBottom: i < ITEMS.length - 1 ? "1px solid var(--border-hairline)" : "none" }}>
                <div style={{ font: "var(--text-mono-sm)", color: "var(--text-tertiary)", width: 60, flexShrink: 0, paddingTop: 2 }}>{it.time}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ font: "var(--text-heading-sm)", color: "var(--text-primary)" }}>{it.title}</div>
                  <div style={{ font: "var(--text-body-sm)", color: "var(--text-secondary)", marginBottom: 6 }}>{it.place}</div>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    <Badge tone={it.trust}>{it.trustLabel}</Badge>
                    {it.booking && <Badge tone="attention">{it.booking}</Badge>}
                  </div>
                </div>
              </div>
              {i < ITEMS.length - 1 && (
                <div style={{ font: "var(--text-caption)", color: "var(--text-tertiary)", padding: "6px 0 6px 74px" }}>↓ 25 min travel connection · estimate available</div>
              )}
            </React.Fragment>
          ))}
        </div>
        <div style={{ marginTop: 14, padding: "16px", border: "1.5px dashed var(--border-hairline-strong)", borderRadius: "var(--radius-md)", textAlign: "center", font: "var(--text-body-sm)", color: "var(--text-tertiary)" }}>
          Unscheduled — add another Itinerary Item
        </div>
      </div>
      <div style={{ flex: desktop ? 1 : undefined, marginTop: desktop ? 0 : 20 }}>
        <ActionCard
          what="Indigo weaving requires booking."
          why="Journey Day 4 cannot become Ready until the host confirms."
          status="Waiting for provider — updated 12 minutes ago"
          actionLabel="Continue booking"
          tone="attention"
        />
      </div>
    </div>
  );
}
window.JourneyDay = JourneyDay;
