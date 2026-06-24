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
6. Identify the smallest consistent update set that could satisfy the designer-approved requirement without adding unrelated rules, duplicated prose, speculative examples, or broad cleanup.
7. Check whether the possible semantic rule change also affects any structured JSON contract, inventory, schema, token file, or implementation-facing constant.
8. If the user wants a pre-update feasibility answer, return a recommendation, evidence summary, minimum update scope, exclusions, proposed destination files, structured files to check, risks of over-generalizing, and remaining gaps.
9. Do not apply proposed design-system updates unless the designer explicitly approves the specific modifications.

## Minimal Effective Update

Apply the smallest consistent change set that makes the approved design-system decision usable and reproducible.

Smallest consistent change set does not mean one file only. If one semantic rule and one structured JSON contract must change together to keep the design system consistent, update both files in the same applied change.

Avoid design-system file growth that does not directly support the approved decision:

- Do not restate existing rules in new wording.
- Do not add broad principles when a narrow rule, token, component note, or exception is enough.
- Do not promote page-local behavior into reusable guidance without evidence and approval.
- Do not add examples unless they are necessary to disambiguate the rule.
- Do not reorganize, rename, or clean up unrelated design-system content as part of a rule update.

## Structured Contract Sync

When an approved semantic update changes a machine-readable contract, update the necessary JSON file in the same applied design-system change.

Structured JSON updates are required when the approved change affects items such as:

- token names, token values, aliases, or token categories;
- component inventory, component variants, slots, states, or allowed values;
- layout, interaction, or evidence schemas that tools or agents parse;
- implementation-facing constants or rule manifests.

Do not update formal JSON files for unapplied `reusable candidate`, `open gap`, or `proposed design-system update` items. For those items, only identify which structured files would need synchronization if the designer approves the update.

If no structured file is affected, state `structured file update: not applicable` in the Rule Update summary.

Do not encode unresolved assumptions in JSON. If the semantic rule is approved but the structured representation is unclear, record the JSON synchronization as an `open gap` instead of inventing a schema or value.

## Applied Design-System Updates

Only create a decision evidence record when both are true:

- the designer explicitly approves a design-system update;
- the main agent actually changes formal design-system source files.

A design-system update includes extending, deleting, or modifying formal design-system content, including semantic rule files and structured JSON files.

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
- `design-system-diff.md`: modified semantic design-system files and structured JSON files, before/after summary for both representations, modification rationale, consistency notes, and the linked designer reply or screenshot evidence.
- `prototype-screenshot.png`: the prototype/page screenshot that produced the decision, when available.

## Output

Return a concise Rule Update summary:

- classification:
- evidence used:
- recommended disposition:
- minimum effective update:
- proposed destination file, if any:
- structured files checked / modified:
- designer approval required: yes / no
- formal design-system files modified: yes / no
- decision evidence folder, if created:
- remaining gaps:
