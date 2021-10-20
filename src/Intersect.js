const _defaultEqualityComparer = require('./.internal/_defaultEqualityComparer');

/**
 * Produces the set intersection of two sequences by using the
 * specified equality comparer, or the default equality comparer
 * if none is supplied, function to compare values.
 * @param {Array<T>} second
 * @param {(a: T, b: T) => boolean} comparer
 * @returns
 */
function Intersect(second, comparer = _defaultEqualityComparer) {
  if (!this || !second) {
    throw new Error('Value cannot be null or undefined.');
  }
  return this.filter(item => second.find(sndItem => comparer(item, sndItem)));
}

module.exports = Intersect;
