# Journey Planner Decision Log

Version: 1.0

Status: Active

---

# Purpose

The Decision Log is the permanent institutional memory of the project.

It records important product, business, creative, engineering, and workflow decisions that have been explicitly approved.

Its purpose is to prevent the project from depending on conversation history.

Every significant decision should be traceable.

---

# Philosophy

Every important decision should be made once, documented clearly, and reused consistently.

The Decision Log exists to protect momentum.

---

# Rules

## Decisions are immutable

Once a decision has been marked:

Confirmed

or

Lock it

it becomes a permanent project decision.

The decision remains valid until a new explicit decision replaces it.

---

## Every entry must include

- Decision ID
- Category
- Title
- Status
- Date
- Decision
- Reason
- Impact
- Related Documents
- Superseded By (if applicable)

---

## Categories

Examples

Business

Product

UX

Creative

Engineering

Workflow

Data

Architecture

Infrastructure

Documentation

---

## Status

Allowed values

Locked

Superseded

Deprecated

Archived

Only Locked decisions are active.

---

# Decision Template

Decision ID

JP-000

Category

Product

Title

Example Decision

Status

Locked

Date

YYYY-MM-DD

Decision

One concise statement describing the decision.

Reason

Why this decision was made.

Impact

How this affects future work.

Related Documents

List affected Bootstrap Pack documents or specifications.

Superseded By

None

---

# Active Decisions

## JP-001 — Journey Planner is the Product

Category: Product

Status: Locked

Date: 2026-08-03

Decision:

The platform's primary product is the Journey Planner.

Booking exists only to support the journey.

Reason:

Planning is the core customer value.

Booking is a supporting capability rather than the platform's identity.

Impact:

All UX, architecture, and future features must reinforce planning before booking.

Related Documents:

- 02_PRODUCT_CONTRACT.md
- 03_PROJECT_PHILOSOPHY.md
- 07_PROJECT_ROADMAP.md

Superseded By: None

---

## JP-002 — Working Protocol v2

Category: Workflow

Status: Locked

Date: 2026-08-03

Decision:

All project work follows:

Discover → Lock → Produce → Implement → Verify → Release

Reason:

Protects decision quality while maintaining implementation momentum.

Impact:

Every contributor follows the same product workflow.

Related Documents:

- 01_WORKING_PROTOCOL.md

Superseded By: None

---

## JP-003 — Shared Creative Framework

Category: Creative

Status: Locked

Date: 2026-08-03

Decision:

Journey Planner adopts the Nature Base Creative Framework.

Reason:

The creative language is independent from the business domain.

Impact:

Future products reuse the same visual identity, production pipeline, and artistic standards.

Related Documents:

- 04_CREATIVE_FRAMEWORK.md

Superseded By: None

---

## JP-004 — Journey Architecture

Category: Architecture

Status: Locked

Date: 2026-08-03

Decision:

The platform architecture follows:

Journey → Journey Day → Itinerary Item → Booking

Reason:

Separates planning from reservation while keeping bookings attached to itinerary items.

Impact:

All engineering and UX decisions should preserve this hierarchy.

Related Documents:

- 02_PRODUCT_CONTRACT.md
- Engineering specifications

Superseded By: None

---

## JP-005 — User Roles

Category: Product

Status: Locked

Date: 2026-08-03

Decision:

Version 1 supports:

Explorer

Scout

Host (future)

Administrator (future)

Reason:

Allows focused development while keeping future expansion straightforward.

Impact:

Host and Administrator functionality remain outside Version 1 implementation.

Related Documents:

- 02_PRODUCT_CONTRACT.md
- 07_PROJECT_ROADMAP.md

Superseded By: None

---

## JP-006 — Bootstrap Pack as Source of Truth

Category: Engineering

Status: Locked

Date: 2026-08-03

Decision:

The Bootstrap Pack becomes the highest-level documentation for the project.

Conversation history is never the primary source of truth.

Reason:

Protects long-term maintainability and AI onboarding.

Impact:

Future contributors begin with repository documentation rather than historical chats.

Related Documents:

- 00_START_HERE.md
- All Bootstrap Pack documents

Superseded By: None

---

# Adding New Decisions

New entries should only be added after an explicit locked approval.

Each decision receives the next available identifier.

Decision IDs are never reused.

Deleted decisions remain archived rather than removed.

---

# Superseding Decisions

If a decision changes:

Do not edit the original entry.

Instead:

1. Mark the original as Superseded.
2. Create a new decision.
3. Link both entries.

This preserves project history.

---

# Reviewing Decisions

Before beginning:

- a new feature
- architecture change
- UX redesign
- major refactor

Review the Decision Log.

If the proposed work conflicts with an active decision,

pause implementation

and return to Product Discovery.

---

# Success

A new contributor should understand the project's most important decisions within fifteen minutes.

No contributor should need to search conversation history to understand why the product works the way it does.

---

# Guiding Principle

Decisions should become assets.

Not forgotten conversations.

---

# Amendment Rule

Changes to the Decision Log structure require explicit locked approval.

Historical decisions should remain preserved even when the project evolves.
