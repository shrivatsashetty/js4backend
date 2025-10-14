// math.test.js
const { add, subtract, multiply } = require('./math');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtracts 5 - 2 to equal 3', () => {
  expect(subtract(5, 2)).toBe(3);
});

test('multiply 4 * 5 to equal 20', () => {
  expect(multiply(4, 5)).toBe(20);
});