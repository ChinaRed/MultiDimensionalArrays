var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var mda = require('../MultidimensionalArray.js');
 
describe('generator_1d', function() {
  
  it('Returns an array with length 3 with random boolean values', function() {
    
    var result = mda.generator_1d();

    expect(result).to.be.a('array');
    result.should.have.length(3);

  });

  it('Using one argument, returns an array with length 4 with random boolean values', function() {
    
    var result = mda.generator_1d(4);

    expect(result).to.be.a('array');
    result.should.have.length(4);

  });

  it("Returns an empty array if the argument is not a number", function() {

    var result = mda.generator_1d('potato');

    expect(result).to.be.empty();
    result.should.have.length(0);
  
  });

}); //end of first describe

describe('generator_2d', function() {

  it('Returns an array with 3 arrays inside, each inner array has length 3 with random boolean values with no arguments',function() {
    
    var result = mda.generator_2d();


    expect(result).to.be.a('array');
    result.should.have.length(3);

    result.forEach(function(bitchass){
      bitchass.should.have.length(3);
      expect(bitchass).to.be.a('array');
    });

  });

  it("Returns an array (length 5) containting arrays (length 4) with random boolean values using 2 arguments",function(){

    var result = mda.generator_2d(1,2);

    expect(result).to.be.a('array');
    expect(result).to.have.length(5);

    result.forEach(function(array){
      expect(array).to.be.a('array');
      expect(array).to.have.length(4);

    });


  });





}); //end of second describe
