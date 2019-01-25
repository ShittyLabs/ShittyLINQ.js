/**
 * @template T
 * @returns {number}
 * @this {Array<T>}
 */

/**
 * @template T
 * @param {((x: T) => boolean)} predicate
 * @returns {number}
 */
function Count(predicate) {
  switch (arguments.length) {
    case 0:
      return this.Aggregate(0, (memo, v) => ++memo);
    case 1:
      return this.Where(predicate).Aggregate(0, (memo, v) => ++memo);
    default:
      throw new Error();
  }
}

module.exports = Count;
