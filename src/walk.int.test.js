const path = require("path");
const walk = require("./walk");

describe("walk", () => {
  beforeAll(() => {
    process.chdir(path.join(__dirname, "test"));
  });

  it("should list files recursively", async () => {
    const files = [];
    for await (const file of walk()) {
      files.push(file);
    }

    const expectedFiles = [
      path.join("foods", "egg"),
      path.join("foods", "pizza"),
      path.join("foods", "fruits", "banana"),
    ].sort();

    expect(files.sort()).toEqual(expectedFiles);
  });

  it("should list files with folders recursively", async () => {
    const files = [];
    for await (const file of walk(undefined, true)) {
      files.push(file);
    }

    const expectedFiles = [
      ".",
      path.join("foods"),
      path.join("foods", "egg"),
      path.join("foods", "pizza"),
      path.join("foods", "fruits"),
      path.join("foods", "fruits", "banana"),
    ].sort();

    expect(files.sort()).toEqual(expectedFiles);
  });

  it("should not transverse some folders", async () => {
    const walkFolder = (folderPath) =>
      folderPath !== path.join("foods", "fruits");

    const files = [];
    for await (const file of walk(undefined, undefined, walkFolder)) {
      files.push(file);
    }

    const expectedFiles = [
      path.join("foods", "egg"),
      path.join("foods", "pizza"),
    ].sort();

    expect(files.sort()).toEqual(expectedFiles);
  });

  it("should yield the first argument when it is a file", async () => {
    const filePath = path.join("foods", "egg");

    const files = [];
    for await (const file of walk(filePath, true)) {
      files.push(file);
    }

    expect(files).toEqual([filePath]);
  });
});
