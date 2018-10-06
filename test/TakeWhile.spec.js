const expect = require('chai').expect;
require('..')();

describe('Array#prototype#TakeWhile', function() {
  it('Should return the first 4 numbers', function() {
    const input = [1, 2, 3, 4, 5, 6];
    const expected = [1, 2, 3, 4];
    const predicate = x => x <= 4;
    const actual = input.TakeWhile(predicate);
    expect(actual).to.eql(expected);
  });

  it('Should throw an error when predicate is undefined', function() {
    expect(() => [1, 2, 3].TakeWhile()).to.throw();
  });

  it('Should throw an error when source is null', function() {
    expect(() => [].TakeWhile()).to.throw();
  });
});
