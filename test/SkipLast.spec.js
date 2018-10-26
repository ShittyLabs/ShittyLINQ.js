const expect = require('chai').expect;
require('..')();

describe('Array#prototype#SkipLast', () => {
  const input = ['ant', 'bison', 'camel', 'duck', 'elephant'];

  it('should skip the last two elements', () => {
    const expected = ['ant', 'bison', 'camel'];

    const actual = input.SkipLast(2);
    expect(actual).to.eql(expected);
  });

  it('should throw an appropriate error if "count" is null or undefined', () => {
    expect(() => input.SkipLast(), 'broken when "count" is undefined').to.throw(
      '"count" is not defined'
    );
    expect(() => input.SkipLast(null), 'broken when "count" is null').to.throw(
      '"count" is not defined'
    );
  });

  it('should throw an appropriate error if "count" is defined but not an integer', () => {
    expect(
      () => input.SkipLast('count'),
      'broken when "count" is a string'
    ).to.throw('"count" must be an integer');
    expect(() => input.SkipLast(true), 'broken when "count" is true').to.throw(
      '"count" must be an integer'
    );
    expect(
      () => input.SkipLast(false),
      'broken when "count" is false'
    ).to.throw('"count" must be an integer');
    expect(
      () => input.SkipLast({}),
      'broken when "count" is an object'
    ).to.throw('"count" must be an integer');
    expect(
      () => input.SkipLast(1.2),
      'broken when "count" is a numeric non-integer'
    ).to.throw('"count" must be an integer');
  });
});
