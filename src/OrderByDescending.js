/**
 * @template T
 * @template U
 * @returns {Array<U>}
 */

const _defaultComparer = function(a, b) {
  return a - b;
};

function OrderByDescending(keySelector, comparer = _defaultComparer) {
  if (keySelector == null)
    throw 'Argument Null Exception - keySelector is null.';
  if (this === undefined) throw 'Undefined value exception!';
  if (this === null && typeof this === 'object') throw 'Null value exception!';
  return JSON.parse(JSON.stringify(this))
    .sort(comparer)
    .reverse();
}

module.exports = OrderByDescending;
