import { mapRelationships } from "../mapRelationships";
import { transformKeys } from "../transfromKeys";

export const deserialize = (resp, options = {}) => {
  const { data = {}, included, ...rest } = resp;
  let deserialized;

  if (Array.isArray(data)) {
    deserialized = data.map((resource) => mapRelationships(resource, included));
  } else if (data === null) {
    deserialized = null;
  } else {
    deserialized = mapRelationships(data, included);
  }

  transformKeys(deserialized, options);

  return { data: deserialized, ...rest };
};
