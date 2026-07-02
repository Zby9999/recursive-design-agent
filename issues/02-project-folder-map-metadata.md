# 项目文件夹选择与 `.map` 元数据

## What to build

让设计师通过 Web App 和 Local Bridge 把 MAP 绑定到一个空的本地项目文件夹。文件夹通过校验后，Bridge 创建项目本地 `.map` 元数据、初始化持久状态、写入第一批语义事件，并返回足够的项目状态，让 Web App 退出未绑定状态。

## User stories covered

- 2
- 38
- 61
- 70
- 71

## Acceptance criteria

- [ ] Web App 提供简单的项目文件夹绑定流程，并只把用户选择或输入的本地路径发送给 Local Bridge。
- [ ] Bridge 校验该文件夹是否适合作为新的单流程 MAP 项目；不适合时返回可理解的错误。
- [ ] 成功后，Bridge 创建项目本地 `.map` 元数据，包括 config、SQLite state 和 event log 位置。
- [ ] event log 至少记录 `project created` 和 `folder selected` 两类语义事件。
- [ ] 刷新 Web App 后，可以从 Bridge 恢复 active project 状态。
- [ ] 测试使用临时空文件夹，验证 `.map` 元数据和事件被创建。

## Blocked by

- `01-map-shell-bridge-heartbeat.md`
