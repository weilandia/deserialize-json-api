// index.js

const camelCase = (str) => {
  return str.replace(/[-_](.)/g, (_, char) => char.toUpperCase());
};

const transformKeys = (obj, transformFunc) => {
  if (Array.isArray(obj)) {
    return obj.map(item => transformKeys(item, transformFunc));
  } else if (obj && typeof obj === 'object') {
    return Object.keys(obj).reduce((acc, key) => {
      const transformedKey = transformFunc ? transformFunc(key) : key;
      acc[transformedKey] = transformKeys(obj[key], transformFunc);
      return acc;
    }, {});
  }
  return obj;
};

const findIncluded = (included, type, id) => {
  return included.find(item => item.type === type && item.id === id);
};

const deserializeResource = (resource, included, transformFunc) => {
  if (!resource) return null;

  const { id, type, attributes = {}, relationships = {}, links, meta } = resource;

  const deserialized = {
    id,
    type,
    ...transformKeys(attributes, transformFunc),
    links,
    meta,
  };

  Object.keys(relationships).forEach(key => {
    const relationship = relationships[key].data;
    if (Array.isArray(relationship)) {
      deserialized[transformFunc ? transformFunc(key) : key] = relationship.map(rel => {
        const includedResource = findIncluded(included, rel.type, rel.id);
        return {
          ...deserializeResource(includedResource, included, transformFunc),
          id: rel.id,
          type: rel.type,
          links: rel.links,
          meta: rel.meta,
        };
      });
    } else {
      const includedResource = findIncluded(included, relationship.type, relationship.id);
      deserialized[transformFunc ? transformFunc(key) : key] = {
        ...deserializeResource(includedResource, included, transformFunc),
        id: relationship.id,
        type: relationship.type,
        links: relationship.links,
        meta: relationship.meta,
      };
    }
  });

  return deserialized;
};

const removeUndefinedProperties = (obj) => {
  if (Array.isArray(obj)) {
    return obj.map(removeUndefinedProperties);
  } else if (obj !== null && typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj)
        .filter(([_, v]) => v !== undefined)
        .map(([k, v]) => [k, removeUndefinedProperties(v)])
    );
  }
  return obj;
};

const deserialize = (response, options = {}) => {
  if (!response.data) return response;

  const transformFunc = options.transformKeys === 'camelCase' ? camelCase : null;

  const { included, ...rest } = response;
  let data;

  if (Array.isArray(response.data)) {
    data = {
      ...transformKeys(rest, transformFunc),
      data: response.data.map(resource => deserializeResource(resource, included, transformFunc)),
    };
  } else {
    data = {
      ...transformKeys(rest, transformFunc),
      data: deserializeResource(response.data, included, transformFunc),
    };
  }

  return removeUndefinedProperties(data);
};

module.exports = { deserialize };
