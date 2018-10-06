type IEqualityComparer<T> = <T>(a: T, b: T) => boolean;

interface Array<T> {
  Aggregate<T, U>(seed: U, accum: (memo: U, val: T) => U): U;
  Aggregate<T>(accum: (memo: T, val: T) => T): T;
  GroupJoin<T, U, V, K>(
    inner: Array<U>,
    outerKeySelector: ((x: T) => K),
    innerKeySelector: ((x: T) => K),
    resultSelector: ((x: T, y: U) => V)
  );
  GroupJoin<T, U, V, K>(
    inner: Array<U>,
    outerKeySelector: ((x: T) => K),
    innerKeySelector: ((x: T) => K),
    resultSelector: ((x: T, y: U) => V),
    equalityComparer: IEqualityComparer<T>
  );
  Select<T, U>(xform: (x: T) => U): Array<U>;
  Where<T>(predicate: (X: T) => boolean): Array<T>;
  Last<T>(): T;
  Reverse<T>(): Array<T>;
}
