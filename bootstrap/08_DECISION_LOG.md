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

## JP-007 — Experience Reference in Itinerary Item

Category: Architecture

Status: Locked

Date: 2026-08-06

Decision:

An Itinerary Item references exactly one Experience.

The Experience holds the reusable, verified information about the place or activity (name, type, description). The Itinerary Item holds only what is specific to that traveller's plan (which day, what order).

The same Experience can be referenced by any number of Itinerary Items, across any number of Journeys.

Reason:

Reflects how local tourism actually works. A homestay, workshop, or natural site is collected and verified once, then reused by every traveller who includes it in their own plan — the same way a community trail sign lists numbered stops that any visitor can independently choose to visit.

Impact:

JP-004 is not superseded. The Journey → Journey Day → Itinerary Item → Booking chain stays exactly as locked. This completes it by adding the missing reference from Itinerary Item to Experience, a term already defined in the Glossary but not previously connected to the structure.

Related Documents:

- 02_PRODUCT_CONTRACT.md
- 10_PROJECT_GLOSSARY.md

Superseded By: None

---

## JP-008 — AI-Assisted Planning Support (Version 1 Scope Clarification)

Category: Product

Status: Locked

Date: 2026-08-06

Decision:

Version 1 includes AI assistance that suggests and helps compare Experiences, and answers questions, while the Explorer manually builds their own Journey.

Version 1 does not include automatic full-itinerary generation ("AI trip generation"), which remains explicitly excluded.

Reason:

The traveller's own planning stays central to the product — Journey before Booking, Discovery before Commitment. AI assistance supports that process rather than replacing it. This makes the existing included/excluded boundary precise rather than leaving "AI trip generation" ambiguous.

Impact:

02_PRODUCT_CONTRACT.md Version 1 Scope gains "AI-assisted Experience suggestions during planning" under Included. "AI trip generation" remains under Excluded, now defined explicitly as full automatic itinerary creation.

Related Documents:

- 02_PRODUCT_CONTRACT.md
- 07_PROJECT_ROADMAP.md

Superseded By: None

---

## JP-013 — Journey Planner Diverges from Shared Creative Framework

Category: Creative / Product

Status: Locked

Date: 2026-08-10

Decision:

Journey Planner no longer adopts the shared Nature Base Creative Framework (pixel art, Master Palette, Companion character). This supersedes JP-003 for Journey Planner specifically.

The shared framework itself remains valid and continues to be actively used by Nature Base Workspace and any other future studio product — this decision only removes Journey Planner from its adopters, it does not retire the framework. The framework has been copied (not moved) to its own reusable repository, `studio-creative-framework`, leaving Nature Base Workspace's original copy untouched.

Journey Planner's actual art direction is not yet decided. It will be defined in a dedicated design session, grounded in the founder's stated direction: hand-drawn, illustrated map-style visuals, evoking a living, explorable map rather than pixel art — warm and alive without looking AI-generated.

Reason:

The pixel-art framework was inherited from a different product (Nature Base Workspace) via JP-003's original adoption, not decided for Journey Planner on its own merits. On review, it doesn't match the founder's actual stated creative vision for this specific platform.

Impact:

`bootstrap/04_CREATIVE_FRAMEWORK.md` stays intact and unedited — it correctly describes a reusable studio standard, not Journey Planner's art direction specifically. A new Journey Planner-specific creative document is still needed, pending the design session referenced above.

Related Documents:

- bootstrap/04_CREATIVE_FRAMEWORK.md
- studio-creative-framework (external repository)

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
