const path = require("path");
const walk = require("./walk");

const testPath = path.join(__dirname, "test");

describe("walk", () => {
  it("should list files recursively", async () => {
    const expectedFiles = [
      path.resolve(testPath, "folderA", "folderB", "fileB"),
      path.resolve(testPath, "folderA", "fileC"),
      path.resolve(testPath, "folderA", "fileA"),
    ];

    for await (const file of walk(testPath)) {
      expect(file).toBe(expectedFiles.pop());
    }
  });

  it("should list files with folders recursively", async () => {
    const expectedFiles = [
      path.resolve(testPath, "folderA", "folderB", "fileB"),
      path.resolve(testPath, "folderA", "folderB"),
      path.resolve(testPath, "folderA", "fileC"),
      path.resolve(testPath, "folderA", "fileA"),
      path.resolve(testPath, "folderA"),
      path.resolve(testPath),
    ];

    for await (const file of walk(testPath, true)) {
      expect(file).toBe(expectedFiles.pop());
    }
  });

  it("should yield the first argument when it is a file", async () => {
    const filePath = path.resolve(testPath, "folderA", "fileA");

    for await (const file of walk(filePath, true)) {
      expect(file).toBe(filePath);
    }
  });
});
