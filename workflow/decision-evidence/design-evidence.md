# Design Evidence Template

This file records which design references an agent may use as evidence, what each reference is allowed to prove, and what remains unresolved. It is a reusable structure, not a project-specific whitelist.

## Purpose

- Separate approved evidence from exploratory, missing, or rejected evidence.
- Define the scope of each reference so agents do not infer unrelated rules.
- Preserve the rationale behind evidence decisions.
- Support reproducible implementation and acceptance checks across projects.

## Evidence Categories

Use these categories when registering evidence:

- `approved reference`: authoritative for the stated scope.
- `focused supporting reference`: authoritative only for a narrow property, component, state, or behavior.
- `exploratory reference`: useful for discussion but not authoritative.
- `missing evidence`: required evidence that has not been found or captured.
- `rejected reference`: explicitly not valid for rule-making or implementation.

## Evidence Register Schema

Each evidence entry should follow this structure:

```markdown
## Evidence Entry: <short descriptive name>

- Category:
- Source type:
- Source location:
- Approved scope:
- Explicit exclusions:
- Evidence captured:
- Related workflow files:
- Decision or rationale:
- Open gaps:
- Last reviewed:
```

Field guidance:

- `Category`: one of the evidence categories above.
- `Source type`: for example Figma, screenshot, browser capture, written requirement, inspect output, prototype, research note, or user correction.
- `Source location`: enough information for another agent to find the source without embedding project-specific secrets.
- `Approved scope`: the exact rule, component, state, behavior, or acceptance claim this evidence may support.
- `Explicit exclusions`: what this evidence must not be used to infer.
- `Evidence captured`: structured specs, screenshots, annotations, measurements, variants, states, or notes already collected.
- `Related workflow files`: reusable `markdown` or `json` files that depend on this evidence.
- `Decision or rationale`: why this source is approved, limited, exploratory, or rejected.
- `Open gaps`: missing specs, unverified states, unresolved conflicts, or needed review.
- `Last reviewed`: date or review label when available.

## Usage Rules

- Check this file before using a visual or design source as authority.
- Use evidence only within its approved scope.
- Treat unlisted visual sources as exploratory until the user or project record approves them.
- Do not infer typography, color, spacing, layout, interaction, component behavior, or system rules from a reference whose scope does not include those properties.
- When evidence conflicts, record the conflict and route back to the owning workflow file or user decision instead of silently choosing one.
- When a new reference is approved, add an evidence entry with explicit scope and exclusions before using it as a reusable rule source.

## Collection Checklist

Before implementation or acceptance, collect only the evidence needed for the task:

- Structured specs when available.
- Visual reference screenshots or rendered captures.
- State or variant names when relevant.
- Measurements for spacing, dimensions, typography, radius, shadow, motion, or layout only when those properties are in scope.
- Asset references and usage boundaries when assets are part of the claim.
- User corrections or decisions that explain why a source is authoritative.
- Known exclusions so future agents do not overgeneralize.

## Open Gaps

Use this section for unresolved evidence needs:

```markdown
- Gap:
- Affected workflow:
- Why it matters:
- Needed evidence:
- Current fallback:
- Owner or next review:
```
