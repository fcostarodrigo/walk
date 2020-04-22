# Walk

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/57550a6a14ac4915a5502e0277654c0f)](https://app.codacy.com/app/fcostarodrigo/walk?utm_source=github.com&utm_medium=referral&utm_content=fcostarodrigo/walk&utm_campaign=Badge_Grade_Dashboard)
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

```javascript
walk(root, lisFolders, walkFolder, readdir);
```

`root`: Optional folder to transverse. Defaults to `.`.

`includeFolders`: Optional flag to list folders. Defaults to `false`.

`walkFolder`: Optional callback to decide if a folder is going to be transversed.

`readdir`: Optional node function override.

The function is an async generator that yields the paths of the files recursively.

## License

[MIT License](http://www.opensource.org/licenses/mit-license.php)
