/**
 * @template T
 * @param {T} element
 * @returns {boolean}
 * @this {Array<T>}
 */
function Contains(element) {
  return this.indexOf(element) !== -1;
}

module.exports = Contains;
