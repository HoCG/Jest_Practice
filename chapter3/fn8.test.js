const fn6 = require('./fn6');
//async, await도 알아보자.
// 이렇게 사용하면 된다~
test('async await을 사용해도록 하죠.', async () => {
  const age = await fn6.getAge();
  expect(age).toBe(30);
});

//다른방법으론 아래와 같은 방법도 있음.
test('async await을 사용해도록 하죠.', async () => {
  await expect(fn6.getAge()).resolves.toBe(30);
});