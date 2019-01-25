/**
 * Determines whether two sequences are equal by comparing the elements by using the default equality comparer for their type.
 * @template TSource
 * @param {Array<TSource>} second An Array<T> to compare to the first sequence.
 * @returns {boolean} `true` if the two source sequences are of equal length and their corresponding elements are equal according to the default equality comparer for their type; otherwise, `false`.
 * @throws {TypeError} `sequence` is `null`.
 * @this {Array<T>}
 */
function SequenceEqual(sequence) {
  if (!sequence) {
    throw new TypeError('`sequence` is null.');
  }

  if (this.length !== sequence.length) {
    return false;
  }

  const isEqual = this.reduce(
    (result, element, index) => result && element === sequence[index],
    true
  );

  return isEqual;
}

module.exports = SequenceEqual;
