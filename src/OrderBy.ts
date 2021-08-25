import { _defaultComparer } from './.internal/_defaultComparer';

export function OrderBy<TValue, TKey>(
  keySelector: ((x: TValue) => TKey),
  comparer = _defaultComparer
): Array<TValue> {
  if (keySelector == null)
    throw 'Argument Null Exception - keySelector is null.';
  if (this === undefined) throw 'Undefined value exception!';
  if (this === null && typeof this === 'object') throw 'Null value exception!';
  return [...this].sort(function(a, b) {
    return comparer(keySelector(a), keySelector(b));
  });
}
