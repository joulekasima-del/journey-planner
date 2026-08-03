# Journey Planner Engineering Contract

Version: 1.0

Status: Active

---

# Purpose

This document defines how engineering work is performed within this project.

Its purpose is to create consistent, predictable, maintainable software while protecting product decisions, creative standards, and long-term quality.

Engineering exists to implement the product—not redefine it.

---

# Engineering Philosophy

Build software that is:

- understandable
- maintainable
- testable
- scalable
- well documented
- calm to work on

Prefer simplicity over cleverness.

The easiest code to maintain is usually the best code.

---

# Separation of Responsibilities

## Product

Responsible for:

- philosophy
- business rules
- UX
- workflows
- terminology
- priorities

Product decisions originate from the Product Contract.

## Engineering

Responsible for:

- implementation
- architecture execution
- performance
- reliability
- testing
- maintainability

Engineering must never silently redefine product behaviour.

---

# Product Authority

The following documents override engineering preference.

1. Product Contract
2. Project Philosophy
3. Creative Framework
4. Bootstrap Pack
5. Approved Product Specifications

If implementation reveals a problem,

pause,

document it,

and return to Product Discovery.

Do not invent a new product decision.

---

# Repository Philosophy

The repository should always remain deployable.

Every commit should improve the project.

Avoid temporary hacks that become permanent.

---

# Development Workflow

Every implementation follows:

Discover

↓

Lock

↓

Produce

↓

Implement

↓

Verify

↓

Release

Engineering begins only after implementation-ready documentation exists.

---

# Sprint Rules

Every sprint must define:

Objective

Included work

Explicit exclusions

Definition of Done

Verification requirements

Expected deliverables

No sprint may quietly expand its own scope.

New ideas are added to the Backlog unless the sprint is explicitly reopened.

---

# Branch Philosophy

Default branch:

main

Future expansion may introduce feature branches.

Version 1 intentionally keeps Git workflow simple.

---

# Commit Philosophy

One logical change per commit.

Commit messages should explain purpose rather than implementation details.

Examples:

docs: establish Bootstrap Pack foundation

feat: implement journey timeline

fix: preserve itinerary order

refactor: simplify availability service

Avoid vague commit messages.

---

# Documentation Rule

Documentation is part of the product.

Every significant engineering decision should leave the project easier to understand.

Documentation must evolve together with implementation.

---

# Source of Truth

Code should never become the only documentation.

Important knowledge belongs in:

- Bootstrap Pack
- Specifications
- Architecture documents
- Build Tracker
- Release Notes

Never rely on implementation details alone.

---

# Existing Code Rule

Before changing code:

Understand it.

Read surrounding files.

Identify dependencies.

Preserve working behaviour unless the specification requires change.

Avoid rewriting functioning systems without clear justification.

---

# Architecture Rule

Prefer extending existing architecture over replacing it.

Reuse proven components whenever practical.

Refactoring should improve clarity without changing approved behaviour.

---

# Dependencies

Every new dependency must have a clear reason.

Ask:

Does this dependency significantly reduce complexity?

If not,

prefer the existing platform.

Keep the project lightweight.

---

# Testing

Every implementation must verify:

Lint

Type checking

Unit tests

Production build

Runtime startup (when applicable)

New features should include appropriate automated tests whenever practical.

---

# Human QA

Passing automated tests does not complete a sprint.

Human verification remains mandatory.

Human QA includes:

Desktop

Phone

Responsive layout

Interaction flow

Real-world usability

Visual consistency

Emotional fit

Only after both automated verification and human QA pass may a sprint be considered complete.

---

# Build Tracker

Every completed sprint updates:

BUILD_TRACKER.md

The Build Tracker records implementation progress.

It does not replace specifications.

---

# Release Notes

Every significant milestone updates:

Release documentation

Release notes explain:

- what changed
- what was intentionally excluded
- migration notes (if any)
- verification status

---

# Git Rule

Before every release:

Verify:

- lint
- type check
- tests
- build

Confirm:

Working tree is clean.

Only then:

Commit.

Push.

Record release.

---

# Rollback Philosophy

Every release should be recoverable.

Git history should allow safe rollback to any stable milestone.

Avoid combining unrelated work into one commit.

---

# AI Engineering Rule

Implementation agents execute approved work.

They do not redesign products.

When implementation uncertainty exists:

Stop.

Explain.

Request clarification.

Never guess.

---

# Implementation Prompt Standard

Every implementation prompt should specify:

Application

Model

Reasoning Level

Objective

Constraints

Files expected

Verification requirements

Commit policy

Expected output

This keeps implementation deterministic.

---

# Performance

Optimise only when necessary.

Correctness comes first.

Readability comes second.

Performance comes third.

Premature optimisation should be avoided.

---

# Code Style

Prefer:

- descriptive names
- small functions
- modular structure
- predictable behaviour
- explicit intent

Future maintainers should understand the code without requiring historical conversations.

---

# Engineering Success

Engineering succeeds when:

- implementation matches the specification,
- future contributors understand the system,
- changes remain easy,
- quality stays consistent,
- and the product continues evolving without unnecessary rewrites.

---

# Guiding Principle

Build software that future contributors will thank you for.

---

# Amendment Rule

Changes to this Engineering Contract require explicit locked approval.

Engineering convenience must never override product philosophy, creative standards, or long-term maintainability.
