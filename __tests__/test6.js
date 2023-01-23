const airecercle = require('../app/commands/airecercle.js');

test('area of a circle with radius 2 should be 12.57', () => {
  expect(airecercle(2)).toBeCloseTo(12.57, 2);
});

test('area of a circle with radius 0.5 should be 0.79', () => {
  expect(airecercle("0.5")).toBeCloseTo(0.79, 2);
});

test('area of a circle with radius -2 should be 12.57', () => {
  expect(airecercle("-2")).toBeCloseTo(12.57, 2);
});

test('area of a circle with radius "2" should be 12.57', () => {
  expect(airecercle("2")).toBeCloseTo(12.57, 2);
});

test('area of a circle with radius "wow" should be -1', () => {
  expect(airecercle("wow")).toBeCloseTo(-1, 0);
});
