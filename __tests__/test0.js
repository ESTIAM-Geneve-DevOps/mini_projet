const isPrime = require('../test');

test('simple test should be test', () => {
  expect(isPrime("test")).toBe("test");
});

test('nothing should be test', () => {
  expect(isPrime("")).toBe("test");
});

test('negative numbers should be test', () => {
  expect(isPrime("-5")).toBe("test");
});
