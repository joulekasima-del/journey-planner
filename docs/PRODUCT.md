# Journey Planner — Product

Status: Active · Updated 2026-11-25

What the product is, who it is for, what Version 1 includes, and the principles every decision is checked against. Replaces the old Product Contract, Project Philosophy and Start Here (now in `archive/bootstrap-v1/`).

Every statement here traces to a locked decision in [DECISION_LOG.md](DECISION_LOG.md). Anything not locked is marked **Draft** or **Open**. Changing this document requires a new locked decision.

---

## 1. What Journey Planner is

Journey Planner is a journey-planning platform for travel across Thailand that runs its own booking marketplace. (JP-029)

1. The Explorer answers a short preference questionnaire for the whole trip, and can change any answer for an individual day. (JP-032)
2. The platform builds a **draft Journey** from verified Experiences only. (JP-032)
3. The Explorer edits anything: add, remove, reorder or swap. Nothing is booked automatically. (JP-032)
4. The Experiences that need booking in advance (stays, reservations, day trips and similar) are booked through the platform. (JP-030)
5. The platform earns a commission on each booking. (JP-015)

**Planning comes first in the interface; booking is the revenue engine.** (JP-029)

## 2. Who it is for

- **Primary segment (Draft, JP-028, not locked):** Western leisure travellers in Thailand for a few days to a few weeks. They are looking for real Thai experiences near Bangkok, Chiang Mai, and Phuket/Krabi, and they plan partly before arrival and partly day by day.
- **Also served:** solo travellers, couples, families and friends, especially people looking for nature, local culture, slow travel and authentic hospitality.

**Supply side:** Hosts are individual local businesses and people. Community-based tourism (CBT) groups are not the focus for now; they can be listed like any other Host, but nothing in Version 1 is designed around them. (Founder direction, 2026-11-25.)

## 3. Roles

| Role | Who | Version 1 |
|---|---|---|
| **Explorer** | The traveller (customer) | Answers the questionnaire, edits and saves Journeys, books, pays, returns to edit future trips. |
| **Scout** | Internal field operator | Visits places, collects and verifies Experiences, records local knowledge, onboards hosts. Uses the scouting form today. |
| **Host** | An individual local business or person providing an Experience: a guesthouse owner, a guide, a cooking teacher, a restaurant | **Minimal Host Calendar only** (JP-031): open or block dates and slots, set capacity, confirm or decline requests. Content, media, payouts and analytics are handled by Scouts and Admins. The full Host Portal is later. |
| **Administrator** | Platform operator (founder at launch) | Payout oversight, Experience verification, disputes and refunds, review moderation. (JP-018) |

## 4. How the product is structured

```
Journey ── preferences (whole trip)                 JP-032
 └ Journey Day ── preference overrides (optional)   JP-032
    └ Itinerary Item ── references exactly one ──► Experience          JP-007
                                                     └ Availability Slot
                                                        └ Booking (optional)   JP-017
```

- An **Experience** is collected and verified once, then reused by any number of Journeys. (JP-007)
- A **Booking** attaches to an Experience's **Availability Slot**, never directly to an Itinerary Item. (JP-017)
- A Journey can exist with no bookings at all. (JP-004)

## 5. What can be booked in Version 1

Everything bookable in advance (JP-030):

| Category | Availability model | Example |
|---|---|---|
| Accommodation | Stay (nights, rooms) | Homestay, guesthouse, eco-lodge |
| Day trips / activities / workshops | Timed Slot (date + time + capacity) | Weaving workshop, guided forest walk |
| Reservations | Optional Reservation (hold a place) | Restaurant table, temple-stay visit |
| No booking needed | Informational Only | Waterfall, viewpoint, market |

Hosts keep availability accurate through the Host Calendar (JP-031). The detailed booking rules (holds, lifecycle, request windows) are written in the Booking spec, starting from the candidate ideas in [BACKLOG.md](BACKLOG.md).

## 6. Business model

