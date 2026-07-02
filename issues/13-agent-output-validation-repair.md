# Agent 输出校验与一次修复

## What to build

让 agent output contracts 足够可靠，能支撑研究原型。Bridge 需要校验 MVP task families 的 agent JSON outputs；当 output invalid 时，只请求一次 repair attempt，记录修复路径事件，并在修复失败时避免代替 agent 发明语义内容。

## User stories covered

- 67
- 68
- 69

## Acceptance criteria

- [ ] Bridge 校验目前已实现的 MVP task families 的 structured agent outputs。
- [ ] invalid output 会记录 `invalid-output` event，并包含足够的诊断上下文，方便研究和 debugging。
- [ ] Bridge 最多向 AgentAdapter 请求一次 repair attempt。
- [ ] repair 成功时记录 repaired-output event，并继续 task flow。
- [ ] repair 失败时，UI 显示清晰的 retry 或 switch-agent 状态，不补造缺失的 semantic content。
- [ ] validation failure 不会破坏已有 source-of-truth project artifacts。
- [ ] 测试覆盖 valid output、repair success、repair failure。

## Blocked by

- `03-mocked-agent-task-runner.md`
