/**
 * @template T
 * @param {T} a
 * @param {T} b
 * @returns {number}
 * @private
 */
export function _defaultComparer<T>(a: T, b: T): -1 | 0 | 1 {
  if (a < b) return -1;
  else if (a > b) return 1;
  else return 0;
}
