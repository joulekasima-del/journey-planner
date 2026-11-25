# How We Work

Status: Active · Updated 2026-11-25

How decisions get made and how work gets built. Condensed from the Working Protocol v2 (JP-002) and the Engineering Contract; the originals are in `archive/bootstrap-v1/`. Every AI session also follows [AI_WORKING_DISCIPLINE.md](AI_WORKING_DISCIPLINE.md).

Journey Planner is built by one founder with AI tools. **Prefer minimal, precise and sustainable over feature-rich. When in doubt, cut scope before adding process.**

---

## 1. The workflow (JP-002)

**Discover → Lock → Produce → Implement → Verify → Release**

| Step | What happens | Output |
|---|---|---|
| **Discover** | Understand the problem; surface risks, contradictions and missing information; one foundational question at a time | A recommendation and the open question |
| **Lock** | The founder says "Lock it" or "Confirmed" | A new entry in `docs/DECISION_LOG.md` |
| **Produce** | Turn locked decisions into buildable detail | A spec in `docs/specs/` |
| **Implement** | Build exactly what the spec says | Code and commits |
| **Verify** | Automated checks, then the founder's own QA on phone and desktop | Evidence of what was actually tested |
| **Release** | Commit, push, update the Build Tracker | A clean, recoverable state |

Don't skip a step while a foundational decision is still open. Don't reopen a locked decision unless the founder explicitly reopens it.

## 2. Decisions

- Only entries in the Decision Log with a JP number are locked. Numbers are never reused.
- Never edit a locked entry. Write a new decision, then mark the old one "Superseded By".
- When a new decision makes other documents wrong, update those documents in the same piece of work.
- Ideas that don't belong to the current work go to `docs/BACKLOG.md`. They never quietly enter scope.

## 3. Specs

- One spec per feature area, in `docs/specs/`, based on [TEMPLATE.md](specs/TEMPLATE.md).
- A spec lists the JP decisions it implements and marks anything not yet decided as **Open**.
- Build only from a spec. If building reveals a gap, stop, write it down, and take it back to Discover. Never guess.

## 4. Building

- **Every piece of work states:**
  - objective
  - what's included
  - what's excluded
  - definition of done
  - how it will be verified
- **Simplicity.** Prefer simple, readable code; extend what exists rather than rewrite it; every new dependency needs a clear reason.
- **Order of priorities:** correctness first, readability second, performance third.
- **Before calling something done:** lint, type check, tests and build pass where they apply. Then the founder checks it on phone and desktop. Passing tests alone is not done.
- **Commits:** one logical change per commit, with a message that explains purpose: `docs: …`, `feat: …`, `fix: …`, `refactor: …`.
- **Founder confirmation:** nothing is committed or pushed without the founder confirming in the conversation.
- **Branches:** `main` is the default branch and should always be deployable.

## 5. Who does what

- **Founder:** the final decision-maker on product, business, legal and money. Owns every real-world action: accounts, credentials, payment setup, legal sign-off.
- **AI tools** (Claude, Claude Code, Claude Design, Cowork): research, draft, build and verify. They never silently redesign a locked decision. They follow [AI_WORKING_DISCIPLINE.md](AI_WORKING_DISCIPLINE.md).

## 6. Documentation rules

- If a document doesn't reduce future uncertainty, it shouldn't exist.
- Don't create a new process document unless a real problem needs it.
- When a document is retired, move it to `archive/` with a line in `archive/README.md`. Never silently delete it.
