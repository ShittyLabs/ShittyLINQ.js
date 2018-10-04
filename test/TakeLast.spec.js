const expect = require('chai').expect;
require('..')();

describe('Array#prototype#TakeLast', function() {
  const input = [1, 2, 3, 4, 5, 6];
  const count = 3;

  it('Should take last items', function() {
    const expected = [4, 5, 6];

    const actual = input.TakeLast(input, count);
    expect(actual).to.eql(expected);
  });

  it('Should throw an error when list has not enough items', function() {
    expect(() => input.TakeLast([], count)).to.throw();
  });
});
