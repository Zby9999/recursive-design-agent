# Phase 2 Implementation Notes

## Scope

- Implemented a first local static Project Detail prototype under `prototype/`.
- Used existing project data subject: Project 01, `Jacquemus`, `2025 Spring/Summer`, image `../public/assets/project-01.jpg`.
- Included Header Navigation, one large hero image area, project metadata, supporting editorial text, local placeholder related-project navigation, and Site Footer.
- Kept the prototype in the editorial fashion portfolio domain.
- Formal design-system files remained read-only.
- No formal design-system update was approved or applied.
- No `workflow/decision-evidence/` folder was created.

## Delegation Evidence

- Phase 1 Context Packet used a real delegation tool: `codex exec` child thread `019ec6eb-8b4a-7933-b8e3-7da185e5eadc`.
- Phase 1 outputs were persisted to:
  - `test-artifacts/context-packet.md`
  - `test-artifacts/context-packet-report.md`
- Phase 2 helper used a real delegation tool: `codex exec` child thread `019ec6f0-5fbb-7413-a760-14aa93c949dc`.
- Phase 2 helper output was persisted to:
  - `test-artifacts/phase-2-helper-report.md`

## Token Paths And Values Used

- `color.surface.page`: `#FFFFFF`
- `color.surface.inverse`: `#000000`
- `color.text.primary`: `#000000`
- `color.text.inverse`: `#FFFFFF`
- `color.focus.outline`: `#000000`
- `color.focus.outlineInverse`: `#FFFFFF`
- `typography.fontFamily.component`: `"NATS", system-ui, sans-serif`
- `typography.fontFamily.systemFallback`: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`
- `typography.textStyle.navLink`: `16px`, `lineHeight: 1`, `fontWeight: 400`, `letterSpacing: 0`, `textTransform: uppercase`
- `typography.textStyle.pageTitle`: `24px`, `lineHeight: 0.95`, `fontWeight: 400`, `letterSpacing: -0.48px`, `textTransform: uppercase`
- `typography.textStyle.projectMeta`: `16px`, `lineHeight: 0.8`, `fontWeight: 400`, `letterSpacing: -0.32px`, `textTransform: uppercase`
- `typography.textStyle.footerMeta`: `16px`, `lineHeight: 1`, `fontWeight: 400`, `letterSpacing: 0`, `textTransform: uppercase`
- `typography.textStyle.footerInitials`: desktop base `605px`, `lineHeight: 1`, `fontWeight: 400`, `letterSpacing: -12.1px`, `textTransform: uppercase`
- `typography.textStyle.editorialBody`: `16px`, `lineHeight: 1`, `fontWeight: 400`, `letterSpacing: -0.32px`, `maxLineLength: 595px`, `textTransform: none`
- `space.page.paddingXDesktop`: `20px`
- `space.page.paddingBottomDesktop`: `20px`
- `space.nav.paddingTop`: `20px`
- `space.nav.paddingBottom`: `30px`
- `space.nav.linkGap`: `10px`
- `space.nav.linkPaddingX`: `5px`
- `space.nav.linkPaddingY`: `3px`
- `space.project.columnGapDesktop`: `50px`
- `space.project.rowPaddingBottomDesktop`: `90px`
- `space.project.featuredImageToMetaGapDesktop`: `50px`
- `space.footer.paddingXDesktop`: `40px`
- `space.footer.paddingYDesktop`: `30px`
- `space.footer.gap`: `20px`
- `space.footer.upperPaddingBottom`: `100px`
- `space.footer.middleGap`: `120px`
- `size.canvas.contentWidthDesktop`: `calc(100vw - 40px)`
- `size.nav.heightDesktop`: `62px`
- `size.project.imageHeightDesktop`: `543px`
- `size.footer.heightDesktop`: `auto with min-height max(360px, calc((100vw - 40px) * 728 / 1240))`
- `imageCrop.project01UpperBodyAnchor`: `56% 75%`
- `radius.image`: `0px`
- `radius.surface`: `0px`
- `shadow.none`: `none`
- `opacity.disabled`: `0.4`
- `motion.hover`: `none`
- `breakpoint.mobile`: `deferred`; no formal mobile design-system rule was promoted.

## Candidate Q&A Evidence Weighting

- Explicit designer answers from `workflow/design-system/design-system-candidate.md` were carried as confirmed designer evidence.
- Confirmed answers applied:
  - Footer must appear on every page.
  - Photos must keep original color.
  - Future project detail text must stay small and strictly aligned.
  - Footer initials should use responsive token behavior.
  - Header Navigation and Footer are normative components.
  - Images can click through to detail pages, but no hover motion should be added.
  - Prototype links may remain placeholders.
  - Focus outline is allowed.
  - Project titles render visually uppercase.
  - Editorial paragraphs use `16px`, `595px` line length, and preserve case.
- Unresolved or unapproved candidate material remained candidate/open gap:
  - No confirmed Project Detail page archetype.
  - No formal related-project navigation component or rule.
  - Mobile layout remains deferred.
  - Current/active navigation state remains unformalized.
  - Loading, empty, and error states remain open.

## Implementation Precedent Used

- Reused existing Header Navigation structure and text-only link behavior.
- Reused existing Site Footer structure with inverse surface, metadata rows, social links, and oversized initials.
- Reused Portfolio Image behavior: original-color image, clickable anchor, rectangular frame, `object-fit: cover`, no hover visual effect.
- Reused Editorial Text roles: `pageTitle`, `projectMeta`, `editorialBody`, `footerMeta`, and `footerInitial`.
- Reused Project Item evidence only as index-entry precedent for metadata and related work references; did not promote Project Detail as a reusable component.

## Open Gaps For Phase 3A Review

- Project Detail composition is local prototype judgment because no confirmed project-detail archetype exists.
- Related-project navigation is a local placeholder pattern for this prototype only.
- Mobile behavior is a survival adaptation for review, not a formalized mobile rule.
- Supporting editorial copy is prototype content and should be reviewed for tone and line breaks.

## Browser Verification

- Served the sandbox root locally at `http://127.0.0.1:4174/` and opened `http://127.0.0.1:4174/prototype/`.
- Initial Playwright bundled Chromium launch failed because the bundled executable was not installed.
- Re-ran verification with installed system Chrome at `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`.
- Desktop screenshot written to `test-artifacts/project-detail-desktop.png`.
- Mobile screenshot written to `test-artifacts/project-detail-mobile.png`.
- Desktop viewport checked: `1440x1200`.
- Mobile viewport checked: `390x1000`.
- Both viewport checks reported:
  - hero image loaded;
  - NATS font check passed;
  - no horizontal overflow;
  - footer visible;
  - `pageTitle` rendered at `24px` uppercase;
  - `editorialBody` rendered at `16px` with `textTransform: none`.

## Phase 3A Current-Surface Fix

- Designer feedback applied directly without formal design-system changes.
- Reduced explanatory/marketing tone in supporting editorial text.
- Replaced supporting copy with compact project-note / production-metadata language while preserving `editorialBody` at `16px`, max line length `595px`, and case-preserved behavior.
- Kept hero image and footer structure as-is.
- Kept related navigation as local placeholder links and changed labels from generic previous/next language to project-index language: `02 / Acne Studios / 2024 autumn/fall` and `07 / Burberry / 2022 fall`.
- Refreshed desktop and mobile screenshots:
  - `test-artifacts/project-detail-desktop.png`
  - `test-artifacts/project-detail-mobile.png`
- Verification after the fix reported loaded hero image, no horizontal overflow, NATS font availability, `editorialBody` at `16px`, and `textTransform: none` on both desktop and mobile.
