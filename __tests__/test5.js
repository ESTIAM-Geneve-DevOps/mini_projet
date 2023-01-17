const isEven = require('../isEven');

test('check if "2" is even should be true', () => {
  expect(isEven("2")).toBe(true);
});

test('check if "3" is even should be false', () => {
  expect(isEven("3")).toBe(false);
});

test('check if "-4" is even should be true', () => {
  expect(isEven("-4")).toBe(true);
});

test('check if "0" is even should be true', () => {
  expect(isEven("0")).toBe(true);
});

test('check if "0" is even should be true', () => {
  expect(isEven("hey")).toBe(false);
});
