/**
 * @template T
 * @param {U} indexKey [Optional]
 * @returns T
 */

function ToDictionary(indexKey) {
  const array = this;
  if (indexKey === null || indexKey === undefined || indexKey === '')
    indexKey = 'id'; //used default ie 'id'.
  if (!Array.isArray(array))
    throw 'Cannot convert a non-array value to dictionary.';

  const normalizedObject = {};
  for (let i = 0; i < array.length; i++) {
    if (array[i][indexKey] === undefined)
      throw 'Given parameter Key not found in array';
    const key = array[i][indexKey];
    normalizedObject[key] = array[i];
  }
  return normalizedObject;
}

module.exports = ToDictionary;
