const _defaultEqualityComparer = require('./.internal/_defaultEqualityComparer');

/**
 * @template T
 *
 * Produces the set difference of two sequences by using the specified IEqualityComparer<T>, if provided, to compare values.
 *
 * @this {Array<T>}
 * @param {Array<T>} second
 * @param {(a: T, b: T) => boolean} comparer
 */
function Except(second, comparer = _defaultEqualityComparer) {
  return this.filter(item => !second.find(sndItem => comparer(item, sndItem)));
}

module.exports = Except;
