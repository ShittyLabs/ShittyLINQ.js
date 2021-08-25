/**
 * @template T
 * @param {T} a
 * @param {T} b
 * @returns {boolean}
 * @private
 */
export function _defaultEqualityComparer<T>(a: T, b: T): boolean {
  return a === b;
};
