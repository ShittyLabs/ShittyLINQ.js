/**
 * @template T
 * @param {((x: T) => boolean)} predicate
 * @returns {Array<T>}
 */
function Where(predicate) {
  const output = [];
  for (let x of this) {
    if (predicate(x)) output.push(x);
  }
  return output;
}

module.exports = Where;
