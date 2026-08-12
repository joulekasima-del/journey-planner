# Build Tracker

Status: Active

Version: 1.0

Owner: Product Owner

---

# Purpose

This is the living record of implementation progress referenced by `bootstrap/05_ENGINEERING_CONTRACT.md` and `bootstrap/07_PROJECT_ROADMAP.md`. It tracks what's actually being worked on and in what order. It does not replace specifications, the Decision Log, or the Backlog — it sequences work against them.

---

# Operating Principle — applies to every task added here, not just this pass

Journey Planner is founded solo and is intended to run on a fully AI-driven build process — there is no team to absorb complexity by throwing people at it.

For every backend and frontend choice, from here forward: prefer minimal, precise, and sustainable over feature-rich. A smaller thing that's fully understood and maintained by one person beats a larger thing that isn't. When in doubt, cut scope before adding process.

---

# How to Read This Document

**Now / Next / Later** — grouped by actual dependency, not by how urgent something feels. A task sits in Next only if something in Now genuinely has to finish first. A task sits in Later only if nothing currently depends on it starting sooner.

**Within each group**, tasks are sorted:

- Urgent + Important
- Important, not urgent
- Urgent, not important
- Neither

One line per task. This is a sequencing tool, not a scored matrix — don't over-engineer it.

**Flags** appear only on tasks that genuinely touch legal, cultural, or ethical concerns. Most tasks won't have one. A missing flag means none was found, not that it wasn't considered.

---

# Now

## Urgent + Important

- [x] Add authentication / access control to the live scouting form — right now anyone with the link can view, add, edit, or delete every entry, with no record of who did it. — **Flag:** real people's personal data is exposed with no protection, live, today. — **Done** (commit `c8239c1`).
- [x] Move scouted data off browser-only `localStorage` onto something that actually syncs and backs up — field data currently exists only on the single device it was typed on, with no export path, and is unrecoverable if that device is lost, reset, or cleared. — **Flag:** real field work can be permanently and silently lost. — **Done** (commit `c8239c1`).
- [x] Stop storing entries as plain readable text — anything typed into the form today is retrievable by anyone with a few seconds of access to the device via ordinary browser developer tools. — **Flag:** Thailand PDPA — personal data must be protected, not just collected. — **Done** (commit `c8239c1`).
- [ ] **(1st — next action)** Get the PDPA consent / privacy notice reviewed by a legal or technical advisor — an honest interim notice is live on the form today, but it has not been reviewed by anyone with legal or technical authority on Thailand's PDPA and is not a finished compliance document. — **Flag:** Thailand PDPA — the interim notice reduces but does not close the lawful-basis gap until this review happens.
- [x] Tell hosts what's being recorded about them and why, at the point a Scout records it — there is currently no notice to the host at all. — **Flag:** Thailand PDPA / basic fairness — people are being written about without being told. — **Done** (commit `c8239c1`).
- [x] Scouting form UX refinement round 2 — Description moved to last with a deterministic (non-AI) draft generator, Tags/Best-visit/Languages converted to multi-select chips, Landscape & geographic story converted to three chip-picker groups (kept on the shared Place record, not per-Experience), a general reusable "Other → free text" mechanism applied everywhere Other appears, Fusion options added. — **Done** (commits `f57fe2b`, `a92f27b`) — **live authenticated save/reload test confirmed directly by the founder**, closing the one verification gap no AI session could close itself.
- [ ] **(2nd)** Hold a dedicated Explorer map / art-direction design session — reclassified from Important/not-urgent to Urgent + Important by explicit founder direction, 2026-08-12, since it now sits second in an explicit founder-set sequence. Hand-drawn, Marauder's-Map-inspired, geographically real, not tied to the pixel-art Creative Framework (superseded for Journey Planner by JP-013). Also folds in an unresolved idea: weather/time-awareness UI, balancing Western efficiency expectations against Thai hospitality warmth. Not a coding task until this session happens — no visual language exists to build against yet.
- [ ] **(3rd)** Decide the conservation-fund percentage — a carve-out from the locked 15% commission (JP-015), discussed at length, never given a number. — **Flag:** Trust (Philosophy) — any conservation-fund claim in the future Marketing Plan must match a real, locked number, not a placeholder. — **Blocks:** the Marketing Plan (Next, below) can't reference the fund with any specific commitment until this is decided.
- [ ] Decide chargeback/dispute liability — who is liable, platform or host, in a Xendit chargeback or dispute. Xendit's own xenPlatform activation flow requires an answer before it can be turned on. — **Blocks:** the Admin Panel's payout section and the Sales Plan's pitch to hosts (both Next, below) — neither can be built or pitched honestly against an undefined liability model.
- [ ] Draft & confirm JP-018 — Administrator Tooling into V1 scope — founder direction (2026-08-12) moves Administrator tooling into active V1 scope ahead of launch, ahead of when JP-005 originally excluded it. **Host Portal is explicitly untouched and stays excluded, per JP-005, unchanged.** — **Flag:** this partially supersedes a locked decision (JP-005) — per `bootstrap/08_DECISION_LOG.md`'s own rules, the original entry is not edited; JP-018 is a new entry, and JP-005 is marked Superseded for its Administrator clause only. Needs founder confirmation shown in this file's revision history before Claude Code commits it as a real Decision Log entry — draft text is in the Decision Log update accompanying this tracker change.

