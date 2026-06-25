---
name: design-from-visual-reference
description: Design or implement a UI surface from a single visual reference at any fidelity (Figma, screenshot, sketch, or parity target), using a coarse-to-fine workflow that aligns direction, skeleton, and precision through three designer gates.
---

# Design From Visual Reference

Use this Skill when a single visual reference is the primary design source of truth.

This Skill is single-reference by design. Do not expand the reference set to improve creative exploration; that trades real designer workload for speculative coverage. One reference, carried faithfully coarse-to-fine, is the contract.

## When To Use

- The user provides one visual reference and asks to create or implement a surface that matches or respects it.
- The reference may be precise (Figma node with inspect, live web page with DevTools), mid (high-fidelity screenshot or static export), or loose (sketch, wireframe, concept page, moodboard image).
- The target may be a parity replica, an adaptation within the project's own design system, or an inspired-by interpretation.

## When Not To Use

- The reference is a Figma seed and the goal is to extract a reusable design system: use `../extract-seed-design/`.
- The source of truth is human product intent, not a visual reference, and the design system is the primary constraint: use `../design-with-design-system/`.
- The task is a small edit to an existing surface: handle it in the current task context, `../design-review/`, or a designer-guided fix loop.
- The user wants a review of an existing output against a reference: use `../design-review/`.
- The task needs durable rule classification from completed UI work: use `../rule-update/`.

## Core Rule

Do not turn a visual reference directly into confirmed design-system rules. First lock direction, then lock a schematic skeleton, then lock precision and tokens, with a designer gate between each layer. Implement only after the contract is aligned. Verify parity against the reference with real rendered evidence before claiming a match.

## Fidelity Band

Every reference is classified into one fidelity band before extraction. The band changes how much each layer can lock from the reference; it does not change the layers or the gates.

- `precise`: Figma node with inspect access, a live web page with DevTools, or an equivalent source exposing structured measurements, styles, text, and component structure. Layers 1, 2, and 3 can be largely locked from the reference.
- `mid`: a high-fidelity screenshot, mockup, or static design export showing exact pixels but no inspect layer. Layers 1 and 2 can be locked; Layer 3 values are inferred with care and confirmed against the existing design system.
- `loose`: a hand-drawn sketch, wireframe, concept page, or moodboard image conveying direction and composition but not exact values. Layer 1 is locked from the reference; Layers 2 and 3 lean on the existing design system and the designer.

Record the band in the Visual Contract. Do not silently upgrade a loose reference to precise by guessing values.

## Match Posture

The relationship between the reference and the target surface. Set in Gate 1, revisited in Gate 2, fixed before Phase 3.

- `parity`: the target should match the reference as closely as the fidelity band and the project's design system allow. Layer 3 parity is in scope.
- `adapt-within-our-system`: the reference supplies direction and skeleton; the target is realized with the project's existing tokens and components. Layer 3 follows the project design system, not the reference's exact values.
- `inspired-by`: the reference supplies direction only. The target is a new surface in the project's own system, judged on direction and skeleton parity, not pixel parity.

## Formal Design-System Boundary

Read formal design-system files as evidence when needed, but keep them read-only unless the designer explicitly approves specific modifications.

Formal design-system files include, but are not limited to:

- `workflow/design-system/token.json`
- `workflow/design-system/design-system.md`
- `workflow/design-system/layout-rules.md`
- `workflow/design-system/interaction-rules.md`
- `workflow/design-system/component-list.md`
- `workflow/design-system/component-spec/`

Prototype or page code belongs to the current task surface. A new page may require components the existing library does not cover; create local prototype components or page-level components when the current surface needs them, but keep them marked as draft/prototype on the current surface. Do not automatically promote local prototype components, page-level components, or reference-matching patterns into formal design-system files. Whether a draft component should become a formal design-system component is decided by `../rule-update/` with designer approval, not by this Skill.

When the current work exposes possible design-system implications, route to `../rule-update/`. This Skill does not own reusable rule classification, proposed design-system updates, or decision evidence records.

## Reference Use

Reference files are not loaded automatically. Read them only when their shape is needed.

