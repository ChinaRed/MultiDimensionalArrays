var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var mda = require('../MultidimensionalArray.js');
 
describe('counter', function() {
  it('Return a number representing how many truthy values are inside the argument, sample_array', function() {
    
    var sample_array = [ 0, 1, 1, 0, 1, 0, 1, 1];
    var result = mda.counter(sample_array);

    expect(result).to.equal(5);

  });
});
