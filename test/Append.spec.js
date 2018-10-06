const expect = require('chai').expect;
require('..')();

describe('Array#prototype#Append', function() {
  /**
   * @param {number} a
   * @param {number} b
   */

  const input = [1, 2, 3, 4, 5];

  it('Should append a value and return a new array', function() {
    const expected = [1, 2, 3, 4, 5, 6];
    const actual = input.Append(6);

    expect(actual).to.eql(expected);
  });

  it('Should not mutate the orginal array', function() {
    input.Append(6);

    expect(input).to.eql([1, 2, 3, 4, 5]);
  });

  it('Should throw an error when argument is null', function() {
    expect(() => {
      var x = input.Append(null);
    }).to.throw();
  });
});
