/**
 * @template T
 * @param {Array<T>} array
 * @param {((x: T) => number)} selector
 * @returns {number}
 * @this {Array<T>}
 */
function _selectorSum(array, selector) {
  let predicateResult = array.map(selector);
  return predicateResult.Sum();
}
/**
 * @template T
 * @param {((x: T) => number)} selector
 * @returns {number}
 */

/**
 * @returns {number}
 * @this {Array<number>}
 */
function Sum(selector) {
  if (selector) {
    if (!(selector instanceof Function)) {
      throw new Error('"selector" must be a function');
    }
    return _selectorSum(this, selector);
  } else {
    let sum = 0;
    for (let x of this) {
      if (x != null) sum += x;
    }
    return sum;
  }
}

module.exports = Sum;
