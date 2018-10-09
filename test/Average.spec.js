const expect = require('chai').expect;
require('..')();

describe('Array#prototype#Average', function() {
  it('Should return the average of 4 numbers', function() {
    const input = [2, 4, 6, 8];
    const expected = 5;
    const actual = input.Average();
    expect(actual).to.eql(expected);
  });

  it('Should throw an error when sequence contains no elements', function() {
    expect(() => [].Average()).to.throw();
  });

  it('Should return average of lengths', () => {
    const input = ['apple', 'orange', 'grape', 'strawberry', 'blueberry'];
    const expected = 7;
    const actual = input.Average(x => x.length);
    expect(actual).to.eql(expected);
  });
});
