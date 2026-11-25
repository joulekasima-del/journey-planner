// PROPOSED Journey Day: applies JP-027 (bookmark pills with readiness dots and text, no progress line),
// JP-023 (precise data + one warm line, now including air quality), one coherent region, and a route map on desktop.
const { Badge: JBadge, ActionCard: JActionCard } = window.JPProductFoundationJourneyPlannerDesignSystem_e30f18;

const DAYS = [
  { label: "Day 1", place: "Sakon Nakhon", status: "verified" },
  { label: "Day 2", place: "Ban Non Rua", status: "attention" },
  { label: "Day 3", place: "To Chiang Khan", status: "neutral" },
  { label: "Day 4", place: "Chiang Khan", status: "verified" },
];
const DOT = {
  verified: ["var(--semantic-verified-base)", "Ready"],
  attention: ["var(--semantic-attention-base)", "Needs attention"],
  neutral: ["var(--semantic-neutral-base)", "Still planning"],
};
const ITEMS = [
  { time: "07:30", title: "Breakfast at the homestay", place: "Ban Non Rua", trust: ["success", "Verified"], booking: null, pos: [104.2, 17.15] },
  { time: "09:00", title: "A morning at the indigo vats", place: "Ban Non Rua", trust: ["success", "Verified"], booking: "Waiting for host", pos: [104.25, 17.12], gap: "10 min walk" },
  { time: "Afternoon", title: "Rest — the hottest part of the day", place: "Homestay", trust: null, booking: null, pos: [104.2, 17.15], gap: "10 min walk", rest: true },
  { time: "17:00", title: "Nong Han lake at sunset", place: "Sakon Nakhon town", trust: ["success", "Verified"], booking: null, pos: [104.14, 17.18], gap: "25 min by arranged car" },
];

function JourneyDay({ desktop }) {
  const [day, setDay] = React.useState("Day 2");

  const pills = (
    <nav aria-label="Journey Days" style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4 }}>
      {DAYS.map((d) => {
        const on = d.label === day;
        const [c, word] = DOT[d.status];
        return (
          <button key={d.label} type="button" aria-current={on ? "page" : undefined} onClick={() => setDay(d.label)} className="jp-press" style={{
            flexShrink: 0, cursor: "pointer", textAlign: "left", font: "inherit", padding: "8px 14px", borderRadius: 14,
            border: on ? "1.5px solid var(--forest-shade)" : "1px solid var(--border-hairline)",
            background: on ? "var(--surface-card)" : "var(--surface-sunken)",
          }}>
            <div style={{ font: "var(--text-label)", color: "var(--text-primary)" }}>{d.label} · {d.place}</div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, font: "var(--text-caption)", color: SMALL_TEXT, marginTop: 2 }}>
              <span style={{ width: 7, height: 7, borderRadius: 9, background: c }} />{word}
            </div>
          </button>
        );
      })}
    </nav>
  );

  const conditions = (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
      <div style={{ background: "var(--bg-ochre)", borderRadius: 14, padding: 12 }}>
        <div style={{ font: "var(--text-heading-sm)", color: "var(--text-primary)" }}>34°C · humid</div>
        <div style={{ font: "var(--text-body-sm)", color: "var(--text-primary)" }}>Do the dye vats early and rest after lunch.</div>
      </div>
      <div style={{ background: "var(--bg-teal)", borderRadius: 14, padding: 12 }}>
        <div style={{ font: "var(--text-heading-sm)", color: "var(--text-primary)" }}>Air: good (AQI 38)</div>
        <div style={{ font: "var(--text-body-sm)", color: "var(--text-primary)" }}>Clear enough for the lake at sunset.</div>
      </div>
    </div>
  );

  const timeline = (
    <ol style={{ listStyle: "none", margin: 0, padding: 0 }}>
      {ITEMS.map((it, i) => (
        <li key={it.title}>
          {it.gap && <div style={{ font: "var(--text-caption)", color: SMALL_TEXT, padding: "4px 0 4px 82px" }}>↓ {it.gap}</div>}
          <div style={{ display: "grid", gridTemplateColumns: "72px 1fr", gap: 10, padding: "12px 0", borderTop: i ? "1px solid var(--border-hairline)" : "none" }}>
            <div style={{ font: "var(--text-mono-sm)", color: "var(--text-secondary)", paddingTop: 2 }}>{it.time}</div>
            <div>
              <div style={{ font: "var(--text-heading-sm)", color: it.rest ? "var(--text-secondary)" : "var(--text-primary)", fontStyle: it.rest ? "italic" : "normal" }}>{it.title}</div>
              <div style={{ font: "var(--text-body-sm)", color: SMALL_TEXT, marginBottom: 6 }}>{it.place}</div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {it.trust && <JBadge tone={it.trust[0]}>{it.trust[1]}</JBadge>}
                {it.booking && <JBadge tone="attention">{it.booking}</JBadge>}
              </div>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );

  const action = (
    <JActionCard tone="attention" what="The indigo workshop is waiting for the host to confirm."
      why="Day 2 shows as Ready once the host confirms. The rest of your plan stays as it is."
      status="Requested 2 hours ago · hosts usually reply within 24 hours" actionLabel="View request" />
  );

  const header = (
    <div>
      <Eyebrow>Upper Isaan · 4 Journey Days</Eyebrow>
      <h1 style={{ margin: "6px 0 12px", font: desktop ? "var(--text-display-lg)" : "var(--text-display-md)", color: "var(--text-primary)" }}>Indigo and the Mekong</h1>
      {pills}
    </div>
  );

  if (!desktop) {
    return (
      <div style={{ padding: "18px 18px 48px", display: "flex", flexDirection: "column", gap: 16 }}>
        {header}{conditions}{timeline}{action}
      </div>
    );
  }
  return (
    <div style={{ padding: "40px 56px 56px", display: "flex", flexDirection: "column", gap: 20 }}>
      {header}
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 360px", gap: 36 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>{conditions}{timeline}</div>
        <aside style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {action}
          <div style={{ border: "1px solid var(--border-hairline)", borderRadius: 18, overflow: "hidden" }}>
            <ThailandMap width={360} height={460} activeRegion="isaan" showGateways route={[[100.5, 13.75], [104.13, 17.16], [101.67, 17.9]]} />
          </div>
          <div style={{ font: "var(--text-caption)", color: SMALL_TEXT }}>Dashed line: the whole journey's route from Bangkok. A detailed day map would replace this once routing is decided.</div>
        </aside>
      </div>
    </div>
  );
}
window.JourneyDay = JourneyDay;
