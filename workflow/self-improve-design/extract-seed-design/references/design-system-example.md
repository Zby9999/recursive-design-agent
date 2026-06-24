# Design System

Status: formalized
Last checked: 2026-xx-xx
Source evidence: FIG-SEED-001, PROTO-SEED-YYYY-MM-DD, DESIGNER-APPROVAL-YYYY-MM-DD

This is the entrypoint for future design and implementation work using the `[design-system-name]` seed system.

Replace bracketed placeholders with evidence-backed project content. Do not copy project names, brand language, typography names, color values, Figma node IDs, route names, code paths, or component names from another project unless this file is explicitly a case study.

## Read Order

Follow this order when making or reviewing design decisions:

1. Engineering artifacts when they exist: prototype source, local assets, component code, and build/verification outputs.
2. Machine-readable system files: `workflow/design-system/token.json`, then `workflow/design-system/component-list.md`.
3. Component contracts: `workflow/design-system/component-spec/*.md`.
4. Layout and interaction rules: `workflow/design-system/layout-rules.md`, then `workflow/design-system/interaction-rules.md`.
5. Evidence registry: `workflow/design-system/design-reference-list.md`.
6. This file for high-level design judgment and exception boundaries.

If files conflict, prefer implemented code and machine-readable tokens for concrete values, then component specs for reusable boundaries, then this file for intent and judgment.

## File Roles

| File | Use it for | Do not use it for |
|---|---|---|
| Engineering artifacts, when they exist | concrete implemented behavior, component API, asset availability, prototype/render output, build or browser verification evidence | broad design philosophy, new reusable rules, or proof that a one-off implementation detail is system intent |
| `token.json` | formal semantic values for color, typography, spacing, sizing, radius, shadow, motion, and interaction primitives | broad design philosophy or new values not evidenced |
| `component-list.md` | component inventory, status, spec links, evidence IDs, prototype evidence, and code status | full component anatomy |
| `component-spec/*.md` | anatomy, variants, states, token links, usage rules, code links, and verification targets | global layout philosophy |
| `layout-rules.md` | page shell, layout archetypes, grid behavior, spacing relationships, responsive boundaries | interaction states or component API |
| `interaction-rules.md` | hover, active, focus, disabled, loading, empty, error, motion, and state gaps | layout measurements |
| `design-reference-list.md` | source scope, approved evidence, excluded evidence, prototype evidence, designer answers, open gaps | unapproved inference |

## Core Consistency Rules

Write up to 10 high-signal rules that cannot be fully represented by tokens, component APIs, or code paths. Prioritize the rules that best preserve design-language consistency across future surfaces.

1. Preserve the seed surface's `[primary visual driver]`: `[content/media/data/structure]` should carry the main expression while `[supporting UI layer]` stays `[quiet/systematic/expressive/utilitarian/etc.]`.
2. Keep the product tone `[tone adjectives]`; avoid introducing `[unapproved patterns such as panels, badges, decorative chrome, heavy shadows, dense toolbars, or marketing hero treatments]` unless later evidence supports them.
3. Use `[approved color or material strategy]` consistently; do not introduce `[new accent, dark mode, gradient family, surface treatment, or contrast mode]` without approved evidence.
4. Preserve `[media/content/data treatment]`; do not `[crop, tint, blur, mask, summarize, animate, collapse, or decorate]` by default unless the system defines that behavior.
5. Let hierarchy come from `[scale contrast, spacing, alignment, density, sequence, content priority, or motion restraint]` rather than `[decoration, one-off emphasis, or unsupported visual effects]`.
6. Treat `[dominant writing/content mode]` as the default communication style; reserve `[long-form, instructional, marketing, or technical copy]` for `[specific confirmed contexts]`.
7. Keep typography `[typographic behavior such as quiet/systematic/expressive/dense]`; `[primary type role]` should remain consistent across comparable surfaces.
8. Treat `[identity/signature/navigation/structural pattern]` as `[required/optional/contextual]` based on repeated evidence and designer approval.
9. Limit layouts to `[confirmed layout archetypes or variants]` until new evidence justifies another reusable variant.
10. Interactions should feel `[motion and feedback tone]`; use `[cursor, focus, state tokens, subtle contrast, reserved space, or explicit controls]` as the main affordance channels.

Remove any rule above that is not supported by evidence. Record suspected but unconfirmed rules as open gaps or `needs-designer-alignment` instead of padding the list.

## Formalized Scope

- `[seed surface, page, flow, or component set]`.
- `[confirmed component names or component categories]`.
- `[confirmed interaction/state behavior]`.
- `[prototype, render, Storybook, browser, or implementation evidence used for validation]`.

## Open Gaps

- `[missing responsive breakpoint, platform, or viewport]`.
- `[missing long-form, dense-data, empty/error/loading, or edge-case behavior]`.
- `[missing component variant or state]`.
- `[missing route, URL, data, or integration mapping]`.
- `[missing implementation or verification evidence]`.

## Abstraction Checklist

Before finalizing this file, confirm that:

- Project-specific names, brand voice, typography names, colors, image styles, route names, Figma node IDs, and code paths were replaced with current-project evidence.
- Each core consistency rule says what future work should preserve or avoid, not just what appeared once in the seed page.
- Structured facts that belong in tokens, component specs, layout rules, interaction rules, or evidence records are routed to those files instead of repeated here.
- Open gaps stay visible when evidence is missing.
