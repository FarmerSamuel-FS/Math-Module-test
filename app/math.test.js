// math.test.js

const math = require('./math');

// Tests for custom math functions
test('adds 1 + 2 to equal 3', () => {
  expect(math.add(1, 2)).toBe(3);
});

test('subtracts 5 - 3 to equal 2', () => {
  expect(math.subtract(5, 3)).toBe(2);
});

test('multiplies 4 * 6 to equal 24', () => {
  expect(math.multiply(4, 6)).toBe(24);
});

test('divides 10 / 2 to equal 5', () => {
  expect(math.divide(10, 2)).toBe(5);
});

// Tests using Math Object
test('square root of 9 to equal 3', () => {
  expect(math.sqrt(9)).toBe(3);
});

test('max of 10 and 20 to equal 20', () => {
  expect(math.max(10, 20)).toBe(20);
});
