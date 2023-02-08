//비동기 테스트 해보기
//Promise Ver.

const fn6 = require('./fn6');


//이코드 뭔가 이상하다. 3초후에 실행되야 하는데 1ms만에 실행됨.
test('3초후에 받은 이름은 마이크여야 합니다.', () => {
  fn6.getAge().then(age => {
    expect(age).toBe(30);
  });
});

//이렇게 리턴 써주면 오케이~
test('3초후에 받은 이름은 마이크여야 합니다.', () => {
  return fn6.getAge().then(age => {
    expect(age).toBe(30);
  });
});


//이건 성공 케이스 확인 rejects는 실패케이스 확인.
test('3초후에 받은 이름은 마이크여야 합니다.', () => {
  return expect(fn6.getAge()).resolves.toBe(30);
});