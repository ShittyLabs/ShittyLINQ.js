const expect = require('chai').expect;
require('..')();

describe('Array#prototype#Reverse', function() {
  const input = [1, 2, 3];

  it('Should return reversed element', function() {
    const expected = [3, 2, 1];

    const actual = input.Reverse();
    expect(actual).to.eql(expected);
  });

  it('Should return reversed element from string converted to array', function() {
    const expected = [...'olleh'];
    const actual = [...'hello'].Reverse();
    expect(actual).to.eql(expected);
  });

  it('Should throw an error when input is null', function() {
    expect(() => null.Reverse()).to.throw();
  });

  it('Should throw an error when input is undefined', function() {
    expect(() => undefined.Reverse()).to.throw();
  });
});
