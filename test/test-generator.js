var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
 
var mda = require('../MultidimensionalArray.js');
 
describe('something', function() {
  it('should do something', function() {
    var something = "some value";
    expect(something).to.be.a('string');
    something.should.equal('some value');
  });
});
