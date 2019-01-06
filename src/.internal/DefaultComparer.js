/**
 * @template T
 * @param {T} a
 * @param {T} b
 * @returns {T}
 */
module.exports = function(a, b) {
  if (a < b) return -1;
  else if (a > b) return 1;
  else return 0;
};
