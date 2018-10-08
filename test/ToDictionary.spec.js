const expect = require('chai').expect;
require('..')();

describe('Array#prototype#ToDictionary', function() {
  it('Should return number based dictionary', function() {
    const input = [1, 2, 3, 4];

    const actual = input.ToDictionary(x => x, x => true);
    expect(actual).to.eql({ 1: true, 2: true, 3: true, 4: true });
  });

  it('Should return string based dictionary', function() {
    const input = ['val1', 'val2', 'val3', 'val4'];

    const actual = input.ToDictionary(x => x, x => true);
    expect(actual).to.eql({ val1: true, val2: true, val3: true, val4: true });
  });

  it('Should return object based dictionary', function() {
    const input = [
      { name: 'Adam', id: 1, color: 'Amber' },
      { name: 'Brian', id: 2, color: 'Blue' },
      { name: 'Charles', id: 3, color: 'Cyan' },
      { name: 'Dani', id: 4, color: 'Deep Purple' }
    ];

    const actual = input.ToDictionary(x => x.name, x => x.id);
    expect(actual).to.eql({ Adam: 1, Brian: 2, Charles: 3, Dani: 4 });
  });

  it('Should override duplicate value for same key', function() {
    const input = [1, 2, 3, 4];

    const actual = input.ToDictionary(x => x, x => true);
    expect(actual).to.eql({ 1: true, 2: true, 3: true, 4: true });
  });

  it('Should throw an error when keySelector is null', function() {
    const input = [1, 2, 3, 4];
    expect(() => input.ToDictionary(null, x => true)).to.throw();
  });

  it('Should throw an error when keySelector is undefined', function() {
    const input = [1, 2, 3, 4];
    expect(() => input.ToDictionary(undefined, x => true)).to.throw();
  });

  it('Should throw an error when elementSelector is null', function() {
    const input = [1, 2, 3, 4];
    expect(() => input.ToDictionary(x => x, null)).to.throw();
  });

  it('Should throw an error when elementSelector is undefined', function() {
    const input = [1, 2, 3, 4];
    expect(() => input.ToDictionary(x => x, undefined)).to.throw();
  });

  it('Should throw an error when keySelector produces duplicate keys for two elements.', function() {
    const input = [1, 2, 2, 4];
    expect(() => input.ToDictionary(x => x, true)).to.throw();
  });

  it('Should throw an error when keySelector produces a key that is null.', function() {
    const input = [1, 2, null, 4];
    expect(() => input.ToDictionary(x => x, true)).to.throw();
  });
});
