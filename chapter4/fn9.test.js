const fn = require("./fn");


//테스트전 변수설정을 해야한다면, 아래 순서를 숙지해둬야한다.
beforeAll(() => console.log("밖 beforeAll")); //1
beforeEach(() => console.log("밖 beforeEach")); //2
afterEach(() => console.log("밖 afterEach")); //4
afterAll(() => console.log("밖 afterAll")); //마지막

test("0 + 1 = 1", () => {
  expect(fn.add(0, 1)).toBe(1);
});

describe("Car 관련 작업", () => {
  beforeAll(() => console.log("안 beforeAll")); //5
  beforeEach(() => console.log("안 beforeEach")); 
  afterEach(() => console.log("안 afterEach")); 
  afterAll(() => console.log("안 afterAll")); //마지막 - 1

  test("0 + 1 = 1", () => {
    expect(fn.add(0, 1)).toBe(1);
  });
})