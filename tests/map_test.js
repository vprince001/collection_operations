const assert = require('assert');
const {map} = require('../src/library');

const square = function(number) {
  return number * number;
};

const testMap = function(mapper, input, output) {
  assert.deepEqual(map(mapper, input), output);
};

testMap(square, [1], [1]);
