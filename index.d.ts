interface Array<T> {
  Aggregate<T, U>(seed: U, accum: (memo: U, val: T) => U): U;
  Aggregate<T>(accum: (memo: T, val: T) => T): T;
  All<T>(predicate: (X: T) => boolean): boolean;
  Concat<T>(list: Array<T>): Array<T>;
  ElementAt<T>(index: number): T;
  First<T>(): T;
  First<T>(predicate: (x: T) => boolean): T;
  Last<T>(): T;
  Prepend<T>(element: T): Array<T>;
  Reverse<T>(): Array<T>;
  Select<T, U>(xform: (x: T) => U): Array<U>;
  TakeWhile<T>(predicate: (X: T) => boolean): Array<T>;
  ToDictionary<T, U, V>(
    keySelector: ((x: T) => U),
    elementSelector: ((x: T) => V)
  ): Dictionary<U, V>;
  Union<T>(adder: Array<T>): Array<T>;
  Where<T>(predicate: (X: T) => boolean): Array<T>;
}

interface Dictionary<U, V> {
  [x: U]: V;
}
