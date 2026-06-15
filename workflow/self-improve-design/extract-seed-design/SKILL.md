---
name: extract-seed-design
description: "Prototype-first formalization for a seed design system. Use after a design-system candidate exists and the user wants to ask formalization questions, draft semantic tokens and components, reconstruct the original design as a prototype, align details with the designer, and only then formalize tokens, components, layout, interaction, and design-system docs."
---

# Extract Seed Design

Use this Skill as the prototype-first gate for a first-version design system. It comes after `align-design-intent/`, where the first candidate skeleton is drafted from Figma evidence.

The core rule: do not turn static Figma interpretation directly into confirmed design-system rules. First draft tokens/components, reconstruct the original design, let the designer align details, then formalize.

## Workflow

This Skill has five phases:

1. `Question Gate`: ask 10-15 key questions from the candidate file and original Figma source, then stop.
2. `Draft Extraction`: write draft semantic tokens and draft component inventory/specs for prototype use.
3. `Prototype Reconstruction`: use the draft tokens/components to recreate the original design as an inspectable prototype or rendered surface.
4. `Designer Alignment Loop`: update only draft tokens/components/layout assumptions until the designer is satisfied.
5. `Formalization`: after designer approval, remove draft markers, fix tokens/components, then complete the formal design-system files.

Do not skip the question gate unless the user provides explicit answers and asks for later phases in the same request.

## Inputs

- Candidate skeleton: `workflow/design-system/design-system-candidate.md`
- Original Figma file, page, or node used to produce the candidate.
- Designer answers to the 10-15 extraction questions.
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

- `candidate-from-figma`: inferred from Figma or the candidate skeleton, not yet tested in a prototype.
- `draft-for-prototype`: written into the formal path only to drive prototype reconstruction.
- `needs-designer-alignment`: prototype/render output shows a mismatch or unresolved design judgment.
- `designer-approved`: designer has confirmed the prototype/rendered result is visually aligned.
- `formalized`: draft markers have been removed and the item is now part of the design system.

Draft content may live in `token.json`, `component-list.md`, and per-component specs, but it must be visibly marked as draft until designer approval.

## Reference Use

Reference files are not automatically loaded. Read them only when their file shape is needed.

- Reference examples may contain realistic evidence IDs, token values, component names, and code paths to demonstrate format. Treat them as format examples only. Do not copy example evidence IDs or example-specific facts into project outputs unless they are independently present in the current project's candidate, registered evidence, inspected Figma source, designer answer, prototype/render evidence, or implementation artifact.
- In Phase 1, do not load all references by default. Use them only if a question depends on the expected formal output shape.
- In Phase 2, read `references/token-example.json` before writing draft tokens.
- In Phase 2, read `references/each-component-example.md` before writing draft component inventory or per-component specs.
- In Phase 5, read the matching reference before formalizing that file type.
- Before writing `workflow/design-system/design-reference-list.md`, read `references/design-reference-list-example.md`.
- Before writing `workflow/design-system/design-system.md`, read `references/design-system-example.md` and the `design-system.md Contract` section below.
- Before writing `workflow/design-system/layout-rules.md`, read `references/layout-rules-example.md`.
- Before writing `workflow/design-system/interaction-rules.md`, read `references/interaction-rules.md`.
- Before writing a per-component spec under `workflow/design-system/component-spec/`, read `references/each-component-example.md`.
- When updating `workflow/design-system/component-list.md`, use `references/each-component-example.md` only for component-level fields; keep the list as an index rather than copying the full per-component spec.

## Context Budget

- Do not load every design-system file or every reference by default.
- Prefer targeted reads: relevant headings, searched sections, the file being updated, and the matching reference.
- Use the Context Ledger to compress candidate, Figma evidence, designer answers, and prototype evidence before writing.
- For Figma, inspect the target node and relevant child nodes. Do not treat the whole file as required context unless the user asks for global system extraction.

## Phase 1: Question Gate

Use this phase when the candidate exists but the designer has not answered formalization questions.

Important: `workflow/design-system/design-system-candidate.md` is candidate input only. Do not treat any answer-like text, conclusions, notes, or sections inside the candidate file as the designer's answers to the Phase 1 questions.

1. Read `workflow/design-system/design-system-candidate.md`.
2. Re-read or re-inspect the original Figma source. Use both structural Figma evidence and visual screenshot evidence when available.
3. Compare the candidate against the Figma source. Mark unsupported candidate claims as questions, not rules.
4. Ask 10-15 questions required to turn the candidate into draft tokens/components and later formal rules.
5. Stop. Do not enter Phase 2 unless the designer answers are supplied outside the candidate file, such as in the current conversation after these questions or in a dedicated answer block/file.
6. Do not update `workflow/design-system/design-system.md`, `token.json`, `layout-rules.md`, `interaction-rules.md`, `component-list.md`, or component specs in Phase 1.

