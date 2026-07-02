# 项目文件夹选择与 `.ikran` 元数据

## What to build

让设计师通过 Browser UI 和 Ikran Runtime 把 Ikran 绑定到一个空的本地项目文件夹。文件夹选择优先使用系统原生 folder picker；Browser UI 只触发 Runtime API，不直接访问本地 filesystem。文件夹通过校验后，Runtime 创建项目本地 `.ikran` 元数据、初始化持久状态、写入第一批语义事件，并返回足够的项目状态，让 Browser UI 退出未绑定状态。

## User stories covered

- 2
- 38
- 61
- 70
- 71
- 78
- 80

## Acceptance criteria

- [ ] Browser UI 提供简单的项目文件夹绑定流程，并通过 Ikran Runtime API 触发系统原生 folder picker。
- [ ] Runtime 返回用户选择的真实本地路径；如果原生 picker 不可用，可以回退到手动输入路径并进行校验。
- [ ] Runtime 校验该文件夹是否适合作为新的单流程 Ikran 项目；不适合时返回可理解的错误。
- [ ] 成功后，Runtime 创建项目本地 `.ikran` 元数据，包括 config、SQLite state 和 event log 位置。
- [ ] event log 至少记录 `project created` 和 `folder selected` 两类语义事件。
- [ ] 刷新 Browser UI 后，可以从 Runtime 恢复 active project 状态。
- [ ] 测试使用临时空文件夹，验证 `.ikran` 元数据和事件被创建。

## Blocked by

- `01-ikran-local-workbench-runtime-health.md`
