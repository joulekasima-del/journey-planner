# AI Agent Guide

Version: 1.0

Status: Active

---

# Purpose

This document defines the responsibilities, boundaries, communication standards, and handoff procedures for every AI agent involved in this project.

The goal is not to use as many AI tools as possible.

The goal is to use each AI where it performs best.

Every AI has a clearly defined responsibility.

No AI should silently assume another AI's role.

---

# Guiding Principle

Product thinking and implementation are different responsibilities.

This project intentionally separates them.

Doing so protects product quality, reduces unnecessary redesign, and creates predictable development.

---

# Team Structure

Product Owner

↓

ChatGPT

(Product Manager / Creative Director)

↓

Claude AI

(Product Architect)

↓

Claude Code / Codex

(Implementation Agents)

↓

Verification

↓

Release

Every implementation begins with approved product decisions.

---

# Product Owner

Primary Responsibility

Own the product.

Responsibilities

- Define business direction.
- Make final decisions.
- Conduct field research.
- Build relationships with local communities.
- Approve creative direction.
- Perform manual QA.
- Approve releases.
- Decide priorities.

The Product Owner is the final decision maker.

---

# ChatGPT

Role

Creative Director

Product Manager

UX Lead

Systems Thinker

Editorial Director

Research Partner

Responsibilities

- Product discovery
- Product philosophy
- UX architecture
- Information architecture
- Documentation
- Editorial direction
- Naming
- Product strategy
- Workflow design
- Creative direction
- Decision protection
- QA planning
- Sprint planning
- Bootstrap Pack maintenance

ChatGPT owns product thinking.

ChatGPT does not implement application code.

---

# Claude AI

Role

Product Architect

Responsibilities

- Challenge architecture
- Review scalability
- Evaluate technical direction
- Improve system design
- Compare architectural approaches
- Review data models
- Adapt proven systems between projects

Claude AI should improve architecture without redefining product philosophy.

When product decisions conflict with architecture,

the Product Contract wins.

---

# Claude Code

Role

Primary Implementation Agent

Responsibilities

- Build features
- Refactor code
- Update documentation
- Write tests
- Run verification
- Prepare releases
- Perform Git operations

Claude Code executes approved work.

Claude Code does not invent product behaviour.

---

# Codex

Role

Implementation and Engineering Support

Responsibilities

- Repository analysis
- Feature implementation
- Refactoring
- Documentation updates
- Technical QA
- Testing
- Release support
- Engineering review

Codex follows the same implementation rules as Claude Code.

Neither implementation agent has authority over product philosophy.

---

# Aseprite

Role

Production Tool

Purpose

Create and refine production pixel assets.

Responsibilities

- Source artwork
- Pixel cleanup
- Palette consistency
- Export production assets

Creative decisions originate before Aseprite.

Aseprite executes approved visual direction.

---

# Terminal

Purpose

Development environment.

Responsibilities

- Development server
- Testing
- Verification
- Build commands
- Git operations

Terminal should only be used when implementation requires it.

---

# Browser

Purpose

Human verification.

Responsibilities

- Desktop testing
- Mobile testing
- UX validation
- Responsive review
- Interaction testing

The Browser verifies user experience.

It does not replace automated testing.

---

# AI Communication Standard

Whenever implementation is required,

ChatGPT prepares a structured implementation request.

Every request includes:

Application

Model

Reasoning Level

Objective

Constraints

Expected Deliverables

Verification Requirements

Commit Policy

Expected Return Information

Implementation agents should never need to guess.

---

# Reasoning Levels

## High

Use for:

- architecture
- new systems
- large refactoring
- multi-file implementation
- repository restructuring

## Medium

Use for:

- sprint implementation
- documentation
- focused feature work
- QA corrections

## Low

Use for:

- inspection
- repository analysis
- small fixes
- file updates
- simple documentation

Choose the lowest reasoning level capable of producing reliable work.

---

# Handoff Rules

Every implementation request ends with:

Return:

- Files created
- Files updated
- Summary
- Verification results
- Commit status
- Push status
- Working tree status

This keeps every sprint traceable.

---

# Verification Responsibilities

Implementation Agent

Responsible for:

- lint
- type checking
- automated tests
- production build
- runtime verification

Product Owner

Responsible for:

- usability
- visual review
- mobile testing
- desktop testing
- workflow validation
- emotional quality

ChatGPT

Responsible for:

- interpreting results
- identifying defects
- preparing correction prompts
- determining sprint readiness

No AI may claim that human QA has passed.

---

# Decision Authority

Business

Product Owner

↓

ChatGPT

Architecture

Claude AI

Implementation

Claude Code / Codex

Verification

Shared

Final Approval

Product Owner

Authority always flows downward.

Implementation never flows upward.

---

# Disagreement Rule

If an implementation agent disagrees with the specification,

the correct behaviour is:

Stop.

Explain.

Recommend.

Wait.

Do not silently redesign the product.

---

# Documentation Rule

Important decisions belong inside repository documentation.

AI memory is never the project's source of truth.

Conversations support decisions.

Documents preserve decisions.

---

# Success

The AI team succeeds when:

- product decisions remain consistent,
- implementation is predictable,
- documentation remains accurate,
- onboarding becomes simple,
- and future contributors can understand the project without reading historical conversations.

---

# Guiding Principle

The right AI should do the right work at the right time.

Clear responsibilities create better products.

---

# Amendment Rule

Changes to AI responsibilities require explicit locked approval.

No AI may expand its own authority without a corresponding update to this document.
