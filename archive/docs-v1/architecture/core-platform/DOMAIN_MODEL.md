# Domain Model

Status: Active

Version: 1.0

Owner: Core Platform Architecture

---

# Purpose

This document records the approved Core Platform domain model.

It defines product-domain relationships only. It does not define database tables, API payloads, classes, components, or routes.

---

# Source Decisions

| Source | Authority |
|---|---|
| `bootstrap/02_PRODUCT_CONTRACT.md` | Product structure and role responsibilities |
| `bootstrap/08_DECISION_LOG.md` | JP-001, JP-004, JP-005 |
| `bootstrap/10_PROJECT_GLOSSARY.md` | Official definitions |

---

# Core Hierarchy

The approved architecture follows:

```text
Journey
└── Journey Day
    └── Itinerary Item
        └── Booking
```

Booking is always attached to an Itinerary Item.

The Journey exists independently of Booking.

---

# Core Domain Concepts

| Concept | Definition | Relationship |
|---|---|---|
| Journey | Complete travel plan created by an Explorer | Contains one or more Journey Days |
| Journey Day | One calendar day within a Journey | Contains one or more Itinerary Items |
| Itinerary Item | Planned activity within a Journey Day | May later become or receive a Booking |
| Booking | Confirmed reservation attached to an Itinerary Item | Supports the Journey; never the primary product |
| Experience | Verified destination, activity, service, or place | Can be discovered and added to a Journey as planning content |
| Availability | Published schedule determining whether an Experience can be booked | Indicates possible reservation opportunities; does not guarantee Booking |

---

# Approved Roles

| Role | Status | Domain Responsibility |
|---|---|---|
| Explorer | Version 1 | Creates Journeys, discovers Experiences, plans travel, makes Bookings |
| Scout | Version 1 | Collects data, verifies Experiences, maintains quality and accuracy |
| Host | Future | Provides Experiences, maintains availability, manages reservations |
| Administrator | Future | Provides platform management and operational oversight |

---

# Domain Rules

1. Journey planning comes before Booking.
2. Booking supports the Journey and is not the product identity.
3. Discovery comes before commitment.
4. Only verified Experiences should appear publicly.
5. Availability does not guarantee a Booking.
6. Host and Administrator functionality remain outside Version 1 implementation.

---

# Revision History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0 | 2026-08-08 | Initial domain model synchronized from approved Bootstrap decisions | Codex |
