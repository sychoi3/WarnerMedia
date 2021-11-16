export const getPurgedObj = (obj) => {
  let stringfiedObj = JSON.stringify(obj, (key, value) => {
    return ["", null].includes(value) ||
      (typeof value === "object" &&
        (value.length === 0 || Object.keys(value).length === 0))
      ? undefined
      : value;
  });
  let resObj = JSON.parse(stringfiedObj);
  let isEmptyPropsPresent = ["{}", "[]", '""', "null"].some((key) =>
    stringfiedObj.includes(key)
  );
  if (isEmptyPropsPresent) {
    return getPurgedObj(resObj);
  }
  return resObj;
};
