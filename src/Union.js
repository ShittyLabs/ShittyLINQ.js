/**
 * @template T
 * @template U
 * @param {((x: T) => U)} xform
 * @returns {Array<U>}
 */
function Union(adder) {
  return [...new Set([...this, ...adder])];
}

module.exports = Union;
