/**
 * Generates a sequence that contains one repeated value.
 * @static
 * @template TResult
 * @param {TResult} element - The value to be repeated.
 * @param {Number} count - The number of times to repeat the value in the generated sequence.
 * @returns {Array<TResult>} An Array<T> that contains a repeated value.
 * @throws {RangeError} `count` is less than 0.
 * @this {Array<T>}
 */
function Repeat(element, count) {
  if (count < 0) {
    throw new RangeError('`count` is less than 0.');
  }

  return Array.apply(null, { length: count }).map(() => element);
}

module.exports = Repeat;
