import taskQuene from './index';

const task = (index: number, delay: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(index);
    }, delay);
  });
};

const testTaskQuene = new taskQuene();
const task1 = () => task(0, 1000);
const task2 = () => task(1, 2000);
const taskId = testTaskQuene.enqueue(task1, task2);
testTaskQuene.run(taskId).then((res) => {
  console.log('1', res);
});

const task3 = () => task(0, 1000);
const taskId2 = testTaskQuene.enqueue(task3);
testTaskQuene.run(taskId2).then((res) => {
  console.log('2', res);
});
const task4 = () => task(0, 3000);
const taskId3 = testTaskQuene.enqueue(task4);
testTaskQuene.run(taskId3).then((res) => {
  console.log('3', res);
});
