# Button

Status: confirmed
Evidence: FIG-BUTTON-001, FIG-SEED-LANDING-001
Code mapping: components/ui/button.tsx
Do not use raw `<button>` for product actions unless local exception is recorded.

## Purpose
Used for explicit user actions. Button hierarchy must match action importance.

## Anatomy
- Root container
- Label
- Optional leading icon
- Optional trailing icon
- Loading spinner, when async

## Variants
| Variant | Intent | Visual treatment | Token usage | Allowed locations |
|---|---|---|---|---|
| primary | highest-emphasis action | filled bg, high contrast text | color.action.primaryBg / primaryFg | hero CTA, form submit |
| secondary | lower-emphasis action | subtle surface or outline | color.action.secondary* | secondary CTA |
| ghost | low-emphasis action | transparent, hover surface | color.interaction.hover | toolbar, nav |

## Sizes
| Size | Height | Padding X | Gap | Label style |
|---|---:|---:|---:|---|
| sm | 32px | 12px | 6px | label-sm |
| md | 40px | 16px | 8px | label-md |
| lg | 48px | 20px | 8px | label-md / label-lg |

## States
| State | Required behavior |
|---|---|
| hover | background shifts one semantic step, no layout shift |
| active | slight press feedback, duration <= motion.fast |
| focus-visible | visible ring using token ring/focus |
| disabled | reduced opacity, no pointer interaction |
| loading | preserve width, replace/append spinner, no label jump |

## Usage rules
Do:
- Use one primary action per local decision area.
- Keep icon size aligned with button size.

Do not:
- Invent one-off button color.
- Use destructive styling for non-destructive actions.
- Use shadow as the default button emphasis unless specified.

## Open questions
- Is pill radius global or only hero CTA?
