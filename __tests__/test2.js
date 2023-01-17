const somme = require('../app/commands/somme.js');

test('sum of letter values in "test" should be 64', () => {
  expect(somme("test")).toBe(64);
});

test('sum of letter values in "abc" should be 6', () => {
  expect(somme("abc")).toBe(6);
});

test('sum of letter values in "abcABC" should be 90', () => {
  expect(somme("abcABC")).toBe(90);
});

test('sum of letter values in "" should be 0', () => {
  expect(somme("")).toBe(0);
});

test('sum of number values in 2 4 1 should be 7', () => {
  expect(somme("2 4 1")).toBe(7);
});
