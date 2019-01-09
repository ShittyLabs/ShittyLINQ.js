/**
 * @template T
 * @param {T} a
 * @param {T} b
 * @returns {T}
 * @private
 */
module.exports = function _min(a, b) {
  return a < b ? a : b;
};
