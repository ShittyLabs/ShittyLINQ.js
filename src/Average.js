/**
 * @param {((x: T) => number)} xform
 * @returns {number} Average is computed of numerical values
 */

function Average(xform) {
  if (this.length === 0) {
    throw 'source contains no elements';
  }
  const identity = x => x;
  const fn = xform || identity;
  const count = this.length;
  const sum = this.reduce(function(acc, value) {
    return acc + fn(value);
  }, 0);

  return (1.0 * sum) / count;
}

module.exports = Average;
