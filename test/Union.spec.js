const expect = require('chai').expect;
require('..')();

describe('Array#prototype#Union', function() {
  const input = [1, 3, 5];

  it('Should contains all number', function() {
    const expected = [1, 3, 5, 2, 4, 6];

    const actual = input.Union([2, 4, 6]);
    expect(actual).to.eql(expected);
  });

  it('Should not duplicated number', function() {
    const expected = [1, 3, 5];

    const actual = input.Union([1, 3, 5]);
    expect(actual).to.eql(expected);
  });

  it('Should throw an error when adder is null', function() {
    expect(() => input.Union(null)).to.throw();
  });

  it('Should throw an error when adder is undefined', function() {
    expect(() => input.Union()).to.throw();
  });
});
