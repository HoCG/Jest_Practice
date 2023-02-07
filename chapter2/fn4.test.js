const fn3 = require('./fn3');

//null인지 아닌지 확인해보는 테스트이다.
test('null은 null이다.', () => {
  expect(null).toBeNull();
});

//toBeTruthy
//toBeFalsy
//각각 true인지 false인지 확인해보는 함수이다.
test("0은 false이다.", () => {
  expect(fn3.add(1, -1)).toBeFalsy();
});


//위에가 통과되는데 당연히 통과못하는 테스트다.
test("0은 false이다.", () => {
  expect(fn3.add(1, -1)).toBeTruthy();
});


//짜잔~ 이건 true.
test("문자열을 합쳐보시죠 그럼", () => {
  expect(fn3.add("Hello ", "Jest")).toBeTruthy();
});

//10자를 초과한 id이기때문에 이 테스트는 통과하지 못한다.
test("ID의 길이가 10자 이하여야 합니다.", () => {
  const id = "agf32987fdgfkj";
  expect(id.length).toBeLessThanOrEqual(10);
});

//10자보다 작게 구성하면 통과한다~
test("ID의 길이가 10자 이하여야 합니다.", () => {
  const id2 = "agf329";
  expect(id2.length).toBeLessThanOrEqual(10);
});