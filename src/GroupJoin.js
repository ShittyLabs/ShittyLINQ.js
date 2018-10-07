/**
 * @typedef {(<T>(a: T, b: T) => boolean)} IEqualityComparer<T>
 */

/**
 *
 * @type {IEqualityComparer}
 */
const defaultEqualityComparer = (a, b) => a === b;

/**
 * @template TOuter
 * @template TInner
 * @template TKey
 * @template TResult
 * @this {Array<TOuter>}
 * @param {Array<TInner>} inner
 * @param {((x: TOuter) => TKey)} outerKeySelector
 * @param {((x: TInner) => TKey)} innerKeySelector
 * @param {((x: TOuter, y: Array<TInner>) => TResult)} resultSelector
 * @param {IEqualityComparer} equalityComparer
 * @returns {Array<TResult>}
 */
function GroupJoin(
  inner,
  outerKeySelector,
  innerKeySelector,
  resultSelector,
  equalityComparer = defaultEqualityComparer
) {
  const arr1 = this;
  const output = arr1.reduce((memo, val) => {
    const key1 = outerKeySelector(val);
    const values = inner.filter(val2 =>
      equalityComparer(innerKeySelector(val2), key1)
    );
    return memo.concat([[val, values]]);
  }, []);
  return output.map(groupings => resultSelector(...groupings));
}

module.exports = GroupJoin;
