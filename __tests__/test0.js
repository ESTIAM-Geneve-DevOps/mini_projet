const premier = require('../app/commands/premier.js');

test('simple test should be test', () => {
  expect(premier("test")).toBe("false");
});

test('nothing should be test', () => {
  expect(premier("")).toBe("false");
});

test('negative numbers should be test', () => {
  expect(premier("-5")).toBe("false");
});
