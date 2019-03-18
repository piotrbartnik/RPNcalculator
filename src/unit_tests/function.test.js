var mathModule  = require('../js/index');

test('adding', () => {
  expect(mathModule.calculateResult(['1','+', '2'])).toBe(3);
});

test('multiply 2 * 3 to equal 6', () => {
  expect(mathModule.calculateResult(['2','*', '3'])).toBe(6);
});