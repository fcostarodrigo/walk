const fs = require("fs");
const walk = require("./walk");

jest.mock("fs", () => ({ promises: { readdir: jest.fn() } }));

describe("walk", () => {
  it("should throw errors thrown by the file system", () => {
    const error = new Error();
    fs.promises.readdir.mockRejectedValueOnce(error);
    const iterator = walk();
    return expect(iterator.next()).rejects.toBe(error);
  });
});
