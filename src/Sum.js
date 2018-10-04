/**
 * @template number?
 * @returns {number}
 */
function Sum() {
    const sum = 0;
    for (let x of this) {
        if (x != null) sum += x;
    }
    return sum;
}