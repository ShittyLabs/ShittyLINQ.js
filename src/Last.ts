/**
 * @this {Array<T>}
 * @template T
 * @returns T
 */

export function Last<T>(): T {
  if (this.length === 0) {
    throw 'Source contains no elements';
  }
  return this[this.length - 1];
}
