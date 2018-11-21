const assert = require('assert');
const {reduce} = require('../src/library');

const sum = function(first, second) {
  return first + second;
};

const testReduce = function(output, reducer, input, initializer) {
  assert.equal(output, reduce(reducer, input, initializer));
};

testReduce(3, sum, [1,2]);
testReduce(4, sum, [4]);
testReduce(0, sum, [0]);
testReduce(undefined, sum, []);
testReduce(45, sum, [1,2,3,4,5,6,7,8,9]);
testReduce(12, sum, [1,2,3,4], 2)
