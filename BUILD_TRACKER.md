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
- [x] Get the PDPA consent / privacy notice reviewed — superseded by a full structural review, not just a review of the interim notice. Real finding: the "host-facing notice" was actually a Scout-facing reminder line, not a document hosts ever saw. Resolved: host-facing and Explorer-facing notices drafted (English + Thai), content and legal-basis reasoning independently verified across two research passes (Xendit's real product mechanics, Thailand's PDPC 90-day deletion rule, ETA Section 9/26, TDID's real existence, DocuSign's data-residency structure). Retention policy, consent mechanism, and Type B bank-data handling drafted as JP-019, JP-020, JP-021 — pending commit. — **Done** (structure and content; see Important/not-urgent below for what's still open).
- [x] Tell hosts what's being recorded about them and why, at the point a Scout records it — there is currently no notice to the host at all. — **Flag:** Thailand PDPA / basic fairness — people are being written about without being told. — **Done** (commit `c8239c1`).
- [x] Scouting form UX refinement round 2 — Description moved to last with a deterministic (non-AI) draft generator, Tags/Best-visit/Languages converted to multi-select chips, Landscape & geographic story converted to three chip-picker groups (kept on the shared Place record, not per-Experience), a general reusable "Other → free text" mechanism applied everywhere Other appears, Fusion options added. — **Done** (commits `f57fe2b`, `a92f27b`) — **live authenticated save/reload test confirmed directly by the founder**, closing the one verification gap no AI session could close itself.
- [ ] **(1st — next action)** Hold a dedicated Explorer map / art-direction design session — was 2nd in the founder-set sequence behind PDPA review; PDPA's substantive legal/structural work is now done, so this moves up. Hand-drawn, Marauder's-Map-inspired, geographically real, not tied to the pixel-art Creative Framework (superseded for Journey Planner by JP-013). Also folds in an unresolved idea: weather/time-awareness UI, balancing Western efficiency expectations against Thai hospitality warmth. Not a coding task until this session happens — no visual language exists to build against yet.
- [ ] **(2nd)** Decide the conservation-fund percentage — a carve-out from the locked 15% commission (JP-015), discussed at length, never given a number. — **Flag:** Trust (Philosophy) — any conservation-fund claim in the future Marketing Plan must match a real, locked number, not a placeholder. — **Blocks:** the Marketing Plan (Next, below) can't reference the fund with any specific commitment until this is decided.
- [ ] Decide chargeback/dispute liability — who is liable, platform or host, in a Xendit chargeback or dispute. Xendit's own xenPlatform activation flow requires an answer before it can be turned on. — **Blocks:** the Admin Panel's payout section and the Sales Plan's pitch to hosts (both Next, below) — neither can be built or pitched honestly against an undefined liability model.
- [x] Draft & confirm JP-018 — Administrator Tooling into V1 scope — **Done**, locked (commit `efe9dff`). Partially supersedes JP-005 for the Administrator clause only; Host Portal remains excluded, unchanged.
- [ ] Lock JP-019, JP-020, JP-021 — Data Retention & Deletion Policy, In-House Consent Capture Mechanism, Type B Host Bank-Data Handling via MANAGED Sub-Accounts. Drafted, diff-verified against the live Decision Log, staged for Claude Code. Sequenced ahead of the consent-notice commit since the notices' reasoning depends on these being locked first, not the other way around.
- [ ] Build the consent-capture UI on the scouting form (checkbox + in-app signature canvas + document-version hash + timestamp/IP/device metadata) — content is finalized, mechanism is not yet built. Staged to happen in the same Claude Code handoff as the consent-notice commit, per explicit founder sequencing — not deferred to a later pass. Explorer-facing equivalent is out of scope until an Explorer-facing product exists.

## Important, not urgent

- [ ] Supply the 4 remaining inputs for the PDPA consent notices — legal entity name, official LINE ID, official contact email, native Thai/legal translation review. Explicitly classified Important, not urgent by founder direction, 2026-08-14 — the rest of the PDPA/consent work (JP-019–021, the UI build) proceeds in parallel without waiting on these. None of the four are tasks an AI session can complete: the entity name is confidential and founder-supplied only; the LINE ID and email likely require creating real business accounts, which stays a founder action; the translation review needs an actual native/legal reviewer, not a research pass. Once all four land, the staged consent-notice commit becomes a single drop-in action for Claude Code.

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

# To Revisit Soon

Distinct from Now/Next/Later — these aren't scheduled tasks with a clear next action, they're **trigger-based**: come back to each one when its specific trigger happens, not on any calendar. Grouped here so they don't get silently forgotten once the PDPA thread closes.

- **Government contact's answer on Supabase cross-border classification** — still with Joule, no report back yet. Trigger: when his contact responds. Until then, the consent notices conservatively assume Supabase's Singapore hosting *does* count as a cross-border transfer — the safer default, not a final legal conclusion.
- **ETA Section 26 "Reliable Electronic Signature" question** — JP-020 explicitly claims Section 9 compliance only, not Section 26; Thai legal commentary is split on whether in-house engineering can meet Section 26 without third-party certification. Trigger: same government-contact conversation as above, or sooner if a real signature dispute ever comes up.
- **LINE as a data processor** — currently disclosed in the consent notices as "not yet active." Trigger: the moment host-communication automation (booking confirmations, 24hr reminders, revenue summaries via LINE OA, per the Booking System Structure Report §5) actually ships. Needs its own explicit consent line at that point — don't just silently edit the existing notice.
- **Explorer-facing consent-capture UI** — the notice text exists (Explorer section of the consent notices), but no Explorer-facing product exists yet to build the actual checkbox/signature mechanism into. Trigger: whenever Explorer-facing product work starts.
- **MANAGED → OWNED sub-account watch** — the host-facing notice's claim that Journey Planner "does not collect or store" bank data is true specifically because Type B hosts are onboarded as MANAGED sub-accounts (JP-021). Trigger: if any host's Xendit sub-account type is ever changed to OWNED, for any reason — the notice becomes inaccurate the moment that happens and must be updated *before* the change ships, not after.
- **DocuSign / Zoho Sign as a signature upgrade path** — set aside, not ruled out. Trigger: a real dispute that tests the Section 26 question, or scale that justifies moving off the in-house mechanism. DocuSign (Australia data-residency region) and Zoho Sign (India region) remain the two evaluated options if that trigger happens — neither covers Thailand/Singapore directly, so the notice's data-residency disclosure would need updating alongside any switch.

---

# Revision History

| Date | Change |
|---|---|
| 2026-08-10 | Created. Seeded with the five Critical findings from the Production Readiness Audit (Now / Urgent+Important), the Explorer map/art-direction session (Now / Important), CBT certification (Later, parked), and a link to the Phase IV booking-domain reference list already in the Backlog (Later). |
| 2026-08-12 | Founder set an explicit immediate sequence: PDPA review (1st) → Explorer map/art-direction session (2nd, reclassified Urgent+Important) → conservation-fund percentage decision (3rd, newly added). Added chargeback/dispute liability as a new Now decision, blocking Admin Panel and Sales Plan. Added JP-018 draft (Administrator Tooling into V1 scope, partially superseding JP-005 — Host Portal stays excluded, unchanged) as a Now item pending founder confirmation and Claude Code commit. Added the V1 Launch Path to Next/Later: Admin Panel Build, Phase IV Booking System Implementation (moved up from Later), Sales Plan, Marketing Plan, and Launch Process — each blocked or sequenced per the dependencies noted inline. |
| 2026-08-14 | PDPA review's substantive work marked done: notices drafted (EN/TH, host + Explorer) and independently verified across two research passes; JP-018 confirmed locked (commit `efe9dff`); JP-019–021 (retention policy, consent mechanism, Type B bank-data handling) drafted and staged. Art-direction session moves up to 1st in the sequence, conservation-fund decision to 2nd. Added a new Important/not-urgent item: supplying the 4 remaining inputs (legal entity name, LINE ID, contact email, Thai translation review) needed before the consent notices and consent-capture UI can go live — explicitly non-blocking for everything else, per founder direction. |
| 2026-08-14 (cont.) | Added a new **To Revisit Soon** section — trigger-based follow-ups distinct from scheduled Now/Next/Later work: the government contact's cross-border/Section 26 answer, LINE's processor status once automation ships, the Explorer-facing consent UI once that product exists, a standing watch on the MANAGED-sub-account guarantee, and DocuSign/Zoho Sign as a shelved signature upgrade path. Documented so the PDPA thread can close without any of these silently dropping. |
