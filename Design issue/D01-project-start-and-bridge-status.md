# D01 Project Start And Bridge Status

## 对应实现 Issue

- `01` - MAP Web App 与 Local Bridge 心跳链路
- `02` - 项目文件夹选择与 `.map` 元数据
- `03` - Mocked AgentAdapter 任务闭环
- `13` - Agent 输出校验与一次修复
- `14` - Headless CLI AgentAdapter Smoke Path

## 设计顺序

第 1 个设计。  
这是所有后续页面的外壳和状态语言来源。先确定它，可以避免后续 seed workbench、preview、Design System browser 各自长成不同产品。

## 页面目标

让设计师进入 MAP 后能完成三件事：

- 确认 Local Bridge 是否连接。
- 绑定一个空的本地项目文件夹。
- 看到当前 Agent/Bridge 是否可以执行任务。

这个页面不应该像开发者控制台。它应该让设计师理解“我现在可以开始一个 MAP 项目了吗？”

## 页面结构

- 顶部区域：
  - 产品名 MAP。
  - 当前连接状态：Bridge connected / disconnected / reconnecting。
  - 轻量 agent status：mocked adapter / CLI adapter / unavailable。

- 左侧流程区：
  - Project setup step。
  - Folder selected / not selected。
  - Seed startup not started。

- 中心区域：
  - 空项目启动面板。
  - Figma seed reference 输入入口。
  - 本地项目文件夹选择入口。
  - 当前准备状态摘要。

- 右侧 Agent/sidebar：
  - 简短提示：当前需要做什么。
  - task status：idle / running / failed / completed。
  - validation repair 失败时的 retry / switch agent 状态。

## 关键状态

- Bridge disconnected：页面可读，但主要操作 disabled。
- Bridge connected, no folder：引导选择本地项目文件夹。
- Folder invalid：说明为什么不能作为 MAP project folder。
- Folder accepted：显示 `.map` metadata 已创建。
- Agent unavailable：允许继续浏览，但不能启动 agent task。
- Agent output invalid：显示一次 repair 后的结果，不补造语义内容。

## 设计注意

- 不要把页面设计成 IDE 或服务器 dashboard。
- 技术细节默认折叠，只露出设计师需要做的下一步。
- 错误状态要清楚，但不能吓人；重点是“下一步怎么恢复”。
- 这个页面定义全局 layout：顶部 stage/status、左侧 flow、中心 workspace、右侧 Agent panel。

## 需要交付的设计稿

- 初始未连接状态。
- Bridge connected 但未选择文件夹状态。
- 文件夹选择成功状态。
- Agent task running 状态。
- Agent output invalid / repair failed 状态。
