import fs from "node:fs";
import path from "node:path";

export async function* walk(root = ".", listFolders = false, walkFolder = () => true) {
  try {
    const files = await fs.promises.readdir(root);

    if (listFolders) {
      yield root;
    }

    if (walkFolder(root)) {
      for (const file of files) {
        yield* walk(path.join(root, file), listFolders, walkFolder);
      }
    }
  } catch (error) {
    if (error.code === "ENOTDIR") {
      yield root;
    } else {
      throw error;
    }
  }
}
