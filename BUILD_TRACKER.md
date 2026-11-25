# Build Tracker

Status: Active · Updated 2026-11-25 · Owner: Founder

The live list of what's being worked on, in dependency order. It doesn't replace specs or the Decision Log; it sequences work against them. Finished items are removed from this file; the full pre-reorganization tracker, including every completed item and its commit, is in `archive/BUILD_TRACKER-2026-08-18.md`.

**Now** is unblocked and should happen first. **Next** waits on something in Now. **Later** has nothing depending on it yet. **Flag** marks legal, ethical or trust risk.

---

## Now — decisions

- [ ] **Confirm Stripe Thailand details** (JP-034). Ask Stripe Thailand sales: which connected account types (Standard / Express) a Thai platform can use; that application fees on direct charges work for THB and PromptPay; whether the application fee can be refunded with a booking refund; that PromptPay payments can be refunded, and how long refunds take (JP-035). Needs the company (JP-033) to open the account. **Blocks:** Payments spec.
- [ ] **Chargeback liability.** Under Stripe direct charges (JP-034) the Host bears it by default; Stripe also keeps its processing fee on refunds (JP-035). Decide whether the platform ever covers either loss, and when. **Blocks:** Admin, host agreement, Sales Plan.
- [ ] **Lock JP-028** (primary segment), currently a draft in `workspace/01_Handoffs/`. **Blocks:** Questionnaire spec defaults.
- [ ] **Reviews in V1 or not?** The old contract excluded them, but JP-018 includes review moderation. **Blocks:** Admin spec.
- [ ] **Conservation-fund percentage** (carve-out from the 15%, JP-015). **Flag:** Trust: no fund claim in marketing without a locked number. **Blocks:** Marketing Plan.

## Now — specs (order and inputs in `docs/specs/README.md`)

- [ ] Spec 1: Experience Data Standard
- [ ] Spec 2: Journey & Data Model
- [ ] Spec 3: Preference Questionnaire & Draft Journey (needs JP-028)
- [ ] Spec 4: Booking System (unblocked by JP-035)
- [ ] Spec 8: Language Standard (can run in parallel)

## Now — legal and business (founder-owned)

- [ ] **Register the Thai limited company** before the first real booking (JP-033). Confirm withholding-tax and VAT duties with an accountant.
- [ ] **Legal research before launch:**
  - Does selling day trips need a Department of Tourism tour-business licence?
  - Must accommodation hosts be registered (hotel/homestay) before listing?
  - What does the Digital Platform Services Royal Decree require of the platform?
  - Do Thai consumer-protection rules limit the cancellation presets (JP-035)?
  - **Flag:** legal.
- [ ] **Supply the PDPA notice inputs:** company name, official LINE ID, contact email, native Thai legal translation review. Then build the consent-capture UI (JP-020) on the scouting form, and later on the Host Calendar and Explorer sign-up.

## Now — design housekeeping (Claude Design)

- [ ] Update `design-system/readme.md`. It still says only JP-022–024 are locked and that platform accommodation booking is undecided; JP-025/026 and JP-030 settle both. It also has a dead rust-token caveat and a stray Work Sans reference. Re-pull the three images lost in the last `/design-sync`.
- [ ] Choose one Explorer UI kit (`explorer` or `explorer-proposal`) and archive the other.
- [ ] Wire the Station View prototype (Journey Day screen, mobile and desktop) into Claude Design.
- [ ] Wire the 6 locked icons not yet used in components: synced, syncing, connected, ready, selected, current (JP-026).

---

## Next

- [ ] **Spec 5: Payments & Payouts.** Waits on the Stripe Thailand confirmations and chargeback liability.
- [ ] **Spec 6: Host Calendar.** Waits on Spec 4.
- [ ] **Spec 7: Admin Panel.** Waits on Spec 5 and the reviews decision.
- [ ] **Build the Explorer Planner.** Waits on Specs 1–3.
- [ ] **Build Booking, Payments, Host Calendar and Admin.** Each waits on its spec.
- [ ] **Sales Plan:** host acquisition, the marketplace cold-start problem. Waits on chargeback liability, because payout terms must be honest when pitching hosts.
- [ ] **Marketing Plan:** demand side, deliberately after the Sales Plan so travellers don't meet an empty shelf. Waits on the conservation-fund decision for any fund claim.

## Later

- [ ] **Launch:** go-live checklist, live payments, first real booking. Depends on everything in Next.
- [ ] **CBT certification:** parked. Hosts are individual businesses and people for now, so CBT isn't the focus.
- [ ] **Group B ticket-agent commission rate:** deferred to Phase 2 (JP-015).

---

## Revisit when triggered

These aren't scheduled. Come back to each one when its trigger happens.

- **Supabase cross-border classification and ETA Section 26.** Trigger: the founder's government contact replies. The notices currently assume Singapore hosting counts as cross-border (the safer default).
- **LINE as a data processor.** Trigger: LINE-based host notifications ship. That needs its own consent line, not a silent notice edit.
- **Host bank-data guarantee.** Today the notice can truthfully say bank data never touches our systems, because hosts onboard on Stripe's own hosted pages (JP-034). Trigger: any move to a platform-collected onboarding flow, or a change of provider. Update the notice **before** the change ships.
- **DocuSign / Zoho Sign upgrade path.** Trigger: a real signature dispute, or enough scale to justify moving off the in-house mechanism (JP-020).
- **Map screen-reader equivalence testing (WCAG 1.1.1).** The highest accessibility risk: the non-visual alternative must convey route and spatial relationships, not a flat list. Trigger: the Station View prototype has real content. It blocks production, not prototyping.

---

## Revision history

| Date | Change |
|---|---|
| 2026-08-10 → 2026-08-18 | See `archive/BUILD_TRACKER-2026-08-18.md`. |
| 2026-11-25 | JP-035 locked (refund policy). Spec 4 moved to Now; refund item removed; Stripe confirmations, chargeback item and legal research extended. |
| 2026-11-25 | JP-034 locked (Stripe). Provider decision replaced by Stripe Thailand confirmations; chargeback, refund, Spec 5 and bank-data trigger updated. |
| 2026-11-25 | Rewritten for JP-029 to JP-033 and the docs reorganization. Removed finished items (now in the archived copy). Removed the stale "lock JP-019–021" item, since they are locked. Added the payment-provider, refund, JP-028 and reviews decisions; company registration and legal research; the 8 V1 specs; design-system readme drift. Experience Data Standard and Language Standard moved into the spec list. Booking, Host Calendar and Admin are now V1 work. |
