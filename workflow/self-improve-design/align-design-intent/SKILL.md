---
name: align-design-intent
description: Extract a reusable design-system skeleton candidate from a Figma link or Figma node for a seed/high-fidelity page. Use when a designer shares a Figma node and wants Codex to draft design principles, visual language, token, layout, component, interaction, and content-style candidates while strictly separating confirmed design evidence, reasonable inference, and open questions before any formal design-system rule extraction.
---

# Align Design Intent

Use this Skill for the first design-system skeleton extraction pass from a Figma link or Figma node. The output belongs in `workflow/design-system/design-system-candidate.md`; do not update formal design-system files from this Skill.

## Boundaries

- Use only when the user provides a Figma link or Figma node as the source of truth.
- Do not use this Skill for screenshots without a Figma node, implemented webpages, general visual QA, or formal rule extraction.
- Do not write to `workflow/design-system/design-system.md`, `token.json`, `layout-rules.md`, `interaction-rules.md`, or `component-spec.md`.
- Route to `extract-seed-design` only after the designer reviews the skeleton candidate, answers open questions, or clearly signals that the design intent is confirmed and ready for formal design-system extraction.

## Evidence Requirements

Use the Figma plugin/MCP workflow before making design-intent claims:

- Load and follow the relevant Figma Skill instructions before Figma tool use. Use `figma-use` before any `use_figma` call that inspects the file through JavaScript.
- Prefer Figma MCP read tools such as `get_metadata`, `get_design_context`, or equivalent raw-node inspection for structural data when available.
- Use `get_screenshot` or an equivalent Figma screenshot capture for the visual view of the same node.
- If Figma tools are unavailable, blocked, or only provide one evidence view, record that limitation as missing evidence instead of replacing it with guesswork.

Collect and compare two evidence views for the same Figma node:

1. Figma raw data, inspect metadata, node hierarchy, properties, text, styles, measurements, and component information when available.
2. A screenshot or visual capture of the same node.

If either raw data or screenshot evidence is unavailable, record it as missing evidence and avoid confident visual or intent claims that depend on it.

## Process

1. Confirm the Figma node, target page/surface, and any designer-provided context.
2. Extract observable facts from raw node data before interpreting visual intent.
3. Inspect the screenshot and compare it against the raw data to catch recognition errors, cropped regions, hidden layers, or misleading inferred structure.
4. Draft a design-system skeleton across these modules: design principles, visual language, design tokens draft, layout system draft, reusable component inventory, interaction pattern hypotheses, and content style observations.
5. Inside every module, separate findings into exactly these buckets:
   - `Confirmed from design`
   - `Reasonable inference`
   - `Open questions / undecided`
6. Include a lightweight evidence source for each `Confirmed from design` and `Reasonable inference` item, such as `Figma node 0:81` or `screenshot 0:81`. Do not create or require separate `design-evidence` entries for this Skill.
7. Avoid inventing brand strategy, product rationale, or formal reusable design-system rules without evidence. Keep this output as a candidate skeleton.
8. Append the candidate entry to `workflow/design-system/design-system-candidate.md` as the default required output whenever this Skill is invoked. Create the file if it does not exist. Do not keep the full candidate only in chat unless the user explicitly asks for chat-only, preview, or dry-run output. After writing, stop at this gate; do not continue to `extract-seed-design` or any formal design-system extraction in the same pass. Tell the designer to review the candidate file and answer or confirm the open questions first.

## Candidate Entry Shape

Use an appendable entry with this structure:

```markdown
## Candidate: <figma node or page name>

- Source: <figma link/node>
- Status: design-system skeleton candidate

- Evidence used:
  - Raw Figma data: <available/missing + short note>
  - Screenshot: <available/missing + short note>

### Design principles

- Confirmed from design:
  - <item> (source: <Figma node 0:81 | screenshot 0:81>)
- Reasonable inference:
  - <item> (source: <Figma node 0:81 | screenshot 0:81>; confidence: <short reason>)
- Open questions / undecided:
  - <question>

### Visual language

- Confirmed from design:
  - <item> (source: <Figma node 0:81 | screenshot 0:81>)
- Reasonable inference:
  - <item> (source: <Figma node 0:81 | screenshot 0:81>; confidence: <short reason>)
- Open questions / undecided:
  - <question>

### Design tokens draft

- Confirmed from design:
  - <item> (source: <Figma node 0:81 | screenshot 0:81>)
- Reasonable inference:
  - <item> (source: <Figma node 0:81 | screenshot 0:81>; confidence: <short reason>)
- Open questions / undecided:
  - <question>

### Layout system draft

- Confirmed from design:
  - <item> (source: <Figma node 0:81 | screenshot 0:81>)
- Reasonable inference:
  - <item> (source: <Figma node 0:81 | screenshot 0:81>; confidence: <short reason>)
- Open questions / undecided:
  - <question>

### Reusable component inventory

- Confirmed from design:
  - <item> (source: <Figma node 0:81 | screenshot 0:81>)
- Reasonable inference:
  - <item> (source: <Figma node 0:81 | screenshot 0:81>; confidence: <short reason>)
- Open questions / undecided:
  - <question>

### Interaction pattern hypotheses

- Confirmed from design:
  - <item> (source: <Figma node 0:81 | screenshot 0:81>)
- Reasonable inference:
  - <item> (source: <Figma node 0:81 | screenshot 0:81>; confidence: <short reason>)
- Open questions / undecided:
  - <question>

### Content style observations

- Confirmed from design:
  - <item> (source: <Figma node 0:81 | screenshot 0:81>)
- Reasonable inference:
  - <item> (source: <Figma node 0:81 | screenshot 0:81>; confidence: <short reason>)
- Open questions / undecided:
  - <question>

### Next step

- Stop here. Designer should review this candidate and answer or confirm open questions before routing to `extract-seed-design`.
```

Keep candidate entries concise and evidence-backed. Mark empty sections as `None yet` rather than filling them with guesses. Do not promote any skeleton item into formal tokens, components, layout rules, interaction rules, or design-system rules from this Skill.

## Completion

Report the Figma node used, whether both raw data and screenshot were available, where the candidate entry was written, and whether the next action is still designer review or `extract-seed-design`.
