import { flattenAttributes } from '../flattenAttributes'

const findResource = (rel, included) => {
  if (!Array.isArray(included)) return;

  return included.find(res => res.id === rel.id && res.type === rel.type);
}

const deserializeIncluded = (rel, included) => {
  let resource = findResource(rel, included);
  if (!resource) return;

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
      let includedRels = [];
      relData.forEach(rel => {
        const dRel = deserializeIncluded(rel, included);
        if (dRel) includedRels.push(dRel);
      });

      if (includedRels.length) deserializedRel = includedRels;
    } else if (relData) {
      deserializedRel = deserializeIncluded(relData, included)
    }

    if (deserializedRel) result[key] = deserializedRel;
  }

  return result;
}
