/**
 * Appends a value to the end of the sequence.
 * @template TSource
 * @param {TSource} element The value to append to `source`.
 * @returns {Array<TSource>} A new sequence that ends with `element`.
 * @this {Array<TSource>} A sequence of values.
 */
function Append(element) {
  if (this == null) {
    throw '`source` is `null`';
  }

  return this.concat(element);
}

module.exports = Append;
