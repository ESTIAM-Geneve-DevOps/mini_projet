const premier = require('../app/commands/premier.js');

test('5 should be prime', () => {
  expect(premier("5")).toBe("true");
});

test('6 should not be prime', () => {
  expect(premier("6")).toBe("false");
});

test('negative numbers should not be prime', () => {
  expect(premier("-5")).toBe("false");
});
