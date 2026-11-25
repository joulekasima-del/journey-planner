# Change Governance

Status: Active

Version: 1.0

Owner: Repository Governance

---

# Purpose

This document defines how changes are proposed, made, verified, and recorded in Journey Planner.

---

# Change Types

| Type | Description |
|---|---|
| Governance | Changes repository operating rules |
| Specification | Changes product or architecture documentation |
| Implementation | Changes application or system behavior |
| Verification | Changes testing, QA, or release evidence |
| Maintenance | Improves clarity or organization without changing meaning |

---

# Change Rules

Every change must:

- have a clear objective
- identify included work
- identify exclusions when scope risk exists
- preserve higher-priority rules
- update relevant documentation
- leave the repository in a clean, understandable state

---

# Architecture Change Rule

Architecture changes are not normal repository synchronization work.

If architecture must change, the work must return to the appropriate discovery and locking process before repository changes continue.

---

# Verification Rule

Verification should match the change type.

Documentation-only changes require:

- file existence checks
- link/path checks when relevant
- Git status review

Implementation changes require the verification defined by the Engineering Contract and the relevant work package.

---

# Commit Rule

Use one coherent commit per logical change.

Recommended commit prefixes:

- `docs:`
- `feat:`
- `fix:`
- `refactor:`
- `test:`
- `chore:`
- `release:`

---

# Revision History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0 | 2026-08-08 | Initial change governance installed | Codex |
