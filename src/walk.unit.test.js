const walk = require("./walk");

describe("walk", () => {
  it("should throw errors thrown by the file system", () => {
    const error = new Error();
    const readdir = jest.fn().mockRejectedValueOnce(error);
    const iterator = walk(undefined, undefined, undefined, readdir);
    return expect(iterator.next()).rejects.toBe(error);
  });
});
