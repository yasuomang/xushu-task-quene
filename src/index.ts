import { uuid } from './utils';

type Task<E = unknown> = () => Promise<E>;

interface waitTask {
  taskId: string;
  wait: (value?: unknown) => void;
}

export default class taskQuene {
  private taskMap: Map<string, Task[]>;
  private waitTasks: waitTask[];
  private running: boolean;
  constructor() {
    this.taskMap = new Map();
    this.waitTasks = [];
    this.running = false;
  }
  public enqueue(...tasks: Task[]) {
    const taskId = uuid();
    this.taskMap.set(taskId, tasks);
    return taskId;
  }
  public async run(taskId: string) {
    const resultList = [];
    const currentTasks = this.taskMap.get(taskId);
    if (!currentTasks) return Promise.reject('Please use enqueue first');
    if (this.running) {
      await new Promise((resolve) =>
        this.waitTasks.push({ taskId, wait: resolve })
      );
    }
    this.running = true;
    try {
      for (let i = 0; i < currentTasks.length; i++) {
        const res = await currentTasks[i]();
        resultList.push(res);
      }
      this.dequene(taskId);
      return Promise.resolve(resultList);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  public dequene(taskId: string) {
    this.taskMap.delete(taskId);
    this.running = false;
    if (this.waitTasks.length > 0) {
      this.waitTasks[0].wait();
      this.waitTasks.shift();
    }
  }
}
