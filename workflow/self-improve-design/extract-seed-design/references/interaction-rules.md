# Interaction Rules

Status: seed-draft
Evidence: FIG-SEED-LANDING-001, FIG-BUTTON-001
Token mapping: tokens/motion.json, tokens/interaction.json
Code mapping: components/ui/focus-ring.tsx, components/ui/skeleton.tsx, lib/motion.ts, lib/interaction-states.ts

## Global principles
- Interaction feedback must be visible but quiet.
- No layout shift on hover, loading, validation, or async state.
- State changes should use existing motion tokens.
- Keyboard focus must be visible for all interactive elements.

## Token link
| Interaction concern | Token link | Code/API link | Notes |
|---|---|---|---|
| Hover feedback | `color.interaction.hover`, `motion.duration.fast`, `motion.easing.standard` | `getInteractionState("hover")` | visible but quiet |
| Active feedback | `color.interaction.active`, `motion.duration.fast`, `motion.easing.standard` | `getInteractionState("active")` | press feedback without reflow |
| Focus-visible | `color.ring.focus`, `size.ring.focus`, `space.ring.offset` | `<FocusRing />` or focus utility class | must be keyboard visible |
| Disabled | `opacity.disabled`, `color.text.disabled` | `disabled` prop / state class | preserve layout |
| Loading | `motion.duration.base`, `color.background.surface` | `<Skeleton />`, spinner primitive, `aria-busy` | reserve space |
| Empty | `color.text.secondary`, `space.emptyState.*` | `<EmptyState />` | local panel unless page-level empty |
| Error | `color.feedback.error`, `color.feedback.errorBg` | form validation primitive | keep user input available |

## Code link
| Field | Value |
|---|---|
| Focus primitive | `components/ui/focus-ring.tsx` |
| Loading primitive | `components/ui/skeleton.tsx` |
| Motion helper | `lib/motion.ts` |
| State style helper | `lib/interaction-states.ts` |
| Usage examples | `components/ui/button.tsx`, `components/cards/interactive-card.tsx`, `components/forms/field.tsx` |
| Verification target | keyboard tab pass, hover pass, loading/empty/error state checks |

## State matrix

| State | Visual rule | Motion | Layout rule | Applies to |
|---|---|---|---|---|
| hover | use accent / subtle surface token | motion.fast | no size change | buttons, cards, rows |
| active | pressed feel; slight contrast increase | motion.fast | no reflow | buttons, nav items |
| focus-visible | ring token, offset where needed | none or fast | must not be clipped | all controls |
| disabled | lower contrast, cursor not-allowed | none | preserve layout | form controls, buttons |
| loading | spinner or skeleton based on region size | base | reserve space | async surfaces |
| empty | explanation + next action | none | center only in local panel, not whole page unless page-level empty | lists, dashboards |
| error | destructive token + recovery action | none/base | keep user input | forms, fetch panels |

## Component-specific interactions
### Interactive card
- Hover may reveal secondary affordance only if evidence confirms.
- Title and metadata must remain readable in all states.
- Do not promote one card hover pattern globally unless repeated evidence exists.

## Acceptance checks
- Tab through page; every focusable element has visible focus.
- Hover every interactive card; no unexpected reflow.
- Trigger loading and empty states where applicable.
- Trigger validation error; input value remains available.
