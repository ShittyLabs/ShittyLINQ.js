function map(xform, xs) {
    const output = [];
    for (let x of xs) {
        output.push(xform(x));
    }
    return output;
}
module.exports = map;