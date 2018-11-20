const assert = require('assert');
const {filter} = require('../src/library');

const isEven = function(number) {
  return number%2 == 0;
};

const testFilter = function(filterer, input, output) {
  assert.deepEqual(filter(filterer, input), output);
};

testFilter(isEven, [2], [2]);
testFilter(isEven, [0], [0]);
testFilter(isEven, [], []);
testFilter(isEven, [1], []);
testFilter(isEven, [1,2,3,4], [2,4]);
testFilter(isEven, [1,-2,-3,4], [-2,4]);
