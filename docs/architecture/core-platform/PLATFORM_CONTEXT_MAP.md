# Platform Context Map

Status: Active

Version: 1.0

Owner: Core Platform Architecture

---

# Purpose

This document maps the approved product contexts that define the Journey Planner platform.

It does not introduce implementation services, bounded contexts, routes, database schemas, or infrastructure.

---

# Source Decisions

| Source | Authority |
|---|---|
| `bootstrap/02_PRODUCT_CONTRACT.md` | Product identity, objectives, roles, scope |
| `bootstrap/03_PROJECT_PHILOSOPHY.md` | Product philosophy and decision filter |
| `bootstrap/08_DECISION_LOG.md` | JP-001, JP-004, JP-005, JP-006 |
| `bootstrap/10_PROJECT_GLOSSARY.md` | Official product vocabulary |

---

# Platform Center

Journey Planner is the product.

Booking exists only to support the journey.

The platform helps Explorers discover, understand, plan, and respectfully experience authentic places with confidence.

---

# Approved Product Contexts

| Context | Approved Responsibility | Source Terms |
|---|---|---|
| Journey Planning | Create and maintain complete multi-day journeys | Journey, Journey Day, Itinerary Item |
| Experience Discovery | Help Explorers discover verified destinations, activities, services, and places | Experience |
| Availability | Show possible reservation opportunities for Experiences | Availability |
| Booking Support | Confirm reservations attached to Itinerary Items | Booking |
| Scout Workspace | Let internal Scouts collect, verify, publish, and maintain Experience information | Scout |
| Geography and Local Context | Support maps, weather, environmental context, and place understanding | Geography, Maps, Weather |
| Explorer Account | Support Explorer registration and return usage | Explorer |

---

# Future Contexts

The following contexts are approved as future roles or areas but excluded from Version 1 implementation:

| Future Context | Status | Source |
|---|---|---|
| Host Portal | Future phase | Product Contract, JP-005 |
| Administrator Tooling | Future phase | Product Contract, JP-005 |
| Community Messaging | Excluded from Version 1 | Product Contract |
| Reviews | Excluded from Version 1 | Product Contract |
| Rewards and Gamification | Excluded from Version 1 | Product Contract |
| Public APIs | Excluded from Version 1 | Product Contract |
| Offline Mode | Excluded from Version 1 | Product Contract |
| Marketplace Expansion | Excluded from Version 1 | Product Contract |

---

# Context Rule

Repository synchronization may organize documents around these contexts, but it must not convert them into implementation boundaries without an approved technical architecture.

---

# Revision History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0 | 2026-08-08 | Initial platform context map synchronized from approved Bootstrap decisions | Codex |
