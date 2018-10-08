const expect = require('chai').expect;
require('..')();

describe('Array#prototype#Any', function() {
  const input = [
    { name: 'Bill', age: 21, smoker: true },
    { name: 'Jake', age: 41, smoker: false },
    { name: 'Mark', age: 29, smoker: false },
    { name: 'Bill', age: 32, smoker: false }
  ];
  it('Should return true if any element matches', function() {
    const expected = true;
    const actual = input.Any(x => x.smoker);
    expect(actual).to.eql(expected);
  });
  it('Should return false if no element matches', function() {
    const expected = false;
    const actual = input.Any(x => x.age > 41);
    expect(actual).to.eql(expected);
  });
  it('Should return false if no elements in array', function() {
    const expected = false;
    const actual = [].Any();
    expect(actual).to.eql(expected);
  });
  it('Should return true if elements in array with no predicate', function() {
    const expected = true;
    const actual = input.Any();
    expect(actual).to.eql(expected);
  });
});
