const expect = require('chai').expect;
require('..')();

describe('Array#prototype#Count', function() {
  const input = [1, 2, 3, 4, 5, 6];

  it('Should returns the number of elements in a sequence', function() {
    const expected = 6;
    const actual = input.Count();
    expect(actual).to.eql(expected);
  });

  it('Should returns a number that represents how many elements in the specified sequence satisfy a condition.', function() {
    const expected = 3;
    const actual = input.Count(x => x > 3);
    expect(actual).to.eql(expected);
  });

  it('Should throw an error when source is null', function() {
    const nInput = null;
    expect(() => nInput.Count()).to.throw();
  });

  it('Should throw an error when predicate is null', function() {
    expect(() => input.Count(null)).to.throw();
  });
});
