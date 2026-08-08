# Journey Planner Product Contract

Version: 1.0

Status: Active

---

# Mission

Build a Journey Planner that enables people to design meaningful, self-guided journeys through local communities while respecting nature, local culture, and the pace of local life.

The platform exists to help visitors discover, understand, plan, and experience authentic places with confidence.

Booking supports the journey.

It is not the product.

---

# Vision

Become the trusted operating system for conservation-based local travel.

The platform should quietly connect travellers, local communities, geography, hospitality, and education into one coherent journey.

---

# Product Identity

This product is a Journey Planner.

It is not:

- an Online Travel Agency
- a booking-first platform
- a tourism marketplace
- a directory website

It is a planning platform where booking is one supporting capability.

---

# Core Philosophy

Travel at the pace of the community, not the pace of the itinerary.

Technology should quietly disappear behind meaningful experiences.

The platform should encourage curiosity, respect, learning, and calm exploration.

---

# Primary Objectives

The platform should enable users to:

- Discover meaningful local experiences.
- Build complete multi-day journeys.
- Understand local culture before arrival.
- View accurate availability.
- Book only after completing their journey plan.
- Modify their journey without rebuilding everything.
- Travel confidently and respectfully.

---

# Target Audience

Primary

People seeking:

- meaningful travel
- nature
- local culture
- slow travel
- conservation
- wellness
- authentic hospitality

Examples

- Solo travellers
- Couples
- Families
- Friends
- Remote professionals taking time away from cities

---

# User Roles

## Explorer

The customer.

Responsibilities

- Create journeys.
- Build itineraries.
- Save journeys.
- Check availability.
- Book experiences.
- Learn about destinations.
- Return to edit future trips.

---

## Scout

Internal platform operator.

Responsibilities

- Visit locations.
- Verify information.
- Collect photographs.
- Record local knowledge.
- Maintain experience quality.
- Publish verified experiences.
- Update availability information.
- Protect data quality.

---

## Host

Future phase.

Responsibilities

- Manage availability.
- Update business information.
- Confirm bookings.
- Maintain content.

Host Portal is intentionally excluded from Version 1.

---

## Administrator

Future phase.

Responsibilities

- Platform management.
- Quality assurance.
- Community management.
- Operational oversight.

Administrator tooling is intentionally excluded from Version 1.

---

# Product Structure

Journey

↓

Journey Day

↓

Itinerary Item

↓ references

Experience

Itinerary Item

↓

Booking

An Itinerary Item references exactly one Experience. The Experience holds the reusable, verified information about the place or activity. The same Experience can be referenced by any number of Itinerary Items, across any number of Journeys. (Locked as JP-007.)

Booking is always attached to an itinerary item.

The journey exists independently of booking.

---

# Core Product Principles

## Journey before Booking

Planning comes first.

Reservation comes later.

---

## Discovery before Commitment

Visitors should freely explore before deciding.

---

## Verified Information

Only verified experiences should appear publicly.

---

## Local First

Support local communities before platform growth.

---

## Conservation through Hospitality

Protecting nature and welcoming visitors are complementary responsibilities.

---

## Education through Experience

Every journey should help visitors understand the places they visit.

---

## Geography Matters

Location is part of the experience.

Maps, elevation, weather, travel time, and environmental context are valuable information.

---

## Calm Technology

Interfaces should reduce stress rather than create urgency.

---

# Version 1 Scope

Included

- User registration
- Journey creation
- Multi-day planning
- Experience discovery
- Experience availability
- AI-assisted Experience suggestions during planning (Locked as JP-008; the Explorer still builds the Journey manually — this is suggestion and comparison support, not automatic itinerary generation)
- Booking
- Journey editing
- Maps
- Weather integration
- Internal Scout Workspace
- Experience verification
- Responsive web application

Excluded

- Host Portal
- Community messaging
- Reviews
- Rewards
- Gamification
- AI trip generation (automatic full-itinerary creation without the Explorer building it manually — distinct from the AI-assisted suggestions above, Locked as JP-008)
- Public APIs
- Offline mode
- Marketplace expansion

Excluded features belong in the Backlog.

---

# Definition of Success

A first-time visitor can:

- create an account,
- build a complete journey,
- understand every planned experience,
- verify availability,
- complete bookings,
- and begin travelling without needing direct assistance.

A Scout can:

- collect,
- verify,
- organise,
- and publish experiences efficiently using the internal workspace.

---

# Product Boundaries

The platform does not attempt to become everything.

It intentionally focuses on:

- planning
- knowledge
- verified information
- hospitality
- conservation
- journey management

Complex travel agency functions remain outside the product unless explicitly approved in future versions.

---

# Product Promise

Every recommendation made by this platform should help travellers leave with a deeper understanding of the local community than when they arrived.

Technology should quietly support that outcome.

---

# Amendment Rule

Changes to this Product Contract require an explicit locked decision.

Implementation must never redefine the product.

The Product Contract is the highest authority for business direction within this repository.
