/**
 * @template T
 * @param {T} a
 * @param {T} b
 * @returns {boolean}
 * @private
 */
module.exports = function _defaultEqualityComparer(a, b) {
  return a === b;
};
