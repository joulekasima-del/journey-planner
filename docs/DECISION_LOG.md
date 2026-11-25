# Journey Planner Decision Log

Version: 1.0

Status: Active

> **File locations (2026-11-25 reorganization).** This log moved from `bootstrap/08_DECISION_LOG.md` to `docs/DECISION_LOG.md`. Older entries' "Related Documents" use the old names; entries themselves are never edited. Map: `02_PRODUCT_CONTRACT.md` / `03_PROJECT_PHILOSOPHY.md` / `00_START_HERE.md` → `docs/PRODUCT.md`; `07_PROJECT_ROADMAP.md` → `docs/ROADMAP.md`; `09_BACKLOG.md` → `docs/BACKLOG.md`; `10_PROJECT_GLOSSARY.md` → `docs/GLOSSARY.md`; `01`/`05`/`06` → `docs/HOW_WE_WORK.md`; `04_CREATIVE_FRAMEWORK.md` → archived. Originals: `archive/bootstrap-v1/`.

---

# Purpose

The Decision Log is the permanent institutional memory of the project.

It records important product, business, creative, engineering, and workflow decisions that have been explicitly approved.

Its purpose is to prevent the project from depending on conversation history.

Every significant decision should be traceable.

---

# Philosophy

Every important decision should be made once, documented clearly, and reused consistently.

The Decision Log exists to protect momentum.

---

# Rules

## Decisions are immutable

Once a decision has been marked:

Confirmed

or

Lock it

it becomes a permanent project decision.

The decision remains valid until a new explicit decision replaces it.

---

## Every entry must include

- Decision ID
- Category
- Title
- Status
- Date
- Decision
- Reason
- Impact
- Related Documents
- Superseded By (if applicable)

---

## Categories

Examples

Business

Product

UX

Creative

Engineering

Workflow

Data

Architecture

Infrastructure

Documentation

---

## Status

Allowed values

Locked

Superseded

Deprecated

Archived

Only Locked decisions are active.

---

# Decision Template

Decision ID

JP-000

Category

Product

Title

Example Decision

Status

Locked

Date

YYYY-MM-DD

Decision

One concise statement describing the decision.

Reason

Why this decision was made.

Impact

How this affects future work.

Related Documents

List affected Bootstrap Pack documents or specifications.

Superseded By

None

---

# Active Decisions

## JP-001 — Journey Planner is the Product

Category: Product

Status: Locked

Date: 2026-08-03

Decision:

The platform's primary product is the Journey Planner.

Booking exists only to support the journey.

Reason:

Planning is the core customer value.

Booking is a supporting capability rather than the platform's identity.

Impact:

All UX, architecture, and future features must reinforce planning before booking.

Related Documents:

- 02_PRODUCT_CONTRACT.md
- 03_PROJECT_PHILOSOPHY.md
- 07_PROJECT_ROADMAP.md

Superseded By: JP-029 (identity wording only — "Booking exists only to support the journey" is replaced; "Journey before Booking" remains a UX principle)

---

## JP-002 — Working Protocol v2

Category: Workflow

Status: Locked

Date: 2026-08-03

Decision:

All project work follows:

Discover → Lock → Produce → Implement → Verify → Release

Reason:

Protects decision quality while maintaining implementation momentum.

Impact:

Every contributor follows the same product workflow.

Related Documents:

- 01_WORKING_PROTOCOL.md

Superseded By: None

---

## JP-003 — Shared Creative Framework

Category: Creative

Status: Locked

Date: 2026-08-03

Decision:

Journey Planner adopts the Nature Base Creative Framework.

Reason:

The creative language is independent from the business domain.

Impact:

Future products reuse the same visual identity, production pipeline, and artistic standards.

Related Documents:

- 04_CREATIVE_FRAMEWORK.md

Superseded By: None

---

## JP-004 — Journey Architecture

Category: Architecture

Status: Locked

Date: 2026-08-03

Decision:

The platform architecture follows:

Journey → Journey Day → Itinerary Item → Booking

Reason:

Separates planning from reservation while keeping bookings attached to itinerary items.

Impact:

All engineering and UX decisions should preserve this hierarchy.

Related Documents:

- 02_PRODUCT_CONTRACT.md
- Engineering specifications

Superseded By: None

---

## JP-005 — User Roles

Category: Product

Status: Locked

Date: 2026-08-03

Decision:

Version 1 supports:

Explorer

Scout

Host (future)

Administrator (future)

Reason:

Allows focused development while keeping future expansion straightforward.

Impact:

Host and Administrator functionality remain outside Version 1 implementation.

Related Documents:

- 02_PRODUCT_CONTRACT.md
- 07_PROJECT_ROADMAP.md

Superseded By: JP-018 (Administrator clause) and JP-031 (Host clause, partially — a minimal Host Calendar enters Version 1; the full Host Portal stays excluded). The Scout clause is renamed Inspector by JP-037. The Explorer clause remains Locked and unaffected.

---

## JP-006 — Bootstrap Pack as Source of Truth

Category: Engineering

Status: Locked

Date: 2026-08-03

Decision:

The Bootstrap Pack becomes the highest-level documentation for the project.

Conversation history is never the primary source of truth.

Reason:

Protects long-term maintainability and AI onboarding.

Impact:

Future contributors begin with repository documentation rather than historical chats.

Related Documents:

- 00_START_HERE.md
- All Bootstrap Pack documents

Superseded By: None

---

## JP-007 — Experience Reference in Itinerary Item

Category: Architecture

Status: Locked

Date: 2026-08-06

Decision:

An Itinerary Item references exactly one Experience.

The Experience holds the reusable, verified information about the place or activity (name, type, description). The Itinerary Item holds only what is specific to that traveller's plan (which day, what order).

The same Experience can be referenced by any number of Itinerary Items, across any number of Journeys.

Reason:

Reflects how local tourism actually works. A homestay, workshop, or natural site is collected and verified once, then reused by every traveller who includes it in their own plan — the same way a community trail sign lists numbered stops that any visitor can independently choose to visit.

Impact:

JP-004 is not superseded. The Journey → Journey Day → Itinerary Item → Booking chain stays exactly as locked. This completes it by adding the missing reference from Itinerary Item to Experience, a term already defined in the Glossary but not previously connected to the structure.

Related Documents:

- 02_PRODUCT_CONTRACT.md
- 10_PROJECT_GLOSSARY.md

Superseded By: None

---

## JP-008 — AI-Assisted Planning Support (Version 1 Scope Clarification)

Category: Product

Status: Locked

Date: 2026-08-06

Decision:

Version 1 includes AI assistance that suggests and helps compare Experiences, and answers questions, while the Explorer manually builds their own Journey.

Version 1 does not include automatic full-itinerary generation ("AI trip generation"), which remains explicitly excluded.

Reason:

The traveller's own planning stays central to the product — Journey before Booking, Discovery before Commitment. AI assistance supports that process rather than replacing it. This makes the existing included/excluded boundary precise rather than leaving "AI trip generation" ambiguous.

Impact:

02_PRODUCT_CONTRACT.md Version 1 Scope gains "AI-assisted Experience suggestions during planning" under Included. "AI trip generation" remains under Excluded, now defined explicitly as full automatic itinerary creation.

