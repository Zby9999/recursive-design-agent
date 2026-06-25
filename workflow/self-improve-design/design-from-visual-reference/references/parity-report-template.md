# Parity Report Template

Use this template in Phase 4 of `design-from-visual-reference` to record the result of comparing the implemented or reconstructed surface against the single visual reference.

The report is organized by the same three layers as the Visual Contract so that parity is judged coarse-to-fine: direction first, schematic skeleton next, precision last. This keeps the report honest for every fidelity band, because loose references are only expected to reach parity on Layers 1 and 2.

## How To Use This Template

- One report per verification pass. Re-run the report after each meaningful fix in the parity loop.
- Use real rendered evidence only: browser screenshot, Storybook view, local page capture, or Figma component preview. Do not create placeholder images.
- Cite registered Evidence IDs in `evidenceIds`. Keep screenshot paths, URLs, and artifact locations in the evidence registry or in `Render evidence`, not inside contract fields.
- Mark any check that could not be run as `skipped` with a reason. Do not claim parity for a skipped check.
- Treat any concrete values shown inside this file as format examples, not current-project evidence.

## Header

```md
## Parity Report

- reference name:
- fidelity band: precise / mid / loose
- match posture: parity / adapt-within-our-system / inspired-by
- surface reviewed:
- verification pass number:
- render evidence:
- evidenceIds:
- verification method: browser screenshot / rendered capture / storybook / figma preview / other
```

## Layer Parity

Judge each layer against the Visual Contract. For every row, state `met`, `partial`, `not met`, or `skipped`.

### Layer 1: Direction

```md
### Layer 1: Direction
| Direction field | Reference | Implementation | Status | Note |
|---|---|---|---|---|
| page purpose |  |  | met / partial / not met / skipped |  |
| archetype |  |  |  |  |
| primary user task |  |  |  |  |
| information hierarchy |  |  |  |  |
| region list with intent |  |  |  |  |
| design stance |  |  |  |  |

- layer 1 parity: met / partial / not met / skipped
```

### Layer 2: Schematic Skeleton

```md
### Layer 2: Schematic Skeleton
| Skeleton field | Reference | Implementation | Status | Note |
|---|---|---|---|---|
| layout archetype / grid |  |  | met / partial / not met / skipped |  |
| region spacing |  |  |  |  |
| density |  |  |  |  |
| alignment |  |  |  |  |
| typographic hierarchy |  |  |  |  |
| component inventory |  |  |  |  |
| state coverage |  |  |  |  |

- layer 2 parity: met / partial / not met / skipped
```

### Layer 3: Precision And Tokens

For loose and mid references, expect many rows to be `not applicable` or `skipped` because the reference did not lock those values.

```md
### Layer 3: Precision And Tokens
| Precision field | Reference | Implementation | Status | Note |
|---|---|---|---|---|
| spacing values or tokens |  |  | met / partial / not met / skipped / not applicable |  |
| typography values or tokens |  |  |  |  |
| color values or tokens |  |  |  |  |
| radius / shadow / border |  |  |  |  |
| imagery / assets |  |  |  |  |
| motion / interaction |  |  |  |  |

- layer 3 parity: met / partial / not met / skipped
```

## Conflict Resolution Recap

Record how each conflict listed in the Visual Contract was resolved in the implemented surface.

```md
### Conflict Resolution Recap
| Reference cue | Conflicting rule | Resolution chosen | Designer approved | Note |
|---|---|---|---|---|
|  |  | reference wins / rule wins / local exception | yes / no / not yet |  |
```

## Overall Parity

State the overall result at the level the fidelity band and match posture allow.

```md
### Overall Parity
- overall status: parity achieved / partial parity / not met / skipped
- layers met: 1 / 2 / 3
- layers not met or skipped:
- remaining differences:
- acceptable under match posture: yes / no / not yet
```

For `inspired-by` posture, full Layer 3 parity is not expected; report direction and skeleton parity as the primary result. For `parity` posture, all three layers must be `met` or explicitly accepted as `partial` by the designer.

## Rule-Update Routing

List items from this surface that should be considered by `../rule-update/`. Do not promote any of them into formal design-system files from this Skill.

```md
### Rule-Update Routing
- page-local exceptions:
- reusable candidates:
- conflicts with confirmed rules:
- open gaps:
- items routed to ../rule-update: yes / no
```

## Boundary Check

```md
### Boundary Check
- formal design-system files modified: no
- only the current surface was changed: yes / no
- designer accepted remaining differences: yes / no / not yet
- next required action:
```

In `next required action`, state one of: `loop back to Phase 3 for fixes`, `proceed to Phase 5 rule-update routing`, or `stop and ask designer`.
