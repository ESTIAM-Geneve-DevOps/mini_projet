const isPrime = require('../isPrime');

test('5 should be prime', () => {
  expect(isPrime("5")).toBe(true);
});

test('6 should not be prime', () => {
  expect(isPrime("6")).toBe(false);
});

test('negative numbers should not be prime', () => {
  expect(isPrime("-5")).toBe(false);
});
