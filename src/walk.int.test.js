import { join } from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import { describe, beforeAll, it, expect } from "vitest";
import { walk } from "./walk.js";

describe("walk", () => {
  beforeAll(() => {
    process.chdir(join(fileURLToPath(import.meta.url), "..", "test"));
  });

  it("should list files recursively", async () => {
    const files = [];

    for await (const file of walk()) {
      files.push(file);
    }

    const expectedFiles = [
      join("foods", "egg"),
      join("foods", "pizza"),
      join("foods", "fruits", "banana"),
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
      join("foods"),
      join("foods", "egg"),
      join("foods", "pizza"),
      join("foods", "fruits"),
      join("foods", "fruits", "banana"),
    ].sort();

    expect(files.sort()).toEqual(expectedFiles);
  });

  it("should not transverse some folders", async () => {
    const walkFolder = (folderPath) => folderPath !== join("foods", "fruits");

    const files = [];
    for await (const file of walk(undefined, undefined, walkFolder)) {
      files.push(file);
    }

    const expectedFiles = [join("foods", "egg"), join("foods", "pizza")].sort();

    expect(files.sort()).toEqual(expectedFiles);
  });

  it("should yield the first argument when it is a file", async () => {
    const filePath = join("foods", "egg");

    const files = [];
    for await (const file of walk(filePath, true)) {
      files.push(file);
    }

    expect(files).toEqual([filePath]);
  });
});
