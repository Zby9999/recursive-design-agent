# D03 Seed Alignment Question Workspace

## 对应实现 Issue

- `05` - 五阶段 Seed Alignment 问题门
- `06` - Draft Design-System 文件与 View JSON

## 设计顺序

第 3 个设计。  
它依赖 D02 的 evidence canvas。只有先确定 annotation 和 anchor 如何呈现，才能设计 question card 如何聚焦画布、如何承载回答、如何完成 seed alignment gate。

## 页面目标

让设计师在可视化 evidence context 中回答 agent 的 seed alignment questions。  
这个页面的关键不是聊天，而是把 agent observation、agent question、designer answer 和 visual anchor 绑定起来。

## 页面结构

- 顶部 stage tabs：
  - 五个 stage 与完成计数，例如 `Layout 2/4`。
  - 当前 stage 是否完成。

- 左侧 question list：
  - 按 stage 分组。
  - 每张 card 显示 answered / unanswered。
  - 简短 observation preview。

- 中心 canvas：
  - 继续显示 seed evidence surface。
  - 选中 question 后自动聚焦对应 anchor。
  - 当前 card 的 anchor 高亮。

- 右侧 answer panel：
  - Agent observation。
  - Agent question。
  - Conversation thread。
  - Final designer answer。
  - Submit / edit answer。

- 底部或顶部 gate status：
  - All questions answered 前，seed extraction action disabled。
  - All questions answered 后，允许进入 draft design-system generation。

## 关键状态

- Stage 未开始。
- Stage 进行中。
- Question selected, unanswered。
- Question selected, answered。
- Conversation thread 中有 follow-up。
- All cards answered。
- Seed extraction gate unlocked。

## 设计注意

- card 状态只保留 unanswered / answered，避免复杂 workflow state。
- final answer 是完成来源；conversation thread 是辅助记录。
- 允许简短回答，不能让 required coverage 变成重写设计文档。
- 选中问题时，canvas anchor 聚焦需要明显但不打断阅读。

## 需要交付的设计稿

- 五阶段 question workspace 总览。
- 未回答问题 selected 状态。
- 已回答问题 selected 状态。
- conversation thread 有多轮澄清状态。
- all answered / gate unlocked 状态。
