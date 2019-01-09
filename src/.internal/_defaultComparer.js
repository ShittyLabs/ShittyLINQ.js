/**
 * @template T
 * @param {T} a
 * @param {T} b
 * @returns {T}
 * @private
 */
module.exports = function _defaultComparer(a, b) {
  if (a < b) return -1;
  else if (a > b) return 1;
  else return 0;
};
