import { _defaultEqualityComparer } from "./.internal/_defaultEqualityComparer";

/**
 * @template T
 * @param {(a: T, b: T) => boolean} equalityComparer
 * @returns {Array<T>}
 * @this {Array<T>}
 */
export function Distinct(equalityComparer = _defaultEqualityComparer) {
  return this.filter((val, idx, arr) => {
    const foundIdx = this.findIndex(v => equalityComparer(v, val));
    return foundIdx === idx;
  });
}
