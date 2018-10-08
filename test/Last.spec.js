const expect = require('chai').expect;
require('..')();

describe('Array#prototype#Last', function() {
  it('Should return the last number', function() {
    const input = [1, 2, 3, 4, 5, 6];
    const expected = 6;
    const actual = input.Last();
    expect(actual).to.eql(expected);
  });

  it('Should return the last character', function() {
    const input = ['a', 'b', 'c'];
    const expected = 'c';
    const actual = input.Last();
    expect(actual).to.eql(expected);
  });

  it('Should throw an error when source array is empty', function() {
    expect(() => [].Last()).to.throw();
  });
});