Related Documents:

- 02_PRODUCT_CONTRACT.md
- 07_PROJECT_ROADMAP.md

Superseded By: JP-032 (the exclusion of automatic itinerary generation only — AI-assisted suggestions remain in scope)

---

## JP-013 — Journey Planner Diverges from Shared Creative Framework

Category: Creative / Product

Status: Locked

Date: 2026-08-10

Decision:

Journey Planner no longer adopts the shared Nature Base Creative Framework (pixel art, Master Palette, Companion character). This supersedes JP-003 for Journey Planner specifically.

The shared framework itself remains valid and continues to be actively used by Nature Base Workspace and any other future studio product — this decision only removes Journey Planner from its adopters, it does not retire the framework. The framework has been copied (not moved) to its own reusable repository, `studio-creative-framework`, leaving Nature Base Workspace's original copy untouched.

Journey Planner's actual art direction is not yet decided. It will be defined in a dedicated design session, grounded in the founder's stated direction: hand-drawn, illustrated map-style visuals, evoking a living, explorable map rather than pixel art — warm and alive without looking AI-generated.

Reason:

The pixel-art framework was inherited from a different product (Nature Base Workspace) via JP-003's original adoption, not decided for Journey Planner on its own merits. On review, it doesn't match the founder's actual stated creative vision for this specific platform.

Impact:

`bootstrap/04_CREATIVE_FRAMEWORK.md` stays intact and unedited — it correctly describes a reusable studio standard, not Journey Planner's art direction specifically. A new Journey Planner-specific creative document is still needed, pending the design session referenced above.

Related Documents:

- bootstrap/04_CREATIVE_FRAMEWORK.md
- studio-creative-framework (external repository)

Superseded By: None

---

## JP-014 — Payment Infrastructure: Xendit xenPlatform

Category: Business / Technical

Status: Superseded

Date: 2026-08-12

Decision:

Journey Planner uses Xendit's xenPlatform product for payment collection and fund splitting: a Master Account (the platform) with Sub-Accounts (one per host), automatic Split Fee deducting commission per transaction, remainder disbursed to the host's bank account. Journey Planner never holds funds directly and does not need its own E-Payment License — the licensed infrastructure is Xendit's.

Reason:

Resolves the earlier researched legal blocker (a sole proprietor cannot obtain an E-Payment License directly) without requiring incorporation first. Xendit's documented xenPlatform use cases (Payment Service Provider, SaaS Platform) match this business model directly.

Impact:

Supersedes the earlier V1 descoping of commission collection (from the payment-legal research session). Booking commission collection is back in scope, routed through Xendit rather than direct collection.

Open, not resolved by this decision: who is liable in a chargeback/dispute (host or platform) — Xendit's own activation flow requires an answer before xenPlatform can be turned on. This needs a founder decision before implementation, not assumed.

Related Documents:

- Booking System Structure Report, August 2026

Superseded By: JP-034 (Stripe Connect replaces Xendit xenPlatform).

---

## JP-015 — Business Model v1: Commission Rate & Two Commercial Engines

Category: Business

Status: Locked

Date: 2026-08-12

Decision:

15% flat commission on Group A (Booking Commission Engine: Workshops at launch, RSVP and Accommodation later), collected via Xendit Split Fee. Group B (Ticket Agent Model, for festivals/large third-party events) is a structurally separate, non-custodial affiliate/resale model — Journey Planner never holds the ticket revenue, so it doesn't depend on Xendit's licensed infrastructure. Group B's commission rate is explicitly deferred to Phase 2, not decided now.

Reason:

Two different fund-custody situations require two different structures, not one engine forced to cover both.

Impact:

The conservation/community fund carve-out discussed earlier in this project (a percentage taken from the 15% commission) is NOT resolved by this decision — the booking report does not address it, and no percentage is locked. This remains genuinely open.

Related Documents:

- Booking System Structure Report, August 2026
- bootstrap/09_BACKLOG.md (Phase IV reference material)

Superseded By: None

---

## JP-016 — Business Entity: Sole Proprietorship

Category: Business / Legal

Status: Superseded

Date: 2026-08-12

Decision:

Journey Planner operates as a Sole Proprietorship under the founder's own name (Thai citizen), not a registered company, for V1 launch.

Reason:

Confirmed eligible without restriction given citizenship; Xendit xenPlatform activation is self-service and not entity-gated at this stage, removing the earlier open question about whether incorporation was a prerequisite.

Impact:

Withholding tax (3%) does not apply yet (only triggers for juristic-person payers) but the Admin dashboard must log structured per-booking financial records (date, host, gross amount, commission, net, Xendit disbursement reference) from day one, so the transition to Limited Company later doesn't require reconstructing historical records. VAT registration is required once revenue exceeds 1,800,000 THB/year, regardless of entity type — track this actively, not just at incorporation. Accommodation booking (Group A) stays paused pending incorporation and regulatory clarity under Thailand's Digital Platform Royal Decree.

Related Documents:

- Booking System Structure Report, August 2026

Superseded By: JP-033 (entity). The accommodation pause in its Impact is replaced by JP-030; its per-booking financial-record requirement carries forward under JP-033.

---

## JP-017 — Booking Data Model Correction: Experience Layer Required

Category: Architecture

Status: Locked

Date: 2026-08-12

Decision:

The booking system's data flow is `Journey → Journey Day → Itinerary Item → Experience → (optionally) → Booking → Availability Slot` — not `Itinerary Item → Booking` directly. This corrects the Booking System Structure Report's own diagram, which omitted the Experience layer.

Reason:

JP-007 already locked that an Itinerary Item references exactly one Experience. A Booking attaches to an Availability Slot, which belongs to an Experience — Booking does not attach to Itinerary Item directly. The report's simplified diagram would have silently broken this if built as literally drawn.

Impact:

Any implementation work on the booking system (Phase IV) must route through Experience, not skip it. V1 availability models (Timed Slot, Informational Only) and the V2-designed models (Stay, Optional Reservation) all attach to an Experience's Availability Slots.

Related Documents:

- Booking System Structure Report, August 2026
- bootstrap/08_DECISION_LOG.md (JP-004, JP-007)

Superseded By: None

---

## JP-018 — Administrator Tooling Brought Into Version 1 Scope

Category: Product

Status: Locked

Date: 2026-08-13

Decision:

Administrator tooling is brought into Version 1 scope, ahead of launch. This supersedes JP-005 for the Administrator clause only — the Explorer, Scout, and Host clauses of JP-005 remain Locked and unaffected. Version 1 Administrator scope covers payout management (Xendit disbursement oversight), Experience/listing verification, dispute and refund handling, and review moderation.

Reason:

Running real money through Xendit's Split Fee model at launch requires operational control from day one — deferring Administrator tooling would mean either no operational oversight at launch or building it under time pressure once money is already moving. Host self-service is not required at Version 1's host volume: Scout-mediated onboarding already collects payout KYC directly during the scouting visit (Booking System Structure Report, §4A), so Administrator tooling absorbs that operational need instead of hosts needing their own login.

Impact:

