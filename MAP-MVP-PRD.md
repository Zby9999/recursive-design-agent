# Ikran MVP PRD

Status: ready-for-agent
Target: one-month usable research prototype
Date: 2026-06-29

## Problem Statement

Designers using agentic design workflows can already ask coding agents to produce prototypes, but the interaction is still too language-only and too detached from the design surface. When an agent does not understand a Figma seed page, the designer must infer what the agent is confused about from a chat thread. This makes design-intent alignment slow, hard to audit, and hard to turn into a durable design system.

The existing Recursive Design Method already defines the right workflow: start from a Figma seed page, align intent, extract a bidirectionally readable design system, reconstruct the seed as an interactive prototype to validate code/visual/semantic consistency, then use the resulting design system to create new prototypes and recursively update rules. What is missing is a usable local-first workbench that makes this workflow visible, spatial, and suitable for research data collection.

The MVP must become a full-loop research prototype within one month. It must support:

- seed page extraction,
- new design creation,
- rule recursion,
- event-log-based research data collection,
- local prototype preview,
- and a project-local design system that remains readable by both designers and agents.

The product must not become a full online IDE, a Figma replacement, or a generic AI app builder in the first month. It should be a single-project, single-flow workbench for studying recursive designer-agent alignment.

## Solution

Build Ikran as a local-first workbench that is launched through npm/npx and viewed in the user's browser. The Ikran Runtime is the local application process: it serves the Browser UI, exposes same-origin runtime APIs, owns local filesystem access, runs external coding agents such as Codex, Claude Code, or Cursor through a headless CLI adapter, and manages live prototype previews.

The product should feel like Storybook, Vite, or JupyterLab: the user starts a local tool, the tool opens a browser tab, and the browser becomes the interaction surface for a local workspace. Ikran should not be a cloud Web App that reaches into a separate local companion daemon for MVP.

The Browser UI presents:

- a tldraw-powered infinite canvas,
- a Figma seed screenshot or prototype preview as a visual working surface,
- top-stage tabs for alignment,
- a left-side project flow and question list,
- a right-side Agent sidebar for answering and refining the active question,
- a Design System browser after seed extraction completes,
- live iframe preview for prototypes,
- and minimal research export.

The Ikran Runtime manages:

- the user-selected local project folder,
- project-local `.ikran/` metadata,
- native system folder selection,
- SQLite state,
- JSONL event logs,
- Agent process execution,
- schema validation,
- local dev server lifecycle,
- preview URL/proxy,
- and research export.

The External Agent manages:

- Figma MCP ingestion using the user's configured Figma MCP,
- evidence package creation,
- seed alignment questions,
- draft design-system extraction,
- seed prototype reconstruction,
- new prototype design and creation,
- rule-update proposal generation,
- and design-system-view JSON generation.

Figma MCP is intentionally not embedded into the Ikran Runtime. The Runtime should require that the selected external Agent environment already has working Figma MCP access. This preserves performance and avoids building an inferior local Figma integration without Figma's remote MCP advantages.

## User Stories

