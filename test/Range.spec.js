const expect = require('chai').expect;
require('..')();

describe('Array#Range', function() {
  it('Should return an array of integers beginning with "start" for "count"', function() {
    const start = 13;
    const count = 6;
    const expected = [13, 14, 15, 16, 17, 18];
    const actual = Array.Range(start, count);

    expect(actual).to.eql(expected);
  });

  it('Should throw error when "start" is a non-integer', function() {
    expect(() => Array.Range(1.2)).to.throw();
    expect(() => Array.Range('a')).to.throw();
  });

  it('Should throw error when "count" is a non-integer', function() {
    expect(() => Array.Range(1, 1.2)).to.throw();
    expect(() => Array.Range(1, 'a')).to.throw();
  });
});