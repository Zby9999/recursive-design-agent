# D08 Contextual Rule-Update Proposal

## 对应实现 Issue

- `09` - 上下文 Rule-Update Proposal 流程
- `12` - 语义事件日志与研究导出包
- `13` - Agent 输出校验与一次修复

## 设计顺序

第 8 个设计。  
必须等 Design System browser 的 Foundations 和 Components 稳定后再设计，因为 proposal 需要挂在“当前正在看的 design-system page”上。

## 页面目标

让设计师在当前 Design System page 上请求修改，并在 source-of-truth files 被修改前明确看到 proposal、影响范围和 Confirm / Cancel。

## 页面结构

- 触发入口：
  - 右侧 Agent/sidebar input。
  - 当前 page context 自动带入，但不暴露内部 context 名称。

- Proposal panel：
  - What will change。
  - Why。
  - Affected items。
  - Classification。
  - Evidence used。
  - Confirm。
  - Cancel。

- Result state：
  - Confirmed and applied。
  - Canceled, no files changed。
  - Needs clarification。
  - Agent output invalid / repair failed。

## Classification 类型

- page-local exception。
- reusable candidate。
- conflict with confirmed rule。
- open gap。
- proposed design-system update。
- none found。

## 关键状态

- Sidebar idle。
- Proposal generating。
- Proposal ready。
- Confirm applying。
- Confirm applied。
- Cancel complete。
- Repair failed。

## 设计注意

- Confirm / Cancel 必须非常明确，避免 silent design-system changes。
- proposal 要短而可判断，不要像完整 audit report。
- 如果是 `none found`，也要有清楚结果，避免用户以为失败。
- 修改 source-of-truth 之前，不能只显示“Agent is editing”。

## 需要交付的设计稿

- proposal ready 状态。
- proposed design-system update 状态。
- reusable candidate / open gap 状态。
- confirm applied 状态。
- cancel 状态。
- repair failed 状态。
