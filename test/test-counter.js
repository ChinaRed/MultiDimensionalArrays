var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var mda = require('../MultidimensionalArray.js');
 
describe('count', function() {
  it('Returns a number representing how many truthy values are inside the argument, sample_array', function() {
    
    var sample_array = [ 0, 1, 2, 3, 2, 1, 0, -1];
    var result = mda.count();
    var emptyArr = [];

    count.filter(function(array){
      if (array() > 0){
        then(array() === true);
      }
      expect(array).to.be.a(number);
      expect(array).to.be(true);

      if (array(i) === true){
        emptyArr.push(i);
      }

    });

    
    expect(result).to.be.a(Number);
    result.should.equal(10);
  });
});
