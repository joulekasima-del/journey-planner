# Journey Planner Backlog

Version: 1.0

Status: Active

---

# Purpose

The Backlog protects product focus.

Its purpose is to preserve valuable ideas without interrupting the current roadmap.

Every idea has value.

Not every idea belongs in the current phase.

The Backlog is the project's parking area for future work.

---

# Philosophy

Ideas should never be lost.

Ideas should also never quietly enter the current scope.

Every idea waits until it becomes the right priority.

---

# Rules

## The Backlog is not a sprint.

Nothing inside this document is approved for implementation.

Backlog items require Product Discovery before becoming roadmap work.

## New ideas

Whenever a new idea appears during:

- discussion
- research
- implementation
- QA
- field work
- user feedback

and it does not belong to the current objective,

place it here.

Do not expand the active sprint.

## Every backlog item includes

- Backlog ID
- Category
- Title
- Description
- Priority
- Status
- Suggested Phase
- Notes

---

# Priority Levels

High

Important and likely to become roadmap work.

Medium

Useful but not currently required.

Low

Interesting idea.

Revisit when appropriate.

Research

Requires investigation before product decisions.

---

# Status

Allowed values

Proposed

Research

Approved for Discovery

Planned

Implemented

Rejected

Archived

---

# Categories

Business

Product

UX

Creative

Engineering

Research

Infrastructure

Operations

Community

Education

Conservation

Accessibility

Performance

Future Expansion

---

# Backlog Template

Backlog ID

JP-B001

Category

Product

Title

Example Feature

Priority

Medium

Status

Proposed

Suggested Phase

Future

Description

Short description of the idea.

Notes

Optional implementation thoughts.

---

# Current Backlog

## JP-B001 — Host Subscription: Tour Guide Marketplace

Category: Business / Future Expansion

Title: Tour guides subscribe to offer and sell guide services

Priority: Medium

Status: Proposed

Suggested Phase: Phase VI — Host Portal

Description:

Local tour guides subscribe to the platform to offer and sell their guide services directly to Explorers as part of journey planning. Builds on the Host role already defined in this Product Contract and the Roadmap's Phase VI — Host Portal.

Notes:

Will require extending the commerce/booking side beyond today's simple Booking node when this phase is actually reached. That extension is a decision for that point, not now.

---

## Reference — Phase IV Booking Domain Candidate Ideas

Category: Reference material, not a decision

Status: Unlocked — preserved for when Phase IV (Booking System) Discovery actually begins

Description: ~28 booking/commerce design ideas recovered from prior Discovery work (availability models, seat holds, booking lifecycle, idempotent creation, guest checkout, price snapshots, and similar). None of this is locked or decided. Listed here so it isn't lost, and so Phase IV Discovery starts from real prior thinking rather than a blank page — but every item still needs its own real decision when that phase actually starts, not inherited automatically.

- Original product flow: Discover → Plan → Check availability → Confirm journey → Book → Travel.
- Four availability models: availability behaviour is Timed Slot, Stay, Optional Reservation, or Informational Only.
- Seasonal Experience is not a fifth type: an optional start/end validity window attachable to any availability model, not a separate model.
- Booking is type-agnostic: availability-type behaviour belongs in availability modelling, not in Booking itself.
- Host as a first-class entity from the beginning, even while self-service stays future scope.
- V1 Timed Slot: Timed Slot included in V1.
- V1 Informational Only: Informational Only included in V1.
- Stay booking behaviour deferred from V1.
- Optional Reservation deferred from V1.
- Host portal / self-service deferred from V1.
- Post-confirmation / mid-journey extension deferred.
- Recurrence rules initially deferred (later idea below reopens this — needs one real decision, not both).
- Seasonal-window enforcement in UI deferred from V1, while still storing the underlying data.
- Availability slots use real timestamp-with-time-zone start values, with end where needed, multiple slots per day.
- Booking lifecycle: pending → confirmed → completed, with cancellation branches.
- Seat/capacity accounting enforced at the database level.
- Role enum: booking implementation used roles admin, scout, and later host.
- Authorization-sensitive requests re-check role/authority rather than trusting stale client state.
- Mutating operations verify ownership/authority.
- Unavailable inventory slots are blocked rather than destructively deleted where history matters.
- Payment/event webhook drives confirmed booking state rather than client-side assumption.
- Checkout-started seat holds expire after roughly 15 minutes if abandoned.
- Pending booking creation holds actual capacity rather than waiting until final confirmation.
- Guest checkout supported without forced account creation.
- Booking records preserve the commercial price snapshot applicable at commitment time.
- Human booking references use a short, generated, human-readable pattern.
- Booking creation and confirmation operations are idempotent.
- Recurrence generation: simple day-of-week/time recurrence (conflicts with the earlier deferral idea above — needs one real decision, not both).

---

# Research Queue

Research items are questions rather than features.

Examples

- Should offline planning exist?
- Which weather providers best fit conservation travel?
- How should multilingual support evolve?
- Which mapping strategy scales best?
- How should host verification work?

Research should produce recommendations rather than immediate implementation.

---

# Technical Debt

Technical debt belongs here.

Not inside sprint documentation.

Every technical debt item should explain:

- why it exists
- impact
- urgency
- recommended resolution

Technical debt should be visible.

---

# Community Requests

Future requests from:

- travellers
- hosts
- local communities
- researchers

should be collected here until evaluated.

The platform should listen carefully without immediately changing direction.

---

# Creative Ideas

Creative experiments belong here.

Examples

- New companion behaviours
- Seasonal visual themes
- Ambient improvements
- Animation experiments
- Storytelling ideas
- Journal enhancements

Creative ideas should never bypass the Creative Framework.

---

# Product Experiments

Experimental concepts belong here before entering Discovery.

Examples

- AI-assisted planning
- Collaborative journeys
- Shared itineraries
- Community challenges
- Educational programmes

Experiments require validation before roadmap approval.

---

# Future Expansion

Examples

- Additional provinces
- International expansion
- Mobile applications
- Public APIs
- Research partnerships
- Conservation partnerships
- Educational institutions

Expansion should always protect product philosophy.

---

# Adding Items

Before adding a backlog item, ask:

Does this belong in the current sprint?

If yes,

return to Product Discovery.

If no,

record it here.

The Backlog exists to protect momentum without losing valuable ideas.

---

# Reviewing the Backlog

Review the Backlog only:

- before roadmap planning
- before beginning a new phase
- during product strategy reviews

Avoid reviewing it during active implementation.

This reduces unnecessary scope changes.

---

# Success

The project remains focused.

No valuable ideas disappear.

Implementation continues without constant interruption.

Future planning begins with organised knowledge rather than forgotten conversations.

---

# Guiding Principle

Protect today's focus while preserving tomorrow's opportunities.

---

# Amendment Rule

Changes to the Backlog structure require explicit locked approval.

Individual backlog items may evolve through Discovery before becoming roadmap work.
