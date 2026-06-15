# Layout Rules

Status: seed-draft
Evidence: FIG-SEED-LANDING-001
Token mapping: tokens/layout.json, tokens/space.json, tokens/breakpoint.json
Code mapping: components/layout/page-shell.tsx, components/layout/container.tsx, components/layout/section.tsx, components/layout/grid.tsx

## Page shell
- Desktop max content width: ...
- Page padding: desktop ..., tablet ..., mobile ...
- Background behavior: ...
- Top nav position: static / sticky / transparent over hero

## Token link
| Layout concern | Token link | Code/API link | Notes |
|---|---|---|---|
| Page background | `color.background.page` | `<PageShell background="page" />` | global page surface |
| Section background | `color.background.surface` | `<Section surface="default" />` | local content bands |
| Content max width | `layout.container.maxWidth` | `<Container size="default" />` | desktop reading width |
| Page padding | `layout.page.padding.desktop`, `layout.page.padding.tablet`, `layout.page.padding.mobile` | `<PageShell padding="responsive" />` | responsive outer margin |
| Grid columns | `layout.grid.columns.marketing`, `layout.grid.columns.dashboard` | `<Grid columns={12} />` | match surface type |
| Grid gap | `space.grid.marketing`, `space.grid.dashboard` | `<Grid gap="marketing" />` | avoid one-off gaps |
| Section spacing | `space.section.heroToNext`, `space.section.denseGroup` | `<Section spacing="heroAfter" />` | preserve scroll rhythm |
| Breakpoints | `breakpoint.sm`, `breakpoint.md`, `breakpoint.lg`, `breakpoint.xl` | responsive layout styles | use same breakpoint source as code |

## Code link
| Field | Value |
|---|---|
| Page shell | `components/layout/page-shell.tsx` |
| Container | `components/layout/container.tsx` |
| Section | `components/layout/section.tsx` |
| Grid | `components/layout/grid.tsx` |
| Usage examples | `app/(marketing)/page.tsx`, `app/(dashboard)/layout.tsx` |
| Verification target | responsive browser checks, Storybook layout examples, route-level screenshots |

## Grid
| Surface | Columns | Gap | Max width | Notes |
|---|---:|---:|---:|---|
| marketing section | 12 | 24px | 1200px | use for landing sections |
| dashboard | 12 | 16px | fluid | keep left nav fixed |

## Section spacing
| Relationship | Desktop | Mobile | Rule |
|---|---:|---:|---|
| hero to next section | 96px | 56px | maintain clear scroll rhythm |
| dense content groups | 32px | 24px | use when visually grouped |

## Responsive rules
- Mobile stacks cards vertically unless a carousel pattern is confirmed.
- Preserve content hierarchy before preserving decorative layout.
- Avoid hiding primary actions on mobile.
