const expect = require("chai").expect;
const map = require("../src/map");

describe("map", function() {
    it("Should double each number", function() {
        const input = [1, 2, 3];
        const expected = [2, 4, 6];

        const actual = map(x => x * 2, input);
        expect(actual).to.eql(expected);
    });
});