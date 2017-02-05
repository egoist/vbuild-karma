# vue-cli-karma

[![NPM version](https://img.shields.io/npm/v/vue-cli-karma.svg?style=flat)](https://npmjs.com/package/vue-cli-karma) [![NPM downloads](https://img.shields.io/npm/dm/vue-cli-karma.svg?style=flat)](https://npmjs.com/package/vue-cli-karma) [![Build Status](https://img.shields.io/circleci/project/egoist/vue-cli-karma/master.svg?style=flat)](https://circleci.com/gh/egoist/vue-cli-karma) [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

## Install

This module requires `vue-cli` to be installed as devDependency.

```bash
yarn add vue-cli vue-cli-karma --dev
```

## Usage

```js
// vue-cli config file: vue.karma.js
const karma = require('vue-cli-karma')

module.exports = {
  run: karma
}
```

By default it loads `karma.config.js` in current working directory. You can set `karma` option to another path:

```
module.exports = {
  karma: './path/to/karma.config.js'
}
```

Check out the example [karma.config.js](/example/karma.config.js), here you need to install `karma-launcher-chrome` `karma-jasmine` `jasmine-core` as well:

```bash
yarn add karma-launcher-phantomjs karma-jasmine jasmine-core --dev
```

**Configure npm scripts**

```js
{
  "scripts": {
    "test": "vue build --config vue.karma.js"
  }
}
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**vue-cli-karma** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/vue-cli-karma/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@egoist](https://github.com/egoist) · Twitter [@rem_rin_rin](https://twitter.com/rem_rin_rin)
