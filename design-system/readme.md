# JP Product Foundation — Journey Planner Design System

Governed design system for **Journey Planner**, a JP Product Foundation product: a trip-planning platform for slow, conservation-minded travel through real local communities in Thailand. Journey Planner is not a general AI itinerary generator — it is a structured, saved, trusted, editable journey workspace (`Journey → Journey Day → Itinerary Item`) where an Explorer turns discoveries into a plan they understand, revise, and act on.

A separate system, **JP Visual Lab**, holds exploratory tropical-field-guide illustration, motion, and after-launch Living Map work. It is out of scope here — this project is the locked structure, components, states, accessibility, and confirmed visual identity only.

## Sources this system was built from

No Figma file, GitHub repo, or font/logo files were attached to this project — by design (see `00_CLAUDE_DESIGN_SETUP_NOTES.md` in the source package: "typography is still open, no logo exists anywhere in this project"). Everything here is derived from a locally-mounted research and decision package, `journey-planner-claude-design-setup/`, not otherwise hosted:

- `01_Locked_Decisions/LOCKED_DECISIONS_JP022_023_024.md` — the only three genuinely locked decisions (art direction + palette, weather/time pattern, platform strategy).
- `02_Verification_Reports/00_VERIFICATION_READ_FIRST.md` and `design_bundle_status_update.md` — which parts of the original ChatGPT research bundle are real vs. overclaimed.
- `03_Original_ChatGPT_Bundle/` — background research (page inventory, state taxonomy, growth-strategy adaptation, production prompt). Treated as candidate material, not settled fact, per the verification reports.

If you have access to the real Journey Planner repository, Decision Log, or a Figma file, attach them and this system should be re-synced against real code/components rather than the research package alone.

## What's locked vs. candidate — read this before extending

Only three things are genuinely **locked**:

1. **JP-022** — "Tropical Living Field Guide" art direction + the eight-color working palette (pending accessibility contrast validation).
2. **JP-023** — weather/time-sensitive info always shows precise data *plus* one short warm contextual phrase, never one instead of the other.
3. **JP-024** — mobile-first as the build starting point; desktop must be an intentionally designed experience, never a stretched mobile layout.

Everything else this system uses (Journey hierarchy, discovery/compass flow, itinerary items, trust/booking states, Action Card pattern) is drawn from **required** or **current-direction** material in the research package — real functional requirements, but with open exact-implementation details. Explicitly **not** decided, and not built against as settled here:

- Whether accommodation is ever booked through the platform itself.
- The specific route/travel-time calculation architecture (PostGIS + Google Routes API is a proposal, not a locked decision).
- Final typography, motion system, and color tokens (this system's choices are a working starting point).
- The "three-surface" Station View / Inspector / Details View model — candidate only. The Journey Day screen here is one coordinated timeline instead, deliberately not committing to that model.

## Components

Standard primitive set (no existing component library or Figma inventory was available to enumerate against):

- **Core** — Button, IconButton, Badge, Tag, Card
- **Forms** — Input, Select, Checkbox, Radio, Switch
- **Feedback** — Toast, Tooltip, Dialog, ActionCard
- **Navigation** — Tabs

### Intentional additions

- **ActionCard** — not part of a "standard" component set, but a directly-documented locked pattern (`growth-design-adaptation-report.md`, reinforced by JP-023): what happened / why it matters / what to do / current status. Used throughout for booking, readiness, and offline messaging.

## UI kit

`ui_kits/explorer/` — click-through recreation of the Explorer-facing flow: Discovery landing, Journey Compass (guided discovery), Experience Information + booking gate, Journeys list, and Journey Day. Mobile-first, with a Desktop toggle on Journeys/Journey Day demonstrating an intentionally-designed desktop composition per JP-024.

## Index

- `styles.css` — root stylesheet, imports everything under `tokens/`.
- `tokens/colors.css`, `typography.css`, `spacing.css`, `elevation.css`, `motion.css`
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand groups) shown in the Design System tab.
- `components/core|forms|feedback|navigation/` — the 15 components above, each with `.jsx` + `.d.ts` + `.prompt.md` + a card.
- `ui_kits/explorer/` — the click-through kit.
- `assets/` — empty; see Iconography and caveats below.
- `SKILL.md` — Claude-Code-compatible skill wrapper for this system.

---

## CONTENT FUNDAMENTALS

No production copy exists yet — the source package is research/decision documents, not shipped UI text. The following is inferred from JP-023, the Action Card pattern, and the founder's stated brand tone, and should be treated as a starting content system, not a locked style guide.