- Before invoking the Reference Context Packet subagent in Phase 1, read `references/reference-context-packet-subagent-template.md`.
- Before writing the Phase 1 completion report, read `references/reference-context-packet-report-template.md`.
- Before writing a Visual Contract in Phase 2, read `references/visual-contract-template.md`.
- Before writing a Parity Report in Phase 4, read `references/parity-report-template.md`.
- Treat example values inside references as format examples, not current-project evidence. Do not copy example Evidence IDs, token values, or component names into project outputs unless they are independently present in the current reference, the existing design system, or registered evidence.

## Context Budget

- Do not load the whole design system by default. Read only the token categories, components, layout rules, and interaction rules that the Visual Contract layer being filled actually needs.
- For precise references, inspect the target node and relevant children; do not pull the whole Figma file unless the user asks for global extraction.
- For mid and loose references, work from the image plus the existing design system; do not manufacture inspect-level data.
- Use the reference and registered Evidence IDs directly when drafting the contract.

## Status Terms

Use these statuses consistently in contract fields, progress reports, and parity reports:

- `evidence-observed`: directly observed in the reference, its inspect output, the existing implementation, or registered evidence.
- `designer-aligned`: approved or corrected by the designer during a gate.
- `draft`: written as a working contract value, not yet designer-confirmed or parity-verified.
- `needs-designer-alignment`: a gate or parity loop surfaced a mismatch or unresolved design judgment.
- `parity-verified`: the implemented surface has been compared against the reference with real rendered evidence and matches at the level the fidelity band and match posture allow.
- `page-local-match`: a match decision that must stay on the current surface and not become a reusable rule.

## Workflow Overview

This Skill has five phases, organized coarse-to-fine:

1. `Reference Evidence Intake And Context Packet`: classify the fidelity band, capture available evidence views, register evidence scope and exclusions, then route a read-only Reference Context Packet subagent to compress the reference-versus-design-system interaction into three-gate alignment inputs.
2. `Visual Contract And Three-Gate Alignment`: extract a coarse-to-fine Visual Contract and align it through three designer gates, one per layer.
3. `Implement Or Reconstruct`: realize the surface from the aligned contract, using existing design-system rules where compatible.
4. `Parity Verification Loop`: compare the rendered surface against the reference layer by layer, fix confirmed differences, iterate.
5. `Rule-Update Routing`: route any reusable-looking findings to `../rule-update/`; keep page-local matches local.

Do not skip the three gates unless the designer has already given explicit answers covering all three layers and explicitly approves starting implementation in the same request.

## Reference Context Packet Subagent Boundary

Phase 1 routes information collection through a real, read-only Reference Context Packet subagent, mirroring the Context Packet pattern in `../design-with-design-system/`.

The subagent's job is to compress the interaction between the single reference and the existing design system: which contract layers the reference can lock, which existing rules are compatible, which conflict, which tokens or components are missing, and what each of the three gates should ask the designer. It does not re-extract the reference's pixels (Phase 1 evidence capture already supplies the reference views), and it does not propose design, layout, copy, a Visual Contract, or formal design-system edits.

The main agent must invoke a real subagent or delegation tool for Phase 1. If no real subagent or delegation tool is available in the main agent runtime, stop before retrieval, do not enter Phase 2, and produce a blocked report using `references/reference-context-packet-report-template.md`. The blocked report must state that Phase 1 is blocked, no Visual Contract extraction or implementation was performed, Phase 2 is not allowed, and the next required action is to rerun in a runtime with subagent or delegation support.

Do not simulate a Reference Context Packet inside the main agent response.

## Phase 1: Reference Evidence Intake And Context Packet

Use this phase when the user provides a single visual reference and the workflow has not yet classified it.

### Phase 1A: Reference Evidence Capture

