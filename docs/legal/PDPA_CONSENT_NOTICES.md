# PDPA Consent Notices — Host-Facing and Explorer-Facing

Status: Draft

Parked here 2026-09-09, not started — pick this up only when you're ready
to work on it seriously, before consulting a lawyer.

---

> **This is not a compliant, final, or legally reviewed document.** It is a
> structured starting point for a qualified Thai lawyer to review, correct,
> and finalize before it is ever shown to a real host or Explorer. Do not
> ship, publish, or link to this draft as-is. English only — the Thai
> translation still needs a native legal reviewer, per Build Tracker's own
> outstanding blocker; do not machine-translate this and treat it as
> equivalent.

Grounded in the reasoning already locked in `08_DECISION_LOG.md` (JP-019,
JP-020, JP-021) — that research is real and reusable, even though the
notice document itself was never actually produced until now. Written
against the new Limited Company entity type (pending JP-028).

---

## Open questions for the lawyer — don't skip these

1. **Data Protection Officer (Section 41).** Does a juristic-person
   Data Controller of this scale trigger a mandatory DPO appointment?
   This project has not resolved this — flagging it, not answering it.
2. **ETA Section 26.** JP-020 only claims Section 9 (general electronic
   signature) compliance for the in-app consent-capture mechanism, not
   the higher Section 26 "Reliable Electronic Signature" tier — Thai
   legal commentary is reportedly split on whether in-house engineering
   can meet Section 26 without third-party certification. Needs a
   direct answer, not an assumption either way.
3. **Cross-border transfer.** Data is hosted on Supabase's Singapore
   region. This draft conservatively treats that as a cross-border
   transfer requiring disclosure — pending a government contact's
   answer that hasn't come back yet (per Build Tracker). Confirm or
   correct this classification.
4. **Entity-type-specific obligations.** Anything else that changes
   specifically because the Data Controller is now a juristic person
   rather than a natural person — this draft assumes the underlying
   PDPA mechanics (retention, deletion, consent capture) carry over
   unchanged from the sole-proprietorship version, but that assumption
   itself needs your confirmation, not mine.

---

## Host-Facing Notice (Draft)

**Notice to Hosts: How [LEGAL ENTITY NAME — pending registration] Collects
and Uses Your Information**

### Who is responsible for your data

[LEGAL ENTITY NAME], a limited company registered in Thailand ("we," "us,"
"Journey Planner"), is the Data Controller for the personal data described
in this notice.

Contact: [CONTACT EMAIL — pending]

### What we collect, and when

When a Scout records your Experience or listing during a site visit, we
collect: your name and contact details, information about the place or
activity you're offering, and photographs or descriptions you provide.

If you begin receiving bookings through the platform, you will separately
complete identity verification (KYC) and provide your bank details directly
through Xendit's own onboarding flow — not through us. See "Bank and
payment information" below for why this distinction matters.

### Why we collect it

To list your Experience on the platform, process bookings you receive, pay
you for completed bookings, and verify the accuracy and safety of what's
listed. This is necessary to perform our agreement with you as a host and,
where noted, based on our legitimate interest in maintaining a trustworthy
platform.

### Bank and payment information

We do not collect or store your bank account details. When you're onboarded
to receive bookings, Xendit — our payment infrastructure provider — invites
you directly to complete your own KYC and banking details on their platform,
not ours. This is true specifically because of how your account is
configured on our side; if that configuration ever changes, we will update
this notice before the change takes effect, not after.

### How long we keep your information

If your account or listing is inactive for 12 months, your personal data is
automatically anonymized or deleted. If you request deletion at any time, we
will complete it — including from backups, in a way that prevents recovery
— within 90 days.

### Where your data is stored

Our systems are hosted on infrastructure located in Singapore. [This is
currently treated as a cross-border transfer of your data outside Thailand,
pending final confirmation — see Open Questions above.]

### Who else sees your information

- **Xendit** (payment processing and your own KYC/banking, directly with you)
- **Supabase** (our database and hosting provider)
- **LINE** — not currently used to contact you. If we begin sending
  booking confirmations or reminders via LINE in the future, we will ask
  for your separate, explicit consent before that starts — not fold it
  into this notice retroactively.

### Your rights

You can ask to see what we hold about you, correct it, delete it, or
withdraw your consent at any time. You can also file a complaint with
Thailand's Personal Data Protection Committee (PDPC).

### How you give consent

By checking the box below and signing in the space provided (using your
authenticated account), you confirm you have read and understood this
notice and agree to the collection and use of your information as
described. We record the exact version of this notice you signed, along
with the time, and basic device information, so there's a clear record of
what you agreed to and when.

---

## Explorer-Facing Notice (Draft)

**Notice to Explorers: How [LEGAL ENTITY NAME — pending registration]
Collects and Uses Your Information**

### Who is responsible for your data

[LEGAL ENTITY NAME], a limited company registered in Thailand ("we," "us,"
"Journey Planner"), is the Data Controller for the personal data described
in this notice.

Contact: [CONTACT EMAIL — pending]

### What we collect

Account information you provide (name, contact details), the Journeys you
create and save, and — if you make a booking — the booking details needed
to complete it.

### Why we collect it

To let you build, save, and revisit your Journeys, and to process any
bookings you choose to make. We do not use your planning activity to sell
advertising or rank recommendations by payment — see our platform
principles for more on this.

### How long we keep your information

If your account is inactive for 12 months, your personal data is
automatically anonymized or deleted. If you request deletion at any time,
we will complete it — including from backups, in a way that prevents
recovery — within 90 days.

### Where your data is stored

Our systems are hosted on infrastructure located in Singapore. [Currently
treated as a cross-border transfer, pending confirmation — see Open
Questions above.]

### Who else sees your information

- **Xendit** (payment processing, only if you make a booking)
- **Supabase** (our database and hosting provider)

### Your rights

You can ask to see what we hold about you, correct it, delete it, or
withdraw your consent at any time. You can also file a complaint with
Thailand's Personal Data Protection Committee (PDPC).

### How you give consent

*[The consent-capture mechanism for Explorers doesn't have a product
surface to attach to yet — no Explorer-facing product currently exists,
per Build Tracker's "To Revisit Soon" list. This notice text is ready for
when that build starts; the actual checkbox/signature UI is separate,
future work.]*

---

## Still needed before either notice can go live

Carried over from Build Tracker's own list — none of this changes because
of the entity switch, except the first item now has a different kind of
answer:

1. **Legal entity name** — now a registered company name, once it exists,
   not a founder's personal name.
2. **Official LINE ID**, if/when LINE integration ships.
3. **Official contact email.**
4. **Native Thai / legal translation review** — not a machine translation
   of this draft. This is non-negotiable for a document Thai-speaking
   hosts and Explorers will be asked to sign.