1. As a designer, I want to start an Ikran project from a Figma seed page, so that my design language can be extracted from the source I already use.
2. As a designer, I want to select an empty local project folder, so that the agent can create the design-system files and prototype code from the seed page.
3. As a designer, I want the app to guide me through seed extraction, so that I do not need to understand the underlying Recursive Design Method file structure.
4. As a designer, I want the agent to read Figma visual and structured evidence, so that questions are grounded in real layout, component, typography, and style data.
5. As a designer, I want the agent to create annotations on the design surface, so that I can see exactly where the agent is uncertain or making assumptions.
6. As a designer, I want the agent, rather than me, to be the primary annotation initiator, so that the agent exposes its understanding state instead of making me manually label everything.
7. As a designer, I want to answer agent questions from inside the Browser UI, so that I do not need to leave the visual workspace and talk to a coding agent in another window.
8. As a designer, I want the active question to pan or zoom the canvas to the relevant evidence anchor, so that I can answer with the visual context in view.
9. As a designer, I want every question card to include an agent observation, an agent question, and my answer, so that the alignment record is easy to understand later.
10. As a designer, I want a question card to support multi-turn clarification, so that unclear answers can become a final designer answer.
11. As a designer, I want the final card state to remain simple, so that I only have to answer questions rather than classify them into many states.
12. As a designer, I want question cards to be grouped by design topic, so that I can work through alignment in a structured way.
13. As a designer, I want the seed alignment stages to include layout, component extraction, interaction style, visual style, and generalizability, so that the first design-system extraction covers the important dimensions.
14. As a designer, I want each stage to include two to five questions, so that the process is neither too shallow nor overwhelming.
15. As a designer, I want all generated questions to be required for the seed extraction gate, so that no design dimension is skipped in the research workflow.
16. As a designer, I want to answer briefly when the agent assumption is already correct, so that required coverage does not always mean heavy writing.
17. As a designer, I want every question to be anchored to a local region, Figma node, or whole frame, so that even global questions remain tied to evidence.
18. As a designer, I want annotation types to be visually distinguishable, so that questions, assumptions, observed facts, and generalization risks are easy to scan.
19. As a designer, I do not want annotation types to change completion rules, so that all cards behave consistently.
20. As a designer, I want seed extraction to happen once at project startup, so that later design work can happen through lighter rule updates and prototype feedback.
21. As a designer, I want the app to stop showing seed-extraction controls after startup is complete, so that the project shifts into design-system browsing and prototype creation.
22. As a designer, I want to view the current design system after seed extraction, so that I can understand what the agent extracted.
23. As a designer, I want the design-system browser to show important summaries and visual samples, so that I do not have to read raw files for every check.
24. As a designer, I want the design-system browser to follow a Foundations and Components structure, so that the system feels like a design system rather than a file viewer.
25. As a designer, I want Color, Typography, Materials, Layout, and Interaction pages, so that rules are explained where they belong.
26. As a designer, I do not want a separate Rules page, so that usage rules do not feel detached from foundations.
27. As a designer, I want Component inventory and Component detail pages, so that extracted components are visible and reviewable.
28. As a designer, I want each foundation page to contain semantic roles, visual samples, and short usage notes, so that the system is understandable without becoming a complex editor.
29. As a designer, I want each design-system page to include a small Agent sidebar, so that I can ask for changes in context.
30. As a designer, I want only a simple hint beside the Agent sidebar, so that internal workflow labels do not clutter the page.
31. As a designer, I want rule updates to start from the page I am already viewing, so that I do not have to navigate to a separate rule-update screen.
32. As a designer, I want the system to still run the rule-update workflow under the hood, so that changes remain governed and traceable.
33. As a designer, I want an update proposal before design-system files change, so that I can approve or reject the agent's interpretation.
34. As a designer, I want an update proposal to show what will change, why, and affected items, so that I can make a fast decision.
35. As a designer, I want Confirm and Cancel actions for rule updates, so that no design-system change is applied silently.
36. As a designer, I want the generated design system to remain readable as Markdown and JSON, so that humans and agents can both work with it.
37. As a designer, I want the Browser UI to read a generated design-system-view JSON file, so that the UI is stable and does not depend on parsing Markdown tables.
38. As a designer, I want the source-of-truth design-system files to stay in the local project folder, so that the project is portable and auditable.
39. As a designer, I want the app to create prototypes in my selected local project folder, so that prototypes are real code rather than temporary UI artifacts.
40. As a designer, I want the agent to initialize a project when the folder is empty, so that I do not need to prepare a codebase first.
41. As a designer, I want the default prototype stack to be Next.js, TypeScript, Tailwind CSS, and npm, so that the generated project uses familiar design and prototyping conventions.
42. As a designer, I want Tailwind to be an implementation layer rather than the design source, so that the design language remains governed by token and design-system files.
43. As a designer, I want token.json to drive Tailwind config generation, so that design tokens and implementation stay aligned.
44. As a designer, I want the agent to reconstruct the original seed page as a live prototype, so that code, visual output, and semantic design-system rules can be checked together.
45. As a designer, I want the prototype to be shown as a live iframe preview, so that I can see changes continuously instead of relying on screenshots.
46. As a designer, I want the preview to stay synchronized as the agent modifies code, so that the Browser UI feels like a live design workspace.
47. As a designer, I want a focus mode to open the local preview directly, so that I can experience interactions in the real prototype.
48. As a designer, I want the app to use live preview rather than screenshot history during design work, so that interaction remains central.
49. As a designer, I want to create new prototypes from human intent after the initial design system exists, so that the system can test whether extracted design language is reusable.
50. As a designer, I want optional visual reference input for new prototype creation, so that I can provide a layout reference when intent alone is not enough.
51. As a designer, I want human-intent-first new design creation to be the default, so that the research focuses on generative design from aligned design language.
52. As a designer, I want new prototype creation and rule recursion to become the main loop after seed extraction, so that the design system grows through real work.
53. As a designer, I want to give feedback on generated prototypes, so that the agent can identify where the current design system is insufficient.
54. As a designer, I want the agent to classify feedback into reusable candidates, local exceptions, conflicts, open gaps, or proposed updates, so that the design system grows without pollution.
55. As a designer, I want rule recursion to produce a proposal before applying changes, so that I remain the final decision maker.
56. As a researcher, I want every meaningful alignment action to be recorded as an event, so that I can analyze how design intent was negotiated.
57. As a researcher, I want event logs to record agent annotations, questions, designer answers, prototype runs, and rule-update proposals, so that the experiment captures process rather than only outcomes.
58. As a researcher, I want event logs to avoid low-level UI noise such as every pan and zoom, so that the data stays focused on semantic alignment.
59. As a researcher, I want prototype runs and rule updates linked back to the questions and answers that informed them, so that I can study how alignment affected output.
60. As a researcher, I want a JSON/JSONL export package, so that experiment data can be analyzed outside the app.
61. As a researcher, I want workflow files, evidence registry, prototype source, and event logs to live together in the project folder, so that a study case can be reproduced.
62. As a researcher, I want the app to support a single project and single flow in MVP, so that the experiment stays controlled.
63. As an implementer, I want the Browser UI to communicate only with the Ikran Runtime, so that browser code never directly reads or writes local files.
64. As an implementer, I want the Ikran Runtime to expose HTTP APIs and Server-Sent Events, so that Browser UI interactions and long-running Agent tasks can be tracked reliably.
65. As an implementer, I want a unified AgentAdapter interface, so that Codex, Claude Code, Cursor, SDK adapters, or future ACP adapters can be swapped without rewriting the Browser UI.
66. As an implementer, I want the first adapter to use headless CLI execution, so that MVP can reuse existing agent tools quickly.
67. As an implementer, I want the Runtime to validate all agent JSON outputs, so that invalid structures do not break the UI.
68. As an implementer, I want the Runtime to ask the agent to repair invalid output at most once, so that data quality improves without hiding errors.
69. As an implementer, I want the Runtime not to invent semantic content when agent output is invalid, so that research data remains honest.
70. As an implementer, I want project-local `.ikran/` metadata, so that app state, events, and exports travel with the study project.
71. As an implementer, I want SQLite for state/indexing and JSONL for export, so that the app is reliable while research data remains portable.
72. As an implementer, I want the Runtime to manage dev server lifecycle, so that agents do not become fragile process supervisors.
73. As an implementer, I want the agent to own design reasoning and prototype creation, so that the Runtime stays deterministic.
74. As an implementer, I want Figma MCP access to stay inside the external agent environment, so that the MVP can rely on user-configured Figma Remote MCP performance.
75. As an implementer, I want future ACP compatibility to be preserved through adapter boundaries, so that the Ikran Runtime can mature without a rewrite.
76. As a designer, I want to launch Ikran through npm/npx, so that I can use it as a local workbench without installing a cloud-connected desktop product first.
77. As a designer, I want Ikran to open in my browser automatically after launch, so that the local Runtime feels like one coherent app rather than two separate services.
78. As a designer, I want to choose a project folder through the native operating-system folder picker, so that folder selection feels trustworthy and familiar.
79. As an implementer, I want the Browser UI to communicate with the Runtime through same-origin APIs, so that Ikran avoids CORS, companion-daemon discovery, and cloud-to-local trust problems.
80. As an implementer, I want the Runtime to bind only to localhost and protect sessions with a launch-scoped token, so that local filesystem and command execution capabilities are not exposed to arbitrary web pages.
81. As a product owner, I want the same Runtime and Browser UI to be packageable as a future desktop app, so that Ikran can later move from npm/npx launch to a more polished native distribution without rewriting core workflow logic.

