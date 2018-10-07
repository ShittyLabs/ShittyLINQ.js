/**
 * @template T
 * @param {T} element
 * @returns {Array<T>}
 */
function Prepend(element) {
    return [element].concat(this);
}

module.exports = Prepend;