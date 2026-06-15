---
name: design-review
description: Review, audit, or验收 a design output against human intent, design evidence, visual/Figma references, and existing design-system rules. Use when the user asks whether an output is acceptable, where it deviates, what needs fixing, or whether the result respects the intended design workflow.
---

# Design Review

Use this skill as an evaluator. Do not treat review findings as durable rules until they are routed through rule-update feasibility.

## Inputs

- Design output, implementation, screenshot, prototype, or written proposal to review.
- User intent, acceptance criteria, visual reference, Figma evidence, or existing design-system rules.
- Any known constraints or areas the user wants ignored.

## Process

1. Identify the review target and the evidence used for comparison.
2. Separate issues by category: intent, structure, layout, typography, color, component use, interaction, responsive behavior, accessibility, evidence handling, or rule governance.
3. Classify each finding by severity and confidence.
4. Cite the evidence or rule behind each finding when available.
5. Mark missing evidence as `open gap` instead of guessing.
6. Recommend fixes without editing files unless the user clearly asks for implementation.

## Output

Return findings first, then a short summary, skipped checks, and any candidates for `rule-update-feasibility-report`.
