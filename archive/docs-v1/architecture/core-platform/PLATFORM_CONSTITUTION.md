# Platform Constitution

Status: Active

Version: 1.0

Owner: Core Platform Architecture

---

# Purpose

This constitution records the permanent operating principles for the Journey Planner platform.

It governs future architecture, specification, and implementation work without introducing new product architecture.

---

# Source Decisions

| Source | Authority |
|---|---|
| `bootstrap/00_START_HERE.md` | Project identity and source-of-truth rules |
| `bootstrap/02_PRODUCT_CONTRACT.md` | Product mission, principles, scope |
| `bootstrap/03_PROJECT_PHILOSOPHY.md` | Decision filter |
| `bootstrap/05_ENGINEERING_CONTRACT.md` | Engineering priorities and constraints |
| `bootstrap/08_DECISION_LOG.md` | JP-001 through JP-006 |
| `docs/governance/` | Repository governance rules |

---

# Product Laws

1. Journey Planner is the product.
2. Booking exists only to support the journey.
3. Travel should happen at the pace of the community, not the pace of the itinerary.
4. Technology should quietly help people discover, understand, and respectfully experience the world.
5. Geography, conservation, hospitality, education, culture, and wellbeing are product concerns.
6. Verified information is required for public Experiences.

---

# Architecture Laws

1. The approved domain hierarchy is `Journey -> Journey Day -> Itinerary Item -> Booking`.
2. The Journey exists independently of Booking.
3. Booking must remain attached to Itinerary Item.
4. Host and Administrator capabilities are future scope unless explicitly reopened.
5. Excluded Version 1 capabilities must not enter implementation accidentally.

---

# Repository Laws

1. The repository is the product.
2. Architecture defines the repository.
3. The repository never redefines architecture.
4. The Bootstrap Pack is the highest-level documentation.
5. Conversation history is never the primary source of truth.

---

# Engineering Priorities

1. Protect approved architecture.
2. Protect repository integrity.
3. Produce maintainable documentation.
4. Produce maintainable engineering work.
5. Optimize implementation.
6. Optimize performance.
7. Optimize convenience.

Never violate a higher priority to improve a lower priority.

---

# Amendment Rule

This constitution may change only through explicit locked decisions and repository governance review.

---

# Revision History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0 | 2026-08-08 | Initial platform constitution synchronized from approved Bootstrap and governance decisions | Codex |
