interface Array<T> {
  Aggregate<T, U>(seed: U, accum: (memo: U, val: T) => U): U;
  Aggregate<T>(accum: (memo: T, val: T) => T): T;
  Select<T, U>(xform: (x: T) => U): Array<U>;
  Where<T>(predicate: (X: T) => boolean): Array<T>;
  Except<T, U>(exArr: Array<U>): Array<U>;
  Distinct<T, U>(): Array<U>;
  Last<T>(): T;
  Reverse<T>(): Array<T>;
  ToDictionary<U>(): {};
}
