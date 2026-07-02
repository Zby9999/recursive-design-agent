# Mocked AgentAdapter 任务闭环

## What to build

引入第一个 AgentAdapter 边界，先使用 deterministic mocked adapter。Browser UI 应能通过 Ikran Runtime 启动一个 agent task，通过 SSE 观察任务进度，并在没有真实 Figma MCP 或外部 CLI 的情况下看到完成结果。

## User stories covered

- 64
- 65
- 73
- 75

## Acceptance criteria

- [ ] Ikran Runtime 至少为一个 MVP task family 定义 task creation API，并在 active project 中持久化 task state。
- [ ] Mocked AgentAdapter 能接收 task payload，并返回 deterministic JSON output。
- [ ] task lifecycle events 通过 SSE 传给 Browser UI：started、progress（如有）、completed、failed。
- [ ] Browser UI 在 Agent/sidebar 区域展示当前 task status，但默认不暴露 raw adapter internals。
- [ ] adapter boundary 的形状允许之后加入 headless CLI adapter，而不需要重写 Browser UI。
- [ ] 测试验证 Browser UI -> Ikran Runtime -> mocked AgentAdapter -> SSE result 的完整路径。

## Blocked by

- `01-ikran-local-workbench-runtime-health.md`
