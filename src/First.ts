/**
 * @template T
 * @param {((x: T) => boolean)} predicate
 * @returns {T}
 * @this {Array<T>}
 */
export function First<T>(predicate: ((x: T) => boolean)): T {
  if (!this.length) throw 'Sequence contains no elements';
  if (predicate) {
    const val = this.find(predicate);
    if (!val) throw 'Sequence contains no matching element';
    return val;
  }
  return this[0];
}
