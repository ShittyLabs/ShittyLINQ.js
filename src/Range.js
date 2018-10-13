/**
 * Returns an array of integers beginning with `start` and
 * going for `count`.
 *
 * @param {number} start - Value to begin with. Must be an integer.
 * @param {number} count - Length of range. Must be an integer.
 * @returns {Array<number>}
 */
function Range(start, count) {
  if(!Number.isInteger(start))
  {
    throw '"start" must be an integer';
  }
  if(!Number.isInteger(count))
  {
    throw '"count" must be an integer';
  }
  const emptyArray = new Array(count);
  return emptyArray.map((value, index) => {
    return index + start;
  });
}

module.exports = Range;