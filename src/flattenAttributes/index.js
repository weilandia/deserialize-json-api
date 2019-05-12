const asAttributes = ({ attributes, ...rest }) => {
  if (!attributes || attributes.constructor !== Object) return rest;
  return { ...rest, ...attributes };
};

export const flattenAttributes = data => {
  if (!data || typeof data !== 'object') return {};

  if (Array.isArray(data)) return data.map(el => asAttributes(el));
  return asAttributes(data);
}
