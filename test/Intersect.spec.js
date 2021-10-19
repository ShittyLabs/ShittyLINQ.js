const expect = require('chai').expect;
require('..')();

describe('Array#prototype#Intersect', function() {
  describe('Without equality comparer', () => {
    const input = [1, 3, 5];

    it('Should return an empty array', function() {
      const expected = [];

      const actual = input.Intersect([2, 4, 6]);
      expect(actual).to.eql(expected);
    });

    it('Should return all numbers when second set is same as the first set', function() {
      const expected = [1, 3, 5];

      const actual = input.Intersect([1, 3, 5]);
      expect(actual).to.eql(expected);
    });

    it('Should throw an error when second is null', function() {
      expect(() => input.Intersect(null)).to.throw();
    });

    it('Should throw an error when second is undefined', function() {
      expect(() => input.Intersect()).to.throw();
    });
  });

  //
  describe('With equality comparer', () => {
    const first = [{ x: 0 }, { x: 1 }, { x: 2 }];
    const equalityComparer = (a, b) => a.x === b.x;

    it('Should return an empty array', function() {
      const second = [{ x: 3 }, { x: 4 }, { x: 5 }];
      const expected = [];

      const actual = first.Intersect(second, equalityComparer);
      expect(actual).to.eql(expected);
    });

    it('Should return the set intersection', function() {
      const second = [{ x: 2 }, { x: 4 }, { x: 6 }];
      const expected = [{ x: 2 }];

      const actual = first.Intersect(second, equalityComparer);
      expect(actual).to.eql(expected);
    });

    it('Should return all numbers when second set is same as the first set', function() {
      const second = [...first];
      const expected = [...first];

      const actual = first.Intersect(second, equalityComparer);
      expect(actual).to.eql(expected);
    });

    it('Should throw an error when second is null', function() {
      expect(() => first.Intersect(null, equalityComparer)).to.throw();
    });

    it('Should throw an error when second is undefined', function() {
      expect(() => first.Intersect(undefined, equalityComparer)).to.throw();
    });
  });
});
