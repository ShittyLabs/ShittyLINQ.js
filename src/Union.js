/**
 * @template T
 * @template U
 * @param {Array<U>} inner
 * @returns {Array<T|U>}
 * @this {Array<T>}
 */
function Union(inner) {
  return [...new Set([...this, ...inner])];
}

module.exports = Union;