- **Voice**: calm, trustworthy, personal. Not corporate ("optimize your travel workflow"), not childish/fantasy ("embark on a magical quest"), not clinical ("error: booking_status=FAILED").
- **Person**: second person, direct to the Explorer — "your Journey," "your discoveries." The product's own internal noun for the user is "the Explorer," but interface copy addresses them as "you," not "the Explorer."
- **Precision over vibe, always paired**: per JP-023, never replace a real number with mood language. Not "hot and sticky today" alone, and not "32°C" alone —

  > "32°C, sticky by midday — good for an early waterfall visit, rest after lunch." Same shape applies to distances, durations, and booking timestamps ("Waiting for provider — updated 12 minutes ago," not "still waiting").
- **Action Card shape** for anything that blocks progress: *what happened → why it matters → what to do → current status*. Calm and non-punitive — e.g. "Indigo weaving requires booking" / "Journey Day 4 cannot become Ready until the host confirms" / "Continue booking" / "Waiting for provider." Never "Error," never blame language toward the Explorer.
- **Fantasy language never replaces planning language.** The Marauder's-Map-style reveal is a visual/interaction quality, not a copy style — operational text (readiness, booking, routes) stays plain and literal, even on an illustrated map screen.
- **No emoji** anywhere in the source material — tone is warm but not casual/playful in that register.
- **Alert fatigue is deliberately managed**: strong alert language is reserved for safety issues, blocking required actions, and uncovered accommodation. Ordinary incompleteness uses calm states — "Open," "Flexible," "Check later" — not warnings.

---

## VISUAL FOUNDATIONS

**Colors.** Eight-color working palette (JP-022, pending contrast validation): Canopy Green `#2F6F4E` (primary), Forest Shade `#123C32` (deep base / dark surface), Mist White `#F3F7F1` (main light surface), Pond Teal `#6FAFA6` (water accent), Clay Terracotta `#B87955` (warm accent), Weathered Wood `#6B4A34` (earth neutral), Path Stone `#A6A092` (quiet neutral), Sunlit Ochre `#C89B3C` (attention/offline). A ninth color, a muted rust red, was added here for danger/failure states — **not part of the locked palette**, derived via `oklch` color-mix to harmonize with Clay Terracotta; flagged for founder sign-off in the Colors cards. Per the project's own recommended-practice note, semantic interface color (status/readiness/selection, defined in `tokens/colors.css` as `--status-*`) is kept structurally separate from illustrated-map color — they should never be the same token.

**Type.** Noto Sans Thai carries every operational interface string — labels, statuses, booking text, inspector content — per JP-025, chosen for Latin+Thai script coverage since the product includes Thai-language content. Lora (serif) is isolated to `--font-map-decorative` and used only for illustrated-map lettering (place names, atmosphere) — never for functional/planning text, per the locked separation principle. Space Mono is used narrowly for literal data: distances/durations, date ranges, confirmation codes.

**Spacing & radius.** 4px base spacing scale (4 → 96px). Radius is deliberately generous and rounded (8 / 14 / 24px, pill for buttons/badges/tabs) to read as soft and hand-guided rather than sharp/corporate, consistent with the "calm shaded-garden" brief — never sharp 0–2px corners, never over-rounded "bubble" extremes.

**Backgrounds.** No photography, texture, or pattern assets exist in the source. Cards use flat brand-tinted surfaces (e.g. `--bg-canopy`, `--bg-ochre`) rather than gradients — gradients are avoided entirely; they read as decorative/generic and conflict with the "geographic truth over decorative 2.5D" direction. Full-bleed imagery is used only where a real photo/illustration would anchor a place (experience hero, discovery cards) — currently placeholder blocks, since no imagery was supplied.

**Animation.** No motion system is locked. `tokens/motion.css` proposes two easing curves (`--ease-standard` for interface transitions, `--ease-reveal` — a slower, gentler ease-out — for anything that should feel like progressive "map reveal") and a `prefers-reduced-motion` kill-switch, since reduced motion is an explicit required Explorer setting. Interface transitions used in components are simple opacity/background/transform fades, no bounce or spring — consistent with "calm."

**Hover / press states.** Hover darkens (primary buttons) or tints toward the brand background (secondary/ghost buttons, cards gain shadow). Press states scale down slightly (`scale(0.97)`) rather than changing color further — kept subtle, no color-only feedback per the state-separation principle.

