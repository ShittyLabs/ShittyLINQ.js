/**
 * @template T
 * @template U
 * @param {((x: T) => U)} xform
 * @returns {Array<U>}
 */
function Zip(vals) {
  if (vals.length < this.length) throw 'Insufficient values !';
  return this.map((e, i) => [e, vals[i]]);
}

module.exports = Zip;
