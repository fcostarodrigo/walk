/** @typedef {{promises: { readdir: jest.Mock}}} MockedFs */

const fs = /** @type {MockedFs} */ (/** @type {unknown} */ (require("fs")));
const walk = require("./walk");

jest.mock("fs", () => ({ promises: { readdir: jest.fn() } }));

describe("walk", () => {
  it("should throw errors thrown by the file system", () => {
    const error = new Error();
    fs.promises.readdir.mockRejectedValueOnce(error);
    return expect(walk().next()).rejects.toBe(error);
  });
});
