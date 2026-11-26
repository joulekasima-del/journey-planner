# Spec 1 — Experience Data & Verification Standard

Purpose: Defines what every place on Journey Planner must contain, what a Host submits at registration, and the standard an Inspector checks before a place is verified and published.

Status: Draft

Version: 0.2

Owner: Founder

---

# Dependencies

None. This is the first V1 spec. Spec 2 (Journey & Data Model) and Spec 6 (Host Registration & Calendar) build on it.

---

# JP Decisions

- JP-007: an Itinerary Item references exactly one Experience; the Experience holds the reusable, verified information.
- JP-017: Bookings attach to an Experience's Availability Slots.
- JP-020: in-house consent capture.
- JP-028: English only at launch; prices are the Host's own price, with no foreigner markup.
- JP-030: everything bookable in advance is in V1; four availability models.
- JP-035: cancellation presets.
- JP-036: booking agent; Host bank details held by Journey Planner, encrypted, Administrator-only.
- JP-037: Host self-registration, hidden until verified, Verification Standard, Inspector visits, lapse.
- JP-038: Explorer star ratings; the Verified badge is pass or fail.
- JP-039: launch region is Chiang Mai province.

---

# Related Specifications

- Spec 2: Journey & Data Model (table design, Availability Slots, Bookings)
- Spec 4: Booking System (how availability models behave)
- Spec 6: Host Registration & Calendar (the registration form built from §4)
- Spec 7: Admin Panel (registration queue, verification outcomes, edit approval)
- Spec 8: Language Standard (how descriptions are written)

---

# Content

## 1. Terms

| Term | Meaning |
|---|---|
| **Host** | The person or business that owns or runs a place and registers it. One Host can have several Experiences. |
| **Place** | A physical location: address, map pin, area. Several Experiences can share one Place (for example, a homestay and its cooking class). |
| **Experience** | What an Explorer can add to a Journey: one stay, activity, restaurant or site. It is the unit that is verified, rated and booked. |
| **Category** | The kind of Experience (§3). It decides the fields (§5) and the checks (§7). |
| **Inspection** | One Inspector visit to one Place, checking every Experience registered there. |

Public places nobody owns (a waterfall, a viewpoint) have no Host. The Inspector creates them directly (JP-037).

## 2. Who provides each piece of data

Every field below has one source:

- **Host:** entered by the Host in the registration form.
- **Inspector:** recorded by the Inspector during or after the visit.
- **System:** set automatically.
- **Admin:** set by the Administrator.

**Visibility:**

- **Public** means shown to Explorers once verified.
- **Internal** means only the Inspector and Administrator see it.
- **Restricted** means only the Administrator sees it, and it is stored encrypted.

## 3. Categories in Version 1

| Category | Examples (Chiang Mai) | Availability model (JP-030) | Bookable? | Registered by |
|---|---|---|---|---|
| **Stay** | Homestay, guesthouse, small hotel, eco-lodge | Stay | Yes | Host |
| **Class & Workshop** | Cooking class, weaving, pottery, herbal medicine | Timed Slot | Yes | Host |
| **Guided Tour & Day Trip** | Guided walk, trek, cycling tour, day trip to Doi Inthanon | Timed Slot | Yes | Host |
| **Farm Visit** | Coffee farm, organic farm, orchard | Timed Slot or Informational Only | Host chooses | Host |
| **Restaurant & Café** | Northern Thai restaurant, café, farm-to-table | Optional Reservation or Informational Only | Host chooses | Host |
| **Cultural Site** | Temple, museum, heritage house | Informational Only | No | Host (if run by an owner) or Inspector |
| **Market** | Night market, morning market, craft market | Informational Only | No | Host (if run by an owner) or Inspector |
| **Natural Site** | Waterfall, viewpoint, hot spring, national park trail | Informational Only | No | Inspector |
| **Garden & Park** | Botanical garden, flower garden | Informational Only | No | Host or Inspector |
| **Animal Experience** | Elephant sanctuary, animal rescue centre | Timed Slot or Informational Only | Host chooses | Host |

