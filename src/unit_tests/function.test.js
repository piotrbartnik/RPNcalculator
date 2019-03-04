var mathModule  = require('../js/index');

test('adds 1 + 2 to equal 3', () => {
  expect(mathModule.sum(1, 2)).toBe(3);
});

test('multiply 2 * 3 to equal 6', () => {
  expect(mathModule.multiply(2, 3)).toBe(6);
});