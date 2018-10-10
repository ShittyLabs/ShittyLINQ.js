/**
 * @template T
 * @param {((x: T) => boolean)} predicate
 * @returns {T}
 */
function Single(predicate) {
  const output = [];

  if (!predicate) {
    throw 'Source or predicate is null';
  }

  if (!this.length) {
    throw 'The source sequence is empty';
  }

  for (let x of this) {
    if (predicate(x)) {
      output.push(x);
    }
  }

  if (output.length > 1) {
    throw 'More than one element satisfies the condition in predicate';
  }

  if (output.length < 1) {
    throw 'No element satisfies the condition in predicate';
  }

  return output[0];
}

module.exports = Single;
