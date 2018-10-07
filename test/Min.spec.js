const expect = require('chai').expect;
require('..')();
describe('Array#prototype#Min', function() {
  const numInput = [1, 2, 3, 4, 5, 6];
  it('Should return the min value in number array', function() {
    const expected = 1;
    const actual = numInput.Min();
    expect(actual).to.eql(expected);
  });
  const objInput = [
    { name: 'Bill', age: 32 },
    { name: 'Jim', age: 13 },
    { name: 'Bart', age: 25 }
  ];
  it('Should return the object with the min property value in object array', function() {
    const expected = { name: 'Jim', age: 13 };
    const actual = objInput.Min(x => x.age);
    expect(actual).to.eql(expected);
  });
});
