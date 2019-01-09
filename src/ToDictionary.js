/**
 * @template T
 * @template TKey
 * @template TElement
 * @param {((x: T) => TKey)} keySelector
 * @param {((x: T) => TElement)} elementSelector
 * @returns {{ [key: TKey]: TElement }}
 */
function ToDictionary(keySelector, elementSelector) {
  if (keySelector == null)
    throw 'Argument Null Exception - keySelector is null.';
  if (elementSelector == null)
    throw 'Argument Null Exception - elementSelector is null.';
  return this.reduce((acc, e) => {
    var key = keySelector(e);
    if (key == null)
      throw 'Argument Null Exception - keySelector produces a key that is null.';
    if (key in acc)
      throw 'Argument Exception - keySelector produces duplicate keys for two elements.';

    acc[keySelector(e)] = elementSelector(e);
    return acc;
  }, {});
}

module.exports = ToDictionary;
