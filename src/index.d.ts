export function* walk(
  root?: string,
  listFolders?: boolean,
  walkFolder?: () => boolean,
): AsyncIterableIterator<string>;
