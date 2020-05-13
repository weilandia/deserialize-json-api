import { flattenAttributes } from "../flattenAttributes";

const findResource = (rel, included) => {
  if (!Array.isArray(included)) return;

  return included.find((res) => res.id === rel.id && res.type === rel.type);
};

const deserializeIncluded = (rel, included) => {
  let resource = findResource(rel, included);
  if (!resource) return [undefined, included];

  const filteredIncluded = included.map((res) => {
    if (res !== resource) return res;

    const { relationships, ...filter } = resource;
    return filter;
  });

  return [{ ...rel, ...flattenAttributes(resource) }, filteredIncluded];
};

export const mapRelationships = (resource, included) => {
  let { relationships, ...result } = resource;

  if (resource.hasOwnProperty("attributes")) {
    result = flattenAttributes(result);
  }

  for (let key in relationships) {
    if (result.hasOwnProperty(key)) continue;

    const relData = relationships[key].data;
    let deserializedRel;

    if (relData && Array.isArray(relData)) {
      let includedRels = [];
      relData.forEach((rel) => {
        let dRel;
        [dRel, included] = deserializeIncluded(rel, included);
        if (dRel) includedRels.push(dRel);
      });

      includedRels = includedRels.map((rel) => mapRelationships(rel, included));

      if (includedRels.length) deserializedRel = includedRels;
    } else if (relData) {
      const [dRel] = deserializeIncluded(relData, included);
      if (dRel) {
        deserializedRel = mapRelationships(dRel, included);
      }
    }

    if (deserializedRel) result[key] = deserializedRel;
  }

  return result;
};
