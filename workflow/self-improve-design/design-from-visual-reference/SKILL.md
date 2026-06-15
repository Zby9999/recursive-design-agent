---
name: design-from-visual-reference
description: Design or implement a web/UI surface from visual references, Figma references, screenshots, or parity targets. Use when the user provides a visual source of truth and asks the agent to create, adapt, or implement a page, prototype, component, or interface that should visually match or respect that reference.
---

# Design From Visual Reference

Use this skill when the visual reference is the primary design source of truth.

## Inputs

- Visual or Figma reference, screenshot, prototype, inspect output, or browser capture.
- Target implementation or design surface.
- Existing project rules, design-system files, and user constraints.

## Process

1. Confirm the reference authority, scope, viewport, and exclusions.
2. Extract a compact visual contract: structure, spacing, alignment, typography, color, imagery, states, responsive behavior, and interaction expectations.
3. Use existing design-system rules when they are populated and compatible with the visual reference.
4. If the reference conflicts with existing rules, report the conflict before silently choosing.
5. Implement or describe the design with the smallest scope needed for the task.
6. When a local surface exists, verify with browser or rendered-output inspection before claiming parity.

## Output

Return the implemented or proposed design plus verification notes, remaining visual differences, missing evidence, and any rule candidates that should be evaluated separately by `rule-update-feasibility-report`.
