const expect = require('chai').expect;
require('..')();

describe('Array#SequenceEqual', function() {
  it('Should throw an error when the sequence is null', function() {
    const array = [1];
    const sequence = null;

    expect(() => array.SequenceEqual(sequence)).to.throw(
      TypeError,
      '`sequence` is null.'
    );
  });

  it('Should return false when the array and sequence have different lengths', function() {
    const array = ['I', 'have', 'four', 'elements'];
    const sequence = ['I', 'do', 'not'];

    const actual = array.SequenceEqual(sequence);

    expect(actual).to.be.false;
  });

  it('Should return true when the array and sequence are the same', function() {
    const pet1 = { name: 'Turbo', age: 2 };
    const pet2 = { name: 'Peanut', age: 8 };

    const array = [pet1, pet2];
    const sequence = [pet1, pet2];

    const actual = array.SequenceEqual(sequence);

    expect(actual).to.be.true;
  });
});