## Implementation Decisions

- The product name is Ikran.
- The MVP must be a complete full-loop research prototype within one month, not a partial seed-extraction-only tool.
- The MVP is single-project and single-flow. It does not support multiple projects, collaboration, or branching.
- The workflow has two lifecycle phases:
  - one-time Design System Startup through seed extraction,
  - repeated New Prototype Creation and Rule Recursion loop after startup.
- Seed extraction is not rerun in MVP. If a different seed is needed, the user creates a new project. Future design-language mix from another seed/reference is reserved for later.
- The app should follow the Recursive Design Method stage order:
  - align design intent,
  - extract seed design,
  - create new design from design system or visual reference,
  - update rules.
- The first month must include:
  - seed page extraction,
  - new design creation,
  - rule recursion.
- New design creation supports both human-intent-first and visual-reference-first inputs, but human-intent-first is primary.
- The core user is a designer; the UI should not expose unnecessary engineering state.
- Implementation will use concrete Figma page designs provided later by the user. Codex will own code and technical implementation.

### Product Shape And Launch

- Ikran is a local-first workbench, not a cloud Web App plus a local companion Runtime.
- MVP launch should be npm/npx based, for example `npx ikran`.
- Launch starts one local Ikran Runtime process and opens a browser tab to the local UI.
- The Ikran Runtime serves both the Browser UI and the Runtime API from the same local origin.
- The Browser UI communicates with the Runtime through same-origin `/api/*` endpoints and an SSE event stream.
- The Runtime should bind to `127.0.0.1` by default.
- The Runtime should not enable broad CORS in MVP.
- The Runtime should generate a launch-scoped local session token so arbitrary web pages cannot call privileged local APIs.
- The same Runtime and Browser UI should remain packageable into a future Tauri or Electron desktop app.
- Desktop packaging is a future distribution layer, not a reason to rewrite MVP workflow logic.

