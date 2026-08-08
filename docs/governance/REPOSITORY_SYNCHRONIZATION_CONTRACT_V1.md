# Repository Synchronization Contract v1

Status: Active

Version: 1.0

Owner: Repository Governance

---

# Purpose

This contract governs Repository Synchronization after Architecture Freeze.

Synchronization turns approved architecture into organized repository structure, documentation, and implementation-ready source-of-truth files without redefining the architecture.

---

# Allowed Work

Synchronization may:

- create documents
- improve formatting
- improve readability
- add navigation
- add indexes
- add cross references
- organize folders
- prepare implementation-ready repository structure

---

# Prohibited Work

Synchronization must not:

- redesign architecture
- rename approved concepts
- invent architecture
- reinterpret governance
- merge approved concepts
- convert unresolved questions into implied decisions

---

# Source of Truth Order

When conflicts occur, use this order:

1. latest locked decision
2. Bootstrap Pack
3. approved product specifications
4. approved architecture documents
5. governance documents
6. technical documentation
7. conversation history

Conversation history is never the primary source of truth.

---

# Ambiguity Handling

If a synchronization task exposes missing, conflicting, or unclear architecture:

1. stop the affected work
2. record the issue in the task return
3. identify the blocked file or concept
4. request review before proceeding

---

# Definition of Done

A synchronization work package is complete when:

- approved scope is implemented
- no Bootstrap files are unintentionally modified
- no architecture has been redefined
- new documents are indexed when relevant
- Git status is reported
- open architectural questions are listed

---

# Revision History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0 | 2026-08-08 | Initial repository synchronization contract installed | Codex |
