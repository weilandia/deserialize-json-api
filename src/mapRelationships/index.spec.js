import { mapRelationships } from "./index.js";

const resource = {
  id: 1,
  type: "movie",
  attributes: {
    name: "test movie",
    year: 2014,
    locations: ["SF"],
  },
  relationships: {
    actors: {
      data: [
        { id: 1, type: "actor" },
        { id: 2, type: "actor" },
      ],
    },
    awards: {
      data: [{ id: 4, type: "award" }],
    },
    locations: {
      data: [{ id: 1, type: "location" }],
    },
    name: {
      data: { id: 1, type: "name" },
    },
    studio: {
      data: { id: 1, type: "studio" },
    },
  },
};

const included = [
  {
    type: "actor",
    id: 1,
    attributes: { name: "John", age: 80 },
    relationships: {
      awards: {
        data: [{ id: 4, type: "award" }],
      },
    },
  },
  {
    type: "actor",
    id: 2,
    attributes: { name: "Jenn", age: 40 },
  },
  {
    type: "award",
    id: 4,
    attributes: { type: "Oscar", category: "Best director" },
  },
  {
    type: "location",
    id: 1,
    name: "LA",
  },
  {
    type: "name",
    id: 1,
    title: "Stargate",
  },
  {
    type: "studio",
    id: 1,
    title: "Studio R",
    relationships: {
      awards: {
        data: [{ id: 4, type: "award" }],
      },
    },
  },
];

const expectedResponse = {
  id: 1,
  type: "movie",
  name: "test movie",
  year: 2014,
  locations: ["SF"],
  actors: [
    {
      type: "actor",
      id: 1,
      name: "John",
      age: 80,
      awards: [
        {
          type: "award",
          id: 4,
          type: "Oscar",
          category: "Best director",
        },
      ],
    },
    {
      type: "actor",
      id: 2,
      name: "Jenn",
      age: 40,
    },
  ],
  awards: [
    {
      type: "award",
      id: 4,
      type: "Oscar",
      category: "Best director",
    },
  ],
  studio: {
    type: "studio",
    id: 1,
    title: "Studio R",
    awards: [
      {
        type: "award",
        id: 4,
        type: "Oscar",
        category: "Best director",
      },
    ],
  },
};

const circularReference = {
  data: {
    id: 1,
    type: "profile",
    relationships: {
      movies: {
        data: [
          {
            id: "1046",
            type: "movie",
          },
          {
            id: "1000",
            type: "movie",
          },
        ],
      },
    },
  },
  included: [
    {
      id: "1046",
      type: "movie",
      relationships: {
        actors: {
          data: [
            {
              id: "93",
              type: "actor",
            },
          ],
        },
      },
    },
    {
      id: "1000",
      type: "movie",
      relationships: {
        actors: {
          data: [
            {
              id: "93",
              type: "actor",
            },
          ],
        },
      },
    },
    {
      id: "93",
      type: "actor",
      relationships: {
        movies: {
          data: [
            {
              id: "1046",
              type: "movie",
            },
            {
              id: "1000",
              type: "movie",
            },
          ],
        },
      },
    },
  ],
};

const circularReferenceExpectedResponse = {
  id: 1,
  type: "profile",
  movies: [
    {
      id: "1046",
      type: "movie",
      actors: [
        {
          id: "93",
          type: "actor",
          movies: [
            { id: "1046", type: "movie" },
            { id: "1000", type: "movie" },
          ],
        },
      ],
    },
    {
      id: "1000",
      type: "movie",
      actors: [
        {
          id: "93",
          type: "actor",
          movies: [
            { id: "1046", type: "movie" },
            { id: "1000", type: "movie" },
          ],
        },
      ],
    },
  ],
};

describe("mapRelationships", () => {
  it("properly maps relationships", async () => {
    expect.assertions(2);

    const result = mapRelationships(resource, included);

    expect(resource).not.toEqual(result);
    expect(result).toEqual(expectedResponse);
  });

  it("properly maps relationships with circular references", async () => {
    expect.assertions(2);

    const { data: resource, included } = circularReference;

    const result = mapRelationships(resource, included);

    expect(resource).not.toEqual(result);
    expect(result).toEqual(circularReferenceExpectedResponse);
  });

  it("does not map unincluded relationships", async () => {
    expect.assertions(2);

    const singleIncluded = [
      {
        type: "actor",
        id: 1,
        attributes: { name: "John", age: 80 },
      },
    ];

    const result = mapRelationships(resource, singleIncluded);
    const resp = {
      id: 1,
      type: "movie",
      name: "test movie",
      year: 2014,
      locations: ["SF"],
      actors: [{ id: 1, type: "actor", name: "John", age: 80 }],
    };

    expect(resource).not.toEqual(result);
    expect(result).toEqual(resp);
  });
});
