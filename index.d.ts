interface Array<T> {
  Aggregate<T, U>(seed: U, accum: (memo: U, val: T) => U): U;
  Aggregate<T>(accum: (memo: T, val: T) => T): T;
  Select<T, U>(xform: (x: T) => U): Array<U>;
  Where<T>(predicate: (X: T) => boolean): Array<T>;
  OrderBy<T, K>(keySelector: ((x: T) => K)): Array<T>;
  OrderBy<T, K>(keySelector: ((x: T) => K), comparer: ((x: K, y: K) => number)): Array<T>;
  OrderByDescending<T, K>(keySelector: ((x: T) => K)): Array<T>;
  OrderByDescending<T, K>(keySelector: ((x: T) => K), comparer: ((x: K, y: K) => number)): Array<T>;
  Last<T>(): T;
  Reverse<T>(): Array<T>;
}
