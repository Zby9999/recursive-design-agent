# 语义事件日志与研究导出包

## What to build

提供 MVP 的 research data path。重要的 alignment、prototype、preview、rule-update、export actions 应被记录为 semantic events，并在用户选择的项目文件夹中导出为 `.map/export/` 下的 JSON/JSONL package。

## User stories covered

- 56
- 57
- 58
- 59
- 60
- 61
- 71

## Acceptance criteria

- [ ] Bridge 记录 project creation、folder selection、agent tasks、evidence packages、annotations、question cards、designer answers、design-system generation、preview、prototype runs、rule-update proposals、confirmations、cancellations、export generation 等可用语义事件。
- [ ] event system 明确不记录低层 UI 噪声，例如每一次 pan、zoom、hover 或 keystroke。
- [ ] events 被索引到 SQLite 或等价 durable state，并可写出/导出为 JSONL。
- [ ] export action 创建 `.map/export/`，至少包含 `events.jsonl`、`project-summary.json`、`alignment-questions.json`、`designer-answers.json`、`prototype-runs.json`、`rule-update-proposals.json`、`artifacts-index.json`。
- [ ] 在有对应 identifiers 时，导出的 prototype runs 和 rule updates 能链接回相关 answers、design-system versions 或 triggering feedback。
- [ ] Web App 提供最小 export action 和 completion status。
- [ ] 测试验证 mocked completed workflow 能创建 export files。

## Blocked by

- `02-project-folder-map-metadata.md`
- `05-seed-alignment-question-gate.md`
- `07-seed-prototype-live-preview.md`
- `09-contextual-rule-update-proposals.md`
- `10-human-intent-new-prototype.md`
