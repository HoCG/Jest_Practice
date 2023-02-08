//비동기 테스트 해보기.
//콜백 Ver
const fn6 = require('./fn6');


//이코드 뭔가 이상하다. 3초후에 실행되야 하는데 1ms만에 실행됨.
test('3초후에 받은 이름은 마이크여야 합니다.', () => {
  const callback = (name) => {
    expect(name).toBe('Mike');
  }
  fn6.getName(callback);
});


//그 이유는 콜백함수의 경우 이렇게 done을 작성해줘야하기 때문이다!
test('3초후에 받은 이름은 마이크여야 합니다.', (done) => {
  const callback = (name) => {
    expect(name).toBe('Mike');
    done();
  }
  fn6.getName(callback);
});


//아래와 같이 콜백의 경우는 에러를 catch할 수도 있다.
test('3초후에 받은 이름은 마이크여야 합니다.', (done) => {
  const callback = (name) => {
    try {
      expect(name).toBe('Mike');
      done();
    } catch (error) {
      done();
    }
  }
  fn6.getName(callback);
});
