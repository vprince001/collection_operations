const assert = require('assert');
const {map} = require('../src/library');

const square = function(number) {
  return number * number;
};

describe("map", function() {
  it("should work for one element arrays", function() {
    assert.deepEqual(map(square, [1]), [1]);
  });

  it("should work for array having only zero", function() {
    assert.deepEqual(map(square, [0]), [0]);
  });

  it("should work for empty arrays", function() {
    assert.deepEqual(map(square, []), []);
  });

  it("should work for multiple element arrays", function() {
    assert.deepEqual(map(square, [1,2,3,4,5]), [1,4,9,16,25]);
  });
});
