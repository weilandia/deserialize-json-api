import { toCamel } from "./toCamel";

export const transformKeys = (object, options) => {
  if (options.transformKeys === "camelCase") {
    return toCamel(object);
  }

  return object;
};
