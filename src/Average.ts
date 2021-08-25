import { _identity } from "./.internal/_identity";

export function Average<T>(xform: ((x: T) => number)): number {
  if (this.length === 0) {
    throw 'source contains no elements';
  }
  const fn = xform || _identity;
  const count = this.length;
  const sum = this.reduce(function(acc, value) {
    return acc + fn(value);
  }, 0);

  return (1.0 * sum) / count;
}