Animal experiences are allowed only under the strict welfare criteria in §7.2. Farm animals seen as part of a Farm Visit are covered by the Farm Visit category, but the same welfare criteria apply to them.

These replace the scouting form's categories: Homestay becomes Stay, Workshop becomes Class & Workshop, Guided Walk becomes Guided Tour & Day Trip, Waterfall / Natural Site becomes Natural Site, Temple / Cultural Site becomes Cultural Site, and Garden becomes Garden & Park.

## 4. Fields every Experience has

### 4.1 Identity and description

| Field | Source | Required to publish | Visibility | Notes |
|---|---|---|---|---|
| Name (English) | Host | Yes | Public | The name Explorers see. |
| Name (Thai) | Host | Yes | Public | Shown alongside the English name (JP-028). |
| Category | Host | Yes | Public | From §3. The Inspector can correct it. |
| Short description | Host | Yes | Public | One or two sentences, English. Edited for accuracy and the Language Standard before publishing. |
| Full description | Host | Yes | Public | What the Explorer does, sees and gets. English. |
| Photos | Host, Inspector | Yes, at least 3 | Public | They must show the real place. The Inspector checks they match. Stock or AI images are not allowed. If the Host's photos are missing, too few or poor, the Inspector takes them during the visit. |
| Tags | Host, Inspector | No | Public | From the tag list (for example Family-friendly, Hands-on, Quiet, Off-the-beaten-path). |
| Related to | Inspector | No | Public | Links to another Experience at the same or a nearby place. |

### 4.2 Location and access

| Field | Source | Required | Visibility | Notes |
|---|---|---|---|---|
| Address | Host | Yes | Public | Including village (moo), subdistrict, district. |
| Map pin (latitude, longitude) | Host, Inspector | Yes | Public | The Inspector confirms the pin on site. |
| Area | System | Yes | Public | Derived from the pin, for example Old City, Nimman, Mae Rim, Doi Inthanon. Used for grouping days. |
| How to get there | Host | Yes | Public | Transport options, parking, the last stretch (for example "steep dirt road, not for scooters in rain"). |
| Landscape | Inspector | No | Public | Setting, climate feel, water and vegetation, as in the scouting form. |

### 4.3 Practical information

| Field | Source | Required | Visibility | Notes |
|---|---|---|---|---|
| Opening days and hours | Host | Yes | Public | Including seasonal closures. |
| Typical duration | Host | Yes | Public | Under 1 hour, 1–3 hours, Half day, Full day, Overnight, Multi-day. |
| Best time to visit | Host, Inspector | No | Public | Time of day and season (cool, hot, rainy). |
| Seasonal warnings | Inspector | No | Public | For example "closed in heavy rain" or "haze in Feb–Apr" (JP-023). |
| Languages spoken | Host | Yes | Public | Whether English is spoken matters for the launch audience (JP-028). |
| Accessibility | Host, Inspector | Yes | Public | Step-free access (yes, no or partly) and physical effort (easy, moderate, challenging). |
| Suitable for children | Host | Yes | Public | Yes, no or with a minimum age. |
| Dress code and etiquette | Host, Inspector | No | Public | Required for Cultural Site. |
| On-site donations | Host, Inspector | No | Public | A practical note, for example "donations welcome at the temple box". Journey Planner never collects or handles donations. |

### 4.4 Price

| Field | Source | Required | Visibility | Notes |
|---|---|---|---|---|
| Price | Host | Yes, for bookable Experiences and any place with an entry fee | Public | In THB, the full price the Explorer pays, including VAT and service charge. It's the Host's own price, the same for every Explorer (JP-028). |
| What's included | Host | Yes, for bookable | Public | For example ingredients, transport, guide, meals. |
| What's not included | Host | No | Public | |
| Government-set fees | Inspector | Where they apply | Public | For example national park entry, which differs for Thais and foreigners by law. Shown in full and labelled as a government fee, so it's never hidden. |
| Price range | Host | Yes, for Restaurant & Café | Public | ฿ / ฿฿ / ฿฿฿ per person. |

### 4.5 Booking (bookable Experiences only)

