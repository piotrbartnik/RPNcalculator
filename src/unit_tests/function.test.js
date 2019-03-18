var mathModule = require('../js/index');

let splitFunc = (str) => {
  return str.split('')
}

test('adding substracting', () => {
  expect(mathModule.calculateResult(splitFunc('1+2'))).toBe(3);
  expect(mathModule.calculateResult(splitFunc('14+3'))).toBe(17);
  expect(mathModule.calculateResult(splitFunc('8-82'))).toBe(-74);
  expect(mathModule.calculateResult(splitFunc('1+222'))).toBe(223);
});

test('multiplying dividing', () => {
  expect(mathModule.calculateResult(splitFunc('1*2'))).toBe(2);
  expect(mathModule.calculateResult(splitFunc('14*14'))).toBe(196);
  expect(mathModule.calculateResult(splitFunc('12/3'))).toBe(4);
  expect(mathModule.calculateResult(splitFunc('222/222'))).toBe(1);
});

test('misc', () => {
  expect(mathModule.calculateResult(splitFunc('1+2+15-6*27'))).toBe(-144);
});