### Browser UI

- Use Next.js for the Browser UI.
- Use tldraw as the infinite canvas foundation.
- The UI follows the user's Figma interaction sketch:
  - top area for stage tabs,
  - left area for project flow and question list,
  - center area for design/prototype canvas,
  - right area for answering the selected question or using the Agent sidebar.
- The Browser UI never directly reads or writes local project files.
- The Browser UI communicates with the Ikran Runtime through same-origin HTTP APIs and an SSE event stream.
- The Browser UI embeds prototype previews through iframe live preview.
- The Browser UI does not store prototype code.
- The Browser UI does not run an internal model or build its own agent runtime.

### Ikran Runtime

- Use one local Ikran Runtime process to serve the Browser UI, expose Runtime APIs, and coordinate external agents.
- The Ikran Runtime exposes same-origin HTTP APIs for commands and SSE for task progress.
- The Ikran Runtime owns:
  - Browser UI serving,
  - project folder selection and validation,
  - project-local `.ikran/` metadata,
  - native system folder selection,
  - SQLite state,
  - event logging,
  - research export,
  - Agent subprocess management,
  - schema validation,
  - dev server lifecycle,
  - preview URL/proxy,
  - and deterministic task state.
- The Ikran Runtime does not embed or implement Figma MCP.
- The Ikran Runtime should require the chosen external Agent environment to have working Figma MCP access.
- The Ikran Runtime does not invent semantic content when the Agent output is malformed.
- The Ikran Runtime validates agent output and may request one repair pass.
- If repaired output is still invalid, the user must retry or switch agent.

