---
name: extract-seed-design
description: "Extract and formalize a first-version design system from a Figma seed through evidence intake, intent alignment, draft prototyping, and designer approval."
---

# Extract Seed Design

Use this Skill as the canonical entrypoint for turning a Figma seed or high-fidelity page into a first-version design system.

This Skill owns both seed evidence intake and designer intent alignment. Do not route through a separate design-intent skeleton file before extraction.

The core rule: do not turn static Figma interpretation directly into confirmed design-system rules. First inspect the evidence, align intent with the designer through three small gates, draft tokens/components for prototype reconstruction, validate the prototype/rendered result with the designer, then formalize.

## Workflow

This Skill has five phases:

1. `Figma Evidence Intake`: inspect raw Figma data and screenshot evidence, then proceed directly to the three alignment gates.
2. `Three-Gate Intent Alignment`: stop at three small designer gates before any draft design-system file writes.
3. `Draft Contract Extraction`: write draft semantic tokens and draft component inventory/specs for prototype use.
4. `Prototype Validation Loop`: reconstruct the seed design and refine drafts until the designer is satisfied.
5. `Formalization`: after designer approval, remove draft markers and complete the formal design-system files.

Do not skip the three-gate intent alignment unless the designer provides explicit answers for all three gates and explicitly approves starting draft extraction in the same request.

## Inputs

- Original Figma file, page, or node for the seed design.
- Designer context, constraints, answers, or approvals for the three gates.
- Prototype or render evidence when available.
- Existing formal files under `workflow/design-system/`.
- Reference examples in `references/` when a file shape is needed:
  - `references/design-reference-list-example.md`
  - `references/design-system-example.md`
  - `references/token-example.json`
  - `references/layout-rules-example.md`
  - `references/interaction-rules.md`
  - `references/each-component-example.md`

## Status Terms

Use these statuses consistently in file content and progress reports:

- `evidence-observed`: directly observed in raw Figma data, screenshot evidence, existing implementation, or registered evidence.
- `designer-aligned`: approved or corrected by the designer during the three-gate intent alignment.
- `draft-for-prototype`: written into the formal path only to drive prototype reconstruction.
- `needs-designer-alignment`: prototype/render output shows a mismatch or unresolved design judgment.
- `designer-approved`: designer has confirmed the prototype/rendered result is visually aligned.
- `formalized`: draft markers have been removed and the item is now part of the design system.

Draft content may live in `token.json`, `component-list.md`, and per-component specs, but it must be visibly marked as draft until designer approval.

## Reference Use

Reference files are not automatically loaded. Read them only when their file shape is needed.

- Reference examples may contain realistic evidence IDs, token values, component names, and code paths to demonstrate format. Treat them as format examples only. Do not copy example evidence IDs or example-specific facts into project outputs unless they are independently present in the current project's inspected Figma source, designer gate answer, registered evidence, prototype/render evidence, or implementation artifact.
- In Phase 1 and Phase 2, do not load all references by default. Use references only if a gate question depends on the expected formal output shape.
- In Phase 3, read `references/token-example.json` before writing draft tokens.
- In Phase 3, read `references/each-component-example.md` before writing draft component inventory or per-component specs.
- In Phase 5, read the matching reference before formalizing that file type.
- Before writing `workflow/design-system/design-reference-list.md`, read `references/design-reference-list-example.md`.
- Before writing `workflow/design-system/design-system.md`, read `references/design-system-example.md`.
- Before writing `workflow/design-system/layout-rules.md`, read `references/layout-rules-example.md`.
- Before writing `workflow/design-system/interaction-rules.md`, read `references/interaction-rules.md`.
- Before writing a per-component spec under `workflow/design-system/component-spec/`, read `references/each-component-example.md`.
- When updating `workflow/design-system/component-list.md`, use `references/each-component-example.md` only for component-level fields; keep the list as an index rather than copying the full per-component spec.

## Context Budget

- Do not load every design-system file or every reference by default.
- Prefer targeted reads: relevant headings, searched sections, the file being updated, and the matching reference.
- Use the original Figma raw data, screenshot evidence, and designer gate answers directly when drafting.
- For Figma, inspect the target node and relevant child nodes. Do not treat the whole file as required context unless the user asks for global system extraction.

## Phase 1: Figma Evidence Intake

Use this phase when the designer provides a Figma seed or high-fidelity page and the workflow has not yet aligned extraction intent.

Use the Figma plugin/MCP workflow before making design-intent claims:

