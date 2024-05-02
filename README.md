# Walk

Simple node module to transverse files recursively.

## Installation

```bash
npm install @fcostarodrigo/walk
```

## Usage

```javascript
import { walk } from "@fcostarodrigo/walk";

for await (const file of walk()) {
  console.log(file);
}
```

## Documentation

```javascript
walk(root, lisFolders, walkFolder);
```

`root`: Optional folder to transverse. Defaults to `.`.

`includeFolders`: Optional flag to list folders. Defaults to `false`.

`walkFolder`: Optional callback to decide if a folder is going to be transversed.

The function is an async generator that yields the paths of the files recursively.

[Changelog](CHANGELOG.md)

## License

[MIT License](http://www.opensource.org/licenses/mit-license.php)
