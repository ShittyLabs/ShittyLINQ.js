const expect = require('chai').expect;
require('..')();

describe('Array#prototype#Distinct', function() {
  it('Should return distinct elements for an array of numbers', function() {
    const input = [1, 2, 3, 3, 3, 5, 5];
    const expected = [1, 2, 3, 5];
    const actual = input.Distinct();
    expect(actual).to.eql(expected);
  });

  it('Should return distinct elements for an array of strings', function() {
    const input = ['hello', 'hello', 'world', '!'];
    const expected = ['hello', 'world', '!'];
    const actual = input.Distinct();
    expect(actual).to.eql(expected);
  });

  it('Should return distinct elements for an array of objects when comparing their references', function() {
    const obj1 = { _id: 2, name: 'Bernie' };
    const obj2 = { _id: 3, name: 'Susan' };
    const input = [obj1, obj2, obj1];
    const expected = [obj1, obj2];

    const actual = input.Distinct();

    expect(actual).to.eql(expected);
  });

  it('Should return distinct elements for an array of objects when comparing their _id values', function() {
    const input = [
      { _id: 2, name: 'Bernie' },
      { _id: 3, name: 'Susan' },
      { _id: 2, name: 'Terry' }
    ];
    const expected = [{ _id: 2, name: 'Bernie' }, { _id: 3, name: 'Susan' }];

    const actual = input.Distinct(({ _id: id1 }, { _id: id2 }) => id1 === id2);

    expect(actual).to.eql(expected);
  });
});