Question coverage should include:

- Which design principles are global system rules versus page-local intent?
- Which visual patterns should define the design language?
- Which colors, type styles, spacing, radii, shadows, and motion should become semantic tokens?
- Which observed values are raw values only because their semantic role is unclear?
- Which layout rules are reusable across future surfaces?
- Which repeated elements should become components?
- Which component variants, states, and anatomy are confirmed enough to prototype?
- Which interactions need global handling for hover, focus, loading, empty, error, disabled, and responsive states?
- Which design details must stay project-specific examples instead of reusable rules?
- Which design components already have code components, token files, or implementation primitives?
- Which code paths, import paths, or usage examples should be linked when draft specs are written?
- Which candidate claims conflict with Figma evidence or need designer judgment?
- Which parts of the Figma file should be ignored as exploratory, decorative, outdated, or out of scope?
- What prototype or render surface should be used to check visual alignment?

## Phase 2: Draft Extraction

Use this phase after the designer answers Phase 1 questions.

1. Re-read the candidate file, original Figma evidence, and designer answers.
2. Build an allowed evidence list before writing draft content:
   - Prefer evidence IDs already registered in `workflow/design-system/design-reference-list.md`.
   - If a needed current-project source is not registered yet, register it in `workflow/design-system/design-reference-list.md` in the same pass or keep it as a source locator in the Context Ledger instead of inventing an ID.
   - Do not treat IDs, values, component names, or code paths from `references/*` examples as current-project evidence.
3. Build a Context Ledger before writing draft content.
4. Write draft semantic tokens into `workflow/design-system/token.json`.
5. Write draft component inventory into `workflow/design-system/component-list.md`.
6. Write per-component draft specs under `workflow/design-system/component-spec/` only when needed for prototype reconstruction.
7. Do not formalize `design-system.md`, `layout-rules.md`, or `interaction-rules.md` yet unless a small draft note is needed to support prototype reconstruction.

Draft write rules:

- Every draft token must include `status: "draft-for-prototype"` or an equivalent visible status field.
- Every draft component list item/spec must include `Status: draft-for-prototype`.
- Draft component specs may include anatomy, variants, states, token links, code links, and usage rules needed for prototype reconstruction.
- Draft content must not use `confirmed`, `formalized`, or final-rule language.
- If a value or component is plausible but uncertain, mark it `candidate-from-figma` or `needs-designer-alignment`.
- Draft outputs may reference only evidence IDs from the allowed evidence list. If supporting evidence is missing or only implied by a reference example, record the missing source as an evidence gap instead of filling a fake ID.
- In `token.json`, `component-list.md`, and component specs, fields named `source`, `sources`, `evidence`, `evidenceIds`, `designEvidence`, or `prototypeEvidence` must contain registered Evidence IDs only, such as `FIG-SEED-LANDING-001`, `DESIGNER-PHASE1-2026-06-12`, or `PROTO-SEED-2026-06-12`. Do not put file paths, Figma file keys, node IDs, tool-call history, dates, current-conversation notes, or approval prose in these fields. Put those details in `workflow/design-system/design-reference-list.md` as `Source locator`, `Evidence excerpt / block`, `Screenshot`, `URL`, or `Last checked`, then reference only the registered Evidence ID in draft outputs.

## Phase 3: Prototype Reconstruction

Use the draft tokens/components to recreate the original seed design as an inspectable prototype or rendered surface.

1. Prefer existing project tooling and real manifests if a codebase exists.
2. If no implementation target exists, describe the required prototype surface and stop for user direction.
3. Use the draft tokens/components as the design contract for reconstruction.
4. Capture prototype/render evidence such as a browser screenshot, Storybook view, local page, Figma component preview, or equivalent inspectable surface.
5. Compare the prototype/rendered output against the original Figma evidence.

The prototype path, URL, or artifact location is project-specific. Do not hardcode it in this Skill; record it when created.

## Phase 4: Designer Alignment Loop

Use this phase when the designer reviews the prototype and gives visual corrections.

1. Treat designer corrections as evidence for draft refinement, not as immediate formal rules.
2. Update draft tokens, component specs, or layout assumptions to reduce visual drift.
3. Keep affected items marked `draft-for-prototype` or `needs-designer-alignment`.
4. Reconstruct or re-render the prototype after meaningful changes.
5. Repeat until the designer says the prototype is satisfactory.

Do not remove draft markers or write the final `design-system.md` rules until the designer gives approval.

## Phase 5: Formalization

Use this phase only after the designer confirms the prototype/rendered result is satisfactory.

1. Mark approved tokens/components as `designer-approved`, then remove draft markers only when writing the final formal version.
2. Convert approved draft tokens/components into formal design-system assets.
3. Complete `design-reference-list.md`, `layout-rules.md`, `interaction-rules.md`, `component-list.md`, and per-component specs as needed.
4. Write `design-system.md` last, after approved tokens/components and prototype evidence exist.
5. Keep unresolved items as `candidate`, `open gap`, or `project exception`.

