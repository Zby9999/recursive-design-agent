---
name: design-with-design-system
description: Design or implement a new page, screen, prototype, or UI surface from human product intent using an existing design system as the primary constraint.
---

# Design With Design System

Use this Skill when the design system is the primary constraint and the user provides human intent rather than a visual source of truth.

Do not use this Skill for small edits to an existing prototype, page, or UI surface; handle those through the current task context, `design-review/`, or a designer-guided fix loop instead.

Use this Skill only after `extract-seed-design` has completed and produced usable design-system evidence.

Do not trigger this Skill during early project setup before the seed design has been extracted.

Use this Skill when the user asks Codex to create or implement UI from requirements, page goals, or feature intent within an existing design system.

## Workflow Overview: Progressive Context

This Skill builds context progressively instead of reading the whole design system at once.

- Human product intent is the starting point.
- Phase 1 uses a real Context Packet subagent to compress relevant design-system evidence.
- Phase 2 reads the Context Packet, `workflow/design-system/token.json`, related code, and implementation precedent before creating anything.
- Phase 2 must pass the Designer Alignment Gate before the first design proposal, prototype, or implementation.
- Phase 3 uses designer feedback to fix the current surface, then calls `../rule-update/` after the surface is complete.
- Throughout the workflow, use page intent and evidence limits to narrow context instead of broad design-system reads.

## Formal Design-System Boundary

Read design-system source files as evidence when needed, but keep formal design-system files read-only unless the designer explicitly approves specific modifications.

Formal design-system files include, but are not limited to:

- `workflow/design-system/token.json`
- `workflow/design-system/design-system.md`
- `workflow/design-system/layout-rules.md`
- `workflow/design-system/interaction-rules.md`
- `workflow/design-system/component-list.md`
- `workflow/design-system/component-spec/`

Prototype or page code belongs to the current task surface. Do not automatically promote local prototype components, page-level components, or implementation patterns into formal design-system files.

When the current work exposes possible design-system implications, call `../rule-update/`. This Skill does not own reusable rule classification, proposed design-system updates, or decision evidence records.

## Phase 1: Context Packet

Before designing or implementing a new page or UI surface, route the request through a Context Packet subagent.

The subagent should collect and compress only the design-system evidence needed for the current page intent. It should separate confirmed rules, generic rules, candidate patterns, code evidence, missing evidence, and open gaps before design work begins.

Use the Phase 1 calling template:

- `references/context-packet-subagent-template.md`

The main agent must invoke a real subagent or delegation tool for Phase 1. If no real subagent or delegation tool is available in the main agent runtime, stop before retrieval, do not enter Phase 2, and produce a blocked report using `references/context-packet-report-template.md`. The blocked report must state that Phase 1 is blocked, no design or prototype work was performed, Phase 2 is not allowed, and the next required action is to rerun in a runtime with subagent or delegation support.

Do not simulate a Context Packet inside the main agent response.

### Phase 1 Completion

Phase 1 is complete only after the Context Packet has been produced and the open gaps and evidence limits have been listed.

For completed or blocked Phase 1 runs, generate a structured report by using and citing this template:

- `references/context-packet-report-template.md`

The report must cite the subagent template, state whether Phase 1 routing used a real subagent, what evidence was available, what remained an open gap, and whether the result stayed in working context or requires a durable artifact.

## Phase 2: Design With Context And Code

Start Phase 2 only after Phase 1 Completion is satisfied.

Phase 2 is owned by the main agent. Do not require a second subagent workflow for Phase 2. The main agent may use narrow search tools or helper agents when needed, but it remains responsible for the page design, prototype, or implementation.

Before designing or implementing, read:

- the Context Packet from Phase 1;
- `workflow/design-system/token.json` as the implementation token contract;
- existing code related to the target route, page, screen, section, component, or styling pattern;
- available component usage examples and implementation patterns.

### Designer Alignment Gate

When Phase 2 includes creating an initial design proposal, prototype, or implemented page, the Designer Alignment Gate is a hard stop gate.

After reading the Context Packet, `workflow/design-system/token.json`, relevant code, and implementation precedent, stop before creating any design proposal, prototype, or implementation. Even if the main agent believes the request is clear, the designer must control whether work continues.

Present only:

- `current design judgment:`
- `rules to apply:`
- `questions for the designer:`

In `rules to apply`, include explicit designer answers or approvals carried forward by the Context Packet, even when the original source was a candidate, gap, or question-answer file.