1. Confirm the reference is single. If the user provides multiple references, ask which one is the source of truth and treat the rest as exploratory until approved in an evidence registry.
2. Classify the fidelity band: `precise`, `mid`, or `loose`.
3. Capture the available evidence views for the reference:
   - For `precise`: capture both a visual view (screenshot) and a structured view (Figma inspect / raw node data, DevTools measurements, or equivalent). Use the Figma plugin/MCP workflow and load the relevant Figma Skill (for example `figma-use`) before any `use_figma` call that inspects the file through JavaScript. Prefer Figma MCP read tools such as `get_metadata`, `get_design_context`, or equivalent raw-node inspection for structural data. Use `get_screenshot` or an equivalent capture for the visual view of the same node.
   - For `mid`: capture the image. Do not invent inspect-level data.
   - For `loose`: capture the image and any written context the user gave with it.
4. Register the reference with its authority scope and explicit exclusions in the project's evidence registry (for example `workflow/decision-evidence/design-evidence.md`) when one exists. If no evidence registry exists yet, record the scope and exclusions in the Visual Contract header in Phase 2.
5. If a tool is unavailable or only provides one evidence view, record that limitation as missing evidence instead of replacing it with guesswork.

Do not write the Visual Contract, implementation, or any formal design-system file in Phase 1A.

### Phase 1B: Reference Context Packet Subagent

Before Visual Contract extraction or any three-gate alignment, route the captured reference evidence and the target surface through a Reference Context Packet subagent.

Use the Phase 1B calling template:

- `references/reference-context-packet-subagent-template.md`

The subagent is read-only. It must return only:

- reference locking by layer (which Visual Contract layers the reference can lock, given the fidelity band);
- compatible confirmed and generic design-system rules, relevant components, token categories, and interaction expectations;
- a conflict surface listing reference cues that clash with confirmed rules, with suggested dispositions;
- alignment inputs for each of the three gates, including the match-posture proposal and its trade-off;
- an evidence ledger and search limits.

The main agent must invoke a real subagent or delegation tool for Phase 1B. If no real subagent or delegation tool is available, stop before retrieval, do not enter Phase 2, and produce a blocked report using `references/reference-context-packet-report-template.md`.

Do not simulate a Reference Context Packet inside the main agent response. Do not let the subagent propose page design, layout composition, visual styling, copy, implementation steps, component arrangements, a Visual Contract, or formal design-system edits.

### Phase 1 Completion

Phase 1 is complete only after the Reference Context Packet has been produced and the reference locking, conflict surface, open gaps, evidence limits, and three-gate alignment inputs have been listed.

For completed or blocked Phase 1 runs, generate a structured report by using and citing this template:

- `references/reference-context-packet-report-template.md`

The report must cite the subagent template, state whether Phase 1B routing used a real subagent, what reference evidence was available, what design-system evidence was loaded, what remained an open gap, and whether the result stayed in working context or requires a durable artifact.

Phase 2 may start only after Phase 1 Completion is satisfied with a real subagent run. A blocked Phase 1 blocks Phase 2.

## Phase 2: Visual Contract And Three-Gate Alignment

Start Phase 2 only after Phase 1 Completion is satisfied with a real Reference Context Packet subagent run. Phase 2 is owned by the main agent. The main agent may use narrow search tools or helper agents when needed, but it remains responsible for the Visual Contract and the three-gate alignment.

Before designing or implementing, read:

- the Reference Context Packet from Phase 1;
- the three-gate alignment inputs from the Reference Context Packet;
- `references/visual-contract-template.md`;
- `workflow/design-system/token.json` as the implementation token contract, for the token categories the Packet flagged;
- existing code related to the target route, page, screen, section, component, or styling pattern when a codebase exists.

Then fill a Visual Contract for the reference. The contract has three layers: Direction, Schematic Skeleton, Precision And Tokens.

The three gates move the contract from coarse to fine, one gate per layer. At each gate, present the layer's `locked by reference` and `designer input needed` fields, ask the designer the smallest question needed to confirm, correct, or reject that layer, then stop for the answer.

### Gate 1: Direction Layer

Gate 1 aligns Layer 1 of the Visual Contract and sets the match posture. Keep it at the page, user-task, and information-architecture level. Use the Gate 1 alignment inputs from the Reference Context Packet as the starting evidence.

Present only:

