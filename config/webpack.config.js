var path = require('path');
var util = require('util');
var webpack = require('webpack');
var pack = require('../package.json');

module.exports = {
  entry: {
    app: [
      './src/index.js',
      'webpack/hot/dev-server',
      util.format(
        'webpack-dev-server/client?http://%s:%d',
        pack.config.devHost,
        pack.config.devPort
      )
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.EnvironmentPlugin("NODE_ENV")
  ],
  module: {
    loaders: [
    // js
      {
        test: /\.(jsx|js)$/,
        loader: 'babel-loader',
        exclude:/node_modules/
      },
      {
        test: /\.html?$/,
        loader: 'file-loader'
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx'],
    modulesDirectories: [
      'node_modules',
      '../src'
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../', 'src'),
    noInfo: true,
    inline: true,
    stats: { colors: true },
    historyApiFallback: true
  }
}
