// PROPOSED Discover screen: trip length + travel month + geography first, instead of generic mood tags.
const { Button: DButton, Select: DSelect } = window.JPProductFoundationJourneyPlannerDesignSystem_e30f18;

function Discover({ desktop, state, setState, go }) {
  const { REGIONS, MONTHS, SEGMENTS } = window.JP;
  const { segment, month } = state;
  const ranked = [...REGIONS].sort((a, b) => "gma".indexOf(a.season[month]) - "gma".indexOf(b.season[month]));
  const verdict = (r) => ({ g: "Good in " + MONTHS[month], m: "Mixed in " + MONTHS[month], a: "Think twice in " + MONTHS[month] })[r.season[month]];
  const tone = (r) => ({ g: ["var(--semantic-verified-bg)", "var(--semantic-verified-text)", "●"], m: ["var(--semantic-neutral-bg)", "var(--semantic-neutral-text)", "◐"], a: ["var(--semantic-attention-bg)", "var(--semantic-attention-text)", "▲"] })[r.season[month]];

  const intro = (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <Eyebrow>Two or three weeks in Thailand</Eyebrow>
      <h1 style={{ margin: 0, font: desktop ? "var(--text-display-lg)" : "var(--text-display-md)", color: "var(--text-primary)", textWrap: "balance" }}>
        Go where the country is quieter, and stay long enough to understand it.
      </h1>
      <p style={{ margin: 0, font: "var(--text-body-md)", color: "var(--text-secondary)", maxWidth: 520 }}>
        Small communities that Scouts have visited, mapped by land, season and how to get there.
      </p>
    </div>
  );

  const filters = (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <fieldset style={{ border: "none", padding: 0, margin: 0 }}>
        <legend style={{ font: "var(--text-label)", color: "var(--text-primary)", marginBottom: 8 }}>How long do you have?</legend>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          {SEGMENTS.map((s) => {
            const on = s.id === segment;
            return (
              <button key={s.id} type="button" aria-pressed={on} onClick={() => setState({ ...state, segment: s.id })} className="jp-press" style={{
                textAlign: "left", cursor: "pointer", padding: "10px 12px", borderRadius: 14, font: "inherit",
                border: on ? "1.5px solid var(--canopy-green)" : "1px solid var(--border-hairline)",
                background: on ? "var(--bg-canopy)" : "var(--surface-card)",
              }}>
                <div style={{ font: "var(--text-heading-sm)", color: "var(--text-primary)" }}>{on ? "✓ " : ""}{s.label}</div>
                <div style={{ font: "var(--text-caption)", color: SMALL_TEXT, marginTop: 2 }}>{s.hint}</div>
              </button>
            );
          })}
        </div>
      </fieldset>
      <label style={{ display: "flex", alignItems: "center", gap: 10, font: "var(--text-label)", color: "var(--text-primary)" }}>
        Travelling in
        <select value={month} onChange={(e) => setState({ ...state, month: +e.target.value })} style={{ font: "var(--text-body-md)", padding: "8px 12px", borderRadius: 999, border: "1px solid var(--border-hairline-strong)", background: "var(--surface-card)", color: "var(--text-primary)" }}>
          {MONTHS.map((m, i) => <option key={m} value={i}>{m}</option>)}
        </select>
      </label>
    </div>
  );

  const regionList = (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <h2 style={{ margin: 0, font: "var(--text-heading-md)", color: "var(--text-primary)" }}>Regions for {MONTHS[month]}</h2>
        <span style={{ font: "var(--text-caption)", color: SMALL_TEXT }}>Best fit first</span>
      </div>
      {ranked.map((r) => {
        const [bg, fg, sym] = tone(r);
        return (
          <PressCard key={r.id} onClick={() => go("region", { region: r.id })} label={`${r.name}. ${verdict(r)}. ${r.line}`}>
            <div style={{ display: "grid", gridTemplateColumns: desktop ? "160px 1fr" : "96px 1fr" }}>
              <Plate kind={r.landscape} height={desktop ? 132 : 118} />
              <div style={{ padding: "12px 14px", display: "flex", flexDirection: "column", gap: 4 }}>
                <span style={{ alignSelf: "flex-start", background: bg, color: fg, font: "var(--text-label)", padding: "3px 9px", borderRadius: 999 }}>{sym} {verdict(r)}</span>
                <div style={{ font: "var(--text-heading-sm)", color: "var(--text-primary)" }}>{r.name} <span lang="th" style={{ font: "var(--text-caption)", color: SMALL_TEXT }}>{r.th}</span></div>
                <div style={{ font: "var(--text-body-sm)", color: SMALL_TEXT }}>{r.line}</div>
              </div>
            </div>
          </PressCard>
        );
      })}
    </div>
  );

  // Long-haul (JP-028 draft): a season-led outline of regions from an international gateway.
  // Region level only — the Explorer still builds every Journey Day themselves (JP-008).
  const ORDER = [["khorat", 3, "Train from Bangkok, about 3–4 h"], ["isaan", 5, "Drive or train north-east"], ["north", 6, "Fly via Bangkok or Udon Thani"], ["andaman", 5, "Fly to Trang"]];
  const legs = ORDER.map(([id, n, how]) => ({ r: REGIONS.find((x) => x.id === id), n, how })).filter((l) => l.r.season[month] === "g");
  const nights = legs.reduce((s, l) => s + l.n, 0);
  const skipped = REGIONS.filter((r) => r.season[month] !== "g");
  const route = segment === "slow" && legs.length > 0 && (
    <section aria-labelledby="route-h" style={{ background: "var(--surface-card)", border: "1px solid var(--border-hairline)", borderRadius: 20, padding: desktop ? 22 : 16, display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 10, flexWrap: "wrap" }}>
        <h2 id="route-h" style={{ margin: 0, font: "var(--text-heading-md)", color: "var(--text-primary)" }}>A {nights}-night outline for {MONTHS[month]}</h2>
        <span style={{ font: "var(--text-caption)", color: SMALL_TEXT }}>From Bangkok · regions in season only</span>
      </div>
      <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: desktop ? `repeat(${legs.length},1fr)` : "1fr", gap: 8 }}>
        {legs.map((l, i) => (
          <li key={l.r.id}>
            <button type="button" className="jp-press" onClick={() => go("region", { region: l.r.id })} aria-label={`Stop ${i + 1}: ${l.r.name}, ${l.n} nights. ${l.how}`} style={{
              width: "100%", height: "100%", textAlign: "left", font: "inherit", cursor: "pointer", border: "1px solid var(--border-hairline)",
              background: "var(--bg-canopy)", borderRadius: 14, padding: "10px 12px", display: "flex", flexDirection: "column", gap: 2,
            }}>
              <span style={{ font: "var(--text-caption)", color: "var(--canopy-green-dark)" }}>Stop {i + 1} · {l.n} nights</span>
              <span style={{ font: "var(--text-heading-sm)", color: "var(--text-primary)" }}>{l.r.places[0]}</span>
              <span style={{ font: "var(--text-caption)", color: SMALL_TEXT }}>{l.how}</span>
            </button>
          </li>
        ))}
      </ol>
      {skipped.length > 0 && (
        <div style={{ font: "var(--text-body-sm)", color: "var(--text-primary)" }}>
          Left out for {MONTHS[month]}: {skipped.map((r) => r.name).join(", ")}. {skipped[0].seasonNote[skipped[0].season[month]]}
        </div>
      )}
      {nights < 14 && (
        <div style={{ font: "var(--text-body-sm)", color: "var(--semantic-attention-text)", background: "var(--semantic-attention-bg)", borderRadius: 12, padding: "8px 12px" }}>
          ▲ Only {nights} nights of featured regions are in season in {MONTHS[month]}. You can stay longer here or add a mixed-season region from the list below.
        </div>
      )}
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
        <DButton onClick={() => go("day")}>Start a Journey from this outline</DButton>
        <span style={{ font: "var(--text-caption)", color: SMALL_TEXT }}>You choose every day and every experience yourself.</span>
      </div>
    </section>
  );

  const swaps = (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <h2 style={{ margin: 0, font: "var(--text-heading-md)", color: "var(--text-primary)" }}>Thinking of the usual places?</h2>
      <div style={{ display: "flex", gap: 10, overflowX: desktop ? "visible" : "auto", flexWrap: desktop ? "wrap" : "nowrap", paddingBottom: 4 }}>
        {REGIONS.map((r) => (
          <PressCard key={r.id} onClick={() => go("region", { region: r.id })} style={{ minWidth: 210, flex: desktop ? "1 1 200px" : "0 0 auto", padding: "12px 14px" }} label={`Instead of ${r.altTo}, try ${r.name}`}>
            <div style={{ font: "var(--text-caption)", color: SMALL_TEXT }}>Instead of {r.altTo}</div>
            <div style={{ font: "var(--text-heading-sm)", color: "var(--canopy-green-dark)" }}>→ {r.places[0]}</div>
          </PressCard>
        ))}
      </div>
    </div>
  );

  const compass = (
    <PressCard featured onClick={() => go("compass")} style={{ padding: "16px 18px" }} label="Open Journey Compass">
      <div style={{ font: "var(--text-heading-sm)" }}>Not sure where to start?</div>
      <div style={{ font: "var(--text-body-sm)", opacity: .9, marginTop: 2 }}>Six questions about who's coming, when and how you like to travel. Journey Compass suggests places; you build the plan yourself.</div>
    </PressCard>
  );

  if (!desktop) {
    return (
      <div style={{ padding: "18px 18px 48px", display: "flex", flexDirection: "column", gap: 24 }}>
        {intro}{filters}{route}{regionList}{swaps}{compass}
      </div>
    );
  }
  return (
    <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.25fr) 380px", gap: 40, padding: "44px 56px 56px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        {intro}{filters}{route}{regionList}{swaps}
      </div>
      <aside style={{ position: "sticky", top: 24, alignSelf: "start", display: "flex", flexDirection: "column", gap: 16 }}>
        <ThailandMap width={380} height={560} onRegion={(id) => go("region", { region: id })} />
        <div style={{ font: "var(--text-caption)", color: SMALL_TEXT }}>◆ Arrival gateways · ● Featured regions. Select a region to open it.</div>
        {compass}
      </aside>
    </div>
  );
}
window.Discover = Discover;
