const expect = require('chai').expect;
require('..')();

describe('Array#prototype#Max', function() {
  const numInput = [1, 2, 3, 4, 5, 6];
  it('Should return the max value in number array', function() {
    const expected = 6;
    const actual = numInput.Max();
    expect(actual).to.eql(expected);
  });
  const objInput = [
    { name: 'Bill', age: 32 },
    { name: 'Jim', age: 13 },
    { name: 'Bart', age: 25 }
  ];
  it('Should return the object with the max property in object array', function() {
    const expected = { name: 'Bill', age: 32 };
    const actual = objInput.Max(x => x.age);
    expect(actual).to.eql(expected);
  });
});
