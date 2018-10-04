const expect = require('chai').expect;
require('..')();

describe('Array#prototype#Prepend', () => {
  const input = [2, 3];

  it('should have 1 prepended to input', () => {
    const expected = [1, 2, 3];

    const actual = input.Prepend(1);
    expect(actual).to.eql(expected);
  });
});
