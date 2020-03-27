import { deserialize } from './index.js'

const resp = {
  data: {
    id: 1,
    type: 'movie',
    attributes: {
      name: 'test movie',
      year: 2014,
      locations: ['SF']
    },
    relationships: {
      actors: {
        data: [
          { id: 1, type: 'actor' },
          { id: 2, type: 'actor' }
        ]
      },
      awards: {
        data: [
          {
            id: 4,
            type: 'award',
            links: {
              self: '/awards/1',
              related: '/awards/1/movie'
            },
            meta: {
              verified: false
            }
          }
        ]
      },
      locations: {
        data: [
          { id: 1, type: 'location' }
        ]
      },
      name: {
        data: { id: 1, type: 'name' }
      }
    },
    links: {
      self: '/movies/1'
    },
    meta: {
      saved: false
    }
  },
  included: [
    {
      type: 'actor',
      id: 1,
      attributes: { name: 'John', age: 80 }
    },
    {
      type: 'actor',
      id: 2,
      attributes: { name: 'Jenn', age: 40 }
    },
    {
      type: 'award',
      id: 4,
      attributes: { type: 'Oscar', category: 'Best director'}
    },
    {
      type: 'location',
      id: 1,
      name: 'LA'
    },
    {
      type: 'name',
      id: 1,
      title: 'Stargate'
    }
  ],
  meta: {
    copyright: 'Copyright 2015 Example Corp.'
  },
  errors: [
    { title: 'Error!' }
  ]
};

const expectedResponse = {
  data: {
    id: 1,
    type: 'movie',
    links: { self: '/movies/1' },
    meta: { saved: false },
    name: 'test movie',
    year: 2014,
    locations: [ 'SF' ],
    actors: [
      { id: 1, type: 'actor', name: 'John', age: 80 },
      { id: 2, type: 'actor', name: 'Jenn', age: 40 }
    ],
    awards: [
      {
        id: 4,
        type: 'Oscar',
        links: { self: '/awards/1', related: '/awards/1/movie' },
        meta: { verified: false },
        category: 'Best director'
      }
    ]
  },
  meta: { copyright: 'Copyright 2015 Example Corp.' },
  errors: [ { title: 'Error!' } ]
}

const respWithSeparators = {
  data: {
    id: 1,
    type: 'user',
    attributes: {
      'first-name': 'Foo',
      'last-name': 'Bar',
      locations: ['SF']
    },
    relationships: {
      actors: {
        data: [
          { id: 1, type: 'actor' },
          { id: 2, type: 'actor' }
        ]
      },
      awards: {
        data: [
          {
            id: 4,
            type: 'award',
            links: {
              self: '/awards/1',
              related: '/awards/1/movie',
            },
            meta: {
              verified: false
            }
          }
        ]
      },
      locations: {
        data: [
          { id: 1, type: 'location' }
        ]
      },
      name: {
        data: { id: 1, type: 'name' }
      }
    },
    links: {
      self: '/movies/1'
    },
    meta: {
      saved: false
    }
  },
  included: [
    {
      type: 'actor',
      id: 1,
      attributes: { name: 'John', age: 80, 'is-super-hero': true }
    },
    {
      type: 'actor',
      id: 2,
      attributes: { name: 'Jenn', age: 40, 'is-super-hero': false }
    },
    {
      type: 'award',
      id: 4,
      attributes: { type: 'Oscar', category: 'Best director'}
    },
    {
      type: 'location',
      id: 1,
      name: 'LA'
    },
  ],
  meta: {
    copyright: 'Copyright 2015 Example Corp.'
  },
  errors: [
    { title: 'Error!' }
  ]
}

const expectRespWithSeparators = {
  data: {
    id: 1,
    type: 'user',
    links: { self: '/movies/1' },
    meta: { saved: false },
    firstName: 'Foo',
    lastName: 'Bar',
    locations: [ 'SF' ],
    actors: [
      { id: 1, type: 'actor', name: 'John', age: 80, isSuperHero: true },
      { id: 2, type: 'actor', name: 'Jenn', age: 40, isSuperHero: false }
    ],
    awards: [
      {
        id: 4,
        type: 'Oscar',
        links: { self: '/awards/1', related: '/awards/1/movie' },
        meta: { verified: false },
        category: 'Best director'
      }
    ]
  },
  meta: { copyright: 'Copyright 2015 Example Corp.' },
  errors: [ { title: 'Error!' } ]
}

const util = require('util')

describe('deserialize', () => {
  it('deserializes single resource', async () => {
    expect.assertions(2)

    const result = deserialize(resp);

    expect(resp).not.toEqual(result);
    expect(result).toEqual(expectedResponse);
  })

  it('deserializes an array of resources', async () => {
    expect.assertions(3)

    const { data, ...rest } = resp;
    const arrayResp = { data: [data, data, data], ...rest };

    const result = deserialize(arrayResp);

    const { data: expectedData, ...expectedRest } = expectedResponse;
    const expectedArrayResponse = { data: [expectedData, expectedData, expectedData], ...expectedRest };

    expect(resp).not.toEqual(result);
    expect(resp).toEqual(resp);
    expect(result).toEqual(expectedArrayResponse);
  })
  
  it('deserializes and camel case the object keys', () => {
    const result = deserialize(respWithSeparators, {setKeyTransform: true});
    
    expect(result).toEqual(expectRespWithSeparators);
  })
});
