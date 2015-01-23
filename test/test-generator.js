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
  });

    
  it('inner array has length 3 with random boolean values with no arguments', function(){
      
    var result = mda.generator_2d();

    result.forEach(function(innerArray){
    innerArray.should.have.length(3);
    expect(innerArray).to.be.a('array');
    });

  });

  it("Returns an array (length 5) containting arrays (length 4) with random boolean values using 2 arguments",function(){

    var result = mda.generator_2d(5,4);

    expect(result).to.be.a('array');
    expect(result).to.have.length(5);

    result.forEach(function(array){
    expect(array).to.be.a('array');
    expect(array).to.have.length(4);
    });

  });

}); //end of 2nd describe

describe("generator_3d", function() {

  it("Returns an array(length 3), each containing arrays(length 4), each array containing arrays(length 5)", function() {
    
    var result = mda.generator_3d( 3, 4, 5);

    expect(result).to.be.a('array');
    expect(result).to.have.length(3);

    result.forEach(function(array){
      expect(array).to.be.a('array');
      expect(array).to.have.length(4);

      array.forEach(function(insideArray){
        expect(insideArray).to.be.a('array');
        expect(insideArray).to.have.length(5);
      });

    });

  });
  
}); //end of third describe



