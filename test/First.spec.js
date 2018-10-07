const expect = require('chai').expect;
require('..')();

describe('Array#prototype#First', function() {
  const input = [2, 4, 6, 8];
  it('Should return the first value with no predicate passed', function() {
    const expected = 2;
    const actual = input.First();
    expect(actual).to.eql(expected);
  });
  it('Should return the first value matching predicate', function() {
    const expected = 2;
    const actual = input.First(x => x % 2 === 0);
    expect(actual).to.eql(expected);
  });

  it('Should throw an error when sequence contains no matching element on array with elements', function() {
    expect(() => input.First(x => x === 1)).to.throw();
  });
  it('Should throw an error when sequence contains no matching element on empty array', function() {
    expect(() => [].First(x => x === 1)).to.throw();
  });
});
