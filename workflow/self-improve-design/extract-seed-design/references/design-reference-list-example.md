# Design Reference

## Approved evidence

| Evidence ID | Source type | Source locator | Figma page / node | URL | Screenshot | Evidence excerpt / block | Scope | Status | Approved by | Last checked |
|---|---|---|---|---|---|---|---|---|---|---|
| FIG-SEED-LANDING-001 | Global page | Figma file, approved seed page | Landing / Desktop | ... | ... | n/a | page shell, typography, CTA hierarchy | confirmed | user | 2026-xx-xx |
| FIG-BUTTON-001 | Component focus | Figma file, approved component set | Button variants | ... | ... | n/a | button shape, label style, hover | confirmed | user | 2026-xx-xx |
| DESIGNER-GATE-2026-06-09 | Written designer answers | current thread, three-gate alignment answer block | n/a | n/a | n/a | See `DESIGNER-GATE-2026-06-09` below | semantic intent, interaction rules, placeholder links, typography intent, component scope | confirmed | designer | 2026-06-09 |

## Designer answer excerpts

Use this section when the evidence source is a designer answer, correction, or approval. `current thread` is only a locator; preserve the short content needed to audit the decision later.

### DESIGNER-GATE-2026-06-09

Source locator: current thread, three-gate alignment answers, 2026-06-09

Captured content:
- [Paste or summarize the designer answer that justifies the design-system decision.]
- [Keep only the wording needed to audit semantic intent, interaction rules, token meaning, component scope, or approval.]

## Evidence interpretation rules

### Can infer
- Repeated colors, spacing, typography, radii, shadows.
- Component anatomy and variant boundaries.
- Layout rhythm and responsive behavior when inspected.

### Cannot infer
- Global dark mode unless dark evidence exists.
- New gradient family from one decorative asset.
- Interaction behavior not visible in screenshot unless Figma prototype or user correction confirms it.

## Evidence gaps
| Gap | Affected area | Why it matters | Needed confirmation |
|---|---|---|---|
| Mobile nav open state missing | navigation | cannot define menu motion/state | provide mobile nav frame or approve assumption |
