# WALK

[![Build Status](https://travis-ci.org/fcostarodrigo/walk.svg?branch=master)](https://travis-ci.org/fcostarodrigo/walk)
[![codecov](https://codecov.io/gh/fcostarodrigo/walk/branch/master/graph/badge.svg)](https://codecov.io/gh/fcostarodrigo/walk)

Simple node module to transverse files recursively.

## Installation

```bash
npm install @fcostarodrigo/walk
```

## Usage

```javascript
const walk = require("@fcostarodrigo/walk");

async function main() {
  for await (const file of walk()) {
    console.log(file);
  }
}

main();
```

## Documentation

```typescript
function walk(
  root?: string,
  includeFolders?: boolean,
): AsyncIterableIterator<string>;
```

`root`: Path to where the search starts. Defaults to `.`.

`includeFolders`: If paths of folders should be returned. Defaults to `false`.

The function is an async generator that yields the paths of the files recursively.

## Development

Full tests with coverage

```bash
npm test
```

Unit tests and watch for changes

```bash
npm run unit-test
```

## License

[MIT License](http://www.opensource.org/licenses/mit-license.php)
