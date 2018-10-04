const expect = require('chai').expect;
require('..')();

describe('Array#prototype#Except', function() {
  const input = [1, 2, 3, 6];

  it('Should select each number except 2', function() {
    const expected = [1, 3, 6];

    const actual = input.Except([2]);
    expect(actual).to.eql(expected);
  });

  it('Should select each number except 2,3', function() {
    const expected = [1, 6];

    const actual = input.Except([2, 3]);
    expect(actual).to.eql(expected);
  });

  it('Should throw an error when xform is null', function() {
    expect(() => input.Select(null)).to.throw();
  });

  it('Should throw an error when xform is undefined', function() {
    expect(() => input.Select()).to.throw();
  });
});
