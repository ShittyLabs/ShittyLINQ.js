import { _defaultEqualityComparer } from "./.internal/_defaultEqualityComparer";

/**
 * @template TOuter
 * @template TInner
 * @template TKey
 * @template TResult
 * @this Array<TOuter>
 * @returns {Array<TResult>}
 * @param {Array<TInner>} inner
 * @param {(((x: TOuter) => TKey)} outerKeySelector
 * @param {(((x: TInner) => TKey)} innerKeySelector
 * @param {((x: TOuter, y: TInner) => TResult)} xform
 * @param {((x: TKey, y: TKey) => boolean)} equalityComparer
 */
export function Join<TOuter, TInner, TKey, TResult>(
  inner: Array<TInner>,
  outerKeySelector: (((x: TOuter) => TKey)),
  innerKeySelector: (((x: TInner) => TKey)),
  xform: ((x: TOuter, y: TInner) => TResult),
  equalityComparer: ((x: TKey, y: TKey) => boolean) = _defaultEqualityComparer
): Array<TResult> {
  const outer = this;
  if (this.length === 0) {
    throw 'Source contains no elements';
  }

  /** @type {Array<TResult>} */
  const result: Array<TResult> = outer.reduce((outerMemo, outerVal) => {
    return inner.reduce((innerMemo, innerVal) => {
      return equalityComparer(
        outerKeySelector(outerVal),
        innerKeySelector(innerVal)
      )
        ? innerMemo.concat(xform(outerVal, innerVal))
        : innerMemo;
    }, outerMemo);
  }, []);
  return result;
}
