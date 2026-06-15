# Editorial Portfolio Design System

Status: formalized
Last checked: 2026-06-11
Source evidence: FIG-DESKTOP-0-81, PROTO-LOCAL-2026-06-09, DESIGNER-APPROVAL-2026-06-11

This is the entrypoint for future design and implementation work using the Amélie Dupont editorial portfolio seed system.

## Read Order

Follow this order when making or reviewing design decisions:

1. Engineering artifacts when they exist: prototype source in `src/`, local assets in `public/`, and build/verification outputs.
2. Machine-readable system files: `workflow/design-system/token.json`, then `workflow/design-system/component-list.md`.
3. Component contracts: `workflow/design-system/component-spec/*.md`.
4. Layout and interaction rules: `workflow/design-system/layout-rules.md`, then `workflow/design-system/interaction-rules.md`.
5. Evidence registry: `workflow/design-system/design-reference-list.md`.
6. This file for high-level design judgment and exception boundaries.

If files conflict, prefer implemented code and machine-readable tokens for concrete values, then component specs for reusable boundaries, then this file for intent and judgment.

## File Roles

| File | Use it for | Do not use it for |
|---|---|---|
| `token.json` | formal semantic values for color, typography, spacing, sizing, radius, shadow, and interaction primitives | broad design philosophy or new values not evidenced |
| `component-list.md` | component inventory, status, spec links, and code status | full component anatomy |
| `component-spec/*.md` | anatomy, variants, states, token links, usage rules, and code links | global layout philosophy |
| `layout-rules.md` | page shell, project rhythm, spacing relationships, responsive boundaries | interaction states or component API |
| `interaction-rules.md` | hover, focus, disabled, placeholder links, and state gaps | layout measurements |
| `design-reference-list.md` | source scope, approved evidence, exclusions, prototype evidence, open gaps | unapproved inference |

## Core Consistency Rules

1. The system is image-led: large project photography carries the visual expression, while surrounding text behaves like an index.
2. Keep the interface editorial and restrained; avoid SaaS-like panels, card stacks, badges, buttons, icon systems, or explanatory UI chrome.
3. Use black, white, and component-state gray treatment only; do not introduce accent colors unless a future approved component requires them.
4. Preserve original photo color and crop intent; do not grayscale, tint, overlay, blur, mask, or decorate images by default.
5. Let hierarchy come from scale contrast, whitespace, alignment, and image placement rather than decoration.
6. Treat short metadata as the dominant writing mode: project number, brand/client, season/year, name, role, location, and social labels.
7. Keep type quiet and systematic: NATS is the primary voice, text is usually uppercase, and paragraph-style writing is reserved for detail-page contexts.
8. Use the footer as a required brand signature on every page; the oversized author initials are a structural identity moment, not optional decoration.
9. Project layouts are limited to the formal split and featured variants until new evidence justifies another variant.
10. Interactions should feel almost static: no hover animation, no previews, no decorative feedback, with cursor and visible focus carrying affordance.

## Formalized Scope

- Desktop seed page layout and visual language.
- Header Navigation, Project Item, Portfolio Image, and Site Footer components.
- Placeholder link behavior for the prototype stage.
- Local React + TypeScript + TailwindCSS prototype as visual validation evidence.

## Open Gaps

- Full mobile and tablet design-system variants.
- Detail-page body text line-height and long-form editorial rhythm.
- Expanded nav and social link count variants.
- Real route and external URL mapping.
- Loading, empty, and error states for future dynamic surfaces.
