const sansvoyelle = require('../app/commands/sansvoyelle.js');

test('remove vowels from "hello" should be "hll"', () => {
  expect(sansvoyelle("hello")).toBe("hll");
});

test('remove vowels from "javascript" should be "jvscrpt"', () => {
  expect(sansvoyelle("javascript")).toBe("jvscrpt");
});

test('remove vowels from "abcABC" should be "bcBC"', () => {
  expect(sansvoyelle("abcABC")).toBe("bcBC");
});

test('remove vowels from "" should be ""', () => {
  expect(sansvoyelle("")).toBe("");
});

test('remove vowels from "un deux" should be "n dx"', () => {
  expect(sansvoyelle("un deux")).toBe("n dx");
});
