var mathModule = require('../js/index');
var rpnModule = require('../js/rpn');

let splitFunc = (str) => {
  return str.split('')
}

test('adding substracting', () => {
  expect(mathModule.calculateResult(splitFunc('1+2'))).toEqual([3]);
  expect(mathModule.calculateResult(splitFunc('14+3'))).toEqual([17]);
  expect(mathModule.calculateResult(splitFunc('8-82'))).toEqual([-74]);
  expect(mathModule.calculateResult(splitFunc('1+222'))).toEqual([223]);
});

test('multiplying dividing', () => {
  expect(mathModule.calculateResult(splitFunc('1*2'))).toEqual([2]);
  expect(mathModule.calculateResult(splitFunc('14*14'))).toEqual([196]);
  expect(mathModule.calculateResult(splitFunc('12/3'))).toEqual([4]);
  expect(mathModule.calculateResult(splitFunc('222/222'))).toEqual([1]);
});

test('misc', () => {
  expect(mathModule.calculateResult(splitFunc('1+2+15-6*27'))).toEqual([-144]);
});

test('rpn', () => {
  expect(rpnModule.rpn('1+2')).toBe('1 2 +');
  expect(rpnModule.rpn('1*2')).toBe('1 2 *');
  expect(rpnModule.rpn('1+2-5')).toBe('1 2 5 - +');
  expect(rpnModule.rpn('1+2*4')).toBe('1 2 4 * +');
  expect(rpnModule.rpn('1*2+10')).toBe('1 2 * 10 +');
  expect(rpnModule.rpn('1/2')).toBe('1 2 /');
  expect(rpnModule.rpn('1+2/10')).toBe('1 2 10 / +');
  expect(rpnModule.rpn('1/2*5')).toBe('1 2 / 5 *');
});