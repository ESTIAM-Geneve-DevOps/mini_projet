const sumLetterValues = require('../sumLetterValues');

test('sum of letter values in "test" should be 20', () => {
  expect(sumLetterValues("test")).toBe(20);
});

test('sum of letter values in "abc" should be 6', () => {
  expect(sumLetterValues("abc")).toBe(6);
});

test('sum of letter values in "abcABC" should be 54', () => {
  expect(sumLetterValues("abcABC")).toBe(54);
});

test('sum of letter values in "" should be 0', () => {
  expect(sumLetterValues("")).toBe(0);
});

test('sum of number values in 2 4 1 should be 7', () => {
  expect(sumLetterValues("2 4 1")).toBe(7);
});
