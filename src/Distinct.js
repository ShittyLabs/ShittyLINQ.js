const _defaultEqualityComparer = require('./.internal/_defaultEqualityComparer');

// Distinct<TSource>(IEnumerable<TSource>)
// Distinct<TSource>(IEnumerable<TSource>, IEqualityComparer<TSource>)

/**
 * @template T
 * @returns {Array<T>}
 */

/**
 * @template T
 * @param {(a: T, b: T) => boolean} equalityComparer
 * @returns {Array<T>}
 * @this {Array<T>}
 */
function Distinct(equalityComparer = _defaultEqualityComparer) {
  return this.filter((val, idx, arr) => {
    const foundIdx = this.findIndex(v => equalityComparer(v, val));
    return foundIdx === idx;
  });
}

module.exports = Distinct;
