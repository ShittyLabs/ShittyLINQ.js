/**
 * @template T
 * @param {((x:T) => boolean)} predicate
 * @returns {Array<T>}
 * @this {Array<T>}
 */
function SkipWhile(predicate) {
  let output = this;
  for (let x of this) {
    if (!predicate(x)) {
      return output;
    } else {
      output = output.slice(1);
    }
  }
  return output;
}
module.exports = SkipWhile;
