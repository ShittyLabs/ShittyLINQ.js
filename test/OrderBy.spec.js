const expect = require('chai').expect;
require('..')();
describe('Array#prototype#Reverse', function () {

    it('Should return sorted string elements', function () {
        const inputAlpha = ["a", "c", "d", "b"];
        const expectedAlpha = ["a", "b", "c", "d"];
        const actualAlpha = inputAlpha.OrderBy();
        expect(actualAlpha).to.eql(expectedAlpha);
    });
    it('Should return sorted consectutive elements', function () {
        const inputRand = [1, 3, 2, 5, 4];
        const expectedRand = [1, 2, 3, 4, 5];
        const actualRand = inputRand.OrderBy();
        expect(actualRand).to.eql(expectedRand);
    });
    it('Should return sorted non-consectutive elements', function () {
        const inputRandNonConsec = [1, 10, 20, 4, 11];
        const expectedRandNonConsec = [1, 4, 10, 11, 20];
        const actualRandNonConsec = inputRandNonConsec.OrderBy();
        expect(actualRandNonConsec).to.eql(expectedRandNonConsec);
    });
    it('Should return sorted array the same elements', function () {
        const inputAllSame = [1, 1, 1];
        const expectedAllSame = [1, 1, 1];
        const actualAllSame = inputAllSame.OrderBy();
        expect(actualAllSame).to.eql(expectedAllSame);
    });
    it('Should return sorted array of one element', function () {
        const inputOneEle = [1];
        const expectedOneEle = [1];
        const actualOneEle = inputOneEle.OrderBy();
        expect(actualOneEle).to.eql(expectedOneEle);
    });
    it('Should throw an error when input is null', function () {
        expect(() => null.OrderBy()).to.throw();
    });
    it('Should throw an error when input is undefined', function () {
        expect(() => undefined.OrderBy()).to.throw();
    });
});