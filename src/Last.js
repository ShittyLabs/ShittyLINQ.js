/**
 * @template T
 * @returns T
 */

function Last() {
  if (this.length === 0) {
    throw 'Source contains no elements';
  }
  return this[this.length - 1];
}

module.exports = Last;