### Local Security Model

- Ikran is local-first and should not upload project files to a cloud service in MVP.
- The Runtime should listen on `127.0.0.1` and avoid external network binding by default.
- Privileged APIs must require the launch-scoped local session token.
- Runtime APIs should only operate inside the selected project folder unless a later explicit user action expands scope.
- The Browser UI must not directly access the local filesystem.
- Agent execution, file changes, project initialization, and rule-update application must be triggered by explicit user actions or approved workflow steps.
- The Runtime should prefer fail-closed behavior when origin, session, or project-scope checks fail.

### External Agent

- MVP uses a headless CLI AgentAdapter.
- Target external agents include Codex, Claude Code, and Cursor.
- Future adapters may include provider SDK adapters and an ACP adapter.
- The adapter boundary should be ACP-shaped even though MVP does not implement full ACP.
- The Agent owns:
  - Figma MCP ingestion,
  - evidence package creation,
  - spatial annotations and question cards,
  - draft design-system extraction,
  - design-system-view JSON generation,
  - seed prototype reconstruction,
  - new prototype design and creation,
  - rule-update proposal generation,
  - and semantic file edits after designer confirmation.
- The Agent's main work is design and prototype creation, not merely code modification.
- Code editing is an implementation means for producing design/prototype outputs.

### Project Folder

- The designer provides an empty local folder.
- Folder selection should use the native operating-system folder picker where available.
- The Browser UI triggers folder selection through a Runtime API; the Runtime owns the native dialog and returns the selected path.
- If a native dialog is unavailable on a platform, MVP may fall back to a manually entered local path with validation.
- The folder is expected to contain no source code at project start.
- The Agent initializes the prototype app and workflow files inside that folder.
- The folder becomes the complete project workspace and research case.
- The project structure should include:
  - project-local `.ikran/` metadata,
  - `workflow/design-system/`,
  - `workflow/design-evidence/`,
  - prototype source code,
  - package manifest,
  - Tailwind config,
  - and generated artifacts.
- The Ikran Runtime stores runtime and research metadata under `.ikran/`.
- Suggested `.ikran/` contents:
  - SQLite app database,
  - JSONL events,
  - config,
  - artifacts,
  - export files.

### Prototype Stack

- Default generated prototype stack:
  - Next.js,
  - TypeScript,
  - Tailwind CSS,
  - npm.
- Default commands:
  - `npm install`,
  - `npm run dev`.
- Tailwind is an implementation syntax, not a design source.
- `workflow/design-system/token.json` is the design token source of truth.
- `tailwind.config.ts` is a derived implementation mapping generated by the Agent from token data.
- MVP does not require an automated token-to-Tailwind generator script.
- Future versions may replace Agent-maintained Tailwind mapping with deterministic generation.
- Do not bring in an external UI kit by default because it may pollute the extracted seed design language.

### Preview Runtime

- MVP preview runtime is iframe embedding of a local dev server.
- The Ikran Runtime starts or detects the dev server and exposes a stable preview URL.
- Prototype browsing should use live preview, not screenshot history.
- The iframe preview should update as the Agent modifies the local project.
- The Browser UI should provide a focus mode that opens the local preview URL for full interaction.
- Sandpack is reserved for future component-library previews.
- WebContainers are reserved for a future online unified platform.

### Seed Extraction UI

- The Agent is the primary annotation and question initiator.
- Designer annotations are secondary and only used when answering an intent question requires additional explanation.
- Seed alignment uses five stage tabs:
  - Layout,
  - Component Extraction,
  - Interaction Style,
  - Visual Style,
  - Generalizability.
