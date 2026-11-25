# Build Tracker

Status: Active · Updated 2026-11-25 · Owner: Founder

The live list of what's being worked on, in dependency order. It doesn't replace specs or the Decision Log; it sequences work against them. Finished items are removed from this file; the full pre-reorganization tracker, including every completed item and its commit, is in `archive/BUILD_TRACKER-2026-08-18.md`.

**Now** is unblocked and should happen first. **Next** waits on something in Now. **Later** has nothing depending on it yet. **Flag** marks legal, ethical or trust risk.

---

## Now — decisions

- [ ] **Confirm Xendit Thailand details** (JP-036). Ask Xendit: OWNED sub-accounts in Thailand and the identity checks required per Host; splitting one payment across several sub-accounts, and the maximum per payment; holding funds in a sub-account until the platform releases them to the Host's bank; fees per payment method; the chargeback setting required at xenPlatform activation; refund timing, including PromptPay. **Blocks:** Payments spec.
- [ ] **Conservation-fund percentage** (carve-out from the 15%, JP-015). **Flag:** Trust: no fund claim in marketing without a locked number. **Blocks:** Marketing Plan.

## Now — specs (order and inputs in `docs/specs/README.md`)

- [ ] Spec 1: Experience Data & Verification Standard (JP-037)
- [ ] Spec 2: Journey & Data Model (include free-text days outside a verified region, JP-039)
- [ ] Spec 3: Preference Questionnaire & Draft Journey (JP-028 locked; English only)
- [ ] Spec 4: Booking System (unblocked by JP-035)
- [ ] Spec 8: Language Standard (can run in parallel)

## Now — legal and business (founder-owned)

- [ ] **Register the Thai limited company** before the first real booking (JP-033). Confirm withholding-tax and VAT duties with an accountant.
- [ ] **Legal research before launch:**
  - Does a booking agent selling day trips need its own Department of Tourism tour-business licence, or only the Hosts who run them (JP-036)?
  - Accountant: VAT on commission only, and withholding-tax duties, under the agent model (JP-036).
  - Must accommodation hosts be registered (hotel/homestay) before listing?
  - What does the Digital Platform Services Royal Decree require of the platform?
  - Do Thai consumer-protection rules limit the cancellation presets (JP-035)?
  - **Flag:** legal.
- [ ] **Have the rewritten Host notice reviewed** before the first Host is onboarded for payouts: Journey Planner now holds Host bank details (JP-036). Bank details need encrypted storage readable only by the Administrator. **Flag:** privacy.
- [ ] **Supply the PDPA notice inputs:** company name, official LINE ID, contact email, native Thai legal translation review. Then build the consent-capture UI (JP-020) on the scouting form, and later on the Host Calendar and Explorer sign-up.

## Now — design housekeeping (Claude Design)

- [ ] Update `design-system/readme.md`. It still says only JP-022–024 are locked and that platform accommodation booking is undecided; JP-025/026 and JP-030 settle both. It also has a dead rust-token caveat and a stray Work Sans reference. Re-pull the three images lost in the last `/design-sync`.
- [ ] Choose one Explorer UI kit (`explorer` or `explorer-proposal`) and archive the other.
- [ ] Wire the Station View prototype (Journey Day screen, mobile and desktop) into Claude Design.
- [ ] Wire the 6 locked icons not yet used in components: synced, syncing, connected, ready, selected, current (JP-026).

---

## Next

- [ ] **Spec 5: Payments & Payouts.** Waits on the Xendit Thailand confirmations.
- [ ] **Spec 6: Host Calendar.** Waits on Spec 4.
- [ ] **Spec 7: Admin Panel** (including the registration queue and review moderation). Waits on Spec 5.
- [ ] **Build the Explorer Planner.** Waits on Specs 1–3.
- [ ] **Build Booking, Payments, Host Calendar and Admin.** Each waits on its spec.
- [ ] **Sales Plan:** host acquisition, the marketplace cold-start problem. Payout terms are now settled (JP-036: 85%, weekly, after the Experience); can start once Spec 5 confirms the details.
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
- **DocuSign / Zoho Sign upgrade path.** Trigger: a real signature dispute, or enough scale to justify moving off the in-house mechanism (JP-020).
- **Map screen-reader equivalence testing (WCAG 1.1.1).** The highest accessibility risk: the non-visual alternative must convey route and spatial relationships, not a flat list. Trigger: the Station View prototype has real content. It blocks production, not prototyping.

---

## Revision history

| Date | Change |
|---|---|
| 2026-08-10 → 2026-08-18 | See `archive/BUILD_TRACKER-2026-08-18.md`. |
| 2026-11-25 | JP-039 locked (launch region: Chiang Mai). Removed the launch-region decision; Spec 2 note added. |
| 2026-11-25 | JP-028, JP-037, JP-038 locked (launch audience, Host self-registration and inspection, Explorer reviews). Removed the JP-028 and reviews items; added the launch-region decision; Spec 1 now includes the Verification Standard; Spec 3 and Spec 7 unblocked from those decisions. |
| 2026-11-25 | JP-036 locked (Xendit, booking agent, OWNED sub-accounts). Stripe confirmations replaced by Xendit confirmations; chargeback item removed (settled); Host notice review added; bank-data trigger removed (now a Now item); legal research and Sales Plan updated. |
| 2026-11-25 | JP-035 locked (refund policy). Spec 4 moved to Now; refund item removed; Stripe confirmations, chargeback item and legal research extended. |
| 2026-11-25 | JP-034 locked (Stripe). Provider decision replaced by Stripe Thailand confirmations; chargeback, refund, Spec 5 and bank-data trigger updated. |
| 2026-11-25 | Rewritten for JP-029 to JP-033 and the docs reorganization. Removed finished items (now in the archived copy). Removed the stale "lock JP-019–021" item, since they are locked. Added the payment-provider, refund, JP-028 and reviews decisions; company registration and legal research; the 8 V1 specs; design-system readme drift. Experience Data Standard and Language Standard moved into the spec list. Booking, Host Calendar and Admin are now V1 work. |
