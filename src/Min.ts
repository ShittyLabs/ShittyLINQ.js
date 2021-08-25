import { _identity } from './.internal/_identity';

/**
 * @template T
 * @param {((x: T) => number)} xform
 * @returns {T}
 * @this {Array<T>}
 */
export function Min<T extends number>(): number;
export function Min<T>(xform: ((x: T) => number) | ((x: number) => number)): T;
export function Min<T>(xform: ((x: T) => number) | ((x: number) => number) = _identity): T {
  return this.reduce((a, b) => (xform(a) < xform(b) ? a : b));
}