- The Agent generates all five tabs of questions in the first seed-alignment pass.
- Each tab must contain two to five question cards.
- All cards must be answered before seed extraction can proceed.
- There is no distinction between required and warning cards in MVP.
- Card state is only:
  - unanswered,
  - answered.
- Each card includes:
  - Agent observation,
  - Agent question,
  - conversation thread,
  - final designer answer.
- The final answer is the completion source. Intermediate conversation can be logged but should not create complex UI states.
- Each card must have an evidence anchor:
  - local region,
  - Figma node,
  - or whole frame.
- Annotation types may include:
  - question,
  - assumption,
  - observed fact,
  - generalization risk.
- Annotation types are visual aids only and do not affect completion state.
- Selecting a question should pan/zoom the canvas to the corresponding evidence anchor.

### Design System Files

- Follow the structure from `recursive-design-method`.
- Source-of-truth files include:
  - `workflow/design-system/design-system-candidate.md`,
  - `workflow/design-system/design-system.md`,
  - `workflow/design-system/token.json`,
  - `workflow/design-system/component-list.md`,
  - `workflow/design-system/component-spec/`,
  - `workflow/design-system/layout-rules.md`,
  - `workflow/design-system/interaction-rules.md`,
  - `workflow/design-evidence/registry.md`.
- Add a derived UI-facing file:
  - `workflow/design-system/design-system-view.json`.
- `design-system-view.json` is generated by the Agent from source design-system files.
- `design-system-view.json` is not a source of truth and should not be directly edited.
- The Browser UI should read `design-system-view.json` for stable Design System page rendering.
- Natural-language files remain necessary because they preserve semantic intent, boundaries, and evidence interpretation.
- Structured JSON remains necessary because it stabilizes generated UI rendering.
- This dual-layer strategy keeps the design system both human-readable and UI-renderable.

### Design System Browser

- After seed extraction completes, the left navigation no longer shows seed-extraction actions.
- It instead shows access to the current design system and the working loop.
- The Design System browser is read-first and agent-edit.
- It does not offer a complex manual editor in MVP.
- The Design System browser includes:
  - Foundations,
  - Components.
- Foundations include:
  - Color,
  - Typography,
  - Materials,
  - Layout,
  - Interaction.
- Components include:
  - component inventory,
  - component detail pages.
- Do not create a standalone Rules section.
- Rules, constraints, usage boundaries, and examples must be embedded in the relevant foundation/component page.
- Each Design System page should show:
  - semantic roles,
  - visual samples,
  - short usage notes.
- Component detail pages should show:
  - purpose,
  - variants,
  - states,
  - token links,
  - and preview/example when available.
- The Design System browser can take information-architecture inspiration from Vercel Geist Foundations, but must not copy its visual identity unless a future design explicitly chooses that direction.

### Contextual Rule Update UI

- Every Design System page may show a small Agent sidebar.
- The sidebar should have an input and a lightweight instruction hint.
- The UI should not show internal context names such as current token context, evidence package, or rule-update task state unless the user explicitly expands technical detail.
- Users should be able to ask for a change while viewing the relevant Design System page.
- Technically, every design-system modification still runs through rule-update.
- Product-wise, rule-update appears as contextual Agent editing.
- The Agent returns an Update Proposal.
- The proposal shows:
  - what will change,
  - why,
  - affected items,
  - Confirm,
  - Cancel.
- Confirmed changes are applied through the Agent under Runtime orchestration.
- Canceled changes do not modify source-of-truth files.

### New Prototype Creation

- After seed extraction and initial design-system formalization, the main loop becomes:
  - create a new prototype,
  - review it,
  - update rules,
  - create the next prototype.
- Human-intent-first creation is primary.
- Visual reference input is optional.
- The Agent creates the prototype design and implementation in the local project.
- The prototype should be shown through live iframe preview.
- New prototype creation should consume the design system rather than depend only on prompt memory.

### Rule Recursion

