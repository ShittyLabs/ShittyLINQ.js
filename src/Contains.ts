/**
 * @template T
 * @param {T} element
 * @returns {boolean}
 * @this {Array<T>}
 */
export function Contains(element) {
  return this.indexOf(element) !== -1;
}
