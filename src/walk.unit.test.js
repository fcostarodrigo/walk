import fs from "node:fs";
import { vi, describe, it, expect } from "vitest";
import { walk } from "./walk.js";

vi.mock("node:fs", () => ({ default: { promises: { readdir: vi.fn() } } }));

const fsMock = vi.mocked(fs);

describe("walk", () => {
  it("should throw errors thrown by the file system", () => {
    const error = new Error("Error");

    fsMock.promises.readdir.mockRejectedValueOnce(error);

    return expect(walk().next()).rejects.toBe(error);
  });
});
