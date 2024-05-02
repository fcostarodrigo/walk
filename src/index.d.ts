export function walk(
  root?: string,
  listFolders?: boolean,
  walkFolder?: () => boolean,
): AsyncGenerator<string, void>;
