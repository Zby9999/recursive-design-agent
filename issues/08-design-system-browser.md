# 基于 `design-system-view.json` 的设计系统浏览器

## What to build

seed extraction 完成后，用 read-first Design System browser 替代 seed-extraction 导航。浏览器应由 `design-system-view.json` 驱动，展示 Foundations 和 Components，但不变成复杂手动编辑器。

## User stories covered

- 21
- 22
- 23
- 24
- 25
- 26
- 27
- 28
- 29
- 30
- 37

## Acceptance criteria

- [ ] 当 startup/seed extraction 被标记为完成后，左侧导航不再把 seed-extraction actions 作为主流程展示。
- [ ] Design System browser 渲染 Foundations 页面：Color、Typography、Materials、Layout、Interaction。
- [ ] browser 从 `design-system-view.json` 渲染 Components inventory 和 component detail pages。
- [ ] Foundation pages 在 view JSON 有数据时展示 semantic roles、visual samples 和 short usage notes。
- [ ] Component pages 在有数据时展示 purpose、variants、states、token links 和 preview/example data。
- [ ] 不存在 standalone Rules page；usage rules 出现在相关 foundation 或 component page 内。
- [ ] 每个 Design System page 包含一个小型 contextual Agent sidebar，带轻量 hint，默认不暴露内部 workflow state。
- [ ] 测试验证 browser 能从 mocked `design-system-view.json` 渲染。

## Blocked by

- `06-draft-design-system-artifacts.md`
