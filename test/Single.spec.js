const expect = require('chai').expect;
require('..')();

describe('Array#prototype#Single', function() {
  const input = [1, 2, 3, 4, 5, 6];
  const emptyInput = [];

  it('Should return the single number that is greater than 1 but less than 3', function() {
    const expected = 6;
    const actual = input.Single(x => x > 5);
    expect(actual).to.eql(expected);
  });

  it('Should throw an error when predicate is null', function() {
    expect(() => input.Single(null)).to.throw('Source or predicate is null');
  });

  it('Should throw an error when predicate is undefined', function() {
    expect(() => input.Single()).to.throw('Source or predicate is null');
  });

  it('Should throw an error when source sequence is empty', function() {
    expect(() => emptyInput.Single(num => num > 5)).to.throw(
      'The source sequence is empty'
    );
  });

  it('Should throw an error when multiple elements pass predicate test', function() {
    expect(() => input.Single(num => num > 1)).to.throw(
      'More than one element satisfies the condition in predicate'
    );
  });

  it('Should throw an error when no elements pass predicate test', function() {
    expect(() => input.Single(num => num > 10)).to.throw(
      'No element satisfies the condition in predicate'
    );
  });
});
