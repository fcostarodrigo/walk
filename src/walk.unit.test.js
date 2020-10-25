/** @typedef {{promises: { readdir: jest.Mock}}} MockedFs */

const fs = require("fs").promises;
const walk = require("./walk");

const mockReaddir = /** @type {jest.MockedFunction<typeof fs.readdir>} */ (fs.readdir);

jest.mock("fs", () => ({ promises: { readdir: jest.fn() } }));

describe("walk", () => {
  it("should throw errors thrown by the file system", () => {
    const error = new Error();
    mockReaddir.mockRejectedValueOnce(error);
    return expect(walk().next()).rejects.toBe(error);
  });
});
