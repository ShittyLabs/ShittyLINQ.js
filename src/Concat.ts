/**
 * @template T
 * @param {Array<T>} list
 * @returns {Array<T>}
 * @this {Array<T>}
 */
export function Concat(list) {
  const output = [];
  for (let x of this) {
    output.push(x);
  }
  for (let x of list) {
    output.push(x);
  }
  return output;
}
