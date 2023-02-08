const mockFn = jest.fn();

mockFn
  .mockReturnValueOnce(10)
  .mockReturnValueOnce(20)
  .mockReturnValueOnce(30)
  .mockReturnValueOnce(40)
  .mockReturnValue(50)


mockFn();
mockFn();
mockFn();
mockFn();
mockFn();

test("목을 살펴보도록 하죠.", () => {
  /*    
  [
    { type: 'return', value: 10 },
    { type: 'return', value: 20 },
    { type: 'return', value: 30 },
    { type: 'return', value: 40 },
    { type: 'return', value: 50 }
  ]
  */
  console.log(mockFn.mock.results);
  expect(1).toBe(1);
})