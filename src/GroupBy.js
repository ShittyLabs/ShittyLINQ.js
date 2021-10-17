const defaultResultSelector = (key, values) => {
  const result = { key, values };

  result[Symbol.iterator] = function*() {
    for (let index in values) {
      yield values[index];
    }
  };

  return result;
};

/**
 * Groups the elements of a sequence according to a specified key selector function and creates a result value from each group and its key. The elements of each group are projected by using a specified function.
 *
 * @template TSource The type of the elements of `source`.
 * @template TKey The type of the key returned by `keySelector`.
 * @template TElement The type of the elements in each `IGrouping<TKey,TElement>`.
 * @template TResult The type of the result value returned by `resultSelector`.
 * @param {(source: TSource) => TKey} keySelector A function to extract the key for each element.
 * @param {(source: TSource) => TElement} elementSelector A function to map each source element to an element in an IGrouping<TKey,TElement>.
 * @param {(key: TKey, elements: Array<TElement>) => TResult} resultSelector A function to create a result value from each group.
 * @returns A collection of elements of type `TResult` where each element represents a projection over a group and its key.
 * @throws `source` or `keySelector` or `elementSelector` or `resultSelector` is `null`.
 */
function GroupBy(
  keySelector,
  elementSelector,
  resultSelector = defaultResultSelector
) {
  if (this == null) {
    throw '`source` is `null`';
  }

  if (keySelector == null) {
    throw '`keySelector` is `null`';
  }

  if (elementSelector == null) {
    throw '`elementSelector` is `null`';
  }

  if (resultSelector == null) {
    throw '`resultSelector` is `null`';
  }

  const grouped = this.Aggregate(new Map(), (groupings, element) => {
    const key = keySelector(element);
    const value = elementSelector(element);

    if (!groupings.get(key)) {
      groupings.set(key, []);
    }

    groupings.get(key).push(value);
    return groupings;
  });

  return [...grouped].map(([key, values]) => resultSelector(key, values));
}

module.exports = GroupBy;
