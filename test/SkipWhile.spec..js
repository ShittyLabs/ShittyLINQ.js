const expect = require('chai').expect;
require('..')();

describe('Array#prototype#SkipWhile', function() {
    it('Should return the proper subset, x < 3', function() {
        // arrange
        const input = [1, 2, 3, 4, 5, 6];
        const expected = [3, 4, 5, 6];

        // act
        const actual = input.SkipWhile(x => x < 3);

        // assert
        expect(actual).to.eql(expected);
    })

    it('Should throw an error when predicate is null', function() {
        expect(() => input.Where(null)).to.throw();
    });

    it('Should throw an error when predicate is undefined', function() {
        expect(() => input.Where()).to.throw();
    });
});