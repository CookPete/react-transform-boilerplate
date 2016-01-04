var webpackConfig = require('../webpack.config.dev')
webpackConfig.devtool = 'inline-source-map'

module.exports = function (config) {
  config.set({
    browsers: process.env.CONTINUOUS_INTEGRATION ? [ 'Firefox' ] : [ 'Chrome', 'PhantomJS' ],
    singleRun: true,
    frameworks: [ 'mocha', 'chai', 'phantomjs-shim' ],
    files: [
      'karma.webpack.js'
    ],
    preprocessors: {
      'karma.webpack.js': [ 'webpack', 'sourcemap' ]
    },
    reporters: [ 'mocha' ],
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  })
}
