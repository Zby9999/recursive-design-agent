# D07 Design System Browser - Components

## 对应实现 Issue

- `08` - 基于 `design-system-view.json` 的设计系统浏览器
- `09` - 上下文 Rule-Update Proposal 流程

## 设计顺序

第 7 个设计。  
它复用 D06 的 Design System browser 框架，但内容更细：组件 inventory、component detail、variants、states 和 token links。

## 页面目标

让设计师理解当前 design system 中有哪些组件、每个组件的用途、状态、变体和证据状态。

## 页面结构

- 左侧 navigation：
  - Components inventory。
  - component list。
  - selected component。

- 中心内容区：
  - Component detail header。
  - Purpose。
  - Variants。
  - States。
  - Anatomy / slots。
  - Token links。
  - Preview/example。
  - Usage notes。
  - Evidence status。

- 右侧 Agent/sidebar：
  - Ask for component clarification or change。
  - Update proposal entry point。

## Components Inventory 结构

- component name。
- status：formalized / candidate / open gap / draft-for-prototype。
- short purpose。
- evidence count 或 evidence status。
- last updated / source artifact summary。

## Component Detail 结构

- What this component is for。
- When to use。
- When not to use。
- Variants and states。
- Token links。
- Example preview。
- Related open gaps。

## 关键状态

- component inventory loaded。
- component selected。
- component has no preview yet。
- component contains candidate variants。
- component has open gap。

## 设计注意

- Component detail 不要变成复杂手动编辑器。
- token links 应帮助理解，而不是显示原始 JSON 噪声。
- preview/example 是辅助，不要求像 Storybook 那样完整。
- component status 要清晰，因为它影响 agent 后续能否可靠复用。

## 需要交付的设计稿

- Components inventory。
- Component detail with preview。
- Component detail without preview。
- Component detail with candidate/open gap。
- Component sidebar contextual change 状态。
