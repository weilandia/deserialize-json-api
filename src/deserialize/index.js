import { flattenAttributes } from '../flattenAttributes'
import { mapRelationships } from '../mapRelationships'

export const deserialize = (resp) => {
  const { data = {}, included, ...rest } = resp;
  let deserialized;

  if (Array.isArray(data)) {
    deserialized = data.map(resource => mapRelationships(resource, included));
  } else {
    deserialized = mapRelationships(data, included);
  }

  return { data: deserialized, ...rest };
}
