# AGENTS.md Template

This file is a reusable operating template for agents working inside a design-agent workflow repository. 


## Rule File Routing

Do not treat this section as a fixed source-priority ladder. Route to the smallest relevant rule file for the current task, then reconcile conflicts by specificity, evidence quality, and user instruction. If a routed file is empty, missing, unavailable, or too vague, record it as an `Open Gap` before acting.

### `AGENTS.md`

- Purpose: Local operating contract for agents.
- Read when: Every task in the folder, and again before changing workflow rules.
- Use rules: Follow boundary, protected-path, file-placement, and completion rules first. Keep this file focused on routing and operating behavior, not detailed project methodology.

### `README.md`

- Purpose: Workflow entrypoint and index.
- Read when: The user asks for an overview, onboarding, repository structure, or how the workflow modules fit together.
- Use rules: Use it to orient readers and link to rule modules. Do not store detailed rules here when a more specific rule file exists.

### `memory.md`

- Purpose: Project state, roadmap, decisions, handoff context, and known gaps.
- Read when: A task depends on prior progress, current status, pending roadmap, previous decisions, or cross-session continuity.
- Use rules: Use it as mutable project memory, not as the normative source for reusable rules. Move stable rules into the owning rule file.

### `design-evidence.md`

- Purpose: Registry for approved, focused, exploratory, missing, or rejected design evidence.
- Read when: A task references Figma, screenshots, visual parity, inspect output, browser captures, user corrections, or design-backed claims.
- Use rules: Use evidence only within its approved scope and exclusions. Treat unlisted references as exploratory until approved.

### `design-system/token.json`

- Purpose: Machine-readable token or schema contract.
- Read when: A task needs reusable values, token names, schema shape, or implementation-facing constants.
- Use rules: Use only documented values. Do not encode unresolved assumptions or derive new values from screenshots without evidence.

### `design-system/component-spec.md`

- Purpose: Component boundary and reusable component behavior notes.
- Read when: A task creates, updates, reviews, or promotes a reusable component pattern.
- Use rules: Use it to define component purpose, variants, slots, states, and constraints. Do not use it to invent visual foundations that belong in evidence or token records.

### `design-system/layout-rules.md`

- Purpose: Reusable layout and composition rules.
- Read when: A task affects page structure, responsive behavior, spacing relationships, region hierarchy, or repeatable layout patterns.
- Use rules: Use it for transferable layout rules and exceptions. Keep one-off page choices marked as project exceptions or examples.

### `design-system/interaction-rules.md`

- Purpose: Reusable interaction, state, motion, and feedback rules.
- Read when: A task affects hover, focus, active, loading, error, transition, or state behavior.
- Use rules: Use it for confirmed interaction patterns. Mark unverified or one-off behavior as candidates or open gaps.

### Task-specific `markdown` files

- Purpose: Dedicated procedures, checklists, schemas explained in prose, decision records, research notes, or case studies.
- Read when: The task names a workflow module or needs a reusable written procedure not owned by the files above.
- Use rules: Use the most specific file available. Keep examples clearly marked and route stable reusable rules back to the owning rule file.

### Task-specific `json` files

- Purpose: Structured contracts, inventories, schemas, manifests, or machine-readable configuration.
- Read when: The task needs structured data that agents or tools can parse consistently.
- Use rules: Prefer structured data over prose for machine contracts. Do not hand-edit generated data unless the file documents that manual editing is allowed.

Conflict handling:

- User instruction overrides reusable workflow defaults, unless it asks to touch protected paths without explicit permission.
- More specific rule files override broad routing guidance for their owned topic.
- Approved evidence overrides exploratory examples.
- Machine-readable `json` contracts override prose when implementation values conflict, but only if the JSON file is populated and documented.
- Empty files are placeholders, not authority.
- Missing evidence or conflicting rules must be reported as an `Open Gap`; do not silently choose a convenient rule.

## Core Execution Rules

- Separate portable workflow rules from project-specific examples.
- Label every non-finalized idea as `Candidate`, `Open Gap`, or `Project Exception`.
- Treat examples as evidence illustrations, not as automatic requirements for future projects.
- Preserve traceability by recording what evidence produced each rule, candidate, exception, or correction.
- Prefer updating the durable workflow artifact over leaving reusable methodology only in chat.
- Keep file changes scoped to the task and avoid reorganizing folders unless the user requested structure work.
- Do not create setup, build, lint, test, or release commands unless they are present in a real manifest, lockfile, task config, or explicit project document.

## Evidence And Rule Governance

Before turning an observation into a durable rule, classify it as exactly one of:

- `confirmed rule`
- `candidate pattern`
- `project exception`
- `open gap`
- `example only`

Use this classification consistently:

- A `confirmed rule` has enough evidence and user approval to guide future work.
- A `candidate pattern` may become reusable but needs more examples or approval.
- A `project exception` is valid for one project or surface but should not generalize.
- An `open gap` marks missing evidence, unresolved conflict, or incomplete verification.
- An `example only` helps explain a mechanism but does not constrain future output.

When a correction repeats, update the relevant workflow file or decision record instead of relying on the agent to remember it implicitly.

## Acceptance Workflow

Use this section whenever a task changes a reusable workflow artifact, implements a design-backed surface, or claims parity with a reference.

1. Confirm the applicable rule files before acting.
2. Identify the evidence required for the task, including structured specs, approved references, screenshots, written requirements, or prior decisions.
3. If the task is design-backed, check `design-evidence.md` for allowed evidence types, authority, scope, and known exclusions.
4. Before implementation, state any missing evidence that affects the claim being made.
5. After implementation, verify the result with the available local surface, browser, screenshot, rendered artifact, or documented inspection method.
6. Compare against the accepted reference by the categories relevant to the task, such as structure, spacing, typography, color, alignment, state behavior, responsive behavior, copy, data contract, or file placement.
7. Fix confirmed differences without changing unrelated files or expanding scope.
8. Report any remaining differences, skipped checks, or evidence gaps. Do not claim full parity or full completion when a required check is missing.

Keep generated verification artifacts out of version control unless the project explicitly tracks them.

## Documentation Updates

- Update the most specific durable file that owns the rule.
- Keep `AGENTS.md` focused on agent routing, operating rules, and completion standards.
- Put reusable procedures, schemas, and checklists in dedicated workflow files.
- Put evidence allowlists, reference contracts, and evidence scopes in `design-evidence.md`.
- Put progress, roadmap, and historical context in `memory.md` when that file exists.
- Keep reusable `markdown` and `json` filenames stable once other agents or procedures depend on them.

## Completion Standard

Before finishing:

- Confirm which durable files were changed and why.
- Confirm that protected archives or unrelated folders were not modified.
- Confirm that the result is reusable outside the source project.
- Confirm that examples are marked as examples and do not introduce hidden requirements.
- List any open gaps, missing evidence, skipped checks, or assumptions.
