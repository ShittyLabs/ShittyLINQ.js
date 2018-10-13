const expect = require('chai').expect;
require('..')();
describe('Array#prototype#OrderByDescending', function() {
  it('Should return sorted based on provided key for all same types', function() {
    const inputSameType = [{ v1: 3, v2: 9 }, { v1: 2, v2: 4 }];
    const expectedSameType = [{ v1: 3, v2: 9 }, { v1: 2, v2: 4 }];
    const actualSameType = inputSameType.OrderByDescending(x => x.v1);
    expect(actualSameType).to.eql(expectedSameType);
  });
  it('Should return sorted based on provided key for mixed types', function() {
    const inputMixedType = [{ v1: 1, v2: 'a' }, { v1: 6, v2: 'b' }];
    const expectedMixedType = [{ v1: 6, v2: 'b' }, { v1: 1, v2: 'a' }];
    const actualMixedType = inputMixedType.OrderByDescending(x => x.v2);
    expect(actualMixedType).to.eql(expectedMixedType);
  });
  it('Should return sorted if no keys in list', function() {
    const inputNoKey = [3, 4, 2, 1];
    const expectedNoKey = [4, 3, 2, 1];
    const actualNoKey = inputNoKey.OrderBy(x => x);
    expect(actualNoKey).to.eql(expectedNoKey);
  });
  it('Should throw an error when input is null', function() {
    expect(() => null.OrderByDescending(x)).to.throw();
  });
  it('Should throw an error when input is undefined', function() {
    expect(() => undefined.OrderByDescending(x)).to.throw();
  });

  it('Should throw an error when keySelector is null', function() {
    expect(() => undefined.OrderByDescending(null)).to.throw();
  });
});
