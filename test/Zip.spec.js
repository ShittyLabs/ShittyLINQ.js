const expect = require('chai').expect;
require('..')();

describe('Array#prototype#Zip', function() {
  const input = [1, 2, 3];

  it('Should Zip correctly', function() {
    const expected = [[1, 'a'], [2, 'b'], [3, 'c']];

    const actual = input.Zip(['a', 'b', 'c']);
    expect(actual).to.eql(expected);
  });

  it('Should Zip truncated correctly', function() {
    const expected = [[1, 'a'], [2, 'b'], [3, 'c']];

    const actual = input.Zip(['a', 'b', 'c', 'd']);
    expect(actual).to.eql(expected);
  });

  it('Should throw when too few values', function() {
    expect(() => input.Zip(['a', 'b'])).to.throw();
  });

  it('Should throw an error when xform is null', function() {
    expect(() => input.Zip(null)).to.throw();
  });

  it('Should throw an error when xform is undefined', function() {
    expect(() => input.Zip()).to.throw();
  });
});
