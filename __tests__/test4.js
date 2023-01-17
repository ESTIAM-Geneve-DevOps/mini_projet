const shortestWord = require('../shortestWord');

test('shortest word in "the quick brown fox" should be "the"', () => {
  expect(shortestWord("the quick brown fox")).toBe("the");
});

test('shortest word in "javascript is fun" should be "is"', () => {
  expect(shortestWord("javascript is fun")).toBe("is");
});

test('shortest word in "Hello World" should be "Hello"', () => {
  expect(shortestWord("Hello World")).toBe("Hello");
});

test('shortest word in "" should be ""', () => {
  expect(shortestWord("")).toBe("");
});
