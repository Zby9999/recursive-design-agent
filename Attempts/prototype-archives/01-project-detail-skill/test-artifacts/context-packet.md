## Context Packet

### Retrieval Framing
- page purpose: Project Detail page prototype within the existing editorial portfolio system.
- user task: retrieve evidence-bound constraints only; no design, composition, implementation, or file changes.
- page pattern hypothesis: nearest archetype: editorial portfolio project detail; confidence: medium; retrieval purpose: retrieval hint only; confirmed archetype rules found: no; fallback rule sources: formal component specs, layout rules, interaction rules, token file, approved evidence registry.
- retrieval priorities: claim-level evidence status normalization for `design-system-candidate.md`; summary-level relevant token paths/values from `token.json`; confirmed header, footer, image, editorial text, and project-entry constraints.
- design-system constraints: stay in fashion/editorial portfolio domain; black/white editorial system; photography carries primary expression; compact text; NATS only through approved components; footer is required on every page.
- known open gaps: no confirmed Project Detail page-level archetype; mobile layout remains deferred; current/active nav state not formalized; no dedicated related-project navigation rule; loading/empty/error states not formalized; production component package not established.

### Rule Context
- applicable confirmed rules:
  - `design-system.md`: formalized editorial portfolio seed system; preserve black/white system by default; do not introduce accent colors, gradients, cards, borders, shadows, badges, decorative chrome, or dark mode without new approved evidence.
  - `design-reference-list.md`: explicit designer answers are formalized evidence, including footer required on every page, original-color photos, cursor-only hover, visible focus outline, disabled opacity at `0.4`, and placeholder links allowed in the first prototype.
  - `design-system-candidate.md`: claim-level confirmed designer answers include: footer must appear on every page; photos keep original color; future project detail text remains small and strictly aligned; footer initials should be responsive; semantic token naming preferred; header/footer are normative components; image/detail links are clickable with no hover motion; focus outline is allowed; project titles render visually uppercase; editorial paragraphs use `16px` and `595px` line length with case preserved.
  - Formal component scope: Header Navigation, Editorial Text, Project Item, Portfolio Image, and Site Footer are formalized.
- relevant generic rules:
  - Use formalized global layout/interaction defaults where no Project Detail rule exists.
  - Treat unresolved page-specific needs as designer-alignment gaps, not inferred system rules.
  - Candidate inferences from `design-system-candidate.md` remain reference-only unless formalized or explicitly answered by the designer.
- relevant components or patterns:
  - Header Navigation: formalized top navigation; compact brand mark and text links; mobile/current state open.
  - Site Footer: formalized required footer; inverse surface; oversized initials; additional social-link wrapping open.
  - Portfolio Image: formalized rectangular image frame; original-color photos; `object-fit: cover`; fixed `543px` image frame height; project 01 crop anchor is asset-specific only.
  - Editorial Text: formalized NATS text roles, including `editorialBody` for future paragraphs.
  - Project Item: formalized only for `split` and `featured` portfolio work entries; additional variants remain open.
- token categories:
  - color: `color.surface.page=#FFFFFF`, `color.surface.inverse=#000000`, `color.text.primary=#000000`, `color.text.inverse=#FFFFFF`, `color.focus.outline=#000000`, `color.focus.outlineInverse=#FFFFFF`.
  - typography: `typography.fontFamily.component="NATS", system-ui, sans-serif`; `navLink` 16px uppercase; `pageTitle` 24px uppercase; `projectMeta` 16px uppercase; `footerMeta` 16px uppercase; `footerInitials` 605px desktop; `editorialBody` 16px, line-height 1, max line length 595px, no transform.
  - spacing: `space.page.paddingXDesktop=20px`, `space.page.paddingBottomDesktop=20px`, `space.nav.paddingTop=20px`, `space.nav.paddingBottom=30px`, `space.nav.linkGap=10px`, `space.project.columnGapDesktop=50px`, `space.project.rowPaddingBottomDesktop=90px`, `space.project.featuredImageToMetaGapDesktop=50px`, footer padding/gaps `40px`, `30px`, `20px`, `100px`, `120px`.
  - size: `size.canvas.contentWidthDesktop=calc(100vw - 40px)`, `size.nav.heightDesktop=62px`, `size.header.heightDesktop=523px`, `size.project.columnWidthDesktop=calc((100vw - 40px - 50px) / 2)`, `size.project.imageHeightDesktop=543px`, `size.footer.heightDesktop=auto with min-height max(360px, calc((100vw - 40px) * 728 / 1240))`.
  - image/radius/shadow/state: `imageCrop.project01UpperBodyAnchor=56% 75%` asset-specific; `radius.image=0px`; `radius.surface=0px`; `shadow.none=none`; `opacity.disabled=0.4`; `motion.hover=none`; `breakpoint.mobile=deferred`.
