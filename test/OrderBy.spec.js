const expect = require('chai').expect;
require('..')();
describe('Array#prototype#OrderBy', function() {
  it('Should return sorted based on provided key for all same types', function() {
    const inputSameType = [{ v1: 3, v2: 9 }, { v1: 2, v2: 4 }];
    const expectedSameType = [{ v1: 2, v2: 4 }, { v1: 3, v2: 9 }];
    const actualSameType = inputSameType.OrderBy(x => x.v1);
    expect(actualSameType).to.eql(expectedSameType);
  });

  it('Should return sorted if no keys in list', function() {
    const inputNoKey = [3, 4, 2, 1];
    const expectedNoKey = [1, 2, 3, 4];
    const actualNoKey = inputNoKey.OrderBy(x => x);
    expect(actualNoKey).to.eql(expectedNoKey);
  });

  it('Should return sorted based on provided key for mixed types', function() {
    const inputMixedType = [{ v1: 2, v2: 'b' }, { v1: 3, v2: 'a' }];
    const expectedMixedType = [{ v1: 3, v2: 'a' }, { v1: 2, v2: 'b' }];
    const actualMixedType = inputMixedType.OrderBy(x => x.v2);
    expect(actualMixedType).to.eql(expectedMixedType);
  });
  it('Should throw an error when input is null', function() {
    expect(() => null.OrderBy(x => x)).to.throw();
  });
  it('Should throw an error when input is undefined', function() {
    expect(() => undefined.OrderBy(x => x)).to.throw();
  });
  it('Should throw an error when keySelector is null', function() {
    expect(() => undefined.OrderBy(null)).to.throw();
  });
});
