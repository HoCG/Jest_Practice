const fn = require('./fn');

test("0 + 1 = 1", () => {
  expect(fn.add(0, 1)).toBe(1);
});
test("0 + 1 = 1", () => {
  expect(fn.add(0, 1)).toBe(1);
});
test("0 + 1 = 1", () => {
  expect(fn.add(0, 1)).toBe(1);
});
test("0 + 1 = 1", () => {
  expect(fn.add(0, 1)).toBe(1);
});

//많은것중 얘만 넘기고 테스트 하고 싶을땐 skip 작성.
test.skip("0 + 1 = 1", () => {
  expect(fn.add(0, 1)).toBe(1);
});

//이 많은것중 문제 파악을 위해 하나만 확인해야 할때는 only 작성.
test.only("0 + 1 = 1", () => {
  expect(fn.add(0, 1)).toBe(1);
});