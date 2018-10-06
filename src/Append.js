const DeepClone = require('./DeepClone');
/**
 * Append an item to an array and return a new array.
 * @template T
 * @this {Array<T>}
 * @param {any} item - Item to be appended on the array.
 * @return {Array<T>} New array of orgin plus item to be appended.
 */
function Append(item) {
  if (this === undefined) throw 'Undefined value exception!';
  if (this === null || item === null) throw 'Null value exception!';
  var cloned = DeepClone(this);
  cloned.push(item);
  return cloned;
}

module.exports = Append;
