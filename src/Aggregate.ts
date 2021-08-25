/**
 * @template T
 * @template U
 * @param {U} seed
 * @param {((memo: U, val: T) => U)} accum
 * @returns {U}
 * @this {Array<T>}
 */
function _foldl<T, U>(xs, seed: U, accum: ((memo: U, val: T) => U)): U {
  let curr = seed;
  for (const x of xs) {
    curr = accum(curr, x);
  }
  return curr;
};
/**
 *
 * @template T
 * @template U
 * @param {U} seed
 * @param {((memo: U, val: T) => U)} accum
 * @returns {U}
 * @this {Array<T>}
 */

/**
 *
 * @template T
 * @param {((memo: T, val: T) => T)} accum
 * @returns {T}
 * @this {Array<T>}
 */
export function Aggregate<T>(seed, accum: ((memo: T, val: T) => T)): T {
  switch (arguments.length) {
    case 2:
      return _foldl(this, seed, accum);
    case 1:
      return _foldl(this.slice(1), this[0], seed);
    default:
      throw new Error();
  }
}
