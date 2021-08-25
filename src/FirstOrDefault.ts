/**
 * @template T
 * @param {((x: T) => boolean)} predicate
 * @returns {T}
 * @this {Array<T>}
 */
export function FirstOrDefault<T>(predicate: ((x: T) => boolean)): T {
  if (predicate) return this.find(predicate);
  return this[0];
}
