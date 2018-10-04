/**
 * @template T
 * @template U
 * @returns {Array<U>}
 */
function Distinct() {
  const output = [];
  for (let x of this) {
    if (output.indexOf(x) == -1) output.push(x);
  }
  return output;
}

module.exports = Distinct;
