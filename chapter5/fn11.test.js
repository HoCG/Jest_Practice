//mockFn.mock.calls로 알수있는건 두가지다. 함수가 총 몇번 호출되었는가, 전달된 인수는 무엇인가를 알수있다.
const mockFn = jest.fn();
/*
mockFn();
mockFn(1);

test.skip('dd', () => {
  console.log(mockFn.mock.calls);
  expect("dd").toBe("dd");
});
*/

function forEachAdd1 (arr) {
  arr.forEach(num => {
    mockFn(num + 1)
  });
};

forEachAdd1([10, 20, 30]);

test('함수의 호출은 3번 됩니다.', () => {
  expect(mockFn.mock.calls.length).toBe(3);
});
