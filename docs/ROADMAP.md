# Journey Planner — Roadmap

Status: Active · Updated 2026-11-25

The phases over the product's lifetime. Day-to-day sequencing lives in [BUILD_TRACKER.md](../BUILD_TRACKER.md). Replaces the original roadmap (archived in `archive/bootstrap-v1/07_PROJECT_ROADMAP.md`). Under JP-029/030/031, Booking, Host Calendar and Admin are now part of Version 1 rather than later phases.

Each phase should leave the product in a stable state. Changing phases needs a locked decision.

---

## Version 1 — Launch

Goal: a traveller can plan a complete Journey across Thailand and book every part of it that needs booking, and a host can keep their availability honest.

| Phase | Purpose | State |
|---|---|---|
| **1. Foundations** | Decisions, art direction, design system, PDPA groundwork | Mostly done (JP-001 to JP-033, `design-system/`) |
| **2. Supply: Scout Workspace** | Collect, verify and publish Experiences and host records, including availability setup and host onboarding | Scouting form live; the full workspace is not built |
| **3. Specifications** | Write the V1 specs in `docs/specs/`: Experience data, questionnaire, Journey planner, booking, payments, Host Calendar, Admin | Not started |
| **4. Explorer Planner** | Accounts, questionnaire to draft Journey, day-by-day editing, discovery, maps, weather | Mockups only (`design-system/ui_kits/`) |
| **5. Booking & Payments** | Availability engine, checkout, confirmation, cancellations and refunds, commission split, financial records | Xendit as booking agent (JP-036) and refund policy (JP-035) locked; waits on Xendit Thailand confirmations |
| **6. Host Calendar** | Mobile page for hosts: dates, capacity, confirm or decline | Not started |
| **7. Admin** | Payouts, verification, disputes and refunds, moderation | Waits on the Payments spec and the reviews decision |
| **8. Launch** | Company registered, legal checks done, supply in place, live payments, first real booking | Later |

## After Version 1

| Phase | Purpose |
|---|---|
| **Travel Companion** | Support during the trip: reminders, digital itinerary, offline reference, "in Thailand now" mode |
| **Full Host Portal** | Hosts edit their own content and media, see bookings and revenue |
| **Ticket Agent (Group B)** | Festivals and large events through an affiliate/resale model (JP-015) |
| **Community** | Local stories, seasonal updates, conservation projects. No social-media features. |
| **Expansion** | More regions and partnerships, native mobile apps (JP-024), public APIs |

## How success is measured

- Travellers finish trips feeling confident.
- Availability and bookings are accurate.
- Hosts trust the platform and get paid reliably.
- Local hosts benefit.
- One person can maintain the system.

Feature count is not a measure of success.
