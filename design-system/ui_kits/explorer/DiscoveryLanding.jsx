const { Input, Tag, Button, Card } = window.JPProductFoundationJourneyPlannerDesignSystem_e30f18;

const CATEGORIES = {
  Mood: ["Calm", "Adventurous", "Romantic", "Reflective"],
  Landscape: ["Mountains", "Coastline", "Rainforest", "Rivers"],
  Experience: ["Village visits", "Craft workshops", "Trekking", "Temples"],
};

function DiscoveryLanding({ onGuided, onOpenExperience }) {
  return (
    <div style={{ padding: "16px 18px 40px", display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ font: "var(--text-display-md)", fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>What kind of Thailand do you want to enter?</div>
      <Input placeholder="Search a place, village, or experience" />
      <div style={{ display: "flex", gap: 10 }}>
        <Button variant="secondary" size="sm">Near Chiang Mai</Button>
        <Button variant="ghost" size="sm">Change anchor</Button>
      </div>
      <Card padding="18px" onClick={onGuided} style={{ background: "var(--bg-canopy)", border: "1px solid var(--brand-primary)" }}>
        <div style={{ font: "var(--text-heading-sm)", color: "var(--brand-primary-active)", marginBottom: 4 }}>Not sure where to start?</div>
        <div style={{ font: "var(--text-body-sm)", color: "var(--text-secondary)" }}>Answer 8 quick questions — Journey Compass will find places that fit.</div>
      </Card>
      {Object.entries(CATEGORIES).map(([group, items]) => (
        <div key={group}>
          <div style={{ font: "var(--text-label)", color: "var(--text-tertiary)", marginBottom: 8 }}>{group}</div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {items.map((i) => <Tag key={i}>{i}</Tag>)}
          </div>
        </div>
      ))}
      <div style={{ font: "var(--text-label)", color: "var(--text-tertiary)", marginTop: 4 }}>Outside the city, worth the trip</div>
      <div style={{ display: "flex", gap: 12, overflowX: "auto" }}>
        {["Indigo weaving village, Sakon Nakhon", "Doi Inthanon cloud forest trail", "Riverside Scout homestay, Nan"].map((t) => (
          <Card key={t} onClick={onOpenExperience} style={{ minWidth: 200, flexShrink: 0 }} padding="14px">
            <div style={{ height: 90, background: "var(--bg-teal)", borderRadius: "var(--radius-sm)", marginBottom: 10 }} />
            <div style={{ font: "var(--text-body-sm)", color: "var(--text-primary)" }}>{t}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
window.DiscoveryLanding = DiscoveryLanding;
