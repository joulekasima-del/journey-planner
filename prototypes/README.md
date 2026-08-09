# Prototypes

Working, usable tools built ahead of real implementation — not the final application, and not documentation.

## scouting-form.html

A functional field data-collection tool for the Scout role, built to real Domain Model fields (JP-007, Experience structure) rather than a mockup. Used to actually collect Experience data now, before Phase II (Scout Workspace) implementation exists.

Built incrementally across many rounds of field design. Grew into a single file with inline styles and inline JS as a result — flagged for a structural cleanup pass, not a field/behavior change. Some UI patterns from `progression-vertical-ops` (progressive step reveal, single-select button grid, async status states, count badge, `escapeHtml` helper) are worth carrying into that cleanup — real, working code from that project, not its unbuilt feature specs.

When Phase II implementation begins for real, this prototype's field shapes carry over directly — nothing here gets thrown away, it gets replaced by the real application.
