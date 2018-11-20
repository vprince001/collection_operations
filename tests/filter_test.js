const assert = require('assert');
const {filter} = require('../src/library');

const isEven = function(number) {
  return number%2 == 0;
};

const testFilter = function(filterer, input, output) {
  assert.deepEqual(filter(filterer, input), output);
};

testFilter(isEven, [2], [2]);
