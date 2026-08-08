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
| Journey Architecture v2 | Pending — awaiting ChatGPT draft | JP-007 (supersedes JP-004) | `docs/architecture/journey-architecture.md` |
| Platform Knowledge Architecture v1 | Pending — awaiting ChatGPT draft | JP-008 | `docs/architecture/platform-knowledge-architecture.md` |

---

# Standards

| Document | Status | JP Decisions | Path |
|---|---|---|---|
| Experience Data Standard | Pending — awaiting ChatGPT draft (§1 and §2.1 fully backed by locked JP decisions; §2.2 has locked decisions still outstanding) | JP-009, JP-010, JP-011 | `docs/standards/experience-data-standard.md` |
| Language Standard | Pending — awaiting ChatGPT draft | JP-012 | `docs/standards/language-standard.md` |

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
| Booking System Specification | Pending — content source not yet confirmed | TBD | `docs/booking/booking-system-spec.md` |

---

# Pending Decision Log Entries

The following decisions are referenced above but not yet recorded in `bootstrap/08_DECISION_LOG.md`. This index will link to them once ChatGPT enters them as Locked.

- JP-007 — Journey Architecture v2 (supersedes JP-004)
- JP-008 — Platform Knowledge Architecture v1 adoption
- JP-009 — Experience Data Standard, Section 1 (Identity)
- JP-010 — Experience Data Standard, Section 2.1 (Geographic Reality)
- JP-011 — Experience Data Standard, Section 2.2 (Physical Reality) — in progress
- JP-012 — Language Standard

---

# Revision History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0 | 2026-08-06 | Initial index created as part of Specification Consolidation v1 scaffolding | Claude AI |
| 1.1 | 2026-08-06 | Clarified that Experience Data Standard §2.2 status reflects outstanding atomic JP decisions, not a partially-locked decision | Claude AI |
| 1.2 | 2026-08-08 | Added governance framework documents to the repository index | Codex |
