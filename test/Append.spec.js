const expect = require('chai').expect;
require('..')();

describe('Array#prototype#Append', function() {
  it('Should not change the original array', function() {
    const numbers = [1, 2, 3, 4];
    const expected = [1, 2, 3, 4];
    numbers.Append(5);
    expect(numbers).to.eql(expected);
  });

  it('Should add the element to the end of the array', function() {
    const numbers = [1, 2, 3, 4];
    const expected = [1, 2, 3, 4, 5];
    const actual = numbers.Append(5);
    expect(actual).to.eql(expected);
  });

  it('Should throw an error when source is null', function() {
    expect(() => Array.prototype.Append.call(null, 5)).to.throw();
  });
});
