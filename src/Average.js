/**
 * @param None
 * @returns {number} Average is computed of numerical values
 */

function Average() {
  if (this.length === 0) {
    throw 'source contains no elements';
  }
  const count = this.length;
  const sum = this.reduce(function(acc, number) {
    return acc + number;
  }, 0);

  return sum / count;
}

module.exports = Average;
