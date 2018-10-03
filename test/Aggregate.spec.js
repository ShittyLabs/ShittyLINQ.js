const expect = require('chai').expect;
require('..')();

describe('Array#prototype#Select', function() {
  const input = [1, 2, 3, 4, 5];

  it('Should sum each number when seed is supplied', function() {
    const add = (a, b) => a + b;
    const expected = 15;
    const actual = input.Aggregate(0, add);

    expect(actual).to.eql(expected);
  });

  it('Should sum each number when seed is not supplied', function() {
    const add = (a, b) => a + b;
    const expected = 15;
    const actual = input.Aggregate(add);

    expect(actual).to.eql(expected);
  });

  it('Should throw an error when accum is null', function() {
    expect(() => input.Aggregate(null)).to.throw();
  });

  it('Should throw an error when xform is undefined', function() {
    expect(() => input.Aggregate()).to.throw();
  });
});
