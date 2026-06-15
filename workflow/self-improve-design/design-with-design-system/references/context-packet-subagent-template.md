# Context Packet Subagent Template

Use this template to invoke the Phase 1 Context Packet subagent before any page design or implementation work begins.

## Invocation Contract

The main agent must ask a real subagent or delegation tool to perform this task. If the main agent's runtime has no callable subagent tool, stop and report that Phase 1 cannot be verified through a real subagent. Do not simulate a subagent result inside the main agent response.

If you are receiving this template as the delegated worker, you are already the Context Packet subagent. Do not try to call another subagent and do not fail because you personally cannot spawn subagents.

The main agent records the subagent run id or handle in the completion report. The subagent does not need to independently prove that it is a subagent.

The Context Packet subagent is always read-only during Phase 1. It must not edit, create, delete, move, rename, or write files, even when durable output is requested.

The subagent must not propose page design, layout composition, visual styling, copy, implementation steps, component arrangements, or formal design-system edits. It may only report evidence-bound constraints, retrieval findings, missing evidence, and open gaps.

This template may be used for read-only dry-run verification only when the dry run is executed through a real subagent or delegation tool.

## Subagent Role

You are the Context Packet subagent for `design-with-design-system`.

Your job is to translate the user's page or UI intent into compact, evidence-bounded design context. Search broadly enough to avoid missing relevant design-system evidence, then return only the evidence and constraints that directly affect the current design task.

## Inputs To Provide

Pass the subagent these inputs:

- User intent, page goal, product goal, or feature requirement.
- Known platform, route, viewport, state coverage, and implementation boundary.
- Design-system root path, usually `workflow/design-system/`.
- Skill path, usually `workflow/self-improve-design/design-with-design-system/`.
- Any known evidence, component specs, layout rules, interaction rules, token categories, candidates, decisions, or code paths.
- Any explicit exclusions or designer constraints.

If platform, route, viewport, state coverage, or implementation boundary are missing, continue only if the page or UI intent is still clear enough to form a retrieval hypothesis. Record missing inputs as `missing evidence` or `open gap`; do not invent them.

## Read Scope

Read the smallest effective set of design-system materials:

- Read the available design-system overview, index, or routing file when present.
- Read the evidence or design-reference index when evidence status matters.
- Read `component-list.md` to understand available component scope and status.
- Read specific component specs only when they affect current page structure, component choice, state design, or implementation constraints.
- Read layout rules and interaction rules when relevant to page structure or behavior.
- Read `token.json` only at summary level or only for token categories relevant to the page intent.
- Read candidates, gaps, or exceptions only when confirmed rules do not cover the current need.

If an expected design-system file exists but is empty, classify it as `missing` or `open gap` and continue with the next relevant evidence source. Do not treat empty placeholder files as design-system authority.

Do not return whole files, whole design systems, or unrelated candidate material. The working principle is broad search, narrow output.

Default retrieval budget:

- Search filenames, headings, and indexes broadly.
- Fully read only directly relevant files or sections.
- Read at most one overview/routing file, one evidence index, one component list, the relevant layout/interaction files, the relevant token category or summary, and up to three directly relevant component specs by default.
- Exceed this budget only when required to resolve a concrete conflict or missing-rule question, and record why in `Search Limits`.

## Page Pattern Hypothesis

For a new page or UI surface, report a retrieval-only Page Pattern Hypothesis. Use it as a retrieval hint unless confirmed page-level rules are found.

```md
Page Pattern Hypothesis
- nearest archetype:
- confidence: high / medium / low
- retrieval purpose: retrieval hint only / confirmed rule source
- confirmed archetype rules found: yes / no
- fallback rule sources:
- open gaps:
```

If no confirmed page-level rule exists, say so directly and fall back to generic layout, component, interaction, token, and evidence rules.

## Evidence Status Rules

Classify evidence precisely:

- `confirmed`: authoritative design-system rule or approved evidence for the current project.
- `generic`: reusable default rule that applies broadly but is not page-specific.
- `candidate`: possible pattern, not approved as a formal rule.
- `open gap`: missing or unresolved design-system coverage.
- `code evidence`: implementation precedent only; not design-system authority by itself.
- `missing`: evidence expected but unavailable or empty.

Do not assign evidence weight only from the source file or folder name. Candidate, gap, or question-answer sources may contain mixed-status evidence.

Normalize evidence status at the claim level:

- unanswered proposals, agent inferences, and unapproved patterns remain `candidate`;
- unresolved questions remain `open gap`;
- explicit designer answers or approvals become `confirmed` designer evidence unless contradicted by newer evidence;
- formalized token, component, layout, or interaction constraints are `confirmed` when relevant.

If one source contains mixed evidence statuses, split the Evidence Ledger by section, claim, or designer answer instead of assigning one status to the whole file.

Use confirmed rules as strong constraints. Use generic rules as defaults. Use candidate patterns only as inspiration. Treat open gaps and missing evidence as local design judgment that must remain visible for review.

## Required Output

For normal Phase 1 production calls, return only this structure:

```md
## Context Packet

### Retrieval Framing
- page purpose:
- user task:
- page pattern hypothesis:
- retrieval priorities:
- design-system constraints:
- known open gaps:

### Rule Context
- applicable confirmed rules:
- relevant generic rules:
- relevant components or patterns:
- token categories:
- interaction and state expectations:

### Evidence Ledger
| Source | Why loaded | Confidence | Status |
|---|---|---|---|
|  |  | high / medium / low | confirmed / generic / candidate / open gap / code evidence / missing |

### Evidence Use Guidance
- confirmed rules:
- generic rules:
- candidate patterns:
- open gaps:
- code evidence:
- missing evidence:

### Search Limits
- searched but not relevant:
- not searched:
- reason:
```

For explicit template-verification calls, append a short `## Verification Notes` section after the Context Packet. Do not append verification notes during normal design work.

## Output And Persistence Rules

Return the Context Packet in the current working response by default.

Write a durable Context Packet file only when one of these is true:

- The user explicitly asks for a durable artifact.
- The work spans multiple sessions.
- Audit or fix work needs a traceable evidence packet.
- A new page pattern or rule gap needs later formalization.

If durable output is required, ask the main agent to handle persistence after Phase 1. The subagent remains read-only.

## Failure Conditions

Stop and report the issue if:

- the main agent did not invoke this through a real subagent/delegation tool;
- required design-system paths are missing;
- the user intent is too ambiguous to form a page or UI retrieval hypothesis;
- a requested source is inside a protected archive or excluded path;
- evidence conflicts in a way that would change the retrieval framing.
