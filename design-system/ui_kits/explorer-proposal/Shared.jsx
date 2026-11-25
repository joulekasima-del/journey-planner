// Shared pieces for the proposal kit. Everything here is PROPOSED, not locked.

// Small text in this kit uses --text-secondary rather than --text-tertiary:
// tertiary (#7C7768) measures 4.13:1 on Mist White and 3.78:1 on the sunken surface — below WCAG AA for 12–13px text.
const SMALL_TEXT = "var(--text-secondary)";

// A card that is a real <button>: focusable, Enter/Space work, and it has a visible focus ring.
function PressCard({ onClick, children, style, label, featured }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="jp-press"
      style={{
        textAlign: "left", font: "inherit", color: featured ? "var(--text-inverse)" : "inherit", cursor: "pointer",
        background: featured ? "var(--canopy-green)" : "var(--surface-card)",
        border: featured ? "none" : "1px solid var(--border-hairline)",
        borderRadius: "var(--radius-lg)", padding: 0, overflow: "hidden",
        boxShadow: hover ? "var(--shadow-md)" : "var(--shadow-sm)",
        transition: "box-shadow var(--duration-base) var(--ease-standard), transform var(--duration-base) var(--ease-standard)",
        transform: hover ? "translateY(-1px)" : "none",
        ...style,
      }}
    >
      {children}
    </button>
  );
}

