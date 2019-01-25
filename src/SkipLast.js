/**
 * @template T
 * @param {number} count An integer value specifying how many last elements to skip.
 * @returns {Array<T>}
 * @this {Array<T>}
 */
function SkipLast(count) {
  if (count === undefined || count === null)
    throw new Error('"count" is not defined');
  if (!Number.isInteger(count)) throw new Error('"count" must be an integer');
  if (count > this.length)
    throw new Error(
      '"count" must be less-than-or-equal to the length of array'
    );
  return this.slice(0, this.length - count);
}

module.exports = SkipLast;
