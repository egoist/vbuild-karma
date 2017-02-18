const karma = require('../')

module.exports = {
  vendor: false,
  minimize: false,
  run(config) {
    karma(config, ['example/test.js'])
  }
}
