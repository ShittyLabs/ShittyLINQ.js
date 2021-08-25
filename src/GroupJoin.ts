import { _defaultEqualityComparer } from "./.internal/_defaultEqualityComparer";

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
 * @returns {Array<TResult>}
 */
export function GroupJoin(
  inner,
  outerKeySelector,
  innerKeySelector,
  resultSelector,
  equalityComparer = _defaultEqualityComparer
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