- Load and follow the relevant Figma Skill instructions before Figma tool use. Use `figma-use` before any `use_figma` call that inspects the file through JavaScript.
- Prefer Figma MCP read tools such as `get_metadata`, `get_design_context`, or equivalent raw-node inspection for structural data when available.
- Use `get_screenshot` or an equivalent Figma screenshot capture for the visual view of the same node.
- If Figma tools are unavailable, blocked, or only provide one evidence view, record that limitation as missing evidence instead of replacing it with guesswork.

Collect and compare two evidence views for the same Figma node:

1. Figma raw data, inspect metadata, node hierarchy, properties, text, styles, measurements, and component information when available.
2. A screenshot or visual capture of the same node.

After intake, proceed directly to Gate 1.

Do not write `workflow/design-system/design-system.md`, `token.json`, `layout-rules.md`, `interaction-rules.md`, `component-list.md`, or component specs in Phase 1.

## Phase 2: Three-Gate Intent Alignment

Use this phase after Figma evidence intake is complete.

The three gates are user-facing stop gates. Each gate should be short, evidence-bounded, and focused on one decision layer. At each gate, ask the designer concrete questions or choice prompts for that decision layer, then stop unless the designer answers, corrects, or approves it.

If the designer provides explicit answers to all three gates at once, you may continue to Phase 3 only when the designer also explicitly approves starting draft extraction.

### Gate 1: System Direction

Gate 1 decides what the seed design should teach the design system.

Present only:

- `current system judgment:`
- `evidence basis:`
- `questions for the designer:`

Cover only:

- product or design stance;
- reusable vs page-local boundary;
- visual language direction;
- content or narrative mode;
- seed details that should not be generalized.

Do not ask about token names, component APIs, or file destinations in Gate 1.

### Gate 2: Semantic Rules

Start Gate 2 only after the designer approves or corrects Gate 1.

Gate 2 translates seed-design intent into semantic rules for extraction. These are not formal design-system updates yet; they define what the draft should test.

Use only the decision areas that matter for the seed:

- color roles;
- typography roles;
- spacing, density, radius, shadow, and motion roles;
- layout archetypes and responsive behavior;
- component boundaries, anatomy, variants, and states;
- content density / narrative rhythm;
- interaction, hover, focus, loading, empty, error, disabled, and motion expectations.

For each relevant semantic decision, present:

- `decision area:`
- `default from evidence:`
- `designer choice:`
- `evidence status:` evidence-observed / designer-aligned / needs-designer-alignment / open gap
- `draft implication:`

Do not treat agent inference as designer alignment.

### Gate 3: Draft Contract

Start Gate 3 only after the designer approves or corrects Gate 2.

Gate 3 decides what draft files and prototype checks are allowed. Keep it concise; do not list every routine token or every component detail.

Present only:

- `important token groups:`
- `components to extract:`
- `uncertainty queue:`
- `prototype validation surface:`
- `files to draft:`

In `important token groups`, list only token groups or token names that affect system direction, semantic roles, hierarchy, density, brand feel, interaction semantics, or known constraints.

In `components to extract`, list repeated or structurally important components, their likely anatomy/variants/states, and whether each is ready for draft extraction or still needs designer alignment.

In `uncertainty queue`, list only issues that need discussion before implementation:

- token role gap;
- component boundary gap;
- variant or state uncertainty;
- layout or responsive uncertainty;
- interaction uncertainty;
- evidence conflict;
- local exception or non-generalizable detail;
- needs designer decision.

Do not enter Phase 3 while Gate 3 still has unresolved items that block draft extraction. The designer may explicitly accept an unresolved item as draft judgment for prototype testing; if so, record that acceptance as part of the Gate 3 result.

## Phase 3: Draft Contract Extraction

Use this phase only after the designer has approved Gate 3 and explicitly allowed draft extraction.

1. Re-read the original Figma evidence and designer gate answers.
2. Use original evidence and registered Evidence IDs directly when writing draft content:
   - Prefer evidence IDs already registered in `workflow/design-system/design-reference-list.md`.
   - If a needed current-project source is not registered yet, register it in `workflow/design-system/design-reference-list.md` in the same pass with its source locator instead of inventing an ID.
   - Do not treat IDs, values, component names, or code paths from `references/*` examples as current-project evidence.
3. Write draft semantic tokens into `workflow/design-system/token.json`.
4. Write draft component inventory into `workflow/design-system/component-list.md`.
5. Write per-component draft specs under `workflow/design-system/component-spec/` only when needed for prototype reconstruction.
6. Do not formalize `design-system.md`, `layout-rules.md`, or `interaction-rules.md` yet unless a small draft note is needed to support prototype reconstruction.

Draft write rules:

