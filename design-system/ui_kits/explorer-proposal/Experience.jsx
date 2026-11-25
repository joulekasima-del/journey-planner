// PROPOSED Experience screen: story first, then the practical facts a first-timer needs (access, etiquette, words to know).
const { Button: EButton, IconButton: EIconButton, Badge: EBadge } = window.JPProductFoundationJourneyPlannerDesignSystem_e30f18;

function Experience({ desktop, state, go }) {
  const { EXPERIENCES, REGIONS } = window.JP;
  const e = EXPERIENCES.find((x) => x.id === state.exp) || EXPERIENCES[0];
  const r = REGIONS.find((x) => x.id === e.region);
  const [saved, setSaved] = React.useState(false);

  const Fact = ({ k, v }) => (
    <div style={{ padding: "10px 0", borderTop: "1px solid var(--border-hairline)", display: "grid", gridTemplateColumns: desktop ? "180px 1fr" : "1fr", gap: 2 }}>
      <div style={{ font: "var(--text-label)", color: SMALL_TEXT }}>{k}</div>
      <div style={{ font: "var(--text-body-sm)", color: "var(--text-primary)" }}>{v}</div>
    </div>
  );

  const actions = (
    <div style={{ background: "var(--surface-card)", border: "1px solid var(--border-hairline)", borderRadius: 18, padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <div style={{ font: "var(--text-heading-md)", color: "var(--text-primary)" }}>{e.price}</div>
        <div style={{ font: "var(--text-caption)", color: SMALL_TEXT }}>{e.duration}</div>
      </div>
      <div style={{ font: "var(--text-caption)", color: SMALL_TEXT }}>The host sets this price. You add it to your plan first and book later — nothing is charged now.</div>
      <EButton onClick={() => go("day")}>Add to a Journey Day</EButton>
      <EButton variant="ghost">Ask the Guide about this</EButton>
    </div>
  );

  const main = (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
        <EBadge tone="info">Fits your answers</EBadge>
        <SampleMark />
      </div>
      <div>
        <Eyebrow>{e.place}</Eyebrow>
        <h1 style={{ margin: "6px 0 2px", font: desktop ? "var(--text-display-lg)" : "var(--text-display-md)", color: "var(--text-primary)" }}>{e.title}</h1>
        <div lang="th" style={{ font: "var(--text-body-sm)", color: SMALL_TEXT }}>{e.th}</div>
      </div>
      <p style={{ margin: 0, font: "var(--text-body-lg)", color: "var(--text-secondary)" }}>{e.what}</p>
      <div style={{ font: "var(--text-body-sm)", color: "var(--text-primary)" }}>Hosted by <strong>{e.host}</strong></div>

      <div style={{ background: "var(--bg-ochre)", borderRadius: 14, padding: 14 }}>
        <div style={{ font: "var(--text-heading-sm)", color: "var(--text-primary)" }}>{e.weather[0]}</div>
        <div style={{ font: "var(--text-body-sm)", color: "var(--text-primary)" }}>{e.weather[1]}</div>
      </div>

      {!desktop && actions}

      <section aria-labelledby="access">
        <h2 id="access" style={{ margin: "6px 0 8px", font: "var(--text-heading-sm)", color: "var(--text-primary)" }}>Getting there, step by step</h2>
        <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
          {e.access.map(([mode, txt], i) => (
            <li key={i} style={{ display: "grid", gridTemplateColumns: "64px 1fr", gap: 10, alignItems: "baseline" }}>
              <span style={{ font: "var(--text-label)", color: "var(--canopy-green-dark)" }}>{mode}</span>
              <span style={{ font: "var(--text-body-sm)", color: "var(--text-primary)" }}>{txt}</span>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="before" style={{ background: "var(--bg-canopy)", borderRadius: 18, padding: 16 }}>
        <h2 id="before" style={{ margin: "0 0 8px", font: "var(--text-heading-sm)", color: "var(--text-primary)" }}>Before you arrive</h2>
        <ul style={{ margin: "0 0 12px", paddingLeft: 18, font: "var(--text-body-sm)", color: "var(--text-primary)", display: "flex", flexDirection: "column", gap: 4 }}>
          {e.etiquette.map((t) => <li key={t}>{t}</li>)}
        </ul>
        <div style={{ font: "var(--text-label)", color: "var(--text-primary)", marginBottom: 6 }}>Words to know</div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {e.phrases.map(([th, en]) => (
            <div key={th} style={{ background: "var(--surface-card)", borderRadius: 12, padding: "8px 12px" }}>
              <div style={{ font: "var(--text-heading-sm)", color: "var(--text-primary)" }}>{th}</div>
              <div style={{ font: "var(--text-caption)", color: SMALL_TEXT }}>{en}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <Fact k="Physical demand" v={e.demand} />
        <Fact k="Comfort & facilities" v={e.comfort} />
        <Fact k="Booking" v="Booking needed — the host confirms within 24 hours" />
        <Fact k="Verification" v={e.evidence} />
        <Fact k="Region" v={<button type="button" onClick={() => go("region", { region: r.id })} style={{ border: "none", background: "none", padding: 0, font: "inherit", color: "var(--text-link)", textDecoration: "underline", cursor: "pointer" }}>{r.name} — when to go and how to get there</button>} />
      </section>
    </div>
  );

  const hero = (
    <div style={{ position: "relative" }}>
      <Plate kind={e.landscape} height={desktop ? 280 : 210} label={`Illustration: ${e.landscape} landscape near ${e.place}`} />
      <div style={{ position: "absolute", top: 14, left: 14 }}><EIconButton icon="←" label="Back" onClick={() => go("region", { region: e.region })} /></div>
      <div style={{ position: "absolute", top: 14, right: 14 }}><EIconButton icon={saved ? "♥" : "♡"} label={saved ? "Saved" : "Save for later"} active={saved} onClick={() => setSaved(!saved)} /></div>
    </div>
  );

  if (!desktop) return <div style={{ paddingBottom: 48 }}>{hero}<div style={{ padding: 18 }}>{main}</div></div>;
  return (
    <div>
      {hero}
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 320px", gap: 40, padding: "28px 56px 56px" }}>
        {main}
        <aside style={{ position: "sticky", top: 24, alignSelf: "start" }}>{actions}</aside>
      </div>
    </div>
  );
}
window.Experience = Experience;
