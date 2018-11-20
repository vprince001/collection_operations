const assert = require('assert');
const {map} = require('../src/library');

const square = function(number) {
  return number * number;
};

const testMap = function(mapper, input, output) {
  assert.deepEqual(map(mapper, input), output);
};

testMap(square, [1], [1]);
testMap(square, [0], [0]);
testMap(square, [], []);
testMap(square, [2], [4]);
testMap(square, [1,2,3,4,5], [1,4,9,16,25]);
