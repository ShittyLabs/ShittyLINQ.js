/**
 * @template T
 * @param {((x: T) => boolean)} predicate
 * @returns {T}
 */
function First(predicate) {
  if (!this.length) throw 'Sequence contains no elements';
  if (predicate) {
    let val = this.find(predicate);
    if (!val) throw 'Sequence contains no matching element';
    return val;
  }
  return this[0];
}
module.exports = First;
