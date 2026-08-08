# Platform Capability Map

Status: Active

Version: 1.0

Owner: Core Platform Architecture

---

# Purpose

This document maps approved Version 1 and future platform capabilities.

It does not sequence implementation or define technical components.

---

# Source Decisions

| Source | Authority |
|---|---|
| `bootstrap/02_PRODUCT_CONTRACT.md` | Version 1 scope and exclusions |
| `bootstrap/08_DECISION_LOG.md` | JP-001, JP-005 |
| `bootstrap/10_PROJECT_GLOSSARY.md` | Official terminology |

---

# Version 1 Capabilities

| Capability Area | Approved Capabilities |
|---|---|
| Explorer Access | User registration |
| Journey Planning | Journey creation, multi-day planning, Journey editing |
| Discovery | Experience discovery |
| Availability | Experience availability |
| Booking Support | Booking |
| Geography | Maps, weather integration |
| Scout Operations | Internal Scout Workspace, Experience verification |
| Delivery | Responsive web application |

---

# Capability Priorities

1. Journey planning capabilities are primary.
2. Booking capabilities are supporting.
3. Scout capabilities protect information quality.
4. Geography capabilities improve place understanding.
5. Responsive delivery supports real usage across devices.

---

# Explicitly Excluded From Version 1

| Capability | Status |
|---|---|
| Host Portal | Future |
| Community messaging | Excluded |
| Reviews | Excluded |
| Rewards | Excluded |
| Gamification | Excluded |
| AI trip generation | Excluded |
| Public APIs | Excluded |
| Offline mode | Excluded |
| Marketplace expansion | Excluded |
| Administrator tooling | Future |

---

# Synchronization Rule

Repository folders, specifications, and implementation plans may reference these capability areas, but they must not add new capabilities without an approved decision.

---

# Revision History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0 | 2026-08-08 | Initial platform capability map synchronized from approved Bootstrap decisions | Codex |
