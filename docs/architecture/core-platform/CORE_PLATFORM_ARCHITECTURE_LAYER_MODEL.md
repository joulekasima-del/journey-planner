# Core Platform Architecture Layer Model

Status: Active

Version: 1.0

Owner: Core Platform Architecture

---

# Purpose

This document organizes approved platform architecture into conceptual layers for repository synchronization.

These layers are documentation and planning layers. They do not define application packages, deployment units, runtime services, or database boundaries.

---

# Source Decisions

| Source | Authority |
|---|---|
| `bootstrap/02_PRODUCT_CONTRACT.md` | Product structure, scope, roles, objectives |
| `bootstrap/03_PROJECT_PHILOSOPHY.md` | Philosophy and decision filter |
| `bootstrap/05_ENGINEERING_CONTRACT.md` | Engineering responsibility and source-of-truth rules |
| `bootstrap/08_DECISION_LOG.md` | JP-001, JP-004, JP-005, JP-006 |
| `docs/governance/ARCHITECTURE_FREEZE_MANIFEST_V1.md` | Freeze and synchronization boundary |

---

# Layer Model

| Layer | Responsibility | Approved Source |
|---|---|---|
| Governance Layer | Protects source of truth, freeze state, change rules, and synchronization rules | Bootstrap Pack, Governance Framework |
| Product Philosophy Layer | Defines mission, product identity, principles, and decision filter | Product Contract, Project Philosophy |
| Domain Layer | Defines Journey, Journey Day, Itinerary Item, Booking, Experience, Availability, and roles | Product Contract, Glossary, JP-004 |
| Journey Planning Layer | Supports Journey creation, multi-day planning, Journey editing, and Itinerary Items | Product Contract |
| Experience and Verification Layer | Supports Experience discovery, Scout verification, and information quality | Product Contract |
| Availability and Booking Support Layer | Supports availability visibility and Booking attached to Itinerary Items | Product Contract, JP-001, JP-004 |
| Geography Context Layer | Supports maps, weather, and environmental/place understanding | Product Contract, Project Philosophy |
| Delivery Layer | Supports responsive web application delivery | Product Contract |

---

# Layer Rules

1. Higher-level governance and product rules constrain lower-level implementation work.
2. Journey Planning remains primary.
3. Booking Support must not become the platform identity.
4. Experience and Verification protect trust.
5. Geography Context supports understanding, not only navigation.
6. Delivery choices must preserve product and architecture decisions.

---

# Open Boundary

This document does not define technical module boundaries. Technical boundaries remain pending until approved implementation architecture exists.

---

# Revision History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0 | 2026-08-08 | Initial layer model synchronized from approved Bootstrap and governance decisions | Codex |
