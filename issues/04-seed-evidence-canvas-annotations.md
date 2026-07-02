# Seed Evidence 画布与锚定标注

## What to build

加入第一个 seed-extraction workbench 路径。设计师可以提供 Figma seed reference，mocked AgentAdapter 返回 seed evidence package，包括视觉表面、evidence anchors 和 annotations，Web App 将它们渲染到 tldraw-powered canvas 上。

## User stories covered

- 1
- 4
- 5
- 6
- 17
- 18
- 74

## Acceptance criteria

- [ ] Web App 允许设计师从 Figma seed reference 开始，同时把真实 Figma MCP ingestion 委托给外部 Agent 边界。
- [ ] mocked adapter 返回 deterministic evidence package，其中包含 seed visual surface、anchor data 和 annotation data。
- [ ] 中心工作区在 tldraw canvas 上渲染 seed visual surface；早期实现如果先用等价 canvas shell，也要保留替换为 tldraw 的路径。
- [ ] annotation type 在视觉上可区分：question、assumption、observed fact、generalization risk。
- [ ] 每个 annotation 都链接到 local region、Figma node 或 whole-frame anchor。
- [ ] 记录 `evidence package returned` 和 `annotation created` 语义事件。
- [ ] 测试验证 mocked evidence 与 annotations 来自 Bridge 数据，而不是 UI hardcoded fixtures。

## Blocked by

- `02-project-folder-map-metadata.md`
- `03-mocked-agent-task-runner.md`
