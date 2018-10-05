const expect = require('chai').expect;
require('..')();

describe('Array#prototype#Distinct', function() {
  const input = [1, 2, 2, 3, 4, 4, 5, 6];
  const inputString = ['a', 'b', 'b', 'c', 'c'];

  it('Should select distinct number', function() {
    const expected = [1, 2, 3, 4, 5, 6];

    const actual = input.Distinct();
    expect(actual).to.eql(expected);
  });

  it('Should select distinct string', function() {
    const expected = ['a', 'b', 'c'];

    const actual = inputString.Distinct();
    expect(actual).to.eql(expected);
  });
});
