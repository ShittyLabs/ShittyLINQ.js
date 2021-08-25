import { _or } from "./.internal/_or";

/**
 * @this {Array<T>}
 * @template T
 * @param {((x: T) => boolean)} predicate
 * @returns {boolean} If any one element of the sequence satisfies a condition
 */
export function Any<T>(predicate: ((x: T) => boolean)): boolean {
  if (predicate) return this.map(predicate).reduce(_or);
  return this.length > 0;
}
