# Draft Design-System 文件与 View JSON

## What to build

当所有 seed alignment questions 都回答后，运行 mocked draft design-system task，创建项目本地 design-system source files、共享 evidence registry，以及供 Browser UI 稳定渲染的 derived `design-system-view.json`。

## User stories covered

- 22
- 36
- 37
- 38
- 42
- 43
- 56
- 57
- 59
- 61

## Acceptance criteria

- [ ] Ikran Runtime 只在 seed alignment gate 完成后启动 draft design-system task。
- [ ] mocked adapter 在用户选择的项目文件夹内写入 source-of-truth files，包括 Markdown design-system files、`token.json`、component inventory data 和 `workflow/design-evidence/registry.md`。
- [ ] mocked adapter 同时写入 `workflow/design-system/design-system-view.json`，作为 derived UI-facing artifact。
- [ ] Browser UI 从 `design-system-view.json` 读取 Design System browser 数据，而不是解析 Markdown tables。
- [ ] 所有生成 artifacts 都保留在用户选择的本地项目文件夹内。
- [ ] 记录 `draft design system generated` 和 `design-system-view generated` 语义事件。
- [ ] 测试验证预期 artifacts 被创建，并且 Browser UI 可以从 view JSON 渲染基础 design-system 状态。

## Blocked by

- `05-seed-alignment-question-gate.md`
