# Journey Planner Specification Index

Purpose: Single entry point listing every specification document in the repository, its status, and its governing decisions. Use this index before searching the repository manually.

Status: Active

Version: 1.0

Owner: Repository Documentation Architecture (Specification Consolidation v1)

---

# How to Use This Index

Every specification in `docs/` must appear in the table below. A document that is not indexed here is not yet considered part of the repository's source of truth, even if the file exists.

Status values follow the Decision Log convention: **Locked**, **Draft**, **Superseded**, **Deprecated**.

---

# Bootstrap Pack

These remain in `bootstrap/` per repository convention and are not duplicated into `docs/`.

| Document | Status | Path |
|---|---|---|
| Start Here | Active | `bootstrap/00_START_HERE.md` |
| Working Protocol v2 | Active | `bootstrap/01_WORKING_PROTOCOL.md` |
| Product Contract | Active | `bootstrap/02_PRODUCT_CONTRACT.md` |
| Project Philosophy | Active | `bootstrap/03_PROJECT_PHILOSOPHY.md` |
| Creative Framework | Active | `bootstrap/04_CREATIVE_FRAMEWORK.md` |
| Engineering Contract | Active | `bootstrap/05_ENGINEERING_CONTRACT.md` |
| AI Agent Guide | Active | `bootstrap/06_AI_AGENT_GUIDE.md` |
| Project Roadmap | Active | `bootstrap/07_PROJECT_ROADMAP.md` |
| Decision Log | Active | `bootstrap/08_DECISION_LOG.md` |
| Backlog | Active | `bootstrap/09_BACKLOG.md` |
| Project Glossary | Active | `bootstrap/10_PROJECT_GLOSSARY.md` |

---

# Architecture Specifications

| Document | Status | JP Decisions | Path |
|---|---|---|---|
| Journey Architecture v2 | Needs review — the JP-007/JP-004 references below were stale (JP-007 and JP-008 are locked in `bootstrap/08_DECISION_LOG.md` for unrelated decisions). Likely superseded by JP-017 (Booking routes through Experience, not directly from Itinerary Item) — needs founder confirmation before further work, not to be resumed by assumption. | TBD — see JP-017 | `docs/architecture/journey-architecture.md` |
| Platform Knowledge Architecture v1 | Deprecated — this line of work traces to the "Batch 2" architecture draft, independently confirmed incorrect and never approved (see `sorted-decisions-review.md`). Do not resume without a fresh Discovery pass. | None | `docs/architecture/platform-knowledge-architecture.md` |

---

# Core Platform Architecture

| Document | Status | Governing Decisions | Path |
|---|---|---|---|
| Platform Context Map | Active | JP-001, JP-004, JP-005, JP-006 | `docs/architecture/core-platform/PLATFORM_CONTEXT_MAP.md` |
| Domain Model | Active | JP-001, JP-004, JP-005 | `docs/architecture/core-platform/DOMAIN_MODEL.md` |
| Platform Capability Map | Active | JP-001, JP-005 | `docs/architecture/core-platform/PLATFORM_CAPABILITY_MAP.md` |
| Platform Behaviour Map | Active | JP-001, JP-004, JP-005 | `docs/architecture/core-platform/PLATFORM_BEHAVIOUR_MAP.md` |
| Platform Constitution | Active | JP-001, JP-002, JP-003, JP-004, JP-005, JP-006 | `docs/architecture/core-platform/PLATFORM_CONSTITUTION.md` |
| Core Platform Architecture Layer Model | Active | JP-001, JP-004, JP-005, JP-006 | `docs/architecture/core-platform/CORE_PLATFORM_ARCHITECTURE_LAYER_MODEL.md` |
| Architecture Relationships | Active | JP-001, JP-004, JP-005 | `docs/architecture/core-platform/ARCHITECTURE_RELATIONSHIPS.md` |
| Cross-Reference Index | Active | JP-001, JP-002, JP-003, JP-004, JP-005, JP-006 | `docs/architecture/core-platform/CROSS_REFERENCE_INDEX.md` |

---

# Standards

| Document | Status | JP Decisions | Path |
|---|---|---|---|
| Experience Data Standard | Pending — restored to active tracking 2026-08-16 (see `BUILD_TRACKER.md`). JP-009/010/011 were never actually locked in `bootstrap/08_DECISION_LOG.md` — correcting the earlier claim that they were. | TBD at Lock time, not pre-assigned | `docs/standards/experience-data-standard.md` |
| Language Standard | Pending — restored to active tracking 2026-08-16 (see `BUILD_TRACKER.md`). JP-012 was never actually locked — correcting the earlier claim that it was. | TBD at Lock time, not pre-assigned | `docs/standards/language-standard.md` |

---

# Governance

| Document | Status | Path |
|---|---|---|
| Architecture Freeze Manifest v1 | Active | `docs/governance/ARCHITECTURE_FREEZE_MANIFEST_V1.md` |
| Codex Project Constitution | Active | `docs/governance/CODEX_PROJECT_CONSTITUTION.md` |
| Repository Synchronization Contract v1 | Active | `docs/governance/REPOSITORY_SYNCHRONIZATION_CONTRACT_V1.md` |
| Programme Workflow | Active | `docs/governance/PROGRAMME_WORKFLOW.md` |
| Repository Governance | Active | `docs/governance/REPOSITORY_GOVERNANCE.md` |
| Change Governance | Active | `docs/governance/CHANGE_GOVERNANCE.md` |
| Architecture Index | Active | `docs/governance/ARCHITECTURE_INDEX.md` |

---

# Booking

| Document | Status | JP Decisions | Path |
|---|---|---|---|
| Booking System Specification | Superseded — real booking-system work proceeded independently via the Booking System Structure Report and JP-014 through JP-021. This placeholder is stale. | JP-014–JP-021 | `docs/booking/booking-system-spec.md` |

---

# Pending / Tracked Work — Not Yet Locked

Numbering below is illustrative only. Real Decision Log entries (`bootstrap/08_DECISION_LOG.md`) currently run through JP-021; anything below receives the next real available number at the time it's actually locked, never a pre-reserved one. Codex (OpenAI) previously maintained this section and is retired from this project — Claude Cowork now covers indexing/documentation work of this kind.

- Experience Data Standard — Identity, Geographic Reality, Physical Reality sections. Restored to active tracking 2026-08-16.
- Language Standard. Restored to active tracking 2026-08-16.
- Journey Architecture v2 — needs review; likely superseded by JP-017, not resumed by default.
- Platform Knowledge Architecture v1 — deprecated, tied to the discarded "Batch 2" architecture draft.
- Booking System Specification — superseded by JP-014 through JP-021 and the Booking System Structure Report.

---

# Revision History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0 | 2026-08-06 | Initial index created as part of Specification Consolidation v1 scaffolding | Claude AI |
| 1.1 | 2026-08-06 | Clarified that Experience Data Standard §2.2 status reflects outstanding atomic JP decisions, not a partially-locked decision | Claude AI |
| 1.2 | 2026-08-08 | Added governance framework documents to the repository index | Codex |
| 1.3 | 2026-08-08 | Added Batch 2 Core Platform Architecture artifacts | Codex |
| 1.4 | 2026-08-16 | Corrected stale JP-007/JP-008 references that collided with real locked Decision Log entries; marked Platform Knowledge Architecture v1 and Booking System Specification as Deprecated/Superseded; restored Experience Data Standard and Language Standard to active tracking with no pre-assigned JP numbers; noted Codex is retired from this project, replaced by Claude Cowork for indexing/documentation work | Claude AI (correction requested and confirmed by founder, verified against live repo) |
