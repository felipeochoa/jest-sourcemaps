# jest-sourcemaps
Use Jest with sourcemaps

This package contains a few utilities to add source map support
to [`jest`](https://facebook.github.io/jest/). To use it you must:

* **install**: `npm install jest-sourcemaps`
* **override the test Environment**: Add `"testEnvironment":
  "jest-sourcemaps/lib/jsdom-env"` or `"testEnvironment":
  "jest-sourcemaps/lib/node-env"` to your *jest* config in your
  *package.json*.
* **replace babel-jest**: Use the transformer here instead by adding
  `"\\.jsx?$": "jest-sourcemaps/lib/transformer.js"` to your
  *jest.transform* config.
* **add the source-map-support hook** by either setting
  `"setupTestFrameworkScriptFile":
  "jest-sourcemaps/lib/testEnvSetup.js"` in your *jest* config, or by
  requiring the module from your existing setup file
