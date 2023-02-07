const fn2 = require('./fn2');


//Equal을 써봅시다 그럼
test('equal을 안쓴 케이스입니다.', () => { 
  expect(fn2.add(2, 3)).toBe(5);
});

test('equal을 쓴 케이스입니다.', () => { 
  expect(fn2.add(2, 3)).toEqual(5);
});

//객체도 한번 만들어보죠.
//실패가 난다. 왜그럴까? 이유는 단순한데, 객체나 배열은 재귀적으로 돌기때문에 toEqual을 사용해야한다.
test('객체가 제대로 만들어지는지 확인하는 테스트입니다.', () => {
  expect(fn2.makeUser('merro', 23)).toEqual({
    name: 'merro',
    age: 23
  })
})