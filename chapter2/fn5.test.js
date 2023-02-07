const fn3 = require('./fn3');

/*이거 에러남
    Expected: 0.3
    Received: 0.30000000000000004
  이렇게 비교해서 에러남ㅇㅇ 자바스크립트의 특성때문에 나는 에러인데, 이거 해결하기 위해서는 아래 함수를 사용해주면 된다.
*/
test('객체가 제대로 만들어지는지 확인하는 테스트입니다.', () => {
  expect(fn3.add(0.1, 0.2)).toBe(0.3);
});

test('객체가 제대로 만들어지는지 확인하는 테스트입니다.', () => {
  expect(fn3.add(0.1, 0.2)).toBeCloseTo(0.3);
});

//정규식을 통과할 수 있나없나를 확인해볼 수 있는 코드다.
test("Hello World라는 글자에 a가 포함되어 있나요?", () => {
  expect("Hello World").toMatch(/a/);
});

//짜잔~ 이경우 통과합니다요~
test("Hello World라는 글자에 H가 포함되어 있나요?", () => {
  expect("Hello World").toMatch(/H/);
});

//짜잔~ 이경우 통과합니다요~ 이렇게 소문자 포함의 경우도 만들어볼 수 있고~
test("Hello World라는 글자에 H가 포함되어 있나요?", () => {
  expect("Hello World").toMatch(/h/i);
});

//배열내에 값이 있나 없나를 확인
//아래 경우는 마이크가 없죠? 당연히 통과를 못합니다.
test("아래 배열내에 Mike라는 녀석이 포함되어 있을까요?", () => {
  const user = 'Mike';
  const userList = ['Jack', 'Robert', 'Popo'];
  expect(userList).toContain(user);
});

//배열내에 값이 있나 없나를 확인.
//짜잔~ 마이크가 있으니 통과!
test("아래 배열내에 Mike라는 녀석이 포함되어 있을까요?", () => {
  const user = 'Mike';
  const userList = ['Jack', 'Robert', 'Popo', 'Mike'];
  expect(userList).toContain(user);
});

//이외에도 다양한 함수들이 존재하는데 그건 공식문서 사이트에서 많이 확인할 수 있다.