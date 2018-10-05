const expect = require('chai').expect;
require('..')();

describe('Array#prototype#ToDictionary', function() {
  const input = [{ id: 'abfq-f39f', name: 'Test' }];

  it('Should convert into dictionary object [no parameter]', function() {
    const expected = { 'abfq-f39f': { id: 'abfq-f39f', name: 'Test' } };

    const actual = input.ToDictionary();
    expect(actual).to.eql(expected);
  });

  it('Should convert into dictionary object [with parameter]', function() {
    const expected = { Test: { id: 'abfq-f39f', name: 'Test' } };

    const actual = input.ToDictionary('name');
    expect(actual).to.eql(expected);
  });

  it('Should throw an error not array', function() {
    expect(() => ''.ToDictionary()).to.throw();
  });

  it('Should throw an error parameter not in array', function() {
    expect(() => input.ToDictionary('ashok')).to.throw();
  });
});
