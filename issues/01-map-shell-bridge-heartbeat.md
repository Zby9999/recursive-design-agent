# MAP Web App 与 Local Bridge 心跳链路

## What to build

建立第一个可运行的 MAP tracer bullet：一个 Next.js Web App shell 能通过 localhost HTTP 连接到 Local Bridge，并通过 SSE 收到最小心跳事件。界面只需要足够展示单项目 MAP workbench 的基本结构，并证明浏览器不会直接读写本地文件，后续所有本地能力都经过 Bridge。

## User stories covered

- 3
- 62
- 63
- 64

## Acceptance criteria

- [ ] Web App 可以本地启动，并渲染 MAP workbench shell，包括 PRD 中的左侧流程区、中心工作区、右侧 Agent/sidebar 区和顶部阶段区。
- [ ] Local Bridge 提供 health endpoint，Web App 通过 HTTP 调用，并能显示 connected、disconnected、loading 状态。
- [ ] Local Bridge 提供 SSE stream，发送 heartbeat 或 status event，Web App 能接收并展示。
- [ ] 浏览器代码没有直接访问 filesystem 的路径；所有本地文件能力只通过 Bridge 暴露。
- [ ] 有一个基础自动化检查或 smoke test 验证 Web App 到 Bridge 的 health path。

## Blocked by

None - can start immediately
