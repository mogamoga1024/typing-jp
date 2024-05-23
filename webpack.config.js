const path = require('path');

module.exports = {
  mode: 'production',
  entry: './cdn.js',
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
