# vbuild-karma

[![NPM version](https://img.shields.io/npm/v/vbuild-karma.svg?style=flat)](https://npmjs.com/package/vbuild-karma) [![NPM downloads](https://img.shields.io/npm/dm/vbuild-karma.svg?style=flat)](https://npmjs.com/package/vbuild-karma) [![Build Status](https://img.shields.io/circleci/project/egoist/vbuild-karma/master.svg?style=flat)](https://circleci.com/gh/egoist/vbuild-karma) [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

## Install

This module requires `vbuild` to be installed as devDependency.

```bash
yarn add vbuild vbuild-karma --dev
```

## Usage

```js
// config file: vbuild.karma.js
const karma = require('vbuild-karma')

module.exports = {
  // in test we don't need to split vendor code and minimize it
  vendor: false,
  minimize: false,
  // run custom build process
  run(webpackConfig) {
    karma(webpackConfig)
  }
}
```

We use `karma-phantomjs-launcher` `karma-spec-reporter` `karma-jasmine` `jasmine-core` by default.


**Configure npm scripts**

```js
{
  "scripts": {
    "test": "vbuild -c vbuild.karma.js"
  }
}
```

You can run the example by:

```bash
git clone https://github.com/egoist/vbuild-karma.git
cd vbuild-karma
yarn
yarn example
```

## API

### karma(webpackConfig, testFiles, karmaConfig)

#### webpackConfig

Final webpack config from vbuild

#### testFiles

Default: `['test/unit/**/*.test.js']`

#### karmaConfig

Type: `object` `string`

When providing an `object` as `karmaConfig`, it will be assigned to [default karma config we use](/index.js#L9).

When providing a `string` as `karmaConfig`, it will be treated as the path to karma config file, eg: `./test/unit/karma.conf.js`, and it will totally override the default karma config.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**vbuild-karma** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/vbuild-karma/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@egoist](https://github.com/egoist) · Twitter [@rem_rin_rin](https://twitter.com/rem_rin_rin)
