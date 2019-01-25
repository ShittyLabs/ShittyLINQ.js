/**
 * @template T
 * @param {Array<T>} list
 * @returns {Array<T>}
 * @this {Array<T>}
 */
function Concat(list) {
  const output = [];
  for (let x of this) {
    output.push(x);
  }
  for (let x of list) {
    output.push(x);
  }
  return output;
}

module.exports = Concat;
