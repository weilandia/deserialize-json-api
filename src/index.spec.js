import { deserialize } from "./index.js";

describe("entry", () => {
  it("exposes deserialize", async () => {
    expect.assertions(1);

    expect(typeof deserialize).toEqual("function");
  });
});
