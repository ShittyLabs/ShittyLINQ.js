type IEqualityComparer<T> = <T>(a: T, b: T) => boolean;

interface Array<T> {
    Aggregate<T, U>(seed: U, accum: (memo: U, val: T) => U): U;
    Aggregate<T>(accum: (memo: T, val: T) => T): T;
    All<T>(predicate: (x: T) => boolean): boolean;
    Any<T>(): boolean;
    Any<T>(predicate: (x: T) => boolean): boolean;
    Append<T>(element: T): Array<T>;
    Average(): number;
    Average<T>(xform: (x: T) => number): number;
    Concat<T>(list: Array<T>): Array<T>;
    Contains<T>(element: T): boolean;
    Count<T>(): number;
    Count<T>(predicate: (x: T) => boolean): number;
    Distinct<number>(): Array<number>;
    Distinct<string>(): Array<string>;
    Distinct<T>(equalityComparer: IEqualityComparer<T>): Array<T>;
    ElementAt<T>(index: number): T;
    Except<T>(second: Array<T>): Array<T>;
    Except<T>(second: Array<T>, equalityComparer: IEqualityComparer<T>): Array<T>;
    First<T>(): T;
    First<T>(predicate: (x: T) => boolean): T;
    FirstOrDefault<T>(): T;
    FirstOrDefault<T>(predicate: (x: T) => boolean): T;
    GroupBy<TSource, TKey, TElement, TResult>(
        keySelector: (source: TSource) => TKey,
        elementSelector: (source: TSource) => TElement,
        resultSelector: (key: TKey, elements: Array<TElement>) => TResult
    ): Array<TResult>;
    GroupBy<TSource, TKey, TElement>(
        keySelector: (source: TSource) => TKey,
        elementSelector: (source: TSource) => TElement
    ): Array<{ key: TKey, values: Array<TElement> }>;
    GroupJoin<T, U, V, K>(
        inner: Array<U>,
        outerKeySelector: ((x: T) => K),
        innerKeySelector: ((x: T) => K),
        resultSelector: ((x: T, y: U) => V)
    ): Array<V>;
    GroupJoin<T, U, V, K>(
        inner: Array<U>,
        outerKeySelector: ((x: T) => K),
        innerKeySelector: ((x: T) => K),
        resultSelector: ((x: T, y: U) => V),
        equalityComparer: IEqualityComparer<T>
    ): Array<V>;
    Intersect<T>(second: Array<T>): Array<T>;
    Intersect<T>(second: Array<T>, equalityComparer: IEqualityComparer<T>): Array<T>;
    Last<T>(): T;
    Join<TOuter, TInner, TKey, TResult>(
        inner: TInner[],
        outerKeySelector: (x: TOuter) => TKey,
        innerKeySelector: (x: TInner) => TKey,
        xform: (x: TOuter, y: TInner) => TResult
    ): TResult[];
    Join<TOuter, TInner, TKey, TResult>(
        inner: TInner[],
        outerKeySelector: (x: TOuter) => TKey,
        innerKeySelector: (x: TInner) => TKey,
        xform: (x: TOuter, y: TInner) => TResult,
        equalityComparer: (x: TKey, y: TKey) => boolean
    ): TResult[];
    Min(): number;
    Min<T>(xform: (x: T) => number): T;
    Max(): number;
    Max<T>(xform: (x: T) => number): T;
    OrderBy<T, K>(keySelector: ((x: T) => K)): Array<T>;
    OrderBy<T, K>(
        keySelector: ((x: T) => K),
        comparer: ((x: K, y: K) => number)
    ): Array<T>;
    OrderByDescending<T, K>(keySelector: ((x: T) => K)): Array<T>;
    OrderByDescending<T, K>(
        keySelector: ((x: T) => K),
        comparer: ((x: K, y: K) => number)
    ): Array<T>;
    Prepend<T>(element: T): Array<T>;
    Reverse<T>(): Array<T>;
    Select<T, U>(xform: (x: T) => U): Array<U>;
    SkipLast<T>(count: number): Array<T>;
    Take<T>(count: number): Array<T>;
    TakeLast<T>(count: number): Array<T>;
    Sum(): number;
    Sum(selector: (x: T) => number): number;
    TakeWhile<T>(predicate: (x: T) => boolean): Array<T>;
    ToDictionary<T, U, V>(
        keySelector: ((x: T) => U),
        elementSelector: ((x: T) => V)
    ): Dictionary<U, V>;
    Union<T>(adder: Array<T>): Array<T>;
    Where<T>(predicate: (x: T) => boolean): Array<T>;
    Single<T>(predicate: (x: T) => boolean): T;
    SequenceEqual<T>(second: Array<T>): boolean;
    SkipWhile<T>(predicate: (x: T) => boolean): Array<T>;
    Zip<U, T, K>(second: Array<T>, applyFn: (x: U, y: T) => K): Array<K>;
}

interface ArrayConstructor {
    Empty(): Array<any>;
    Range(start: number, count: number): Array<number>;
    Repeat<T>(element: T, count: Number): Array<T>;
}

interface Dictionary<U, V> {
    [x: U]: V;
}