Continue the alignment conversation until the designer explicitly approves moving into the first version, prototype, or implementation. If the designer corrects or redirects the plan, update the judgment, rules, and questions before continuing.

Do not continue into creation based only on the agent's judgment that the design is clear enough.

### Code Similarity Search

Search for implementation precedent before creating new code:

- similar routes, pages, or screens;
- section-level components;
- component usage examples;
- token or style usage;
- responsive and state handling patterns.

If similar code exists, use it as implementation evidence. If no similar code exists, record the gap and continue from the Context Packet, available tokens, and available components.

### Design And Implementation Rules

- Follow Context Packet guidance by priority.

Must follow:

- confirmed design-system rules;
- explicit designer or user requirements;
- explicit designer answers or approvals found in candidate, gap, or question-answer evidence and carried forward by the Context Packet;
- token and component constraints marked as formalized or confirmed.

Default guidance:

- generic layout and interaction rules;
- existing component usage patterns;
- token category recommendations.

Reference only:

- unresolved or unapproved candidates;
- examples;
- similar prior pages;
- code precedent;
- inferred page archetype.

Escalate or ask the designer when there is:

- a conflict between a confirmed rule and the user request;
- a missing rule that affects core page structure;
- a need to modify design-system source files.

Implementation constraints:

- Use token names and values that actually exist in `workflow/design-system/token.json`.
- Do not invent token names.
- Prefer existing components and code patterns before creating new components.
- Create local prototype components or page-level components when the current surface needs them.
- Do not automatically add new local components to formal design-system specs.

### Phase 2 Outputs

Depending on the user request, Phase 2 may output:

- design proposal;
- implementation plan;
- implemented prototype or page;
- implementation gaps;
- local prototype or page-level components needed for the current surface.

### Phase 2 Completion

After Phase 2, report what was produced, whether the Designer Alignment Gate was explicitly approved by the designer, the key approval, correction, or redirect, which token and code evidence was used, which gaps remain, and whether any local prototype or page-level component should stay local or be considered later as a design-system candidate.

## Phase 3: Design Audit And Fix

Start Phase 3 only after Phase 2 has produced a design proposal, prototype, or implemented page that the designer can review.

Phase 3 closes the loop on current surface quality and design-system feedback. It has two subphases:

- Phase 3A fixes the current design, prototype, or page with designer guidance.
- Phase 3B calls `../rule-update/` only after the designer says the current surface is complete.

If the current workspace has no clear implementation surface for prototype or page fixes, stop and ask which codebase, route, host surface, or artifact should be used.

### Phase 3A: Designer-Guided Code Fix Loop

Phase 3A focuses only on making the current design, prototype, or page correct.

The designer reviews the current surface and gives feedback. When feedback clearly targets the current surface, apply it directly.

Stop and ask only when the target surface is unclear, the feedback requires changing unrelated surfaces, the feedback requires changing formal design-system files, or the feedback would change broader product behavior.

During Phase 3A, formal design-system source files remain read-only unless the designer explicitly asks to modify them.

Do not treat Phase 3A fixes as design-system updates. Record reusable-looking patterns, conflicts, or open gaps for later review, but keep them separate from the work of making the current surface right.

Phase 3A is complete only when the designer states that the current design, prototype, or page is complete.

### Phase 3B: Rule Update

Start Phase 3B only after the designer explicitly states that the current design, prototype, or page is complete.

Call `../rule-update/` for Phase 3B. Do not duplicate design-system implication classification inside this Skill.

Provide the called Skill with:

- the completed design, prototype, or page;
- the designer feedback and completion statement;
- the Context Packet and evidence limits from Phase 1;
- the token, component, code, and implementation evidence used in Phase 2;
- the changes made during Phase 3A;
- any conflicts, reusable-looking patterns, open gaps, token mismatches, or page-local exceptions noticed during the work.

The called Skill owns:

- `none found`;
- `page-local exception`;
- `reusable candidate`;
- `conflict with confirmed rule`;
- `open gap`;
- `proposed design-system update`;
- designer approval checks;
- applied design-system update records under `workflow/decision-evidence/`.

Do not edit formal design-system source files from this Skill unless `../rule-update/` determines that the designer explicitly approved the specific modifications.

### Phase 3 Completion

After Phase 3A, report what designer feedback was addressed, what changed in the current surface, and whether the designer has stated that the surface is complete.

After Phase 3B, report the result returned by `../rule-update/`, including `none found` when applicable, which items need designer decisions, whether formal design-system source files were left read-only or modified with explicit designer approval, and any decision evidence folder created for applied design-system updates.
