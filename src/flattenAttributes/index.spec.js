import { flattenAttributes } from './index.js'

const resource = {
  id: 1,
  type: 'movie',
  attributes: {
    name: 'test movie',
    year: 2014
  },
  relationships: {
    actors: { data: [{ id: 1, type: 'actor' }] }
  }
};

const expectedResponse = {
  id: 1,
  type: 'movie',
  name: 'test movie',
  year: 2014,
  relationships: {
    actors: { data: [{ id: 1, type: 'actor' } ] }
  }
}

describe('flattenAttributes', () => {
  it('returns new object with flattened attributes', async () => {
    expect.assertions(2)

    const result = flattenAttributes(resource);

    expect(resource).not.toEqual(result);
    expect(result).toEqual(expectedResponse);
  })

  it('returns new array of resources with flattened attributes', async () => {
    expect.assertions(2)

    const resources = [Object.assign({}, resource), Object.assign({}, resource)];
    const result = flattenAttributes(resources);

    expect(resources).not.toEqual(result);
    expect(result).toEqual([Object.assign({}, expectedResponse), Object.assign({}, expectedResponse)])
  })

  it('handles no attributes', async () => {
    expect.assertions(1)

    const result = flattenAttributes({ id: 3, type: 'actor' });
    expect(result).toEqual({ id: 3, type: 'actor' })
  })

  it('handles empty attributes', async () => {
    expect.assertions(1)
    const result = flattenAttributes({ type: 'actor', attributes: {} });
    expect(result).toEqual({ type: 'actor' })
  })

  it('handles malformed attributes', async () => {
    expect.assertions(1)
    const result = flattenAttributes({ type: 'actor', attributes: 'malformed' });
    expect(result).toEqual({ type: 'actor' })
  })

  it('returns empty object for invalid JSON:API data types', async () => {
    expect.assertions(10)

    expect(flattenAttributes(undefined)).toEqual({});
    expect(flattenAttributes(null)).toEqual({});
    expect(flattenAttributes(true)).toEqual({});
    expect(flattenAttributes(0)).toEqual({});
    expect(flattenAttributes('string')).toEqual({});
    expect(flattenAttributes(Symbol('foo'))).toEqual({});
    expect(flattenAttributes(new Set())).toEqual({})
    expect(flattenAttributes(new WeakSet())).toEqual({})
    expect(flattenAttributes(new Map())).toEqual({})
    expect(flattenAttributes(new WeakMap())).toEqual({})
  })
})
