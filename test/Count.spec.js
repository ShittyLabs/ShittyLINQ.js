const expect = require('chai').expect;
require('..')();

describe('Array#prototype#Count', () => {
    const input = [1, 2, 3];

    it('should return correct length', () => {
        expect(input.Count()).to.eql(input.length);
    });
});