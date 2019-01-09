/**
 * @template T
 * @template U
 * @param {Array<U>} inner
 * @returns {Array<T|U>}
 */
function Union(inner) {
  return [...new Set([...this, ...inner])];
}

module.exports = Union;
