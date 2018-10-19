const expect = require('chai').expect;
require('..')();

describe('Array#prototype#Take', function() {
  const input = [1, 2, 3, 4, 5, 6];
  it('Should return the first 4 numbers', function() {
    const expected = [1, 2, 3, 4];
    const actual = input.Take(4);
    expect(actual).to.eql(expected);
  });

  it('Should throw an error when count is undefined', function() {
    expect(() => input.Take()).to.throw();
  });

  it('Should throw an error when source is empty', function() {
    expect(() => [].Take(3)).to.throw();
  });
});
