const { Badge, Button, IconButton } = window.JPProductFoundationJourneyPlannerDesignSystem_e30f18;

function ExperienceDetail({ onBack, onAdded }) {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <div style={{ paddingBottom: 40 }}>
      <div style={{ height: 200, background: "var(--bg-teal)", position: "relative" }}>
        <div style={{ position: "absolute", top: 14, left: 14 }}><IconButton icon="←" label="Back" onClick={onBack} /></div>
        <div style={{ position: "absolute", top: 14, right: 14 }}><IconButton icon="♡" label="Save" /></div>
      </div>
      <div style={{ padding: "18px", display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <Badge tone="success">Strong Match</Badge>
          <Badge tone="success">Verified</Badge>
        </div>
        <div style={{ font: "var(--text-display-md)", fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>Indigo weaving with the Nong Bua Scouts</div>
        <div style={{ font: "var(--text-body-md)", color: "var(--text-secondary)" }}>A half-day dyeing session with a family who has worked indigo for three generations, in a village 40 minutes outside Sakon Nakhon.</div>
        <div style={{ background: "var(--bg-ochre)", borderRadius: "var(--radius-md)", padding: 14 }}>
          <div style={{ font: "var(--text-heading-sm)", color: "var(--text-primary)" }}>31°C</div>
          <div style={{ font: "var(--text-body-sm)", color: "var(--text-secondary)" }}>Humid by early afternoon — mornings are best for the dye vats.</div>
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <Button onClick={onAdded}>Add to Journey Day</Button>
          <Button variant="secondary">Compare</Button>
          <Button variant="ghost">Ask Guide</Button>
        </div>
        <div style={{ borderTop: "1px solid var(--border-hairline)", paddingTop: 14 }}>
          <Row label="What you'll do" value="Prepare an indigo vat, dye a length of cotton, learn the family's pattern names." />
          <Row label="Physical demand" value="Low — mostly seated" />
          <Row label="Comfort & facilities" value="Shared bathroom, no air conditioning" />
          <Row label="Booking" value="Booking required — host confirms within 24h" />
          {expanded && (
            <>
              <Row label="Culture & etiquette" value="Remove shoes before entering the dye house. Photos of the family require asking first." />
              <Row label="Evidence & verification" value="Scout-observed, verified 12 days ago" />
              <Row label="Transport & access" value="Reachable by rental car or arranged transfer; no public transport" />
            </>
          )}
          <button onClick={() => setExpanded(!expanded)} style={{ border: "none", background: "none", color: "var(--text-link)", font: "var(--text-label)", cursor: "pointer", padding: "8px 0" }}>
            {expanded ? "Show less" : "Show culture, evidence & access details"}
          </button>
        </div>
      </div>
    </div>
  );
}
function Row({ label, value }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{ font: "var(--text-label)", color: "var(--text-tertiary)", marginBottom: 2 }}>{label}</div>
      <div style={{ font: "var(--text-body-sm)", color: "var(--text-primary)" }}>{value}</div>
    </div>
  );
}
window.ExperienceDetail = ExperienceDetail;
