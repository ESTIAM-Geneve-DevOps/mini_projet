const circleArea = require('../circleArea');

test('area of a circle with radius 2 should be 12.57', () => {
  expect(circleArea("2")).toBeCloseTo(12.57, 2);
});

test('area of a circle with radius 0.5 should be 0.79', () => {
  expect(circleArea("0.5")).toBeCloseTo(0.79, 2);
});

test('area of a circle with radius -2 should be 12.57', () => {
  expect(circleArea("-2")).toBeCloseTo(12.57, 2);
});

test('area of a circle with radius "2" should be 12.57', () => {
  expect(circleArea("2")).toBeCloseTo(12.57, 2);
});

test('area of a circle with radius "wow" should be -1', () => {
  expect(circleArea("2")).toBeCloseTo(12.57, -1);
});
