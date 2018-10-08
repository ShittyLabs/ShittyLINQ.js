/**
 * @template T
 * @template U
 * @param {((x: T) => U)} xform
 * @returns {Array<U>}
 */
function Except(xform) {
  const output = this;
  for (let x of xform) {
    let index = output.indexOf(x);
    if (index > -1) {
      output.splice(index, 1);
    }
  }
  return output;
}

module.exports = Except;
