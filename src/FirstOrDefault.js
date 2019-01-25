/**
 * @template T
 * @param {((x: T) => boolean)} predicate
 * @returns {T}
 * @this {Array<T>}
 */
function FirstOrDefault(predicate) {
  if (predicate) return this.find(predicate);
  return this[0];
}
module.exports = FirstOrDefault;