| Field | Source | Required | Visibility | Notes |
|---|---|---|---|---|
| Availability model | Host | Yes | Internal | Stay, Timed Slot or Optional Reservation (JP-030). |
| Cancellation preset | Host | Yes | Public | Flexible, Moderate or Strict (JP-035). |
| Confirmation type | Host | Yes | Public | Instant (the slot is confirmed straight away) or On request (the Host confirms within a set time). The time window is decided in Spec 4. |
| Category booking fields | Host | Yes | Public | See §5. |

### 4.6 Host and legal (owner-run places only)

| Field | Source | Required | Visibility | Notes |
|---|---|---|---|---|
| Host name | Host | Yes | Public | Person or business name, as Explorers see it. |
| Host type | Host | Yes | Internal | Individual or registered business. |
| Contact person, phone, email, LINE ID | Host | Phone and one of email or LINE | Internal, then shown to the Explorer after booking | Hidden from Explorers before booking; questions before booking go through the platform (how, in Spec 4). Once a booking is confirmed, the Explorer sees the contact person, phone and LINE ID for that booking. Places that need no booking never show Host contact details. |
| Identity document | Host | Yes | Restricted | Thai ID card or passport for individuals; company certificate for businesses. The Inspector confirms it in person (JP-037). |
| Licences | Host | Where the law requires it for the category | Internal | See §7.2. The exact licence per category is confirmed by the legal research. |
| Payout details | Host | Yes, for bookable | Restricted | Bank account name and number, or PromptPay ID. Encrypted, Administrator-only, shared only with Xendit (JP-036). |
| Consent records | System | Yes | Internal | PDPA consent captured at registration (JP-020). |

### 4.7 System and status

| Field | Source | Notes |
|---|---|---|
| Status | System, Admin | See §8. |
| Verified badge | System | Shown when the status is Verified. |
| Last inspected | System | Date of the latest passed inspection. |
| Next inspection due | System | From the re-inspection interval (§7.4). |
| Star rating and review count | System | From Explorer reviews (JP-038). New places show "Verified · No reviews yet". |
| Created, updated | System | |

## 5. Fields by category

These come from the scouting form and add what booking needs.

**Stay**
- Room types, each with: name, number of rooms, maximum guests, bed setup, private or shared bathroom, air conditioning or fan, and price per night.
- Check-in and check-out times.
- Meals available (breakfast, lunch, dinner, self-catering).
- Style (traditional wood house, modern, farmstead, riverside).
- House rules (quiet hours, shoes off, smoking).
- Wi-Fi.

**Class & Workshop**
- Skill taught (cooking, weaving, pottery, farming, herbal medicine, music, other).
- Level (beginners, intermediate, advanced).
- Format (group or private).
- Start times.
- Minimum and maximum group size.
- Price per person or per group.
- Meeting point.
- Pickup offered.
- What to bring.
- Dietary options (cooking classes).

**Guided Tour & Day Trip**
- Route summary and stops.
- Difficulty (easy, moderate, challenging).
- Terrain.
- What you'll see.
- Start times.
- Minimum and maximum group size.
- Price per person.
- Meeting point and pickup.
- Guide's languages.
- Vehicle used, if any.
- What to bring.

**Farm Visit**
- Products (rice, coffee, fruit, vegetables, livestock, fish).
- Visitor activities (harvest, feeding animals, farm tour, tasting).
- Season for each activity.

**Restaurant & Café**
- Cuisine style.
- Dietary options (vegetarian, vegan, halal, gluten-free possible).
- Setting.
- Reservations accepted (yes or no).
- Seating capacity, for reservations.

**Cultural Site**
- Significance (historic, active worship site, festival site, notable architecture).
- Etiquette (modest dress, remove shoes, quiet, photography limits).
- Entry fee.

**Market**
- Days and hours.
- What's sold.
- Food stalls (yes or no).

**Natural Site**
- Access (easy walk, moderate hike, swimming possible, viewpoint only).
- Best season.
- Facilities (toilets, parking, food).
- Entry fee, including any government-set fee.
- Seasonal closure.

**Garden & Park**
- Type (flower, botanical, organic farm, landscaped park).
- Activities (walking, photography, picnic, guided tour).
- Entry fee.

