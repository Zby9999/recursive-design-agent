---
name: design-agent-workflow
description: Coordinate project-local design-agent workflows for turning Figma seed-page intent, design evidence, visual or Figma references, human intent, and existing design-system rules into reusable design decisions. Use when a task needs to route between first-pass design-system skeleton extraction from a Figma node, extracting rules after designer confirmation, designing from visual/Figma references, designing from human intent with an existing design system, reviewing design outputs, or evaluating whether UI corrections should update durable design rules.
---

# Design Agent Workflow

Use this as the project-local routing Skill for reusable design-agent work. Treat it as a coordinator: route to the smallest matching sub-skill, then combine results only when the user task spans multiple workflow stages.

## Start

1. Read the nearest `AGENTS.md` files that govern the current workspace.
2. If the task is design-backed, read the relevant evidence registry or ask the user for the missing evidence.
3. Identify whether the task is about extraction, design production, review, or rule deposition.
4. Route to one or more sub-skills below.

## Route

- Use `align-design-intent/` when the user provides a Figma link/node for a seed or high-fidelity page and asks for a first-pass design-system skeleton candidate, including design principles, visual language, tokens, layout, components, interaction hypotheses, content style observations, and open questions before formal extraction.
- Use `extract-seed-design/` only after the designer answers candidate questions or clearly signals that design intent is confirmed and ready for formal design-system extraction.
- Use `design-from-visual-reference/` when the user asks to create or implement a web/UI surface from a visual reference, Figma reference, screenshot, or parity target.
- Use `design-with-design-system/` when the user gives human intent or product requirements and expects the agent to design using an existing design system.
- Use `design-review/` when the user asks to review, audit, or验收 a design output against intent, evidence, visual references, or design-system rules.
- Use `rule-update-feasibility-report/` when a correction, review finding, or UI change might need to become a durable rule, candidate, project exception, or open gap.

## Evidence Rules

- Separate approved evidence, focused supporting evidence, exploratory evidence, missing evidence, and rejected evidence.
- Do not promote a project-specific detail into a reusable rule without evidence, scope, and rationale.
- Mark uncertain findings as `candidate pattern`, `project exception`, `open gap`, or `example only`.
- Prefer updating the durable workflow artifact that owns the rule when the user gives clear instructions to write files.

## Completion

Before finishing, report which sub-skill path was used, what evidence was available, what remains uncertain, and whether the result belongs in chat, `AGENTS.md`, `workflow/`, or a sub-skill reference file.
