'use strict'
const path = require('path')
const {Server, config} = require('karma')

module.exports = function (
  webpackConfig,
  inputFiles = ['test/unit/**/*.test.js'],
  options) {
  let karmaConfig = {
    port: 5001,
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    basePath: process.cwd(),
    files: inputFiles,
    reporters: ['spec'],
    preprocessors: inputFiles.reduce((current, next) => {
      current[next] = ['webpack', 'sourcemap']
      return current
    }, {}),
    webpackMiddleware: {
      stats: 'errors-only',
      noInfo: true
    },
    singleRun: process.env.CI // single-run mode in CI
  }

  if (typeof options === 'object') {
    Object.assign(karmaConfig, options)
  } else if (typeof options === 'string') {
    const configPath = path.resolve(options)
    karmaConfig = config.parseConfig(configPath)
  }

  delete webpackConfig.entry
  karmaConfig.webpack = webpackConfig

  const server = new Server(karmaConfig)

  server.start()
}

