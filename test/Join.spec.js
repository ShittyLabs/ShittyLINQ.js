const { expect } = require('chai');
require('..')();

describe('Array#prototype#Join', function() {
  const magnus = { Name: 'Hedlund, Magnus' };
  const terry = { Name: 'Adams, Terry' };
  const charlotte = { Name: 'Weiss, Charlotte' };

  const boots = { Name: 'Boots', Owner: terry };
  const whiskers = { Name: 'Whiskers', Owner: charlotte };
  const daisy = { Name: 'Daisy', Owner: magnus };

  const outer = [magnus, terry, charlotte];
  const inner = [boots, whiskers, daisy];

  const outerKeySelector = person => person.Name;
  const innerKeySelector = pet => pet.Owner.Name;
  const resultSelector = (person, pet) => ({
    person,
    pet
  });
  it('Should perform the Join operation with objects', function() {
    const actual = outer.Join(
      inner,
      outerKeySelector,
      innerKeySelector,
      resultSelector
    );

    const expected = [
      { person: magnus, pet: daisy },
      { person: terry, pet: boots },
      { person: charlotte, pet: whiskers }
    ];

    expect(expected).to.eql(actual);
  });

  it('Should perform the Join operation with strings', function() {
    const outer = ['first', 'second', 'third'];
    const inner = ['essence', 'offer', 'eating'];

    const actual = outer.Join(
      inner,
      outerElement => outerElement[0],
      innerElement => innerElement[1],
      (outerElement, innerElement) => outerElement + ':' + innerElement
    );
    const expected = ['first:offer', 'second:essence'];

    expect(actual).to.eql(expected);
  });

  it('Should perform the Join operation with an equality comparer', function() {
    const outer = ['first', 'second', 'third'];
    const inner = ['ESSENCE', 'OFFER', 'EATING'];

    const actual = outer.Join(
      inner,
      outerElement => outerElement[0],
      innerElement => innerElement[1],
      (outerElement, innerElement) => outerElement + ':' + innerElement,
      (a, b) => a.toLowerCase() === b.toLowerCase()
    );
    const expected = ['first:OFFER', 'second:ESSENCE'];

    expect(actual).to.eql(expected);
  });

  it('Should throw an error when inner is null', function() {
    expect(() =>
      outer.Join(null, outerKeySelector, innerKeySelector, resultSelector)
    );
  });

  it('Should throw an error when outerKeySelector is null', function() {
    expect(() => outer.Join(inner, null, innerKeySelector, resultSelector));
  });

  it('Should throw an error when innerKeySelector is null', function() {
    expect(() => outer.Join(inner, outerKeySelector, null, resultSelector));
  });

  it('Should throw an error when resultSelector is null', function() {
    expect(() => outer.Join(inner, outerKeySelector, innerKeySelector, null));
  });

  it('Should throw an error when inner is undefined', function() {
    expect(() =>
      outer.Join(undefined, outerKeySelector, innerKeySelector, resultSelector)
    );
  });

  it('Should throw an error when outerKeySelector is undefined', function() {
    expect(() =>
      outer.Join(inner, undefined, innerKeySelector, resultSelector)
    );
  });

  it('Should throw an error when innerKeySelector is undefined', function() {
    expect(() =>
      outer.Join(inner, outerKeySelector, undefined, resultSelector)
    );
  });

  it('Should throw an error when resultSelector is undefined', function() {
    expect(() =>
      outer.Join(inner, outerKeySelector, innerKeySelector, undefined)
    );
  });
});
