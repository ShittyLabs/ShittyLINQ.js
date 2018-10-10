const _or = (a, b) => a || b;
/**
 * @template T
 * @param {((x: T) => boolean)} predicate
 * @returns {boolean} If any one element of the sequence satisfies a condition
 */
function Any(predicate) {
  if (predicate) return this.map(predicate).reduce(_or);
  return this.length > 0;
}
module.exports = Any;