- Every draft token must include `status: "draft-for-prototype"` or an equivalent visible status field.
- Every draft component list item/spec must include `Status: draft-for-prototype`.
- Draft component specs may include anatomy, variants, states, token links, code links, and usage rules needed for prototype reconstruction.
- Draft content must not use `confirmed`, `formalized`, or final-rule language.
- If a value, semantic role, component, variant, or state is plausible but uncertain, mark it `needs-designer-alignment`.
- Draft outputs may reference only registered Evidence IDs. If supporting evidence is missing or only implied by a reference example, record the missing source as an evidence gap instead of filling a fake ID.
- In `token.json`, `component-list.md`, and component specs, fields named `source`, `sources`, `evidence`, `evidenceIds`, `designEvidence`, or `prototypeEvidence` must contain registered Evidence IDs only, such as `FIG-SEED-LANDING-001`, `DESIGNER-GATE-2026-06-24`, or `PROTO-SEED-2026-06-24`. Do not put file paths, Figma file keys, node IDs, tool-call history, dates, current-conversation notes, or approval prose in these fields. Put those details in `workflow/design-system/design-reference-list.md` as `Source locator`, `Evidence excerpt / block`, `Screenshot`, `URL`, or `Last checked`, then reference only the registered Evidence ID in draft outputs.

## Phase 4: Prototype Validation Loop

Use the draft tokens/components to recreate the original seed design as an inspectable prototype or rendered surface.

1. Prefer existing project tooling and real manifests if a codebase exists.
2. If no implementation target exists, describe the required prototype surface and stop for user direction.
3. Use the draft tokens/components as the design contract for reconstruction.
4. Capture prototype/render evidence such as a browser screenshot, Storybook view, local page, Figma component preview, or equivalent inspectable surface.
5. Compare the prototype/rendered output against the original Figma evidence.
6. Treat designer corrections as evidence for draft refinement, not as immediate formal rules.
7. Update draft tokens, component specs, or layout assumptions to reduce visual drift.
8. Keep affected items marked `draft-for-prototype` or `needs-designer-alignment`.
9. Reconstruct or re-render the prototype after meaningful changes.
10. Repeat until the designer says the prototype is satisfactory.

Do not remove draft markers or write the final `design-system.md` rules until the designer gives approval.

The prototype path, URL, or artifact location is project-specific. Do not hardcode it in this Skill; record it when created.

## Phase 5: Formalization

Use this phase only after the designer confirms the prototype/rendered result is satisfactory.

1. Mark approved tokens/components as `designer-approved`, then remove draft markers only when writing the final formal version.
2. Convert approved draft tokens/components into formal design-system assets.
3. Complete `design-reference-list.md`, `layout-rules.md`, `interaction-rules.md`, `component-list.md`, and per-component specs as needed.
4. Write `design-system.md` last, after approved tokens/components and prototype evidence exist.
5. Keep unresolved items as `open gap`, `project exception`, or `needs-designer-alignment`.

## Token Rules

Prefer semantic tokens over raw values.

- Good: `color.action.primary.bg` with value `#6C5CE7`.
- Weak: only recording `#6C5CE7` without its semantic role.
- If the semantic role is unclear, ask in Gate 2 or record it as `needs-designer-alignment`.
- Use raw values only as values inside semantic tokens.
- Separate semantic roles from aliases and primitive/raw scales when the target project has that structure.
- Link tokens back to the evidence or designer answer that justified their semantic role.
- Promote token status only after prototype/render evidence shows the token works in context and the designer approves it.

## Code Link Rules

When code exists, prefer code and machine-readable contracts over natural-language descriptions.

- Link component specs to source files, import paths, exported components, props/API mappings, usage examples, and verification targets.
- Link layout rules to layout primitives such as page shell, container, section, or grid components.
- Link interaction rules to focus, motion, loading, empty, error, validation, and state helpers.
- Do not invent code paths while formalizing a real project. If the reference file is only an example, example paths are acceptable as examples.
- If code is missing, record the desired implementation as `needs-designer-alignment` or an open implementation gap rather than claiming it exists.

## Output Order

When the user asks for file updates, write in this order:

1. Phase 3 draft: `design-reference-list.md`, `token.json`, `component-list.md`, and needed per-component specs.
2. Phase 4 prototype evidence and draft refinements.
3. Phase 5 formalization: approved `token.json`, approved `component-list.md`, per-component specs, `layout-rules.md`, `interaction-rules.md`.
4. Phase 5 final entrypoint: `design-system.md`.

This order keeps intent alignment and prototype validation ahead of final design-system language.

## Completion

Before finishing, report:

- which phase was used,
- which Figma evidence was available,
- which three-gate designer answers and approvals were available,
- what prototype/render evidence exists,
- which files were updated or intentionally left untouched,
- which items remain `evidence-observed`, `designer-aligned`, `draft-for-prototype`, `needs-designer-alignment`, `designer-approved`, or `formalized`.
