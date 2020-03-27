import { mapRelationships } from '../mapRelationships'
import { toCamelLower } from "../toCamelLower"

export const deserialize = (resp, options) => {
  const { data = {}, included, ...rest } = resp;
  let deserialized;

  if (Array.isArray(data)) {
    deserialized = data.map(resource => mapRelationships(resource, included));
  } else {
    deserialized = mapRelationships(data, included);
  }

  if (options) {
    if(Object.prototype.hasOwnProperty.call(options, 'setKeyTransform')) {
      toCamelLower(deserialized);
    }
  }
  
  return { data: deserialized, ...rest };
}
