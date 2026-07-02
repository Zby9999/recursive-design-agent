# D02 Seed Evidence Canvas

## 对应实现 Issue

- `04` - Seed Evidence 画布与锚定标注
- `16` - 真实 Figma 与真实 Agent Smoke Checks

## 设计顺序

第 2 个设计。  
在 shell 稳定后，优先设计这个页面，因为它定义 MAP 与普通 chat-based agent workflow 的核心差异：agent 的观察、疑问和假设必须落在可视化设计表面上。

## 页面目标

展示 Figma seed page 的视觉证据，并让 agent annotation 与 evidence anchor 可见、可扫读、可定位。

设计师应该能一眼看出：

- agent 正在看哪个 seed page。
- 哪些地方被标注为问题、假设、事实或泛化风险。
- 标注和 Figma node / local region / whole frame 的关系。

## 页面结构

- 顶部 stage tabs：
  - Layout
  - Component Extraction
  - Interaction Style
  - Visual Style
  - Generalizability

- 左侧流程区：
  - Seed evidence package status。
  - Annotation type filters。
  - 当前 stage 的 annotation summary。

- 中心 canvas：
  - Figma seed screenshot 或 visual surface。
  - Anchored annotations。
  - zoom / pan 控制。
  - whole-frame anchor 的视觉表达。

- 右侧 Agent/sidebar：
  - 当前选中 annotation 的 agent observation。
  - evidence source 摘要。
  - 是否存在 missing structured evidence / missing screenshot evidence。

## Annotation 类型

- Question：agent 需要设计师回答的疑问。
- Assumption：agent 根据 evidence 做出的假设。
- Observed fact：从设计中直接观察到的事实。
- Generalization risk：可能不应被泛化成设计系统规则的风险。

## 关键状态

- Evidence loading。
- Evidence available, no annotation selected。
- Annotation selected。
- Missing screenshot evidence。
- Missing structured evidence。
- Evidence package failed。

## 设计注意

- annotation 类型可以视觉区分，但不要影响完成规则。
- 不要让 annotation 覆盖设计本身太多；它们是阅读辅助，不是主角。
- canvas 操作不能成为研究事件噪声；设计上也不要暗示每次 pan/zoom 都是重要行为。
- whole-frame question 也需要可见 anchor，不能只是一条抽象问题。

## 需要交付的设计稿

- seed evidence canvas 默认状态。
- 多 annotation 类型同时出现的状态。
- annotation selected 状态。
- missing evidence 状态。
- evidence package failed 状态。