Admin Panel becomes an active, non-deferred build item in `BUILD_TRACKER.md`, gated on the chargeback/dispute liability decision and Xendit xenPlatform activation. Host Portal remains excluded from Version 1, unchanged, per JP-005.

Related Documents:

- 02_PRODUCT_CONTRACT.md
- 08_DECISION_LOG.md (JP-005, JP-014)
- BUILD_TRACKER.md

Superseded By: None

---

## JP-019 — Data Retention & Deletion Policy

Category: Legal / Product

Status: Locked

Date: 2026-08-14

Decision:

Host and Explorer personal data is auto-anonymized or deleted after 12 months of account or listing inactivity. Deletion requests from either role are honored within 90 days, including backups, in a manner that prevents recovery.

Reason:

The 90-day figure matches Thailand's PDPC Notification on Criteria for Personal Data Deletion, Destruction, and De-identification (effective November 11, 2024) — this is the statutory ceiling, not a self-imposed target. The 12-month inactivity trigger is a founder-set operational default to keep stored data proportionate to actual use, consistent with PDPA's data minimization principle.

Impact:

This retention policy is the basis for the retention/deletion clauses in the host-facing and Explorer-facing PDPA consent notices. Any future change to either number needs to update both the notices and this entry — mark this entry as superseded, do not edit it in place.

Related Documents:

- Consent Notices (host + Explorer, EN/TH)
- PDPA Review Tracker

Superseded By: None

---

## JP-020 — In-House Consent Capture Mechanism

Category: Legal / Engineering

Status: Locked

Date: 2026-08-14

Decision:

Consent from hosts and Explorers is captured in-house: an unchecked checkbox requiring explicit affirmative action, paired with an in-app drawn-signature box usable only from the person's authenticated session, a stored hash of the exact notice version signed, and timestamp/IP/device metadata. No third-party e-signature vendor is used at this stage.

Reason:

Third-party options (DocuSign, Zoho Sign) were evaluated and ruled out on data-residency grounds — neither offers a data center region covering Thailand or Singapore, which matters under PDPA regardless of their separate signature-legality coverage in Thailand. Thailand's own ETDA-licensed Certificate Authority route (via providers such as TDID) remains available but was not required: the in-house mechanism satisfies ETA Section 9 (general electronic signature — legally valid, admissible) without dispute. ETA Section 26's higher "Reliable Electronic Signature" tier is contested in Thai legal commentary as to whether it can be met without third-party certification — this decision does not claim Section 26 compliance, only Section 9.

Impact:

No third-party signing vendor is integrated at this stage. This decision locks the mechanism, not its implementation status — the actual UI (checkbox, signature canvas, hashing, metadata logging) is separate build work. If a dispute ever tests the Section 26 question, or scale later justifies it, DocuSign (Australia region) or Zoho Sign (India region) remain a documented upgrade path.

Related Documents:

- Consent Notices (host + Explorer, EN/TH)
- PDPA Review Tracker

Superseded By: None

---

## JP-021 — Type B Host Bank-Data Handling via MANAGED Sub-Accounts

Category: Business / Technical

Status: Superseded

Date: 2026-08-14

Decision:

Hosts using the platform's booking system (Type B) are onboarded to Xendit as MANAGED sub-accounts. Xendit sends the host an invitation email; the host completes KYC and bank details directly on their own Xendit dashboard. Journey Planner's systems never receive or store host bank account details.

Reason:

This is the specific Xendit configuration that makes the data separation described in JP-014 actually true in practice. The alternative, OWNED sub-accounts, are invisible to the partner and fully controlled by the platform — choosing that type would have silently routed bank data back through Journey Planner's own systems without changing anything about the architecture on paper.

Impact:

The host-facing consent notice's claim that bank data is "not collected or stored by us" is accurate specifically because of this configuration choice. If any host's sub-account type is ever changed to OWNED, that clause becomes false and the notice needs updating first. Directly dependent on JP-014 (Xendit as payment infrastructure).

Related Documents:

- Consent Notices (host + Explorer, EN/TH)
- Booking System Structure Report
- 08_DECISION_LOG.md (JP-014)

Superseded By: JP-034 (provider), then JP-036 (Hosts now have OWNED sub-accounts, so Journey Planner holds Host bank details).

---

## JP-022 — Explorer-Facing Art Direction: Tropical Living Field Guide

Category: Creative

Status: Locked

Date: 2026-08-16

Decision:

Journey Planner's Explorer-facing visual identity is the "Tropical Living Field Guide" direction: a calm, shaded-garden atmosphere combined with a Marauder's-Map-style revealing quality (relationships and detail unfold progressively, not literal parchment or fantasy decoration), restrained illustration, and geographic truth over decorative 2.5D. This fulfills the dedicated design session JP-013 deferred to — JP-013 itself remains valid and unchanged (Journey Planner still diverges from the shared pixel-art framework); this entry completes what JP-013 left open.

A working palette is confirmed as the starting point, pending accessibility validation before it becomes a final token system:

- Primary (Canopy Green) `#2F6F4E`
- Deep base (Forest Shade) `#123C32`
- Main light surface (Mist White) `#F3F7F1`
- Water accent (Pond Teal) `#6FAFA6`
- Warm accent (Clay Terracotta) `#B87955`
- Earth neutral (Weathered Wood) `#6B4A34`
- Quiet neutral (Path Stone) `#A6A092`
- Attention/offline (Sunlit Ochre) `#C89B3C`

Reason:

Matches the founder's original brief (hand-drawn, alive, Marauder's-Map-inspired, geographically real, explicitly not pixel art) directly. Confirmed by the founder against the verified design-bundle candidate material, not adopted from the bundle's own self-declared authority.

Impact:

Becomes the baseline for JP Visual Lab exploration and, once accessibility contrast is validated, JP Product Foundation color tokens. Does not itself finalize typography, motion, or exact component styling — those remain open per the still-open items list. Semantic/interface color must stay separate from this illustrated-world palette per the already-verified separation principle (color reinforces meaning, never carries it alone).

Related Documents:

- 08_DECISION_LOG.md (JP-013)
- journey-planner-explorer-interface-layers-map.md (original tracker, §22–23)
- Design Bundle Verification report (workspace/03_Design_Bundles/)

Superseded By: None

---

## JP-023 — Weather/Time-Awareness Display: Dual-Layer Pattern

Category: Creative / Product

Status: Locked

Date: 2026-08-16

Decision:

Weather- and time-sensitive information (temperature, timing, conditions) displays as two paired layers, not a binary choice between efficiency and warmth: the precise functional data stays fully intact and accurate (never hidden, softened, or replaced by vague mood language), paired with one short, warm contextual phrase generated alongside it. Example: not "32°C" alone, but "32°C, sticky by midday — good for an early waterfall visit, rest after lunch."

Reason:

Resolves an idea left open since the project's founding brief: balancing Western efficiency expectations against Thai hospitality warmth. Reframed as not actually a binary choice — clarity and warmth aren't opposites, so the resolution adds context rather than trading away precision. Reuses the same shape as the already-verified Action Card pattern (a status line plus a "why it matters" line) rather than inventing new interface mechanism, consistent with the project's standing "cut scope before adding process" principle. Two alternatives were considered and rejected for now: a time-of-day tone shift (real added complexity for V1) and a user-controlled Efficient/Warm toggle (requires maintaining two full copy systems).

