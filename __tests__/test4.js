const pluscourt = require('../app/commands/pluscourt.js');

test('shortest word in "the quick brown fox" should be "the"', () => {
  expect(pluscourt("the quick brown fox")).toBe(" quick brown fox");
});

test('shortest word in "javascript is fun" should be "is"', () => {
  expect(pluscourt("javascript is fun")).toBe("javascript  fun");
});

test('shortest word in "Hello World" should be "Hello"', () => {
  expect(pluscourt("Hello World")).toBe(" World");
});

test('shortest word in "" should be ""', () => {
  expect(pluscourt("")).toBe("");
});
