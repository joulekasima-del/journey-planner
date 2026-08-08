# Architecture Relationships

Status: Active

Version: 1.0

Owner: Core Platform Architecture

---

# Purpose

This document records approved relationships between Core Platform architecture concepts.

It does not introduce implementation joins, database foreign keys, API routes, or component dependencies.

---

# Source Decisions

| Source | Authority |
|---|---|
| `bootstrap/02_PRODUCT_CONTRACT.md` | Product structure and principles |
| `bootstrap/08_DECISION_LOG.md` | JP-001, JP-004, JP-005 |
| `bootstrap/10_PROJECT_GLOSSARY.md` | Official vocabulary |

---

# Structural Relationships

| Source | Relationship | Target |
|---|---|---|
| Journey | contains | Journey Day |
| Journey Day | contains | Itinerary Item |
| Itinerary Item | may have | Booking |
| Booking | supports | Journey |
| Booking | is attached to | Itinerary Item |
| Journey | may exist without | Booking |
| Experience | may become planning content within | Journey |
| Availability | indicates possible reservation opportunities for | Experience |

---

# Role Relationships

| Role | Relationship | Target |
|---|---|---|
| Explorer | creates | Journey |
| Explorer | discovers | Experience |
| Explorer | makes | Booking |
| Scout | verifies | Experience |
| Scout | maintains | Experience information quality |
| Host | future role managing | Availability and reservations |
| Administrator | future role managing | Platform operations |

---

# Principle Relationships

| Principle | Governs |
|---|---|
| Journey before Booking | Product identity, UX, domain hierarchy, implementation priorities |
| Discovery before Commitment | Experience discovery and planning flows |
| Verified Information | Scout Workspace and public Experience publication |
| Geography Matters | Maps, weather, environmental context, and place understanding |
| Calm Technology | Interface and interaction decisions |

---

# Relationship Rules

1. Do not detach Booking from Itinerary Item.
2. Do not make Booking the primary product.
3. Do not publish unverified Experiences.
4. Do not implement future Host or Administrator functionality inside Version 1 without explicit approval.
5. Do not treat Availability as a guaranteed Booking.

---

# Revision History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0 | 2026-08-08 | Initial architecture relationships synchronized from approved Bootstrap decisions | Codex |
