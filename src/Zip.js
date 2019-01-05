/**
 * @template U
 * @template T
 * @template K
 * @param {Array<T>} second
 * @param {((x: U, y: T) => K)} applyFn
 * @returns {Array<K>}
 */
function Zip(second, applyFn) {
  const output = [];
  let loops;
  if (this.length > second.length) {
    loops = second.length;
  } else {
    loops = this.length;
  }

  for (let i = 0; i < loops; i++) {
    output.push(applyFn(this[i], second[i]));
  }
  return output;
}

module.exports = Zip;
