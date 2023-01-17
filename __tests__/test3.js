const removeVowels = require('../removeVowels');

test('remove vowels from "hello" should be "hll"', () => {
  expect(removeVowels("hello")).toBe("hll");
});

test('remove vowels from "javascript" should be "jvscrpt"', () => {
  expect(removeVowels("javascript")).toBe("jvscrpt");
});

test('remove vowels from "abcABC" should be "bcBC"', () => {
  expect(removeVowels("abcABC")).toBe("bcBC");
});

test('remove vowels from "" should be ""', () => {
  expect(removeVowels("")).toBe("");
});

test('remove vowels from "un deux" should be "n dx"', () => {
  expect(removeVowels("un deux")).toBe("n dx");
});
