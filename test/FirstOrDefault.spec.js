const expect = require('chai').expect;
require('..')();

describe('Array#prototype#First', function() {
  const input = [2, 4, 6, 8];
  it('Should return the first value with no predicate passed', function() {
    const expected = 2;
    const actual = input.FirstOrDefault();
    expect(actual).to.eql(expected);
  });
  it('Should return the first value matching predicate', function() {
    const expected = 2;
    const actual = input.FirstOrDefault(x => x % 2 === 0);
    expect(actual).to.eql(expected);
  });
  it('Should return undefined when no matching element in array with values', function() {
    const actual = input.FirstOrDefault(x => x === 1);
    expect(actual).to.be.undefined;
  });
  it('Should return undefined when no matching element in empty array', function() {
    const actual = [].FirstOrDefault();
    expect(actual).to.be.undefined;
  });
});
