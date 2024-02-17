export const getObjectKeys = function (object: any, result: string[] = []) {
  // with is non we are electing numeric values which come from arrays
  if (typeof object == typeof {} && isNaN(object)) {
    Object.keys(object).forEach((element) => {
      result.push(element);
      getObjectKeys(object[element], result);
    });
  }
  return result;
};
export const isSameTypeObject = function (target: any, compare: any) {
  const _target = getObjectKeys(target);
  const _compare = getObjectKeys(compare);

  let errors: string[] = [];
  const result = _target.some((k) => {
    if (_compare.indexOf(k) == -1) {
      errors.push(k);
      return false;
    }
  });
  console.log({ result: result, errors: errors });
  return { result: result, errors: errors };
};
