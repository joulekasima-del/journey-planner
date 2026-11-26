# Journey Planner

A platform that helps travellers create the itinerary for their journey across Thailand easily (JP-028). Travellers answer a few questions about their trip, get an editable draft Journey built from verified, star-rated places, and book stays, reservations and day trips through the platform, which earns a commission as a booking agent (JP-036). Hosts register themselves; Inspectors verify every place in person (JP-037).

**Start here. Read in this order (about 30 minutes):**

| # | Document | What it answers |
|---|---|---|
| 1 | [docs/PRODUCT.md](docs/PRODUCT.md) | What we're building, for whom, what V1 includes, open questions |
| 2 | [docs/DECISION_LOG.md](docs/DECISION_LOG.md) | Every locked decision (JP-001 to JP-042). The highest authority. |
| 3 | [BUILD_TRACKER.md](BUILD_TRACKER.md) | What's being worked on now and next |
| 4 | [docs/HOW_WE_WORK.md](docs/HOW_WE_WORK.md) | How decisions get made and how code gets built |
| 5 | [docs/AI_WORKING_DISCIPLINE.md](docs/AI_WORKING_DISCIPLINE.md) | Rules every AI session must follow |

**Reference**

- [docs/ROADMAP.md](docs/ROADMAP.md): the phases to launch and beyond
- [docs/GLOSSARY.md](docs/GLOSSARY.md): the official terms (Journey, Experience, Host Calendar…)
- [docs/BACKLOG.md](docs/BACKLOG.md): parked ideas, including ~28 booking design candidates
- [docs/specs/](docs/specs/README.md): feature specifications (which exist, which are still to write)
- [docs/legal/](docs/legal/PDPA_CONSENT_NOTICES.md): PDPA consent notices (draft, not for use)
- [design-system/](design-system/readme.md): tokens, components and Explorer UI kits (JP-022 to JP-027)
- [prototypes/](prototypes/README.md): the working Scout scouting form (Supabase)
- [archive/](archive/README.md): retired documents, kept for history only

**Source-of-truth order when documents disagree:**
1. The latest locked decision in the Decision Log
2. `docs/PRODUCT.md`
3. Specifications in `docs/specs/`
4. Everything else

Conversation history is never a source of truth. Anything important must land in these documents.

**Current state (2026-11-25):**
- Docs and design system: in place
- Scouting form: live on Supabase
- Explorer app, Host Calendar, Admin and booking: not built yet
- Next: write the specs (see the Build Tracker)
