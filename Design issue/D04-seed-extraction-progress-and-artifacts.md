# D04 Seed Extraction Progress And Artifacts

## 对应实现 Issue

- `06` - Draft Design-System 文件与 View JSON
- `07` - Seed Prototype Scaffold 与实时预览
- `12` - 语义事件日志与研究导出包

## 设计顺序

第 4 个设计。  
当 D03 的所有问题回答完后，系统会进入生成 design-system artifacts 的阶段。这个页面需要在 preview 和 Design System browser 出现之前，把“回答正在变成可读 design system”这件事讲清楚。

## 页面目标

让设计师知道 seed alignment 已完成，agent 正在生成或已经生成：

- design-system source files。
- `token.json`。
- component inventory。
- evidence registry。
- `design-system-view.json`。

这个页面也负责把用户从 seed alignment 过渡到 prototype reconstruction。

## 页面结构

- 顶部状态：
  - Seed alignment complete。
  - Draft design-system generation running / complete / failed。

- 左侧流程区：
  - Completed: evidence package。
  - Completed: alignment questions。
  - Current: draft design system。
  - Next: seed prototype reconstruction。

- 中心区域：
  - artifact generation progress。
  - generated artifact summary。
  - design-system-view render readiness。

- 右侧 Agent/sidebar：
  - agent summary：从哪些 designer answers 生成了哪些 artifact。
  - missing or open gaps 摘要。
  - next action：start seed reconstruction。

## 关键状态

- Waiting to generate。
- Generating draft design system。
- Generated successfully。
- Generated with open gaps。
- Generation failed。
- Ready for seed reconstruction。

## 设计注意

- 不要展示完整 Markdown 文件内容；这里只展示可理解摘要。
- 需要让用户知道 source-of-truth files 在本地项目文件夹中。
- `design-system-view.json` 是 UI-facing derived file，不是可手动编辑源文件。
- open gaps 要诚实呈现，但不要阻断所有后续动作，除非它们影响原型重建。

## 需要交付的设计稿

- generating 状态。
- generated artifacts summary 状态。
- generated with open gaps 状态。
- failed 状态。
- ready for seed reconstruction 状态。
