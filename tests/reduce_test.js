const assert = require('assert');
const {reduce} = require('../src/library');

const sum = function(first, second) {
  return first + second;
};

const testReduce = function(output, reducer, input, initializer) {
  assert.equal(reduce(reducer, input, initializer), output);
};

testReduce(3, sum, [1,2]);
