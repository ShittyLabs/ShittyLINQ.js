const expect = require('chai').expect;
require('..')();

describe('Array#prototype#Average', function() {
  it('Should return the first 4 numbers', function() {
    const input = [2, 4, 6, 8];
    const expected = 5;
    const actual = input.Average();
    expect(actual).to.eql(expected);
  });

  it('Should throw an error when source is null', function() {
    expect(() => [].Average()).to.throw();
  });
});
