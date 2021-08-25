import { _identity } from './.internal/_identity';

/**
 * @template T
 * @param {((x: T) => number)} xform
 * @returns {T}
 * @this {Array<T>}
 */
export function Max<T extends number>(): number;
export function Max<T>(selector: ((x: T) => number) | ((x: number) => number)): T;
export function Max<T>(selector: ((x: T) => number) | ((x: number) => number) = _identity): T {
  return this.reduce((a, b) => (selector(a) > selector(b) ? a : b));
}
