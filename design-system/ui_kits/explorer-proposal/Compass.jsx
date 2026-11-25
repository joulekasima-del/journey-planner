// PROPOSED Journey Compass: 6 questions instead of 8. Adds who / when / arrival, which the research shows drive the plan.
// Drops "distance from anchor" (it's answered by arrival gateway) and the separate landscape question (shown on results).
const { Button: CButton, Radio: CRadio, IconButton: CIconButton } = window.JPProductFoundationJourneyPlannerDesignSystem_e30f18;

const QUESTIONS = [
  { q: "Who's travelling?", options: ["Just me", "Two of us", "Family with children", "A group of friends"] },
  { q: "How long do you have?", options: ["A long weekend", "About a week", "2–3 weeks", "A month or more"] },
  { q: "When are you going?", options: ["Nov – Jan (cool season)", "Feb – Apr (hot, haze in the north)", "May – Oct (rainy season)", "Not sure yet"], help: "Seasons change which regions work well. You can change this later." },
  { q: "Where do you arrive?", options: ["Bangkok", "Chiang Mai", "Phuket or the south", "Over land from Malaysia or Laos"] },
  { q: "What pace suits you?", options: ["One thing a day, lots of rest", "A balance", "Full days, early starts"] },
  { q: "What comfort level suits you?", options: ["Simple homestays are fine", "A mix", "Private bathroom every night"] },
];

function Compass({ go }) {
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState({});
  const done = step >= QUESTIONS.length;
  const cur = QUESTIONS[step];
  return (
    <div style={{ padding: "18px 18px 48px", display: "flex", flexDirection: "column", gap: 18, minHeight: 620 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <CIconButton icon="←" label={step ? "Previous question" : "Back to Discover"} onClick={() => (step ? setStep(step - 1) : go("discover"))} />
        <span style={{ font: "var(--text-label)", color: SMALL_TEXT }}>{done ? "All answered" : `Question ${step + 1} of ${QUESTIONS.length}`}</span>
      </div>
      {!done ? (
        <fieldset style={{ border: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
          <legend style={{ font: "var(--text-heading-lg)", color: "var(--text-primary)", marginBottom: 6 }}>{cur.q}</legend>
          {cur.help && <div style={{ font: "var(--text-body-sm)", color: SMALL_TEXT }}>{cur.help}</div>}
          {cur.options.map((o) => (
            <CRadio key={o} name={`q${step}`} label={o} checked={answers[step] === o} onChange={() => setAnswers({ ...answers, [step]: o })} />
          ))}
          <div style={{ marginTop: "auto", display: "flex", gap: 10 }}>
            <CButton disabled={!answers[step]} onClick={() => setStep(step + 1)}>Continue</CButton>
            <CButton variant="ghost" onClick={() => setStep(step + 1)}>Skip</CButton>
          </div>
        </fieldset>
      ) : (
        <>
          <h1 style={{ margin: 0, font: "var(--text-heading-lg)", color: "var(--text-primary)" }}>Two regions fit well</h1>
          <p style={{ margin: 0, font: "var(--text-body-md)", color: "var(--text-secondary)" }}>
            For {answers[1] || "your trip"}{answers[2] ? `, ${answers[2].split(" (")[0]}` : ""}: Upper Isaan and the Khorat Plateau suit an easy pace and are a short flight or train ride from Bangkok.
          </p>
          <ul style={{ margin: 0, paddingLeft: 18, font: "var(--text-body-sm)", color: "var(--text-primary)" }}>
            {Object.entries(answers).map(([i, a]) => <li key={i}>{QUESTIONS[i].q} <strong>{a}</strong></li>)}
          </ul>
          <CButton onClick={() => go("region", { region: "isaan" })}>See Upper Isaan</CButton>
          <CButton variant="secondary" onClick={() => go("region", { region: "khorat" })}>See the Khorat Plateau</CButton>
          <CButton variant="ghost" onClick={() => setStep(0)}>Change answers</CButton>
        </>
      )}
    </div>
  );
}
window.Compass = Compass;
