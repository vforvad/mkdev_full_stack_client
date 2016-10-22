var path = require('path');
var util = require('util');
var webpack = require('webpack');
var pack = require('../package.json');

var DEV = process.env.NODE_ENV === 'development';

var entry = {
  app: [
    './src/index.js'
  ]
};

if (DEV) {
  entry.app.push('webpack/hot/dev-server');
  entry.app.push(util.format(
    'webpack-dev-server/client?http://%s:%d',
    pack.config.devHost,
    pack.config.devPort
  ));
}
module.exports = {
  entry: entry,
  output: {
    path: path.resolve(__dirname, '..', 'production'),
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
      '../src',
      '../src/components'
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, '..', 'src'),
    noInfo: true,
    inline: true,
    stats: { colors: true },
    historyApiFallback: true
  }
}
