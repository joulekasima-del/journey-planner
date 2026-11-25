# Journey Planner — Glossary

Status: Active · Updated 2026-11-25

These are the official terms. Use them in docs, code and specs. Don't invent new terms without adding them here. Replaces the old glossary; its pixel-art and AI-tool terms were dropped (archived in `archive/bootstrap-v1/10_PROJECT_GLOSSARY.md`).

---

## Planning

**Journey.** The complete travel plan created by an Explorer. It contains one or more Journey Days and holds the trip-level preferences (JP-032). A Journey can exist without any Booking.

**Journey Day.** One calendar day within a Journey. It contains Itinerary Items, and may override any trip-level preference for that day (JP-032). Days are independent pages, not steps in a sequence (JP-027).

**Itinerary Item.** One planned entry on a Journey Day: which Experience, and when and in what order. It references exactly one Experience (JP-007).

**Preference Questionnaire.** The short set of questions (dates, arrival point, pace, interests, comfort, budget, etc.) the Explorer answers for the whole trip. Answers can be overridden per Journey Day (JP-032).

**Draft Journey.** The Journey the platform builds from the questionnaire answers, using only verified Experiences. The Explorer reviews and edits it freely; nothing in it is booked automatically (JP-032).

## Supply

**Experience.** A verified place, activity, stay, service or event that can be added to a Journey. It is the main content object, collected and verified once and reused by every Journey that includes it (JP-007). Examples: homestay, weaving workshop, guided walk, restaurant, waterfall.

**Verified.** An Experience a Scout has checked in person and published. Only verified Experiences appear publicly or in a Draft Journey.

## Booking

**Availability Slot.** A bookable unit of an Experience: a dated time slot, a night/room, or a reservation window. Bookings attach to slots, not to Itinerary Items (JP-017).

**Availability models.** How an Experience can be booked (JP-030):
- **Timed Slot:** date, time and capacity, e.g. a workshop.
- **Stay:** nights and rooms, e.g. a homestay.
- **Optional Reservation:** holding a place, e.g. a restaurant table.
- **Informational Only:** no booking needed, e.g. a waterfall.

**Booking.** A reservation of one or more Availability Slots, paid through the platform. It is the business's revenue engine (JP-029).

**Cancellation policy.** The refund terms a Host picks for each Experience: Flexible, Moderate or Strict. The policy is saved with each Booking when it's made (JP-035).

**Commission.** The platform's 15% share of a Group A booking, taken automatically at payment (JP-015).

**Group A / Group B.**
- **Group A:** bookings the platform takes payment for, earning commission.
- **Group B:** a ticket-agent model for festivals and large events. Deferred to Phase 2 (JP-015).

**Host Calendar.** The minimal Version 1 page where a Host opens or blocks dates and slots, sets capacity, and confirms or declines requests (JP-031). Not the same as the full **Host Portal**, which is after Version 1.

## Roles

**Explorer.** The traveller: the customer.

**Scout.** An internal field operator who collects, verifies and publishes Experiences and onboards Hosts.

**Host.** The person or business providing an Experience. In Version 1 a Host uses only the Host Calendar (JP-031).

**Administrator.** The platform operator, responsible for payouts, verification, disputes and refunds, and moderation (JP-018).

## Working terms

**Locked.** A decision recorded in the Decision Log with a JP number. Only Locked decisions are real.

**Draft / Proposed.** Discussed but not locked. It must be labelled as such.

**Spec.** A feature specification in `docs/specs/` that turns locked decisions into buildable detail.

**Build Tracker.** `BUILD_TRACKER.md`, the live list of what's being worked on.

## Naming

Internal names stay plain (Experience, Journey Day). User-facing copy can be warmer ("your Journey", "Forest walk experience"), but it addresses the Explorer as "you".
