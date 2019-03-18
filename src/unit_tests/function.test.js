var mathModule  = require('../js/index');

let splitFunc = (str) => {
 return str.split('')
}


test('adding', () => {
  expect(mathModule.calculateResult(['1','+', '2'])).toBe(3);
});

test('multiplying', () => {
  expect(mathModule.calculateResult(['2','*', '3'])).toBe(6);
});

test('misc', () => {
  expect(mathModule.calculateResult(splitFunc('1+2+15-6*27'))).toBe(-144);
});