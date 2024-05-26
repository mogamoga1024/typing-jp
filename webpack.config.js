const path = require('path');

module.exports = {
  mode: 'production',
  entry: './cdn.js',
  output: {
    publicPath: '/dist/',
    filename: 'cdn/typing-jp.js'
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname),
      watch: {
        ignored: ['**/.git'],
      },
    },
    hot: true,
    open: true,
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
  performance: {
    maxEntrypointSize: 600_000,
    maxAssetSize: 600_000,
  },
};