**Animal Experience**
- Animals kept (species and number).
- Where the animals came from (rescued, retired from work, born on site).
- What visitors do (observe, walk alongside, prepare food).
- Contact rules (what visitors may and may not do).
- Start times, group size and price per person, if bookable.
- Vet care arrangement.

## 6. Data quality rules

- **English is required** for every public text field. Thai is required for the name only (JP-028).
- **Descriptions must match reality.** The Inspector compares the description and photos with what they see. They correct factual errors, or ask the Host to fix them before verifying.
- **Copy follows the Language Standard** (Spec 8). Until Spec 8 exists: plain English, address the Explorer as "you", and no superlatives the Inspector can't confirm ("best", "only", "authentic").
- **Prices are complete.** No "from" prices that hide required extras, and no separate foreigner price.
- **One Experience is one thing an Explorer can do.** A guesthouse that also runs a cooking class registers two Experiences at one Place.

## 7. Verification Standard

An Experience is **verified** only when it meets every universal criterion (§7.1) and every criterion for its category (§7.2). The Inspector records each criterion as met or not met, with a note where it isn't met.

### 7.1 Universal criteria (every category)

| # | Criterion | How the Inspector checks |
|---|---|---|
| U1 | **It exists and matches.** The place is at the map pin, and the description, photos and listed activities match reality. | Visit; compare the listing with what they see; take photos. |
| U2 | **The Host is who they say.** For owner-run places, the person registering owns or runs it. | ID or company certificate seen in person; matches the registration. |
| U3 | **It may legally operate.** It holds any licence or registration the law requires for its category. | Document seen. The list per category is confirmed by the legal research (§7.2). |
| U4 | **Prices are honest.** The listed price is the full price, the same for everyone, and matches what's charged on site. | Compare with on-site menus and boards; ask. |
| U5 | **It is reasonably safe** for what it offers. | Visual check for obvious hazards; first-aid kit where people do physical activity; an emergency contact. |
| U6 | **Explorers can actually use it.** Hours, access and practical information are correct; English or another listed language is genuinely available. | Visit; brief conversation in the listed language. |
| U7 | **It treats people and places with respect.** No exploitation of workers, children or the community; no damage to the place. | Observation; a refusal if there is clear evidence otherwise. |

### 7.2 Category criteria

| Category | Additional criteria |
|---|---|
| **Stay** | Rooms match the listed types and photos. They're clean and have lockable doors. Bedding is clean. There's a clear route out in an emergency. It holds hotel or homestay registration where the law requires it (**to confirm**: the accommodation rules and the pending Accommodation Act). |
| **Class & Workshop** | The work area is safe for beginners. For food: a clean preparation area, safe drinking water, and ingredients stored properly. |
| **Guided Tour & Day Trip** | The guide holds a guide licence and the operator a tour-business licence where the law requires it (**to confirm**). Any vehicle is roadworthy and insured. There's a plan for bad weather and emergencies. |
| **Farm Visit** | Visitor areas are safe. Chemicals and machinery are away from visitors. |
| **Restaurant & Café** | A clean kitchen as far as it can be seen, safe drinking water, and dietary claims checked by asking. |
| **Cultural Site** | The etiquette information is correct. Fees match the official ones. |
| **Market** | Days and hours are confirmed. |
| **Natural Site** | The access route is passable as described. Hazards (slippery rocks, strong currents) are noted for Explorers. Seasonal closures are known. |
| **Garden & Park** | Hours and fees are confirmed. |
| **Animal Experience** (and animals on a Farm Visit) | No riding. No performances or shows. No chaining or tethering, except briefly for vet care. No bathing with, or close handling of, wild animals. No breeding for visitor display. Animals have enough space, shade, clean water and food, and access to vet care. Visitor contact is limited to what the listed contact rules allow, and the Inspector sees those rules followed. Any doubt about an animal's welfare means Not verified. |

### 7.3 Outcome

- **Verified:** every criterion is met. The Experience is published with the Verified badge.
- **Not verified:** at least one criterion is not met. The Host is told which ones and why, in writing. They can fix them and ask for a new inspection. The Experience stays hidden.
- There's no partial or conditional pass (JP-037).

