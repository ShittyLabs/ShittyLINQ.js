/**
 * @template T
 * @param {T} a
 * @param {T} b
 * @returns {T}
 */
module.exports = function(a, b) {
  return a < b ? a : b;
};
