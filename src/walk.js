const fs = require("fs");
const path = require("path");

/**
 * Transverse files recursively
 *
 * @param {string} root
 * @param {boolean} listFolders
 * @param {(folderPath: string) => boolean} walkFolder
 * @param {typeof fs.promises.readdir} readdir
 * @returns {AsyncIterableIterator<string>}
 */
async function* walk(
  root = ".",
  listFolders = false,
  walkFolder = () => true,
  readdir = fs.promises.readdir,
) {
  try {
    const files = await readdir(root);

    if (listFolders) {
      yield root;
    }

    if (walkFolder(root)) {
      for (const file of files) {
        yield* walk(path.join(root, file), listFolders, walkFolder, readdir);
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

module.exports = walk;
