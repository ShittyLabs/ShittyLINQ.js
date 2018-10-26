const { expect } = require('chai');
require('..')();

describe('Array#prototype#GroupJoin', function() {
  const magnus = { Name: 'Hedlund, Magnus' };
  const terry = { Name: 'Adams, Terry' };
  const charlotte = { Name: 'Weiss, Charlotte' };

  const barley = { Name: 'Barley', Owner: terry };
  const boots = { Name: 'Boots', Owner: terry };
  const whiskers = { Name: 'Whiskers', Owner: charlotte };
  const daisy = { Name: 'Daisy', Owner: magnus };

  const outer = [magnus, terry, charlotte];
  const inner = [barley, boots, whiskers, daisy];

  const outerKeySelector = person => person;
  const innerKeySelector = pet => pet.Owner;
  const resultSelector = (person, petCollection) => ({
    OwnerName: person.Name,
    Pets: petCollection.Select(pet => pet.Name)
  });
  it('Should perform the GroupJoin operation with objects', function() {
    const actual = outer.GroupJoin(
      inner,
      outerKeySelector,
      innerKeySelector,
      resultSelector
    );

    const expected = [
      { OwnerName: 'Hedlund, Magnus', Pets: ['Daisy'] },
      { OwnerName: 'Adams, Terry', Pets: ['Barley', 'Boots'] },
      { OwnerName: 'Weiss, Charlotte', Pets: ['Whiskers'] }
    ];

    expect(expected).to.eql(actual);
  });

  it('Should perform the GroupJoin operation with strings', function() {
    const outer = ['first', 'second', 'third'];
    const inner = ['essence', 'offer', 'eating', 'psalm'];

    const actual = outer.GroupJoin(
      inner,
      outerElement => outerElement[0],
      innerElement => innerElement[1],
      (outerElement, innerElements) =>
        outerElement + ':' + innerElements.join(';')
    );
    const expected = ['first:offer', 'second:essence;psalm', 'third:'];

    expect(actual).to.eql(expected);
  });

  it('Should perform the GroupJoin operation with an equality comparer', function() {
    const outer = ['first', 'second', 'third'];
    const inner = ['ESSENCE', 'OFFER', 'EATING', 'PSALM'];

    const actual = outer.GroupJoin(
      inner,
      outerElement => outerElement[0],
      innerElement => innerElement[1],
      (outerElement, innerElements) =>
        outerElement + ':' + innerElements.join(';'),
      (a, b) => a.toLowerCase() === b.toLowerCase()
    );
    const expected = ['first:OFFER', 'second:ESSENCE;PSALM', 'third:'];

    expect(actual).to.eql(expected);
  });

  it('Should throw an error when inner is null', function() {
    expect(() =>
      outer.GroupJoin(null, outerKeySelector, innerKeySelector, resultSelector)
    );
  });

  it('Should throw an error when outerKeySelector is null', function() {
    expect(() =>
      outer.GroupJoin(inner, null, innerKeySelector, resultSelector)
    );
  });

  it('Should throw an error when innerKeySelector is null', function() {
    expect(() =>
      outer.GroupJoin(inner, outerKeySelector, null, resultSelector)
    );
  });

  it('Should throw an error when resultSelector is null', function() {
    expect(() =>
      outer.GroupJoin(inner, outerKeySelector, innerKeySelector, null)
    );
  });

  it('Should throw an error when inner is undefined', function() {
    expect(() =>
      outer.GroupJoin(
        undefined,
        outerKeySelector,
        innerKeySelector,
        resultSelector
      )
    );
  });

  it('Should throw an error when outerKeySelector is undefined', function() {
    expect(() =>
      outer.GroupJoin(inner, undefined, innerKeySelector, resultSelector)
    );
  });

  it('Should throw an error when innerKeySelector is undefined', function() {
    expect(() =>
      outer.GroupJoin(inner, outerKeySelector, undefined, resultSelector)
    );
  });

  it('Should throw an error when resultSelector is undefined', function() {
    expect(() =>
      outer.GroupJoin(inner, outerKeySelector, innerKeySelector, undefined)
    );
  });
});
