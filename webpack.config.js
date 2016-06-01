/*eslint no-var:"off" */
/*eslint object-shorthand:"off"*/
var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'index.js',
    library: 'react-redux-teleport',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
				test:   /\.css$/,
				loader: 'style-loader!css-loader?modules'
      }
    ]
  }
};
