/**
 * Return a Deep Clone of an array
 * @template T
 * @param {Array<T>} o - Original array.
 * @return {Array<T>} New array.
 */
function DeepClone(o) {
  var output, v, key;
  output = Array.isArray(o) ? [] : {};
  for (key in o) {
    v = o[key];
    output[key] = typeof v === 'object' && v !== null ? copy(v) : v;
  }
  return output;
}

module.exports = DeepClone;
