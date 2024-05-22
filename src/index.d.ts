export function walk(
  root?: string,
  listFolders?: boolean,
  walkFolder?: (folder: string) => boolean,
): AsyncGenerator<string, void>;
