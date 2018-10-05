const expect = require('chai').expect;
require('..')();

describe('Array#prototype#ElementAt', function() {
  const input = [1, 2, 3];

  // it('Should throw an error when input is null', function() {
  //   expect(() => input.ElementAt(null)).to.throw();
  // });
  // it('Should throw an error when input is undefined', function() {
  //   expect(() => input.ElementAt()).to.throw();
  // });
  it('Should throw an error when index parameter is less than 0', function() {
    expect(() => input.ElementAt(-1)).to.throw();
  });
  it('Should throw an error when index parameter is greater than the length of the array', function() {
    expect(() => input.ElementAt(4)).to.throw();
  });
  it('Should throw an error when index parameter is equal to the length of the array', function() {
    expect(() => input.ElementAt(3)).to.throw();
  });
});
