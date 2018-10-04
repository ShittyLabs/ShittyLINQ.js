/**
 * @template T
 * @param {T} element
 * @returns {boolean}
 */
function Contains(element) {
  if (this.indexOf(element) === -1) {
    return false;
  }
  return true;
}
