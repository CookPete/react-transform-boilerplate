var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      include: path.join(__dirname, 'src')
    }, {
      test: /\.scss$/,
      loader: 'style!css?modules&sourceMap!sass?sourceMap',
      include: path.join(__dirname, 'src')
    }, {
      test: /normalize.css$/,
      loader: 'style?insertAt=top!css',
      include: path.join(__dirname, 'node_modules', 'normalize.css')
    }]
  }
}
