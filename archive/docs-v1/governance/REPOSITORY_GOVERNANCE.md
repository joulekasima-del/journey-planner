# Repository Governance

Status: Active

Version: 1.0

Owner: Repository Governance

---

# Purpose

This document defines how the Journey Planner repository is governed as the product source of truth.

---

# Repository Principle

The repository is the product.

Repository structure, documentation, commits, and implementation must preserve the approved architecture.

---

# Documentation Governance

Documentation must:

- reduce uncertainty
- preserve approved terminology
- identify status clearly
- link to source-of-truth documents
- separate locked decisions from open questions

Documents must not present planned or speculative material as locked.

---

# Folder Governance

Top-level repository areas:

| Path | Purpose |
|---|---|
| `bootstrap/` | Permanent Bootstrap Pack foundation |
| `docs/` | Product, architecture, governance, research, testing, build, and release documentation |
| `docs/governance/` | Permanent operating rules for repository execution |

New folders should be created only when they clarify approved work.

---

# Index Governance

Source-of-truth documents under `docs/` should be indexed in `docs/00_INDEX.md` or a relevant subordinate index.

Unindexed documents may exist during drafting, but they should not be treated as authoritative until indexed and assigned status.

---

# Integrity Rules

Repository work must:

- keep commits coherent
- avoid unrelated changes
- preserve Bootstrap content unless the work package explicitly authorizes changes
- report Git status at the end of each work package

---

# Revision History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0 | 2026-08-08 | Initial repository governance installed | Codex |
