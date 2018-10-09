const expect = require('chai').expect;
require('..')();

describe('Array#Repeat', function() {
  it('Should throw an error when the count is less than 0', function() {
    const element = null;
    const negativeCount = -1;

    expect(() => Array.Repeat(element, negativeCount)).to.throw(
      RangeError,
      '`count` is less than 0.'
    );
  });

  it('Should create an empty array when the count is 0', function() {
    const element = 5;
    const zeroCount = 0;

    expect(Array.Repeat(element, zeroCount)).to.be.an('array').that.is.empty;
  });

  it('Should create an array with the element repeated the expected number of times', function() {
    const element = 'a';
    const expected = [element, element, element, element, element];
    const count = expected.length;

    expect(Array.Repeat(element, count)).to.eql(expected);
  });
});
