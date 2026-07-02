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

- [x] Ikran Runtime 可以本地启动，并托管 Browser UI 与 `/api/*` Runtime API。
- [ ] Browser UI 渲染 Ikran workbench shell，包括 PRD 中的左侧流程区、中心工作区、右侧 Agent/sidebar 区和顶部阶段区。
- [x] Runtime 提供 `/api/health` endpoint，Browser UI 通过同源 HTTP 调用，并能显示 ready、loading、error 状态。
- [x] Runtime 提供 `/api/events` SSE stream，发送 heartbeat 或 status event，Browser UI 能接收并展示。
- [x] Runtime 默认绑定 localhost 或 `127.0.0.1`，不启用宽泛 CORS。
- [x] 浏览器代码没有直接访问 filesystem 的路径；所有本地文件能力只通过 Ikran Runtime 暴露。
- [x] 有一个基础自动化检查或 smoke test 验证 Browser UI 到同源 Runtime health path。

## Blocked by

None - can start immediately

## Status

Runtime / health / SSE / session-token / localhost / no-FS / launcher 部分(`lib/runtime/`、`app/api/`、`bin/ikran.mjs`、smoke test)已完成并通过 `reviewer` 与 `npm run check`/`build` 验证。

第 2 条(workbench shell 四区 UI)**未完成**：UI 视觉设计必须由设计师通过 Figma 提供(见根目录 `AGENTS.md` 的 Design authority 硬规则)。此前 Agent 自行设计的四区 shell 已回退,改回设计师已有的 project-start 界面(`components/setup/ProjectSetupCard.tsx`),仅把数据源接到同源 Runtime。四区 workbench shell 待 `Design issue/D01-project-start-and-bridge-status.md` 的 Figma 设计落地后再实现。