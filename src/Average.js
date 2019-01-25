const _identity = require('./.internal/_identity');
/**
 * @param {((x: T) => number)} xform
 * @returns {number} Average is computed of numerical values
 * @this {Array<T>}
 */

function Average(xform) {
  if (this.length === 0) {
    throw 'source contains no elements';
  }
  const fn = xform || _identity;
  const count = this.length;
  const sum = this.reduce(function(acc, value) {
    return acc + fn(value);
  }, 0);

  return (1.0 * sum) / count;
}

module.exports = Average;