- `fidelity band:`
- `match posture proposal:` parity / adapt-within-our-system / inspired-by
- `locked by reference:` (Layer 1 fields the reference actually supplies)
- `designer input needed:` (Layer 1 fields the reference cannot supply)
- `questions for the designer:`

Cover only:

- page purpose, nearest archetype, primary user task, information hierarchy, region list with intent, design stance;
- the match posture proposal and its trade-off against the existing design system;
- explicit exclusions or things not to copy from the reference.

Do not ask about token names, exact spacing, component props, or pixel-level styling in Gate 1.

### Gate 2: Schematic Skeleton Layer

Start Gate 2 only after the designer approves or corrects Gate 1.

Gate 2 aligns Layer 2 of the Visual Contract. It locks rule-level composition: layout archetype or grid, region-to-region spacing relationships, density, alignment system, typographic hierarchy levels and roles, a component inventory guess used only as a retrieval hint, and state coverage visible in the reference. Use the Gate 2 alignment inputs and the conflict surface from the Reference Context Packet as the starting evidence.

Present only:

- `layer 2 fields locked by reference:`
- `layer 2 fields needing existing design-system rules:`
- `conflicts with confirmed rules:` (from the Conflict Log)
- `questions for the designer:`

For each conflict between the reference and an existing confirmed design-system rule, surface it here. Do not silently choose the reference or the rule. Acceptable dispositions are `open`, `reference wins`, `rule wins`, or `designer decides`; only the designer may pick `reference wins` or `rule wins`, and `rule wins` may require routing to `../rule-update/` later.

Do not ask about exact token values, pixel measurements that the fidelity band cannot supply, or implementation details in Gate 2.

### Gate 3: Precision And Tokens Layer

Start Gate 3 only after the designer approves or corrects Gate 2.

Gate 3 aligns Layer 3 of the Visual Contract and turns the approved direction and skeleton into an implementation contract. For `loose` references, expect most Layer 3 fields to be supplied by the existing design system rather than the reference. Use the Gate 3 alignment inputs, token gaps, and component-decision inputs from the Reference Context Packet as the starting evidence.

Present only:

- `layer 3 fields locked by reference:`
- `tokens already existing in workflow/design-system/token.json:`
- `tokens missing in workflow/design-system/token.json:`
- `component decisions:` (confirmed components to use, variants or states needing confirmation, whether page-local components are allowed)
- `uncertainty queue:` token gaps, component gaps, variant uncertainties, local-component decisions, rule conflicts, clarify questions
- `generalization boundary:` page-local match decisions, possible reusable candidates, do-not-generalize items, open gaps
- `routine implementation tokens omitted unless design-relevant:` yes

Continue the alignment conversation until the designer explicitly approves moving into implementation. If a correction invalidates an earlier gate, return to that gate and revise downstream layers before continuing.

Do not mark the gate complete while Layer 3 still has unresolved token gaps, component gaps, variant uncertainties, local-component decisions, or rule conflicts that need designer confirmation. The designer may explicitly accept an unresolved item as local implementation judgment; if so, record that acceptance as part of the Gate 3 result.

Do not continue into implementation based only on the agent's judgment that the design is clear enough.

## Phase 3: Implement Or Reconstruct

Use this phase only after the designer has approved Gate 3.

1. Treat the aligned Visual Contract as the implementation contract.
2. Use existing design-system rules, tokens, and components where they are compatible with the contract.
3. Where the contract conflicts with a confirmed rule that Gate 2 resolved as `reference wins`, implement the reference decision on the current surface only and keep it marked `page-local-match`. Do not edit formal design-system files.
4. Where the contract conflicts with a confirmed rule that Gate 2 resolved as `rule wins`, follow the rule and record the deviation from the reference as a parity difference in Phase 4.
5. Create local prototype components or page-level components only when the current surface needs them. Keep them marked as draft/prototype on the current surface. Do not add them to formal design-system specs; route any reusable-looking draft component to `../rule-update/` for designer-approved formalization.
6. Use token names and values that actually exist in `workflow/design-system/token.json`. Do not invent token names. If a needed token is missing, record it as a token gap and ask the designer; do not hardcode a value as if it were a confirmed token.
7. Implement with the smallest scope needed for the task. Do not expand to unrelated surfaces.
8. If the current workspace has no clear implementation surface, stop and ask which codebase, route, host surface, or artifact should be used. Ask about the technical surface, not the filesystem location.
9. If no technical stack or render surface is specified, stop and ask the user which surface to use, such as a local page, Storybook view, static HTML page, Figma component preview, or equivalent inspectable surface.