## Context Ledger

Before writing draft or formal rules, create a compact ledger in the working response:

```markdown
| Decision area | Candidate input | Figma evidence | Designer answer | Prototype/render evidence | Designer approval | Output file | Status |
|---|---|---|---|---|---|---|---|
| Design principles | ... | ... | ... | ... | ... | design-system.md | candidate-from-figma/draft-for-prototype/designer-approved/formalized |
| Tokens | ... | ... | ... | ... | ... | token.json | candidate-from-figma/draft-for-prototype/designer-approved/formalized |
| Components | ... | ... | ... | ... | ... | component-list.md / component spec | candidate-from-figma/draft-for-prototype/designer-approved/formalized |
| Layout | ... | ... | ... | ... | ... | layout-rules.md | candidate-from-figma/draft-for-prototype/designer-approved/formalized |
| Interaction | ... | ... | ... | ... | ... | interaction-rules.md | candidate-from-figma/draft-for-prototype/designer-approved/formalized |
```

Rules:

- A draft item must trace to candidate input, Figma evidence, or designer answer.
- A formalized item should trace to prototype/render evidence and designer approval.
- If sources conflict, do not silently choose. Record the conflict as `open gap`, `candidate`, or `needs-designer-alignment`.
- If Figma tooling or prototype evidence is unavailable, say what evidence is missing and avoid confident claims that depend on it.

## Formal File Roles

Update only the files that own the decision.

- `workflow/design-system/design-reference-list.md`: evidence registry, source scope, exclusions, prototype evidence, and last-checked metadata.
- `workflow/design-system/design-system.md`: file routing plus the 10 most important non-code consistency rules; write this last.
- `workflow/design-system/token.json`: semantic token contract and raw values, first as draft and later as formal.
- `workflow/design-system/layout-rules.md`: reusable layout rules, grid behavior, spacing relationships, and responsive structure.
- `workflow/design-system/interaction-rules.md`: shared interaction, motion, state, focus, loading, empty, and error behavior.
- `workflow/design-system/component-list.md`: component inventory, status, evidence IDs, prototype evidence, and links to specs/code.
- `workflow/design-system/component-spec/`: per-component contracts, including anatomy, variants, states, token links, code links, usage rules, and current status.

## `design-system.md` Contract

`design-system.md` has two purposes.

### File routing

Write it as the entrypoint for future design tasks. It should tell future agents which file to read first and what has priority.

Priority order:

1. Engineering artifacts when they exist: token files, component code, component specs, layout/interaction primitives, usage examples.
2. Machine-readable design-system files: `token.json`, structured component lists, and structured rule tables.
3. Natural-language design-system docs for ambiguous intent, abstract principles, exception boundaries, and judgment that code cannot express.

`design-system.md` must not replace engineering facts. It routes agents to the right files and explains high-level design direction.

### Core consistency rules

Add up to 10 high-signal rules that cannot be fully represented by code, tokens, or component APIs.

Good rules describe:

- the visual direction future surfaces should preserve,
- how to choose between similar components or layouts,
- what should stay quiet, dense, expressive, formal, or utilitarian,
- how hierarchy, rhythm, restraint, emphasis, or product tone should behave,
- what should not be generalized even if it appears in the seed page.

Include fewer than 10 rules when the evidence does not support 10 distinct reusable rules. Do not pad the list with token values, component API facts, implementation details, or one-off page observations. If an important rule is suspected but not yet supported, record it as an open gap or candidate instead.

Do not use this section for token values, component API facts, code paths, or facts already covered by structured files.

## Token Rules

Prefer semantic tokens over raw values.

- Good: `color.action.primary.bg` with value `#6C5CE7`.
- Weak: only recording `#6C5CE7` without its semantic role.
- If the semantic role is unclear, record the raw value as `candidate-from-figma` or `needs-designer-alignment`.
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
- If code is missing, record the desired implementation as a candidate rather than claiming it exists.

## Output Order

When the user asks for file updates, write in this order:

1. Phase 2 draft: `token.json`, `component-list.md`, and needed per-component specs.
2. Phase 3/4 prototype evidence and draft refinements.
3. Phase 5 formalization: `design-reference-list.md`, approved `token.json`, approved `component-list.md`, per-component specs, `layout-rules.md`, `interaction-rules.md`.
4. Phase 5 final entrypoint: `design-system.md`.

This order keeps prototype validation ahead of final design-system language.

## Completion

Before finishing, report:

- which phase was used,
- which Figma evidence was available,
- whether designer answers and designer approval were available,
- what prototype/render evidence exists,
- which files were updated or intentionally left untouched,
- which items remain `candidate-from-figma`, `draft-for-prototype`, `needs-designer-alignment`, `designer-approved`, or `formalized`.