**Borders & shadows.** Hairline 1px borders (`--border-hairline`, Path Stone at reduced opacity) on cards and inputs. Shadows are a soft layered dual-stop system (`--shadow-sm/md/lg`, tinted with Forest Shade rather than pure black) rather than a single hard drop shadow — this was an arbitrary but harmonious choice absent a locked spec.

**Transparency & blur.** Used sparingly: dialog scrims use a translucent Forest Shade overlay. `Card` also has an opt-in `variant="featured"` — a flat Canopy Green surface with a soft contact shadow (no glass, blur, sheen, or texture — ruled out as too slick/tech-forward for the field-guide identity); reserve it for one accent card per screen, not general cards.

**Imagery color vibe.** Not established — no real photography exists. Placeholder blocks use brand-tinted flat color rather than gray, so the kit doesn't read as unfinished-gray boxes; real photography should be warm, sunlit, documentary (not staged, not heavily color-graded) when supplied.

**Cards.** 24px radius, hairline border, soft shadow that deepens slightly on hover when interactive. No colored left-border accent strip (explicitly avoided as an overused pattern). Default cards have no gradient fill; the `glass` variant (see above) is the one deliberate exception, for hero/feature use only.

---

## ICONOGRAPHY

No icon system, icon font, SVG set, or PNG icon assets exist anywhere in the source package — it is a text/decision-document handoff, not a codebase or Figma file. Per instructions, none were fabricated. Current component and UI-kit demos use plain Unicode glyphs (`←`, `♡`, `ⓘ`, `×`, `✓`) as lightweight stand-ins so the kit isn't blocked on icon assets.

**Flagged substitution recommendation**: [Lucide](https://lucide.dev) (CDN-available, minimal stroke-based icons, permissive license) is the suggested real icon system — its restrained, non-decorative linework matches "restrained illustration" better than a filled/rounded icon set would. This has **not** been wired in yet; treat the glyph stand-ins as placeholders until Lucide (or the real product's icon set, if one exists in code you can attach) is integrated.

No emoji are used as icons anywhere, consistent with the brand tone notes above.

---

## Caveats & where I need your help

- **No codebase, Figma file, fonts, or logo were attached** — by the source package's own instruction, since none exist yet for Journey Planner. Everything visual here (palette usage, type pairing, radius/shadow scale, iconography) is a reasoned starting system built from the locked decisions and research notes, not a recreation of existing product surfaces. Please review it as a proposal, not a fact-check.
- **Font substitution**: Lora / Work Sans / Space Mono are Google Fonts substitutes with no real brand typography to match against. If Journey Planner has (or later gets) real typeface decisions, send the font files or names and I'll swap the tokens.
- **No logo exists** — the wordmark card and thumbnail render "Journey Planner" in Lora rather than a mark. Do not treat this as a real logo.
- **A semantic interface color system is locked (JP-026) and wired into components** — `tokens/semantic-colors.css` (Colors cards: "Semantic Roles," "Semantic Text & Bg Pairs," "Semantic vs. Illustrated Separation," and the two mapping cards) defines six roles — Verified (blue), Attention (amber), Critical (red), In Progress (violet), Neutral (slate gray), and a Focus/Selected ring (blue) — covering trust, save/sync, connectivity, route/travel, journey readiness, interaction, and AI-proposal states. All sit on hues absent from the JP-022 illustrated palette (blue, violet, true red, cool slate — no green/teal/gold/brown/tan) and are verified against WCAG 2.2 AA (text variants ≥5:1, base/icon variants ≥3:1, all against Mist White/white). The `--status-*` tokens in `tokens/colors.css` map directly to this layer and are wired into `Badge`, `ActionCard`, and `Toast` — no component reads JP-022 hues for status/state. Every state pairs with an icon or shape, never color alone.
- **A real icon system is built and wired (see Iconography above)** — `Icon` covers 10 names (verified, synced, syncing, connected, offline, route, ready, attention, selected, current), each with a distinct silhouette per state, wired into `Badge`, `ActionCard`, and `Toast`. Remaining components (Dialog, Tooltip, Tabs, form validation) still use Unicode-glyph placeholders — Icon has not been extended to them yet.
- **The three-surface Station View/Inspector/Details View model, accommodation booking, and the route-calculation architecture are all treated as open here**, per the project's own verification reports — I did not build against them as decided, even though the original ChatGPT bundle labels some of them "locked."

**My ask**: tell me which of these I should treat as decided so I can lock the tokens (especially: accessibility-checked color values, real typography, and the icon system) — and if a real Journey Planner codebase or Figma file exists anywhere, attach it so this system can be rebuilt against real components instead of research documents.
