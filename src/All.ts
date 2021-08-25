/**
 * @template T
 * @param {((x: T) => boolean)} predicate
 * @returns {boolean} If all elements of a sequence satisfy a condition
 * @this {Array<T>}
 */

export function All<T>(predicate: ((x: T) => boolean)): boolean {
  if (this.length === 0) {
    throw 'source contains no elements';
  }
  if (!predicate) {
    throw 'predicate required';
  }

  let result = true;
  for (let x of this) {
    if (!predicate(x)) {
      result = false;
      break;
    }
  }
  return result;
}
