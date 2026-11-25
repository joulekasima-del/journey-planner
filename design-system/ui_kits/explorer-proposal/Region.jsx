// PROPOSED Region screen: geography explains the place (Philosophy: "Maps should explain places, not simply locate them").
const { IconButton: RIconButton } = window.JPProductFoundationJourneyPlannerDesignSystem_e30f18;

function Region({ desktop, state, go }) {
  const { REGIONS, EXPERIENCES, MONTHS } = window.JP;
  const r = REGIONS.find((x) => x.id === state.region) || REGIONS[0];
  const exps = EXPERIENCES.filter((e) => e.region === r.id);
  const code = r.season[state.month];
  const note = r.seasonNote[code];

  const head = (
    <div style={{ position: "relative" }}>
      <Plate kind={r.landscape} height={desktop ? 240 : 190} label={`Illustration: ${r.landscape} landscape`} />
      <div style={{ position: "absolute", top: 14, left: 14 }}><RIconButton icon="←" label="Back to Discover" onClick={() => go("discover")} /></div>
    </div>
  );

  const body = (
    <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
      <div>
        <Eyebrow>{r.places.join(" · ")}</Eyebrow>
        <h1 style={{ margin: "6px 0 4px", font: desktop ? "var(--text-display-lg)" : "var(--text-display-md)", color: "var(--text-primary)" }}>{r.name}</h1>
        <div lang="th" style={{ font: "var(--text-body-sm)", color: SMALL_TEXT }}>{r.th}</div>
        <p style={{ margin: "10px 0 0", font: "var(--text-body-lg)", color: "var(--text-secondary)" }}>{r.line}</p>
      </div>

      <section aria-labelledby="when" style={{ background: "var(--surface-card)", border: "1px solid var(--border-hairline)", borderRadius: 18, padding: 16, display: "flex", flexDirection: "column", gap: 10 }}>
        <h2 id="when" style={{ margin: 0, font: "var(--text-heading-sm)", color: "var(--text-primary)" }}>When to go</h2>
        <SeasonStrip season={r.season} month={state.month} />
        <SeasonLegend />
        <div style={{ font: "var(--text-body-sm)", color: "var(--text-primary)" }}>
          <strong>{MONTHS[state.month]}: {{ g: "Good", m: "Mixed", a: "Think twice" }[code]}.</strong> {note}
        </div>
      </section>

      <section aria-labelledby="why">
        <h2 id="why" style={{ margin: "0 0 10px", font: "var(--text-heading-sm)", color: "var(--text-primary)" }}>Why life here looks the way it does</h2>
        <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column" }}>
          {r.chain.map(([k, v], i) => (
            <li key={k} style={{ display: "grid", gridTemplateColumns: "22px 1fr", gap: 10 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ width: 10, height: 10, borderRadius: 99, background: "var(--clay-terracotta)", marginTop: 5 }} />
                {i < r.chain.length - 1 && <span style={{ flex: 1, width: 1.5, background: "var(--border-hairline-strong)" }} />}
              </div>
              <div style={{ paddingBottom: 12 }}>
                <div style={{ font: "var(--text-label)", color: "var(--canopy-green-dark)" }}>{k}</div>
                <div style={{ font: "var(--text-body-sm)", color: "var(--text-primary)" }}>{v}</div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="getting" style={{ background: "var(--bg-canopy)", borderRadius: 18, padding: 16 }}>
        <h2 id="getting" style={{ margin: "0 0 4px", font: "var(--text-heading-sm)", color: "var(--text-primary)" }}>Getting there</h2>
        <div style={{ font: "var(--text-body-sm)", color: "var(--text-primary)" }}>Arrive via {r.gateway}. Each experience below shows the last leg step by step.</div>
      </section>

      <section aria-labelledby="exps" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 id="exps" style={{ margin: 0, font: "var(--text-heading-md)", color: "var(--text-primary)" }}>Experiences</h2>
          <SampleMark />
        </div>
        {exps.map((e) => (
          <PressCard key={e.id} onClick={() => go("experience", { exp: e.id })} label={`${e.title}, ${e.place}, ${e.duration}, ${e.price}`}>
            <div style={{ display: "grid", gridTemplateColumns: "96px 1fr" }}>
              <Plate kind={e.landscape} height={104} />
              <div style={{ padding: "12px 14px" }}>
                <div style={{ font: "var(--text-heading-sm)", color: "var(--text-primary)" }}>{e.title}</div>
                <div style={{ font: "var(--text-body-sm)", color: SMALL_TEXT }}>{e.place}</div>
                <div style={{ font: "var(--text-caption)", color: "var(--text-primary)", marginTop: 6 }}>{e.duration} · {e.price}</div>
              </div>
            </div>
          </PressCard>
        ))}
      </section>
    </div>
  );

  if (!desktop) return <div style={{ paddingBottom: 48 }}>{head}<div style={{ padding: 18 }}>{body}</div></div>;
  return (
    <div>
      {head}
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 340px", gap: 40, padding: "28px 56px 56px" }}>
        {body}
        <aside style={{ position: "sticky", top: 24, alignSelf: "start" }}>
          <ThailandMap width={340} height={500} activeRegion={r.id} onRegion={(id) => go("region", { region: id })} />
        </aside>
      </div>
    </div>
  );
}
window.Region = Region;
