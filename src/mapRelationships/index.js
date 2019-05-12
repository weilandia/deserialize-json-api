import { flattenAttributes } from '../flattenAttributes'

const findResource = (rel, included) => {
  if (!Array.isArray(included)) return rel;

  return included.find(res => res.id === rel.id && res.type === rel.type) || rel;
}

const deserializeIncluded = (rel, included) => {
  let resource = findResource(rel, included);

  if (resource.relationships) {
    resource = mapRelationships(resource, included);
  }

  return { ...rel, ...flattenAttributes(resource)};
};

export const mapRelationships = (resource, included) => {
  let { relationships, ...result } = resource;

  if (resource.hasOwnProperty('attributes')) {
    result = flattenAttributes(result);
  }

  for (let key in relationships) {
    if (result.hasOwnProperty(key)) continue;

    const relData = relationships[key].data;
    let deserializedRel;

    if (relData && Array.isArray(relData)) {
      deserializedRel = relData.map(rel => deserializeIncluded(rel, included));
    } else if (relData) {
      deserializedRel = deserializeIncluded(relData, included)
    }

    result[key] = deserializedRel;
  }

  return result;
}
