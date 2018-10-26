/**
 * @template T
 * @this {Array<T>}
 */

function Take(count) {
  if (count === undefined || count === null) throw 'Count is not defined';
  if (this.length === 0) throw 'Source contains no elements';
  return this.slice(0, count);
}

module.exports = Take;