- Rule recursion happens after prototype feedback, design-system page feedback, or review findings.
- Feedback is classified by the Agent into:
  - page-local exception,
  - reusable candidate,
  - conflict with confirmed rule,
  - open gap,
  - proposed design-system update,
  - none found.
- MVP should support proposal and confirmed application flows.
- The designer remains final decision-maker.
- The system should prefer the smallest effective update.
- Complex rule updates should be avoided unless necessary.

### Data And Research Logging

- Use SQLite for system state and event indexing.
- Use JSONL for exportable event logs.
- Use project-local artifact files for source and generated outputs.
- Event logging uses semantic event granularity, not full UI behavior recording.
- Record meaningful design-alignment events, such as:
  - project created,
  - folder selected,
  - agent task started,
  - Figma evidence package returned,
  - annotation created,
  - question card created,
  - designer answer submitted,
  - seed extraction stage completed,
  - draft design-system generated,
  - design-system-view generated,
  - seed reconstruction started,
  - preview started,
  - new prototype run created,
  - rule-update proposal created,
  - rule-update confirmed,
  - rule-update canceled,
  - export generated.
- Do not record every canvas pan, zoom, hover, or text keystroke as research events.
- Prototype runs should be linked to the answers and design-system version that informed them.
- Rule updates should be linked to the feedback or page context that triggered them.

### Research Export

- Provide a minimal research export package in `.ikran/export/`.
- Export JSON/JSONL, not a visual analytics dashboard.
- Suggested export files:
  - `events.jsonl`,
  - `project-summary.json`,
  - `alignment-questions.json`,
  - `designer-answers.json`,
  - `prototype-runs.json`,
  - `rule-update-proposals.json`,
  - `artifacts-index.json`.
- The workflow files, evidence registry, and prototype source code are also part of the reproducible research artifact.

### Agent Task Contracts

- Define stable task/result contracts between Browser UI, Ikran Runtime, and Agent.
- MVP task families:
  - Project setup task,
  - Generate seed alignment questions task,
  - Draft design system task,
  - Reconstruct seed prototype task,
  - Generate design-system view task,
  - Create new prototype task,
  - Rule update task,
  - Export research package task.
- Agent outputs must be schema-validated.
- Invalid outputs trigger:
  - invalid-output event,
  - one repair request,
  - repaired-output event if successful.
- The Runtime should not silently truncate, invent, or reinterpret design semantics.

## Testing Decisions

- The highest-value test seam is the full workflow boundary: Browser UI -> Ikran Runtime -> mocked AgentAdapter -> project artifacts -> Browser UI render.
- Prefer a single high-level integration seam over many low-level tests because the MVP risk is workflow coordination, not isolated helper functions.
- Tests should verify external behavior and durable outputs, not implementation details.
- Since the target folder currently contains research and method files rather than application code, new test seams will need to be introduced with the product implementation.

### Primary Test Seam

- Use a mocked AgentAdapter that returns deterministic evidence, question cards, design-system files, preview status, prototype run metadata, and rule-update proposals.
- Run the Browser UI against a local Ikran Runtime test instance serving the UI and APIs from the same origin.
- Use a temporary empty project folder.
- Verify that the app can complete the research workflow without a real Agent or real Figma MCP.

### Modules To Test

- Browser UI seed extraction flow:
  - stage tabs render,
  - question cards render,
  - all cards require final answers,
  - selected questions focus the evidence anchor,
  - completion gate only opens after all cards are answered.
- Ikran Runtime API:
  - project folder validation,
  - task creation,
  - SSE events,
  - agent result validation,
  - one-pass repair behavior,
  - event persistence,
  - export generation.
- AgentAdapter contract:
  - headless CLI adapter can be substituted with mock adapter,
  - task/result schemas remain stable.
- Project artifact generation:
  - `.ikran/` metadata is created,
  - `workflow/design-system/` is created,
  - `workflow/design-evidence/registry.md` is created,
  - `design-system-view.json` is created and renderable.