## Phase 4: Parity Verification Loop

Use this phase after Phase 3 has produced a renderable surface.

1. Read `references/parity-report-template.md` and fill a Parity Report for the current pass.
2. Capture real rendered evidence: a browser screenshot, Storybook view, local page capture, or Figma component preview. Do not create placeholder images.
3. Compare the rendered surface against the reference layer by layer:
   - Layer 1 Direction: judged for every fidelity band.
   - Layer 2 Schematic Skeleton: judged for every fidelity band; for `loose` references this is the primary parity result.
   - Layer 3 Precision And Tokens: judged for `precise` and `mid` references; for `loose` references most rows are `not applicable` or `skipped`.
4. For each `partial`, `not met`, or `skipped` row, decide whether it is a confirmed difference to fix or an acceptable difference under the match posture.
5. Fix confirmed differences in Phase 3 without changing unrelated files or expanding scope.
6. Re-render and re-run the Parity Report after meaningful changes.
7. Repeat until the overall parity status matches what the fidelity band and match posture allow, and the designer accepts any remaining differences.

For `parity` posture, all three layers must be `met` or explicitly accepted as `partial` by the designer. For `adapt-within-our-system`, Layer 3 follows the project design system; deviations from the reference's exact values are expected and acceptable. For `inspired-by`, report Layer 1 and Layer 2 parity as the primary result and do not require Layer 3 parity.

Do not claim full parity when a required check was skipped.

## Phase 5: Rule-Update Routing

Start Phase 5 only after Phase 4 reports parity acceptable for the match posture, or the designer explicitly states the surface is complete as-is.

Call `../rule-update/` for Phase 5. Do not duplicate design-system implication classification inside this Skill.

Provide the called Skill with:

- the completed surface and its render evidence;
- the aligned Visual Contract and the fidelity band;
- the match posture and the designer's gate answers;
- the Parity Report, including accepted differences and skipped checks;
- any page-local matches, reusable-looking candidates, rule conflicts, token gaps, or open gaps noticed during the work.

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

## Inputs

- One visual reference: Figma node, screenshot, live web page, sketch, wireframe, concept page, or parity target.
- Target implementation or design surface.
- Existing project rules, design-system files, and user constraints.
- The fidelity band and match posture, once classified and aligned.
- The Reference Context Packet subagent and report templates, the Visual Contract template, and the Parity Report template in `references/`.

## Output Order

When the user asks for file updates, write in this order:

1. Phase 1: Reference Context Packet (working context by default; durable only when the user asks, the work spans sessions, or a rule gap needs later formalization) and the Phase 1 completion report.
2. Phase 2: Visual Contract.
3. Phase 3: implemented or reconstructed surface.
4. Phase 4: Parity Report and rendered evidence.
5. Phase 5: routing result from `../rule-update/`.

This order keeps reference-versus-design-system information collection ahead of contract extraction, keeps direction, skeleton, and precision alignment ahead of implementation, and keeps parity verification ahead of any rule deposition.

## Completion

Before finishing, report:

- which phases were used;
- whether Phase 1B used a real Reference Context Packet subagent, or was blocked before retrieval;
- the fidelity band and match posture;
- which reference evidence views were available and which were missing;
- which gate answers and approvals were available;
- what render evidence exists;
- which layers reached parity, which were accepted as partial, and which were skipped;
- which files were updated or intentionally left untouched;
- which items remain `evidence-observed`, `designer-aligned`, `draft`, `needs-designer-alignment`, `parity-verified`, or `page-local-match`;
- whether anything was routed to `../rule-update/` and with what disposition.
