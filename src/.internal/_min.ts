/**
 * @template T
 * @param {T} a
 * @param {T} b
 * @returns {T}
 * @private
 */
export function _min<T>(a: T, b: T): T {
  return a < b ? a : b;
};