- Design System browser:
  - Foundations pages render from `design-system-view.json`,
  - Components pages render from `design-system-view.json`,
  - no standalone Rules page is required,
  - Agent sidebar can create an update proposal.
- Preview lifecycle:
  - dev server readiness is reflected in UI,
  - iframe receives the preview URL,
  - focus mode opens the preview URL.
- Rule update:
  - proposal is generated,
  - Confirm applies changes through the mocked Agent flow,
  - Cancel applies no changes,
  - event log records both paths.
- Research export:
  - JSON/JSONL export files are generated,
  - exported files include linked project, question, answer, prototype, and rule-update identifiers.

### Manual/Real Integration Checks

- Real Figma MCP ingestion should be tested manually with a configured external Agent environment.
- Real Codex, Claude Code, and Cursor CLI adapters can be smoke-tested one at a time.
- A real seed page should be used to verify that Figma visual evidence and structured evidence can produce card anchors.
- A real empty project folder should be used to verify Next.js/TypeScript/Tailwind/npm initialization and preview startup.
- Visual and interaction acceptance should verify that the seed reconstruction prototype can be used through live preview.

## Out of Scope

- Multi-project workspace management.
- Multi-user collaboration.
- Cloud-hosted runner.
- Cloud Web App plus local companion Runtime architecture.
- Full ACP implementation.
- Full WebContainers runtime.
- Sandpack component-library preview.
- Browser-based IDE or code editor.
- Direct Browser UI access to the local filesystem.
- Ikran Runtime implementation of Figma MCP.
- Replacing external coding agents with an in-app model runtime.
- Complex Design System manual editor.
- Standalone Rules page.
- Seed extraction rerun or seed replacement.
- Design language mixing from a new seed/reference.
- Screenshot-based prototype browsing.
- Full visual analytics/reporting dashboard.
- Full deterministic token-to-Tailwind generator script.
- General-purpose app generation outside the Recursive Design Method workflow.
- Production-grade packaging, installers, team auth, or billing.
- Production-grade desktop app packaging.

## Further Notes

- This PRD is recorded as the product source of truth before related issue files are updated.
- After the Ikran architecture is approved, related issue files should be revised to match the local workbench Runtime model.
- One-month MVP pacing should prioritize the complete research loop over polish.

### Suggested One-Month Milestones

1. Week 1: Project foundation
   - npm/npx launch path.
   - local Ikran Runtime shell.
   - Runtime-served Next.js Browser UI shell.
   - same-origin HTTP + SSE communication.
   - localhost session token.
   - project folder selection flow.
   - native folder picker spike or platform-specific MVP implementation.
   - `.ikran/` metadata creation.
   - SQLite/event log foundation.
   - mocked AgentAdapter.
   - base task/result schemas.

2. Week 2: Seed extraction workbench
   - tldraw canvas shell.
   - top five stage tabs.
   - left question list.
   - right answer panel.
   - evidence anchor model.
   - mocked Figma evidence package.
   - generated alignment questions with two to five cards per stage.
   - answer completion gate.

3. Week 3: Design-system and preview loop
   - Agent-driven project initialization in empty folder.
   - Next.js/TypeScript/Tailwind/npm prototype scaffold.
   - workflow design-system/evidence folders.
   - token.json and design-system source file creation flow.
   - design-system-view.json generation.
   - Design System browser with Foundations and Components.
   - live iframe preview from local dev server.
   - seed reconstruction flow with mocked or real Agent.

4. Week 4: New prototype and rule recursion
   - human-intent-first new prototype task.
   - optional visual reference input path.
   - rule-update Agent sidebar proposal flow.
   - Confirm/Cancel application flow.
   - export package.
   - real Agent smoke test.
   - real Figma MCP smoke test.
   - experiment-ready hardening pass.

### Product Principle

Think strategically like an extensible agent-design platform, but build tactically like a one-month research instrument. The MVP should be fast, usable, and complete enough for experiments, while leaving clean seams for ACP, Sandpack, WebContainers, design-language mixing, and richer rule recursion later.
