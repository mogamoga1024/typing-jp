const path = require('path');

module.exports = {
  mode: 'production',
  entry: './main.js',
  output: {
    publicPath: '/dist/',
    filename: 'typing-jp.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
};
