/**
 * @template number?
 * @returns {number}
 */
function Sum() {
  let sum = 0;
  for (let x of this) {
    if (x != null) sum += x;
  }
  return sum;
}

module.exports = Sum;
