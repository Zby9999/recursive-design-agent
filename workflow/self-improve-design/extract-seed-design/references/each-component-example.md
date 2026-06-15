# Button

Status: confirmed
Evidence: FIG-BUTTON-001, FIG-SEED-LANDING-001
Code mapping: components/ui/button.tsx
Code status: implemented
Do not use raw `<button>` for product actions unless local exception is recorded.

## Purpose
Used for explicit user actions. Button hierarchy must match action importance.

## Code link
| Field | Value |
|---|---|
| Source file | `components/ui/button.tsx` |
| Import path | `@/components/ui/button` |
| Exported component | `Button` |
| Usage examples | `components/ui/button.stories.tsx`, `app/**/page.tsx` |
| Design evidence | `FIG-BUTTON-001`, `FIG-SEED-LANDING-001` |
| Code status | implemented |
| Verification target | component source, usage examples, Storybook or browser acceptance check if available |

Use this code component whenever the product needs a Button that matches this design contract. If the code component is missing, mark `Code status: missing`, record the expected file path/API as a candidate, and do not claim the component is implemented.

## Token link
| Design concern | Token link | Code/API link | Notes |
|---|---|---|---|
| Primary fill | `color.action.primaryBg`, `color.action.primaryFg` | `variant="primary"` | highest-emphasis action |
| Secondary treatment | `color.action.secondaryBg`, `color.action.secondaryFg`, `color.action.secondaryBorder` | `variant="secondary"` | lower-emphasis action |
| Ghost hover | `color.interaction.hover` | `variant="ghost"` hover state | toolbar and nav actions |
| Button height | `size.button.sm`, `size.button.md`, `size.button.lg` | `size="sm"`, `size="md"`, `size="lg"` | must match size table |
| Horizontal padding | `space.button.smX`, `space.button.mdX`, `space.button.lgX` | button size styles | no layout shift between states |
| Icon gap | `space.button.iconGap` | leading/trailing icon slot | keep icon and label aligned |
| Radius | `radius.button` or `radius.pill` | root class / variant style | clarify if pill is global or CTA-only |
| Label text | `typography.label.sm`, `typography.label.md`, `typography.label.lg` | label class / text style | match label style in size table |
| Focus ring | `color.ring.focus`, `size.ring.focus`, `space.ring.offset` | `focus-visible` style | must remain visible |
| Motion | `motion.duration.fast`, `motion.easing.standard` | hover/active/loading transition | duration <= motion.fast for press feedback |

## Props/API mapping
| Design field | Code prop / slot | Example |
|---|---|---|
| Variant | `variant` | `<Button variant="primary">Start</Button>` |
| Size | `size` | `<Button size="md">Continue</Button>` |
| Disabled state | `disabled` | `<Button disabled>Submit</Button>` |
| Loading state | `loading` or `aria-busy` pattern | `<Button loading>Saving</Button>` |
| Leading icon | `leadingIcon` or children slot | `<Button leadingIcon={<Plus />}>New</Button>` |
| Trailing icon | `trailingIcon` or children slot | `<Button trailingIcon={<ArrowRight />}>Next</Button>` |

## Anatomy
- Root container
- Label
- Optional leading icon
- Optional trailing icon
- Loading spinner, when async

## Implementation contract
- `variant` must cover the confirmed design variants: `primary`, `secondary`, `ghost`.
- `size` must cover the confirmed sizes: `sm`, `md`, `lg`.
- Icon slots must preserve the spacing and alignment defined in Anatomy and Sizes.
- `disabled` and `loading` must be component-level states, not one-off page styling.
- Any change to variants, sizes, states, or anatomy must update both this design record and the mapped code component.
- If a page needs behavior outside this contract, record a local exception before adding custom markup or raw elements.

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
