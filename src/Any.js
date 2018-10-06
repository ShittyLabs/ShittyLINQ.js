/**
 * @template T
 * @param {((x: T) => boolean)} predicate
 * @returns {boolean} If any one element of the sequence satisfies a condition
 */
function Any(predicate = x => x) {
  return this.find(val => predicate(val)) !== undefined;
}
module.exports = Any;
