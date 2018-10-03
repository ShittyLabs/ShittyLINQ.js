const expect = require('chai').expect;
require('..')();

describe('Array#prototype#Where', function() {
  const input = [1, 2, 3, 4, 5, 6];

  it('Should return only even numbers', function() {
    const expected = [2, 4, 6];
    const actual = input.Where(x => x % 2 === 0);
    expect(actual).to.eql(expected);
  });

  it('Should throw an error when predicate is null', function() {
    expect(() => input.Where(null)).to.throw();
  });

  it('Should throw an error when predicate is undefined', function() {
    expect(() => input.Where()).to.throw();
  });
});
