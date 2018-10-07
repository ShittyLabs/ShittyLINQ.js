const expect = require('chai').expect;
require('..')();

describe('Array#prototype#Sum', () => {
  const input = [1, 2, 3];
  const input_with_null = [1, 2, null, 3];

  it('should display the correct sum', () => {
    const expected = input.reduce((prev, x) => x + prev);

    const actual = input.Sum();
    expect(actual).to.eql(expected);
  });

  it('should not include null values in sum', () => {
    const expected = input_with_null.reduce((prev, x) => x + prev);

    const actual = input_with_null.Sum();
    expect(actual).to.eql(expected);
  });
});