- interaction and state expectations:
  - hover: cursor-only; no animation, recolor, underline, scale, filter, overlay, or layout shift.
  - focus-visible: visible outline using page or inverse focus token.
  - disabled: 40% opacity and no pointer interaction.
  - active/current/loading/empty/error: open gaps; do not infer one-off styling.

### Evidence Ledger
| Source | Why loaded | Confidence | Status |
|---|---|---|---|
| `workflow/design-system/design-system.md` | Formal entrypoint, hierarchy, global constraints, open gaps | high | confirmed |
| `workflow/design-system/design-reference-list.md` approved evidence | Evidence registry and designer answer excerpts | high | confirmed |
| `workflow/design-system/design-reference-list.md` evidence gaps | Mobile, state, production-package, and footer-link limits | high | open gap |
| `workflow/design-system/component-list.md` | Formal component inventory and phase corrections | high | confirmed |
| `workflow/design-system/layout-rules.md` | Page shell, image frame, footer, responsive limits | high | confirmed |
| `workflow/design-system/interaction-rules.md` global/state matrix | Hover, focus, disabled behavior | high | confirmed |
| `workflow/design-system/interaction-rules.md` open states | Active/current/loading/empty/error and mobile interaction gaps | high | open gap |
| `workflow/design-system/token.json` formalized tokens | Relevant token paths and values | high | confirmed |
| `workflow/design-system/token.json` `breakpoint.mobile` | Mobile breakpoint value is deferred | high | open gap |
| `workflow/design-system/design-system-candidate.md` explicit `回答` claims | Designer answers embedded in candidate/question-answer evidence | high | confirmed |
| `workflow/design-system/design-system-candidate.md` unresolved questions and reasonable inferences | Candidate-only observations and unresolved variant/mobile claims | medium | candidate / open gap |
| `workflow/design-system/component-spec/header-navigation.md` | Header/navigation constraints and gaps | high | confirmed |
| `workflow/design-system/component-spec/site-footer.md` | Required footer constraints and gaps | high | confirmed |
| `workflow/design-system/component-spec/portfolio-image.md` | Image treatment, crop, link, and frame constraints | high | confirmed |
| `workflow/design-system/component-spec/editorial-text.md` | Text role and editorial body constraints | high | confirmed |
| `workflow/design-system/component-spec/project-item.md` | Portfolio work-entry variants and related limits | high | confirmed |

### Evidence Use Guidance
- confirmed rules: Treat formalized files and explicit designer answers/approvals as strong constraints for Phase 2 alignment.
- generic rules: Apply only as broad defaults where no Project Detail rule exists.
- candidate patterns: Use only as reference; do not promote unresolved candidate observations or inferred patterns into page rules.
- open gaps: Keep visible for designer alignment, especially Project Detail archetype, related-project navigation behavior, mobile layout, current nav state, added footer-link wrapping, and async/error states.
- code evidence: Component specs cite prototype code paths, but source code was not loaded in this read-only context packet; treat cited code as prototype evidence only.
- missing evidence: No expected design-system file loaded here was empty. Missing coverage is page-pattern evidence, not absent files.

### Search Limits
- searched but not relevant: `workflow/design-system/.DS_Store` was identified but not read.
- not searched: `src/`, `prototype/`, `test-artifacts/`, local assets, verification images, external URLs, and any archive or `old-system*` path.
- reason: user requested a read-only Context Packet with no implementation or design proposal; required verification focused on design-system evidence, candidate status normalization, and token summary. Five component specs were read because the stated page intent directly references header/navigation, footer, hero/project image, editorial text, and related project/work-entry constraints.

## Verification Notes
- Claim-level normalization was applied to `workflow/design-system/design-system-candidate.md`: explicit designer `回答` claims were carried as confirmed designer evidence; unresolved questions, agent inferences, and "no clear statement" variant material remained candidate/open gap.
- Token extraction used `sed` plus a read-only Node JSON parse because `jq` was unavailable; reported token paths/values are from `workflow/design-system/token.json`.
- No files were edited, created, moved, deleted, or written by the subagent; no design/prototype work was performed; no `old-system*` archive was touched.
