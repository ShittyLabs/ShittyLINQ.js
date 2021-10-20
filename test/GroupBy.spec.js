const { expect } = require('chai');
const { it } = require('mocha');
require('..')();

describe('Array#prototype#GroupBy', function() {
  const pets = [
    { name: 'Barley', age: 8.3 },
    { name: 'Boots', age: 4.9 },
    { name: 'Whiskers', age: 1.5 },
    { name: 'Daisy', age: 4.3 }
  ];

  const fellowship = [
    'Frodo',
    'Samwise',
    'Merry',
    'Pippin',
    'Aragorn',
    'Boromir',
    'Legolas',
    'Gimli',
    'Gandalf'
  ];

  it('Should perform the `GroupBy` operation with objects', function() {
    const keySelector = pet => Math.floor(pet.age);
    const elementSelector = pet => pet.age;
    const resultSelector = (baseAge, ages) => ({
      key: baseAge,
      count: ages.length,
      min: Math.min(...ages),
      max: Math.max(...ages)
    });

    const actual = pets.GroupBy(keySelector, elementSelector, resultSelector);

    const expected = [
      { key: 8, count: 1, min: 8.3, max: 8.3 },
      { key: 4, count: 2, min: 4.3, max: 4.9 },
      { key: 1, count: 1, min: 1.5, max: 1.5 }
    ];

    expect(actual).to.eql(expected);
  });

  it('Should perform the `GroupBy` operation with strings', function() {
    const actual = fellowship.GroupBy(
      name => name.length,
      name => name,
      (length, names) => `${length}:${names.sort().join(', ')}`
    );

    const expected = [
      '5:Frodo, Gimli, Merry',
      '7:Aragorn, Boromir, Gandalf, Legolas, Samwise',
      '6:Pippin'
    ];

    expect(actual).to.be.eql(expected);
  });

  it('Should perform the `GroupBy` operation with the default result selector', function() {
    const keySelector = pet => Math.floor(pet.age);
    const elementSelector = pet => pet.age;

    const actual = pets.GroupBy(keySelector, elementSelector);

    const expected = [
      { key: 8, values: [8.3] },
      { key: 4, values: [4.9, 4.3] },
      { key: 1, values: [1.5] }
    ];

    expect(actual).to.eql(expected);
  });

  it('Should throw an error when the `source` is `null`', function() {
    expect(() =>
      Array.prototype.GroupBy.call(null, n => n, n => n, (key, _) => key)
    ).to.throw();
  });

  it('Should throw an error when the `keySelector` is `null`', function() {
    expect(() => [1, 2, 3].GroupBy(null, n => n, (key, _) => key)).to.throw(
      '`keySelector` is `null`'
    );
  });

  it('Should throw an error when the `elementSelector` is `null`', function() {
    expect(() => [1, 2, 3].GroupBy(n => n, null, (key, _) => key)).to.throw(
      '`elementSelector` is `null`'
    );
  });

  it('Should throw an error when the `resultSelector` is `null`', function() {
    expect(() => [1, 2, 3].GroupBy(n => n, n => n, null)).to.throw(
      '`resultSelector` is `null`'
    );
  });
});
