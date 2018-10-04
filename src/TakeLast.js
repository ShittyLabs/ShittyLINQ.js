/**
 * @template T
 * @template U
 * @param {Array<T>} list
 * @param {U} count
 * @returns {Array<T>}
 */
function TakeLast(list, count) {
  if (list.length < count) throw 'Array has not enough elements';

  return list.slice(-count);
}

module.exports = TakeLast;
