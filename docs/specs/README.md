# Specifications

Status: Active · Updated 2026-11-25

Feature specs turn locked decisions into buildable detail. Use [TEMPLATE.md](TEMPLATE.md) for new specs. A spec isn't real until it's listed here.

**None of the Version 1 specs exist yet.** This table is the plan, in suggested writing order.

| # | Spec | Implements | Starting material | Blocked on |
|---|---|---|---|---|
| 1 | **Experience Data Standard**: what every Experience record must contain, per category, including what's needed for booking | JP-007, JP-030 | `prototypes/supabase-schema.sql`, scouting-form fields and category questions | — |
| 2 | **Journey & Data Model**: Journey, Day, Item, preferences and overrides, Availability Slot, Booking tables | JP-004, JP-007, JP-017, JP-032 | `docs/PRODUCT.md` §4 | — |
| 3 | **Preference Questionnaire & Draft Journey**: the questions, per-day overrides, how a draft is built and explained | JP-032, JP-008, JP-023 | Compass mockups in `design-system/ui_kits/explorer/` (8 questions) and `explorer-proposal/` (5 questions); JP-028 draft | JP-028 (segment), generation approach |
| 4 | **Booking System**: availability models, holds, lifecycle, request windows, cancellations | JP-017, JP-030, JP-031 | ~28 candidate ideas in `docs/BACKLOG.md` | Refund policy |
| 5 | **Payments & Payouts**: provider, commission split, payouts, chargebacks, financial records | JP-034, JP-015, JP-033 | `docs/PRODUCT.md` §6 and §9 | Stripe Thailand confirmations, chargeback liability |
| 6 | **Host Calendar** | JP-031, JP-020 | — | Spec 4 |
| 7 | **Admin Panel** | JP-018 | Build Tracker notes | Spec 5, reviews question |
| 8 | **Language Standard**: English/Thai terminology and copy rules | JP-025, JP-023 | PDPA notices (EN/TH), design-system content rules | — |

Retired from the old index and not to be resumed without a fresh decision:
- Journey Architecture v2: covered by spec 2
- Platform Knowledge Architecture v1: came from the discarded "Batch 2" draft
- Booking System Specification placeholder: replaced by specs 4 and 5
