# 上下文 Rule-Update Proposal 流程

## What to build

让 rule recursion 以 Design System page 上的 contextual Agent editing 形式出现。设计师可以在当前页面 sidebar 中提出修改请求，agent 返回 update proposal，设计师必须 Confirm 或 Cancel，source-of-truth design-system files 才能发生变化。

## User stories covered

- 29
- 30
- 31
- 32
- 33
- 34
- 35
- 53
- 54
- 55

## Acceptance criteria

- [ ] 设计师可以从 Design System browser 页面提交 contextual feedback。
- [ ] Ikran Runtime 通过 AgentAdapter 边界将 feedback 路由到 rule-update task。
- [ ] mocked adapter 返回 Update Proposal，展示 what will change、why、affected items。
- [ ] Confirm 通过 agent path 应用 proposed source-of-truth artifact changes，并按需刷新 view JSON 或页面状态。
- [ ] Cancel 不修改 source-of-truth design-system files。
- [ ] proposal 使用 PRD 分类 implication：page-local exception、reusable candidate、conflict with confirmed rule、open gap、proposed design-system update、none found。
- [ ] 记录 `rule-update proposal created`、`rule-update confirmed`、`rule-update canceled` 语义事件。
- [ ] 测试验证 Confirm 和 Cancel 两条路径。

## Blocked by

- `08-design-system-browser.md`
