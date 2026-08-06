# Documentation Status

Purpose: Tracks the progress of Specification Consolidation v1 — which documents exist, which are pending, and what is blocking each one.

Status: Active

Version: 1.0

Owner: Repository Documentation Architecture

---

# Sprint

Specification Consolidation v1

---

# Status Table

| Item | State | Blocking On | Notes |
|---|---|---|---|
| Documentation folder structure (`docs/`) | Complete | — | Created by Claude AI |
| Specification Template (`docs/TEMPLATE.md`) | Complete | — | Created by Claude AI |
| Specification Index (`docs/00_INDEX.md`) | Complete | — | Skeleton; entries update as documents land |
| Documentation Status (this file) | Complete | — | Created by Claude AI |
| Decision Log entries JP-007–JP-012 | Not started | ChatGPT authoring | Must land in `bootstrap/08_DECISION_LOG.md` before dependent specs can cite them as Locked |
| Journey Architecture v2 | Not started | ChatGPT authoring | Supersedes JP-004; must explicitly record the supersession |
| Platform Knowledge Architecture v1 | Not started | ChatGPT authoring | No placeholder created — awaiting approved content |
| Experience Data Standard | Not started | ChatGPT authoring | Section 2.2 (Physical Reality) is explicitly incomplete upstream — document should represent this accurately rather than as fully locked |
| Language Standard | Not started | ChatGPT authoring | |
| Booking System Specification | Not started | Content source unconfirmed | Referenced in original activation prompt as an existing architecture document, but not present in the repository under any path checked |
| Cross-reference pass | Not started | All specs above landing first | |

---

# Resolved Implementation Decisions

1. `docs/README.md` replaced with a pointer to `00_INDEX.md` rather than left as a stale placeholder.
2. No `docs/decisions/` directory. `bootstrap/08_DECISION_LOG.md` remains the single authoritative decision source; specifications cross-reference it by JP-ID rather than duplicating it.
3. No "Locked-in-Part" decision status introduced. JP decisions remain atomic — a spec section such as Experience Data Standard §2.2 is composed of multiple independently locked JP decisions, not one partially-locked entry. §2.2's "Started" state means not all of its constituent JP decisions have been locked yet, not that a single decision is half-locked.
4. `docs/booking/` remains a reserved placeholder directory until the Booking System Specification enters Discovery. No content authored, no source assumed.

# Open Items Carried Forward for Review

1. `journey-planner-booking-system-spec.md`, referenced as an existing authoritative document in the original activation prompt, does not exist anywhere in the repository. Per decision 4 above, this stays open until Discovery addresses the booking spec directly — not to be resolved by assumption.

---

# Revision History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0 | 2026-08-06 | Initial status tracker created as part of Specification Consolidation v1 scaffolding | Claude AI |
| 1.1 | 2026-08-06 | Recorded resolved implementation decisions (docs/README pointer, no decisions/ dir, atomic JP decisions, booking folder reserved) | Claude AI |
