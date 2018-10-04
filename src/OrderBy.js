/**
 * @template T
 * @template U
 * @returns {Array<U>}
 */
function OrderBy() {
    if (this === undefined) throw 'Undefined value exception!';
    if (this === null && typeof this === 'object') throw 'Null value exception!';
    return this.sort();
  }
   module.exports = OrderBy;