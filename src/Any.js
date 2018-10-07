/**
 * @template T
 * @param {((x: T) => boolean)} predicate
 * @returns {boolean} If any one element of the sequence satisfies a condition
 */
function Any(predicate) {
  if (predicate) return this.find(predicate) !== undefined;
  return this.length > 0;
}
module.exports = Any;
