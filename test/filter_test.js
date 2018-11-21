const assert = require('assert');
const {filter} = require('../src/library');

const isEven = function(number) {
  return number%2 == 0;
};

describe("filter", function() {

  it("should work for one element array", function() {
    assert.deepEqual(filter(isEven, [2]), [2]);
  });

  it("should work for array having only zero", function() {
    assert.deepEqual(filter(isEven, [0]), [0]);
  });

  it("should work for empty array", function() {
    assert.deepEqual(filter(isEven, []), []);
  });

  it("should work for single odd element array", function() {
    assert.deepEqual(filter(isEven, [1]), []);
  });

  it("should work for multiple element array", function() {
    assert.deepEqual(filter(isEven, [1,2,3,4]), [2,4]);
  });

  it("should work for array having negative values", function() {
    assert.deepEqual(filter(isEven, [1,-2,-3,4]), [-2,4]);
  });

});
