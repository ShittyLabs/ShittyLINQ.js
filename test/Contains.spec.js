const expect = require('chai').expect;
require('..')();

describe('Array#prototype#Contains', function() {
  const input = [1, 2, 3, 4, 5, 6];

  it('Should return true', function() {
    const expected = true;
    const actual = input.Contains(4);
    expect(actual).to.eql(expected);
  });

  it('Should return false', function() {
    const expected = false;
    const actual = input.Contains(7);
    expect(actual).to.eql(expected);
  });
});
