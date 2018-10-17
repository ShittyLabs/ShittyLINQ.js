/**
 * @template T
 * @param {number} count
 * @returns {Array<T>}
 * @this {Array<T>}
 */
function TakeLast(count) {
  if (this.length < count) throw 'Array has not enough elements';

  return this.slice(-count);
}

module.exports = TakeLast;
