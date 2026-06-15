---
name: rule-update
description: Evaluate and record whether a design change, review finding, UI correction, or completed prototype should update reusable design-system rules, remain local, or be tracked as a candidate or open gap.
---

# Rule Update

Use this Skill when a design workflow needs to decide whether completed UI work, designer feedback, a review finding, or a repeated correction should affect durable design-system rules.

This Skill can be called by other `self-improve-design` Skills after a design output, prototype, review, or correction loop. It owns design-system implication summaries, rule-update feasibility, designer approval checks, and decision evidence records.

## Inputs

- The completed or reviewed design, prototype, page, or UI surface.
- Designer feedback, approval, correction, or review finding.
- The rules, components, tokens, candidates, examples, code precedent, and open gaps used during the work.
- Any prototype, screenshot, browser, Figma, or implementation evidence available.
- The formal design-system source files that might be affected.

## Classification

Classify each implication as one of:

- `page-local exception`
- `reusable candidate`
- `conflict with confirmed rule`
- `open gap`
- `proposed design-system update`
- `none found`

Use `none found` when the work does not expose any design-system implications.

## Process

1. Identify the exact behavior, visual decision, component pattern, token need, rule conflict, or missing rule under consideration.
2. Check whether an existing confirmed design-system rule already covers it.
3. Compare the change against available evidence, including designer feedback, prototype evidence, implementation evidence, and existing rules.
4. Classify the implication using the labels above.
5. State whether the item should remain local, become a reusable candidate, stay as an open gap, or become a proposed design-system update.
6. If the user wants a pre-update feasibility answer, return a recommendation, evidence summary, scope and exclusions, proposed destination file, risks of over-generalizing, and remaining gaps.
7. Do not apply proposed design-system updates unless the designer explicitly approves the specific modifications.

## Applied Design-System Updates

Only create a decision evidence record when both are true:

- the designer explicitly approves a design-system update;
- the main agent actually changes formal design-system source files.

A design-system update includes extending, deleting, or modifying formal design-system content.

Do not create a decision evidence folder for unapplied `reusable candidate`, `open gap`, or `proposed design-system update` items. Keep those in the Rule Update summary unless the designer explicitly asks for a durable candidate record.

## Decision Evidence Records

When an applied design-system update requires a record, create a new folder under `workflow/decision-evidence/`.

Use this numbering rule:

- Path format: `workflow/decision-evidence/<next-zero-padded-number>/`
- Read existing numeric folders, ignore leading zeroes, use the maximum number plus one, and format the new number with two digits.
- If `workflow/decision-evidence/1/` already exists, the next new folder is `workflow/decision-evidence/02/`.
- Do not rename or migrate existing non-padded folders.

Each new decision evidence folder must include:

- `record.md`
- `designer-reply.md`
- `design-system-diff.md`
- `prototype-screenshot.png` only when a real screenshot exists

If no real prototype screenshot exists, do not create a placeholder image. In `record.md`, mark `Prototype screenshot: missing` and state why.

Decision evidence files should capture:

- `record.md`: decision id, date, trigger, update type, affected design-system files, status, screenshot status, and open gaps.
- `designer-reply.md`: designer wording or a faithful summary, source location, and time.
- `design-system-diff.md`: modified design-system files, before/after summary, modification rationale, and the linked designer reply or screenshot evidence.
- `prototype-screenshot.png`: the prototype/page screenshot that produced the decision, when available.

## Output

Return a concise Rule Update summary:

- classification:
- evidence used:
- recommended disposition:
- proposed destination file, if any:
- designer approval required: yes / no
- formal design-system files modified: yes / no
- decision evidence folder, if created:
- remaining gaps:

