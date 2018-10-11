/**
 * @template T
 * @template U
 * @returns {Array<U>}
 */
const _defaultComparer = function(a, b) { 
  if(a < b) return -1;
  else if(a > b) return 1;
  else return 0; 
}

function OrderByDescending (keySelector, comparer = _defaultComparer) {
  if (this === undefined) throw 'Undefined value exception!';
  if (this === null && typeof this === 'object') throw 'Null value exception!';
  return eval($.toJSON(this)) = function () {
    return function (a, b) {
      var result = (a[keySelector] < b[keySelector]) ? 1 : (a[keySelector] > b[keySelector]) ? -1 : 0;
      return result * comparer;
    }
  }
}

module.exports = OrderByDescending;