// Restrained field-guide plate: layered contour lines in the JP-022 palette. Replaces the flat teal placeholder blocks.
function Plate({ kind = "mountain", height = 120, label }) {
  const id = React.useId().replace(/:/g, "");
  const skies = { mountain: "#E7EEE3", river: "#E4EFEC", plateau: "#F1EADF", coast: "#E1EEEC" };
  const layers = {
    mountain: [
      ["M0 70 L40 38 L70 58 L110 22 L150 52 L190 30 L240 62 L240 120 L0 120Z", "#4C8B69"],
      ["M0 88 L50 62 L95 80 L140 56 L190 78 L240 66 L240 120 L0 120Z", "#2F6F4E"],
      ["M0 104 Q60 88 120 100 T240 96 L240 120 L0 120Z", "#123C32"],
    ],
    river: [
      ["M0 70 Q60 60 120 68 T240 62 L240 120 L0 120Z", "#4C8B69"],
      ["M0 86 Q70 78 130 90 T240 84 L240 96 Q170 92 120 102 T0 98Z", "#6FAFA6"],
      ["M0 104 Q80 98 150 108 T240 104 L240 120 L0 120Z", "#2F6F4E"],
    ],
    plateau: [
      ["M0 74 L90 50 L140 50 L150 74 L240 64 L240 120 L0 120Z", "#B87955"],
      ["M0 90 L60 80 L170 80 L200 92 L240 88 L240 120 L0 120Z", "#6B4A34"],
      ["M0 106 Q80 100 160 106 T240 104 L240 120 L0 120Z", "#2F6F4E"],
    ],
    coast: [
      ["M150 90 L160 40 Q170 30 178 42 L186 90Z", "#4C8B69"],
      ["M190 92 L198 58 Q204 50 210 60 L216 92Z", "#2F6F4E"],
      ["M0 88 Q60 82 120 90 T240 88 L240 120 L0 120Z", "#6FAFA6"],
      ["M0 104 Q60 100 120 106 T240 104 L240 120 L0 120Z", "#4C8F86"],
    ],
  };
  return (
    <svg viewBox="0 0 240 120" preserveAspectRatio="xMidYMax slice" role={label ? "img" : undefined} aria-label={label} aria-hidden={label ? undefined : true}
      style={{ display: "block", width: "100%", height }}>
      <defs>
        <linearGradient id={`s${id}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#F3F7F1" /><stop offset="1" stopColor={skies[kind]} />
        </linearGradient>
      </defs>
      <rect width="240" height="120" fill={`url(#s${id})`} />
      <circle cx="198" cy="26" r="9" fill="#C89B3C" opacity=".55" />
      {layers[kind].map(([d, c], i) => <path key={i} d={d} fill={c} opacity={0.9} />)}
      {[0, 1, 2].map((i) => (
        <path key={"c" + i} d={`M0 ${48 + i * 9} Q60 ${42 + i * 9} 120 ${48 + i * 9} T240 ${46 + i * 9}`} fill="none" stroke="#123C32" strokeOpacity=".08" />
      ))}
    </svg>
  );
}

// Season strip: 12 months, each with a text letter as well as a colour (meaning never rides on colour alone).
const SEASON = {
  g: { bg: "var(--semantic-verified-bg)", fg: "var(--semantic-verified-text)", word: "Good" },
  m: { bg: "var(--semantic-neutral-bg)", fg: "var(--semantic-neutral-text)", word: "Mixed" },
  a: { bg: "var(--semantic-attention-bg)", fg: "var(--semantic-attention-text)", word: "Think twice" },
};
function SeasonStrip({ season, month, compact }) {
  const M = window.JP.MONTHS;
  return (
    <div role="list" aria-label="Season by month" style={{ display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: 3 }}>
      {M.map((m, i) => {
        const s = SEASON[season[i]];
        const cur = i === month;
        return (
          <div role="listitem" key={m} aria-label={`${m}: ${s.word}`} title={`${m}: ${s.word}`} style={{
            background: s.bg, color: s.fg, borderRadius: 6, textAlign: "center",
            padding: compact ? "3px 0" : "6px 0", font: "500 10px/1.2 var(--font-body)",
            outline: cur ? "2px solid var(--forest-shade)" : "none", outlineOffset: 1,
          }}>
            <div>{m[0]}</div>
            {!compact && <div style={{ fontSize: 9, opacity: .9 }}>{season[i] === "g" ? "●" : season[i] === "m" ? "◐" : "▲"}</div>}
          </div>
        );
      })}
    </div>
  );
}
function SeasonLegend() {
  return (
    <div style={{ display: "flex", gap: 12, font: "var(--text-caption)", color: SMALL_TEXT, flexWrap: "wrap" }}>
      <span>● Good</span><span>◐ Mixed</span><span>▲ Think twice</span>
    </div>
  );
}

function SampleMark() {
  return (
    <span style={{ font: "500 11px/1 var(--font-body)", letterSpacing: ".04em", textTransform: "uppercase", color: "var(--semantic-proposal-text)", background: "var(--semantic-proposal-bg)", padding: "4px 8px", borderRadius: 999 }}>
      Sample content
    </span>
  );
}

function Eyebrow({ children, style }) {
  return <div style={{ font: "600 12px/1.3 var(--font-body)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--canopy-green-dark)", ...style }}>{children}</div>;
}

// Real Thailand outline from Natural Earth (world-atlas), projected with d3-geo.
let _thaiCache = null;
function useThailand() {
  const [geo, setGeo] = React.useState(_thaiCache);
  React.useEffect(() => {
    if (_thaiCache) return;
    fetch("https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-50m.json")
      .then((r) => r.json())
      .then((topo) => {
        const all = topojson.feature(topo, topo.objects.countries).features;
        const th = all.find((f) => f.id === "764");
        const near = all.filter((f) => ["104", "116", "418", "458", "704"].includes(f.id)); // MM, KH, LA, MY, VN
        _thaiCache = { th, near };
        setGeo(_thaiCache);
      })
      .catch(() => setGeo({ error: true }));
  }, []);
  return geo;
}

function ThailandMap({ width = 300, height = 520, activeRegion, onRegion, showGateways = true, route }) {
  const geo = useThailand();
  if (!geo) return <div style={{ width, height, display: "grid", placeItems: "center", color: SMALL_TEXT, font: "var(--text-caption)" }}>Drawing the map…</div>;
  if (geo.error) return <div style={{ width, height, display: "grid", placeItems: "center", color: SMALL_TEXT, font: "var(--text-caption)" }}>Map unavailable offline</div>;
  const proj = d3.geoMercator().fitExtent([[12, 12], [width - 12, height - 12]], geo.th);
  const path = d3.geoPath(proj);
  const R = window.JP.REGIONS;
  return (
    <svg width="100%" viewBox={`0 0 ${width} ${height}`} role="img" aria-label="Map of Thailand showing four featured regions" style={{ display: "block", maxHeight: height }}>
      <rect width={width} height={height} fill="#E4EFEC" rx="18" />
      {geo.near.map((f) => <path key={f.id} d={path(f)} fill="#EEF1EA" stroke="#A6A092" strokeWidth=".6" />)}
      <path d={path(geo.th)} fill="#F3F7F1" stroke="#2F6F4E" strokeWidth="1.3" />
      {route && (() => {
        const pts = route.map((p) => proj(p));
        return <polyline points={pts.map((p) => p.join(",")).join(" ")} fill="none" stroke="#B87955" strokeWidth="2" strokeDasharray="5 4" />;
      })()}
      {showGateways && window.JP.GATEWAYS.map((g) => {
        const [x, y] = proj(g.pos);
        return (
          <g key={g.name} aria-hidden="true">
            <rect x={x - 3.5} y={y - 3.5} width="7" height="7" fill="#123C32" transform={`rotate(45 ${x} ${y})`} />
            <text x={g.side === "left" ? x - 8 : x + 8} y={y + 4} textAnchor={g.side === "left" ? "end" : "start"} style={{ font: "500 10px var(--font-body)", fill: "#454E58", paintOrder: "stroke", stroke: "#F3F7F1", strokeWidth: 3 }}>{g.name}</text>
          </g>
        );
      })}
      {R.map((r) => {
        const [x, y] = proj(r.pos);
        const on = r.id === activeRegion;
        return (
          <g key={r.id} tabIndex={onRegion ? 0 : undefined} role={onRegion ? "button" : undefined} aria-label={onRegion ? `Open ${r.name}` : undefined}
            onClick={() => onRegion && onRegion(r.id)} onKeyDown={(e) => { if (onRegion && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); onRegion(r.id); } }}
            style={{ cursor: onRegion ? "pointer" : "default", outline: "none" }} className="jp-map-node">
            <circle cx={x} cy={y} r={on ? 20 : 15} fill={on ? "#2F6F4E" : "#B87955"} fillOpacity={on ? .22 : .16} />
            <circle cx={x} cy={y} r={on ? 7 : 5.5} fill={on ? "#2F6F4E" : "#B87955"} stroke="#fff" strokeWidth="2" />
            <text x={x} y={y - 24} textAnchor="middle" style={{ font: `${on ? 700 : 600} 11px var(--font-body)`, fill: "#123C32", paintOrder: "stroke", stroke: "#F3F7F1", strokeWidth: 3 }}>{r.name.split(" ")[0] === "Satun" ? "Satun" : r.name.replace("& the Mekong", "").replace("Northern ", "North ").trim()}</text>
          </g>
        );
      })}
    </svg>
  );
}

Object.assign(window, { PressCard, Plate, SeasonStrip, SeasonLegend, SampleMark, Eyebrow, ThailandMap, SMALL_TEXT });
