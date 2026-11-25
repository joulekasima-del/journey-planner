# Journey Planner — Product

Status: Active · Updated 2026-11-25

What the product is, who it is for, what Version 1 includes, and the principles every decision is checked against. Replaces the old Product Contract, Project Philosophy and Start Here (now in `archive/bootstrap-v1/`).

Every statement here traces to a locked decision in [DECISION_LOG.md](DECISION_LOG.md). Anything not locked is marked **Draft** or **Open**. Changing this document requires a new locked decision.

---

## 1. What Journey Planner is

**Journey Planner helps Explorers create the itinerary for their journey across Thailand easily.** Planning is the product; booking supports the plan and is how the platform earns. (JP-028)

It is a journey-planning platform that runs its own booking marketplace. (JP-029) It is a **booking agent only**: Hosts provide every trip, stay and activity; Journey Planner arranges the booking, takes payment on the Host's behalf and earns a commission. It never operates trips itself. (JP-036)

1. The Explorer answers a short preference questionnaire for the whole trip, and can change any answer for an individual day. (JP-032)
2. The platform builds a **draft Journey** from verified Experiences only. (JP-032)
3. The Explorer edits anything: add, remove, reorder or swap. Nothing is booked automatically. (JP-032)
4. The Experiences that need booking in advance (stays, reservations, day trips and similar) are booked through the platform. (JP-030)
5. The platform earns a commission on each booking. (JP-015)

**Planning comes first in the interface; booking is the revenue engine.** (JP-029)

## 2. Who it is for

- **Open to everyone:** foreign tourists, expats and Thai residents can all use Journey Planner. (JP-028)
- **Launch focus:** independent foreign tourists visiting Thailand, and English-speaking expats and long-stayers living there. (JP-028)
- **Language:** English only at launch, with Thai place names alongside. A Thai interface and Thai-traveller features come later. (JP-028)
- **Launch region:** Chiang Mai province (city and day-trip reach). Journeys can include days elsewhere, filled in by the Explorer; only Chiang Mai places are suggested or bookable at launch. Each new region needs a locked decision. (JP-039)
- **Trip shapes:** multi-region journeys of 10+ days and 1–3 day weekend trips are both normal cases. Basis: `workspace/reports/Thailand traveller market potential.md`.

**Supply side:** Hosts are individual local businesses and people. Community-based tourism (CBT) groups are not the focus for now; they can be listed like any other Host, but nothing in Version 1 is designed around them. (Founder direction, 2026-11-25.)

## 3. Roles

| Role | Who | Version 1 |
|---|---|---|
| **Explorer** | The traveller (customer) | Answers the questionnaire, edits and saves Journeys, books, pays, returns to edit future trips. |
| **Inspector** (was Scout) | Internal field operator | Visits every registered place and checks it against the Verification Standard; confirms the Host's identity; adds public places nobody owns (waterfalls, beaches, viewpoints). Uses the scouting form today. (JP-037) |
| **Host** | An individual local business or person providing an Experience: a guesthouse owner, a guide, a cooking teacher, a restaurant **Registers their own place** for free, including places that need no booking; it stays hidden until an Inspector verifies it (JP-037). Bookable Hosts also use the **minimal Host Calendar** (JP-031): open or block dates and slots, set capacity, confirm or decline requests. After verification, changes to place details need Admin approval. The full Host Portal is later. |
| **Administrator** | Platform operator (founder at launch) | Payout oversight, Experience verification, disputes and refunds, review moderation. (JP-018) |

## 4. How the product is structured

```
Journey ── preferences (whole trip)                 JP-032
 └ Journey Day ── preference overrides (optional)   JP-032
    └ Itinerary Item ── references exactly one ──► Experience          JP-007
                                                     └ Availability Slot
                                                        └ Booking (optional)   JP-017
```

- An **Experience** is registered by its Host (or added by an Inspector for public places), verified once in person, then reused by any number of Journeys. (JP-007, JP-037)
- Every published Experience carries the **Verified badge** and an Explorer **star rating** (JP-037, JP-038).
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
| **Payments:** Xendit xenPlatform. The Explorer pays once per Journey; split rules send each Host's 85% to their own sub-account and Journey Planner keeps 15%, paying Xendit's fees from it. Hosts have OWNED sub-accounts that Journey Planner creates and runs, so Hosts never see Xendit. Hosts enter bank or PromptPay details at registration; the Inspector confirms identity (JP-037). Payouts weekly, after the Experience. | Locked, JP-036 (replaces JP-034 and JP-021). Details to confirm with Xendit Thailand (§9). |
| **Chargebacks:** recovered from the Host when they caused it; everything else, including card fraud, absorbed by Journey Planner. The Administrator handles all disputes. | Locked, JP-036 |
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
- Host self-registration, the Verification Standard and in-person inspection; Inspector workspace (JP-037)
- Explorer star ratings and reviews, moderated by the Admin (JP-038)
- Maps and weather; weather uses the dual-layer pattern (JP-023)
- Responsive web app: mobile-first, with an intentionally designed desktop (JP-024)
- PDPA consent capture for Hosts and Explorers (JP-019, JP-020)

**Excluded from Version 1**
- Full Host Portal (analytics, messaging, self-published edits)
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
3. **Verified information only.** Only Experiences an Inspector has verified in person against the Verification Standard appear publicly or go into a generated plan. (JP-037)
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
| **Xendit Thailand confirmations** (JP-036): OWNED sub-accounts in Thailand and the identity checks required per Host; splitting one payment across several sub-accounts, and the maximum per payment; holding funds until the platform releases them; fees per payment method; the chargeback setting at activation; refund timing, including PromptPay. | Payments spec |
| **Conservation-fund percentage** | Marketing claims |
| **Questionnaire generation:** rule-based or AI-assisted, and how each choice is explained to the Explorer | Questionnaire spec |
| **Next region after Chiang Mai** (research suggests Bangkok, then Krabi/Phuket) | Expansion |
| **Re-inspection interval** and the content of the Verification Standard | Verification Standard spec |
| **Legal and tax research:** VAT on commission only and withholding tax under the agent model (accountant); whether a booking agent selling day trips needs its own tour-business licence or only the Hosts who run them do, accommodation host registration, Digital Platform Services Royal Decree duties, consumer-protection rules on cancellations (JP-035) | Launch |
