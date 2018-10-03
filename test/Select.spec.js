const expect = require('chai').expect;
require('..')();

describe('Array#prototype#Select', function() {
  const input = [1, 2, 3];

  it('Should double each number', function() {
    const expected = [2, 4, 6];

    const actual = input.Select(x => x * 2);
    expect(actual).to.eql(expected);
  });

  it('Should throw an error when xform is null', function() {
    expect(() => input.Select(null)).to.throw();
  });

  it('Should throw an error when xform is undefined', function() {
    expect(() => input.Select()).to.throw();
  });
});
