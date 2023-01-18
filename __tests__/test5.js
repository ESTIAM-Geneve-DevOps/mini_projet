const estpair = require('../app/commands/estpair.js');

test('check if "2" is even should be true', () => {
  expect(estpair("2")).toBe(true);
});

test('check if "3" is even should be false', () => {
  expect(estpair("3")).toBe(false);
});

test('check if "-4" is even should be true', () => {
  expect(estpair("-4")).toBe(true);
});

test('check if "0" is even should be true', () => {
  expect(estpair("0")).toBe(true);
});

test('check if "0" is even should be true', () => {
  expect(estpair("hey")).toBe(false);
});