Every inspection keeps a record: date, Inspector, the result for each criterion, notes, and photos. The record is internal and kept for audit.

### 7.4 Re-inspection and lapse

- **Interval:** every Verified Experience is re-inspected within **12 months** of its last inspection.
- **Triggers for an early re-inspection:**
  - A serious complaint about safety, honesty or something not as described.
  - A Host edit that changes what the Explorer gets (new rooms, a new activity, a new location).
  - A pattern of low ratings. The threshold is decided in Spec 7.
- **Lapse:** if a re-inspection is overdue by more than 30 days, or a re-inspection fails, the Experience loses its badge and is hidden. Future bookings already made are honoured unless there's a safety issue, in which case the Administrator follows the cancellation rules (JP-035).
- **Suspension:** for a serious safety complaint, the Administrator can hide an Experience at once, before re-inspection.

## 8. Status lifecycle

```
Registered ──► Inspection scheduled ──► Verified (published)
                                    └─► Not verified ──► (Host fixes) ──► Inspection scheduled

Verified ──► Edit pending approval ──► Verified        (JP-037: edits need Admin approval)
Verified ──► Re-inspection due ──► Verified | Lapsed
Verified ──► Suspended ──► Re-inspection ──► Verified | Removed
```

| Status | Visible to Explorers | Can be in a Journey | Bookable |
|---|---|---|---|
| Registered, Inspection scheduled, Not verified | No | No | No |
| Verified | Yes | Yes | Yes, if bookable |
| Edit pending approval | Yes (the previous version) | Yes | Yes |
| Re-inspection due (within the grace period) | Yes | Yes | Yes |
| Lapsed, Suspended, Removed | No | Existing items stay, marked "No longer verified" | No new bookings |

Inspector-added public places start at Inspection scheduled, or go straight to Verified when the Inspector creates them on site.

## 9. Moving from the scouting prototype

The scouting form (`prototypes/`) already records Place, Host, Experience and category attributes in Supabase.

- **Existing records:** each scouted record becomes an Experience at status Registered. Its "verified" flag doesn't carry over, because it wasn't checked against this standard. Public places become Inspector-added. Places with a Host need that Host to register and accept the host agreement before they can be published.
- **Field changes:**
  - Categories are renamed as in §3.
  - New fields: price, the booking fields, opening hours, languages spoken and accessibility.
  - The Host gains identity, licence and payout fields.
- **Donation fields:** these came from the earlier community-tourism focus. They become the optional, public "On-site donations" note (§4.3).
- **Schema:** the full table design belongs to Spec 2. This spec only says what must be stored.

## 10. Open questions

Answered by the founder on 2026-11-26:

- **O1 Animal experiences:** allowed, under strict welfare criteria (§3, §5, §7.2).
- **O2 Re-inspection:** every 12 months, plus early triggers (§7.4).
- **O3 Explorer–Host contact:** shown only after a booking is confirmed (§4.6).
- **O5 Donations:** kept as a public practical note; the platform never handles donations (§4.3, §9).
- **O6 Photos:** at least 3; the Inspector takes them if the Host can't (§4.1).

Still open:

| # | Question | Needed for |
|---|---|---|
| O4 | **Licences per category:** which licences or registrations are legally required for stays, tours and restaurants. Comes from the legal research. | §7.1 U3, §7.2 |

---

# Revision History

| Version | Date | Change | Author |
|---|---|---|---|
| 0.1 | 2026-11-25 | First draft for founder review | Claude Code, for the founder |
| 0.2 | 2026-11-26 | Founder answered O1, O2, O3, O5, O6: Animal Experience category with welfare criteria; 12-month re-inspection confirmed; Host contact shown after booking; donation note public; Inspector takes photos when needed. O4 waits on legal research. | Claude Code, for the founder |

---

# Amendment Rule

Changes to a Locked specification require an explicit new locked decision in `docs/DECISION_LOG.md`, recorded as superseding the prior version. Do not edit Locked content directly — supersede it.
