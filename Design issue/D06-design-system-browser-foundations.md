# D06 Design System Browser - Foundations

## 对应实现 Issue

- `08` - 基于 `design-system-view.json` 的设计系统浏览器
- `09` - 上下文 Rule-Update Proposal 流程

## 设计顺序

第 6 个设计。  
在 seed extraction 和 preview 验证后，设计师需要能查看当前 design system。先设计 Foundations，因为它定义整个 design-system browser 的信息架构和阅读风格。

## 页面目标

让设计师以 read-first 的方式查看 design system foundations，而不是编辑原始 Markdown。  
Foundations 包括：

- Color
- Typography
- Materials
- Layout
- Interaction

## 页面结构

- 左侧 navigation：
  - Foundations group。
  - Components group。
  - 当前 foundation page selected。

- 中心内容区：
  - foundation title。
  - semantic roles。
  - visual samples。
  - short usage notes。
  - related evidence / open gaps 摘要。

- 右侧 Agent/sidebar：
  - Ask for a contextual change。
  - 轻量 hint。
  - 最近 proposal 状态。

## 每个 Foundation Page 的建议结构

- Summary：这一类 foundation 解决什么设计判断。
- Semantic roles：例如 primary action color、body text、surface background。
- Samples：色块、字体层级、材料卡片、layout示意、interaction state 示例。
- Usage notes：什么时候用、什么时候不要用。
- Evidence status：formalized / candidate / open gap。

## 关键状态

- foundation data available。
- foundation has open gaps。
- foundation has candidate items。
- sidebar idle。
- sidebar task running。

## 设计注意

- 不要做 standalone Rules page；规则应嵌入相关 foundation 页面。
- 不要把这个页面设计成文件浏览器。
- 视觉样本要帮助理解 design language，但不要过度装饰。
- Agent sidebar 是 contextual editing 入口，不是大型聊天窗口。

## 需要交付的设计稿

- Color foundation page。
- Typography foundation page。
- Layout foundation page。
- Foundation page with open gaps。
- Agent sidebar idle/running 状态。
