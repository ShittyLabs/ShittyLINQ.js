/**
 * @template T
 * @template U
 * @param {U} seed
 * @param {((memo: U, val: T) => U)} accum
 * @returns {U}
 * @this {Array<T>}
 */
const _foldl = function(xs, seed, accum) {
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
 */ function Aggregate(seed, accum) {
  switch (arguments.length) {
    case 2:
      return _foldl(this, seed, accum);
    case 1:
      return _foldl(this.slice(1), this[0], seed);
    default:
      throw new Error();
  }
}

module.exports = Aggregate;
