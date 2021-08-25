/**
 * @template T
 * @param {T} element
 * @returns {Array<T>}
 * @this {Array<T>}
 */
export function Prepend<T>(element: T): Array<T> {
  return [element].concat(this);
}
