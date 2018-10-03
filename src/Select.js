/**
 * @template T
 * @template U
 * @param {((x: T) => U)} xform
 * @returns {Array<U>}
 */
function Select(xform) {
  const output = [];
  for (let x of this) {
    output.push(xform(x));
  }
  return output;
}

module.exports = Select;
