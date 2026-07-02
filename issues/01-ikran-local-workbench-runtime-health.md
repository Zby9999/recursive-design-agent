# Ikran Local Workbench 启动与 Runtime Health

## What to build

建立第一个可运行的 Ikran tracer bullet：一个本地 Ikran Runtime 能通过 npm/npx 或本地脚本启动，托管浏览器 UI，并从同一个本地 origin 提供 health endpoint 与 SSE heartbeat。界面只需要足够展示单项目 Ikran workbench 的基本结构，并证明浏览器代码不会直接读写本地文件，后续所有本地能力都经过 Ikran Runtime 的同源 API。

## User stories covered

- 3
- 62
- 63
- 64
- 76
- 77
- 79
- 80

## Acceptance criteria

- [ ] Ikran Runtime 可以本地启动，并托管 Browser UI 与 `/api/*` Runtime API。
- [ ] Browser UI 渲染 Ikran workbench shell，包括 PRD 中的左侧流程区、中心工作区、右侧 Agent/sidebar 区和顶部阶段区。
- [ ] Runtime 提供 `/api/health` endpoint，Browser UI 通过同源 HTTP 调用，并能显示 ready、loading、error 状态。
- [ ] Runtime 提供 `/api/events` SSE stream，发送 heartbeat 或 status event，Browser UI 能接收并展示。
- [ ] Runtime 默认绑定 localhost 或 `127.0.0.1`，不启用宽泛 CORS。
- [ ] 浏览器代码没有直接访问 filesystem 的路径；所有本地文件能力只通过 Ikran Runtime 暴露。
- [ ] 有一个基础自动化检查或 smoke test 验证 Browser UI 到同源 Runtime health path。

## Blocked by

None - can start immediately
