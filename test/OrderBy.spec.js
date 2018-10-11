const expect = require('chai').expect;
require('..')();
describe('Array#prototype#Reverse', function () {

    it('Should return sorted based on provided key for all same types', function () {
        const inputSameType = [{ x: 3, y: 9 },{ x: 2, y: 4 }];
        const expectedSameType = [{ x: 2, y: 4 }, { x: 3, y: 9 }];
        const actualSameType = inputSameType.OrderBy(x);
        expect(actualSameType).to.eql(expectedSameType);
    });
    it('Should return sorted based on provided key for mixed types', function () {
        const inputMixedType = [{ x: 2, y: 'b' }, { x: 3, y: 'a' }];
        const expectedMixedType = [{ x: 3, y: 'a' }, { x: 2, y: 'b' }];
        const actualMixedType = inputMixedType.OrderBy(y);
        expect(actualMixedType).to.eql(expectedMixedType);
    });
    it('Should return input as output for one element', function () {
        const inputOneEle = [{ x: 3}];
        const expectedOneEle = [{ x: 3}];
        const actualOneEle = inputOneEle.OrderBy(y);
        expect(actualOneEle).to.eql(expectedOneEle);
    });
    it('Should throw an error when input is null', function () {
        expect(() => null.OrderBy(x)).to.throw();
    });
    it('Should throw an error when input is undefined', function () {
        expect(() => undefined.OrderBy(x)).to.throw();
    });
});