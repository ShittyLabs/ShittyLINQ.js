import { _defaultComparer } from './.internal/_defaultComparer';

/**
 * @template T
 * @template U
 * @returns {Array<U>}
 * @this {Array<T>}
 */
export function OrderByDescending<T, U>(
  keySelector,
  comparer = _defaultComparer
): Array<U> {
  if (keySelector == null)
    throw 'Argument Null Exception - keySelector is null.';
  if (this === undefined) throw 'Undefined value exception!';
  if (this === null && typeof this === 'object') throw 'Null value exception!';
  return [...this].sort(function(a, b) {
    return comparer(keySelector(b), keySelector(a));
  });
}
