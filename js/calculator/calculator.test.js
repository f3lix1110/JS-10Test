const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds 10 - 4 to equal 6', () => {
  expect(calculator.subtract(10, 4)).toBe(6);
});

test('smultiply 5 * 3 to equal 15', () => {
  expect(calculator.multiply(5, 3)).toBe(15);
});

test('divide 4 / 2 to equal 2', () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

test('divide 10 / 0 to equal infinity', () => {
  expect(calculator.divide(10, 0)).toBe(Infinity);
});

test('divide 10 / 2 to equal 5', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});