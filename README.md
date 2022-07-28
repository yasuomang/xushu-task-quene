# taskQuene 项目

    taskQuene项目
    js异步任务队列

## Usage

```javascript
import taskQuene from '@m-xushu/task-quene';

const testTaskQuene = new taskQuene();
const taskId = testTaskQuene.enqueue(task1, task2);
const res = await testTaskQuene.run(taskId);
console.log(res);
```

## Develop

```shell
yarn && yarn dev
```

# git commit rules

- `<type>[optional scope]: <description>`
- `type` **required** 类型（必选）
  - `feat` 功能
  - `fix` _bug_
  - `test` 测试
  - `perf` 优化
  - `refactor` 重构
  - `docs` 文档
  - `chore` 辅助工具配置
  - `style` 格式（适用 lint fix）
  - `revert` 回滚
  - `merge` 合并
  - `sync` 同步（同步主线、分支上的 fix 修复等）
- `optional scope` 涉及范围 (可选)
- `description` 描述
- 示例：`docs(README.md): update xxxxxx`
