const { Button, Radio, IconButton, Tooltip } = window.JPProductFoundationJourneyPlannerDesignSystem_e30f18;

const QUESTIONS = [
  { q: "What journey mood are you looking for?", options: ["Calm & restorative", "Adventurous", "Social & lively", "Reflective & slow"] },
  { q: "What landscape or surroundings do you want?", options: ["Mountains", "Coastline", "Rainforest", "Rivers & waterfalls"] },
  { q: "What do you want to experience or do?", options: ["Village visits", "Craft workshops", "Trekking", "Temples & history"] },
  { q: "How active should the experience be?", options: ["Easy going", "Moderate", "Physically demanding"] },
  { q: "What level of comfort suits you?", options: ["Basic & local", "Comfortable", "A bit of both"], help: "\"Basic\" means simple local guesthouses, shared facilities." },
  { q: "How much time do you have?", options: ["A day", "A weekend", "5+ days"] },
  { q: "How will you travel there?", options: ["Public transport", "Rental car", "Arranged transfer"] },
  { q: "How far from your selected fixed place should this be?", options: ["Within 10 km", "Within 50 km", "Anywhere in the region"] },
];

function JourneyCompass({ onFinish }) {
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState({});
  const done = step >= QUESTIONS.length;
  const cur = QUESTIONS[step];
  return (
    <div style={{ padding: "16px 18px 40px", display: "flex", flexDirection: "column", gap: 18, minHeight: 600 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <IconButton icon="←" label="Back" onClick={() => setStep((s) => Math.max(0, s - 1))} />
        <div style={{ flex: 1, height: 6, background: "var(--surface-sunken)", borderRadius: "var(--radius-pill)" }}>
          <div style={{ width: `${Math.min(step, QUESTIONS.length) / QUESTIONS.length * 100}%`, height: "100%", background: "var(--brand-primary)", borderRadius: "var(--radius-pill)", transition: "width var(--duration-base) var(--ease-standard)" }} />
        </div>
        <span style={{ font: "var(--text-caption)", color: "var(--text-tertiary)" }}>{Math.min(step + 1, QUESTIONS.length)}/{QUESTIONS.length}</span>
      </div>
      {!done ? (
        <>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ font: "var(--text-heading-lg)", color: "var(--text-primary)" }}>{cur.q}</div>
            {cur.help && <Tooltip label={cur.help}><IconButton icon="ⓘ" label="Explain" size={28} /></Tooltip>}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {cur.options.map((o) => (
              <Radio key={o} name={`q${step}`} label={o} checked={answers[step] === o} onChange={() => setAnswers({ ...answers, [step]: o })} />
            ))}
          </div>
          <Button disabled={!answers[step]} onClick={() => setStep(step + 1)} style={{ marginTop: "auto" }}>Continue</Button>
        </>
      ) : (
        <>
          <div style={{ font: "var(--text-heading-lg)", color: "var(--text-primary)" }}>Here's what fits</div>
          <div style={{ font: "var(--text-body-md)", color: "var(--text-secondary)" }}>Calm, rainforest, village-focused experiences within 50 km of your anchor. 6 places match.</div>
          <Button onClick={onFinish}>See results</Button>
          <Button variant="ghost" onClick={() => setStep(0)}>Revise answers</Button>
        </>
      )}
    </div>
  );
}
window.JourneyCompass = JourneyCompass;
