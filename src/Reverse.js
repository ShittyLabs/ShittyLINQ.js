/**
 * @template T
 * @template U
 * @returns {Array<U>}
 * @this {Array<T>}
 */
function Reverse() {
  if (this === undefined) throw 'Undefined value exception!';
  if (this === null && typeof this === 'object') throw 'Null value exception!';
  return this.reverse();
}

module.exports = Reverse;
