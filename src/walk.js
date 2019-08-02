const fs = require("fs");
const path = require("path");

/**
 * Transverse files recursively
 *
 * @param {string} root
 * @param {boolean} includeFolders
 * @returns {AsyncIterableIterator<string>}
 */
async function* walk(root = ".", includeFolders = false) {
  try {
    const files = await fs.promises.readdir(root);

    if (includeFolders) {
      yield root;
    }

    for (const file of files) {
      yield* walk(path.join(root, file), includeFolders);
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