| Item | Status |
|---|---|
| **Commission:** 15% flat on platform bookings (Group A). Ticket-agent resale for festivals and large events (Group B) is deferred to Phase 2. | Locked, JP-015 |
| **Entity:** Thai limited company, registered before the first real booking | Locked, JP-033 |
| **Payments:** Stripe Connect with direct charges. Each Host has their own Stripe account and is the seller; the commission is taken as an application fee. A checkout with several Hosts makes one charge per Host. Hosts onboard on Stripe's own pages, so the platform never stores bank details. Cards and PromptPay. | Locked, JP-034 (replaces JP-014 / JP-021). Account types and fee refunds to confirm with Stripe Thailand. |
| **Cancellations and refunds:** each Host picks Flexible, Moderate or Strict per Experience; no refund for no-shows; commission refunded in proportion; Host cancellations are full refunds; on weather or safety call-offs the Explorer chooses refund or reschedule | Locked, JP-035 |
| **Conservation / community fund:** a share carved out of the 15% | **Open.** No percentage decided. |
| **Financial records:** every booking logs date, host, gross amount, commission, net amount and payout reference from day one | Locked (JP-016 → carried into JP-033) |

## 7. Version 1 scope

**Included**
- Explorer registration
- Preference questionnaire, including per-day overrides, that builds a draft Journey (JP-032)
- Multi-day Journey planning and editing
- Experience discovery
- AI-assisted suggestions and comparison (JP-008)
- Booking and payment for every category in §5 (JP-030)
- Availability shown per Experience
- Host Calendar (JP-031)
- Administrator tooling (JP-018)
- Internal Scout workspace and Experience verification
- Maps and weather; weather uses the dual-layer pattern (JP-023)
- Responsive web app: mobile-first, with an intentionally designed desktop (JP-024)
- PDPA consent capture for Hosts and Explorers (JP-019, JP-020)

**Excluded from Version 1**
- Full Host Portal (content editing, analytics, messaging)
- Native iOS and Android apps (JP-024)
- Community messaging
- Rewards and gamification
- Offline mode
- Public APIs
- Ticket-agent model (Group B)

## 8. Principles

These carry forward from the original Project Philosophy. Use them as the decision filter.

1. **Journey before Booking.** The plan comes first; booking completes it.
2. **Discovery before Commitment.** Explorers explore freely before paying.
3. **Verified information only.** Only verified Experiences appear publicly, and only verified Experiences go into a generated plan.
4. **Trust.** Availability is accurate, prices are honest, and recommendations are genuine. This is the platform's most valuable asset.
5. **Local first.** Hosts are independent local businesses and people. They are partners, not inventory.
6. **Conservation through hospitality.** Growth must never come at the expense of the places that make the platform valuable.
7. **Education through experience.** Every Journey should help the traveller understand the place: its geography, culture and etiquette.
8. **Calm technology.** Reduce stress and decision fatigue. No urgency tricks and no gamification (see JP-027).
9. **Simplicity.** One founder, an AI-driven build: prefer the smallest real solution.

Before adding a feature, ask: does it help someone complete a trustworthy Journey? Does it support local hosts? Does it stay calm and honest? If the answer to several of these is no, the feature goes to the Backlog.

## 9. Open questions

Each of these needs a locked decision before the related build starts.

| Question | Blocks |
|---|---|
| **Stripe Thailand confirmations** (JP-034): which connected account types a Thai platform can use; that application fees work with THB and PromptPay; how application fees are refunded; that PromptPay payments can be refunded, and how long refunds take. | Payments spec |
| **Chargeback liability:** under Stripe direct charges the Host's account bears chargebacks by default. Stripe also keeps its processing fee on refunds, so the Host loses it. Decide whether the platform ever covers either loss, and when. | Admin Panel, host agreement |
| **Conservation-fund percentage** | Marketing claims |
| **Reviews:** excluded from V1 by the original contract, yet JP-018 includes review moderation. Which is it? | Admin Panel |
| **Questionnaire generation:** rule-based or AI-assisted, and how each choice is explained to the Explorer | Questionnaire spec |
| **Primary segment:** lock JP-028 | Questionnaire defaults, copy |
| **Legal research:** tour-business licence for day trips, accommodation host registration, Digital Platform Services Royal Decree duties, consumer-protection rules on cancellations (JP-035) | Launch |