Impact:

Applies wherever weather or time-sensitive status appears — Journey Day headers, route/travel estimates, offline-state messaging. Does not require new components beyond what the Action Card pattern already establishes; this is a content/copy pattern, not new UI infrastructure. Exact copywriting and the specific contextual-phrase generation approach (rule-based vs. AI-assisted) remain open, to be resolved during Station View prototype work.

Related Documents:

- 08_DECISION_LOG.md (JP-022)
- growth-design-adaptation-report.md (Action Card pattern)
- Design Bundle Verification report (workspace/03_Design_Bundles/)

Superseded By: None

---

## JP-024 — Platform Strategy: Mobile-First Web, Intentional Desktop, Native Apps Later

Category: Product / Architecture

Status: Locked

Date: 2026-08-16

Decision:

Journey Planner builds mobile-first: mobile is the primary design and build starting point, not a later adaptation of a desktop layout. When an Explorer opens the platform in a desktop browser, it must present as a properly, intentionally designed desktop experience — not a stretched or scaled-up version of the mobile layout. Native iOS and Android applications are a distinct, later phase, not part of current scope.

Reason:

Founder direction, given directly during the art-direction session. Refines what was previously only a general "mobile-first" quality (§24 of the original design tracker's usability rules, which literally lists "Mobile-first" as a required quality) into an explicit build-sequencing and platform commitment: mobile-first does not mean desktop-as-afterthought.

Note on a related but separate idea: the ChatGPT design bundle proposes a three-surface interaction model (Station View + inspector + Details View, with desktop showing map/inspector side by side and mobile stacking or using a bottom sheet) that would be directionally consistent with this decision. That model is candidate material only — per this project's own verification of that bundle (`00_VERIFICATION_READ_FIRST.md`), it was labeled LOCKED in the bundle's own register without ever going through this project's real Discover→Lock process. This decision does not adopt, depend on, or treat that model as settled; it is mentioned only as context that would need separate founder confirmation if it's adopted later.

Impact:

Claude Design work must plan both the mobile and desktop compositions early, even while building mobile first structurally — desktop should never be treated as a retrofit pass. The design system (JP Product Foundation) should track responsive breakpoints and layout intent for both, consistent with Claude Design's own actual capability to export components with defined breakpoints and interaction states. Native app translation is out of scope for now; nothing here requires over-engineering current web components for a future native phase that hasn't started, consistent with the project's standing "cut scope before adding process" principle — component structure should stay clean and portable where that's free, not pursued at the cost of current scope.

Related Documents:

- 08_DECISION_LOG.md (JP-022, JP-023)
- journey-planner-explorer-interface-layers-map.md (§24, mobile-first usability rule)

Superseded By: None

---

## JP-025 — Interface Typography: Noto Sans Thai

Category: Creative / Accessibility

Status: Locked

Date: 2026-08-16

Decision:

Noto Sans Thai is the typeface for all operational/functional interface text — UI labels, body copy, and display/title-sized text alike (tokens `--font-ui`, `--font-body`, `--font-display` all resolve to it). Decorative map-world lettering is a separate, isolated concern (token `--font-map-decorative`, currently Lora) and must never be used for operational information, consistent with the typography principle already established for this project.

Reason:

Chosen from three real candidates evaluated for supporting both Thai and Latin script cleanly (Noto Sans Thai, IBM Plex Sans Thai, Sarabun) — necessary since the product has confirmed bilingual English/Thai content (the PDPA consent notices are the first real example). During implementation, large screen-title text was found already quietly rendering in Lora — a decorative font — with no prior decision behind it. Corrected as part of this change: titles now resolve to `--font-display` (Noto Sans Thai) like all other operational text, and Lora was properly isolated to `--font-map-decorative` for genuine map-illustration use only.

Impact:

Wired into live components (not just proposed) — confirmed working in the Card component context and the design-system overview deck, both updated to reference the token system rather than hardcoded font names. Does not itself finalize the full type scale (sizes/weights per hierarchy level) or motion — those remain separate, still-open work.

Related Documents:

- 08_DECISION_LOG.md (JP-022)
- Consent Notices (host + Explorer, EN/TH) — the real bilingual content driving this requirement

Superseded By: None

---

## JP-026 — Design System Finalization: Card Material, Icon System, Semantic Color Tokens

Category: Creative / Accessibility

Status: Locked

Date: 2026-08-17

Decision:

Three related design-system elements are locked, each built and wired into live components in Claude Design's JP Product Foundation system, verified through the tool's own state report plus founder review of actual values (not just role names):

**Card material.** The liquid-glass treatment (including its later four-tint variant system) is fully reverted. Card uses a flat Canopy Green (`#2F6F4E`, per JP-022) fill with a soft contact shadow — no blur, no backdrop-filter, no glass sheen, no grain texture. Two variants: `solid` (default) and `featured`. The liquid-glass and tint approaches were both explored and explicitly rejected as inconsistent with JP-022's restrained, non-decorative visual identity.

**Icon system.** A 10-icon set (verified, synced, syncing, connected, offline, route, ready, attention, selected, current) on a 24×24 grid, 1.75px stroke, rounded caps/joins, 2px corner radius, flat single-color line — no literal/photographic detail, no decorative flourish. Every icon renders paired with its text label (`aria-hidden` on the icon; the label carries the accessible name) — never icon-only. Meets 3:1 minimum non-text contrast and a ≥44px hit target when interactive. Two real legibility risks were found and corrected during review: Ready/Attention initially shared one flag silhouette distinguished only by fill (solid vs. outline), and Synced/Syncing initially shared one cloud glyph distinguished only by mirrored chevrons — both patterns fail at small size or a quick glance. Both pairs now use genuinely distinct silhouettes (Ready: flag+checkmark; Attention: warning triangle+exclamation; Syncing: distinct circular-refresh glyph).

**Semantic color tokens.** Six roles, confirmed visually distinct from each other and from the JP-022 illustrated-world palette (verified side by side, not just asserted): Verified (`#1E4FC2` text on `#E2EAFB`), Attention (`#8A4B0B` on `#F6E9DA`), Critical (base `#C93C30` for UI elements, `#A32B22` on `#F8E2DF` for text pairs meeting 4.5:1), In Progress (`#5B2FAE` on `#EDE6FA`), Neutral (`#454E58` on `#E7E9EC`), and Focus (semantic Focus Blue, used for `--focus-ring`). Two orphaned tokens from an earlier, pre-semantic-system exploration (`--rust-proposed`, `--bg-rust`) were found to have no component consumer and are removed rather than adopted.

Reason:

This is the JP Product Foundation's design-token layer reaching an actually-decided state, closing the gap between "approved in a Claude Design chat" and "durably recorded" that had been accumulating across this design session — the same gap already closed once for typography (JP-025) and now closed for the remaining three elements built alongside it. The Card material correction specifically enforces JP-022's own locked principle (restrained illustration, not decorative or tech-forward treatment) against a drift that had crept into implementation. The icon corrections enforce the project's standing rule that meaning must never ride on color or fill alone.

Impact:

`tokens/colors.css`, `components/core/Card.jsx`, and the new `Icon` component (`Icon.jsx`/`.d.ts`/`.prompt.md`) are the source of truth going forward for these three elements. `--rust-proposed` and `--bg-rust` should be deleted from `tokens/colors.css`, not left as unreferenced dead code. The icon set covers only the 6 originally-requested categories, not a full inventory (no error/critical-specific icon distinct from Attention, no map/place icons, nothing for form validation) — remains open, tracked separately, not implied complete by this entry. Several housekeeping items remain outside this entry's scope and should not be assumed resolved by it: stale "-proposed" naming on already-approved files/cards, a stale caveats section in the design system's own readme, and a stale font reference in the design-system-overview-deck template.

Related Documents:

- 08_DECISION_LOG.md (JP-022, JP-025)
- Design Bundle Verification report (workspace/03_Design_Bundles/)

Superseded By: None

---

## JP-027 — Journey Day Navigation: Bookmark, Not Tracker

Category: Creative / Product

Status: Locked

Date: 2026-08-18

Decision:

Journey Day navigation functions as a notebook bookmark, not a progress tracker.
Day pills let the Explorer open any Journey Day independently, each carrying a
small readiness-status dot using the existing semantic tokens (Verified,
Attention, Neutral — JP-026). No connecting line, percentage, streak, or
completion sequence exists between days. Days are independent pages the
Explorer can open in any order, not steps in a required traversal.

Reason:

Surfaced while designing the Station View day-selection component: an early
rail-based "progress" variant was proposed, using the same visual grammar as
flight trackers and fitness apps (a connecting line, a marker's position
implying how far through the journey the Explorer is). On reflection against
the platform's actual identity — an operational planning notebook, not a
live-tracking companion — that variant was rejected. It implied linear motion
and completion pressure even without a percentage or streak attached, which
works against the project's standing no-gamification principle more subtly
than an obvious points system would, but no less really. The bookmark framing
was chosen instead because it matches how a physical planner actually works:
a ribbon or dog-ear marks where you are; it doesn't imply the earlier pages
are "more complete" than the later ones.

Impact:

Applies to the Journey Day navigation component specifically (the day-pill
row already present in the Station View prototype work). Does not introduce
new tokens or components — reuses the semantic-status dots from JP-026
directly. Establishes a reusable filter for future components: any proposed
UI element should be checked against whether it describes an independent
page (fits the platform) or implies motion/sequence through a journey
(doesn't), rather than being decided case-by-case on aesthetics alone.

Related Documents:

- 08_DECISION_LOG.md (JP-026)
- Independent Validation Report — Journey Planner Research Handoff (accessibility/ethics research session, 2026-08-18)

Superseded By: None

---

## JP-029 — Product Identity: Journey Planner with Its Own Booking Marketplace

Category: Product / Business

Status: Locked

Date: 2026-11-25

Decision:

Journey Planner is a journey-planning platform for travel across Thailand that runs its own booking marketplace. Travellers plan a Journey first; the Experiences in that Journey that need advance booking (accommodation, reservations, day trips and similar) are booked through the platform, which earns a commission on each booking. Planning stays first in the interface. Booking is openly the business's revenue engine, not a side capability.

Reason:

The founding wording ("not a booking platform", "not a marketplace", "booking is not the product") contradicts the locked commission model (JP-014, JP-015) and the founder's business plan. Every AI session reading the old wording pushes back on booking work.

Impact:

- Supersedes JP-001's "Booking exists only to support the journey" wording. "Journey before Booking" stays as a UX principle.
- Rewrite the identity sections of `00_START_HERE.md`, `02_PRODUCT_CONTRACT.md` (Mission, Product Identity, "It is not" list, Product Boundaries) and `03_PROJECT_PHILOSOPHY.md` Success section to match.
- Booking System becomes a V1 core spec, not a later phase.

Related Documents:

- 00_START_HERE.md
- 02_PRODUCT_CONTRACT.md
- 03_PROJECT_PHILOSOPHY.md
- 08_DECISION_LOG.md (JP-001, JP-014, JP-015)

Superseded By: None

---

## JP-030 — Version 1 Bookable Categories: Everything Bookable in Advance

Category: Product / Business

Status: Locked

Date: 2026-11-25

Decision:

Version 1 launches with all advance-bookable categories: accommodation (stays), reservations (e.g. dining or experiences that hold a place without a fixed product), and day trips / activities / workshops (timed slots). Experiences that need no booking stay in Journeys as Informational Only. All four availability models from the Phase IV candidate list are in V1: Timed Slot, Stay, Optional Reservation, Informational Only.

Reason:

Founder direction: the platform must be able to complete a traveller's whole plan, and accommodation is the largest share of trip spend.

Impact:

- Supersedes the JP-016 Impact clause pausing accommodation. Accommodation launch is gated on JP-033 (company registered) instead.
- Requires JP-031 (Host Calendar): accurate availability for stays is impossible without hosts updating their own dates.
- Launch is later than a day-trips-first launch would be. Accepted by the founder.
- Research needed before launch, not assumed: (1) whether selling day trips/tours requires a Department of Tourism tour-business licence; (2) whether accommodation hosts must hold hotel/homestay registration before they can be listed; (3) platform registration duties under the Digital Platform Services Royal Decree.

Related Documents:

- 02_PRODUCT_CONTRACT.md
- 09_BACKLOG.md (Phase IV Booking Domain Candidate Ideas)
- 08_DECISION_LOG.md (JP-016, JP-017, JP-031, JP-033)

Superseded By: None

---

## JP-031 — Minimal Host Calendar in Version 1

Category: Product

Status: Locked

Date: 2026-11-25

Decision:

Version 1 includes a minimal, mobile-first Host Calendar where a Host can: open and block dates or time slots, set capacity (rooms, seats), and confirm or decline booking requests. Nothing else. Content editing, media, analytics, messaging and payout settings stay out of V1 (Scouts and Administrators handle those).

Reason:

JP-030 puts accommodation and reservations in V1. Without hosts keeping their own availability, the platform will double-book, which breaks the Trust principle and causes refunds and chargebacks.

Impact:

- Partially supersedes JP-005 (Host clause) and the Product Contract's "Host Portal is intentionally excluded from Version 1". The full Host Portal (Roadmap Phase VI) stays future.
- Hosts become logged-in users: Host consent capture (JP-020) and the host PDPA notice apply at sign-up.
- Hosts must respond to requests within a set time window (to be decided in the Booking spec).

Related Documents:

- 02_PRODUCT_CONTRACT.md
- 07_PROJECT_ROADMAP.md (Phase VI)
- 08_DECISION_LOG.md (JP-005, JP-020, JP-030)

Superseded By: JP-037, partially: Hosts also register their own place in Version 1, and after verification their changes to place details need Administrator approval. The Host Calendar itself stays as decided here.

---

## JP-032 — Preference Questionnaire Builds an Editable Draft Journey

Category: Product

Status: Locked

Date: 2026-11-25

Decision:

The Explorer answers a short preference questionnaire for the whole trip (e.g. dates, arrival point, pace, interests, comfort, budget). They can override any answer for an individual Journey Day. From these answers the platform builds a draft Journey made only of verified Experiences. The Explorer reviews and can change anything (add, remove, reorder, swap) before booking. Nothing is booked automatically.

Reason:

This is the core of the founder's product idea: travellers say what they like and get a plan they can shape, instead of building every day from empty.

Impact:

- Supersedes JP-008's exclusion of automatic itinerary generation, and the matching "AI trip generation" line in the Product Contract's Excluded list.
- Data model: preferences are stored at Journey level, with optional overrides at Journey Day level.
- The two existing Compass mockups (8-question and 5-question) are input material for the question set, which is decided in the Questionnaire spec.
- Open, decided in the spec: rule-based vs AI-assisted generation, and how to explain why each Experience was chosen.

Related Documents:

- 02_PRODUCT_CONTRACT.md
- design-system/ui_kits/explorer/JourneyCompass.jsx
- design-system/ui_kits/explorer-proposal/Compass.jsx
- 08_DECISION_LOG.md (JP-007, JP-008)

Superseded By: None

---

## JP-033 — Business Entity: Thai Limited Company Before the First Booking

Category: Business / Legal

Status: Locked

Date: 2026-11-25

Decision:

Journey Planner registers as a Thai limited company before the first real booking is taken.

Reason:

Limits the founder's personal liability for chargebacks and disputes, unblocks accommodation (JP-030), and matches the PDPA notices draft, which is already written for a limited company.

Impact:

- Supersedes JP-016 (Sole Proprietorship).
- Per-booking financial records required by JP-016 still apply from day one.
- To confirm with an accountant, not assumed: withholding-tax duties as a juristic person, and VAT registration timing.
- Fix the PDPA notices draft reference from "pending JP-028" to JP-033.

Related Documents:

- docs/legal/PDPA_CONSENT_NOTICES.md
- 08_DECISION_LOG.md (JP-016, JP-030)

Superseded By: None

---

## JP-034 — Payment Infrastructure: Stripe Connect (Direct Charges)

Category: Business / Technical

Status: Superseded

Date: 2026-11-25

Decision:

Journey Planner uses Stripe Connect, registered to the Thai limited company (JP-033), as its payment infrastructure, replacing Xendit xenPlatform.

- Each Host has their own Stripe connected account and is the seller of record for their bookings.
- Payments use **direct charges** with an application fee: the Explorer pays the Host's account, and the platform's commission (JP-015) is taken automatically as the application fee.
- A checkout covering Experiences from several Hosts creates **one charge per Host**. The Explorer still sees a single checkout.
- Hosts complete identity checks and enter bank details on Stripe-hosted onboarding. Journey Planner's systems never receive or store host bank details.
- Payment methods at launch: cards and PromptPay.

Reason:

The founder chose to move off Xendit. Stripe is the provider the founder prefers to build on, and Stripe Thailand supports Connect, THB payouts and PromptPay.

Impact:

- Supersedes JP-014 (Xendit xenPlatform) and JP-021 (Xendit MANAGED sub-accounts). JP-021's principle carries over: host bank data stays with the provider, never with us. If onboarding ever moves to a platform-collected flow, the host consent notice must be updated first.
- Stripe Thailand does not support "separate charges and transfers", so the platform cannot take one combined payment and split it. Multi-host checkout must be built as several charges, including handling one Host's charge failing while others succeed.
- Under direct charges, the Host's account bears refunds and chargebacks by default. The chargeback-liability decision is still open; it now decides whether the platform reimburses Hosts in some cases, by policy.
- Payouts to Hosts in THB arrive about 7 business days after payment, on Stripe's standard schedule.
- Needs the Thai limited company (JP-033) to open the platform's Stripe account.
- To confirm with Stripe Thailand sales before building, not assumed:
  - which connected account types (Standard / Express) are available to a Thai platform
  - that application fees on direct charges work as described for THB and PromptPay
  - whether the platform can refund its application fee on a refund
- JP-015's 15% commission is unchanged; it is now collected as a Stripe application fee instead of a Xendit Split Fee. JP-018's payout oversight now means Stripe payouts. Neither entry is superseded.
- Update the PDPA notices and the Build Tracker "Host bank-data guarantee" trigger from Xendit to Stripe.

Related Documents:

- docs/PRODUCT.md §6, §9
- docs/legal/PDPA_CONSENT_NOTICES.md
- docs/DECISION_LOG.md (JP-014, JP-015, JP-021, JP-033)

Superseded By: JP-036 (back to Xendit xenPlatform, with Journey Planner as booking agent).

---

## JP-035 — Cancellation and Refund Policy

Category: Business / Product

Status: Locked

Date: 2026-11-25

Decision:

1. **Explorer cancels: Host picks a preset.** For each bookable Experience, the Host chooses one of three platform-defined cancellation policies:

   | Preset | Full refund | 50% refund | No refund |
   |---|---|---|---|
   | **Flexible** | Until 24 hours before start | — | Within 24 hours |
   | **Moderate** | Until 5 days before | Until 24 hours before | Within 24 hours |
   | **Strict** | Until 14 days before | Until 7 days before | Within 7 days |

   A no-show gets no refund under every preset. The policy in force when the Explorer books is saved with the Booking; a Host changing their preset later never affects existing bookings.

2. **Commission is refunded proportionally.** When an Explorer gets money back, the platform returns the same share of its 15% application fee (JP-015). A 50% refund returns 50% of the fee.

3. **Host cancels: full refund.** If a Host cancels a confirmed booking, the Explorer gets 100% back and the platform returns its whole fee. The cancellation is recorded against the Host; repeated Host cancellations lead to Admin review and possible removal.

4. **Weather and safety: the Explorer chooses.** If the Host or the platform calls off an Experience because it is unsafe or impossible (storm, flood, park closure), the Explorer chooses either a full refund or a free move to another available date. If the Explorer cancels because of weather worries but the Experience isn't called off, the normal preset applies.

5. **Refunds are automatic where the rules are clear.** Refunds under rules 1–4 are calculated by the system and returned to the original payment method. Anything outside them (disputes, exceptions, goodwill) goes to the Administrator (JP-018).

Reason:

Presets give Explorers the same familiar wording on every Experience and let Hosts with different risks (a homestay versus a one-hour workshop) protect themselves without writing their own terms. Refunding commission proportionally means a Host never pays commission on money they didn't keep, which matters for the Trust principle and for recruiting Hosts. Full refunds on Host cancellations and a refund-or-reschedule choice on safety cancellations keep the Explorer's Journey intact when something goes wrong that isn't their fault.

Impact:

- The Booking spec (Spec 4) must cover: preset selection per Experience, storing the policy on each Booking, the refund calculation, Host-cancellation tracking, and the reschedule flow for safety cancellations.
- The Host Calendar (JP-031) needs a way for a Host to cancel a booking and to call off a date for safety, with a reason.
- Under Stripe direct charges (JP-034), refunds come out of the Host's Stripe account. Stripe does not return its own processing fee on a refund, so on a refunded booking the Host loses that fee unless the platform chooses to cover it. Settle this together with chargeback liability, and say it plainly in the host agreement and Sales Plan.
- Experiences with no payment (free Optional Reservations, Informational Only) have no refund rules; a Host or Explorer can simply cancel.
- To confirm with Stripe Thailand, not assumed: that PromptPay payments can be refunded through Stripe, and how long refunds take to reach the Explorer.
- Thai consumer-protection rules on cancellations should be checked as part of the pre-launch legal research.

Related Documents:

- docs/PRODUCT.md §9
- docs/DECISION_LOG.md (JP-015, JP-018, JP-031, JP-034)

Superseded By: None

---

## JP-036 — Booking Agent Model on Xendit xenPlatform

Category: Business / Technical / Legal

Status: Locked

Date: 2026-11-25

Decision:

1. **Journey Planner is a booking agent only.** It never operates trips, stays or activities. Each Host is the provider of their Experience; Journey Planner arranges the booking and takes the payment on the Host's behalf, and earns a commission (JP-015).

2. **Xendit xenPlatform is the payment infrastructure.** Xendit holds the payment licence; Journey Planner's main account is the platform account.

3. **Hosts have OWNED sub-accounts.** Journey Planner creates and runs each Host's Xendit sub-account. Hosts never sign up for, log in to or see Xendit.

4. **Host onboarding happens during the Scout visit.** The Scout collects the Host's Thai bank account or PromptPay ID and the identity details Xendit requires, and the Host signs the host agreement (JP-020).

5. **One payment per Journey.** The Explorer pays once for every booked Experience in the Journey. Xendit split rules route each Host's 85% to that Host's sub-account in the same payment; Journey Planner keeps 15%. Payment methods: PromptPay, cards, Thai mobile banking and e-wallets, as Xendit supports them.

6. **The Host always gets exactly 85%.** Journey Planner pays Xendit's processing fees out of its 15%.

7. **Weekly payouts after the Experience.** A Host's money stays in their sub-account until the Experience has happened (for stays, after check-in). Every Monday the Administrator releases it to the Host's bank account (JP-018). Each payout comes with a statement by LINE or email: each booking, the gross amount, the 15% commission and the net amount paid.

8. **Refunds and chargebacks.**
   - Refunds follow JP-035. Before payout, the Host's part is refunded from their sub-account and the platform returns its commission in proportion.
   - A chargeback caused by the Host (no-show, not as described) is recovered from the Host's sub-account or next payout.
   - Every other chargeback, including fraud with stolen cards and anything the platform caused, is absorbed by Journey Planner.
   - Hosts never deal with Xendit, banks or dispute evidence; the Administrator handles disputes using the booking records.

Reason:

Hosts are small local businesses and people; they shouldn't have to open a payment account, pass checks on a provider's site or handle disputes. One payment per Journey keeps checkout simple for Explorers. Staying an agent on licensed payment infrastructure avoids the two big problems of Journey Planner being the seller: needing its own payment licence, and likely VAT on the full booking price instead of only the commission. Paying out after the Experience means cancellations and no-shows are settled before money leaves.

Impact:

- Supersedes JP-034 (Stripe Connect).
- Supersedes JP-021 (MANAGED sub-accounts). Journey Planner now holds Host bank details, so the Host privacy notice must be rewritten before the first Host is onboarded, and bank details need encrypted storage readable only by the Administrator.
- Settles chargeback liability (rule 8). The Stripe-fee question from JP-035 no longer applies.
- JP-029's "own booking marketplace" means a booking agent marketplace: Journey Planner books, Hosts provide.
- Host agreement must state the agent relationship, the 85/15 split, the weekly payout and the chargeback recovery rule.
- To confirm with Xendit Thailand before building, not assumed:
  - OWNED sub-accounts are available in Thailand, and what identity checks Journey Planner must do for each Host
  - one payment can split to several sub-accounts, and the maximum number of Hosts per payment
  - funds can be held in a sub-account and paid out to the Host's bank on the platform's instruction
  - fees per payment method, and the chargeback setting required at xenPlatform activation
- To confirm with the accountant and lawyer, not assumed:
  - VAT applies to the commission only under the agent model
  - withholding-tax duties on commission and payouts
  - whether a booking agent selling day trips needs its own Department of Tourism licence, or only the Hosts who run them do

Related Documents:

- docs/PRODUCT.md §6, §9
- docs/legal/PDPA_CONSENT_NOTICES.md
- docs/DECISION_LOG.md (JP-014, JP-015, JP-018, JP-020, JP-021, JP-029, JP-034, JP-035)

Superseded By: JP-037, rule 4 only: bookable Hosts enter their bank or PromptPay details themselves at registration, and the Inspector confirms identity in person. All other rules remain Locked.

---

## JP-028 — Purpose and Launch Audience: Itineraries Made Easy, English-Speaking Foreign Travellers First

Category: Product / Business

Status: Locked

Date: 2026-11-25

Decision:

1. **Purpose.** Journey Planner exists to help Explorers create the itinerary for their journey across Thailand easily. Planning is the product; booking supports the plan and is how the platform earns (JP-029, JP-036).

2. **Open to everyone.** Anyone can use Journey Planner: foreign tourists, expats, and Thai residents.

3. **Launch focus: foreign tourists and expats.** Version 1 is designed first for:
   - independent foreign tourists visiting Thailand;
   - English-speaking expats and long-stayers living in Thailand, who plan weekend and holiday trips and test hosts year-round.

4. **English only at launch.** The interface is in English. Thai place names are shown alongside English. A Thai-language interface, and the Thai domestic traveller features that come with it (LINE, weekend templates, Thai holiday modes), come in a later phase.

Reason:

The market research (2026-11-25) found foreign independent travellers earn about 5–10 times more commission per trip than Thai domestic trips, and their trip shape (long, multi-region, booked online) is exactly what a whole-journey planner does. Expats are small in number but cheap to reach, travel all year, and face the frictions Journey Planner removes (Thai-only hosts, LINE-only booking, no Thai bank account, dual pricing). Both groups can be served in English, so one language keeps Version 1 small. Thai travellers are the largest and most resilient market, so the platform stays open to them and the design leaves room for Thai later.

Impact:

- Replaces the 2026-11-16 JP-028 draft (Western experience seekers).
- The questionnaire asks travel dates first, and asks whether the Explorer is visiting or living in Thailand; that switches between full-journey and weekend-trip planning.
- 1–3 day Journeys (expat weekends) and 10+ day multi-region Journeys are both normal cases.
- Prices shown are the Host's own price; no foreigner markup.
- Still open, not decided here: launch region(s) (the research suggests Chiang Mai with Bangkok as the arrival hub); when Thai language ships; Chinese or other languages.

Related Documents:

- workspace/reports/Thailand traveller market potential.md
- docs/PRODUCT.md §1, §2
- docs/DECISION_LOG.md (JP-029, JP-032, JP-036)

Superseded By: None

---

## JP-037 — Host Self-Registration, Verification Standard and Inspection

Category: Product / Operations

Status: Locked

Date: 2026-11-25

Decision:

1. **Every Host registers themselves.** Any place can register through an online form, including places that need no booking (cafés, viewpoints, markets run by an owner). Registration collects: place details, category, contact, what the Explorer can do there, availability model (JP-030), any licence the law requires for that category, and, for bookable Hosts, the bank account or PromptPay ID for payouts (JP-036).

2. **Registration is free.** Journey Planner earns only its booking commission.

3. **Hidden until verified.** A registered place is not visible to Explorers and cannot go into a Journey until an Inspector has verified it.

4. **Verification Standard.** Journey Planner publishes a written standard for what a verified place must meet, per category: it exists and matches its description, it is safe, it holds the licences the law requires, prices are honest and shown in full, and category-specific rules (for example hygiene for food, animal welfare for animal experiences).

5. **Inspectors verify in person.** An Inspector visits each registered place, checks it against the standard, and confirms the Host's identity. The outcome is **verified** (the place gets the Verified badge and is published) or **not verified** (the Host is told why and can reapply).

6. **Inspectors add public places.** Places nobody owns (waterfalls, beaches, viewpoints, public markets) are added and verified by Inspectors directly.

7. **Verification can lapse.** Places are re-inspected periodically, and after serious complaints. A place that no longer meets the standard loses its badge and is hidden.

Reason:

Self-registration lets supply grow without Journey Planner finding every place itself, and covers every kind of place an itinerary needs, not just bookable ones. In-person inspection against a written standard keeps the "verified information only" principle and answers the trust problems found in the research (scams, unsafe or misleading experiences, unlicensed stays). Free registration removes the main barrier for small hosts.

Impact:

- **Scout becomes Inspector.** The Scout role (JP-005) is renamed Inspector: an internal field operator who inspects registered places against the standard and adds public places.
- **Supersedes part of JP-031.** In Version 1 a Host also uses the registration form, not only the Host Calendar. After verification, a Host's changes to their place's details go to the Administrator for approval before they show.
- **Changes JP-036 rule 4.** Bookable Hosts enter their bank or PromptPay details themselves at registration; the Inspector confirms their identity in person. Journey Planner still holds these details (encrypted, Administrator-only).
- **New spec:** the Verification Standard, written together with the Experience Data Standard (Spec 1).
- **Inspection capacity is the bottleneck.** With one founder, inspections must be queued and planned by region; the launch region sets where Inspectors work first.
- The Administrator (JP-018) handles the registration queue, verification outcomes, appeals and lapses.
- To check in legal research: which licences must be shown for each category (hotel/homestay registration, tour-business licence for day-trip operators).
- How often re-inspection happens is decided in the Verification Standard spec.

Related Documents:

- docs/PRODUCT.md §3, §8
- docs/DECISION_LOG.md (JP-005, JP-007, JP-018, JP-030, JP-031, JP-036)

Superseded By: None

---

## JP-038 — Explorer Star Ratings and Reviews in Version 1

Category: Product

Status: Locked

Date: 2026-11-25

Decision:

1. **Stars come from Explorers.** Each verified place shows a 1–5 star average and written reviews from Explorers. The Inspector does not give stars; the Verified badge (JP-037) is pass or fail.

2. **Who can review.** Only signed-in Explorers who actually had the place in their Journey:
   - for bookable places, after a completed booking (marked "Booked through Journey Planner");
   - for places that need no booking, after the Journey Day that included it has passed.

3. **New places** show "Verified · No reviews yet" instead of an empty rating.

4. **Moderation.** The Administrator moderates reviews (JP-018): removes abuse, spam and reviews unrelated to the place. Hosts can reply publicly once to each review.

5. **Explorers see both** the Verified badge and the star rating when choosing places and in their Draft Journey.

Reason:

The founder wants Explorers to judge places before building an itinerary. Star ratings from real visitors are the signal travellers already trust and understand; the Verified badge covers safety and honesty, so stars can focus on the experience itself. Limiting reviews to Explorers who had the place in their Journey reduces fake reviews.

Impact:

- Settles the open "Reviews in V1?" question: reviews are in Version 1, overriding the old Product Contract's exclusion.
- The Booking spec and Journey model need a completed-visit state to unlock reviews.
- Reviews of places that need no booking cannot prove the Explorer was there; the Administrator watches for abuse, and the rule may be tightened later.
- Ranking of places in discovery and in the Draft Journey may use ratings; how is decided in the Questionnaire & Draft Journey spec.

Related Documents:

- docs/PRODUCT.md §7, §9
- docs/DECISION_LOG.md (JP-018, JP-032, JP-037)

Superseded By: None

---

## JP-039 — Launch Region: Chiang Mai

Category: Product / Operations

Status: Locked

Date: 2026-11-25

Decision:

1. **Chiang Mai province is the first region.** At launch, Inspectors register and verify places only in Chiang Mai province: the city and the places within day-trip reach (for example Mae Rim, Doi Suthep, Doi Inthanon, Mae Taeng, Chiang Dao).

2. **Explorers can still plan a whole trip.** A Journey can include days elsewhere in Thailand (arrival in Bangkok, travel days, other regions), but at launch only Chiang Mai places can be suggested, added from the platform or booked. Days elsewhere are free-text days the Explorer fills in themselves.

3. **The platform says so plainly.** Explorers are told that verified places are currently in Chiang Mai only, and which regions are coming next.

4. **Expansion is a new decision.** Each further region is added by a locked decision, once Chiang Mai has enough verified places and inspection capacity allows.

Reason:

Chiang Mai fits both launch groups in JP-028: it is a top destination for independent foreign tourists, and a main home for English-speaking expats, digital nomads and retirees, who travel and test hosts year-round. It has dense small local hosts across every category (stays, cooking classes, workshops, guides, cafés and restaurants, nature). One region keeps inspection possible for a single founder.

Impact:

- Inspection, host registration and the Sales Plan start in Chiang Mai.
- Seasonality: high season is November–January. The February–April smoke-haze season lowers demand; the planner must show air-quality guidance for those months (JP-023), and expats are the main users then.
- The Journey model needs a "day outside a verified region" with free-text content (Spec 2).
- The Questionnaire & Draft Journey spec (Spec 3) builds Draft Journeys from Chiang Mai places only at launch.
- Next region candidates (from the research), not decided here: Bangkok as the arrival hub and expat weekend base, then Krabi/Phuket for the beach leg.

Related Documents:

- workspace/reports/Thailand traveller market potential.md
- docs/DECISION_LOG.md (JP-023, JP-028, JP-032, JP-037)

Superseded By: None

---

# Adding New Decisions

New entries should only be added after an explicit locked approval.

Each decision receives the next available identifier.

Decision IDs are never reused.

Deleted decisions remain archived rather than removed.

---

# Superseding Decisions

If a decision changes:

Do not edit the original entry.

Instead:

1. Mark the original as Superseded.
2. Create a new decision.
3. Link both entries.

This preserves project history.

---

# Reviewing Decisions

Before beginning:

- a new feature
- architecture change
- UX redesign
- major refactor

Review the Decision Log.

If the proposed work conflicts with an active decision,

pause implementation

and return to Product Discovery.

---

# Success

A new contributor should understand the project's most important decisions within fifteen minutes.

No contributor should need to search conversation history to understand why the product works the way it does.

---

# Guiding Principle

Decisions should become assets.

Not forgotten conversations.

---

# Amendment Rule

Changes to the Decision Log structure require explicit locked approval.

Historical decisions should remain preserved even when the project evolves.
