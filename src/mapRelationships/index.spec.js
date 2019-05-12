import { mapRelationships } from './index.js'

const resource = {
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
        { id: 4, type: 'award' }
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
  }
};

const included = [
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
];

const expectedResponse = {
  id: 1,
  type: 'movie',
  name: 'test movie',
  year: 2014,
  locations: ['SF'],
  actors: [
    {
      type: 'actor',
      id: 1,
      name: 'John',
      age: 80
    },
    {
      type: 'actor',
      id: 2,
      name: 'Jenn',
      age: 40
    }
  ],
  awards: [
    {
      type: 'award',
      id: 4,
      type: 'Oscar',
      category: 'Best director'
    }
  ]
}

describe('mapRelationships', () => {
  it('properly maps relationships', async () => {
    expect.assertions(2)

    const result = mapRelationships(resource, included);

    expect(resource).not.toEqual(result);
    expect(result).toEqual(expectedResponse);
  })
});
