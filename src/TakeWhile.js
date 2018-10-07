/**
 * @template T
 * @param {((x: T) => boolean)} predicate
 * @returns {Array<T>}
 */

function TakeWhile(predicate) {
  if (this.length === 0) {
    throw 'source contains no elements';
  }
  const output = [];
  for (let x of this) {
    if (predicate(x)) {
      output.push(x);
    } else {
      break;
    }
  }
  return output;
}

module.exports = TakeWhile;
