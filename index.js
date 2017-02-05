const path = require('path')
const {Server, config} = require('karma')

module.exports = function (webpackConfig, options) {
  const configFile = options.karma || 'karma.config.js'
  const configPath = path.resolve(configFile)
  const karmaConfig = config.parseConfig(configPath)

  delete webpackConfig.entry
  karmaConfig.webpack = webpackConfig

  const server = new Server(karmaConfig)

  server.start()
}

