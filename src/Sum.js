const _ = require('lodash');

/**
 * @template T
 * @param {Array<T>} array
 * @param {((x: T) => number)} predicate
 * @returns {number}
 */
function _predicateSum(array, predicate) {
  let predicateResult = _.map(array, predicate);
  return predicateResult.Sum();
}

/**
 * @template number?
 * @returns {number}
 /**
 * @template T
 * @param {((x: T) => number)} predicate
 * @returns {number}
 */
function Sum(predicate) {
  if (predicate) {
    if (!_.isFunction(predicate)) {
      throw new Error('"predicate" must be a function');
    }
    return _predicateSum(this, predicate);
  } else {
    let sum = 0;
    for (let x of this) {
      if (x != null) sum += x;
    }
    return sum;
  }
}

module.exports = Sum;
