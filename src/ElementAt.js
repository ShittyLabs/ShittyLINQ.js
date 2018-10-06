/**
 * @template T
 * @param {number} index
 * @returns {T}
 */
function ElementAt(index) {
  if (this === undefined) throw 'Value cannot be undefined.';
  if (this === null) throw 'Value cannot be null.';
  if (index === null) throw 'Index cannot be null.';
  if (index === undefined) throw 'Index cannot be undefined.';
  if (index < 0 || index >= this.length)
    throw 'Index was out of range. Must be non-negative and less than the size of the collection.';
  return this[index];
}
module.exports = ElementAt;
