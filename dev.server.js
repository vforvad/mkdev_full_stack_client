#!/usr/bin/env node

var util = require('util');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var pkg = require('./package.json');

var port = pkg.config.devPort;
var host = pkg.config.devHost;

var configPath = process.argv[2] || './config/webpack.config';

var config = require(configPath);

console.log('Using config:', configPath);

var server = new WebpackDevServer (
  webpack(config),
  config.devServer
);

server.listen(port, host, function(err) {
  if (err) {
    console.log("Error " + err);
  }
  var url = util.format('http://%s:%d', host, port);

  console.log('Listening at %s', url);
});
