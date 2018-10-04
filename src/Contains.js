/**
 * @template T
 * @param {T} element
 * @returns {boolean}
 */
function Contains(element) {
  return this.indexOf(element) === -1 ? false : true;
}

module.exports = Contains;
