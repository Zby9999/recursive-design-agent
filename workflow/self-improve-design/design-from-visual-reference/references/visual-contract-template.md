# Visual Contract Template

Use this template to extract a compact visual contract from a single visual reference during Phase 2 of `design-from-visual-reference`.

The contract is the single source of truth for the rest of the workflow. It is organized coarse-to-fine so the same template works for every fidelity band: the fidelity band only changes how much each layer can lock from the reference versus how much is left for the designer to supply.

## How To Use This Template

- Fill one contract per reference. Do not merge multiple references into one contract; this Skill is single-reference by design.
- Fill every layer even when the reference cannot lock a field. When the reference cannot supply a field, write `not locked by reference` and record the fallback in `designer input needed`.
- Do not invent values the reference does not show. Use the existing design system or mark an `open gap` instead.
- Reference registered Evidence IDs only in `evidenceIds`. Put source locators, screenshot paths, Figma node IDs, URLs, and dates in `workflow/decision-evidence/design-evidence.md` or the relevant evidence registry, then cite the ID here.
- This template is a reusable shape. Treat any concrete values shown inside this file as format examples, not current-project evidence.

## Header

```md
## Visual Contract

- reference name:
- fidelity band: precise / mid / loose
- match posture: parity / adapt-within-our-system / inspired-by
- evidenceIds:
- viewport / platform:
- reference authority scope:
- explicit exclusions:
```

`fidelity band` guidance:

- `precise`: Figma node with inspect access, a live web page with DevTools, or an equivalent source that exposes structured measurements, styles, text, and component structure.
- `mid`: a high-fidelity screenshot, mockup, or static design export that shows exact pixels but no inspect layer.
- `loose`: a hand-drawn sketch, wireframe, concept page, or moodboard image that conveys direction and composition but not exact values.

`match posture` is set in Gate 1 and revisited in Gate 2. It must not change silently during implementation.

## Layer 1: Direction

Coarse, page-level intent. This layer should be lockable from any fidelity band, including loose references.

```md
### Layer 1: Direction
- page purpose:
- nearest archetype:
- primary user task:
- information hierarchy:
- region list with intent:
- design stance:
- locked by reference:
- designer input needed:
```

In `region list with intent`, list each visible region with one line of intent, not with measurements. Measurements belong to Layer 2.

## Layer 2: Schematic Skeleton

Rule-level composition. Mid references can lock most of this; loose references lock the skeleton and leave values to the designer and the design system.

```md
### Layer 2: Schematic Skeleton
- layout archetype / grid:
- region-to-region spacing relationships:
- density: compact / balanced / spacious
- alignment system:
- typographic hierarchy levels and roles:
- component inventory guess:
- state coverage visible in reference:
- locked by reference:
- designer input needed:
```

Use `component inventory guess` only as a retrieval hint for existing design-system components, not as a formal component decision. Formal component decisions happen in Gate 3 and Phase 3.

## Layer 3: Precision And Tokens

Exact values and token mapping. Precise references can lock most of this; mid and loose references usually defer it to the existing design system plus designer confirmation.

```md
### Layer 3: Precision And Tokens
- spacing values or token names:
- typography values or token names:
- color values or token names:
- radius, shadow, border:
- imagery and asset expectations:
- motion and interaction expectations:
- tokens already existing in workflow/design-system/token.json:
- tokens missing in workflow/design-system/token.json:
- locked by reference:
- designer input needed:
```

For `tokens already existing` and `tokens missing`, name only tokens that have been read from `workflow/design-system/token.json` or confirmed design-system evidence. Do not invent token names.

## Conflict Log

Record every place the reference conflicts with an existing confirmed design-system rule. Conflicts must be surfaced in Gate 2 and never resolved silently.

```md
### Conflict Log
| Reference cue | Conflicting rule | Source of rule | Disposition |
|---|---|---|---|
|  |  |  | open / reference wins / rule wins / designer decides |
```

## Generalization Boundary

Record what must stay page-local and what might be reusable. This feeds Phase 5 routing to `../rule-update/`.

```md
### Generalization Boundary
- page-local match decisions:
- possible reusable candidates:
- do-not-generalize items:
- open gaps:
```

In `do-not-generalize items`, list reference-specific decisions that should never become design-system rules, such as external-brand colors, one-off illustration style, or reference-only layout quirks.

## Source Views

Record the evidence views used to fill this contract. Precise references should have two views; looser references may have only one.

```md
### Source Views
- visual view: screenshot / image path or evidence id
- structured view: inspect / DevTools / Figma raw data, or `not available for this fidelity band`
- view notes:
```
