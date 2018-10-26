const expect = require('chai').expect;
require('..')();

describe('Array#prototype#Zip', () => {
  const input = ['one', 'two', 'three'];
  const original = [1, 2, 3, 4, 5];

  it('should return an array with length of the shortest input array', () => {
    const actual = original.Zip(input, (first, second) => first + ' ' + second);
    expect(actual.length).to.eql(input.length);
  });

  it('should return the expected array', () => {
    const expected = ['1 one', '2 two', '3 three'];
    const actual = original.Zip(input, (first, second) => first + ' ' + second);
    actual.forEach(act => {
      expect(expected.includes(act)).to.eql(true);
    });
  });
});
