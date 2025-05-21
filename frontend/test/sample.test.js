const assert = require('assert');
const test = require('node:test');

test('array includes value', () => {
  const arr = [1,2,3];
  assert.ok(arr.includes(2));
});
