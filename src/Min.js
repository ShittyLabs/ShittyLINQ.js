/**
 * @template T
 * @param {((x: T) => number)} xform
 * @returns {T}
 * @this {Array<T>}
 */
function Min(xform = x => x) {
  return this.reduce((a, b) => (xform(a) < xform(b) ? a : b));
}
module.exports = Min;
