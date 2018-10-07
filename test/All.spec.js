const expect = require('chai').expect;
require('..')();

describe('Array#prototype#All', function() {
  it('Should return true as predicate matches each case', function() {
    const input = [2, 4, 6, 8];
    const expected = true;
    const actual = input.All(x => x % 2 === 0);
    expect(actual).to.eql(expected);
  });

  it('Should return false as predicate failed to match each case', function() {
    const input = ['hockey', 'basketball', 'baseball'];
    const expected = false;
    const actual = input.All(x => x.includes('s'));
    expect(actual).to.eql(expected);
  });

  it('Should throw an error when source is null', function() {
    expect(() => [].All(x => x === 0)).to.throw();
  });

  it('Should throw an error when predicate is null', function() {
    expect(() => ['a', 'b', 'c'].All()).to.throw();
  });
});
