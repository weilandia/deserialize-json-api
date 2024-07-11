# 🥣 deserialize-json-api

⚠️⚠️⚠️
We no longer use this lib at [Govly](https://www.govly.com) and it is not actively maintained.
New maintainers welcome.
⚠️⚠️⚠️

Immutable json:api deserializer

- [{json:api} spec](https://jsonapi.org/) compliant
- maps included objects to resources
- does not mutate original response object

## Install

```
yarn add deserialize-json-api
```

## Usage

```js
import { deserialize } from "deserialize-json-api";

const body = {
  data: {
    id: 1,
    type: "movie",
    attributes: {
      name: "test movie",
      year: 2014,
    },
    relationships: {
      actors: {
        data: [
          { id: 1, type: "person" },
          { id: 2, type: "person" },
        ],
      },
      awards: {
        data: [
          {
            id: 4,
            type: "award",
            links: {
              self: "/awards/1",
              related: "/awards/1/movie",
            },
            meta: {
              verified: false,
            },
          },
        ],
      },
      locations: {
        data: [{ id: 1, type: "location" }],
      },
      director: {
        data: { id: 3, type: "person" },
      },
    },
    links: {
      self: "/movies/1",
    },
    meta: {
      saved: false,
    },
  },
  included: [
    {
      type: "person",
      id: 1,
      attributes: { name: "John", age: 80 },
    },
    {
      type: "person",
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
      attributes: { name: "LA" },
    },
    {
      type: "person",
      id: 3,
      attributes: { name: "Steven" },
    },
  ],
  meta: {
    copyright: "Copyright 2015 Example Corp.",
  },
  errors: [{ title: "Error!" }],
};

const deserializedData = deserialize(body);

deserializedData == {
  data: {
    id: 1,
    type: "movie",
    links: { self: "/movies/1" },
    meta: { saved: false },
    name: "test movie",
    year: 2014,
    locations: [{ id: 1, name: "LA", type: "location" }],
    director: { id: 3, type: "person", name: "Steven" },
    actors: [
      { id: 1, type: "person", name: "John", age: 80 },
      { id: 2, type: "person", name: "Jenn", age: 40 },
    ],
    awards: [
      {
        id: 4,
        type: "award",
        links: { self: "/awards/1", related: "/awards/1/movie" },
        meta: { verified: false },
        category: "Best director",
      },
    ],
  },
  meta: { copyright: "Copyright 2015 Example Corp." },
  errors: [{ title: "Error!" }],
};
```

## Options

#### camelCase

If you would like to have your object key `camelCased` you can pass an option:

```javascript
const result = deserialize(body, { transformKeys: "camelCase" });
```

Currently the package will look for `-` and `_` characters and transform it into camelCase.

```
first-name -> firstName
first_name -> firstName
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
