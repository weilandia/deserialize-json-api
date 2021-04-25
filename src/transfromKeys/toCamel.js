import isPlainObject from "lodash.isplainobject";
import camelCase from "lodash.camelcase";

const needsCamelCase = (str) => {
  return str.indexOf("-") > -1 || str.indexOf("_") > -1;
};

export const toCamel = (obj) => {
  Object.keys(obj).forEach((key) => {
    const camelCasedKey = needsCamelCase(key) ? camelCase(key) : key;
    const value = obj[key];
    delete obj[key];
    obj[camelCasedKey] = value;

    if (isPlainObject(value)) {
      obj[camelCasedKey] = toCamel(value);
    }

    if (Array.isArray(value)) {
      obj[camelCasedKey] = value.map((item) => {
        if (isPlainObject(item)) {
          return toCamel(item);
        } else {
          return item;
        }
      });
    }
  });

  return obj;
};
