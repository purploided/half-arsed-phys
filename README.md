# half-arsed-phys
The most Half Arsed Physics game on this planet! Please bully me about this, much appreciated!

[Glowstik's Idea](https://www.youtube.com/channel/UCp-ej91goXSRy8781Xr96Yw) go subscribe to him!
# How to compile the game (electron)

``` js
npx electron-packager `${file location}` phys-ed --win32 --electron-version=17.1.1 --overwrite
```

Or.. You could also use the [already packaged thing](https://drive.google.com/file/d/1IDFImDpav3NvVjVKI0-IEbQ7A0sChcdz/view?usp=sharing), this is just for people who want to update the game. 

# How to edit the game

There are two things to keep in mind when editing the game:

1. package.json
2. main.js

## main.js

``` js
const { app, BrowserWindow } = require("electron");
const url = require("url");

function newApp() {
  mainWindow = new BrowserWindow({
    width: 1920, << You can edit this
    height: 1080, << You can edit this
    icon: __dirname + './addatives/physed-logo.png' << You can edit this
  });
  mainWindow.loadURL(`file://${__dirname}/index.html`);
}

app.on("ready", newApp);
```

## package.json

```js
{
  "name": "phys-ed", << You can edit this
  "version": "1.0.0", << You can edit this
  "description": "Half arsed physics simulator", << You can edit this
  "main": "main.js", << You can edit this
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "NicohlasDev", << You CAN'T edit this
  "license": "ISC", << You CAN'T edit this
  "devDependencies": {
    "electron-packager": "^15.4.0"
  },
  "dependencies": {
    "balanced-match": "^1.0.2",
    "at-least-node": "^1.0.0",
    "asar": "^3.1.0",
    "author-regex": "^1.0.0",
    "base64-js": "^1.5.1",
    "brace-expansion": "^1.1.11",
    "boolean": "^3.2.0",
    "bluebird": "^3.7.2",
    "buffer-alloc-unsafe": "^1.1.0",
    "buffer-crc32": "^0.2.13",
    "buffer-fill": "^1.0.0",
    "buffer-alloc": "^1.2.0",
    "cacheable-request": "^6.1.0",
    "chromium-pickle-js": "^0.2.0",
    "clone-response": "^1.0.2",
    "compare-version": "^0.1.2",
    "commander": "^5.1.0",
    "concat-map": "^0.0.1",
    "cross-spawn": "^7.0.3",
    "config-chain": "^1.1.13",
    "cross-spawn-windows-exe": "^1.2.0",
    "decompress-response": "^3.3.0",
    "debug": "^4.3.3",
    "define-properties": "^1.1.3",
    "defer-to-connect": "^1.1.3",
    "detect-node": "^2.1.0",
    "duplexer3": "^0.1.4",
    "electron-notarize": "^1.1.1",
    "end-of-stream": "^1.4.4",
    "electron-osx-sign": "^0.5.0",
    "encodeurl": "^1.0.2",
    "env-paths": "^2.2.1",
    "error-ex": "^1.3.2",
    "es6-error": "^4.1.1",
    "escape-string-regexp": "^4.0.0",
    "extract-zip": "^2.0.1",
    "fd-slicer": "^1.1.0",
    "filename-reserved-regex": "^2.0.0",
    "find-up": "^2.1.0",
    "filenamify": "^4.3.0",
    "flora-colossus": "^1.0.1",
    "galactus": "^0.2.1",
    "get-package-info": "^1.0.0",
    "fs-extra": "^9.1.0",
    "glob": "^7.2.0",
    "get-stream": "^5.2.0",
    "global-agent": "^3.0.0",
    "global-tunnel-ng": "^2.7.1",
    "globalthis": "^1.0.2",
    "function-bind": "^1.1.1",
    "got": "^9.6.0",
    "graceful-fs": "^4.2.9",
    "http-cache-semantics": "^4.1.0",
    "has": "^1.0.3",
    "hosted-git-info": "^2.8.9",
    "fs.realpath": "^1.0.0",
    "inflight": "^1.0.6",
    "inherits": "^2.0.4",
    "ini": "^1.3.8",
    "is-core-module": "^2.8.1",
    "is-docker": "^2.2.1",
    "isexe": "^2.0.0",
    "isbinaryfile": "^3.0.3",
    "is-wsl": "^2.2.0",
    "json-buffer": "^3.0.0",
    "json-stringify-safe": "^5.0.1",
    "is-arrayish": "^0.2.1",
    "jsonfile": "^6.1.0",
    "junk": "^3.1.0",
    "keyv": "^3.1.0",
    "load-json-file": "^2.0.0",
    "locate-path": "^2.0.0",
    "lodash": "^4.17.21",
    "lodash.get": "^4.4.2",
    "lru-cache": "^6.0.0",
    "lowercase-keys": "^1.0.1",
    "matcher": "^3.0.0",
    "mimic-response": "^1.0.1",
    "minimatch": "^3.1.2",
    "minimist": "^1.2.5",
    "ms": "^2.1.2",
    "normalize-package-data": "^2.5.0",
    "normalize-url": "^4.5.1",
    "npm-conf": "^1.1.3",
    "object-keys": "^1.1.1",
    "once": "^1.4.0",
    "p-cancelable": "^1.1.0",
    "p-locate": "^2.0.0",
    "p-limit": "^1.3.0",
    "p-try": "^1.0.0",
    "parse-author": "^2.0.0",
    "path-exists": "^3.0.0",
    "parse-json": "^2.2.0",
    "path-is-absolute": "^1.0.1",
    "path-parse": "^1.0.7",
    "path-key": "^3.1.1",
    "path-type": "^2.0.0",
    "pend": "^1.2.0",
    "pify": "^3.0.0",
    "prepend-http": "^2.0.0",
    "plist": "^3.0.4",
    "progress": "^2.0.3",
    "pump": "^3.0.0",
    "proto-list": "^1.2.4",
    "rcedit": "^3.0.1",
    "read-pkg": "^2.0.0",
    "resolve": "^1.22.0",
    "read-pkg-up": "^2.0.0",
    "responselike": "^1.0.2",
    "roarr": "^2.15.4",
    "semver": "^7.3.5",
    "semver-compare": "^1.0.0",
    "serialize-error": "^7.0.1",
    "shebang-command": "^2.0.0",
    "shebang-regex": "^3.0.0",
    "spdx-correct": "^3.1.1",
    "spdx-exceptions": "^2.3.0",
    "spdx-expression-parse": "^3.0.1",
    "sprintf-js": "^1.1.2",
    "spdx-license-ids": "^3.0.11",
    "strip-outer": "^1.0.1",
    "strip-bom": "^3.0.0",
    "supports-preserve-symlinks-flag": "^1.0.0",
    "to-readable-stream": "^1.0.0",
    "sumchecker": "^3.0.1",
    "trim-repeated": "^1.0.0",
    "tunnel": "^0.0.6",
    "type-fest": "^0.13.1",
    "universalify": "^2.0.0",
    "wrappy": "^1.0.2",
    "which": "^2.0.2",
    "url-parse-lax": "^3.0.0",
    "xmlbuilder": "^9.0.7",
    "validate-npm-package-license": "^3.0.4",
    "yallist": "^4.0.0",
    "yargs-parser": "^20.2.9",
    "yauzl": "^2.10.0"
  }
}
```

# Extras

[LICENSE](LICENSE.md)

[README](README.md)
