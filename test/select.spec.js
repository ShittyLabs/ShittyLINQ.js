const expect = require('chai').expect;
require('../index')();

describe('map', function() {
  it('Should double each number', function() {
    const input = [1, 2, 3];
    const expected = [2, 4, 6];

    const actual = input.Select(x => x * 2);
    expect(actual).to.eql(expected);
  });
});
