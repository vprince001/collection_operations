const assert = require('assert');
const {reduce} = require('../src/library');

const sum = function(first, second) {
  return first + second;
};

describe("reduce", function() {

  it("should work for two element arrays", function() {
    assert.equal(3, reduce(sum, [1,2]));
  });

  it("should work for one element arrays", function() {
    assert.equal(4, reduce(sum, [4]));
  });

  it("should work for arrays having only zero", function() {
    assert.equal(0, reduce(sum, [0]));
  });

  it("should work for empty arrays", function() {
    assert.equal(undefined, reduce(sum, []));
  });

  it("should work for multiple element arrays", function() {
    assert.equal(45, reduce(sum, [1,2,3,4,5,6,7,8,9]));
  });

  it("should work for multiple element arrays with initializer", function() {
    assert.equal(12, reduce(sum, [1,2,3,4], 2));
  });

});
