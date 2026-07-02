# Headless CLI AgentAdapter Smoke Path

## What to build

加入第一个真实 adapter path，用于 headless external agents。Ikran Runtime 应能调用配置好的 CLI command，传入 task payload，收集 structured output，并复用 mocked adapter 已经使用的 validation、event 和 task lifecycle。

## User stories covered

- 65
- 66
- 73
- 74
- 75

## Acceptance criteria

- [ ] Ikran Runtime 支持配置 headless CLI AgentAdapter，且不需要修改 Browser UI code。
- [ ] adapter 可以把 task payload 传给 command，并收集 structured JSON output。
- [ ] CLI adapter result 复用 mocked adapter 的 task lifecycle、SSE progress surface、validation path 和 event log。
- [ ] Ikran Runtime 不嵌入或实现 Figma MCP；任何 Figma MCP dependency 都留在 external agent environment 内。
- [ ] 可以用 fake local CLI command 做自动化 smoke test。
- [ ] 文档或配置说明指出后续如何手动 smoke-test Codex、Claude Code 或 Cursor。

## Blocked by

- `03-mocked-agent-task-runner.md`
- `13-agent-output-validation-repair.md`
