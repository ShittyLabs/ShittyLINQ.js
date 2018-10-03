const expect = require('chai').expect;
require('..')();
describe('Array#prototype#Reverse', function () {

    it('Should return sorted string elements', function () {
        const inputAlpha = ["a", "c", "d", "b"];
        const expectedAlpha = ["d", "c", "b", "a"];
        const actualAlpha = inputAlpha.OrderByDescending();
        expect(actualAlpha).to.eql(expectedAlpha);
    });
    it('Should return sorted consectutive elements', function () {
        const inputRand = [1, 3, 2, 5, 4];
        const expectedRand = [5, 4, 3, 2, 1];
        const actualRand = inputRand.OrderByDescending();
        expect(actualRand).to.eql(expectedRand);
    });
    it('Should return sorted non-consectutive elements', function () {
        const inputRandNonConsec = [1, 10, 20, 11];
        const expectedRandNonConsec = [20, 11, 10, 1];
        const actualRandNonConsec = inputRandNonConsec.OrderByDescending();
        expect(actualRandNonConsec).to.eql(expectedRandNonConsec);
    });
    it('Should return sorted array the same elements', function () {
        const inputAllSame = [1, 1, 1];
        const expectedAllSame = [1, 1, 1];
        const actualAllSame = inputAllSame.OrderByDescending();
        expect(actualAllSame).to.eql(expectedAllSame);
    });
    it('Should return sorted array of one element', function () {
        const inputOneEle = [1];
        const expectedOneEle = [1];
        const actualOneEle = inputOneEle.OrderByDescending();
        expect(actualOneEle).to.eql(expectedOneEle);
    });
    it('Should throw an error when input is null', function () {
        expect(() => null.OrderByDescending()).to.throw();
    });
    it('Should throw an error when input is undefined', function () {
        expect(() => undefined.OrderByDescending()).to.throw();
    });
});