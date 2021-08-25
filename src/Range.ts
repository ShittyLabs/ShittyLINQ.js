import { _add } from './.internal/_add';

/**
 * Returns an array of integers beginning with `start` and
 * going for `count`.
 *
 * @param {number} start - Value to begin with. Must be an integer.
 * @param {number} count - Length of range. Must be an integer.
 * @returns {Array<number>}
 */
export function Range(start: number, count: number): Array<number> {
  if (!Number.isInteger(start)) {
    throw '"start" must be an integer';
  }
  if (!Number.isInteger(count)) {
    throw '"count" must be an integer';
  }
  const emptyArray = new Array(count);
  return emptyArray.fill(start).map(_add);
}