## Important, not urgent

*(none currently — art-direction session reclassified above)*

## Urgent, not important

*(none currently)*

## Neither

*(none currently)*

*(Full detail on the five original findings: the Production Readiness Audit, 2026-08-10.)*

---

# Next

Tasks below are genuinely blocked by specific items in Now — not queued by default.

## Urgent + Important

- [ ] Build the Admin Panel — payouts, Experience verification, dispute/refund handling, review moderation. — **Blocked on:** chargeback/dispute liability decision, and JP-018 confirmed (both in Now). Founder-idea-first item: Joule describes what he wants, Claude AI converts it into a structured spec for review before anything gets built.
- [ ] Phase IV — Booking System Implementation — moved up from Later; this is the core "implementation" work blocking launch. — **Blocked on:** the conservation-fund and chargeback-liability decisions (both in Now) for anything commission-related. Must route through Experience per JP-017 — no shortcut from Itinerary Item to Booking. ~28 unlocked candidate ideas already preserved in `bootstrap/09_BACKLOG.md` under "Reference — Phase IV Booking Domain Candidate Ideas" (commit `96aaa73`) — read them there, do not duplicate the list into this file.
- [ ] Build the Sales Plan — host/artisan acquisition, the actual cold-start problem for a two-sided marketplace. — **Blocked on:** chargeback/dispute liability decision (Now) — can't promise a specific payout mechanism to hosts before it's settled. Founder-idea-first item.

## Important, not urgent

- [ ] Build the Marketing Plan — demand-side, sequenced after the Sales Plan deliberately: pushing demand before there's enough real, verified supply (Experiences, hosts) risks an empty-shelf first impression, which works against the Trust principle. — **Blocked on:** conservation-fund percentage decision (Now) for any claim referencing the fund specifically. Founder-idea-first item.

## Urgent, not important

*(none currently)*

## Neither

*(none currently)*

---

# Later

## Important, not urgent

- [ ] Launch Process — the final gate: go-live checklist, Xendit live mode, first real booking. — **Depends on:** Admin Panel, Phase IV, Sales Plan, and Marketing Plan (all Next) being substantially complete. Founder-idea-first item, last to detail once the pieces feeding into it exist.
- [ ] CBT certification — parked, awaiting a founder decision on whether and when to pursue it. Nothing further defined yet.
- [ ] Ticket Agent commission rate (Group B — festivals/large events) — explicitly deferred to Phase 2 per JP-015, not needed for launch. Not blocking anything in Now or Next.

## Urgent, not important

*(none currently)*

## Neither

*(none currently)*

---

# Revision History

| Date | Change |
|---|---|
| 2026-08-10 | Created. Seeded with the five Critical findings from the Production Readiness Audit (Now / Urgent+Important), the Explorer map/art-direction session (Now / Important), CBT certification (Later, parked), and a link to the Phase IV booking-domain reference list already in the Backlog (Later). |
| 2026-08-12 | Founder set an explicit immediate sequence: PDPA review (1st) → Explorer map/art-direction session (2nd, reclassified Urgent+Important) → conservation-fund percentage decision (3rd, newly added). Added chargeback/dispute liability as a new Now decision, blocking Admin Panel and Sales Plan. Added JP-018 draft (Administrator Tooling into V1 scope, partially superseding JP-005 — Host Portal stays excluded, unchanged) as a Now item pending founder confirmation and Claude Code commit. Added the V1 Launch Path to Next/Later: Admin Panel Build, Phase IV Booking System Implementation (moved up from Later), Sales Plan, Marketing Plan, and Launch Process — each blocked or sequenced per the dependencies noted inline. |
