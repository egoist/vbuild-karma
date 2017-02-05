module.exports = cfg => {
  const inputFiles = ['example/test.js']

  cfg.set({
    port: 5001,
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    basePath: process.cwd(),
    files: inputFiles,
    preprocessors: inputFiles.reduce((current, next) => {
      current[next] = ['webpack', 'sourcemap']
      return current
    }, {}),
    webpackMiddleware: {
      stats: 'errors-only'
    },
    singleRun: process.env.CI // single-run mode in CI
  })
}
