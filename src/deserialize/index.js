import { flattenAttributes } from '../flattenAttributes'
import { mapRelationships } from '../mapRelationships'

const deserializeArray = (obj) => {
  for (let value of await obj.data) {
    if (obj.included) value = await linkRelationships(value, obj.included)
    if (value.attributes) value = await deattribute(value)
    obj.data[obj.data.indexOf(value)] = value
  }
  return obj
}

const deserialize = ({ data = {}, included }) => {
  let result;

  if (Array.isArray(data) {
    return data.map(resource => mapRelationships(resource, included));
  }

  return mapRelationships(data, included)
}
