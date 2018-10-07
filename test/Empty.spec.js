const expect = require('chai').expect;
require('..')();

describe('Array#Empty', function() {

    it('Should return an empty array', function() {
        const expected = [];
        const actual = Array.Empty();

        expect(actual).to.eql(expected);
    });
});