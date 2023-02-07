const fn3 = require('./fn3');


test('객체가 제대로 만들어지는지 확인하는 테스트입니다.', () => {
  expect(fn3.makeUser('merro', 23)).toEqual({
    name: 'merro',
    age: 23
  })
})

//이경우 엄격한 검사가 실행되기때문에 에러가 발생한다.
test('객체가 제대로 만들어지는지 확인하는 테스트입니다.', () => {
  expect(fn3.makeUser('merro', 23)).toStrictEqual({
    name: 'merro',
    age: 23
  })
})

//짜잔~ 보다시피 값을 제대로 맞춰줘야 통과가 된다.
test('객체가 제대로 만들어지는지 확인하는 테스트입니다.', () => {
  expect(fn3.makeUser('merro', 23)).toStrictEqual({
    name: 'merro',
    age: 23,
    gender: undefined
  })
})