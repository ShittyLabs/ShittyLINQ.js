const expect = require('chai').expect;
require('..')();

describe('Array#prototype#Except', function() {
  describe('Without equality comparer', () => {
    const input = [1, 3, 5];

    it('Should return the set difference', function() {
      const expected = [3];

      const actual = input.Except([1, 5]);
      expect(actual).to.eql(expected);
    });

    it('Should return an empty array when second set is same as the first set', function() {
      const expected = [];

      const actual = input.Except([1, 3, 5]);
      expect(actual).to.eql(expected);
    });

    it('Should throw an error when second is null', function() {
      expect(() => input.Except(null)).to.throw();
    });

    it('Should throw an error when second is undefined', function() {
      expect(() => input.Except()).to.throw();
    });
  });

  //
  describe('With equality comparer', () => {
    const first = [{ x: 0 }, { x: 1 }, { x: 2 }];
    const equalityComparer = (a, b) => a.x === b.x;

    it('Should return an empty array', function() {
      const second = [{ x: 0 }, { x: 1 }, { x: 2 }];
      const expected = [];

      const actual = first.Except(second, equalityComparer);
      expect(actual).to.eql(expected);
    });

    it('Should return the set intersection', function() {
      const second = [{ x: 0 }, { x: 2 }];
      const expected = [{ x: 1 }];

      const actual = first.Except(second, equalityComparer);
      expect(actual).to.eql(expected);
    });

    it('Should throw an error when second is null', function() {
      expect(() => first.Except(null, equalityComparer)).to.throw();
    });

    it('Should throw an error when second is undefined', function() {
      expect(() => first.Except(undefined, equalityComparer)).to.throw();
    });
  });
});
