const expect = require('chai').expect;
require('..')();

describe('Array#prototype#Concat', function() {
  const input = [1, 2, 3];
  const input2 = [4, 5, 6];

  it('Should concat each number in list', function() {
    const expected = [1, 2, 3, 4, 5, 6];

    const actual = input.Concat(input2);
    expect(actual).to.eql(expected);
  });

  it('Should throw an error when list is null', function() {
    expect(() => input.Concat(null)).to.throw();
  });

  it('Should throw an error when list is undefined', function() {
    expect(() => input.Concat()).to.throw();
  });
});
